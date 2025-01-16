import { useState } from "react";

const useFeedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([
        {
            name: "Richard Anderson",
            message: [
                "Looks very nice 🔥",
                "You definitely nailed 💅🏻💅🏻 it with our website development. Chatting with your team was such a breeze!",
            ],
            response: "Glad you're happy with the results!",
            role: "Founder at Digibi",
            image: "/voices/img1.jpg",
        },
        {
            name: "Emma Hoffman",
            message: [
                "I loved ❤️❤️ how responsive your team was throughout the project!",
                "It really made a difference 🥳",
            ],
            response: "Happy we could help ❤️",
            role: "CTO at Squash",
            image: "/voices/img2.jpg",
        },
        {
            name: "Anna Baker",
            message: [
                "Chatting with your devs felt like talking to experts! 👑🔥",
                "It shows in the quality of your work.",
            ],
            response: "❤️ Thanks for noticing!",
            role: "VP at Algenius",
            image: "/voices/img3.jpg",
        },
        {
            name: "John Williams",
            message: ["Your support team is awesome 🙌", "Just wanted to say thanks for the quick bug fixes."],
            response: "Thanks for the shout-out! 😇",
            role: "CEO at Accurex",
            image: "/voices/img4.jpg",
        },
    ]);

    return { feedbacks };
};

export default useFeedbacks;