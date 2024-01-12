import { LightBulb } from "@/src/assets/svgs";
import { WeGuaranteeCardType } from "@/types";
import Image from "next/image";

const WeGuaranteCard = ({ title, logo }: WeGuaranteeCardType) => {
  return (
    <section className="mx-10 mt-5 flex flex-row items-center gap-2">
      <div className="min-w-[65px] min-h-[65px] bg-problue flex items-center justify-center">
        <Image src={logo} width={32} height={32} alt="Logo" />
      </div>
      <h3 className="text-proSmTitles font-bold text-problue text-left">
        {title}
      </h3>
    </section>
  );
};

export default WeGuaranteCard;
