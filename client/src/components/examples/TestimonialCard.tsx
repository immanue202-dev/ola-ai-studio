import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500">
      <TestimonialCard
        name="Sarah Johnson"
        role="CEO, Tech Startup"
        content="Ola AI Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations."
      />
    </div>
  );
}
