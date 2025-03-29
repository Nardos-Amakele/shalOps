import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Promo = () => {
  return (
    <motion.div 
      className="relative text-white font-medium text-xs md:text-sm text-center py-1 overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Color-shifting background without green */}
      <motion.div
        className="absolute inset-0 bg-[length:400%_400%]"
        style={{
          backgroundImage: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #002bff, #7a00ff, #ff00c8, #ff0000)',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Dark overlay to maintain text visibility */}
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="flex items-center justify-center relative z-10">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          Get 30% off custom startup software! Contact us today
          <Link href="#contact" className="ml-2 flex items-center">
            <FaArrowRightLong className="text-[#E7DFF4]" />
          </Link>
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Promo;