"use client";

import Image from "next/image";
import Link from "next/link";

import cpuImage from "@/public/cpu/intel/intel-i9-14900k.png";
import gpuImage from "@/public/gpu/amd/RX-9070XT.png";
import { RainbowButton } from "../magicui/rainbow-button";
import clsx from "clsx";
import { motion } from "framer-motion";

import { Chakra_Petch } from "next/font/google";
import { ArrowRight, Book } from "lucide-react";
import { useStoreSelectors } from "@/stores/store";
const chakraPetch = Chakra_Petch({
  weight: "400",
  subsets: ["latin"],
});

export const Hero = () => {
  const isDataEmpty = useStoreSelectors.use.isDataEmpty();
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-hidden">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      <div className="container mx-auto max-w-screen-xl relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-3 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-2">
              <span>Read More</span>
              <Book size={16} />
            </span>
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1
              className={clsx(
                "text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex",
                chakraPetch.className
              )}
            >
              DOWNLOAD
              <br /> PC PARTS
            </h1>
            <motion.div
              className="absolute right-[-350px] top-[80px] rotate-3 hidden lg:block"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cpuImage}
                height={300}
                width={300}
                alt="CPU image"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[-320px] top-[80px] -rotate-3 hidden lg:block"
              drag
              dragSnapToOrigin
            >
              <Image
                src={gpuImage}
                height={320}
                width={320}
                alt="GPU image"
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Trusted by the World’s Most Gullible Tech Enthusiasts. Seamlessly
            acquire top-tier hardware components with unparalleled speed and
            efficiency.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Link href={"/configure"}>
            <RainbowButton>{isDataEmpty() ? "Get Started Now" : "Continue Configuration"}<ArrowRight className="ml-2 size-4"/></RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
