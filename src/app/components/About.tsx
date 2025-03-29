"use client";

import Image from "next/image";
import Tech from "../../../public/Group 31.svg";
import Business from "../../../public/Group 32.svg";
import Gears from "../../../public/Group 33.svg";

export default function AboutUs() {
  return (
    <section
      className=" mt-24 md:mt-0  min-h-screen flex flex-col items-center px-6 md:px-52 py-10 lg:py-5  mx-auto max-w-7xl"
      id="about"
    >
      {/* <svg
        className="absolute top-[60rem] left-[40rem] -translate-x-1/2 hidden md:block w-full h-full z-0"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 402 963 C 158 754 1445 887 557 384 C -159 -18 601 -5 916 -231"
          stroke="#6A5ACD"
          strokeWidth="2"
          fill="none"
        />
      </svg> */}
      <div className="flex flex-col gap-10 md:flex-none">
        {/* WHO WE ARE */}
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2 text-left">
            <h2 className="text-lg sm:text-3xl font-bold mb-5">WHO WE ARE</h2>
            <p className="font-light text-sm sm:text-lg">
              We are a team of passionate innovators, problem-solvers, and
              technology enthusiasts dedicated to helping businesses thrive in
              the digital world. Our mission is to bridge the gap between
              business.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image src={Tech} width={250} height={120} alt="Tech Icon" />
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="flex flex-col md:flex-row-reverse items-center  ">
          <div className="md:w-1/2 text-left md:text-right">
            <h2 className="text-lg sm:text-3xl font-bold mb-5">WHAT WE DO</h2>
            <p className="font-light text-sm sm:text-lg">
              We are a team of passionate innovators, problem-solvers, and
              technology enthusiasts dedicated to helping businesses thrive in
              the digital world. Our mission is to bridge the gap between
              business.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image
              src={Business}
              width={250}
              height={300}
              alt="Business Icon"
            />
          </div>
        </div>

        {/* WHAT MAKES US DIFFERENT */}
        <div className="flex flex-col md:flex-row items-center mb-14 ">
          <div className="md:w-1/2 text-left">
            <h2 className="text-lg sm:text-3xl font-bold mb-5">
              WHAT MAKES US DIFFERENT
            </h2>
            <p className="font-light text-sm sm:text-lg">
              We are a team of passionate innovators, problem-solvers, and
              technology enthusiasts dedicated to helping businesses thrive in
              the digital world. Our mission is to bridge the gap between
              business.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image src={Gears} width={200} height={300} alt="Gears Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
