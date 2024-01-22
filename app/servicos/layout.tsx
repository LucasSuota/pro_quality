import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PROQUALITY ENGENHARIA: Serviços",
  description: "Controle de Qualidade e Vistoria de Obras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section lang="en">
      <div className={inter.className}>{children}</div>
    </section>
  );
}
