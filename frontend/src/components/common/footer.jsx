import React from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';

export default function Footer() {
  return (
    <footer className="bg-black w-[90%] mx-auto rounded-3xl text-white py-16 px-8 mb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Brand & Social */}
        <div className="mb-8 md:mb-0 w-[30%]">
          <div className="mt-4">
            <img src="/mainlogoblack.png" alt="Main Logo" className="h-16 w-auto" />
          </div>
          <p className="mt-4 text-lg">
            Treatment is easy with our innovative medical solutions. We provide quality medicines to improve your health.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://twitter.com/">
              <XIcon className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="https://facebook.com/">
              <FacebookRoundedIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Section: Navigation */}
        <div className="mb-8 md:mb-0 w-[40%]">
          <h3 className="text-2xl font-bold mb-10 pb-2 mr-4 text-center">
            Quick Links
          </h3>
          <ul className="flex flex-wrap justify-center items-center gap-10">
            {["Home ", "About Us", "Services", "Contact US"].map((text, index) => (
              <li key={index}>
                <a
                  href={`#${text.replace(/\s/g, '').toLowerCase()}`}
                  className="text-lg font-medium px-4 py-2 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-300"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Contact & Newsletter Subscription */}
        <div className="w-[30%] text-center">
          {/* Contact Details */}
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="mb-4 text-sm">
            <p>Phone Number: +91 9876543210</p>
            <p>Email: abc@remedi.com</p>
          </div>
          {/* Newsletter Subscription */}
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="mb-4 text-sm">Subscribe to our Newsletter for the latest updates</p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="p-2 rounded-l-3xl border border-blue-400 bg-white text-blue-400 placeholder-blue-400 focus:outline-none"
              style={{ width: "70%" }}
            />
            <button
              type="submit"
              className="group bg-blue-400 hover:bg-blue-500 text-white px-4 rounded-3xl rounded-l-none transition-colors duration-300"
            >
              <ArrowForwardIcon className="transform transition-transform duration-500 ease-in-out group-hover:-rotate-45 group-active:-rotate-90" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2025 CuraLink. All rights reserved.</p>
      </div>
    </footer>
  );
}
