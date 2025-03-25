import { FileInput, MoveLeft } from "lucide-react";
import { NavigationBtn } from "@/components/nav-btn";
import { cn } from "@/lib/utils";

interface NavigationProps { 
    className?: string
}

export const Navigation = ({className} : NavigationProps) => {
    return (
        <div className={cn("flex flex-col sm:flex-row gap-y-1 gap-x-4 w-full", className)}>
            <NavigationBtn path="/" text="Go back" icon={<MoveLeft />} />
            <NavigationBtn path="/summary" text="Summary" icon={<FileInput />} alignmentEnd />
        </div>
    );
}
