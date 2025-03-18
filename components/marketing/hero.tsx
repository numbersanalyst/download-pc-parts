import Image from "next/image"; 

import logoImage from "@/public/logos/logo-dark.png";
import cpuImage from "@/public/cpu/intel/intel-i9-14900k.png";
import gpuImage from "@/public/gpu/nvidia/rtx-4090ti.png";

export const Hero = () => {
    return (
        <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-hidden">
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-full left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
            
            <div className="container mx-auto max-w-screen-xl relative">
                <div className="flex items-center justify-center">
                    <a href="#" className="inline-flex gap-3 border py-1 px-3 rounded-lg border-white/30">
                        <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
                            Version 2.0 is here
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <span>Read More</span>
                            <Image src={logoImage} alt="Logo" width={20} height={20} />
                        </span>
                    </a>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="inline-flex relative">
                        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
                            One Task 
                            <br />at a Time
                        </h1>
                        <Image 
                            src={cpuImage} 
                            height={200} 
                            width={200} 
                            alt="CPU image" 
                            className="absolute right-[-300px] top-[-50px] hidden lg:block" 
                        />
                        <Image 
                            src={gpuImage} 
                            height={200} 
                            width={200} 
                            alt="GPU image" 
                            className="absolute left-[-300px] top-[-50px] hidden lg:block" 
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <p className="text-center text-xl mt-8 max-w-md">
                        Celebrate the joy of accomplishment with an app designed to track 
                        progress, motivate your efforts, and celebrate your successes.
                    </p>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-white text-black py-3 px-6 rounded-lg font-medium">
                        Get for free
                    </button>
                </div>
            </div>
        </div>
    );
};