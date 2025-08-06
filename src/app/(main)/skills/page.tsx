import { Magnetic } from '@/components/animate-ui/effects/magnetic';
import PathInfo from '@/components/path-info';
import { SkillBadge, type SkillLevel } from '@/components/skill-badge';
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
import { CloudDrizzle } from 'lucide-react';
import Link from 'next/link';
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
    icon: <HTML5 className=" size-10" />,
    link: 'https://www.w3schools.com/html/',
    level: 'expert',
  },
  {
    name: 'CSS',
    icon: <CSS className=" size-10" />,
    link: 'https://www.w3schools.com/css/',
    level: 'advanced',
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
    level: 'proficient',
  },
  {
    name: 'Git',
    icon: <Git className="size-10" />,
    link: 'https://git-scm.com/',
    level: 'proficient',
  },
  {
    name: 'GitHub',
    icon: <GitHub className="size-10" />,
    link: 'https://github.com/',
    level: 'proficient',
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

const Page = () => {
  return (
    <div className="h-auto w-full">
      <PathInfo />
      <div className="px-3 pb-3 flex flex-col space-y-7">
        <div>
          <h2 className="bg-secondary w-fit p-1.5 border border-dashed mb-4 text-lg">
            Frontend
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3">
            {frontend.map((skill, i) => (
              <Magnetic onlyOnHover key={i}>
                <Link
                  href={skill.link}
                  target="_blank"
                  className="bg-card/75 p-2 flex flex-col items-center border border-dashed space-y-1.5">
                  {skill.icon}
                  <p className="text-sm  text-center">{skill.name}</p>

                  <SkillBadge
                    level={skill.level}
                    className="rounded uppercase shadow"
                  />
                </Link>
              </Magnetic>
            ))}
          </div>
        </div>

        <div>
          <h2 className="bg-secondary w-fit p-1.5 border border-dashed mb-4 text-lg">
            Backend
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3">
            {backend.map((skill, i) => (
              <Magnetic onlyOnHover key={i}>
                <Link
                  href={skill.link}
                  target="_blank"
                  className="bg-card/75 p-2 flex flex-col items-center border border-dashed space-y-1.5">
                  {skill.icon}
                  <p className="text-sm  text-center">{skill.name}</p>

                  <SkillBadge
                    level={skill.level}
                    className="rounded uppercase shadow"
                  />
                </Link>
              </Magnetic>
            ))}
          </div>
        </div>

        <div>
          <h2 className="bg-secondary w-fit p-1.5 border border-dashed mb-4 text-lg">
            Tools
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3">
            {tools.map((skill, i) => (
              <Magnetic onlyOnHover key={i}>
                <Link
                  href={skill.link}
                  target="_blank"
                  className="bg-card/75 p-2 flex flex-col items-center border border-dashed space-y-1.5">
                  {skill.icon}
                  <p className="text-sm  text-center">{skill.name}</p>

                  <SkillBadge
                    level={skill.level}
                    className="rounded uppercase shadow"
                  />
                </Link>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
