import Link from "next/link";

const QueroOrcamento = () => {
  return (
    <Link
      href={"/contato"}
      className="sm:w-2/5 w-full px-4 py-2 hover:bg-problack hover:text-white bg-problue active:bg-progray active:text-problack text-center font-proquality text-lg font-light text-white sm:mt-4 mt-10"
    >
      QUERO ORÇAMENTO
    </Link>
  );
};

export default QueroOrcamento;
