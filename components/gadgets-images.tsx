"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";

const FadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

interface ImageProps {
  images: {
    image: {
      asset: {
        _ref: string;
      };
      _type: string;
    };
  }[];
}

export default function GadgetsImages({ images }: ImageProps) {
  return images?.map((item: any, index: number) => (
    <motion.div
      variants={FadeIn}
      transition={{ delay: index * 0.25 }}
      initial="initial"
      whileInView="animate"
      key={index}
      className="bg-white h-96 relative"
    >
      <Image
        src={urlForImage(item.image)}
        alt=""
        fill
        className="w-full h-full object-cover"
      />
    </motion.div>
  ));
}
