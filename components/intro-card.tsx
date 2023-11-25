"use client";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";

const lightfont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "300"],
});

const FadeIn = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function IntroCard() {
  return (
    <div className="h-auto ml-0 lg:ml-10 py-16 bg-white flex w-full md:w-auto">
      <div className="text-black z-10 w-full md:w-[40rem] h-auto md:h-[25rem] grid place-items-center">
        <div className="grid gap-y-4 md:gap-y-12 justify-center text-center px-4">
          <motion.h3
            variants={FadeIn}
            transition={{ delay: 0.25 }}
            initial="initial"
            whileInView="animate"
            className="text-base md:text-xl font-semibold font-serif"
          >
            Deepak Yadav
          </motion.h3>
          <motion.h1
            variants={FadeIn}
            transition={{ delay: 0.5 }}
            initial="initial"
            whileInView="animate"
            className={`${lightfont.className} font-light text-4xl md:text-6xl uppercase md:leading-snug`}
          >
            Deep Photo art photography
          </motion.h1>
        </div>
        <Link href={"/contact"}>
          <motion.button
            variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
            transition={{ delay: 0.5 }}
            initial="initial"
            whileInView="animate"
            className="text-xl underline mt-8 md:mt-0"
          >
            Contact {"->"}
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
