import { WeGuaranteeCardType } from "@/types";
import Image from "next/image";

const WeGuaranteCard = ({ title, logo }: WeGuaranteeCardType) => {
  return (
    <section className="mx-2 mt-5 flex flex-row sm:flex-col sm:items-start items-center gap-2">
      <div className="sm:w-full sm:min-h-[120px] min-w-[65px] min-h-[65px] hover:bg-problack transition-all bg-problue flex items-center justify-center">
        <Image src={logo} width={32} height={32} alt="Logo" />
      </div>
      <h3 className="sm:max-w-[200px] sm:text-proSubTitles sm:text-para text-smpara font-bold text-problue text-left">
        {title}
      </h3>
    </section>
  );
};

export default WeGuaranteCard;
