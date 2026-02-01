import { MapPin, Store } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/marketplaceData";

interface ProductCardProps {
  product: Product;
  index?: number;
  onViewDetails: (product: Product) => void;
}

const categoryColors: Record<string, string> = {
  handicraft: "bg-amber-500/90",
  textile: "bg-purple-500/90",
  food: "bg-green-500/90",
  art: "bg-rose-500/90",
  souvenir: "bg-blue-500/90"
};

export function ProductCard({ product, index = 0, onViewDetails }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge
            className={`absolute top-3 left-3 ${categoryColors[product.category]} text-white border-0`}
          >
            {product.category}
          </Badge>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>

          <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
            <Store className="w-3.5 h-3.5" />
            <span className="line-clamp-1">{product.shopName}</span>
          </div>

          <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span className="line-clamp-1">{product.location}</span>
          </div>

          <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
            <span className="text-sm font-semibold text-primary">
              {product.priceRange}
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="mt-3 w-full"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
