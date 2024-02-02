import Link from "next/link";

const DefaultButton = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link
      href={`${link}`}
      className="sm:w-1/4 w-full bg-problue hover:bg-problack active:bg-progray active:text-problack mt-4 py-2 text-center font-proquality text-lg font-light text-white transition-all"
    >
      {title}
    </Link>
  );
};

export default DefaultButton;
