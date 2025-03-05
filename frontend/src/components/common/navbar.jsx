import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Use RouterLink for navigation
import { Link } from 'react-scroll'; // Import Link from react-scroll for navigation
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Navbar() {
  return (
    <div className="w-[80%] flex mx-auto fixed top-5 left-0 right-0 bg-white border-2 border-blue-400 rounded-4xl z-[99] py-2">
      <div className="flex justify-between items-center w-[90%] lg:w-[85%] mx-auto">
        {/* Left: Main Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer -ml-12">
          <img src="/mainlogo.png" alt="Main Logo" className="h-[40px] lg:h-[50px]" />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-[2vw] text-base lg:text-[1.2vw]">
          <Link 
            to="about-us" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer text-black px-2 py-1 border-2 border-transparent hover:border-blue-400 hover:text-black hover:border-2 transition-all duration-100 rounded-2xl">
            About Us
          </Link>
          <Link 
            to="why-us" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer text-black px-2 py-1 border-2 border-transparent hover:border-blue-400 hover:text-black hover:border-2 transition-all duration-100 rounded-2xl">
            Why Us
          </Link>
          <Link 
            to="how-to" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer text-black px-2 py-1 border-2 border-transparent hover:border-blue-400 hover:text-black hover:border-2 transition-all duration-100 rounded-2xl">
            How to
          </Link>
          <Link 
            to="stats" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer text-black px-2 py-1 border-2 border-transparent hover:border-blue-400 hover:text-black hover:border-2 transition-all duration-100 rounded-2xl">
            Stats
          </Link>
          <Link 
            to="reviews" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer text-black px-2 py-1 border-2 border-transparent hover:border-blue-400 hover:text-black hover:border-2 transition-all duration-100 rounded-2xl">
            Reviews
          </Link>
        </div>

        {/* "Want to Try Now" Button */}
        <RouterLink 
          to="/login" 
          className="group rounded-[100px] border-2 border-blue-400 bg-white text-blue-400 p-[0.5vw] pl-[1vw] flex justify-between items-center gap-[1vw] cursor-pointer text-sm lg:text-[0.95vw] lg:gap-[0.6vw] transition-all duration-300 ease-in-out group hover:bg-blue-400 hover:text-white -mr-12">
          <span>Login</span>
          <div className="rounded-full p-[2px] transform transition-all duration-100 ease-in-out group-hover:-rotate-45">
            <ArrowForwardIcon />
          </div>
        </RouterLink>
      </div>
    </div>
  );
}
