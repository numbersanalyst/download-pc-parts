"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { cn, scrollToElement } from "@/lib/utils";
import { CloudAlert, Loader2 } from "lucide-react";

type ItemType = {
  id: string | number;
  model: string;
  price: number;
  image: string;
  [key: string]: string | number | null;
};

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

const ImagePlaceholder = ({
  className,
  isLoading,
}: {
  className?: string;
  isLoading: boolean;
}) => (
  <div
    className={cn(
      "bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md flex items-center justify-center",
      className
    )}
  >
    {isLoading && (
      <Loader2 className="w-8 h-8 text-gray-400 dark:text-gray-500 animate-spin" />
    )}
  </div>
);

const CarouselItemComponent = <T extends ItemType>({
  item,
  type,
  brand,
  isSelected,
  onClick,
}: {
  item: T;
  type: string;
  brand?: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageLoading(true);
    setImageError(false);

    return () => {
      setImageLoading(false);
      setImageError(false);
    };
  }, [item.image]);

  const borderColor = (brand && brandBorderColors[brand]) || "border-gray-500";
  const borderClass = isSelected
    ? `border ${borderColor} border-opacity-60`
    : "";

  return (
    <CarouselItem
      className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 min-w-0 cursor-pointer group"
      onClick={onClick}
    >
      <Card
        className={cn(
          borderClass,
          "transition-all duration-200 hover:shadow-md"
        )}
      >
        <CardContent className="flex flex-col items-center justify-center p-6 select-none">
          <div className="relative w-[130px] h-[130px] mb-4">
            {/* Placeholder shown with icon while loading or on error with special icon */}
            {(imageLoading || imageError) && (
              <ImagePlaceholder
                className="absolute inset-0 w-full h-full"
                isLoading={imageLoading}
              />
            )}

            {/* Error state - special text */}
            {imageError && !imageLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 text-xs">
                <CloudAlert className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                <span>Failed to load</span>
              </div>
            )}

            {/* Actual image */}
            {!imageError && (
              <Image
                src={item.image}
                alt={`${item.model} ${type} image`}
                width={130}
                height={130}
                className={cn(
                  "object-contain text-center select-none w-[130px] h-[130px] transition-all duration-300",
                  "group-hover:scale-105",
                  imageLoading ? "opacity-0" : "opacity-100"
                )}
                placeholder="empty"
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  setImageError(true);
                }}
                priority={false}
                sizes="130px"
              />
            )}
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold whitespace-nowrap">
              {item.model}
            </p>
            <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
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
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/50 dark:from-background/75 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background/50 dark:from-background/75 to-transparent z-10 pointer-events-none" />
        <Carousel
          className="w-full"
          opts={{ slidesToScroll: "auto", loop: true }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item) => {
              const isSelected =
                selectedItem && selectedItem.model === item.model;

              return (
                <CarouselItemComponent
                  key={item.id}
                  item={item}
                  type={type}
                  brand={brand}
                  isSelected={isSelected ?? false}
                  onClick={() => {
                    setSelectedItem(item);
                    scrollToElement(`#${type.toLowerCase()}-details`);
                  }}
                />
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
