import { useState } from 'react';

export const usePortfolioProjects = () => {
    const [projects] = useState([
        {
            id: 1,
            title: "Digibi",
            banner: "/portfolio/p1.png",
            background: "/portfolio/p1-1.png",
            backgroundColor: "#a0ff27",
            projectDesc: "We developed as a dynamic website tailored for DIGIBI, digital marketing agency. DIGIBI engages users with compelling content and interactive elements, creating an immersive experience that effectively showcases the agency’s services.",
            industry: "Marketing",
            type: "Website Development",
            year: "2024",
            preview: "https://digibi.webflow.io/"
        },
        {
            id: 2,
            title: "Bonanza",
            banner: "/portfolio/p2.png",
            background: "/portfolio/p2-2.png",
            backgroundColor: "#f1c63c",
            projectDesc: "Developing AIgenius involved creating a sophisticated website for businesses in the AI solutions market. The challenge was to blend sleek, professional design with user-friendly functionality, offer extensive customization to reflect each brand's unique identity, and incorporate intuitive navigation.",
            industry: "Artificial Intelligence",
            type: "Website Development",
            year: "2024",
            preview: "https://bonanza.framer.website/"
        },
        {
            id: 3,
            title: "Algenius",
            banner: "/portfolio/p3.png",
            background: "/portfolio/p3-3.png",
            backgroundColor: "#bc77e4",
            projectDesc: "We crafted a compelling videographer portfolio website that emphasizes visual content, making videos the focal point. The design ensures high-quality displays and an intuitive interface to showcase work effectively. Features to convert viewers into clients include seamless video presentations, captivating visuals, detailed descriptions, and clear calls-to-action. This website empowers videographers to stand out, attract dream projects, and reflect their passion and talent.",
            industry: "Portfolio",
            type: "Website Development",
            year: "2024",
            preview: "https://algenius-solutions.framer.website/"
        },
        {
            id: 4,
            title: "AWilliams",
            banner: "/portfolio/p4.png",
            background: "/portfolio/p4-4.png",
            backgroundColor: "#1b1b1b",
            projectDesc: "We developed as a dynamic website tailored for DIGIBI, digital marketing agency. DIGIBI engages users with compelling content and interactive elements, creating an immersive experience that effectively showcases the agency’s services.",
            industry: "Marketing",
            type: "Website Development",
            year: "2024",
            preview: "https://andrew-williams.framer.website/"
        },
        {
            id: 5,
            title: "Squash",
            banner: "/portfolio/p5.png",
            background: "/portfolio/p5-5.png",
            backgroundColor: "#0047ff",
            projectDesc: "We created Squash as a dynamic website solution tailored to highlight development team-building programs. Squash offers a modern, fully customizable design that enables a compelling brand narrative, creating a visually engaging experience. The website emphasizes the unique benefits of team-building initiatives, showcasing how they enhance creativity, collaboration, and overall team success. With a focus on clear and compelling content, Squash helps attract clients seeking to unlock their teams' potential, establishing a thriving online presence that resonates with the target audience.",
            industry: "Events",
            type: "Website Development",
            year: "2024",
            preview: "https://squash.framer.website/"
        }
    ]);

    return projects;
};