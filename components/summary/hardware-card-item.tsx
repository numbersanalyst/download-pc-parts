"use client";

import { ChevronRight } from "lucide-react";
import { Card } from "../ui/card";

interface HardwareCardItemProps {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    onSelect: (hardware: string) => void;
    isSelected: boolean;
}

const HardwareCardItem = ({
    id,
    title,
    description,
    icon,
    onSelect,
    isSelected,
}: HardwareCardItemProps) => {
    return (
        <Card
            className={`
                relative overflow-hidden rounded-xl p-6 cursor-pointer
                transition-all duration-300 ease-in-out bg-background
                ${isSelected
                    ? "bg-secondary shadow-lg md:scale-105"
                    : "hover:shadow-lg hover:scale-102"
                }
            `}
            onClick={() => onSelect(id)}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="text-gray-500 dark:text-gray-300">{icon}</div>
                <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${isSelected && "rotate-90"
                        }`}
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
        </Card>
    );
};

export { HardwareCardItem };
