"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projetosRealizadosPreview } from "@/constants";
import Image from "next/image";

const ServicosHero = () => {
  return (
    <>
      <div className="w-full text-center hidden sm:flex items-center justify-center">
        <Swiper
          className="w-full h-screen flex items-center justify-center"
          spaceBetween={0}
          slidesPerView={2}
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
                <div className="relative w-full h-full flex flex-col justify-end sm:items-center items-start pb-60 px-4 bg-problack">
                  <div className="text-start text-white">
                    <h3 className="z-40 text-3xl relative font-bold">
                      {slide.title}
                    </h3>
                    <p className="z-40 sm:text-2xl text-lg relative">
                      {slide.place}
                    </p>
                    <p className="z-40 sm:text-2xl text-lg relative">
                      {slide.date}
                    </p>
                    <p className="z-40 sm:text-2xl text-lg relative">
                      {slide.client}
                    </p>
                  </div>
                  <Image
                    src={slide.image}
                    fill
                    quality={100}
                    className="object-cover w-full h-full opacity-50"
                    alt={slide.title}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full text-center sm:hidden flex items-center justify-center">
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
                <div className="relative w-full h-full flex flex-col justify-end sm:items-center items-start pb-60 px-4 bg-problack">
                  <div className="text-start text-white">
                    <h3 className="z-40 sm:text-2xl text-xl relative font-bold">
                      {slide.title}
                    </h3>
                    <p className="z-40 sm:text-2xl text-lg relative">
                      {slide.place}
                    </p>
                    <p className="z-40 sm:text-2xl text-lg relative">
                      {slide.date}
                    </p>
                    <p className="z-40 sm:text-2xl text-lg relative">
                      {slide.client}
                    </p>
                  </div>
                  <Image
                    src={slide.image}
                    fill
                    quality={100}
                    className="object-cover w-full h-full opacity-50"
                    alt={slide.title}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ServicosHero;
