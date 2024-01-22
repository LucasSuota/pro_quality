"use client";

import {
  ActionButton,
  Footer,
  Header,
  Hero,
  RealizedProjectsPreview,
  Services,
  WhyProQuality,
} from "@/components";
import Transition from "@/components/Transition/Transition";

export default function Home() {
  return (
    <>
      <Transition>
        <ActionButton />
        <Header />
        <Hero />
        <Services />
        <RealizedProjectsPreview />
        <WhyProQuality />
        <Footer />
      </Transition>
    </>
  );
}
