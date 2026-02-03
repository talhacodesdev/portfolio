'use client';

import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', link: '#hero' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on click
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // Height of header approx
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const playClickSound = () => {
    try {
      const AudioContext =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      // "Cute Bubble" sound (Sine wave for softness)
      oscillator.type = 'sine';

      // Pitch glide up (Cheerful/Bubble effect)
      oscillator.frequency.setValueAtTime(300, ctx.currentTime);
      oscillator.frequency.linearRampToValueAtTime(600, ctx.currentTime + 0.1);

      // Soft envelope (Gentle attack and release)
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.2);
    } catch (error) {
      console.error('Audio play failed', error);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-dashed border-transparent',
          scrolled || isMenuOpen
            ? 'bg-background/80 backdrop-blur-md border-border/40 py-2'
            : 'bg-transparent py-4',
        )}>
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#hero"
              onClick={(e) => handleScrollTo(e, '#hero')}
              className="flex-shrink-0 hover:opacity-80 transition-opacity z-50 relative">
              <Logo size={40} showText={!scrolled && !isMenuOpen} />
            </Link>

            {/* Menu Toggle Button */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                playClickSound();
              }}
              className="z-50 relative p-2 hover:bg-primary/10 rounded-md transition-colors group"
              aria-label="Toggle Menu">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <motion.div
                  initial={false}
                  animate={{
                    rotate: isMenuOpen ? 90 : 0,
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute">
                  <Menu className="w-6 h-6 text-foreground" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{
                    rotate: isMenuOpen ? 0 : -90,
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute">
                  <X className="w-6 h-6 text-foreground" />
                </motion.div>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}>
                  <Link
                    href={item.link}
                    onClick={(e) => handleScrollTo(e, item.link)}
                    className="text-4xl font-bold font-mono tracking-tighter hover:text-primary transition-colors relative group">
                    {item.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Decoration */}
            <div className="absolute bottom-10 left-0 right-0 text-center text-muted-foreground text-sm font-mono">
              <p>Designed & Built by Talha</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
