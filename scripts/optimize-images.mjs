import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = path.resolve("src/assets");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const MIN_SIZE_BYTES = 250 * 1024;
const MAX_DIMENSION = 2000;

const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

const optimizeImage = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(ext)) return null;

  const originalStat = await fs.stat(filePath);
  if (originalStat.size < MIN_SIZE_BYTES) return null;

  const metaReader = sharp(filePath, { failOn: "none" });
  const metadata = await metaReader.metadata();
  const width = metadata.width ?? 0;
  const height = metadata.height ?? 0;

  let transformer = sharp(filePath, { failOn: "none" }).rotate();

  if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
    transformer = transformer.resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    transformer = transformer.jpeg({
      quality: 78,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: "4:2:0",
    });
  } else if (ext === ".png") {
    // Enable palette compression for very large PNG files to reduce transfer size.
    transformer = transformer.png({
      compressionLevel: 9,
      effort: 10,
      adaptiveFiltering: true,
      palette: originalStat.size > 1024 * 1024,
      quality: 80,
      dither: 1,
    });
  }

  const tmpPath = `${filePath}.tmp`;
  await transformer.toFile(tmpPath);

  const optimizedStat = await fs.stat(tmpPath);
  const minUsefulReduction = Math.max(20 * 1024, originalStat.size * 0.03);

  if (optimizedStat.size >= originalStat.size - minUsefulReduction) {
    await fs.unlink(tmpPath);
    return null;
  }

  await fs.rename(tmpPath, filePath);

  return {
    filePath,
    before: originalStat.size,
    after: optimizedStat.size,
    saved: originalStat.size - optimizedStat.size,
    resized: width > MAX_DIMENSION || height > MAX_DIMENSION,
  };
};

const run = async () => {
  const files = await fs.readdir(ASSETS_DIR);
  const results = [];

  for (const file of files) {
    const absolutePath = path.join(ASSETS_DIR, file);
    const stat = await fs.stat(absolutePath);
    if (!stat.isFile()) continue;

    const result = await optimizeImage(absolutePath);
    if (result) results.push(result);
  }

  const totalBefore = results.reduce((sum, item) => sum + item.before, 0);
  const totalAfter = results.reduce((sum, item) => sum + item.after, 0);
  const totalSaved = results.reduce((sum, item) => sum + item.saved, 0);

  if (results.length === 0) {
    console.log("No images met optimization thresholds.");
    return;
  }

  console.log(`Optimized ${results.length} images.`);
  for (const item of results.sort((a, b) => b.saved - a.saved)) {
    const relPath = path.relative(process.cwd(), item.filePath);
    const resizeLabel = item.resized ? " (resized)" : "";
    console.log(
      `- ${relPath}${resizeLabel}: ${formatBytes(item.before)} -> ${formatBytes(item.after)} (saved ${formatBytes(item.saved)})`,
    );
  }

  console.log(`Total: ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)} (saved ${formatBytes(totalSaved)})`);
};

run().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exitCode = 1;
});
