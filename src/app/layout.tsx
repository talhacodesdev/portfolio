import ClientLayout from '@/components/client-layout';
import type { Metadata } from 'next';
import './globals.css';
import type { ReactNode } from 'react';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  metadataBase: new URL('https://talhacodes.dev'),
  title: {
    default: 'Talha Codes | Full Stack Developer Portfolio',
    template: '%s | Talha Codes',
  },
  description:
    'Abdullah Al Mahmud Talha is a Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio, projects, and skills.',
  keywords: [
    'Abdullah Al Mahmud Talha',
    'Talha Codes',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Software Engineer',
    'JavaScript',
    'TypeScript',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio',
    'Web Development',
  ],
  authors: [
    { name: 'Abdullah Al Mahmud Talha', url: 'https://talhacodes.dev' },
  ],
  creator: 'Abdullah Al Mahmud Talha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talhacodes.dev',
    title: 'Talha Codes | Full Stack Developer Portfolio',
    description:
      'Abdullah Al Mahmud Talha is a Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio, projects, and skills.',
    siteName: 'Talha Codes',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Talha Codes Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talha Codes | Full Stack Developer Portfolio',
    description:
      'Abdullah Al Mahmud Talha is a Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/og-image.png'],
    creator: '@talhacodes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistMono.className}>
        <div className="relative">
          {/* Masked background overlay */}
          <div
            className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#7373732e_1px,transparent_1px),linear-gradient(to_bottom,#7373732e_1px,transparent_1px)] bg-[size:20px_20px] z-0"
            style={{
              maskImage:
                'radial-gradient(ellipse 80% 50% at 50% 50%, black 70%, transparent 110%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 50% at 50% 50%, black 70%, transparent 110%)',
            }}
          />

          {/* Main content */}
          <div className="relative z-10">
            <ClientLayout>{children}</ClientLayout>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
