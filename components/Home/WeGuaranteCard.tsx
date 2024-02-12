import { WeGuaranteeCardType } from "@/types";
import Image from "next/image";

const WeGuaranteCard = ({ title, logo }: WeGuaranteeCardType) => {
  return (
    <section className="mt-5 sm:px-0 px-4 flex flex-row sm:items-center items-center gap-2 sm:gap-4">
      <div className="sm:min-h-[100px] sm:min-w-[100px] min-w-[65px] min-h-[65px] hover:bg-problack transition-all bg-problue flex items-center justify-center">
        <div className="relative sm:w-[48px] w-[32px] sm:h-[48px] h-[32px]">
          <Image src={logo} fill alt="ProQuality Engenharia Logo" />
        </div>
      </div>
      <h3 className="sm:text-para text-smpara font-bold text-problue text-left">
        {title}
      </h3>
    </section>
  );
};

export default WeGuaranteCard;
