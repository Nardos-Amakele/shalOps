import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Promo = () => {
  return (
    <motion.div 
      className="relative text-white font-medium text-xs md:text-sm text-center py-1 overflow-hidden bg-black"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient text effect */}
      <div className="flex items-center justify-center relative z-10">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="flex items-center bg-clip-text text-transparent bg-[length:400%_400%]"
          style={{
            backgroundImage: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #00ff00, #7a00ff, #ff00c8, #ff0000)',
            animation: 'textGradient 8s linear infinite',
          }}
        >
          Get 30% off custom startup software! Contact us today
          <Link href="#contact" className="ml-2 flex items-center">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-white"
            >
              <FaArrowRightLong />
            </motion.span>
          </Link>
        </motion.span>
      </div>

      {/* Keyframes for animated text gradient */}
      <style jsx>{`
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </motion.div>
  );
};

export default Promo;