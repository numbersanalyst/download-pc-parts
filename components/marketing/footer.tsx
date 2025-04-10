import InstaIcon from "@/public/icons/insta.svg";
import XSocial from "@/public/icons/x-social.svg";
import TiktokIcon from "@/public/icons/tiktok.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";
import flagIcon from "@/public/icons/poland.png";
import GitHub from "@/public/icons/github.svg"
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-10 sm:py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-2">
            Made with pain in
            <Image className="w-5 h-4 object-none rounded-sm" src={flagIcon} alt="Poland flag" />
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a href="https://github.com/numbersanalyst/download-pc-parts" target="_blank" className="flex items-center gap-x-2 hover:text-white transition-colors">
              View project on
              <Image className="invert size-5" src={GitHub} alt="GitHub icon" />
            </a>
            <ul className="flex gap-4 mt-2 sm:mt-0">
              <li>
                <a href="https://twitter.com/swiatlinuksa" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image className="invert" src={XSocial} alt="X (Twitter) icon" />
                </a>
              </li>
              <li>
                <a href="http://www.instagram.com/olimpia22111?igsh=OWZmcjlqdHgwbjRy" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image className="invert" src={InstaIcon} alt="Instagram icon" />
                </a>
              </li>
              <li>
                <a href="http://www.tiktok.com/@itzk.ali2?_t=ZN-8vMPK0AOVgE&_r=1" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image className="invert" src={TiktokIcon} alt="TikTok icon" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@szqr0tka714" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image className="invert" src={YoutubeIcon} alt="YouTube icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
