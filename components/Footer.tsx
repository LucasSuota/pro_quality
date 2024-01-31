import { FullLogoWhite, LogoWhite } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Icon from "@mui/material/Icon";

const Footer = () => {
  return (
    // <footer className="bg-problack text-white py-8">
    //   <div className="container mx-auto flex flex-row justify-between">
    //     <div className="w-full md:w-1/3 mb-4 md:mb-0">
    //       <Image
    //         src={FullLogoWhite}
    //         width={98}
    //         height={98}
    //         alt="Pro Quality Logo"
    //       />
    //     </div>

    //     {/* Column 2 - Pages */}
    //     <div className="w-full md:w-1/3 mb-4 md:mb-0 font-proquality">
    //       <Link href={"/"}>
    //         <p className="hover:text-problue">Home</p>
    //       </Link>
    //       <Link href={"/quem_somos"}>
    //         <p className="hover:text-problue">Quem somos</p>
    //       </Link>
    //       <Link href={"/servicos"}>
    //         <p className="hover:text-problue">Serviços</p>
    //       </Link>
    //       <Link href={"/contato"}>
    //         <p className="hover:text-problue">Contato</p>
    //       </Link>
    //     </div>

    //     {/* Column 3 - Social Icons */}
    //     <div className="w-full md:w-1/3 flex justify-center items-center">
    //       <Link href={"https://www.linkedin.com/in/maiconorlowski/"}>
    //         Linkedin
    //       </Link>
    //       <a
    //         href="https://api.whatsapp.com/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="text-white"
    //       >
    //         <i className="fab fa-whatsapp"></i>
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <footer className="w-full bg-problack mx-auto flex justify-center mt-40">
      <div className="max-w-screen-lg px-4 py-4 flex sm:flex-row flex-col sm:items-center items-start justify-center sm:gap-20 gap-4">
        <div className="flex flex-col gap-2">
          <Image
            src={FullLogoWhite}
            width={162}
            height={162}
            alt="Pro Quality Logo"
          />
        </div>
        <div className="font-proquality flex flex-col gap-2 text-white">
          <Link href={"/"}>
            <p className="hover:text-problue">HOME</p>
          </Link>
          <Link href={"/quem_somos"}>
            <p className="hover:text-problue">QUEM SOMOS</p>
          </Link>
          <Link href={"/servicos"}>
            <p className="hover:text-problue">SERVIÇOS</p>
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
