import React from 'react';
import TextChange from '../TextChange';
import charact from "../../assets/developer_male.png"

const Home = () => {
  return (
    <div className="text-[#132238] min-h-screen flex w-full justify-between items-start p-10 md:p-20">
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChange />
        </h1>
        <p className='text-sm md:text-2xl tracking-tight'>
        Skilled web developer with 1.5 years of hands-on experience in React.js, Node.js, Express.js, MongoDB, Redis, Docker, Tailwind CSS, and Postman. Proven ability to develop and maintain scalable, high-performance web applications. Passionate about continuous learning and innovation, eager to take on new challenges and collaborate on cutting-edge projects.
        </p>
        <a href="#Footer">
          <button className='mt-5 md:mt-10 text-[#132238] text-sm md:text-xl border-b-2 border-[#132238]  
           duration-300'>
           Contact Me
          </button>
        </a>
      </div>
      {/* Adding SVG for Home Section */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img 
          src={charact} 
          alt="Developer Illustration"
          className="w-full max-w-sm md:max-w-xl h-auto"
        />
      </div>
    </div>
  )
}

export default Home;