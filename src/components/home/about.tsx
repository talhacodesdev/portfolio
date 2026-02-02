'use client';

import { Button } from '@/components/ui/button';
import { BadgeCheck, Download, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const certificates = [
  {
    id: 1,
    title: 'Complete Web Development',
    level: 'Level 1',
    issuer: 'Programming Hero',
    image: '/Programming Hero - Level-1.png',
    pdf: '/Programming Hero - Level-1.pdf',
  },
  {
    id: 2,
    title: 'Next Level Web Development',
    level: 'Level 2',
    issuer: 'Programming Hero',
    image: '/Programming Hero - Level-2.png',
    pdf: '/Programming Hero - Level-2.pdf',
  },
];

export const About = () => {
  return (
    <div className="w-full py-10" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-100px' }}
        className="px-3 mb-3 flex flex-col space-y-12">
        {/* Certificates Section */}
        <div>
          <div className="flex justify-center mb-10">
            <h2 className="bg-secondary/50 backdrop-blur-sm px-6 py-2 border border-dashed border-border rounded-full text-lg font-mono tracking-tight text-muted-foreground hover:text-primary transition-colors duration-300">
              Certifications
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {certificates.map((cert, index) => (
              <Link
                href={cert.pdf}
                target="_blank"
                key={cert.id}
                className={`block group w-full md:max-w-[80%] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-full bg-card/50 backdrop-blur-sm border border-dashed border-border p-4 hover:bg-secondary/30 transition-colors duration-500">
                  {/* Corner Accents (Tech/Cyber Feel) */}
                  <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <div className="flex gap-4 items-center">
                    {/* Image/Thumbnail - Fixed Aspect Ratio & No Crop */}
                    <div className="relative w-40 h-24 shrink-0 overflow-hidden transition-colors duration-300 flex items-center justify-center">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain transition-all duration-500 grayscale group-hover:grayscale-0"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between h-20 py-1">
                      <div>
                        <h3 className="font-bold text-base md:text-lg leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 font-mono">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                          Verified
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
