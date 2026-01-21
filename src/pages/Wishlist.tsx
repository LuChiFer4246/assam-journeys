import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Trash2, MapPin, Star, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { places } from "@/data/mockData";

// Mock wishlist - in real app this would come from state/backend
const initialWishlist = places.slice(0, 4);

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Your Collection</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Saved Places
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              {wishlistItems.length} places saved for your next adventure
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream min-h-[50vh]">
        <div className="container-custom">
          {wishlistItems.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {wishlistItems.map((place, index) => (
                    <motion.div
                      key={place.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover-lift"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <button
                          onClick={() => removeFromWishlist(place.id)}
                          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg"
                        >
                          <Heart className="w-5 h-5 fill-current" />
                        </button>
                        <div className="absolute bottom-3 left-3 flex gap-2">
                          <span className="px-3 py-1 bg-gold text-tea-green-dark text-xs font-medium rounded-full">
                            {place.category}
                          </span>
                          {place.rating && (
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full flex items-center gap-1">
                              <Star className="w-3 h-3 text-gold fill-gold" />
                              {place.rating}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {place.name}
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm line-clamp-2">
                          {place.shortDescription}
                        </p>
                        <div className="flex items-center gap-2 mt-3 text-muted-foreground text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Assam, India</span>
                          {place.bestSeason && (
                            <>
                              <span className="text-border">•</span>
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{place.bestSeason}</span>
                            </>
                          )}
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Link to={`/places/${place.id}`} className="flex-1">
                            <Button variant="gold" size="sm" className="w-full">
                              View Details
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeFromWishlist(place.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Actions */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/itinerary">
                  <Button variant="gold" size="lg">
                    Plan Trip with These Places
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/places">
                  <Button variant="outline" size="lg">
                    Explore More Places
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl font-semibold mb-2">No saved places yet</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Start exploring and save your favorite places to create your perfect Assam itinerary
              </p>
              <Link to="/places">
                <Button variant="gold" size="lg">
                  Explore Places
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Wishlist;
