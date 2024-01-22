import { LogoWhite } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-problack mx-auto flex justify-center">
      <div className="max-w-screen-lg px-4 py-4 flex sm:flex-row flex-col sm:items-center items-start justify-center sm:gap-20 gap-4">
        <div className="flex flex-col gap-2">
          <Image
            src={LogoWhite}
            width={162}
            height={162}
            alt="Pro Quality Logo"
          />
          <h4 className="text-white sm:text-sm text-xs">
            2024© Todos os direitos reservados
          </h4>
        </div>
        <div className="font-proquality flex flex-col gap-2 text-white">
          <Link href={"/"}>
            <p className="hover:text-problue">HOME</p>
          </Link>
          <Link href={"/quem_somos"}>
            <p className="hover:text-problue">QUEM SOMOS</p>
          </Link>
          <Link href={"/clientes"}>
            <p className="hover:text-problue">CLIENTES</p>
          </Link>
          <Link href={"/contato"}>
            <p className="hover:text-problue">CONTATO</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
