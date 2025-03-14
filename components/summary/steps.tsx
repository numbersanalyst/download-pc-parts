import { cn } from "@/lib/utils";

export interface StepsProps {
  children?: React.ReactNode;
  className?: string;
}

export function Steps({ children, className }: StepsProps) {
  return (
    <div className={cn("relative mb-12", className)}>
      <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-border md:block" />
      <ol className="steps relative m-0 list-none p-0">{children}</ol>
    </div>
  );
}

export interface StepProps {
  children?: React.ReactNode;
  className?: string;
  title: React.ReactNode;
  icon?: React.ReactNode;
}

export function Step({ children, className, title, icon }: StepProps) {
  return (
    <li className={cn("relative pb-8 last:pb-0", className)}>
      <div className="md:hidden flex items-center mb-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 mr-3">
          <div className="step-circle" />
        </div>
        <h3 className="font-heading scroll-m-20 text-xl font-semibold tracking-tight flex items-center">
          {icon && (
            <span className="mr-2 inline-flex items-center">{icon}</span>
          )}
          {title}
        </h3>
      </div>

      <div className="hidden md:block pl-12">
        <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-zinc-200 dark:bg-zinc-800 dark:text-zinc-300">
          <div className="step-circle" />
        </div>
        <h3 className="font-heading scroll-m-20 text-xl font-semibold tracking-tight flex items-center">
          {icon && (
            <span className="mr-2 inline-flex items-center">{icon}</span>
          )}
          {title}
        </h3>
      </div>

      <div className="mt-2 md:pl-12">{children}</div>
    </li>
  );
}
