"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { realizedProjects } from "@/constants";
import Image from "next/image";

import { FullLogoBlack, FullLogoWhite } from "@/public/assets/images";
import { FullLogoBlue } from "@/public/assets/svgs";

const ServicosHero = () => {
  return (
    <>
      <div className="w-full text-center hidden sm:flex items-center justify-center">
        <Swiper
          className="w-full h-screen flex items-center justify-center"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {realizedProjects.map((slide, index) => (
            <SwiperSlide className="font-proquality" key={index}>
              <div className="min-w-full h-full flex sm:flex-row flex-col items-center justify-center gap-4 bg-progray">
                <div
                  className="relative w-3/5 h-full flex flex-col justify-end sm:items-center items-start pb-60 px-4"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
                  url('${slide.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="w-2/5 flex flex-col text-start">
                  <h3 className="z-40 sm:text-smtitles text-smtitles leading-6 relative font-bold uppercase text-problue">
                    {slide.title}
                  </h3>
                  <p className="z-40 sm:text-smbubtitles text-smpara relative">
                    Cidade: {slide.place}
                  </p>
                  <p className="z-40 sm:text-smbubtitles text-smpara relative">
                    Data: {slide.date}
                  </p>
                  {slide.client && (
                    <p className="z-40 sm:text-smbubtitles text-smpara relative">
                      Cliente: {slide.client}
                    </p>
                  )}
                  <Image
                    className="mt-4"
                    src={FullLogoBlue}
                    width={140}
                    height={140}
                    alt="logo"
                  />
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
          {realizedProjects.map((slide, index) => (
            <SwiperSlide className="font-proquality" key={index}>
              <div className="min-w-full h-full flex sm:flex-row flex-col items-center justify-center">
                <div
                  className="relative w-full h-full flex flex-col justify-end sm:items-center items-start px-4"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
                    url('${slide.image}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="text-start text-white mb-10">
                    <h3 className="z-40 text-smsubtitles leading-6 relative font-bold uppercase">
                      {slide.title}
                    </h3>
                    <p className="z-40text-smpara relative">
                      Cidade: {slide.place}
                    </p>
                    <p className="z-40 text-smpara relative">
                      Data: {slide.date}
                    </p>
                    {slide.client && (
                      <p className="z-40 text-smpara relative">
                        Cliente: {slide.client}
                      </p>
                    )}
                    <Image
                      className="mt-4"
                      src={FullLogoWhite}
                      width={100}
                      height={100}
                      alt="logo"
                    />
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
