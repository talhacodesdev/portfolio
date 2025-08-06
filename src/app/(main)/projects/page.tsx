import { Card, CardContent } from '@/components/ui/card';
import PathInfo from '@/components/path-info';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { CloudMoon, Code, Database, Eye, PanelTop, Route } from 'lucide-react';
import Balancer from 'react-wrap-balancer';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/animate-ui/radix/dialog';
import { NextJs, React, ReactQuery, TailwindCSS } from 'developer-icons';
import type { JSX } from 'react';
import { AuthJs, Drizzle, ShadcnUI } from '@/icon/icons';

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

const project: Project[] = [
  {
    name: 'Tempify',
    description:
      'Tempify is a weather app that provides current weather, 5-day forecast, lets you search cities, save favorites, and view search history.',
    image: '/tempify-app.png',
    live: 'https://tempifyapp.talhacodes.dev/',
    github: 'https://github.com/TalhaCodes/tempify',
    stack: [
      { title: 'React', icon: <React className="size-4" /> },
      {
        title: 'Tailwind',
        icon: <TailwindCSS className="size-4" />,
      },
      { title: 'Shadcn UI', icon: <ShadcnUI className="size-4" /> },
      {
        title: 'Openweather API',
        icon: <CloudMoon className="size-4 text-orange-400" />,
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
      { title: 'Next Js', icon: <NextJs className="size-4" /> },
      {
        title: 'Tailwind',
        icon: <TailwindCSS className="size-4" />,
      },
      { title: 'Shadcn UI', icon: <ShadcnUI className="size-4" /> },
      { title: 'React Query ', icon: <ReactQuery className="size-4" /> },
      {
        title: 'Auth Js',
        icon: <AuthJs className="size-4" />,
      },
      {
        title: 'Drizzle',
        icon: <Drizzle className="size-4 text-[#C5F74F]" />,
      },
    ],
  },
];

const Page = () => {
  return (
    <div className=" h-auto md:h-dvh w-full">
      <PathInfo />
      <div className="px-3 mb-3 grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {project.map((project, i) => (
          <Card
            key={i}
            className="bg-card/75 max-w-sm w-full border rounded-none border-dashed group py-0">
            <CardContent className="p-3 space-y-3">
              {/* Image Wrapper with overflow-hidden and border */}
              <div className="relative overflow-hidden  aspect-[4/3] border border-dashed">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300  ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <Balancer className="text-sm text-muted-foreground">
                  {project.description.length > 100 ? (
                    <>{project.description.slice(0, 100)}...</>
                  ) : (
                    project.description
                  )}
                </Balancer>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="w-full">
                    <PanelTop />
                    Details
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className="border-dashed rounded-none"
                  from="top">
                  <DialogHeader>
                    <DialogTitle>{project.name}</DialogTitle>
                    <DialogDescription>
                      <Balancer>{project.description}</Balancer>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((stack, i) => (
                      <Badge
                        key={i}
                        className="rounded-none border"
                        variant="secondary">
                        {stack.icon}
                        {stack.title}
                      </Badge>
                    ))}
                  </div>

                  <DialogFooter className="flex justify-end">
                    <Link href={project.live} target="_blank">
                      <Button variant="secondary">
                        <Eye />
                      </Button>
                    </Link>
                    <Link href={project.github} target="_blank">
                      <Button variant="outline" className="border-dashed">
                        <Code />
                      </Button>
                    </Link>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
