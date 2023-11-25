"use client";

import { motion } from "framer-motion";

const FadeIn = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Heading({ children }: { children: string }) {
  return (
    <div className="py-10 px-8 grid justify-center">
      <motion.h1
        variants={FadeIn}
        transition={{ delay: 0.5 }}
        initial="initial"
        whileInView="animate"
        className="text-lg md:text-3xl text-white"
      >
        {children}
      </motion.h1>
    </div>
  );
}
