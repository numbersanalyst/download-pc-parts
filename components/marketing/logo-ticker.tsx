"use client";

import Image from "next/image";
import nvidiaLogo from "@/public/logos/nvidia_logo.webp";
import bequietLogo from "@/public/logos/be-quiet_Logo.webp";
import kingstoneLogo from "@/public/logos/kingston-logo.webp";
import intelLogo from "@/public/logos/intel-logo.svg";
import lexarLogo from "@/public/logos/lexar-logo.png";
import misLogo from "@/public/logos/mis-logo.webp";
import asusLogo from "@/public/logos/asus-logo.webp";
import amdLogo from "@/public/logos/amd-logo.svg";

import { motion } from "framer-motion";

const logos = [
  { src: nvidiaLogo, alt: "nvidia logo" },
  { src: bequietLogo, alt: "be-quiet logo" },
  { src: kingstoneLogo, alt: "kingstone logo" },
  { src: intelLogo, alt: "intel logo", invert: true },
  { src: lexarLogo, alt: "lexar logo" },
  { src: misLogo, alt: "mis logo" },
  { src: asusLogo, alt: "asus logo" },
  { src: amdLogo, alt: "amd logo", invert: true },
];

export const LogoTicker = () => {
  return (
    <div
      id="companies"
      className="bg-black text-white py-[72px] sm:py-24 flex justify-center"
    >
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 relative before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-48 after:w-48 before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))] before:z-10 after:z-10">
          <motion.div
            className="flex gap-8 sm:gap-12 md:gap-16"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={`object-contain h-10 lg:h-12 filter grayscale opacity-65 transition-[opacity, grayscale] duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 ${
                  logo.invert ? "invert hue-rotate-180" : ""
                }`}
              />
            ))}
            {/* Image loop goes here */}
            {logos.map((logo, index) => (
              <Image
                key={index + logos.length} // Ensure unique keys for the loop
                src={logo.src}
                alt={logo.alt}
                className={`object-contain h-10 lg:h-12 filter grayscale opacity-65 transition-[opacity, grayscale] duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 ${
                  logo.invert ? "invert hue-rotate-180" : ""
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
