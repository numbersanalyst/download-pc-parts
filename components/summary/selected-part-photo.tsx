import Image from "next/image";

interface SelectedPartPhotoProps {
  text: string;
  imgSrc: string;
  id?: string;
}

export const SelectedPartPhoto = ({ text, imgSrc, id }: SelectedPartPhotoProps) => {
  return (
    <div className="w-fit flex items-center justify-center p-4 md:p-10 relative">
      <p
        className="text-5xl sm:text-6xl md:text-8xl text-center font-bold absolute
                text-white mix-blend-difference opacity-75 contrast-200 brightness-200"
      >
        {text}
      </p>
      <Image
        src={imgSrc}
        alt={text}
        width={550}
        height={550}
        quality={100}
        className="object-contain w-[550px] max-h-[550px] text-center"
        id={id}
      />
    </div>
  )
}