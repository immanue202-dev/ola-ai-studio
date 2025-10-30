import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/2349136284262",
      label: "+234 913 628 4262",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/ai_studio",
      label: "@ai_studio",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/ai_studio",
      label: "AI Studio",
    },
    {
      name: "TikTok",
      icon: SiTiktok,
      href: "https://tiktok.com/@ai_studio",
      label: "@ai_studio",
    },
  ];

  return (
    <footer className="px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/20 dark:border-white/10 rounded-2xl px-6 py-8 shadow-lg">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-social-${social.name.toLowerCase()}`}
              >
                <Button
                  variant="ghost"
                  className="gap-2 rounded-full hover:bg-primary/20"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{social.label}</span>
                </Button>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-white/10 pt-6">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} Ola AI Studio - A Division of Ola Digital Concepts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
