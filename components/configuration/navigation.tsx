import { FileInput, MoveLeft } from "lucide-react";
import { NavigationBtn } from "@/components/nav-btn";

export const Navigation = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-y-2 gap-x-4 w-full">
            <NavigationBtn path="/" text="Go back" icon={<MoveLeft />} />
            <NavigationBtn path="/summary" text="Summary" icon={<FileInput />} alignmentEnd />
        </div>
    );
}
