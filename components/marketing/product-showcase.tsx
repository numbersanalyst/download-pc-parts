import Image from "next/image";
import appScreen from "@/public/images/app-screen-cpu-select.png";

export const ProductShowcase = () => {
  return (
    <div
      id="app"
      className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] lg:py-24"
    >
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebraty the joy of working with an app designed to make your PC
            better in just a few clicks
          </p>
        </div>
        <Image
          src={appScreen}
          alt="The product screenshot"
          className="mt-14 w-full rounded-xl"
        />
      </div>
    </div>
  );
};
