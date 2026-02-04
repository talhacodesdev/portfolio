import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo = ({ className, size = 40, showText = true }: LogoProps) => {
  return (
    <div className={cn('flex items-center gap-3 select-none group', className)}>
      <div
        className="relative flex items-center justify-center bg-background transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}>
        {/* Outer dashed border */}
        <div className="absolute inset-0 border-2 border-dashed border-primary/30 group-hover:border-primary/60 transition-colors rounded-none" />

        {/* Inner solid accents */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-primary" />

        {/* Central Monogram/Symbol - TC Combination */}
        <svg
          width={size * 0.65}
          height={size * 0.65}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground">
          {/* T Shape */}
          <path
            d="M2 6H12M7 6V18"
            style={{ stroke: 'var(--primary)' }}
            strokeWidth="2.5"
            strokeLinecap="square"
          />
          {/* C Shape - Interlocking/Next to T */}
          <path
            d="M20 6H15C13.5 6 12 7 12 9V15C12 17 13.5 18 15 18H20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
            className="text-foreground"
          />
        </svg>
      </div>

      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ width: 0, opacity: 0, x: -10 }}
            animate={{ width: 'auto', opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col justify-center overflow-hidden whitespace-nowrap">
            <span className="text-xl font-bold leading-none tracking-tight font-mono">
              Talha<span className="text-primary">.</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">
              Codes
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
