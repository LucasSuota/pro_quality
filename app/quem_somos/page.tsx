"use client";

import { Footer, Header, Presentation } from "@/components";
import Transition from "@/components/Transition/Transition";

export default function Home() {
  return (
    <>
      <Transition>
        <Header />
        <Presentation />
        <Footer />
      </Transition>
    </>
  );
}
