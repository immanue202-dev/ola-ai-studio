import { useState, useEffect } from "react";

const phrases = [
  "Where Creativity Meets Elegance",
  "Premium AI-Powered Design",
  "Transforming Ideas Into Reality",
  "Your Vision, Our Expertise",
];

export default function DynamicHeroText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 
      className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
      data-testid="text-hero-heading"
    >
      {phrases[currentIndex]}
    </h1>
  );
}
