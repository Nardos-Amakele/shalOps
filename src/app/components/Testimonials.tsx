"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Clients from "../../../public/users-svgrepo-com.svg";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Robel Getahun",
    text: "Shalops transformed our gym management - their system handles everything from members to inventory perfectly.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 2,
    name: "Alemu Tadesse",
    text: "The website Shalops built for our events business has brought us 3x more bookings. Game changing!",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 3,
    name: "Marta Kebede",
    text: "From design to development, Shalops delivered exactly what we needed on time and on budget.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 4,
    name: "Samuel Bekele",
    text: "Their team solved problems we didn't even know we had. The mobile app works flawlessly.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 5,
    name: "Liya Abebe",
    text: "We've worked with many developers - Shalops stands out for their creativity and reliability.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 6,
    name: "Tewodros Assefa",
    text: "The custom dashboard they built gives us real-time business insights we never had before.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 7,
    name: "Hana Mohammed",
    text: "Our members love the new booking system - it's so much easier to use than our old one.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 8,
    name: "Dawit Girma",
    text: "Shalops didn't just build a website - they helped us rethink our entire digital strategy.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 9,
    name: "Amina Yusuf",
    text: "The support after launch has been incredible. They truly care about our success.",
    imageSrc: "../../../public/avatr.jpeg",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialCard = ({
  name,
  text,
  imageSrc,
}: {
  name: string;
  text: string;
  imageSrc: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
    <div className="w-10 h-10 bg-[#8572AA] rounded-full mx-auto mb-4"></div>
    <h3 className="font-semibold">{name}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

const TestimonialColumn = (props: {
  testimonials: { id: number; name: string; text: string; imageSrc: string }[];
  duration: number;
  className: string;
}) => (
  <div
    className={props.className}
    style={{
      maskImage:
        "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
    }}
  >
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        duration: props.duration,
      }}
      className="flex flex-col gap-6"
    >
      {[...new Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(
            ({
              id,
              name,
              text,
              imageSrc,
            }: {
              id: number;
              name: string;
              text: string;
              imageSrc: string;
            }) => (
              <TestimonialCard
                key={id}
                name={name}
                text={text}
                imageSrc={imageSrc}
              />
            )
          )}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center py-24 px-4">
      <Image src={Clients} alt="clients" className="w-24" />
      <h2 className="text-2xl font-bold text-center mb-4">
        WHAT OUR CLIENTS SAY ABOUT US
      </h2>
      <p className="font-light  text-center max-w-xl mb-8">
        We are a team of passionate innovators, problem-solvers, and technology
        enthusiasts dedicated to helping businesses thrive in the digital world.
      </p>
      <div className="flex flex-col sm:flex-row gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%, black_75%,transparent)] max-h-[40rem]">
        <TestimonialColumn
          testimonials={firstColumn}
          duration={15}
          className="h-[40rem] md:h-"
        />
        <TestimonialColumn
          testimonials={secondColumn}
          duration={20}
          className="hidden md:block"
        />
        <TestimonialColumn
          testimonials={thirdColumn}
          duration={25}
          className="hidden lg:block"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
