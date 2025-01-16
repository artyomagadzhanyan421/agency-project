import { useMemo } from "react";

const usePricing = () => {
    const pricingData = useMemo(() => [
        {
            name: "Starter",
            subtitle: "Small Projects",
            description: "Ideal for",
            description2: "Small Businesses & Startups",
            price: 3000,
            duration: "/mo",
            features: [
                ["Basic Development", "Core Functionalities", "Standard Support"],
                ["Weekly Consulting Call", "Bi-Weekly Updates", "80 Design Hours"],
            ],
            link: "https://www.lemonsqueezy.com/",
            style: {
                main: {},
                main2: {},
                title: {},
                subtitle: {},
                description: { color: "#8b8b8b" },
                descriptionSpan: { color: "black" },
                price: {},
                buttonIconColor: "white",
            },
        },
        {
            name: "Professional",
            subtitle: "Big Projects",
            description: "Great for",
            description2: "Scaling Businesses & Ventures",
            price: 3000,
            duration: "/mo",
            features: [
                ["Advanced Development", "Full Feature Set", "24/7 Priority Support"],
                ["Daily Consulting Call", "Updates Every 2 Days", "128 Design Hours"],
            ],
            link: "https://www.lemonsqueezy.com/",
            style: {
                main: { background: "#1b1b1b" },
                main2: { background: "#323232" },
                title: { color: "white" },
                subtitle: { color: "#fbfbfb99", background: "#fbfbfb1a" },
                description: { color: "#8b8b8b" },
                descriptionSpan: { color: "white" },
                price: { color: "white" },
                buttonIconColor: "black",
            },
        },
    ], []);

    return pricingData;
};

export default usePricing;