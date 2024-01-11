import { ServicesListType } from "@/types";
import Image from "next/image";

const ServicesList = ({ image, title, description }: ServicesListType) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full flex flex-row items-center gap-4">
        <Image src={image} width={48} height={48} alt={title} />
        <h3 className="sm:text-proTitles text-proSmTitles font-bold text-problue">
          {title}
        </h3>
      </div>
      <div className="w-full">
        <span className="my-2 ">{description}</span>
      </div>
    </div>
  );
};

export default ServicesList;
