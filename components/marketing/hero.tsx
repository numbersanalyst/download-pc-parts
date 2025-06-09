"use client";

import Image from "next/image";
import Link from "next/link";

import cpuImage from "@/public/cpu/intel/intel-i9-14900k.png";
import gpuImage from "@/public/gpu/amd/RX-9070XT.png";
import computerImage from "@/public/pc/main.webp";
import { RainbowButton } from "../magicui/rainbow-button";
import clsx from "clsx";
import { motion } from "framer-motion";

import { Chakra_Petch } from "next/font/google";
import { ArrowRight, MonitorCheck, Cpu, Sparkles } from "lucide-react";
import { useStoreSelectors } from "@/stores/store";
import { useEffect, useState } from "react";

const chakraPetch = Chakra_Petch({
  weight: "500",
  subsets: ["latin"],
});

export const Hero = () => {
  const [isContinue, setIsContinue] = useState<boolean>(false);
  const isDataEmpty = useStoreSelectors.use.isDataEmpty();

  useEffect(() => {
    if (!isDataEmpty()) {
      setIsContinue(true);
    }
  }, []);

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-hidden">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      <div className="container mx-auto max-w-screen-xl relative">
        <div className="flex items-center justify-center">
          <div className="inline-flex gap-3 border py-1 px-3 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-2">
              <span>Test it now</span>
              <MonitorCheck size={16} />
            </span>
          </div>
        </div>

        <motion.div
          className="lg:hidden flex flex-col items-center justify-center gap-2 mt-8"
          initial={{ opacity: 0.0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Image
            src={computerImage}
            height={500}
            width={500}
            alt="Computer image"
            className="max-w-full"
            draggable="false"
            quality={90}
          />
          <p className="text-sm opacity-50 italic z-10">
            Best PC build from{" "}
            <a href="https://powergpu.com/" className="font-semibold">
              powergpu.com
            </a>
          </p>
        </motion.div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1
              className={clsx(
                "text-7xl sm:text-8xl md:text-9xl tracking-tighter text-center inline-flex ",
                chakraPetch.className
              )}
            >
              DOWNLOAD
              <br /> PC PARTS
            </h1>
            <motion.div
              className="absolute right-[-350px] top-[80px] hidden lg:block"
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              whileDrag={{ scale: 1.1, rotate: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3,
                ease: "easeInOut",
              }}
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
                quality={90}
              />
            </motion.div>
            <motion.div
              className="absolute left-[-320px] top-[80px] hidden lg:block"
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              whileDrag={{ scale: 1.1, rotate: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3,
                ease: "easeInOut",
              }}
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
                quality={90}
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Trusted by the World's Most Gullible Tech Enthusiasts. Seamlessly
            acquire top-tier hardware components with unparalleled speed and
            efficiency.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Link href={"/configure"}>
            <RainbowButton className="group">
              {isContinue ? "Continue Configuration" : "Get Started Now"}
              <ArrowRight className="ml-1 size-4 group-hover:translate-x-1 transition-transform duration-300" />
            </RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
