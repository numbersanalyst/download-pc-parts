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

import Hero from "@/components/configuration/hero";

type ProcessorType = {
  id: number;
  model: string;
  price: number;
  image: string;
  microarchitecture: string;
  socket: string;
  coreCount: number;
  threadCount: number;
  coreClock: string;
  boostClock: string | null;
  tdp: string;
  integratedGraphics: string | null;
};

export default function Configure() {
  const [selectedCpuBrand, selectedCpuBrandHandler] = useState<"AMD" | "Intel" | "">("");
  const [selectedProcessor, selectedProcessorHandler] = useState<ProcessorType | "">("");

  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-8 w-full max-w-6xl relative p-12">

      {/* Dont working on stackblitz */}
      {/* <Hero /> */}

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center w-full gap-8">
          <div className="w-16 h-16 text-2xl flex justify-center items-center bg-accent rounded-full">1</div>
          <div className="flex flex-col">
            <p className="text-2xl">Select your CPU</p>
            <p className="text-xl text-gray-500">Choose brand, model and you are ready to go</p>
          </div>
        </div>
        <Separator />

        <Link className="absolute z-50 top-2 bg-black text-white rounded-3xl p-3" href="/">
          Go back
        </Link>

        <div className="flex h-[500px] lg:h-[400px] flex-col gap-4 lg:flex-row select-none">
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
              <p className="text-gray-500 lg:absolute text-center w-full mt-2 lg:mt-5">AMD processors</p>
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
              <p className="text-gray-500 lg:absolute text-center w-full mt-2 lg:mt-5">Intel processors</p>
            </div>
          </MagicCard>
        </div>

        {selectedCpuBrand && (
          <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-2xl font-bold">Available models</h2>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/50 dark:from-background/75 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background/50 dark:from-background/75 to-transparent z-10" />
              <Carousel className="w-full" opts={{ slidesToScroll: "auto" }} >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {processors[selectedCpuBrand].map((processor) => (
                    <CarouselItem key={processor.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 min-w-0 cursor-pointer" onClick={() => selectedProcessorHandler(processor)}>
                      <Card className={cn(selectedCpuBrand === "AMD" && selectedProcessor?.model === processor.model && "border border-red-500 border-opacity-60", selectedCpuBrand === "Intel" && selectedProcessor?.model === processor.model && "border border-blue-500 border-opacity-60")}>
                        <CardContent className="flex flex-col items-center justify-center p-6 select-none">
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

        {selectedProcessor && (
        <Card className="flex flex-col md:flex-row min-h-[500px]">
          <div className="w-full md:w-1/2 min-w-[300px] flex items-center justify-center p-4 md:p-10 relative">
            <p className="text-6xl md:text-8xl text-center font-bold absolute select-none
              text-white
              mix-blend-difference
              opacity-75
              contrast-200
              brightness-200">
              Details about your CPU
            </p>
            <Image
              src={selectedProcessor.image}
              alt={selectedProcessor.model + " CPU image"}
              width={350}
              height={350}
              className="object-contain w-[350px] h-[350px]"
            />
          </div>

          <Separator className="block md:hidden px-2" orientation="horizontal" />
          <Separator className="hidden md:block py-2" orientation="vertical" />

          <ScrollArea className="w-full md:w-1/2 h-full max-h-[500px]">
            <div className="flex flex-col gap-4 p-10">
              <div>
                <p className="text-md text-gray-500">Manufacture</p>
                <p className="text-2xl font-semibold">{selectedCpuBrand}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">Model</p>
                <p className="text-2xl font-semibold">{selectedProcessor.model}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">Microarchitecture</p>
                <p className="text-2xl font-semibold">{selectedProcessor.microarchitecture}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">Socket</p>
                <p className="text-2xl font-semibold">{selectedProcessor.socket}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">Core Count</p>
                <p className="text-2xl font-semibold">{selectedProcessor.coreCount}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">Thread Count</p>
                <p className="text-2xl font-semibold">{selectedProcessor.threadCount}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">Performance Core Clock</p>
                <p className="text-2xl font-semibold">{selectedProcessor.coreClock}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">Performance Core Boost Clock</p>
                <p className="text-2xl font-semibold">{selectedProcessor.boostClock || "N/A"}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">TDP</p>
                <p className="text-2xl font-semibold">{selectedProcessor.tdp}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">Integrated Graphics</p>
                <p className="text-2xl font-semibold">{selectedProcessor.integratedGraphics || "N/A"}</p>
              </div>
            </div>
            <div className="absolute left-2 right-2 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
          </ScrollArea>
        </Card>
        )}

      </div>
    </main>
  );
}
