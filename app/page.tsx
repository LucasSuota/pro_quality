"use client";

import {
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
        <Header />
        <Hero />
        <Services />
        <WhyProQuality />
        <RealizedProjectsPreview />
        <Footer />
      </Transition>
    </>
  );
}
