import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToElement = (id: string, secondTime?: boolean) => {
  const element = document.querySelector(id);
  
  if (!element && !secondTime) {
    setTimeout(() => scrollToElement(id, true), 100);
  }
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
};
