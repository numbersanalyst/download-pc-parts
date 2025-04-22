import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface MenuIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  isOpen?: boolean;
}

export interface MenuIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export const MenuIcon = forwardRef<MenuIconHandle, MenuIconProps>(
  ({ className, size = 24, isOpen = false, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="relative" style={{ width: size, height: size }}>
          <span 
            className={cn(
              "absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out",
              isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
            )}
            style={{ top: isOpen ? "50%" : "20%" }}
          />
          <span 
            className={cn(
              "absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2 transition-all duration-300 ease-in-out",
              isOpen && "opacity-0"
            )}
          />
          <span 
            className={cn(
              "absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out",
              isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : ""
            )}
            style={{ bottom: isOpen ? "auto" : "20%", top: isOpen ? "50%" : "auto" }}
          />
        </div>
      </div>
    );
  }
);

MenuIcon.displayName = 'MenuIcon';
