"use client";

import { motion } from "framer-motion";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { scrollToElement } from "@/lib/utils";
import Image from "next/image";
import { Rocket } from "lucide-react";

import whitePcImage from "@/public/pc/white.png";
import darkPcImage from "@/public/pc/dark.webp";

export const HeroBackground = () => {
  return (
    <AuroraBackground className="min-h-[750px]">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0.0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1}}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
         >
          <Image
            src={darkPcImage}
            alt="PC image"
            height={650}
            width={650}
            className="dark:block hidden"
            quality={90}
          />
          <Image
            src={whitePcImage}
            alt="PC image"
            height={650}
            width={650}
            className="dark:hidden block"
            quality={90}
          />
        </motion.div>
        <p className="text-sm text-gray-800 dark:text-gray-400 z-10">
          Best PC build from{" "}
          <a href="https://powergpu.com/" className="font-semibold">
            powergpu.com
          </a>
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 w-full h-full"
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 radial-overlay z-[5]"></div>
        <div className="text-4xl md:text-7xl font-bold dark:text-white text-center relative z-10">
          Are you looking for something?
        </div>
        <div className="font-extralight text-2xl md:text-4xl dark:text-neutral-200 py-4 text-center relative z-10">
          We can offer you the best PC parts
        </div>
        <button
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-5 py-3 relative z-10 flex items-center gap-2 hover:scale-105 transition-all duration-300 group hover:shadow-lg"
          onClick={() => {
            scrollToElement("#cpu-brands");
          }}
        >
          Upgrade now
          <Rocket className="size-5 group-hover:rotate-12 transition-transform group-hover:animate-pulse" />
        </button>
      </motion.div>
    </AuroraBackground>
  );
};
