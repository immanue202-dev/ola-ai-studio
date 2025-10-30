import PortfolioCard from "@/components/PortfolioCard";
import birthdayCard from "@assets/3f046786-a36f-43a1-aa79-476c95e4cbc1_1760905172959.jpg";
import movieApp from "@assets/a031be79-acc5-4518-a8d5-60d31cb20847_1760905181618.jpg";
import graceLopLogo from "@assets/dee4d358-5224-4cb5-af7b-5909a050a8a9_1760905208921.jpg";
import socialMedia from "@assets/4ef5a02a-41f0-4467-94d4-63241c3a5fbd_1760905228023.jpg";
import realEstate from "@assets/3d6bbe3f-faca-4b3b-88a3-c0c40d5ff5f5_1760905250674.jpg";
import hotel from "@assets/d51c30bf-2aa3-4c07-9082-ab80590dd6a1_1760905261138.jpg";
import ebook from "@assets/19ea3260-42eb-4861-8a4e-121cc77eecd6_1760905276448.jpg";
import portfolio1 from "@assets/stock_images/modern_graphic_desig_62555010.jpg";
import portfolio2 from "@assets/stock_images/modern_graphic_desig_4121ccfe.jpg";
import portfolio3 from "@assets/stock_images/professional_photogr_b996a5f6.jpg";

const portfolioItems = [
  {
    image: movieApp,
    title: "Movie Streaming App",
    category: "Mobile App Design",
  },
  {
    image: birthdayCard,
    title: "Pastor Birthday Card",
    category: "Graphic Design",
  },
  {
    image: graceLopLogo,
    title: "Grace Lop Ltd Logo",
    category: "Brand Identity",
  },
  {
    image: socialMedia,
    title: "Social Media Marketing",
    category: "Marketing Design",
  },
  {
    image: realEstate,
    title: "Real Estate Promo",
    category: "Marketing Design",
  },
  {
    image: hotel,
    title: "Hotel & Resort Branding",
    category: "Corporate Design",
  },
  {
    image: ebook,
    title: "Digital Ebook Cover",
    category: "Publication Design",
  },
  {
    image: portfolio1,
    title: "Brand Identity Design",
    category: "Graphic Design",
  },
  {
    image: portfolio2,
    title: "Creative Studio Workspace",
    category: "Photography",
  },
  {
    image: portfolio3,
    title: "Professional Photography",
    category: "Corporate",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen px-4 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-fade-in"
          data-testid="text-page-heading"
        >
          Our Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <PortfolioCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
