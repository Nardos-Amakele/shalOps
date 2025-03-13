'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Clients from '../../../public/users-svgrepo-com.svg'
import Image from 'next/image'

const testimonials = [
  { id: 1, name: 'Robel Getahun', text: 'Shalops digital solutions have made our works a lot easier for O ETB. We definitely recommend them for any project you have.' },
  { id: 2, name: 'Robel Getahun', text: 'Shalops digital solutions have made our works a lot easier for O ETB. We definitely recommend them for any project you have.' },
  { id: 3, name: 'Robel Getahun', text: 'Shalops digital solutions have made our works a lot easier for O ETB. We definitely recommend them for any project you have.' },
];

const TestimonialCard = ({ name, text }: { name: string; text: string }) => (
  <div className="bg-[#F4F1F9] p-6 rounded-xl shadow-lg w-80 text-center">
    <div className="w-10 h-10 bg-[#8572AA] rounded-full mx-auto mb-4"></div>
    <h3 className="font-semibold">{name}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center py-24 px-4">
      <Image src={Clients} alt='clients' className='w-24' />
      <h2 className="text-2xl font-bold text-center mb-4">WHAT OUR CLIENTS SAY ABOUT US</h2>
      <p className="text-center max-w-xl mb-8">
        We are a team of passionate innovators, problem-solvers, and technology enthusiasts dedicated to helping businesses thrive in the digital world.
      </p>
      <div className="relative flex gap-8 overflow-hidden w-full max-w-5xl">
        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[] to-transparent z-10"></div>
        
        {/* Content columns */}
        <div className="flex gap-8 relative">
          {[[-50, 'up'], [50, 'down'], [-50, 'up']].map(([offset, direction], index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6"
              initial={{ y: offset }}
              animate={{ y: direction === 'up' ? -offset : -offset * 2 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[] to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
