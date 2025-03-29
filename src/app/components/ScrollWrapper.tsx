// components/ScrollWrapper.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function ScrollWrapper({
  children,
  delay = 0,
  yOffset = 24,
  className = '',
  once = true
}: {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -50px 0px" }}
      transition={{ 
        duration: 1.2, // Increased from 0.6 to 1.2 seconds
        delay, 
        ease: [0.22, 1, 0.36, 1], // Slower ease curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}