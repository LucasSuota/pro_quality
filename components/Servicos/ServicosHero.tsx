"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projetosRealizadosPreview } from "@/constants";
import Image from "next/image";

const ServicosHero = () => {
  return (
    <div className="w-full h-screen bg-problack text-center flex items-center justify-center">
      {/* <Swiper
        className="w-full h-3/4 flex items-center justify-center"
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {projetosRealizadosPreview.map((slide, index) => (
          <SwiperSlide className="font-proquality" key={index}>
            <Image
              src={slide.image}
              width={400}
              height={400}
              alt={slide.title}
            />
            <p className="text-white">{slide.title}</p>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default ServicosHero;
