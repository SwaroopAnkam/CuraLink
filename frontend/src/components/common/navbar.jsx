import React from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Nav() {
  return (
    <div className="select-none w-full flex justify-center items-end sticky top-0 bg-white shadow-[0_20px_10px_#ffffff] mb-[50px] z-[99]">
      <div
        className="flex justify-between items-center border border-blue-400 rounded-[200px] p-[0.5vw] w-[95%] lg:w-[85%]"
        style={{ marginTop: "min(2vw, 50px)", height: "70%" }}
      >
        {/* Left: Main Logo */}
        <div className="ml-[2vw] h-8 lg:h-[2.5vw] flex items-center gap-2 cursor-pointer">
          <img src="/mainlogo.png" alt="Main Logo" className="h-full" />
        </div>
        {/* Navigation Links */}
        <div className="flex gap-[0.5vw] lg:gap-[2.5vw] text-base lg:text-[1.2vw]">
          {["About Us", "Why Us", "Reviews", "Stats", "FAQs"].map((text) => (
            <div
              key={text}
              className="cursor-pointer px-[10px] border-2 border-transparent hover:border-blue-400 transition-all duration-300 rounded"
            >
              {text}
            </div>
          ))}
        </div>
        {/* "Want to Try Now" Button */}
        <div className="group rounded-[100px] border-2 border-blue-400 bg-white text-blue-400 p-[0.5vw] pl-[1vw] flex justify-between items-center gap-[1vw] cursor-pointer text-sm lg:text-[0.95vw] lg:gap-[0.6vw] transition-all duration-300 ease-in-out group hover:bg-blue-400 hover:text-white">
          <span>Login</span>
          <div className="rounded-full p-[2px] transform transition-all duration-100 ease-in-out group-hover:-rotate-45">
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
