"use client";
import { useState } from "react";
import Image from "next/image";
import Herosvg from "../../../public/hero.svg";
import Promo from "./Promo";
import Navbar from "./Navbar";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Hero = () => {
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  // Text animation variants (slower falling effect)
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Increased stagger for slower sequential appearance
        delayChildren: 0.3 // Slight delay before starting
      }
    }
  };

  const fallingText = {
    hidden: { 
      opacity: 0, 
      y: -40, // Starts higher up
      filter: "blur(2px)" // Slight blur for smoother appearance
    },
    show: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, // Slower duration
        ease: [0.25, 0.1, 0.25, 1] // Smooth ease-out curve
      } 
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_nynkufg",
        "template_nwadera",
        {
          to_email: "shalops.plc@gmail.com",
          contact_info: contact,
          message: `New contact request from: ${contact}`
        },
        "t1dYz76Jc5mj4xXLW"
      );

      setSubmitStatus("success");
      setContact("");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 10000);
    }
  };

  return (
    <div className="flex md:h-screen flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full">
        <Promo />
        <Navbar />
      </div>
      <section className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between px-8 max-w-6xl mx-auto">
        {/* Left Side - Text with falling animation */}
        <motion.div 
          className="pt-44 md:pt-0 max-w-md md:max-w-xl text-left"
          variants={textContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-4xl md:text-5xl md:text-nowrap font-bold leading-tight"
            variants={fallingText}
          >
            Bridging <br />
            <motion.span 
              className="text-black block mt-2"
              variants={fallingText}
            >
              Business & Technology
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="mt-2 sm:mt-4 font-light leading-tight text-left tex-xs sm:text-sm md:text-xl"
            variants={fallingText}
          >
            We create reliable business solutions tailored to your needs. By
            understanding your challenges, we build technology that streamlines
            operations, boosts growth, and drives success.
          </motion.p>

          {/* Input and Button - Keep original animation */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="mt-6 flex font-light text-lg flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {submitStatus ? (
              <div className={`px-4 py-3 rounded-lg w-full text-center ${submitStatus === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
                }`}>
                {submitStatus === "success"
                  ? "Thank you! We'll contact you soon."
                  : "Oops! Something went wrong. Please try again."}
              </div>
            ) : (
              <>
                <motion.input
                  type="text"
                  placeholder="Type your email or Phone Number"
                  className="px-2 sm:px-4 py-2 sm:py-3 min-w-2/3 rounded-lg border border-gray-300 bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 scrolling-placeholder"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !contact.trim()}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#8C52FF] to-[#160E23] text-white font-semibold rounded-lg shadow-md hover:opacity-90 disabled:opacity-70 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Get In Touch"}
                </motion.button>
              </>
            )}
          </motion.form>
        </motion.div>

        {/* Right Side - Keep your original icon animation */}
        <motion.div 
          className="mt-10 lg:mt-0 lg:ml-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image src={Herosvg} width={300} height={300} alt="Illustration" />
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;