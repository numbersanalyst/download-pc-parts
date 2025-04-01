import InstaIcon from '@/public/icons/insta.svg';
import XSocial from '@/public/icons/x-social.svg';
import TiktokIcon from '@/public/icons/tiktok.svg';
import YoutubeIcon from '@/public/icons/youtube.svg';
import flagIcon from '@/public/icons/poland.png';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className=" flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center flex gap-x-2 items-center" >Made with pain in Poland
            <Image className="size-6" src={flagIcon} alt='icon' />
          </div>
          <ul className="flex justify-center gap-2.5">
            <li><Image className='invert' src={XSocial} alt='icon' /></li>
            <li><Image className='invert' src={InstaIcon} alt='icon' /></li>
            <li><Image className='invert' src={TiktokIcon} alt='icon' /></li>
            <li><Image className='invert' src={YoutubeIcon} alt='icon' /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
