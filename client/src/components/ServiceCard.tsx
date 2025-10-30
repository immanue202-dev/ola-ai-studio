import { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import GlassContainer from "./GlassContainer";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="cursor-pointer">
        <GlassContainer hover className="p-8 h-full">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold" data-testid={`text-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
            <p className="text-sm text-primary font-medium mt-2">
              Learn more →
            </p>
          </div>
        </GlassContainer>
      </div>
    </Link>
  );
}
