import GlassContainer from "./GlassContainer";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
}

export default function PortfolioCard({ image, title, category }: PortfolioCardProps) {
  return (
    <GlassContainer hover className="p-0 overflow-hidden group">
      <div className="relative aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid={`img-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-1" data-testid={`text-portfolio-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
            </h3>
            <p className="text-sm text-white/80" data-testid={`text-portfolio-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
              {category}
            </p>
          </div>
        </div>
      </div>
    </GlassContainer>
  );
}
