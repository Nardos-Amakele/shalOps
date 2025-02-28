import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 pt-4 pb-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">Shal<span className='text-[#894dff]'>Ops</span>.</Link>
        </div>
        <ul className="flex space-x-6 items-baseline">
          <li><a href="#hero" className="nav-btn text-gray-700 font-extralight">Home</a></li>
          <li><a href="#about" className="text-gray-700 nav-btn font-extralight">About Us</a></li>
          <li><a href="#services" className="text-gray-700 nav-btn font-extralight">Services</a></li>
          <li><a href="#portfolio" className="text-gray-700 nav-btn font-extralight">Portfolio</a></li>
          <li><a href="#testimonials" className="text-gray-700 nav-btn font-extralight">Testimonials</a></li>
          <li>        <div>
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Contact
    </span>
    <FaArrowRight className="text-white font-extralight" />
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>        </div>
</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
