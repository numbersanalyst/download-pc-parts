import Image from "next/image";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { ArrowRightIcon } from "lucide-react";

interface PcPartProps {
  partSrc: string;
  type: string;
  brand?: string | null;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export const PcPart = ({
  partSrc,
  type,
  brand,
  title,
  subtitle,
  onClick,
}: PcPartProps) => {
  return (
    <Card
      className="flex w-full max-w-[560px] h-[135px] cursor-pointer group"
      onClick={onClick}
    >
      <div className="w-1/4 p-2 flex justify-center items-center hover:-rotate-6 transition-rotate duration-300 ease-in-out">
        <Image
          src={partSrc}
          alt={`Selected ${type} image`}
          width={95}
          height={95}
          className="w-[105px] h-[105px] object-contain text-centerp-1"
        />
      </div>

      <Separator orientation="vertical" className="h-full" />

      <div className="w-3/4">
        <div className="px-4 md:px-6 flex justify-between items-center h-full">
          <div className="flex flex-col justify-center w-full flex-1 shrink overflow-hidden">
            <p>
              {brand} {type}
            </p>
            <p className="text-2xl font-semibold">{title}</p>
            <div className="relative w-full">
              <p className="text-md text-gray-500 truncate">{subtitle}</p>
              <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent to-card"></div>
            </div>
          </div>
          <div className="w-fit ml-2">
            <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </Card>
  );
};
