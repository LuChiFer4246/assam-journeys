import { Link } from "react-router-dom";
import { MapPin, Star, Heart, Clock, Thermometer } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface PlaceCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  shortDescription: string;
  rating?: number;
  reviewCount?: number;
  bestSeason?: string;
  duration?: string;
  weather?: { temp: string; condition: string };
  index?: number;
  variant?: "default" | "compact" | "featured";
}

export function PlaceCard({
  id,
  name,
  image,
  category,
  shortDescription,
  rating = 4.5,
  reviewCount = 100,
  bestSeason,
  duration,
  weather,
  index = 0,
  variant = "default",
}: PlaceCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  if (variant === "compact") {
    return (
      <Link
        to={`/places/${id}`}
        className="flex gap-4 p-3 rounded-xl hover:bg-muted transition-colors group"
      >
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-xl object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
            {name}
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
            {shortDescription}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex items-center gap-1 text-xs">
              <Star className="w-3 h-3 text-gold fill-gold" />
              {rating}
            </span>
            <span className="text-xs text-muted-foreground">
              {category}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/places/${id}`}
        className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Category Badge */}
          <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
            {category}
          </span>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-sm transition-colors ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/80 text-muted-foreground hover:bg-white hover:text-red-500"
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          </button>

          {/* Weather Badge */}
          {weather && (
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
              <Thermometer className="w-3 h-3 text-terracotta" />
              {weather.temp}
            </div>
          )}
        </div>

        <div className="p-5">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-semibold">{rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({reviewCount} reviews)
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mt-2 text-sm line-clamp-2">
            {shortDescription}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
            {bestSeason && (
              <span className="text-xs text-muted-foreground">
                Best: <span className="font-medium text-foreground">{bestSeason}</span>
              </span>
            )}
            {duration && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {duration}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
