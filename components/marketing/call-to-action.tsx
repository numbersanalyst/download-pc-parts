"use client";

import Image from "next/image";
import helixImage from "@/public/images/helix2.png";
import emojiStarImage from "@/public/images/emojistar.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

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
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center justify-center gap-2 text-green-400"
          >
            <CheckCircle2 size={18} />
            <p>Thanks! We'll bombard you with messages, stay tuned! 🚀</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
