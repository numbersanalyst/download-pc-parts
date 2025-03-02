"use client";

import Image from "next/image";
import { useStoreSelectors } from "@/stores/store";
import { rams } from "@/data/rams";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { cn, scrollToElement } from "@/lib/utils";

export const SelectRam = () => {
  const selectedRam = useStoreSelectors.use.selectedRam();
  const setRam = useStoreSelectors.use.setRam();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-4 mt-10"
    >
      <h2 id="ram-carousel" className="text-2xl font-bold">Available RAM options</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/50 dark:from-background/75 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background/50 dark:from-background/75 to-transparent z-10" />
        <Carousel className="w-full" opts={{ slidesToScroll: "auto" }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {rams.map((ram) => (
              <CarouselItem
                key={ram.id}
                className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 min-w-0 cursor-pointer group"
                onClick={() => {
                  setRam(ram);
                  scrollToElement("#ram-details");
                }}
              >
                <Card className={cn(
                  selectedRam?.id === ram.id && "border border-white border-opacity-50",
                )}>
                  <CardContent className="flex flex-col items-center justify-center p-6 select-none">
                    <Image
                      src={ram.image}
                      alt={`${ram.capacity} ${ram.type} RAM`}
                      width={130}
                      height={130}
                      className="object-contain text-center select-none w-[130px] h-[130px] group-hover:scale-105 transition-scale duration-300 ease-in-out"
                    />
                    <div className="text-center mt-4">
                      <p className="text-lg font-semibold whitespace-nowrap">{ram.capacity} {ram.type}</p>
                      <p className="text-gray-600">${ram.price}</p>
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
}