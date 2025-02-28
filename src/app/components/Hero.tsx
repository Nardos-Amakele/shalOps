'use client'

import { RxArrowUp } from "react-icons/rx";
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative py-20 text-center overflow-hidden h-[80vh] flex flex-col justify-center items-center"
    >
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl px-4 text-center">
        <h1 className="text-7xl font-poppins font-bold text-black mb-4">
          Welcome to Shal<span className="text-[#894dff]">Ops</span>
        </h1>
        <p className="text-5xl font-bold text-[#894dff] mb-4">Your trusted partner</p>
        <p className="text-lg text-gray-700 mb-8">
          Bridging the gap between business and technology. Bring your ideas to life with us.
        </p>
      </div>
      {/* Scroll button */}
      <button
        onClick={scrollToAbout}
        className="mt-10 bg-[#894dff] text-white py-3 px-6 rounded-full flex items-center gap-2 text-lg transition"
      >
        
      </button>
    </section>
  );
};

export default Hero;
