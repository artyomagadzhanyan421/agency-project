import { useState } from "react";

const useBenefits = () => {
    const [benefits, setBenefits] = useState([
        {
            id: 1,
            title: "Senior Developers",
            icon: "check",
            type: "positive", 
        },
        {
            id: 2,
            title: "Innovative Development Practices",
            icon: "check",
            type: "positive",
        },
        {
            id: 3,
            title: "Tailored Development Solutions",
            icon: "check",
            type: "positive",
        },
        {
            id: 4,
            title: "Client-Centric Approach",
            icon: "check",
            type: "positive",
        },
        {
            id: 5,
            title: "Rigorous Testing and Validation",
            icon: "check",
            type: "positive",
        },
        {
            id: 6,
            title: "Junior Developers",
            icon: "x",
            type: "negative", 
        },
        {
            id: 7,
            title: "Outdated Technologies & Approaches",
            icon: "x",
            type: "negative",
        },
        {
            id: 8,
            title: "Generic Solution or Off-the-Shelf Products",
            icon: "x",
            type: "negative",
        },
        {
            id: 9,
            title: "Agency-Centric Approach",
            icon: "x",
            type: "negative",
        },
        {
            id: 10,
            title: "Limited Testing or Inadequate Quality Control",
            icon: "x",
            type: "negative",
        },
    ]);

    return { benefits, setBenefits };
};

export default useBenefits;