import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
  return (
    <>
    {/* <HiOutlineMenuAlt3 /> */}

    <nav className=" pt-4 pb-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-primary">
          <Link href="/" className='text-[#563589] font-josephin'>ShalOps.</Link>
        </div>
        <ul className="flex space-x-6 items-baseline">
          <li><a href="#hero" className="nav-btn text-gray-700 ">Home</a></li>
          <li><a href="#about" className="text-gray-700 nav-btn ">About Us</a></li>
          <li><a href="#services" className="text-gray-700 nav-btn ">Services</a></li>
          <li><a href="#portfolio" className="text-gray-700 nav-btn ">Portfolio</a></li>
          <li>        <div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#160E23] text-white font-semibold rounded-lg shadow-md hover:opacity-90">
            Contact
          </button>
 </div>
</li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
