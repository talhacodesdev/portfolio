'use client';

import { Button } from '@/components/ui/button';
import { AuthJs, Drizzle, ShadcnUI } from '@/icon/icons';
import {
  NextJs,
  React as ReactIcon,
  ReactQuery,
  TailwindCSS,
} from 'developer-icons';
import { CloudMoon, Github, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { type JSX } from 'react';

type Project = {
  name: string;
  description: string;
  image: string;
  live: string;
  github: string;
  stack: {
    title: string;
    icon: JSX.Element;
  }[];
};

const projects: Project[] = [
  {
    name: 'Tempify',
    description:
      'Smart weather dashboard featuring 5-day forecasts, location history, and personalized favorite cities.',
    image: '/tempify-app.png',
    live: 'https://tempifyapp.talhacodes.dev/',
    github: 'https://github.com/TalhaCodes/tempify',
    stack: [
      { title: 'React', icon: <ReactIcon className="size-3.5" /> },
      { title: 'Tailwind', icon: <TailwindCSS className="size-3.5" /> },
      { title: 'Shadcn', icon: <ShadcnUI className="size-3.5" /> },
      {
        title: 'Weather API',
        icon: <CloudMoon className="size-3.5 text-orange-400" />,
      },
    ],
  },
  {
    name: 'Movie Mark',
    description:
      'Cinematic discovery platform with watchlist curation, advanced search, and secure user authentication.',
    image: '/movie-mark.png',
    live: 'https://moviemark.talhacodes.dev/movie',
    github: 'https://github.com/talhaabu1/Movie-Mark',
    stack: [
      { title: 'Next.js', icon: <NextJs className="size-3.5" /> },
      { title: 'React Query', icon: <ReactQuery className="size-3.5" /> },
      { title: 'Auth.js', icon: <AuthJs className="size-3.5" /> },
      {
        title: 'Drizzle',
        icon: <Drizzle className="size-3.5 text-[#C5F74F]" />,
      },
    ],
  },
  {
    name: 'Tempify',
    description:
      'Smart weather dashboard featuring 5-day forecasts, location history, and personalized favorite cities.',
    image: '/tempify-app.png',
    live: 'https://tempifyapp.talhacodes.dev/',
    github: 'https://github.com/TalhaCodes/tempify',
    stack: [
      { title: 'React', icon: <ReactIcon className="size-3.5" /> },
      { title: 'Tailwind', icon: <TailwindCSS className="size-3.5" /> },
      { title: 'Shadcn', icon: <ShadcnUI className="size-3.5" /> },
      {
        title: 'Weather API',
        icon: <CloudMoon className="size-3.5 text-orange-400" />,
      },
    ],
  },
  {
    name: 'Movie Mark',
    description:
      'Cinematic discovery platform with watchlist curation, advanced search, and secure user authentication.',
    image: '/movie-mark.png',
    live: 'https://moviemark.talhacodes.dev/movie',
    github: 'https://github.com/talhaabu1/Movie-Mark',
    stack: [
      { title: 'Next.js', icon: <NextJs className="size-3.5" /> },
      { title: 'React Query', icon: <ReactQuery className="size-3.5" /> },
      { title: 'Auth.js', icon: <AuthJs className="size-3.5" /> },
      {
        title: 'Drizzle',
        icon: <Drizzle className="size-3.5 text-[#C5F74F]" />,
      },
    ],
  },
];

export const Projects = () => {
  return (
    <section className="w-full pt-24 pb-10" id="projects">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Title - Simplified */}
        <div className="flex justify-center mb-6">
          <h2 className="bg-secondary/50 backdrop-blur-sm px-6 py-2 border border-dashed border-border rounded-full text-lg font-mono tracking-tight text-muted-foreground hover:text-primary transition-colors duration-300">
            Projects
          </h2>
        </div>
        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-3xl border border-white/5 bg-zinc-900 overflow-hidden hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

                {/* Floating Links - Always Visible Bottom Right */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                  <Link href={project.github} target="_blank">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full size-8 bg-black/50 backdrop-blur-md border border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                      <Github className="size-4" />
                    </Button>
                  </Link>
                  <Link href={project.live} target="_blank">
                    <Button
                      size="icon"
                      className="rounded-full size-8 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90">
                      <ExternalLink className="size-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-6 md:p-8 relative z-10">
                {/* Project Title */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack & Arrow */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-medium text-zinc-300 border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                        {tech.icon}
                        {tech.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
