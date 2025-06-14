"use client";

import heroBgPhoto from "@/public/images/hero-background.jpeg";
import Image from "next/image";
import { motion } from "motion/react";
import { scrollToElement } from "@/lib/utils";
import { triggerConfetti } from "./confetti";
import { Download } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={heroBgPhoto}
        alt="Hero Background"
        fill
        className="object-cover"
        placeholder="blur"
        priority
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 text-center max-w-6xl"
        >
          <div
            className="text-6xl md:text-8xl font-bold text-white hover:scale-105 hover:rotate-3 duration-300 ease-in-out select-none cursor-pointer"
            onClick={triggerConfetti}
          >
            Congrats!
          </div>
          <div className="font-extralight text-xl md:text-3xl text-neutral-200 py-2">
            Your journey to building the ultimate PC starts here. Explore and
            download high-quality PC parts to power your dream machine.
          </div>
          <button
            className="bg-white rounded-full w-fit text-black px-5 py-3 relative z-10 flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-lg animate-pulse-slow group"
            onClick={() => {
              scrollToElement("#hardware-selection");
            }}
          >
            Start downloading
            <Download className="size-5 group-hover:animate-bounce" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
