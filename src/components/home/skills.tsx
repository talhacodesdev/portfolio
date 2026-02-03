'use client';

import { Magnetic } from '@/components/animate-ui/effects/magnetic';
import { SkillCard, type SkillLevel } from '@/components/skill-card';
import {
  AuthJs,
  Drizzle,
  ExpressJs,
  GitHub,
  GSAP,
  MacOS,
  Mongoose,
  Motion,
  ShadcnUI,
  SocketIo,
  Trae,
  Vercel,
  Zustand,
} from '@/icon/icons';
import {
  ARC,
  Bootstrap5,
  CSS,
  Git,
  HTML5,
  JavaScript,
  MongoDB,
  Netlify,
  NextJs,
  NodeJs,
  PnpmDark,
  PostgreSQL,
  Prisma,
  Python,
  React,
  ReactQuery,
  Redux,
  TailwindCSS,
  TypeScript,
} from 'developer-icons';
import { motion } from 'motion/react';
import type { JSX } from 'react';

type Skill = {
  name: string;
  icon: JSX.Element;
  link: string;
  level: SkillLevel;
};

const frontend: Skill[] = [
  {
    name: 'HTML',
    icon: <HTML5 className="size-10" />,
    link: 'https://www.w3schools.com/html/',
    level: 'expert',
  },
  {
    name: 'CSS',
    icon: <CSS className="size-10" />,
    link: 'https://www.w3schools.com/css/',
    level: 'advanced',
  },
  {
    name: 'Bootstrap',
    icon: <Bootstrap5 className="size-10" />,
    link: 'https://getbootstrap.com/',
    level: 'used',
  },
  {
    name: 'Tailwind',
    icon: <TailwindCSS className=" size-10" />,
    link: 'https://tailwindcss.com/',
    level: 'expert',
  },
  {
    name: 'JavaScript',
    icon: <JavaScript className=" size-10" />,
    link: 'https://www.w3schools.com/js/',
    level: 'advanced',
  },
  {
    name: 'TypeScript',
    icon: <TypeScript className=" size-10" />,
    link: 'https://www.typescriptlang.org/',
    level: 'advanced',
  },
  {
    name: 'React',
    icon: <React className=" size-10" />,
    link: 'https://react.dev/',
    level: 'advanced',
  },
  {
    name: 'Next Js',
    icon: <NextJs className=" size-10" />,
    link: 'https://nextjs.org/',
    level: 'proficient',
  },
  {
    name: 'Auth Js',
    icon: <AuthJs className="size-10" />,
    link: 'https://www.framer.com/motion/',
    level: 'proficient',
  },
  {
    name: 'Shadcn UI',
    icon: <ShadcnUI className="size-10 text-black dark:text-white" />,
    link: 'https://ui.shadcn.com/',
    level: 'expert',
  },
  {
    name: 'Redux',
    icon: <Redux className="size-10" />,
    link: 'https://redux-toolkit.js.org/',
    level: 'advanced',
  },
  {
    name: 'Zustand',
    icon: <Zustand className="size-10" />,
    link: 'https://zustand-demo.pmnd.rs/',
    level: 'proficient',
  },
  {
    name: 'React Query',
    icon: <ReactQuery className="size-10" />,
    link: 'https://tanstack.com/query/latest/',
    level: 'proficient',
  },
  {
    name: 'Motion',
    icon: <Motion className="size-10 text-black dark:text-[#F5ED29]" />,
    link: 'https://motion.dev/',
    level: 'beginner',
  },

  {
    name: 'GSAP',
    icon: <GSAP className="size-10" />,
    link: 'https://gsap.com/',
    level: 'exploring',
  },
];

const backend: Skill[] = [
  {
    name: 'Node Js',
    icon: <NodeJs className=" size-10" />,
    link: 'https://nodejs.org/en/',
    level: 'intermediate',
  },
  {
    name: 'Express Js',
    icon: <ExpressJs className="size-10 text-black dark:text-white" />,
    link: 'https://expressjs.com/',
    level: 'advanced',
  },
  {
    name: 'MongoDB',
    icon: <MongoDB className="size-10" />,
    link: 'https://www.mongodb.com/',
    level: 'advanced',
  },
  {
    name: 'PostgreSQL',
    icon: <PostgreSQL className="size-10" />,
    link: 'https://www.postgresql.org/',
    level: 'proficient',
  },
  {
    name: 'Mongoose',
    icon: <Mongoose className="size-10 text-[#880000]" />,
    link: 'https://mongoosejs.com/',
    level: 'advanced',
  },
  {
    name: 'Prisma',
    icon: <Prisma className="size-10" />,
    link: 'https://www.prisma.io/',
    level: 'proficient',
  },
  {
    name: 'Drizzle',
    icon: <Drizzle className="size-10 text-[#C5F74F]" />,
    link: 'https://orm.drizzle.team/',
    level: 'proficient',
  },
  {
    name: 'Python',
    icon: <Python className="size-10" />,
    link: 'https://www.python.org/',
    level: 'intermediate',
  },
  {
    name: 'Socket.io',
    icon: <SocketIo className="size-10 text-black dark:text-white" />,
    link: 'https://socket.io/',
    level: 'exploring',
  },
];

const tools: Skill[] = [
  {
    name: 'Trae',
    icon: <Trae className="size-10" />,
    link: 'https://www.trae.ai/',
    level: 'expert',
  },
  {
    name: 'Git',
    icon: <Git className="size-10" />,
    link: 'https://git-scm.com/',
    level: 'advanced',
  },
  {
    name: 'GitHub',
    icon: <GitHub className="size-10" />,
    link: 'https://github.com/',
    level: 'advanced',
  },
  {
    name: 'Vercel',
    icon: <Vercel className="size-10 text-black dark:text-white" />,
    link: 'https://vercel.com/',
    level: 'proficient',
  },
  {
    name: 'Netlify',
    icon: <Netlify className="size-10" />,
    link: 'https://www.netlify.com/',
    level: 'proficient',
  },
  {
    name: 'PNPM',
    icon: <PnpmDark className="size-10" />,
    link: 'https://pnpm.io/',
    level: 'proficient',
  },
  {
    name: 'ARC',
    icon: <ARC className="size-10" />,
    link: 'https://arc.net/',
    level: 'advanced',
  },
  {
    name: 'MacOS',
    icon: <MacOS className="size-10" />,
    link: 'https://www.apple.com/macos/macos-sequoia/',
    level: 'advanced',
  },
];

export const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="w-full py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
        className="px-3 mb-3 flex flex-col space-y-7">
        <div className="flex justify-center mb-6">
          <h2 className="bg-secondary/50 backdrop-blur-sm px-6 py-2 border border-dashed border-border rounded-full text-lg font-mono tracking-tight text-muted-foreground hover:text-primary transition-colors duration-300">
            Skills
          </h2>
        </div>

        <div>
          <div className="flex justify-center mb-4">
            <h3 className="bg-muted/50 backdrop-blur-sm px-4 py-1 border border-dashed border-border rounded-full text-base font-mono tracking-tight text-muted-foreground">
              Frontend
            </h3>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2">
            {frontend.map((skill, i) => (
              <motion.div key={i} variants={item}>
                <Magnetic springOptions={{ bounce: 0.1 }}>
                  <SkillCard
                    name={skill.name}
                    icon={skill.icon}
                    link={skill.link}
                    level={skill.level}
                  />
                </Magnetic>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <div className="flex justify-center mb-4">
            <h3 className="bg-muted/50 backdrop-blur-sm px-4 py-1 border border-dashed border-border rounded-full text-base font-mono tracking-tight text-muted-foreground">
              Backend
            </h3>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2">
            {backend.map((skill, i) => (
              <motion.div key={i} variants={item}>
                <Magnetic springOptions={{ bounce: 0.12 }}>
                  <SkillCard
                    name={skill.name}
                    icon={skill.icon}
                    link={skill.link}
                    level={skill.level}
                  />
                </Magnetic>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <div className="flex justify-center mb-4">
            <h3 className="bg-muted/50 backdrop-blur-sm px-4 py-1 border border-dashed border-border rounded-full text-base font-mono tracking-tight text-muted-foreground">
              Tools
            </h3>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2">
            {tools.map((skill, i) => (
              <motion.div key={i} variants={item}>
                <Magnetic springOptions={{ bounce: 0.12 }}>
                  <SkillCard
                    name={skill.name}
                    icon={skill.icon}
                    link={skill.link}
                    level={skill.level}
                  />
                </Magnetic>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
