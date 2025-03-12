import logoImage from "@/public/logos/logo.png";

export const Hero = () => {
    return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-clip">
    <div className="container">
        <div className="flex items-center justify-center">
            <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
                <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                    Version 2.0 is here</span>
                    <span className="inline-flex items-center gap-1">
                        <span>Read More</span>
                        <logoImage />
                    </span>
            </a>
        </div>
        <h1 className="text-7xl font-bold tracking-tighter text-center mt-8">
                One Task at a Time</h1>
        <p className="text-center text-xl mt-8">
            Celebrate the joy of accomplishment with an app designed to track 
            progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex justify-center mt-8">
             <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get for free</button>
        </div>
    </div>
    <div className="absolute h-[375px] w-[750px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)]"></div>
    </div>
    );
};