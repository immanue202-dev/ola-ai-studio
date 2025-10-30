import { Button } from "@/components/ui/button";
import GlassContainer from "@/components/GlassContainer";
import { Palette, Globe, Camera, Video, Sparkles } from "lucide-react";
import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  deliveryTime: string;
  paystackUrl: string;
}

interface PricingCategory {
  icon: typeof Palette;
  title: string;
  emoji: string;
  tiers: PricingTier[];
}

const pricingData: PricingCategory[] = [
  {
    icon: Palette,
    title: "Graphic Design",
    emoji: "🎨",
    tiers: [
      {
        name: "Starter",
        price: "₦10,000",
        features: [
          "Basic logo or flyer design",
          "1–2 concepts",
          "2 revisions included"
        ],
        deliveryTime: "2-day delivery",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",
      },
      {
        name: "Professional",
        price: "₦25,000",
        features: [
          "Complete brand kit",
          "Logo + banners + colors",
          "3 revisions included"
        ],
        deliveryTime: "4-day delivery",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",
      },
      {
        name: "Elite",
        price: "₦45,000",
        features: [
          "Full visual identity",
          "Complete brand package",
          "3 revisions + priority support"
        ],
        deliveryTime: "Priority delivery",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",
      },
    ],
  },
  {
    icon: Globe,
    title: "Website & App Design",
    emoji: "🖥️",
    tiers: [
      {
        name: "Starter Web",
        price: "₦30,000",
        features: [
          "1-page responsive site",
          "Mobile optimized",
          "Basic SEO setup"
        ],
        deliveryTime: "3–5 days",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad" ,
      },
      {
        name: "Professional Web",
        price: "₦60,000",
        features: [
          "3–5 page website",
          "Fully mobile optimized",
          "SEO ready + contact forms"
        ],
        deliveryTime: "7–10 days",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",
      },
      {
        name: "Premium Web/App",
        price: "₦100,000+",
        features: [
          "Custom UI/UX design",
          "SEO-ready website",
          "No-code app optional"
        ],
        deliveryTime: "2–3 weeks",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",
      },
    ],
  },
  {
    icon: Camera,
    title: "AI Photography",
    emoji: "🤖",
    tiers: [
      {
        name: "Basic AI Portrait",
        price: "₦5,000",
        features: [
          "5 AI-generated photos",
          "Professional quality",
          "Digital delivery"
        ],
        deliveryTime: "24-hour delivery",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",

      },
      {
        name: "Creative Studio",
        price: "₦15,000",
        features: [
          "10 AI edits + styling",
          "Multiple style options",
          "High-resolution files"
        ],
        deliveryTime: "2-day delivery",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",
      },
      {
        name: "Premium Frame Edition",
        price: "₦35,000",
        features: [
          "15 AI photos",
          "Professional editing",
          "Physical photo frame included"
        ],
        deliveryTime: "5-day delivery",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",
      },
    ],
  },
  {
    icon: Video,
    title: "AI Video & Branding",
    emoji: "🎥",
    tiers: [
      {
        name: "Social Spark",
        price: "₦20,000",
        features: [
          "1 short AI video ad",
          "Up to 30 seconds",
          "Social media optimized"
        ],
        deliveryTime: "3-day delivery",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",
      },
      {
        name: "Business Pro",
        price: "₦50,000",
        features: [
          "3 branded AI promo videos",
          "Up to 60 seconds each",
          "Multiple formats included"
        ],
        deliveryTime: "7-day delivery",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad",
      },
      {
        name: "Premium Showcase",
        price: "₦90,000+",
        features: [
          "Full video branding package",
          "Professional voiceover",
          "Custom animations + effects"
        ],
        deliveryTime: "2-week delivery",
        paystackUrl: "https://paystack.shop/pay/9myv1azrad"
      },
    ],
  },
];

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <GlassContainer className="p-6 h-full flex flex-col group hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-400">
      <div className="flex flex-col flex-1">
        <h3 
          className="text-xl font-semibold mb-2"
          data-testid={`text-tier-${tier.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {tier.name}
        </h3>
        <div className="mb-4">
          <span 
            className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            data-testid={`text-price-${tier.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {tier.price}
          </span>
        </div>
        
        <div className="space-y-3 mb-6 flex-1">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-sm text-muted-foreground mb-4 font-medium">
          {tier.deliveryTime}
        </div>

        <Button
          className="w-full rounded-full group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-400"
          onClick={() => window.open(tier.paystackUrl, '_blank')}
          data-testid={`button-buy-${tier.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Buy Now
        </Button>
      </div>
    </GlassContainer>
  );
}

function CategorySection({ category }: { category: PricingCategory }) {
  const Icon = category.icon;
  
  return (
    <div className="mb-20 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className="text-3xl">{category.emoji}</span>
        <h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          data-testid={`text-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {category.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tiers.map((tier, index) => (
          <div
            key={tier.name}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <PricingCard tier={tier} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  const [showCustomQuote, setShowCustomQuote] = useState(false);

  return (
    <div className="min-h-screen px-4 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            data-testid="text-page-heading"
          >
            Plans & Pricing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your creative needs. All prices are in Nigerian Naira (₦).
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            International payments automatically converted to NGN
          </p>
        </div>

        {/* Pricing Categories */}
        {pricingData.map((category) => (
          <CategorySection key={category.title} category={category} />
        ))}

        {/* Custom Quote Section */}
        <div className="mt-16 animate-fade-in">
          <GlassContainer className="p-8 md:p-12 text-center hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-400">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have a unique project in mind? We'd love to hear about it! Get a personalized quote tailored to your specific requirements.
            </p>
            <Button
              size="lg"
              variant="default"
              className="rounded-full px-8 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-400"
              onClick={() => window.location.href = '/contact'}
              data-testid="button-custom-quote"
            >
              Request Custom Quote
            </Button>
          </GlassContainer>
        </div>

        {/* Payment Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground animate-fade-in">
          <p>All payments processed securely through Paystack</p>
          <p className="mt-2">Questions? <a href="/contact" className="text-primary hover:underline">Contact us</a></p>
        </div>
      </div>
    </div>
  );
}
