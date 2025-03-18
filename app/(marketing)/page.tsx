import { RainbowBanner } from "@/components/marketing/banner";
import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { LogoTicker } from "@/components/marketing/logoticker.tsx";

export default function Home() {
  return (
    <>
      <RainbowBanner />
      <Navbar />
      <Hero />
      <LogoTicker/>
    </>
  );
}