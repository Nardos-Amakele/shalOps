import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">Shal<span className='text-[#894dff]'>Ops</span>.</Link>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="text-gray-700 hover:text-primary transition">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-primary transition">About Us</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-primary transition">Services</a></li>
          <li><a href="#portfolio" className="text-gray-700 hover:text-primary transition">Portfolio</a></li>
          <li><a href="#testimonials" className="text-gray-700 hover:text-primary transition">Testimonials</a></li>
          <li></li>
        </ul>
        <div>
        <button
      className="flex items-center bg-[#894dff] text-white px-4 py-2 rounded-lg transition hover:bg-[#7a5bb8]"
    >
      Contact
      <FaArrowRight className="ml-2" />
    </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
