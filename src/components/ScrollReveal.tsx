import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the content travels as it scrolls through the viewport. */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** Travel distance in px. */
  distance?: number;
  /** Extra delay (s) applied to the transition. */
  delay?: number;
};


/**
 * Tracks this element's scroll position through the viewport and translates
 * it on the Y or X axis based on scroll progress — creating continuous,
 * scroll-driven movement (not just a one-shot reveal).
 */
export default function ScrollReveal({
  children,
  className,
  direction = 'up',
  distance = 80,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // progress 0 = element entering from bottom, 0.5 = centered, 1 = exiting top
  const move = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [distance, 0, -distance],
  );

  // Create every motion value unconditionally so hook ordering stays stable if
  // the direction prop changes between renders.
  const reverseMove = useTransform(move, (value) => -value);
  const stationary = useTransform(scrollYProgress, () => 0);

  const x: MotionValue<number> =
    direction === 'left' ? move : direction === 'right' ? reverseMove : stationary;

  const y: MotionValue<number> =
    direction === 'up' ? move : direction === 'down' ? reverseMove : stationary;

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, y, opacity }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
