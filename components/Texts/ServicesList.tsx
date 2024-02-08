"use client";

import { ArrowDown, ArrowUp } from "@/public/assets/svgs";
import { ServicesListType } from "@/types";
import Image from "next/image";
import { useState } from "react";

const ServicesList = ({
  title,
  text1,
  text2,
  text3,
  text4,
}: ServicesListType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTextChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full flex flex-row items-center gap-4">
        <h3 className="sm:text-subtitles text-smsubtitles font-bold text-problue uppercase">
          {title}
        </h3>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="sm:hidden flex flex-col items-center">
          {isOpen ? (
            <div className="transition-all">
              <p className="my-2 sm:sm:text-para text-smpara">{text1}</p>
              <p className="my-2 sm:sm:text-para text-smpara">{text2}</p>
              <p className="my-2 sm:sm:text-para text-smpara">{text3}</p>
              <p className="my-2 sm:sm:text-para text-smpara text-problue font-bold">
                {text4}
              </p>
            </div>
          ) : (
            <div className="transition-all">
              <p className="my-2 sm:sm:text-para text-smpara">{text1}</p>
            </div>
          )}
          {isOpen ? (
            <div className="flex flex-row items-center justify-center">
              <button
                onClick={handleTextChange}
                className="text-problue text-smpara font-proquality text-start"
              >
                Fechar
              </button>
              <Image src={ArrowUp} width={24} height={24} alt={"Fechar"} />
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center">
              <button
                onClick={handleTextChange}
                className="text-problue text-smpara font-proquality text-start"
              >
                Abrir
              </button>
              <Image src={ArrowDown} width={24} height={24} alt={"Fechar"} />
            </div>
          )}
        </div>
        <div className="sm:flex hidden">
          <div className="transition-all">
            <p className="my-2 sm:sm:text-para text-smpara">{text1}</p>
            <p className="my-2 sm:sm:text-para text-smpara">{text2}</p>
            <p className="my-2 sm:sm:text-para text-smpara">{text3}</p>
            <p className="my-2 sm:sm:text-para text-smpara text-problue font-bold">
              {text4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
