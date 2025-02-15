import { ConfettiSideCannons } from "@/components/summary/confetti";
import { MoveLeft } from "lucide-react";

import Link from "next/link";

export default function Summary() {
  return (
    <>
      <Link className="bg-accent/75 rounded-xl text-xl p-6 flex items-center gap-x-6 flex-1" href="/configure">
        <MoveLeft />
        Go back
      </Link>

      <div className="mt-20 flex flex-col items-center gap-8">
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 p-2">
          Congrats
        </h1>
        <h2 className="text-gray-500 pointer-events-none whitespace-pre-wrap text-center text-xl md:text-2xl">
          You can now download your new PC parts
        </h2>

        <ConfettiSideCannons />
      </div>
    </>
  );
}
