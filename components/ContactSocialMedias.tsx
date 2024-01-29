import { Instagram, Whatsapp } from "@/src/assets/svgs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactSocialMedias = () => {
  return (
    <div className="w-full max-w-screen-lg px-5 mt-10 mx-auto">
      <div>
        <p className="font-proquality sm:text-subtitles text-smsubtitles">
          Email:{" "}
          <span className="font-bold text-problue">contato@proquality.com</span>
        </p>
        <p className="font-proquality sm:text-subtitles text-smsubtitles">
          Telefone:{" "}
          <span className="font-bold text-problue">(41) 91234-5678</span>
        </p>
      </div>
      <div className="mt-10">
        <p className="font-proquality sm:text-subtitles text-smsubtitles mb-10">
          Nossas redes sociais:
        </p>
        <div className="flex flex-row gap-10 items-start mt-4">
          <Link
            href={"https://www.instagram.com/mf_orlowski"}
            className="relative w-[48px] sm:w-[64px] h-[48px] sm:h-[64px] "
          >
            <Image src={Instagram} fill alt="Instagram" />
          </Link>
          <Link
            href={"https://wa.me/554184015100"}
            className="relative w-[48px] sm:w-[64px] h-[48px] sm:h-[64px]"
          >
            <Image src={Whatsapp} fill alt="Whatsapp" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSocialMedias;
