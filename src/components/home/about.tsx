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
          <div className="flex items-center gap-3 mb-8">
            <h2 className="bg-secondary w-fit p-2 border border-dashed text-lg font-mono tracking-tight">
              Certifications
            </h2>
            <div className="h-[1px] flex-1 bg-border border-dashed border-t" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-dashed hover:border-primary/50 transition-colors duration-300">
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-dashed">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <Link href={cert.pdf} target="_blank">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-dashed">
                        <ExternalLink className="w-4 h-4" /> View
                      </Button>
                    </Link>
                    <Link href={cert.pdf} download>
                      <Button variant="default" size="sm" className="gap-2">
                        <Download className="w-4 h-4" /> Download
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 font-mono">
                        {cert.level}
                      </p>
                    </div>
                    <BadgeCheck className="w-5 h-5 text-primary shrink-0" />
                  </div>

                  <div className="mt-4 pt-4 border-t border-dashed flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wider">
                    <span>Issued by</span>
                    <span className="font-semibold text-foreground">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
