import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div 
      id='Footer' 
      className='flex flex-col md:flex-row justify-between bg-[#09203f] text-white p-6 md:p-12 items-center'
    >
      {/* Contact Section */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className='text-3xl md:text-5xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-xl font-light'>Feel free to reach out!</h3>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6 mt-4 md:mt-0">
        <a 
          href="mailto:sikka.rishab@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group"
        >
          <MdOutlineEmail size={32} className="hover:text-gray-300 transition" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded-md">
            Gmail
          </span>
        </a>

        <a 
          href="https://www.linkedin.com/in/rishab-sikka-namaste-404279198/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group"
        >
          <CiLinkedin size={32} className="hover:text-blue-400 transition" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded-md">
            LinkedIn
          </span>
        </a>

        <a 
          href="https://github.com/RISHAB-SIKKA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaGithub size={32} className="hover:text-gray-400 transition" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded-md">
            GitHub
          </span>
        </a>
      </div>
    </div> 
  );
}

export default Footer;
