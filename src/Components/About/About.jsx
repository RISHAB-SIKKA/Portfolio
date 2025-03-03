import React, { useState } from 'react';

const About = () => {
    const [selectedTitle, setSelectedTitle] = useState("");

    const titles = [
        { title: "Frontend Developer", 
          description: "Experienced in developing interactive and responsive web applications using React.js, JavaScript, HTML, and Tailwind CSS. Proficient in routing, seamlessly integrating backend services with the frontend, and building reusable components for scalability. Possesses deep knowledge of React hooks for efficient state management and component behavior." 
        },
        { title: "Backend Developer", 
          description: "Skilled in developing scalable backend solutions using Node.js, Express.js, Redis, and MongoDB within the MVC architecture. Experienced in implementing secure authentication and authorization mechanisms, optimizing database queries for performance, and managing data efficiently with Entity Framework." 
        },
        { title: "Full Stack Developer", 
          description: "Experienced in developing and maintaining MERN stack applications with a strong focus on RESTful API development, authentication, and performance optimization to ensure secure and efficient application workflows." 
        },
    ];

    return (
        <div className="min-h-screen p-8 md:p-12 lg:p-1">
            <h2 className="relative top-4 left-4 text-[#09203f] text-3xl font-bold border-b-2 border-[#09203f]">
                About
            </h2>

            <div className=' p-10 gap-8 md:p-30 flex flex-wrap justify-center'>
                <div className="bg-[#09203f] shadow-lg rounded-4xl flex flex-col md:flex-row w-full md:w-2/3 overflow-hidden p-8 md:p-12 gap-8">
                    
                    {/* Sidebar Menu */}
                    <div className="w-full md:w-1/3 text-[#132238] flex flex-col items-start space-y-6">
                        {titles.map(({ title }, index) => (
                            <button 
                                key={index} 
                                className={`rounded-lg shadow-md w-full text-left text-lg font-bold p-4 transition-all duration-300 ease-in-out transform hover:scale-105 ${selectedTitle === title ? "bg-[#373739] text-white" : "bg-[#d7d7db] text-black"}`}
                                onClick={() => setSelectedTitle(title)}
                                aria-label={`Select ${title}`}
                            >
                                {title}
                            </button>
                        ))}
                    </div>

                    {/* Description Section */}
                    <div className="w-full md:w-2/3 p-8 text-gray-900 text-lg font-medium bg-[#f5f5f5] rounded-lg shadow-md flex justify-center items-center">
                        {selectedTitle ? (
                            <p>{titles.find(item => item.title === selectedTitle)?.description}</p>
                        ) : (
                            <img 
                                src="https://via.placeholder.com/300" 
                                alt="Random Placeholder" 
                                className="w-48 h-48 object-cover rounded-lg shadow-md"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;