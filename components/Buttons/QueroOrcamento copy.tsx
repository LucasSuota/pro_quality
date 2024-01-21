import Link from "next/link";

const VerMais = () => {
  return (
    <Link
      href={"/contato"}
      className="sm:w-2/5 w-full bg-problue hover:bg-problack active:bg-progray active:text-problack mt-4 sm:w-1/4 w-3/4 py-2 text-center font-proquality text-lg font-light text-white transition-all"
    >
      Ver mais
    </Link>
  );
};

export default VerMais;
