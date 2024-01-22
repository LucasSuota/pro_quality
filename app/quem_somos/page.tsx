"use client";

import { ActionButton, Footer, Header, Presentation } from "@/components";
import Transition from "@/components/Transition/Transition";

export default function Home() {
  return (
    <>
      <Transition>
        <ActionButton />
        <Header />
        <Presentation />
        <Footer />
      </Transition>
    </>
  );
}
