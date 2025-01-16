import { useState } from 'react';

const useFaq = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What types of development services do you offer?",
            answer: "We provide a wide range of development services including web development, mobile app development, custom software solutions, API integration, support and maintenance.",
            isOpen: false,
        },
        {
            question: "Can you work with existing platforms?",
            answer: "Yes, we can integrate new solutions with your existing platforms or upgrade legacy systems to improve performance and functionality.",
            isOpen: false,
        },
        {
            question: "How do you ensure the quality of your projects?",
            answer: "We ensure quality through rigorous testing, code reviews, and adherence to best practices in development. Our senior developers oversee all projects to maintain high standards.",
            isOpen: false,
        },
        {
            question: "How do you handle project timelines?",
            answer: "We create detailed project timelines with clear milestones. Our project managers ensure deadlines are met by coordinating all phases of the development process.",
            isOpen: false,
        },
        {
            question: "What is your development process like?",
            answer: "Our process involves initial consultation, planning, design, development, testing, and deployment. We follow Agile methodologies to ensure flexibility and responsiveness.",
            isOpen: false,
        },
        {
            question: "How often will I receive updates on the project?",
            answer: "We provide regular updates based on the plan you choose, ranging from bi-weekly to every 2 days, ensuring you are informed about progress and any issues that arise.",
            isOpen: false,
        },
    ]);

    const toggleFaq = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) => ({
                ...faq,
                isOpen: i === index ? !faq.isOpen : faq.isOpen,
            }))
        );
    };

    return { faqs, toggleFaq };
};

export default useFaq;