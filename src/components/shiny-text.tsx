'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}: {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}) => {
  const animationDuration = `${speed}s`;

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <p>Talha Codes</p>;
  }

  const isDark = theme === 'dark';
  return (
    <div
      className={`text-primary/60 bg-clip-text inline-block ${
        disabled ? '' : 'animate-shine'
      } ${className}`}
      style={{
        backgroundImage: isDark
          ? 'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)'
          : 'linear-gradient(120deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}>
      {text}
    </div>
  );
};

export default ShinyText;
