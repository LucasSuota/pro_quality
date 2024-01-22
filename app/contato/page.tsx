"use client";

import { Contact, Footer, Header } from "@/components";
import Transition from "@/components/Transition/Transition";

export default function Home() {
  return (
    <>
      <Transition>
        <Header />
        <div
          className="min-w-full min-h-[300px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.70)),
          url('/assets/images/herobg.png')`,
            backgroundPosition: "center",
            backgroundSize: "fit",
          }}
        />
        <Contact />
        <Footer />
      </Transition>
    </>
  );
}
