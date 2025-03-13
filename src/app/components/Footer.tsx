import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-200 text-black  ">
      <div className="py-6 max-w-7xl mx-auto px-20 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo */}
        <div className="text-xl font-bold text-[#563589]">ShalOps</div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-10 mt-4 md:mt-0 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Service</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Systems Development</a></li>
              <li><a href="#" className="hover:underline">App Development</a></li>
              <li><a href="#" className="hover:underline">Web Design</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Copyright */}
      <div className="text-center text-xs text-gray-600 mt-10 self-center">
        Copyright 2025 All Rights Reserved
      </div>
      <div className="text-center text-xs text-gray-600 mt-10 flex gap-4">
      <FaInstagram className="w-4 h-4" />
      <FaFacebook className="w-4 h-4" />
      <FaTwitter className="w-4 h-4" />
      </div>
      </div>
      </div>
    </footer>
  );
}
