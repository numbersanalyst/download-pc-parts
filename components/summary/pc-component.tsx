import Image from "next/image";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { ArrowRightIcon } from "lucide-react";

export const PcComponent = () => {
    return <Card className="flex w-full max-w-[460px] h-[96px] cursor-pointer group">
        <div className="w-1/3 flex justify-center items-center hover:-rotate-6 transition-rotate duration-300 ease-in-out">
            <Image src="/amd-ryzen-9-7950X3D.png" alt="selected CPU photo" width={75} height={75} />
        </div>

        <Separator orientation="vertical" className="h-full"/>

        <div className="w-2/3">
            <div className="px-6 flex justify-between items-center h-full">
            <div className="flex flex-col justify-center">
            <p className="text-xl font-semibold">AMD Ryzen 9 7950X3D</p>
            <p className="text-md text-gray-500">5 GHz, 16 cores, 32 threads</p>
            </div>
            <div>
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 ease-in-out"/>
            </div>
            </div>
        </div>
    </Card>
};