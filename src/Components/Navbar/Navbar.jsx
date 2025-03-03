import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";


const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className=' text-xl flex flex-wrap justify-between md:items-center text-[#132238] px-5 pt-10 md:px-20'>
      <span className = "text-4xl mt-4 font-bold tracking-wide">Portfolio</span>
        <ul className={
            `${menu ? "block" : "hidden"}
            mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-x1 bg-opacity-30 md:border-none 
            text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>

            <a href="#About">
            <li className='transition-all duration-300 p-1 md:p-0'>
                About
            </li>
            </a>
            <a href="#Experience">
            <li className=' transition-all duration-300 p-1 md:p-0'>
                Experience
            </li>
            </a>
            <a href="#Projects">
            <li className=' transition-all duration-300 p-1 md:p-0'>
                Projects
            </li>
            </a>
            <a href="#Footer">
            <li className=' transition-all duration-300 p-1 md:p-0'>
                Contact
            </li>
            </a>
        </ul>
        {
            showMenu ? (
                <RiMenu2Line 
                    size={30} 
                    className = "md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>
                    {openMenu(!menu); setShowMenu(!showMenu);}}/>
            ):(
                <RiCloseLine size={30} className = "md:hidden absolute right-10 top-6 transition-all duration-300"
                />
            )}
    </nav>
  )
}

export default Navbar
