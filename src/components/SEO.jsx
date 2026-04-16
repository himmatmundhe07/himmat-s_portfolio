import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const seoData = {
    '/': {
        title: 'Himmat Mundhe | Full Stack Developer & UI/UX Expert',
        description: 'Explore the portfolio of Himmat Mundhe (Mundhe Himmat), a Full Stack MERN Developer specializing in scalable React apps, Node.js backends, and UI/UX design.',
    },
    '/about': {
        title: 'About Himmat Mundhe | Software Engineer & CSE Student',
        description: 'Learn about Himmat Mundhe\'s background, education at Swaminarayan University, and his journey as a passionate MERN Stack Developer based in Ahmedabad, India.',
    },
    '/projects': {
        title: 'Full Stack Projects & Web Apps | Himmat Mundhe Portfolio',
        description: 'Discover production-ready web applications, UI/UX designs, and React.js projects built by Himmat Mundhe, including real-time emergency healthcare platforms.',
    },
    '/hackathons': {
        title: 'Hackathon Projects & Awards | Himmat Mundhe',
        description: 'View award-winning hackathon projects by Himmat Mundhe, showcasing innovative problem-solving in fast-paced software development and tech competitions.',
    },
    '/experience': {
        title: 'Work Experience | Freelance Developer Himmat Mundhe',
        description: 'Read about Himmat Mundhe\'s professional experience as a freelance Full Stack Developer, building secure dashboards, school portals, and custom web apps.',
    },
    '/certificates': {
        title: 'Tech Certifications & Google Cloud Badges | Himmat Mundhe',
        description: 'Explore professional certifications, Google Cloud skill badges, and verified technical credentials achieved by software developer Himmat Mundhe.',
    },
    '/skills': {
        title: 'Technical Skills (React, Node.js, MongoDB) | Himmat',
        description: 'Check out the technical toolkit of Himmat Mundhe. Expert in JavaScript, TypeScript, React.js, Express, Tailwind CSS, and Figma for UI/UX engineering.',
    },
    '/journey': {
        title: 'Educational Journey & Coding Timeline | Himmat Mundhe',
        description: 'Follow the educational and coding timeline of Himmat Mundhe, from early foundations to architecting complex full stack MERN solutions as a CSE student.',
    },
    '/contact': {
        title: 'Contact Himmat Mundhe | Hire Full Stack React Developer',
        description: 'Get in touch with Himmat Mundhe for freelance opportunities, full-time software engineering roles, or tech collaborations. Based in Ahmedabad, open to remote.',
    },
    '/designs': {
        title: 'Figma UI/UX Designs | Creative Work by Himmat Mundhe',
        description: 'Explore the creative design portfolio of Himmat Mundhe, including mobile app UI, web dashboards, and interactive user experiences designed in Figma.',
    }
};

export default function SEO() {
    const location = useLocation();
    
    // Default to the home (/) SEO data if the route is not exactly matched.
    const currentSeo = seoData[location.pathname] || seoData['/'];

    // Ensure completely strict Canonical URL structure (removes random trailing slashes if they occur)
    // Note: useLocation().pathname already implicitly drops ?query and #hash variables.
    const canonicalPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');

    return (
        <Helmet>
            <title>{currentSeo.title}</title>
            <meta name="description" content={currentSeo.description} />
            <meta property="og:title" content={currentSeo.title} />
            <meta property="og:description" content={currentSeo.description} />
            <meta property="twitter:title" content={currentSeo.title} />
            <meta property="twitter:description" content={currentSeo.description} />
            <link rel="canonical" href={`https://himmat-portfolio.vercel.app${canonicalPath}`} />
        </Helmet>
    );
}
