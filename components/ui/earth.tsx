'use client';

import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface EarthIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface EarthIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const pathVariants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    pathOffset: 0,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
  },
};

const circleVariants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [1, 1.1],
    opacity: [1, 0.8],
  },
};

const EarthIcon = forwardRef<EarthIconHandle, EarthIconProps>(
  ({ className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isMounted = useRef(false);
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      isMounted.current = true;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && isMounted.current) {
              controls.start('animate');
            } else if (isMounted.current) {
              controls.stop();
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (iconRef.current) {
        observer.observe(iconRef.current);
      }
      
      return () => {
        isMounted.current = false;
        if (iconRef.current) {
          observer.unobserve(iconRef.current);
        }
        observer.disconnect();
      };
    }, [controls]);

    useImperativeHandle(ref, () => ({
      startAnimation: () => {
        if (isMounted.current) {
          controls.start('animate');
        }
      },
      stopAnimation: () => {
        if (isMounted.current) {
          controls.start('normal');
        }
      },
    }));

    return (
      <div
        ref={iconRef}
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
            initial="normal"
            animate={controls}
            d="M21.54 15H17a2 2 0 0 0-2 2v4.54"
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            variants={pathVariants}
          />
          <motion.path
            initial="normal"
            animate={controls}
            d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            variants={pathVariants}
          />
          <motion.path
            initial="normal"
            animate={controls}
            d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            variants={pathVariants}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            initial="normal"
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            variants={circleVariants}
            animate={controls}
          />
        </svg>
      </div>
    );
  }
);

EarthIcon.displayName = 'EarthIcon';

export { EarthIcon };
