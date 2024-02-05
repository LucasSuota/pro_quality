"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projetosRealizadosPreview } from "@/constants";
import Image from "next/image";
import { FullLogoBlack } from "@/public/assets/images";
import DefaultButton from "../Buttons/DefualtButton";

const ServicosHero = () => {
  return (
    <div className="w-full text-center flex items-center justify-center">
      <Swiper
        className="w-full h-screen flex items-center justify-center"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {projetosRealizadosPreview.map((slide, index) => (
          <SwiperSlide className="font-proquality" key={index}>
            <div className="min-w-full h-full flex sm:flex-row flex-col items-center justify-center">
              <div className="sm:w-full w-full h-full relative">
                <Image
                  src={slide.image}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  alt={slide.title}
                />
              </div>
              <div className="sm:w-2/4 w-full sm:h-full bg-white flex items-start sm:justify-center justify-start sm:py-0 py-10 flex-col px-10">
                <div className="text-problue text-start">
                  <h2 className="sm:text-5xl text-2xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="sm:text-2xl text-lg">{slide.place}</p>
                  <p className="sm:text-2xl text-lg">{slide.date}</p>
                  <p className="sm:text-2xl text-lg">{slide.client}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicosHero;
