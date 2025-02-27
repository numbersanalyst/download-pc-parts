import Image from "next/image";
import logoImage from "/logo.png";
import menuIcon from "/menu.svg";

export const Navbar = () => {
  return (
    <div className="container bg-black">
      <div className="py-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)]"></div>
          <Image src={logoImage} alt="Saas logo" className="h-12 w-12 relative" />
        </div>
        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg">
          <Image src={menuIcon} alt="Menu icon" className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
