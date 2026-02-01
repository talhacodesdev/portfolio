'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AuthJs, Drizzle, ShadcnUI } from '@/icon/icons';
import {
  NextJs,
  React as ReactIcon,
  ReactQuery,
  TailwindCSS,
} from 'developer-icons';
import { CloudMoon, Code, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';

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

export const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
        className="px-3 pb-3 flex flex-col space-y-7">
        <h2 className="bg-secondary w-fit p-1.5 border border-dashed text-lg font-mono">
          Projects
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-12 max-w-4xl mx-auto pb-10">
          {projects.map((project, i) => (
            <motion.div key={i} variants={item}>
              <Card className="flex flex-col bg-card/50 backdrop-blur-sm border-dashed rounded-none hover:border-primary/50 transition-all duration-500 group overflow-hidden shadow-sm hover:shadow-md">
                <CardHeader className="p-0 border-b border-dashed w-full shrink-0">
                  <div className="relative w-full aspect-video overflow-hidden bg-muted/30 group-hover:bg-muted/50 transition-colors">
                    {/* Browser Bar Decoration */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-md z-10 flex items-center px-3 gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>

                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 800px"
                      quality={95}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </CardHeader>

                <div className="flex flex-col flex-1 p-6 gap-6">
                  <CardContent className="p-0 flex flex-col gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                          {project.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-widest">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((stack, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="rounded-none px-2.5 py-1 text-xs border-dashed border-border/50 font-medium flex items-center gap-1.5 bg-secondary/50 hover:bg-secondary hover:text-secondary-foreground transition-all">
                            {stack.icon}
                            {stack.title}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-0 pt-2 grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="w-full border-dashed rounded-none h-11 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild>
                      <Link href={project.github} target="_blank">
                        <Code className="mr-2 size-4" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      variant="default"
                      className="w-full rounded-none h-11 text-sm font-medium shadow-sm hover:shadow-primary/25 hover:shadow-lg transition-all duration-300"
                      asChild>
                      <Link href={project.live} target="_blank">
                        <Eye className="mr-2 size-4" />
                        Preview
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
