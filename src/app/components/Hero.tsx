"use client";
import Image from "next/image";
import Herosvg from "../../../public/hero.svg";
import Promo from "./Promo";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="flex md:h-screen flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full">
        <Promo />
        <Navbar />
      </div>
      <section className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between px-8 max-w-6xl mx-auto ">
        {/* Left Side */}
        <div className="pt-44 md:pt-0 max-w-md md:max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl text-nowrap font-bold leading-tight">
            Bridging <br />
            <span className="text-black">Business & Technology</span>
          </h1>
          <p className="mt-4 font-light text-center md:text-left tex-sm md:text-xl">
            We create reliable business solutions tailored to your needs. By
            understanding your challenges, we build technology that streamlines
            operations, boosts growth, and drives success.
          </p>

          {/* Input and Button */}
          <div className="mt-6 flex   font-light text-lg flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Type your email or Phone Number"
              className="px-4 py-3 min-w-2/3 rounded-lg border border-gray-300 bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 scrolling-placeholder"
            />
            <button className=" md:w-auto px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#160E23] text-white font-semibold rounded-lg shadow-md hover:opacity-90">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-10 lg:mt-0 lg:ml-16">
          <Image src={Herosvg} width={300} height={300} alt="Illustration" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
