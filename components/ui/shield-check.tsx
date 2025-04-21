'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface ShieldCheckIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ShieldCheckIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const pathVariants: Variants = {
  normal: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
  },
};

const ShieldCheckIcon = forwardRef<ShieldCheckIconHandle, ShieldCheckIconProps>(
  ({ className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useEffect(() => {
      const sequence = async () => {
        while (true) {
          await controls.start('animate');
          await controls.start('normal');
        }
      };
      sequence();
    }, [controls]);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal'),
      };
    });

    return (
      <div
        className={cn(
          `cursor-pointer select-none p-2 flex items-center justify-center`,
          className
        )}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            animate={controls}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            variants={{
              normal: {
                scale: 1,
                opacity: 1,
              },
              animate: {
                scale: [1, 1.1],
                opacity: [1, 0.8],
              },
            }}
          />
          <motion.path
            variants={pathVariants}
            initial="normal"
            animate={controls}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            d="m9 12 2 2 4-4"
          />
        </svg>
      </div>
    );
  }
);

ShieldCheckIcon.displayName = 'ShieldCheckIcon';

export { ShieldCheckIcon };
