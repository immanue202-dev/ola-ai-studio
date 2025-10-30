import { cn } from "@/lib/utils";

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassContainer({ 
  children, 
  className,
  hover = false 
}: GlassContainerProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/20 dark:bg-white/10",
        "border border-white/20 dark:border-white/10",
        "rounded-3xl shadow-lg",
        "transition-all duration-400",
        hover && "hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:-translate-y-2",
        className
      )}
    >
      {children}
    </div>
  );
}
