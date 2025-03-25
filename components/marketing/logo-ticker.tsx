"use client";

import acmeLogo from "@/public/images/acme.png";
import quantumLogo from "@/public/images/quantum.png";
import echoLogo from "@/public/images/echo.png";
import celestialLogo from "@/public/images/celestial.png";
import pulseLogo from "@/public/images/pulse.png";
import apexLogo from "@/public/images/apex.png";
import Image from "next/image";
import nvidiaLogo from "@/public/logos/nvidia_logo.jpg";
import bequietLogo from "@/public/logos/be-quiet_Logo.jpg";
import kingstoneLogo from "@/public/logos/kingston-logo.jpg";
import intelLogo from "@/public/logos/intel-logo.svg";
import lexarLogo from "@/public/logos/lexar-logo.jpg";
import misLogo from "@/public/logos/mis-logo.jpg";
import asusLogo from "@/public/logos/asus-logo.jpg";
import amdLogo from "@/public/logos/amd-logo.svg";

import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 flex justify-center">
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
            <Image
              src={nvidiaLogo}
              alt="nvidia logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={bequietLogo}
              alt="be-quiet logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={kingstoneLogo}
              alt="kingstone logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={intelLogo}
              alt="intel logo"
              className="flex-none w-auto h-10 lg:h-12 invert hue-rotate-180"
            />
            <Image
              src={lexarLogo}
              alt="lexar logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={misLogo}
              alt="mis logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={asusLogo}
              alt="asus logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={amdLogo}
              alt="amd logo"
              className="flex-none w-auto h-10 lg:h-12 invert hue-rotate-180"
            />
            {/* koniec */}
            <Image
              src={nvidiaLogo}
              alt="nvidia logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={bequietLogo}
              alt="be-quiet logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={kingstoneLogo}
              alt="kingstone logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={intelLogo}
              alt="intel logo"
              className="flex-none w-auto h-10 lg:h-12 invert hue-rotate-180"
            />
            <Image
              src={lexarLogo}
              alt="lexar logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={misLogo}
              alt="mis logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={asusLogo}
              alt="asus logo"
              className="flex-none w-auto h-10 lg:h-12"
            />
            <Image
              src={amdLogo}
              alt="amd logo"
              className="flex-none w-auto h-10 lg:h-12 invert hue-rotate-180"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
