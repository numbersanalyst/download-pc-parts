"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useStoreSelectors } from "@/stores/store";

export const CustomGpuInput = () => {
  const selectedGraphicCard = useStoreSelectors.use.selectedGraphicCard();
  
  const [customModel, setCustomModel] = useState("");
  const setGpuBrand = useStoreSelectors.use.setGpuBrand();
  const setGraphicCard = useStoreSelectors.use.setGraphicCard();

  if (selectedGraphicCard?.model) return null;

  const handleSubmit = () => {
    setGpuBrand(null);
    if (customModel.trim()) {
      setGraphicCard({
        id: 0,
        model: customModel,
        image: "/images/custom-gpu.png",
        vram: "Custom",
        memoryBus: "Custom",
        coreClock: "Custom",
        boostClock: "Custom",
        tdp: "Custom",
        powerConnectors: "Custom",
        ports: "Custom",
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
            <h2 className="text-2xl font-semibold tracking-tight">Custom GPU</h2>
            <p className="text-muted-foreground">
              Enter your custom GPU model details
            </p>
          </div>
          
          <div className="w-full max-w-md space-y-4">
            <Input
              placeholder="Enter GPU Model (e.g., Nvidia RTX 5999 Ti 32GB)"
              value={customModel}
              onChange={(e) => setCustomModel(e.target.value)}
              className="bg-background/50 backdrop-blur-sm border-muted-foreground/20"
            />
            
            <Button 
              onClick={handleSubmit}
              className="w-full bg-primary/90 hover:bg-primary transition-colors"
              disabled={!customModel.trim()}
            >
              Add Custom GPU
            </Button>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>This will allow us to create a custom GPU for you</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}; 