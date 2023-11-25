"use client";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";

const FadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function ImageGridLayout({ groups }: any) {
  return (
    <div className="grid grid-flow-row justify-center gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 pb-4 px-4 md:px-8">
      {groups.map((group: any, i: number) => (
        <div
          key={i}
          className="flex flex-col gap-y-4 md:gap-y-8 last:hidden lg:last:flex"
        >
          {group.map((item: any, i: number) => (
            <motion.div
              variants={FadeIn}
              transition={{ delay: i * 0.25, duration: 0.5 }}
              initial="initial"
              whileInView="animate"
              key={i}
              className="relative w-full h-auto overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={urlForImage(item.image).url() as string}
                alt=""
                loading="lazy"
                className="w-full h-full hover:scale-105 hover:brightness-75 transform transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
