interface DetailsItemProps {
  title: string;
  data?: string | number | null;
}

export const DetailsItem = ({ title, data }: DetailsItemProps) => {
  return (
    <div className="break-keep">
      <p className="text-md text-gray-500">{title}</p>
      <p className="text-2xl font-semibold">{data || "N/A"}</p>
    </div>
  );
};
