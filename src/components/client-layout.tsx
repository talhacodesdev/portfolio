'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SplashScreen from '@/components/splash-screen';
import { ThemeProvider } from '@/components/ui/theme-provider';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange>
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isLoading ? 100 : 0,
          opacity: isLoading ? 0 : 1
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2 // Wait for splash exit to start slightly
        }}
      >
        {children}
      </motion.div>
    </ThemeProvider>
  );
}
