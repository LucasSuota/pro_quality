import { WhatsappIcon } from "@/public/assets/svgs";
import Image from "next/image";
import Link from "next/link";

const ActionButton = () => {
  return (
    <div className="animate-pulse fixed bottom-0 right-0 m-5 bg-green-500 sm:p-4 p-3 z-40 rounded-full">
      <Link href={"https://wa.me/5541995967358"}>
        <Image src={WhatsappIcon} width={40} height={40} alt="Whatsapp" />
      </Link>
    </div>
  );
};

export default ActionButton;
