import { useState } from "react";
import { Search, ChevronDown, Calendar, Users } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";

const destinations = [
  "Kaziranga National Park",
  "Majuli Island",
  "Kamakhya Temple",
  "Sivasagar",
  "Tea Gardens",
  "Manas National Park",
];

const tripTypes = [
  "Nature & Wildlife",
  "Cultural Heritage",
  "Adventure",
  "Spiritual",
  "Family Trip",
  "Romantic Getaway",
];

export function HeroSearchWidget() {
  const [destination, setDestination] = useState("");
  const [tripType, setTripType] = useState("");
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-2 md:p-3 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3">
        {/* Destination */}
        <div className="relative">
          <button
            onClick={() => {
              setShowDestDropdown(!showDestDropdown);
              setShowTypeDropdown(false);
            }}
            className="w-full flex items-center gap-3 p-3 md:p-4 rounded-xl hover:bg-muted transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-medium">Destination</p>
              <p className="text-sm font-semibold truncate">
                {destination || "Where to?"}
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
          </button>
          {showDestDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50">
              {destinations.map((dest) => (
                <button
                  key={dest}
                  onClick={() => {
                    setDestination(dest);
                    setShowDestDropdown(false);
                  }}
                  className="w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors"
                >
                  {dest}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Trip Type */}
        <div className="relative">
          <button
            onClick={() => {
              setShowTypeDropdown(!showTypeDropdown);
              setShowDestDropdown(false);
            }}
            className="w-full flex items-center gap-3 p-3 md:p-4 rounded-xl hover:bg-muted transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-medium">Trip Type</p>
              <p className="text-sm font-semibold truncate">
                {tripType || "Select type"}
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
          </button>
          {showTypeDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50">
              {tripTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setTripType(type);
                    setShowTypeDropdown(false);
                  }}
                  className="w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dates */}
        <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl hover:bg-muted transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-river-blue/10 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5 text-river-blue" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground font-medium">Dates</p>
            <p className="text-sm font-semibold">Add dates</p>
          </div>
        </div>

        {/* Search Button */}
        <Button variant="gold" size="lg" className="h-full min-h-[60px] rounded-xl text-base">
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
      </div>
    </motion.div>
  );
}
