"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { DetailsItem } from "./details-item";

type Property = {
  title: string;
  key: string;
};

type SelectedComponentDetailsProps = {
  type: string;
  brand?: string;
  selectedItem: {
    image: string;
    model: string;
    [key: string]: string | number | null;
  };
  properties: Property[];
};

export const SelectedComponentDetails = ({
  type,
  brand,
  selectedItem,
  properties,
}: SelectedComponentDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="h-[800px] md:h-[500px]"
    >
      <Card
        id={`${type.toLowerCase()}-details`}
        className="flex flex-col md:flex-row h-full z-20"
      >
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10 relative">
          <Image
            src={selectedItem?.secondImage &&  typeof selectedItem?.secondImage === "string" ? selectedItem.secondImage : selectedItem.image}
            alt={`${selectedItem.model} ${type} image`}
            width={350}
            height={350}
            className="object-contain w-[350px] h-[350px] text-center"
          />
        </div>

        <Separator className="block md:hidden px-2" orientation="horizontal" />
        <Separator className="hidden md:block py-2" orientation="vertical" />

        <ScrollArea className="w-full md:w-1/2 h-full max-h-[500px]">
          <div className="flex flex-col gap-4 p-10 mb-14">
            {brand && <DetailsItem title="Manufacture" data={brand} />}
            {properties.map((prop) => (
              <DetailsItem
                key={prop.key}
                title={prop.title}
                data={selectedItem[prop.key]}
              />
            ))}
          </div>
          <div className="absolute left-2 right-2 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
        </ScrollArea>
      </Card>
    </motion.div>
  );
};
