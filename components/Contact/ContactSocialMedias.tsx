import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import React from "react";

const ContactSocialMedias = () => {
  return (
    <div className="w-full max-w-screen-lg px-5 mt-10 mx-auto">
      <div>
        <p className="font-proquality sm:text-smpara text-smsubtitles">
          Email:{" "}
          <span className="font-bold text-problue">
            contato@proqualityengenharia.com
          </span>
        </p>
        <p className="font-proquality sm:text-smpara text-smsubtitles">
          Telefone:{" "}
          <span className="font-bold text-problue">(41) 99886-5360</span>
        </p>
      </div>
      <div className="mt-10">
        <p className="font-proquality sm:text-smpara text-smsubtitles mb-4">
          Nossas redes sociais:
        </p>
        <div className="flex flex-row gap-10 items-start mt-2">
          <Link href={"https://www.instagram.com/mf_orlowski"}>
            <LinkedInIcon className=" w-[64px] sm:w-[70px] h-[64px] sm:h-[82px]  text-problue hover:text-problack transition-all" />
          </Link>
          <Link href={"https://wa.me/5541998865360"}>
            <WhatsAppIcon className=" w-[64px] sm:w-[70px] h-[64px] sm:h-[82px]  text-problue hover:text-problack transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSocialMedias;
