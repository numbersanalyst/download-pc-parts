import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavigationBtnProps {
  path: string;
  text: string;
  icon: React.ReactNode;
  alignmentEnd?: boolean;
}

export const NavigationBtn = ({
  path,
  text,
  icon,
  alignmentEnd,
}: NavigationBtnProps) => {
  return (
    <Link
      className={cn(
        "bg-accent/75 rounded-xl text-xl p-6 flex items-center gap-x-6 w-full",
        alignmentEnd && "flex-row-reverse"
      )}
      href={path}
    >
      {icon}
      {text}
    </Link>
  );
};
