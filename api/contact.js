const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_MS = 3000;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 4000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimitStore = globalThis.__contactRateLimitStore ?? new Map();
globalThis.__contactRateLimitStore = rateLimitStore;

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress ?? "unknown";
};

const trimToString = (value) => (typeof value === "string" ? value.trim() : "");

const parseBody = (req) => {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return req.body;
};

const isRateLimited = (ipAddress, now) => {
  const history = rateLimitStore.get(ipAddress) ?? [];
  const filteredHistory = history.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  filteredHistory.push(now);
  rateLimitStore.set(ipAddress, filteredHistory);
  return filteredHistory.length > RATE_LIMIT_MAX_REQUESTS;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }

  const allowedOrigin = process.env.CONTACT_ALLOWED_ORIGIN;
  const requestOrigin = trimToString(req.headers.origin);
  if (allowedOrigin && requestOrigin && requestOrigin !== allowedOrigin) {
    return res.status(403).json({ message: "Forbidden origin." });
  }

  const now = Date.now();
  const ipAddress = getClientIp(req);
  if (isRateLimited(ipAddress, now)) {
    return res.status(429).json({ message: "Too many attempts. Please try again later." });
  }

  const body = parseBody(req);
  if (body === null) {
    return res.status(400).json({ message: "Invalid JSON payload." });
  }

  const name = trimToString(body.name);
  const email = trimToString(body.email);
  const message = trimToString(body.message);
  const company = trimToString(body.company);
  const elapsedMs = Number(body.elapsedMs);

  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (!Number.isFinite(elapsedMs) || elapsedMs < MIN_FORM_FILL_MS) {
    return res.status(400).json({ message: "Submission was too fast. Please try again." });
  }

  if (!name || name.length > MAX_NAME_LENGTH) {
    return res.status(400).json({ message: "Please provide a valid name." });
  }

  if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email address." });
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ message: "Please provide a valid message." });
  }

  const requiredEnvVars = [
    "EMAILJS_SERVICE_ID",
    "EMAILJS_TEMPLATE_ID",
    "EMAILJS_PUBLIC_KEY",
    "EMAILJS_PRIVATE_KEY",
    "CONTACT_TO_EMAIL",
    "CONTACT_TO_NAME",
  ];

  const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);
  if (missingEnvVars.length > 0) {
    console.error("Contact API is missing required environment variables:", missingEnvVars.join(", "));
    return res.status(500).json({ message: "Contact service is not configured." });
  }

  try {
    const emailJsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        template_params: {
          from_name: name,
          from_email: email,
          message,
          to_name: process.env.CONTACT_TO_NAME,
          to_email: process.env.CONTACT_TO_EMAIL,
        },
      }),
    });

    if (!emailJsResponse.ok) {
      const errorText = await emailJsResponse.text();
      console.error("EmailJS API error:", emailJsResponse.status, errorText);
      return res.status(502).json({ 
        message: `Email Service Error: ${errorText || "Invalid IDs or configuration"}` 
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact API unexpected error:", error);
    return res.status(500).json({ message: "Unable to send message right now. Please try again later." });
  }
}
