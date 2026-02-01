import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

const levelStyles: Record<string, { label: string; className: string }> = {
  beginner: {
    label: 'Beginner',
    className: 'bg-slate-500/10 text-slate-500 border-slate-200 hover:bg-slate-500/20',
  },
  intermediate: {
    label: 'Intermediate',
    className: 'bg-amber-500/10 text-amber-500 border-amber-200 hover:bg-amber-500/20',
  },
  proficient: {
    label: 'Proficient',
    className: 'bg-blue-500/10 text-blue-500 border-blue-200 hover:bg-blue-500/20',
  },
  advanced: {
    label: 'Advanced',
    className: 'bg-indigo-600/10 text-indigo-600 border-indigo-200 hover:bg-indigo-600/20',
  },
  expert: {
    label: 'Expert',
    className: 'bg-green-600/10 text-green-600 border-green-200 hover:bg-green-600/20',
  },
  used: {
    label: 'Used Before',
    className: 'bg-zinc-500/10 text-zinc-500 border-zinc-200 hover:bg-zinc-500/20',
  },
  learning: {
    label: 'Learning',
    className: 'bg-orange-500/10 text-orange-500 border-orange-200 hover:bg-orange-500/20',
  },
  exploring: {
    label: 'Exploring',
    className: 'bg-purple-500/10 text-purple-500 border-purple-200 hover:bg-purple-500/20',
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
        className
      )}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 text-foreground group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
        {icon}
      </div>
      
      <span className="relative z-10 font-mono font-semibold text-sm text-center">
        {name}
      </span>
      
      <Badge 
        variant="outline" 
        className={cn("relative z-10 text-[10px] px-2 py-0.5 h-auto font-normal pointer-events-none", levelInfo.className)}
      >
        {levelInfo.label}
      </Badge>
    </Link>
  );
};
