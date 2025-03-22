"use client";

import { motion } from "motion/react";

import { AuroraBackground } from "@/components/ui/aurora-background";
// import { HeroModel } from "@/components/configuration/hero-model";
import { scrollToElement } from "@/lib/utils";
import Image from "next/image";

import whitePcImage from "@/public/pc/white.png";
import darkPcImage from "@/public/pc/dark.webp";

export const HeroBackground = () => {
  return (
    <AuroraBackground>
      {/* Disabled due to performance issues */}
      {/* <div className="absolute top-0 bottom-0 left-0 right-0">
        <HeroModel />
      </div> */}

      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
        <Image
          src={darkPcImage}
          alt="PC image"
          height={650}
          width={650}
          className="dark:block hidden"
        />
        <Image
          src={whitePcImage}
          alt="PC image"
          height={650}
          width={650}
          className="dark:hidden block"
        />
        <p className="text-sm text-gray-800 dark:text-gray-400">Best PC build from <a href="https://powergpu.com/" className="font-semibold">powergpu.com</a></p>
      </div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 1,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center relative z-10">
          Are you looking for something?
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 relative z-10">
          We can offer you the best PC parts
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 relative z-10" onClick={() => {scrollToElement("#cpu-brands")}}>
          Upgrade now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}