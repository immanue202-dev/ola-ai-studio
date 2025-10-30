import GlassContainer from "@/components/GlassContainer";
import founderImage from "@assets/Generated Image October 19, 2025 - 12_52PM_1760905947877.png";

export default function About() {
  return (
    <div className="min-h-screen px-4 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-fade-in"
          data-testid="text-page-heading"
        >
          About Ola AI Studio
        </h1>

        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <GlassContainer className="p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground">
                <span className="font-semibold text-primary">Ola AI Studio</span> is a premium creative brand and a distinguished division of <span className="font-semibold">Ola Digital Concepts</span>. We are an elite creative hub where traditional artistry seamlessly merges with cutting-edge artificial intelligence.
              </p>

              <p className="text-muted-foreground">
                Our studio represents the pinnacle of modern creative excellence, combining years of design expertise with the limitless possibilities of AI technology. We don't just create; we craft experiences that resonate, inspire, and elevate brands to new heights.
              </p>

              <p className="text-muted-foreground">
                At Ola AI Studio, every project is approached with meticulous attention to detail, innovative thinking, and a commitment to delivering nothing short of exceptional. We believe that true creativity lies at the intersection of human imagination and technological advancement.
              </p>

              <p className="text-foreground font-medium">
                Whether you're a startup seeking to establish your brand identity or an established enterprise looking to reimagine your visual presence, we bring the perfect blend of elegance, innovation, and strategic thinking to every endeavor.
              </p>
            </div>
          </GlassContainer>
        </div>

        {/* CEO Section */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            data-testid="text-ceo-heading"
          >
            Meet the Founder & CEO
          </h2>

          <GlassContainer className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <div className="rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
                  <img
                    src={founderImage}
                    alt="Founder & CEO"
                    className="w-full h-full object-cover object-top scale-110"
                    style={{ marginBottom: '-10%' }}
                    data-testid="img-ceo"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  The Creative Visionary
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Leading Ola AI Studio with a passion for innovation and excellence, our founder brings together years of design expertise and a deep understanding of cutting-edge AI technology. With a commitment to transforming creative visions into reality, every project is infused with artistry, precision, and strategic thinking.
                </p>
                <p className="text-foreground font-medium mb-4">
                  Specializing in graphic design, AI-powered content creation, brand development, and digital storytelling for businesses worldwide.
                </p>
                <p className="text-muted-foreground">
                  "At Ola AI Studio, we believe that creativity is limitless when human imagination meets technological innovation. Our mission is to help brands tell their stories in the most elegant and impactful way possible."
                </p>
              </div>
            </div>
          </GlassContainer>
        </div>
      </div>
    </div>
  );
}
