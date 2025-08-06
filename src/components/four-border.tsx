import { cn } from '@/lib/utils';

//======================================
export const FourBorder = ({ children }: { children: React.ReactNode }) => {
  const Icon = ({
    className,
    ...rest
  }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <div
        {...rest}
        className={cn('border-primary size-6 absolute', className)}
      />
    );
  };
  return (
    <div className="border-2  border-muted  relative rounded-md">
      <Icon className="-top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
      <Icon className="-top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
      <Icon className="-bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
      <Icon className="-bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />
      {children}
    </div>
  );
};
