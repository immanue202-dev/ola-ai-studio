import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GlassContainer from "@/components/GlassContainer";
import { ArrowLeft, Wand2, Check } from "lucide-react";

export default function AICreation() {
  const features = [
    "AI-generated product photography and mockups",
    "Custom illustration and digital artwork creation",
    "Video content generation and editing",
    "Animated explainer videos and promotional content",
    "Background removal and image enhancement",
    "Style transfer and artistic transformations",
    "Text-to-image generation for unique visuals",
    "AI-powered video editing and effects",
  ];

  return (
    <div className="min-h-screen px-4 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <Link href="/services">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
            <Wand2 className="w-10 h-10 text-primary" />
          </div>
          <h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            data-testid="text-service-heading"
          >
            AI Video & Image Creation
          </h1>
        </div>

        <GlassContainer className="p-8 md:p-12 mb-8">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Step into the future of content creation with our cutting-edge AI-powered services. We harness the latest artificial intelligence technology to bring your creative visions to life with stunning visuals and dynamic video productions that were once impossible or prohibitively expensive.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our AI creation services blend human creativity with machine precision, enabling us to produce unique, high-quality content at unprecedented speeds. From generating photorealistic images to creating engaging video content, we leverage AI tools to push creative boundaries while maintaining the authentic touch that resonates with your audience.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Whether you need product visuals without a photoshoot, custom illustrations that perfectly match your brand, or engaging video content for social media, our AI-powered solutions deliver professional results in a fraction of the traditional time and cost. We don't just use AI—we master it to serve your creative vision.
            </p>
          </div>
        </GlassContainer>

        <GlassContainer className="p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">What We Offer</h2>
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </GlassContainer>

        <GlassContainer className="p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Our AI Creation Process</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">1. Creative Briefing</h3>
              <p className="text-muted-foreground">We discuss your vision, goals, style preferences, and intended use to understand exactly what you need from the AI-generated content.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">2. AI Model Selection</h3>
              <p className="text-muted-foreground">We choose the most appropriate AI tools and models based on your project requirements, ensuring optimal quality and style.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">3. Generation & Iteration</h3>
              <p className="text-muted-foreground">Our experts create multiple variations using AI, refining prompts and parameters to achieve the perfect result aligned with your vision.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">4. Human Touch & Enhancement</h3>
              <p className="text-muted-foreground">We apply professional editing, color correction, and artistic refinements to ensure the final output meets the highest quality standards.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">5. Delivery & Usage Rights</h3>
              <p className="text-muted-foreground">You receive the final assets in your preferred formats with full commercial usage rights and guidelines for best implementation.</p>
            </div>
          </div>
        </GlassContainer>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button 
              size="lg" 
              className="rounded-full px-8"
              data-testid="button-get-started"
            >
              Explore AI Content Creation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
