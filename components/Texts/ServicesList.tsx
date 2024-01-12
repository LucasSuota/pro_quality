"use client";

import { ServicesListType } from "@/types";
import Image from "next/image";
import { useState } from "react";

const ServicesList = ({
  image,
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
        <Image src={image} width={48} height={48} alt={title} />
        <h3 className="sm:text-proTitles text-proSmTitles font-bold text-problue">
          {title}
        </h3>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="sm:hidden flex flex-col items-center">
          {isOpen ? (
            <div className="transition-all">
              <p className="my-2 text-proSmSubTitles">{text1}</p>
              <p className="my-2 text-proSmSubTitles">{text2}</p>
              <p className="my-2 text-proSmSubTitles">{text3}</p>
              <p className="my-2 text-proSmSubTitles">{text4}</p>
            </div>
          ) : (
            <div className="transition-all">
              <p className="my-2 text-proSmSubTitles">{text1}</p>
            </div>
          )}
          {isOpen ? (
            <button
              onClick={handleTextChange}
              className="active:bg-white active:text-problue bg-problue text-white font-proquality px-6 py-1 text-center mt-2"
            >
              Ver menos
            </button>
          ) : (
            <button
              onClick={handleTextChange}
              className="active:bg-white active:text-problue bg-problue text-white font-proquality px-6 py-1 text-center mt-2"
            >
              Ver mais
            </button>
          )}
        </div>
        <div className="sm:flex hidden">
          <div className="transition-all">
            <p className="my-2 text-proSmSubTitles">{text1}</p>
            <p className="my-2 text-proSmSubTitles">{text2}</p>
            <p className="my-2 text-proSmSubTitles">{text3}</p>
            <p className="my-2 text-proSmSubTitles">{text4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
