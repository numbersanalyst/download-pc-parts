'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface HandCoinsIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface HandCoinsIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const circleVariants: Variants = {
  normal: {
    translateY: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 0.3 },
      type: 'spring',
      stiffness: 100,
      damping: 10,
      bounce: 0.8,
      duration: 1,
    },
  },
  animate: {
    opacity: [0, 1],
    translateY: [-20, 0],
    transition: {
      opacity: { duration: 0.3 },
      type: 'spring',
      stiffness: 100,
      damping: 10,
      bounce: 0.8,
      duration: 1,
    },
  },
};

const secondCircleVariants: Variants = {
  normal: {
    translateY: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 0.3 },
      delay: 0.3,
      type: 'spring',
      stiffness: 100,
      damping: 10,
      bounce: 0.8,
      duration: 1,
    },
  },
  animate: {
    opacity: [0, 1],
    translateY: [-20, 0],
    transition: {
      opacity: { duration: 0.3 },
      delay: 0.3,
      type: 'spring',
      stiffness: 100,
      damping: 10,
      bounce: 0.8,
      duration: 1,
    },
  },
};

const HandCoinsIcon = forwardRef<HandCoinsIconHandle, HandCoinsIconProps>(
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
          <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
          <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
          <path d="m2 16 6 6" />
          <motion.circle
            cx="16"
            cy="9"
            r="2.9"
            animate={controls}
            variants={circleVariants}
          />
          <motion.circle
            cx="6"
            cy="5"
            r="3"
            animate={controls}
            variants={secondCircleVariants}
          />
        </svg>
      </div>
    );
  }
);

HandCoinsIcon.displayName = 'HandCoinsIcon';

export { HandCoinsIcon };
