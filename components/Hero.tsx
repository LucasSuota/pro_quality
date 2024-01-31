import QueroOrcamento from "./Buttons/QueroOrcamento";
import Image from "next/image";
import { FullLogoWhite } from "@/public/assets/images";

const Hero = () => {
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
      />
      <div className="max-w-screen-lg sm:px-5 mx-auto flex flex-col items-center justify-center h-full relative z-10">
        <div className="flex flex-col items-start justify-end h-3/5 sm:px-0 px-4">
          <Image
            className="mb-4"
            src={FullLogoWhite}
            width={150}
            height={150}
            alt="logo"
          />
          <h1 className="sm:text-4xl text-3xl font-proquality text-white font-semibold">
            LABORATÓRIO DE OBRAS, CONTROLE DE QUALIDADE E VISTORIA
          </h1>
          <QueroOrcamento />
        </div>
      </div>
    </section>
  );
};

export default Hero;
