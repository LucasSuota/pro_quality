import { WeGuaranteeCardType } from "@/types";
import Image from "next/image";

const WeGuaranteCard = ({ title, logo }: WeGuaranteeCardType) => {
  return (
    <section className="mt-5 flex flex-row sm:flex-col items-center gap-2">
      <div className="sm:min-w-[200px] mx-2 sm:min-h-[200px] min-w-[65px] min-h-[65px] hover:bg-problack transition-all bg-problue flex items-center justify-center">
        <Image src={logo} width={32} height={32} alt="Logo" />
      </div>
      <h3 className="sm:max-w-[200px]  text-proSmTitles sm:text-proSmSubTitles font-bold text-problue text-left">
        {title}
      </h3>
    </section>
  );
};

export default WeGuaranteCard;
