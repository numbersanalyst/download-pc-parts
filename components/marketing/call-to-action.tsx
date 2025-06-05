"use client";

import Image from "next/image";
import helixImage from "@/public/images/helix2.png";
import emojiStarImage from "@/public/images/emojistar.png";
import { AnimatePresence, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CircleCheckIcon } from "../ui/circle-check";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  }, [isSubmitted]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"]  });
  const translateY = useTransform(scrollYProgress, [0,1], [-100, 0]);

  return (
    <div
      ref={containerRef}
      id="contact"
      className="bg-black text-white py-[72px] sm:py-24 text-center"
    >
      <div className="container max-w-xl relative">
        <motion.div
          style={{translateY}}
          className="absolute top-2 left-[calc(100%-24px)] hidden lg:block"
          drag
          dragSnapToOrigin
        >
          <Image
            src={helixImage}
            alt="helix image"
            className="max-w-none"
            draggable="false"
            quality={90}
          />
        </motion.div>
        <motion.div
          style={{translateY}}
          className="absolute -top-[100px] right-[calc(100%-24px)] hidden lg:block"
          drag
          dragSnapToOrigin>
          <Image
            src={emojiStarImage}
            alt="emoji image"
            className="max-w-none"
            draggable="false"
            quality={90}
          />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Contact with us
        </h2>
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5 shrink-0">
            Contact
          </button>
        </form>
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-6 flex items-center justify-center gap-2 text-green-400 absolute -bottom-14 md:-bottom-12 md:left-0 md:right-0 left-14 right-14"
            >
              <CircleCheckIcon size={20} className="text-green-400" />
              <p>Thanks! We'll bombard you with messages, stay tuned! 🚀</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CallToAction;
