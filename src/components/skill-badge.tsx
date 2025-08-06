import { Badge } from '@/components/ui/badge';

const levelStyles: Record<string, { label: string; className: string }> = {
  beginner: {
    label: 'Beginner',
    className: 'bg-slate-500 text-white',
  },
  intermediate: {
    label: 'Intermediate',
    className: 'bg-amber-500 text-white',
  },
  proficient: {
    label: 'Proficient',
    className: 'bg-blue-500 text-white',
  },
  advanced: {
    label: 'Advanced',
    className: 'bg-indigo-600 text-white',
  },
  expert: {
    label: 'Expert',
    className: 'bg-green-600 text-white',
  },
  used: {
    label: 'Used Before',
    className: 'bg-zinc-500 text-white',
  },
  learning: {
    label: 'Learning',
    className: 'bg-orange-500 text-white',
  },
  exploring: {
    label: 'Exploring',
    className: 'bg-purple-500 text-white',
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

type SkillBadgeProps = {
  level: SkillLevel;
  className?: string;
};

export const SkillBadge = ({ level, className = '' }: SkillBadgeProps) => {
  const levelInfo = levelStyles[level] ?? {
    label: level,
    className: 'bg-muted text-muted-foreground',
  };

  return (
    <Badge className={`${levelInfo.className} ${className}`}>
      {levelInfo.label}
    </Badge>
  );
};
