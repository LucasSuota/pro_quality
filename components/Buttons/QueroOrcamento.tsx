import Link from "next/link";

const QueroOrcamento = () => {
  return (
    <Link
      href={"/contato"}
      className="sm:w-2/5 w-full hover:bg-problack hover:text-white bg-problue active:bg-progray active:text-problack mt-4 sm:w-1/4 w-3/4 py-2 text-center font-proquality text-lg font-light text-white"
    >
      QUERO ORÇAMENTO
    </Link>
  );
};

export default QueroOrcamento;
