import { Link } from "react-router-dom";
import { MapPin, Calendar, Home, UtensilsCrossed, BookOpen, Map, Route } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { name: "Places", icon: MapPin, path: "/places" },
  { name: "Festivals", icon: Calendar, path: "/festivals" },
  { name: "Stays", icon: Home, path: "/stay" },
  { name: "Food", icon: UtensilsCrossed, path: "/culture" },
  { name: "History", icon: BookOpen, path: "/history" },
  { name: "Map", icon: Map, path: "/map" },
  { name: "Itineraries", icon: Route, path: "/itinerary" },
];

export function QuickExploreBar() {
  return (
    <div className="bg-background border-b border-border sticky top-16 md:top-20 z-40">
      <div className="container-custom py-3">
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap mr-2">
            Quick Explore:
          </span>
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={item.path}
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium text-secondary-foreground whitespace-nowrap transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
