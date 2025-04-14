"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useStoreSelectors } from "@/stores/store";

export const CustomCpuInput = () => {
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();

  const [customModel, setCustomModel] = useState("");
  const setCpuBrand = useStoreSelectors.use.setCpuBrand();
  const setProcessor = useStoreSelectors.use.setProcessor();

  if (selectedProcessor?.model) return null;

  const handleSubmit = () => {
    setCpuBrand(null);
    if (customModel.trim()) {
      setProcessor({
        id: 0,
        model: customModel,
        image: "/images/custom-cpu.png",
        microarchitecture: "Custom",
        socket: "Custom",
        coreCount: null,
        threadCount: null,
        coreClock: "Custom",
        boostClock: "Custom",
        tdp: "Custom",
        integratedGraphics: "Custom",
        price: 0,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[800px] md:h-[500px]"
    >
      <Card className="flex flex-col h-full z-20 bg-gradient-to-br from-background to-muted/50">
        <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Custom CPU</h2>
            <p className="text-muted-foreground">
              Enter your custom CPU model details
            </p>
          </div>
          
          <div className="w-full max-w-md space-y-4">
            <Input
              placeholder="Enter CPU Model (e.g., AMD Ryzen 9 7950X Processor)"
              value={customModel}
              onChange={(e) => setCustomModel(e.target.value)}
              className="bg-background/50 backdrop-blur-sm border-muted-foreground/20"
            />
            
            <Button 
              onClick={handleSubmit}
              className="w-full bg-primary/90 hover:bg-primary transition-colors"
              disabled={!customModel.trim()}
            >
              Add Custom CPU
            </Button>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>This will allow us to create a custom CPU for you</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}; 