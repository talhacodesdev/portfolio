import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

const levelStyles: Record<string, { label: string; className: string }> = {
  beginner: {
    label: 'Beginner',
    className: 'bg-slate-500 text-white border-none rounded hover:bg-slate-600',
  },
  intermediate: {
    label: 'Intermediate',
    className: 'bg-amber-500 text-white border-none rounded hover:bg-amber-600',
  },
  proficient: {
    label: 'Proficient',
    className: 'bg-blue-500 text-white border-none rounded hover:bg-blue-600',
  },
  advanced: {
    label: 'Advanced',
    className:
      'bg-indigo-600 text-white border-none rounded hover:bg-indigo-700',
  },
  expert: {
    label: 'Expert',
    className: 'bg-green-600 text-white border-none rounded hover:bg-green-700',
  },
  used: {
    label: 'Used Before',
    className: 'bg-zinc-500 text-white border-none rounded hover:bg-zinc-600',
  },
  learning: {
    label: 'Learning',
    className:
      'bg-orange-500 text-white border-none rounded hover:bg-orange-600',
  },
  exploring: {
    label: 'Exploring',
    className:
      'bg-purple-500 text-white border-none rounded hover:bg-purple-600',
  },
};

export type SkillLevel =
  | 'beginner'
  | 'intermediate'
  | 'proficient'
  | 'advanced'
  | 'expert'
  | 'used'
  | 'learning'
  | 'exploring';

type SkillCardProps = {
  name: string;
  icon: ReactNode;
  link: string;
  level: SkillLevel;
  className?: string;
};

export const SkillCard = ({
  name,
  icon,
  link,
  level,
  className,
}: SkillCardProps) => {
  const levelInfo = levelStyles[level] ?? {
    label: level,
    className: 'bg-muted text-muted-foreground',
  };

  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        'group flex flex-col items-center justify-center gap-3 p-4 border border-dashed bg-card hover:bg-accent/50 transition-all duration-300 min-w-[140px] h-full relative overflow-hidden',
        className,
      )}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 text-foreground group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
        {icon}
      </div>

      <span className="relative z-10 font-mono font-medium text-sm text-center">
        {name}
      </span>

      <Badge
        variant="outline"
        className={cn(
          'relative z-10 text-xs uppercase px-2 py-0.5 h-auto font-medium pointer-events-none',
          levelInfo.className,
        )}>
        {levelInfo.label}
      </Badge>
    </Link>
  );
};
