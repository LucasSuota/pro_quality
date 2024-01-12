"use client";

import { useEffect } from "react";
import QueroOrcamento from "./Buttons/QueroOrcamento";

const Hero = () => {
  useEffect(() => {
    const parallaxBackground = document.querySelector(
      ".parallax-background"
    ) as HTMLElement;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="min-w-full z-0 mx-auto h-[680px] relative overflow-hidden">
      <div
        className="parallax-background absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
          url('/assets/images/herobg.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full relative z-10">
        <div className="flex flex-col items-start justify-end h-3/5 sm:px-0 px-4">
          <h1 className="sm:text-5xl text-4xl font-proquality text-white font-semibold">
            CONTROLE DE QUALIDADE E VISTORIA EM OBRAS
          </h1>
          <QueroOrcamento />
        </div>
      </div>
    </section>
  );
};

export default Hero;
