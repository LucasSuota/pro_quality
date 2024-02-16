import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PROQUALITY ENGENHARIA: Quem somos?",
  description: "Controle de Qualidade e Vistoria de Obras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section lang="en">
      <div className={inter.className}>
        {children}
        <SpeedInsights />
      </div>
    </section>
  );
}
