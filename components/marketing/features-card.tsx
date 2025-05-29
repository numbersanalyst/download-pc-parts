"use client";

import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import { useEffect, useRef } from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
    const borderRef = useRef<HTMLDivElement>(null);
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(150px 150px at ${offsetX}px ${offsetY}px, black, transparent)`;

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!borderRef.current) return;
            const borderRect = borderRef.current.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [offsetX, offsetY]);

    return (
        <div className="border border-white/30 px-5 py-14 text-center rounded-xl sm:flex-1 relative">
            <motion.div
                className="absolute inset-0 border-2 border-purple-400 rounded-xl"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage
                }}
                ref={borderRef}
            ></motion.div>
            <div className="inline-flex w-14 h-14 bg-white text-black justify-center items-center rounded-lg">
                {icon}
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/80">{description}</p>
        </div>
    );
};

export { FeatureCard };