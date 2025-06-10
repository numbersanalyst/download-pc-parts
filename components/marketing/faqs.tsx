"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const items = [
  {
    question: "Is it safe to download PC parts?",
    answer:
      "Absolutely! Our downloads are 100% virus-free and come with a built-in warranty against digital dust bunnies. Plus, our open-source code is so transparent, it’s practically waving hello.",
  },
  {
    question: "How much does it cost?",
    answer: "It’s free! Because innovation like this shouldn’t cost a dime.",
  },
  {
    question: "Can I download an entire PC at once?",
    answer:
      "Not yet—our servers are still recovering from the last attempt. But we’re working on it! For now, you’ll have to download parts one by one and enjoy the thrill of virtual assembly.",
  },
  {
    question: "Will downloading PC parts make my computer faster?",
    answer:
      "In theory, yes! In reality, your computer might just sit there, confused, wondering why you’re doing this to it.",
  },
  {
    question: "What operating systems can I download PC parts for?",
    answer:
      "Currently, we only support Windows 10 and Windows 11. We plan to add support for other operating systems in the future.",
  },
  {
    question: "Can I choose other parts to download?",
    answer:
      "Yes, absolutely! To select specific parts, don't choose any initially and proceed to the summary. You'll be able to customize your selection there."
  },  
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-7 border-white/30">
      <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{
          opacity: 0,
          height: 0,
          marginTop: 0,
        }}
        animate={{
          opacity: 1,
          height: 'auto',
          marginTop: '16px',
        }}
        exit={{
          opacity: 0,
          height: 0,
          marginTop: 0,
        }}
      >
        {answer}
      </motion.div>
      )}
      </AnimatePresence>
      </div>
  );
};

export const FAQs = () => {
  return (
    <div
      id="faq"
      className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24"
    >
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px mx-auto]">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
