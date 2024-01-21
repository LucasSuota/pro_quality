import { LogoWhite } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-problack mx-auto mt-20">
      <div className="max-w-screen-lg px-4 py-4">
        <Image
          src={LogoWhite}
          width={162}
          height={162}
          alt="Pro Quality Logo"
        />
        <h4 className="text-white text-sm">
          2024. Todos os direitos reservados
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
