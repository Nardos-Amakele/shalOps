'use client'
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-4 py-4">
        {/* Logo (Left Side) */}
        <div className="text-2xl font-bold text-primary order-1">
          <Link href="/" className="text-[#563589] font-josephin">ShalOps.</Link>
        </div>

        {/* Navigation Links - Desktop (Right Side) */}
        <ul className="hidden lg:flex space-x-6 items-center ml-auto order-2">
          <li><a href="#hero" className="text-gray-700 hover:text-[#563589] ">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-[#563589]">About Us</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-[#563589]">Services</a></li>
          <li><a href="#portfolio" className="text-gray-700 hover:text-[#563589]">Portfolio</a></li>
          <li>
            <button className="px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#160E23] text-white font-semibold rounded-lg shadow-md hover:opacity-90">
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button (Right Side) */}
        <button
          className="lg:hidden text-3xl text-black ml-auto order-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu - Shows when isOpen is true */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#f3eff9] shadow-md transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><a href="#hero" className="text-gray-700" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="text-gray-700" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="#services" className="text-gray-700" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#portfolio" className="text-gray-700" onClick={() => setIsOpen(false)}>Portfolio</a></li>
            <li>
              <button className="px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#160E23] text-white font-semibold rounded-lg shadow-md hover:opacity-90">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
