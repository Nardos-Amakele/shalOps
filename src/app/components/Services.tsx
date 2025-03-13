'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Research from '../../../public/research-presentation-svgrepo-com.svg'
import Development from '../../../public/development-web-development-svgrepo-com (1).svg'
import Support from '../../../public/Group.svg'
import { motion, AnimatePresence } from 'framer-motion';

const content = [
  {
    title: 'Research',
    description:
      'We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world.',
    icon: Research,
    background: '#4EBB93',
  },
  {
    title: 'Development',
    description:
      'We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world.',
    icon: Development,
    background: '#000000',
  },
  {
    title: 'Support',
    description:
      'We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world.',
    icon: Support,
    background: '#8233D7',
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleNext = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev + 1) % content.length);
  };

  const handlePrev = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen py-10 md:py-1 max-w-7xl mx-auto overflow-hidden">
      {/* Left Section */}
      <div className="bg-[#D2C6E0] w-full md:w-2/3 p-10 md:p-24 flex flex-col md:flex-row justify-center">
        <div className="my-auto w-full md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">SERVICES</h2>
          <p className="text-gray-700 mb-6 md:mb-8 w-full md:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sequi molestiae amet officia illum.
          </p>
        </div>
        <div className="space-y-10 md:space-y-20 w-full md:w-1/3 my-auto">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">01</h3>
            <p className="text-sm md:text-base">SYSTEM DEVELOPMENT</p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold">02</h3>
            <p className="text-sm md:text-base">WEBSITE DEVELOPMENT</p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold">03</h3>
            <p className="text-sm md:text-base">APPLICATION DEVELOPMENT</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/3 min-h-[450px] md:min-h-[600px] flex items-center justify-center">
        {/* Background  */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-start gap-10 md:gap-20 items-center p-6 md:p-10 w-full h-full"
          style={{ backgroundColor: content[prevIndex].background }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl uppercase mb-4 md:mb-6 text-white">HOW WE DO THEM</h3>
          <div className="self-start">
            <Image
              src={content[prevIndex].icon}
              width={60}
              height={50}
              alt={content[prevIndex].title}
              className="mb-4 md:w-[80px] md:h-[60px]"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">{content[prevIndex].title}</h2>
            <p className="text-xs md:text-sm max-w-xs text-white">{content[prevIndex].description}</p>
          </div>
        </motion.div>

        {/* Foreground  */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 flex flex-col justify-start gap-10 md:gap-20 items-center p-6 md:p-10 w-full h-full"
            style={{ backgroundColor: content[index].background }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <h3 className="text-xl md:text-2xl uppercase mb-4 md:mb-6 text-white">HOW WE DO THEM</h3>
            <div className="self-start">
              <Image
                src={content[index].icon}
                width={60}
                height={50}
                alt={content[index].title}
                className="mb-4 md:w-[80px] md:h-[60px]"
              />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">{content[index].title}</h2>
              <p className="text-xs md:text-sm max-w-xs text-white">{content[index].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-between px-6 md:px-10">
          <button onClick={handlePrev} className="p-2 md:p-3 bg-white/20 rounded-full">
            <FaArrowLeft  color="white" />
          </button>
          <button onClick={handleNext} className="p-2 md:p-3 bg-white/20 rounded-full">
            <FaArrowRight  color="white" />
          </button>
        </div>
      </div>
    </section>
  );
}
