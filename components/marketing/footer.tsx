import InstaIcon from "@/public/icons/insta.svg";
import XSocial from "@/public/icons/x-social.svg";
import TiktokIcon from "@/public/icons/tiktok.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";
import flagIcon from "@/public/icons/poland.png";
import GitHub from "@/public/icons/github.svg"
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className=" flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center flex gap-x-2 items-center">
            Made with pain in
            <Image className="w-5 h-4 object-none rounded-sm" src={flagIcon} alt="Poland flag" />
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <a href="https://github.com/numbersanalyst/download-pc-parts" target="_blank" className="flex items-center gap-x-4 mr-10">
                View project on 
                <Image className="invert size-5" src={GitHub} alt="icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/swiatlinuksa" target="_blank">
                <Image className="invert" src={XSocial} alt="icon" />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com/olimpia22111?igsh=OWZmcjlqdHgwbjRy" target="_blank">
                <Image className="invert" src={InstaIcon} alt="icon" />
              </a>
            </li>
            <li>
              <a href="http://www.tiktok.com/@itzk.ali2?_t=ZN-8vMPK0AOVgE&_r=1" target="_blank">
                <Image className="invert" src={TiktokIcon} alt="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@szqr0tka714" target="_blank">
                <Image className="invert" src={YoutubeIcon} alt="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
