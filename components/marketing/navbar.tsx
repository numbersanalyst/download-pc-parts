import Image from "next/image";
import logoImage from "@/public/logos/logo-dark.png";
import menuIcon from "@/public/icon/menu.svg";
import Link from "next/link";
import { ModeToggle } from "../theme-changer";

export const Navbar = () => {
  return (
    <div className="bg-black">
    <div className="px-4 ">
      <div className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md opacity-25"></div>
            <Image src={logoImage} alt="Saas logo" className="h-12 w-12 relative" />
          </div>
          <div className="flex flex-col text-white select-none">
            <span className="font-medium leading-tight text-xl">Download</span>
            <span className="font-medium leading-tight text-gray-300">PC Parts</span>
          </div>
        </div>
        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg">
          <Image src={menuIcon} alt="Menu icon" className="h-6 w-6" />
        </div>|
        <nav className="gap-6 items-center hidden sm:flex">
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Upadates</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
          <ModeToggle />
          <Link href={"/configure"} className="bg-white py-2 px-4 rounded-lg dark:text-black">Get for free</Link>
        </nav>
      </div>
     </div>
    </div>
  );
};
