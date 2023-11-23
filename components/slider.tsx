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

export default function Slider({ images }: { images: any[] }) {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      modules={[Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex w-full h-full max-w-4xl"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {images?.map((image, i) => (
        <SwiperSlide key={i} className="w-full h-full">
          <Image
            src={urlForImage(image.image).url() || ""}
            alt=""
            fill
            priority
            className="aspect-square w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
