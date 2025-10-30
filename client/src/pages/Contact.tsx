import { useState } from "react";
import { Button } from "@/components/ui/button";
import GlassContainer from "@/components/GlassContainer";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    console.log("Contact form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen px-4 py-24 md:py-32">
      <div className="max-w-2xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-fade-in"
          data-testid="text-page-heading"
        >
          Get in Touch
        </h1>

        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <GlassContainer className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-400"
                  placeholder="Your name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-400"
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-400 resize-none"
                  placeholder="Tell us about your project..."
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-400"
                data-testid="button-send-message"
              >
                Send Message
              </Button>
            </form>
          </GlassContainer>
        </div>
      </div>
    </div>
  );
}
