import ServiceCard from '../ServiceCard';
import { Palette } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500">
      <ServiceCard
        icon={Palette}
        title="Graphic & Logo Design"
        description="Distinctive visual identities that capture your brand essence and leave lasting impressions."
      />
    </div>
  );
}
