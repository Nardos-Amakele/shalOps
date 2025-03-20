"use client";
import Image from "next/image";
import Herosvg from "../../../public/hero.svg";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col lg:flex-row mt-[5rem] justify-between px-8 md:px-16 lg:px-24  max-w-7xl mx-auto items-center lg:items-start">
      {/* Left Side */}
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Bridging <br />
          <span className="text-black">Business & Technology</span>
        </h1>
        <p className="mt-4 font-light  text-xl">
          We create reliable business solutions tailored to your needs. By
          understanding your challenges, we build technology that streamlines
          operations, boosts growth, and drives success.
        </p>

        {/* Input and Button */}
        <div className="mt-6 flex font-light text-lg flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Type your email or Phone Number"
            className="px-4 py-3 w-full md:w-auto rounded-lg border border-gray-300 bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 scrolling-placeholder"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#160E23] text-white font-semibold rounded-lg shadow-md hover:opacity-90">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-10 lg:mt-0 lg:ml-16">
        <Image src={Herosvg} width={300} height={300} alt="Illustration" />
      </div>
    </section>
  );
};

export default Hero;
