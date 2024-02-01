import { FullLogoWhite, LogoWhite } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const footerItems = [
    { title: "Home", link: "/" },
    { title: "Serviços", link: "/servicos" },
    { title: "Quem somos", link: "/quem_somos" },
    { title: "Contato", link: "/contato" },
  ];

  return (
    //     {/* Column 3 - Social Icons */}
    //     <div className="w-full md:w-1/3 flex justify-center items-center">
    //       <Link href={"https://www.linkedin.com/in/maiconorlowski/"}>
    //       </Link>
    //       <Link href={"https://www.linkedin.com/in/maiconorlowski/"}>
    //         <WhatsAppIcon className="w-[64px] h-[64px]" />
    //       </Link>
    //     </div>
    //   </div>
    // </footer>
    <footer className="w-full bg-problack">
      <div className="max-w-screen-lg px-4 py-6 mx-auto flex flex-row items-center justify-center sm:gap-40 gap-4">
        <div>
          <Image
            src={FullLogoWhite}
            width={100}
            height={100}
            alt="ProQuality logo"
          />
        </div>
        <nav className="flex sm:flex-row flex-col gap-4">
          {footerItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <p className="font-proquality sm:text-para text-smpara text-white hover:text-progray">
                {item.title}
              </p>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={"https://www.linkedin.com/in/maiconorlowski/"}>
            <LinkedInIcon className="w-[32px] h-[32px] text-white hover:text-progray" />
          </Link>
          <Link href={"https://www.linkedin.com/in/maiconorlowski/"}>
            <WhatsAppIcon className="w-[32px] h-[32px] text-white hover:text-progray" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
