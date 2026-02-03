'use client';

import {
  DailyDev,
  Facebook,
  GitHub,
  Gmail,
  LinkedIn,
  Telegram,
  WhatsApp,
  XformerlyTwitter,
} from '@/icon/icons';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

const icons = [
  {
    label: 'GitHub',
    icon: (
      <GitHub className="text-muted-foreground/80 text-xl transition-colors" />
    ),
    href: 'https://github.com/talhacodesdev',
  },
  {
    label: 'LinkedIn',
    icon: (
      <LinkedIn className="text-muted-foreground/80 text-xl transition-colors" />
    ),
    href: 'https://www.linkedin.com/in/talhacodesdev/',
  },
  {
    label: 'X',
    icon: (
      <XformerlyTwitter className="text-muted-foreground/80 text-xl transition-colors" />
    ),
    href: 'https://x.com/talhacodesdev',
  },
  {
    label: 'Facebook',
    icon: (
      <Facebook className="text-muted-foreground/80 text-xl transition-colors" />
    ),
    href: 'https://www.facebook.com/talhacodesdev',
  },
  {
    label: 'DailyDev',
    icon: (
      <DailyDev className="text-muted-foreground/80 text-2xl transition-colors" />
    ),
    href: 'https://app.daily.dev/talhacodesdev',
  },
  {
    label: 'Gmail',
    icon: (
      <Gmail className="text-muted-foreground/80 text-xl transition-colors" />
    ),
    href: 'mailto:talhacodes.dev@gmail.com',
  },
  {
    label: 'WhatsApp',
    icon: (
      <WhatsApp className="text-muted-foreground/80 text-xl transition-colors" />
    ),
    href: 'https://wa.me/8801812931537',
  },
  {
    label: 'Telegram',
    icon: (
      <Telegram className="text-muted-foreground/80 text-xl transition-colors" />
    ),
    href: 'https://t.me/talhacodesdev',
  },
];

export const Hero = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-20 px-4 md:px-8 flex flex-col items-center text-center">
      {/* Profile Picture */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-[6px] border-background bg-zinc-800 overflow-hidden shadow-xl mb-8">
        <Image
          src="/talha.jpg"
          alt="Talha Codes"
          width={160}
          height={160}
          className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          priority
        />
      </motion.div>

      {/* Name and Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 mb-8">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Talha{' '}
            <motion.span
              className="relative inline-block px-2 text-primary cursor-pointer"
              whileHover="hover">
              Codes
              <motion.span
                className="absolute top-0 left-0 border-t-2 border-l-2 border-primary"
                initial={{ width: '8px', height: '8px' }}
                variants={{
                  hover: { width: '100%', height: '100%' },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute bottom-0 right-0 border-b-2 border-r-2 border-primary"
                initial={{ width: '8px', height: '8px' }}
                variants={{
                  hover: { width: '100%', height: '100%' },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </h1>
        </div>

        <h2 className="text-xl md:text-2xl font-mono text-muted-foreground">
          Hello, I&apos;m a{' '}
          <span className="text-foreground font-semibold">Web Developer</span>
        </h2>

        <div className="max-w-2xl text-muted-foreground leading-relaxed">
          <Balancer>
            Passionate about building modern, responsive, and scalable web
            applications. Small details matter.
          </Balancer>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center w-full">
        <div className="flex flex-nowrap items-center justify-center gap-3 md:gap-6 px-4 md:px-8 py-3 bg-secondary/20 backdrop-blur-sm border border-dashed border-border rounded-full overflow-x-auto max-w-[95vw] scrollbar-hide">
          {icons.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
              <Link
                href={item.href}
                target="_blank"
                className="block text-muted-foreground hover:text-primary transition-colors">
                {item.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
