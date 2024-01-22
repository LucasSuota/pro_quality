import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "@/components/Transition/Transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PROQUALITY ENGENHARIA",
  description: "Controle de Qualidade e Vistoria de Obras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
