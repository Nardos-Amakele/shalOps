"use client";
import { motion } from "framer-motion";
import Clients from "../../../public/users-svgrepo-com.svg";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 10,
    name: "Dr. Musse Demisse (Magna PLC)",
    text: "Our portfolio website now perfectly represents our brand's professionalism - thanks to Shalops' design.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 11,
    name: "Dagmawi Getye",
    text: "The Telegram bot Shalops created streamlined my tutoring registrations, saving me hours every week.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 12,
    name: "Yohannes (Shape Up Gym)",
    text: "Since implementing Shalops' gym system, our operations have never been smoother or more efficient.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 10,
    name: "Dr. Musse Demisse (Magna PLC)",
    text: "Our portfolio website now perfectly represents our brand's professionalism - thanks to Shalops' design.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 11,
    name: "Dagmawi Getye",
    text: "The Telegram bot Shalops created streamlined my tutoring registrations, saving me hours every week.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 12,
    name: "Yohannes (Shape Up Gym)",
    text: "Since implementing Shalops' gym system, our operations have never been smoother or more efficient.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 10,
    name: "Dr. Musse Demisse (Magna PLC)",
    text: "Our portfolio website now perfectly represents our brand's professionalism - thanks to Shalops' design.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 11,
    name: "Dagmawi Getye",
    text: "The Telegram bot Shalops created streamlined my tutoring registrations, saving me hours every week.",
    imageSrc: "../../../public/avatr.jpeg",
  },
  {
    id: 12,
    name: "Yohannes (Shape Up Gym)",
    text: "Since implementing Shalops' gym system, our operations have never been smoother or more efficient.",
    imageSrc: "../../../public/avatr.jpeg",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialCard = ({ name, text }: { name: string; text: string }) => (
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
            }: {
              id: number;
              name: string;
              text: string;
            }) => (
              <TestimonialCard key={id} name={name} text={text} />
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
        Don&apos;t just take our word for it—hear from businesses that have
        transformed their operations with our solutions.
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
