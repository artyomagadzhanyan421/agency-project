import { useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([
        {
            id: 1,
            title: "Custom Website Development",
            description: "Web solutions designed to enhance user experience and meet specific business goals.",
            image: "/services/s1.jpg",
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "We create seamless, user-friendly mobile applications for iOS and Android.",
            image: "/services/s2.jpg",
        },
        {
            id: 3,
            title: "Support and Maintenance",
            description: "Regular updates, performance boosts, and fixes to keep your system running smoothly.",
            image: "/services/s3.jpg",
        },
    ]); 
    
    return { services, setServices };
};

export default useServices;