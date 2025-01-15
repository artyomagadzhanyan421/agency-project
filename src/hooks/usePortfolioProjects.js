import { useState } from 'react';

export const usePortfolioProjects = () => {
    const [projects] = useState([
        {
            id: 1,
            title: "Digibi",
            banner: "/portfolio/p1.png",
            background: "/portfolio/p1-1.png",
        },
        {
            id: 2,
            title: "Bonanza",
            banner: "/portfolio/p2.png",
            background: "/portfolio/p2-2.png",
        },
        {
            id: 3,
            title: "Algenius",
            banner: "/portfolio/p3.png",
            background: "/portfolio/p3-3.png",
        },
        {
            id: 4,
            title: "AWilliams",
            banner: "/portfolio/p4.png",
            background: "/portfolio/p4-4.png",
        },
        {
            id: 5,
            title: "Squash",
            banner: "/portfolio/p5.png",
            background: "/portfolio/p5-5.png",
        }
    ]);

    return projects;
};