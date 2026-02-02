'use client';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { toPng } from 'html-to-image';
import { Download } from 'lucide-react';
import { useRef } from 'react';

export default function LogoGeneratorPage() {
  const logoWithTextRef = useRef<HTMLDivElement>(null);
  const logoIconOnlyRef = useRef<HTMLDivElement>(null);
  const logoSocialRef = useRef<HTMLDivElement>(null);

  const downloadLogo = async (
    ref: React.RefObject<HTMLDivElement | null>,
    filename: string,
    bgColor?: string,
  ) => {
    if (ref.current) {
      try {
        const dataUrl = await toPng(ref.current, {
          cacheBust: true,
          pixelRatio: 4, // Higher quality
          backgroundColor: bgColor || 'transparent',
        });

        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Failed to generate image', err);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 bg-zinc-950 p-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">Logo Generator</h1>
        <p className="text-zinc-400">Download your logo variants</p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 items-start">
        {/* Variant 1: With Text */}
        <div className="flex flex-col items-center gap-6">
          <div className="p-8 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/50">
            <div
              ref={logoWithTextRef}
              className="p-8 rounded-xl bg-transparent inline-block">
              <Logo size={200} showText={true} className="text-white" />
            </div>
          </div>
          <Button
            size="lg"
            onClick={() =>
              downloadLogo(logoWithTextRef, 'talha-codes-logo-full.png')
            }
            className="gap-2 w-full">
            <Download className="w-4 h-4" />
            Download Full Logo
          </Button>
        </div>

        {/* Variant 2: Icon Only */}
        <div className="flex flex-col items-center gap-6">
          <div className="p-8 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/50">
            <div
              ref={logoIconOnlyRef}
              className="p-8 rounded-xl bg-transparent inline-block">
              <Logo size={200} showText={false} className="text-white" />
            </div>
          </div>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              downloadLogo(logoIconOnlyRef, 'talha-codes-logo-icon.png')
            }
            className="gap-2 w-full bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 hover:text-white">
            <Download className="w-4 h-4" />
            Download Icon Only
          </Button>
        </div>

        {/* Variant 3: Social Profile (TikTok) */}
        <div className="flex flex-col items-center gap-6">
          <div className="p-4 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/50">
            {/* Square Container with Background */}
            <div
              ref={logoSocialRef}
              className="w-[300px] h-[300px] bg-zinc-950 flex items-center justify-center relative overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-150" />

              {/* Smaller Logo to fit in circle */}
              <Logo size={140} showText={false} className="text-white z-10" />
            </div>
          </div>
          <Button
            size="lg"
            onClick={() =>
              downloadLogo(
                logoSocialRef,
                'talha-codes-social-profile.png',
                '#09090b',
              )
            }
            className="gap-2 w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:opacity-90 border-0">
            <Download className="w-4 h-4" />
            Download for TikTok
          </Button>
        </div>
      </div>
    </div>
  );
}
