"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { cn, scrollToElement } from "@/lib/utils";

type ItemType = {
  id: string | number;
  model: string;
  price: number;
  image: string;
  [key: string]: string | number | null;
}

interface SelectModelCarouselProps<T extends ItemType> {
  type: string;
  brand?: string;
  items: T[];
  selectedItem: T | null;
  setSelectedItem: (item: T | null) => void;
}

const brandBorderColors: Record<string, string> = {
  AMD: "border-red-500",
  Intel: "border-blue-500",
  Nvidia: "border-green-700",
};

export const SelectModelCarousel = <T extends ItemType>({
  type,
  brand,
  items,
  selectedItem,
  setSelectedItem,
}: SelectModelCarouselProps<T>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-4 mt-10"
    >
      <h2 id={`${type.toLowerCase()}-carousel`} className="text-2xl font-bold">
        {brand ? "Available models" : "Available options"}
      </h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/50 dark:from-background/75 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background/50 dark:from-background/75 to-transparent z-10" />
        <Carousel className="w-full" opts={{ slidesToScroll: "auto", loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item) => {
              const isSelected = selectedItem && selectedItem.model === item.model;
              const borderColor = (brand && brandBorderColors[brand]) || "border-gray-500";
              const borderClass = isSelected ? `border ${borderColor} border-opacity-60` : "";

              return (
                <CarouselItem
                  key={item.id}
                  className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 min-w-0 cursor-pointer group"
                  onClick={() => {
                    setSelectedItem(item);
                    scrollToElement(`#${type.toLowerCase()}-details`);
                  }}
                >
                  <Card className={cn(borderClass)}>
                    <CardContent className="flex flex-col items-center justify-center p-6 select-none">
                      <motion.div
                        initial={{ opacity: 0.0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.2,
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={`${item.model} ${type} image`}
                          width={130}
                          height={130}
                          className="object-contain text-center select-none w-[130px] h-[130px] group-hover:scale-105 transition-scale duration-300 ease-in-out animate-in fade-in duration-700"
                        />
                      </motion.div>
                      <div className="text-center mt-4">
                        <p className="text-lg font-semibold whitespace-nowrap">{item.model}</p>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.div>
  );
};
