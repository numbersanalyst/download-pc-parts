import { RainbowBanner } from "@/components/marketing/banner";
import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { LogoTicker } from "@/components/marketing/logo-ticker";
import { Features } from "@/components/marketing/features";
import { Testimonials } from "@/components/marketing/testamonials";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { FAQs } from "@/components/marketing/faqs";
import { CallToAction } from "@/components/marketing/call-to-action";
import { Footer } from "@/components/marketing/footer";


export default function Home() {
  return (
    <>
      <RainbowBanner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}