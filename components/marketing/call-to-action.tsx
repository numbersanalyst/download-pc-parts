"use client";

import Image from "next/image";
import helixImage from "@/public/images/helix2.png";
import emojiStarImage from "@/public/images/emojistar.png";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <div
      id="contact"
      className="bg-black text-white py-[72px] sm:py-24 text-center"
    >
      <div className="container max-w-xl relative">
        <motion.div
          className="absolute top-6 left-[calc(100%-24px)]"
          drag
          dragSnapToOrigin
        >
          <Image
            src={helixImage}
            alt="helix image"
            className="max-w-none"
            draggable="false"
          />
        </motion.div>
        <motion.div
          className="absolute -top-[120px] right-[calc(100%-24px)]"
          drag
          dragSnapToOrigin>
          <Image
            src={emojiStarImage}
            alt="emoji image"
            className="max-w-none"
            draggable="false"
          />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Contact with us
        </h2>
        <p className="text-xl text-white/70 mt-5"></p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5 shrink-0">
            Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
