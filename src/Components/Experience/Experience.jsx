import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbSql, TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import Jio from "../../assets/jioplatforms_logo.jpg";
import IASSESS from "../../assets/iassess_digital_logo.jpg";


const skills = [
  { icon: TbBrandCSharp, color: "#E34F26" },
  { icon: FaJs, color: "#F7DF1E" },
  { icon: FaReact, color: "#61DAFB" },
  { icon: AiOutlineDotNet, color: "#FF4438" },
  { icon: BiLogoJquery, color: "#F24E1E" },
  { icon: DiMsqlServer, color: "#47A248" },
  { icon: TbSql, color: "#FF4438" },
  { icon: FaCss3, color: "#1572b6" },
  { icon: FaHtml5, color: "#E34F26" },
];

const experiences = [
  {
    logo: Jio,
    title: "SDE, Jio Platforms Limited",
    duration: "Jan 2024 - current",
    description: [
      " Tech Stack: Node.js, Express.js, MongoDB (NoSQL), React.js, Tailwind, Redis, Docker",
      "Developing PanditPro, a platform streamlining the booking of pandits and pooja samagri for individuals relocating to metropolitan cities.",
      "Integrated IPinfo API to dynamically fetch users’ current locations, enabling personalized, location-based pandit recommendations.",
      "Implemented secure authentication and authorization using JWT tokens, adhering to industry standards within an MVC architecture.",
      " Developed and optimized CRUD operations for order and cart management, ensuring seamless user interactions."
    ],
  },
  {
    logo: IASSESS,
    title: " FrontEnd Developer- Intern,  IASSESS DIGITAL TECHNOLOGY (P) LTD",
    duration: "May 2021 - Sept 2021",
    description: [
      " Collaborate with designers and back-end developers to implement andimprove features",
      " Developed Responsive web pages with CSS animations by creating packages on Figma.Using Web Api(Count Api), to keep the live record of views per day",
    ],
  },
];

const Experience = () => {
  return (

    <div id="Experience" className="p-4 md:p-8 min-h-screen">

      <h2 className="text-[#09203f] text-3xl font-bold border-b-2 border-[#09203f] mb-6">
        Experience
      </h2>

        {/* Skills Section */}
        <div className="flex flex-wrap justify-center gap-8 p-10 md:p-15 ">
            {skills.map(({ icon: Icon, color }, index) => (
            <span
              key={index}
              className="flex items-center rounded-2xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/100"
            >
            <Icon color={color} size={50} />
            </span>
          ))}

        </div>

      <div className="flex justify-center gap-8">
        {/* Experience Section */}
        <div className="w-full md:w-3/5 space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex gap-6 bg-[#09203f] bg-opacity-45 shadow-lg rounded-lg p-6 items-center"
            >
              <img className="h-16 w-16 object-contain" src={exp.logo} alt="Experience Logo" />
              <div className="text-white">
                <h2 className="font-semibold">{exp.title}</h2>
                <p className="text-sm font-light">{exp.duration}</p>
                <ul className="text-sm mt-2 space-y-1">
                  {exp.description.map((desc, i) => (
                    <li key={i}>- {desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
