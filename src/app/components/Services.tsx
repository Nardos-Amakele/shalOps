"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Research from "../../../public/research-presentation-svgrepo-com (1).svg";
import Development from "../../../public/development-web-development-svgrepo-com (1) (1).svg";
import Support from "../../../public/Group.svg";
import { motion, AnimatePresence } from "framer-motion";

const content = [
  {
    title: "System Development",
    description:
      "We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world.",
    icon: Research,
    background: "#4EBB93",
  },
  {
    title: "Website Development",
    description:
      "We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world.",
    icon: Development,
    background: "#000000",
  },
  {
    title: "Mobile App Development",
    description:
      "We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world.",
    icon: Support,
    background: "#563589",
  },
  {
    title: "Digital Marketing",
    description:
      "We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world.",
    icon: Support,
    background: "#563589",
  },
];

const methods = [
  {
    title: "Research",
    description:
      "Our team of innovators dives deep into understanding your business needs, market trends, and user expectations to lay a strong foundation for your software product.",
    icon: Research,
    background: "#FFFFFF",
  },
  {
    title: "Development",
    description:
      "Our skilled developers bring your vision to life, crafting robust, scalable, and user-friendly software solutions tailored to your business goals.",
    icon: Development,
    background: "#000000",
  },
  {
    title: "Testing and Training",
    description:
      "We rigorously test your software to ensure flawless performance and provide comprehensive training to empower your team for seamless adoption.",
    icon: Support,
    background: "#563589",
  },
];
export default function Services() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleNext = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev + 1) % methods.length);
  };

  const handlePrev = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev - 1 + methods.length) % methods.length);
  };

  return (
    <motion.section
      className="flex flex-col md:flex-row min-h-screen py-10 md:py-1 mx-auto overflow-hidden"
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Left Section */}
      <motion.div
        className="min-h-screen bg-[#D2C6E0] w-full md:w-2/3 p-10 md:p-24 flex flex-col md:flex-row justify-center"
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="my-auto w-full md:w-2/3">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 md:mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            SERVICES
          </motion.h2>
          <motion.p
            className="text-gray-700 mb-6 md:mb-8 w-full md:w-[70%]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We craft tailored digital solutions that elevate businesses through technology.
          </motion.p>
        </div>
        <motion.div
          className="space-y-10 md:space-y-20 w-full md:w-1/3 my-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
          viewport={{ once: true }}
        >
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-semibold">
                {String(index + 1).padStart(2, "0")}
              </h3>
              <p className="text-sm md:text-base">{item.title.toUpperCase()}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/3 min-h-screen flex items-center justify-center">
        {/* Current Content */}
        <div
          className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 w-full h-full"
          style={{
            backgroundColor: methods[index].background,
            transition: 'background-color 0.8s ease'
          }}
        >
          <h3
            className="text-xl md:text-2xl uppercase mb-4 md:mb-6 text-center"
            style={{
              color: methods[index].background === "#FFFFFF" ? "#333333" : "#FFFFFF",
            }}
          >
            HOW WE DO THEM
          </h3>

          <div className="self-start">
            <Image
              src={methods[index].icon}
              width={60}
              height={50}
              alt={methods[index].title}
              className="mb-4 md:w-[80px] md:h-[60px]"
            />
          </div>

          <div className="mb-44">
            <h2
              className="text-xl md:text-2xl font-semibold mb-3 md:mb-4"
              style={{
                color: methods[index].background === "#FFFFFF" ? "#333333" : "#FFFFFF",
              }}
            >
              {methods[index].title}
            </h2>
            <p
              className="text-xs md:text-sm max-w-xs"
              style={{
                color: methods[index].background === "#FFFFFF" ? "#333333" : "#FFFFFF",
              }}
            >
              {methods[index].description}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-between px-6 md:px-10">
          <button
            onClick={handlePrev}
            className={`p-2 md:p-3 ${methods[index].background === "#FFFFFF"
              ? "bg-black/20"
              : "bg-white/20"
              } rounded-full transition-transform hover:scale-110 active:scale-95`}
          >
            <FaArrowLeft color={"#FFFFFF"} />
          </button>
          <button
            onClick={handleNext}
            className={`p-2 md:p-3 ${methods[index].background === "#FFFFFF"
              ? "bg-black/20"
              : "bg-white/20"
              } rounded-full transition-transform hover:scale-110 active:scale-95`}
          >
            <FaArrowRight color={"#FFFFFF"} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}