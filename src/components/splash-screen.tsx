'use client';

import { Logo } from '@/components/logo';
import { motion } from 'motion/react';
import { useEffect } from 'react';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}>
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: 'easeOut',
            },
          }}
          className="mb-4">
          <Logo size={80} showText={false} />
        </motion.div>

        <div className="overflow-hidden flex items-center">
          <motion.span
            className="text-4xl md:text-6xl font-bold font-mono tracking-tighter"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.2,
            }}>
            Talha
          </motion.span>
          <motion.span
            className="text-4xl md:text-6xl font-bold font-mono tracking-tighter text-primary ml-4"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.3,
            }}
            onAnimationComplete={() => {
              setTimeout(() => onFinish(), 1500);
            }}>
            Codes
          </motion.span>
        </div>

        <motion.div
          className="h-1 bg-primary mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
