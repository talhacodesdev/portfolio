'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AuthJs, Drizzle, ShadcnUI } from '@/icon/icons';
import {
  NextJs,
  React as ReactIcon,
  ReactQuery,
  TailwindCSS,
} from 'developer-icons';
import { CloudMoon, Eye, Github, ArrowUpRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { type JSX, type MouseEvent } from 'react';

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
      'Tempify is a weather app that provides current weather, 5-day forecast, lets you search cities, save favorites, and view search history.',
    image: '/tempify-app.png',
    live: 'https://tempifyapp.talhacodes.dev/',
    github: 'https://github.com/TalhaCodes/tempify',
    stack: [
      { title: 'React', icon: <ReactIcon className="size-3.5" /> },
      {
        title: 'Tailwind',
        icon: <TailwindCSS className="size-3.5" />,
      },
      { title: 'Shadcn UI', icon: <ShadcnUI className="size-3.5" /> },
      {
        title: 'Openweather API',
        icon: <CloudMoon className="size-3.5 text-orange-400" />,
      },
    ],
  },
  {
    name: 'Movie Mark',
    description:
      'Movie Mark is a movie and series tracker with filters for watched, watching, plan to watch, and coming soon. It includes search, dark/light mode, and secure Auth.js login.',
    image: '/movie-mark.png',
    live: 'https://moviemark.talhacodes.dev/movie',
    github: 'https://github.com/talhaabu1/Movie-Mark',
    stack: [
      { title: 'Next Js', icon: <NextJs className="size-3.5" /> },
      {
        title: 'Tailwind',
        icon: <TailwindCSS className="size-3.5" />,
      },
      { title: 'Shadcn UI', icon: <ShadcnUI className="size-3.5" /> },
      { title: 'React Query ', icon: <ReactQuery className="size-3.5" /> },
      {
        title: 'Auth Js',
        icon: <AuthJs className="size-3.5" />,
      },
      {
        title: 'Drizzle',
        icon: <Drizzle className="size-3.5 text-[#C5F74F]" />,
      },
    ],
  },
];

function SpotlightCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-dashed border-border bg-card/50 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export const Projects = () => {
  return (
    <div className="w-full py-10" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
        className="px-3 pb-3 flex flex-col space-y-16">
        {/* Section Title with Tech Accents */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground/50">
            <span className="h-[1px] w-12 bg-current" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">
              System.Projects
            </span>
            <span className="h-[1px] w-12 bg-current" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground relative">
            <span className="relative z-10">Featured Work</span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 -skew-x-12 blur-sm" />
          </h2>
        </div>

        <div className="flex flex-col gap-24 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center group`}>
              {/* Connecting Line (Vertical) - Absolute for visual flow */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-border border-l border-dashed -translate-x-1/2 hidden lg:block -z-10 opacity-30" />

              {/* Project Image Area */}
              <div className="w-full lg:w-7/12 relative perspective-1000">
                <SpotlightCard className="rounded-xl p-2 bg-secondary/10 backdrop-blur-sm border-white/10">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Badge
                        variant="outline"
                        className="bg-black/50 backdrop-blur-md border-white/10 text-white text-[10px] uppercase tracking-wider">
                        v1.0
                      </Badge>
                    </div>
                  </div>
                </SpotlightCard>

                {/* Decorative Background Elements */}
                <div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${index % 2 !== 0 ? 'right-auto -left-4' : ''}`}
                />
              </div>

              {/* Project Info Area */}
              <div className="w-full lg:w-5/12 flex flex-col gap-5 relative">
                {/* Numbering Watermark */}
                <span className="absolute -top-12 -left-6 text-9xl font-black text-foreground/5 select-none -z-10 font-mono">
                  0{index + 1}
                </span>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-[2px] w-6 bg-primary" />
                    <span className="font-mono text-primary text-xs tracking-widest uppercase">
                      Deployed
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack - Minimalist */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/10 text-xs font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-default">
                      {tech.icon}
                      {tech.title}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-4 pt-2">
                  <Link href={project.live} target="_blank">
                    <Button className="rounded-full px-6 gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                      <Eye className="w-4 h-4" /> Live Demo
                    </Button>
                  </Link>
                  <Link href={project.github} target="_blank">
                    <Button
                      variant="ghost"
                      className="rounded-full px-6 gap-2 hover:bg-secondary/50">
                      <Github className="w-4 h-4" /> Source
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Link - Styled as a Terminal Command */}
        <div className="flex justify-center mt-16">
          <Link
            href="https://github.com/TalhaCodes?tab=repositories"
            target="_blank"
            className="group">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/30 border border-dashed border-border hover:border-primary/50 transition-colors">
              <span className="text-primary font-mono text-sm">&gt;</span>
              <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                cd /all-projects
              </span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
