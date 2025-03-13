'use client';

import Image from 'next/image';
import Tech from '../../../public/Group 31.svg'
import Business from '../../../public/Group 32.svg'
import Gears from '../../../public/Group 33.svg'

export default function AboutUs() {
  return (
    <section className="bg-[#F4F1F9] min-h-screen flex flex-col items-center px-6 md:px-52 py-10  mx-auto max-w-7xl">
      <div className="">
        {/* WHO WE ARE */}
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-5">WHO WE ARE</h2>
            <p className="">
              We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world. Our mission is to bridge the gap between business. and technology enthusiasts dedicated to helping businesses thrive in the digital world. Our mission is to bridge the gap between business.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image src={Tech} width={250} height={120} alt="Tech Icon" />
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="flex flex-col md:flex-row-reverse items-center  ">
          <div className="md:w-1/2 text-left md:text-right">
            <h2 className="text-3xl font-bold mb-5">WHAT WE DO</h2>
            <p className="">
              We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world. Our mission is to bridge the gap between business.and technology enthusiasts dedicated to helping businesses thrive in the digital world. Our mission is to bridge the gap between business.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image src={Business} width={250} height={300} alt="Business Icon" />
          </div>
        </div>

        {/* WHAT MAKES US DIFFERENT */}
        <div className="flex flex-col md:flex-row items-center mb-14 ">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-5">WHAT MAKES US DIFFERENT</h2>
            <p className="">
              We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world. Our mission is to bridge the gap between business.
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
