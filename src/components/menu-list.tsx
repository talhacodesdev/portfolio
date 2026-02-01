'use client';

import { MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

const menu = [
  {
    label: 'About Me',
    href: '/about',
  },
  {
    label: 'Skills',
    href: '/skills',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  // {
  //   label: 'Contact Me',
  //   href: '/contact',
  // },
];
const MenuList = () => {
  const [hovered, setHovered] = useState<null | number>(null);
  return (
    <div className="flex flex-col gap-y-3">
      {menu.map((item, index) => (
        <Link key={item.label} href={item.href}>
          <motion.div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 1 }}
            animate={{
              opacity: hovered === null || hovered === index ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
            className="flex justify-between items-center group ">
            <span className="text-lg">{item.label}</span>
            <MoveRight className="transition-transform duration-200 group-hover:translate-x-1.5 ease-[cubic-bezier(0,0,0.58,1)]" />
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
