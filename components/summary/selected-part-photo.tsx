import Image from "next/image";

interface SelectedPartPhotoProps {
  text: string;
  imgSrc: string;
}

export const SelectedPartPhoto = ({ text, imgSrc }: SelectedPartPhotoProps) => {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10 relative">
      <p
        className="text-5xl sm:text-6xl md:text-8xl text-center font-bold absolute
                text-white mix-blend-difference opacity-75 contrast-200 brightness-200"
      >
        {text}
      </p>
      <Image
        src={imgSrc}
        alt={text}
        width={450}
        height={450}
        className="object-contain w-[450px] h-[450px] text-center"
      />
    </div>
  )
}