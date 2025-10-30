import PortfolioCard from '../PortfolioCard';
import portfolioImage from '@assets/stock_images/modern_graphic_desig_62555010.jpg';

export default function PortfolioCardExample() {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500">
      <PortfolioCard
        image={portfolioImage}
        title="Brand Identity Design"
        category="Graphic Design"
      />
    </div>
  );
}
