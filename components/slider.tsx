"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { getSliderImages } from "@/sanity/sanity.query";
import { useEffect, useState } from "react";

interface SliderProps {
  image: {
    image: {
      asset: {
        _ref: string;
      };
      _type: string;
    };
  };
}

export default function Slider({ images }: { images: SliderProps[] }) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      className="flex w-full h-full max-w-4xl"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {images?.map((item: any, i: number) => (
        <SwiperSlide key={i} className="w-full h-full bg-yellow-400 text-white">
          <Image
            src={urlForImage(item.image).url()}
            alt="image"
            width={1000}
            height={1000}
            className="aspect-square w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
