import { Separator } from "../ui/separator";

interface SelectionHeaderProps {
  step: number;
  title: string;
  description: string;
}

export const SelectionHeader = ({
  step,
  title,
  description,
}: SelectionHeaderProps) => {
  return (
    <>
      <div className="mt-10 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center w-full gap-8">
        <div className="w-16 h-16 text-2xl flex justify-center items-center bg-accent rounded-full">
          {step}
        </div>
        <div className="flex flex-col">
          <p className="text-2xl">{title}</p>
          <p className="text-xl text-gray-500">{description}</p>
        </div>
      </div>
      <Separator />
    </>
  );
};
