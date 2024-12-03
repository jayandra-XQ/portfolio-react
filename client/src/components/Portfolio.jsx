import blog from "../assets/portfolio/blog.jpg";

import yumEats from "../assets/portfolio/YumEats.png";
import realEstate from "../assets/portfolio/real-estate.png";
import ProductStore from "../assets/portfolio/ProductStore.png";
import ECommerce from "../assets/portfolio/ECommerce.png";
import ChatApp from "../assets/portfolio/ChatApp.png";


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: blog,
            demoLink: "https://blog-5aqz.onrender.com/",
            codeLink: "https://github.com/jayandra-XQ/mern-blog",
            description: "Welcome to the Full Stack MERN Blog Project!",
            stack: "Tailwind CSS, React.js, MongoDB, Node.js, Express, Redux Toolkit, Google OAuth integration",
        },
        {
            id: 2,
            src: yumEats,
            demoLink: "https://example.com/demo2",
            codeLink: "https://github.com/jayandra-XQ/yumEats",
            description: "YumEats - A React-based web application that allows users to explore variety of foods",
            stack: " React.js, Tailwind CSS",
        },
        {
            id:3,
            src: realEstate,
            demoLink: "https://mern-estate-2g6d.onrender.com/",
            codeLink: "https://github.com/jayandra-XQ/mern-estate",
            description: "Welcome to the Full Stack real-Estate Project!",
            stack: "MongoDB, Express Js, React, Node Js, JWT, Firebase, Google OAuth, and deployed on Render.",
        },
        {
            id: 4,
            src: ProductStore,
            demoLink: "https://product-store-n3ne.onrender.com/",
            codeLink: "https://github.com/jayandra-XQ/product-store",
            description: "full-stack product store web app",
            stack: "MongoDB, Express Js, React, Node Js, Zustand"
        },
        {
            id: 5,
            src: ECommerce,
            demoLink:"https://e-commerce-store-723s.onrender.com",
            codeLink: "https://github.com/jayandra-XQ/E-Commerce-Store",
            description: "full-stack ecommerce web app",
            stack: "MongoDB, Express Js, React, Node Js, Zustand, Reddis, Stripe Payments"
        },
        {
            id: 6,
            src: ChatApp,
            demoLink: "https://chat-app-m9ti.onrender.com",
            codeLink: "https://github.com/jayandra-XQ/chat-app",
            description: " full-stack chat app with Socket.io",
            stack: "React, MongoDB, Node Js,  Socket.io, tailwindCss"

        }
        // Add similar objects for other projects
    ];

    const redirectToDemo = (demoLink) => {
        window.open(demoLink, "_blank");
    };

    const redirectToCode = (codeLink) => {
        window.open(codeLink, "_blank");
    };

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10">
                    {portfolios.map(({ id, src, demoLink, codeLink, description, stack }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />

                            <div className="text-center">
                                <p className="text-lg font-semibold mt-4">{description}</p>
                                <p className="text-sm text-gray-400">
                                    <span style={{ marginRight: '0.5rem' }}>Stack:</span>
                                    {stack}
                                </p>
                            </div>

                            <div className="flex items-center justify-center">
                                <button
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                    style={{
                                        backgroundColor: '#242b24', // Green color
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px', // Rounded border
                                        cursor: 'pointer' // Change cursor to pointer on hover
                                    }}
                                    onClick={() => redirectToDemo(demoLink)}
                                >
                                    Demo
                                </button>
                                <button
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                    style={{
                                        backgroundColor: '#3d5057', // Blue color
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px', // Rounded border
                                        cursor: 'pointer' // Change cursor to pointer on hover
                                    }}
                                    onClick={() => redirectToCode(codeLink)}
                                >
                                    Code
                                </button>


                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
