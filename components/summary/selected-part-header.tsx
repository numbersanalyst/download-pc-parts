interface SelectedPartHeaderProps {
  step: number;
  title: string;
  description: string;
}

export const SelectedPartHeader = ({
  step,
  title,
  description,
}: SelectedPartHeaderProps) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-12 h-12 text-2xl flex justify-center items-center bg-accent rounded-full shrink-0">
          {step}
        </div>
        <div className="flex flex-col">
          <p className="text-xl">{title}</p>
          <p className="text-lg text-gray-500">{description}</p>
        </div>
      </div>
    </>
  );
};
