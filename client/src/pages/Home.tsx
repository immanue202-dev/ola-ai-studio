import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import DynamicHeroText from "@/components/DynamicHeroText";
import AnimatedBackground from "@/components/AnimatedBackground";
import GlassContainer from "@/components/GlassContainer";
import { Palette, Globe, Wand2, Camera } from "lucide-react";
import founderImage from "@assets/Generated Image October 19, 2025 - 12_52PM_1760905947877.png";

const services = [
  {
    icon: Palette,
    title: "Graphic & Logo Design",
    description: "Distinctive visual identities that capture your brand essence and leave lasting impressions.",
    href: "/services/graphic-design",
  },
  {
    icon: Globe,
    title: "Website Design & No-Code Apps",
    description: "Beautiful, functional web experiences and custom applications built efficiently.",
    href: "/services/web-development",
  },
  {
    icon: Wand2,
    title: "AI Video & Image Creation",
    description: "Cutting-edge AI-powered content creation with stunning visuals and dynamic videos.",
    href: "/services/ai-creation",
  },
  {
    icon: Camera,
    title: "Photography & Corporate Branding",
    description: "Professional photography and comprehensive brand identity solutions.",
    href: "/services/photography",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Startup",
    content: "Ola AI Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "Working with Ola AI Studio was a game-changer. They delivered exceptional designs that perfectly captured our brand essence.",
  },
  {
    name: "Aisha Mohammed",
    role: "Business Owner",
    content: "The team's professionalism and creativity are unmatched. They brought our vision to life with stunning AI-powered designs.",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center px-4">
        <AnimatedBackground />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-float">
            <DynamicHeroText />
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Premium creative solutions powered by AI and artistic vision
          </p>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="default"
                className="rounded-full px-8 py-6 text-lg font-semibold shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-400"
                data-testid="button-lets-connect"
              >
                Let's Connect
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            data-testid="text-services-heading"
          >
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full"
                data-testid="button-view-all-services"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            data-testid="text-founder-heading"
          >
            The Brain Behind It
          </h2>

          <GlassContainer className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
                  <img
                    src={founderImage}
                    alt="Founder"
                    className="w-full h-full object-cover object-top scale-110"
                    style={{ marginBottom: '-10%' }}
                    data-testid="img-founder"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Meet Our Founder
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The creative visionary behind Ola AI Studio, combining years of design expertise with cutting-edge AI technology to deliver exceptional creative solutions. Passionate about transforming ideas into stunning visual realities.
                </p>
                <p className="text-foreground font-medium mb-4">
                  Specializing in graphic design, AI-powered content creation, and brand development for businesses worldwide.
                </p>
              </div>
            </div>
          </GlassContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            data-testid="text-testimonials-heading"
          >
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
