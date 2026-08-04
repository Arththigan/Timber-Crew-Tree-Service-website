import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  delay?: number;
};

/** True when the device is likely a touch/mobile screen. */
const isMobile =
  typeof window !== 'undefined' &&
  (window.matchMedia('(max-width: 768px)').matches ||
    window.matchMedia('(pointer: coarse)').matches);

/**
 * On desktop: continuous scroll-driven parallax (moves while scrolling).
 * On mobile: simple one-shot fade-up on enter — no continuous movement.
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

  const move = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [distance, 0, -distance],
  );
  const reverseMove = useTransform(move, (value) => -value);
  const stationary = useTransform(scrollYProgress, () => 0);

  const x: MotionValue<number> =
    direction === 'left' ? move : direction === 'right' ? reverseMove : stationary;
  const y: MotionValue<number> =
    direction === 'up' ? move : direction === 'down' ? reverseMove : stationary;

  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  /* ── Mobile: simple one-shot fade-up, no continuous movement ── */
  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  /* ── Desktop: scroll-driven parallax ── */
  return (
    <motion.div
      ref={ref}
      style={{ x, y, opacity: scrollOpacity }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
