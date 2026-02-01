import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Store, User, Heart, Phone } from "lucide-react";
import type { Product } from "@/data/marketplaceData";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailModal({ product, open, onOpenChange }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
              {product.category}
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Store className="w-4 h-4" />
                <span>{product.shopName}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{product.artisanName}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{product.location}</span>
            </div>

            <div className="p-4 bg-secondary rounded-xl">
              <h4 className="font-medium mb-2">The Story Behind</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.story}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-lg font-semibold text-primary">
                {product.priceRange}
              </span>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1" variant="gold">
                <Phone className="w-4 h-4" />
                Contact Seller
              </Button>
              <Button variant="outline">
                <Heart className="w-4 h-4" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
