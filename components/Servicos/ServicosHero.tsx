"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projetosRealizadosPreview } from "@/constants";
import Image from "next/image";
import { projetosImagens } from "@/src/assets/images/projetos";
import { FullLogoWhite } from "@/public/assets/images";

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
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {projetosRealizadosPreview.map((slide, index) => (
            <SwiperSlide className="font-proquality" key={index}>
              <div className="min-w-full h-full flex sm:flex-row flex-col items-center justify-center">
                <div
                  className="relative w-full  h-full flex flex-col justify-end sm:items-center items-start pb-60 px-4"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
                  url('${slide.image}')`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="text-start text-white">
                    <Image
                      className="mb-4"
                      src={FullLogoWhite}
                      width={120}
                      height={120}
                      alt="logo"
                    />
                    <h3 className="z-40 sm:text-2xl text-smtitles leading-6 relative font-bold uppercase">
                      {slide.title}
                    </h3>
                    <p className="z-40 sm:text-2xl text-smpara relative">
                      Cidade: {slide.place}
                    </p>
                    <p className="z-40 sm:text-2xl text-smpara relative">
                      Data: {slide.date}
                    </p>
                    {slide.client && (
                      <p className="z-40 sm:text-2xl text-smpara relative">
                        Cliente: {slide.client}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full text-center sm:hidden flex items-center justify-center">
        <Swiper
          className="w-full h-[660px] flex items-center justify-center"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {projetosRealizadosPreview.map((slide, index) => (
            <SwiperSlide className="font-proquality" key={index}>
              <div className="min-w-full h-full flex sm:flex-row flex-col items-center justify-center">
                <div
                  className="relative w-full h-full flex flex-col justify-center sm:items-center items-start px-4"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
                    url('${slide.image}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="text-start text-white">
                    <Image
                      className="mb-4"
                      src={FullLogoWhite}
                      width={120}
                      height={120}
                      alt="logo"
                    />
                    <h3 className="z-40 sm:text-2xl text-smtitles leading-6 relative font-bold uppercase">
                      {slide.title}
                    </h3>
                    <p className="z-40 sm:text-2xl text-smpara relative">
                      Cidade: {slide.place}
                    </p>
                    <p className="z-40 sm:text-2xl text-smpara relative">
                      Data: {slide.date}
                    </p>
                    {slide.client && (
                      <p className="z-40 sm:text-2xl text-smpara relative">
                        Cliente: {slide.client}
                      </p>
                    )}
                  </div>
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
