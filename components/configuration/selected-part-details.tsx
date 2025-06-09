"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, Loader2, CloudAlert } from "lucide-react";
import { DetailsItem } from "./details-item";
import { cn } from "@/lib/utils";

type Property = {
  title: string;
  key: string;
};

type SelectedComponentDetailsProps = {
  type: string;
  brand?: string | null;
  selectedItem: {
    image: string;
    secondImage?: string;
    model: string;
    [key: string]: string | number | null | undefined;
  };
  properties: Property[];
};

export const SelectedComponentDetails = ({
  type,
  brand,
  selectedItem,
  properties,
}: SelectedComponentDetailsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageLoading(true);
    setImageError(false);
  }, [selectedItem.image]);

  const renderDetailsContent = () => (
    <div className="flex flex-col gap-4 p-10 pb-24 md:pb-10">
      {brand && <DetailsItem title="Manufacture" data={brand} />}
      {properties.map((prop) => (
        <DetailsItem
          key={prop.key}
          title={prop.title}
          data={selectedItem[prop.key]}
        />
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-auto md:h-[500px]"
    >
      <Card
        id={`${type.toLowerCase()}-details`}
        className="flex flex-col md:flex-row h-full z-20 overflow-hidden"
      >
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10 relative">
          <div className="relative w-full h-full max-w-[350px] max-h-[350px]">
            {(imageLoading || imageError) && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-neutral-900 opacity-40 animate-pulse rounded-md flex items-center justify-center">
                {imageLoading ? (
                  <Loader2 className="w-8 h-8 text-black dark:text-gray-500 animate-spin" />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-500 text-xs">
                    <CloudAlert className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                    <span>Failed to load</span>
                  </div>
                )}
              </div>
            )}
            <Image
              src={selectedItem?.secondImage ?? selectedItem.image}
              alt={`${selectedItem.model} ${type} image`}
              width={350}
              height={350}
              className={cn(
                "object-contain w-[350px] h-[350px] text-center transition-opacity duration-300 ease-in-out",
                (imageLoading || imageError) ? "opacity-0" : "opacity-100"
              )}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageLoading(false);
                setImageError(true);
              }}
              priority={true}
            />
          </div>
        </div>

        <Separator className="block md:hidden px-2" orientation="horizontal" />
        <Separator className="hidden md:block py-2" orientation="vertical" />

        <div className="w-full md:w-1/2 relative flex flex-col">
          {/* --- Mobile View Container --- */}
          <div className="block md:hidden relative h-[400px]">
            <ScrollArea className="h-[400px]">
              {renderDetailsContent()}
            </ScrollArea>

            {!isExpanded && (
              <>
                <div
                  className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"
                  aria-hidden="true"
                />

                <div
                  className="absolute inset-0 bg-transparent z-20"
                  aria-hidden="true"
                />
              </>
            )}

            <div className="absolute bottom-4 left-3 right-3 flex justify-center z-30">
              <Button
                variant="secondary"
                onClick={() => setIsExpanded(!isExpanded)}
                className="shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-full w-full mx-2"
              >
                {isExpanded ? <ChevronUp size={16} className="mr-2" /> : <ChevronDown size={16} className="mr-2" />}
                {isExpanded ? "Show less" : "Show more"}
              </Button>
            </div>
          </div>
          {/* --- End Mobile View --- */}


          {/* --- Desktop View --- */}
          <ScrollArea className="hidden md:block h-[500px]">
            {renderDetailsContent()}
          </ScrollArea>
          {/* --- End Desktop View --- */}

        </div>
      </Card>
    </motion.div>
  );
};