import GlassContainer from "./GlassContainer";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <GlassContainer className="p-6 h-full">
      <div className="flex flex-col h-full">
        <Quote className="w-8 h-8 text-primary mb-4" />
        <p className="text-foreground mb-6 flex-1 leading-relaxed">
          "{content}"
        </p>
        <div>
          <p className="font-semibold text-foreground" data-testid={`text-testimonial-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </GlassContainer>
  );
}
