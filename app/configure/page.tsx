import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";
import Link from "next/link";

export default function Configure() {
  return (
    <div
      className={
        "flex h-[500px] max-w-6xl flex-col gap-4 lg:h-[250px] lg:flex-row p-12 relative"
      }
    >
      <Link className="absolute z-50 top-2 bg-black text-white rounded-3xl p-3" href="/" prefetch>Go back</Link>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl"
        gradientColor={"#ff0000"}
        gradientOpacity={0.1}
        gradientSize={300}
        gradientFrom="#ffc0c0"
        gradientTo="#ff9980"
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
        className="cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl"
        gradientColor={"#0099ff"}
        gradientOpacity={0.1}
        gradientSize={300}
        gradientFrom="#ccccff"
        gradientTo="#66ccff"
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
  );
}
