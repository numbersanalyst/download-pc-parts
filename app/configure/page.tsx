"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { processors } from "@/data/processors";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Configure() {
  const [selectedCpuBrand, selectedCpuBrandHandler] = useState<"AMD" | "Intel" | "">("");
  const [selectedProcessor, selectedProcessorHandler] = useState<Number | null>(null);

  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-8 w-full max-w-6xl relative p-12">
        <Link className="absolute z-50 top-2 bg-black text-white rounded-3xl p-3" href="/">
          Go back
        </Link>

        <div className="flex h-[500px] lg:h-[400px] flex-col gap-4 lg:flex-row">
          <MagicCard
            className={cn(
              "cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl",
              selectedCpuBrand === "AMD" && "ring-1 ring-red-500 ring-opacity-60"
            )}
            gradientColor={"#ff0000"}
            gradientOpacity={0.1}
            gradientSize={300}
            gradientFrom="#ffc0c0"
            gradientTo="#ff9980"
            onClick={() => selectedCpuBrandHandler("AMD")}
          >
            <div className="relative">
              <Image
                className="dark:invert"
                src={"/amd-logo.svg"}
                alt="amd brand logo"
                width={270}
                height={270}
              />
              <p className="opacity-50 lg:absolute text-center w-full mt-2 lg:mt-5">AMD processors</p>
            </div>
          </MagicCard>
          <MagicCard
            className={cn(
              "cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl",
              selectedCpuBrand === "Intel" && "ring-1 ring-blue-500 ring-opacity-60"
            )}
            gradientColor={"#0099ff"}
            gradientOpacity={0.1}
            gradientSize={300}
            gradientFrom="#ccccff"
            gradientTo="#66ccff"
            onClick={() => selectedCpuBrandHandler("Intel")}
          >
            <div className="relative">
              <Image
                className="dark:invert dark:hue-rotate-180"
                src={"/intel-logo.svg"}
                alt="intel brand logo"
                width={200}
                height={200}
              />
              <p className="opacity-50 lg:absolute text-center w-full mt-2 lg:mt-5">Intel processors</p>
            </div>
          </MagicCard>
        </div>

        {selectedCpuBrand && (
          <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-2xl font-bold">Select your processor</h2>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background/75 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background/75 to-transparent z-10" />
              <Carousel className="w-full" opts={{slidesToScroll: "auto"}} >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {processors[selectedCpuBrand].map((processor) => (
                    <CarouselItem key={processor.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 min-w-0 cursor-pointer" onClick={() => selectedProcessorHandler(processor.id)}>
                      <Card>
                        <CardContent className="flex flex-col items-center justify-center p-6">
                          {/* FOR STACKBLITZ IMG INSTEAD OF IMAGE */}
                          {/* <img
                            src={processor.image}
                            alt={processor.model + " CPU image"}
                            className="object-contain text-center select-none w-[130px] h-[130px]"
                          /> */}
                          <Image
                            src={processor.image}
                            alt={processor.model + " CPU image"}
                            width={130}
                            height={130}
                            className="object-contain text-center select-none w-[130px] h-[130px]"
                          />
                          <div className="text-center mt-4">
                            <p className="text-lg font-semibold whitespace-nowrap">{processor.model}</p>
                            <p className="text-gray-600">${processor.price}</p>
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
          </div>
        )}
        
        <Card className="flex flex-col md:flex-row min-h-[500px]">
          <div className="w-full md:w-1/2 min-w-[300px] flex items-center justify-center p-10">
            <img
              src="/amd-ryzen-9-7950X3D.png"
              alt="amd-ryzen-9-7950X3D cpu"
              className="object-contain w-[350px] h-[350px]"
            />
          </div>

          <Separator className="block md:hidden px-2" orientation="horizontal"/>
          <Separator className="hidden md:block py-2" orientation="vertical"/>

          <ScrollArea className="w-full md:w-1/2 h-full max-h-[500px] relative">
            <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
            <div className="flex flex-col gap-2 p-10">
              <div>
                <p className="text-md opacity-75">Manufacture</p>
                <p className="text-2xl font-semibold">AMD</p>
              </div>
              <div>
                <p className="text-md opacity-75">Model</p>
                <p className="text-2xl font-semibold">Ryzen 9 7950X3D</p>
              </div>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </main>
  );
}
