"use client";

import { TabsTrigger } from "./tabs";
import { motion } from "framer-motion";

type CustomTabsTriggerProps = {
  value: string;
  isActive: boolean | undefined;
  children: React.ReactNode;
};

export function CustomTabsTrigger({
  value,
  isActive,
  children,
}: CustomTabsTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className="relative flex items-center gap-2 cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors text-foreground/80 hover:text-primary data-[state=active]:bg-muted data-[state=active]:text-primary"
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="lamp"
          className="absolute inset-0 w-full bg-primary/5 rounded-full z-1"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
          </div>
        </motion.div>
      )}
    </TabsTrigger>
  );
}
