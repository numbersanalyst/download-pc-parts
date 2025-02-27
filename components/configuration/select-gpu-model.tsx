"use client";

import Image from "next/image";
import { useStoreSelectors } from "@/stores/store";
import { graphicsCards } from "@/data/graphics-cards";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { cn, scrollToElement } from "@/lib/utils";

export const SelectGpuModel = () => {
  const selectedGpuBrand = useStoreSelectors.use.selectedGpuBrand();
  const selectedGraphicCard = useStoreSelectors.use.selectedGraphicCard();
  const setGraphicCard = useStoreSelectors.use.setGraphicCard();

  return (
    selectedGpuBrand && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-4 mt-10"
      >
        <h2 id="gpu-carousel" className="text-2xl font-bold">Available models</h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/50 dark:from-background/75 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background/50 dark:from-background/75 to-transparent z-10" />
          <Carousel className="w-full" opts={{ slidesToScroll: "auto" }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {graphicsCards[selectedGpuBrand].map((gpu) => (
                <CarouselItem
                  key={gpu.id}
                  className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 min-w-0 cursor-pointer group"
                  onClick={() => {
                    setGraphicCard(gpu);
                    scrollToElement("#gpu-details");
                  }}
                >
                  <Card className={cn(
                    selectedGpuBrand === "AMD" && selectedGraphicCard && selectedGraphicCard.model === gpu.model && "border border-red-500 border-opacity-60",
                    selectedGpuBrand === "Intel" && selectedGraphicCard && selectedGraphicCard.model === gpu.model && "border border-blue-500 border-opacity-60",
                    selectedGpuBrand === "Nvidia" && selectedGraphicCard && selectedGraphicCard.model === gpu.model && "border border-green-700 border-opacity-60"
                  )}>
                    <CardContent className="flex flex-col items-center justify-center p-6 select-none">
                      <Image
                        src={gpu.image}
                        alt={gpu.model + " GPU image"}
                        width={130}
                        height={130}
                        className="object-contain text-center select-none w-[130px] h-[130px] group-hover:scale-105 transition-scale duration-300 ease-in-out"
                      />
                      <div className="text-center mt-4">
                        <p className="text-lg font-semibold whitespace-nowrap">{gpu.model}</p>
                        <p className="text-gray-600">${gpu.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.div>
    )
  )
}
