"use client";

import Image from "next/image";
import appScreen from "@/public/images/computer.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div
      id="app"
      className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] lg:py-24"
    >
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Exclusive technology
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            We have something you can't find anywhere else. We're changing the
            way the world works.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="The product screenshot"
            className="mt-14 w-full rounded-xl"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};
