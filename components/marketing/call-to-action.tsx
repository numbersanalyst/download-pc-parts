import Image from "next/image";
import helixImage from "@/public/images/helix2.png";
import emojiStarImage from "@/public/images/emojistar.png";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image src={helixImage} alt="" className="absolute top-6 left-[calc(100%-24px)]" />
        <Image src={emojiStarImage} alt="" className="absolute -top-[120px] right-[calc(100%-24px)]" />
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get instant access</h2>
        <p className="text-xl text-white/70 mt-5"></p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5 shrink-0">Get access</button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;