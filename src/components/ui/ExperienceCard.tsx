import { Link } from "react-router-dom";
import { Star, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  price: string;
  rating: number;
  index?: number;
}

export function ExperienceCard({
  id,
  title,
  subtitle,
  image,
  duration,
  price,
  rating,
  index = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/places/${id}`}
        className="group block relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-400"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Quick View Button */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
              Quick View
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="inline-block px-2.5 py-1 bg-gold/90 text-tea-green-dark text-xs font-medium rounded-full mb-3">
              {subtitle}
            </span>
            <h3 className="font-display text-xl font-semibold text-white mb-2">
              {title}
            </h3>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-gold fill-gold" />
                {rating}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {duration}
              </span>
              <span className="font-semibold text-gold-light">{price}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
