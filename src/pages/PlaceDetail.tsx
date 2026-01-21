import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft, FileText, Share2, Heart, Star, Clock, Calendar, DollarSign, Users, ChevronLeft, ChevronRight, X, Sun, CloudRain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { places } from "@/data/mockData";

const PlaceDetail = () => {
  const { id } = useParams();
  const place = places.find((p) => p.id === id);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Generate mock gallery images
  const galleryImages = [place?.image, place?.image, place?.image, place?.image, place?.image, place?.image];

  if (!place) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="font-display text-3xl font-bold">Place not found</h1>
          <Link to="/places" className="text-primary hover:underline mt-4 inline-block">
            Back to Places
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tea-green-dark/95 via-tea-green-dark/50 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/places"
          className="absolute top-24 left-4 md:left-8 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Places
        </Link>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-6 md:p-12 container-custom"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-gold text-tea-green-dark text-sm font-semibold rounded-full">
              {place.category}
            </span>
            {place.rating && (
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full flex items-center gap-1.5">
                <Star className="w-4 h-4 text-gold fill-gold" />
                {place.rating} ({place.reviewCount} reviews)
              </span>
            )}
            {place.familyFriendly && (
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                Family Friendly
              </span>
            )}
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {place.name}
          </h1>
          <div className="flex items-center gap-2 mt-4 text-white/80">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Assam, India</span>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            {place.duration && (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-white text-sm">{place.duration}</span>
              </div>
            )}
            {place.bestSeason && (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                <Calendar className="w-4 h-4 text-gold" />
                <span className="text-white text-sm">{place.bestSeason}</span>
              </div>
            )}
            {place.budget && (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                <DollarSign className="w-4 h-4 text-gold" />
                <span className="text-white text-sm">{place.budget} Budget</span>
              </div>
            )}
            {place.weather && (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                <Sun className="w-4 h-4 text-gold" />
                <span className="text-white text-sm">{place.weather.temp}</span>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content with Tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start mb-6 bg-muted p-1 rounded-xl overflow-x-auto flex-nowrap">
                  <TabsTrigger value="overview" className="rounded-lg">Overview</TabsTrigger>
                  <TabsTrigger value="history" className="rounded-lg">History</TabsTrigger>
                  <TabsTrigger value="howtoreach" className="rounded-lg">How to Reach</TabsTrigger>
                  <TabsTrigger value="besttime" className="rounded-lg">Best Time</TabsTrigger>
                  <TabsTrigger value="gallery" className="rounded-lg">Gallery</TabsTrigger>
                  <TabsTrigger value="faq" className="rounded-lg">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="font-display text-2xl font-semibold mb-4">About {place.name}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {place.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="font-display text-xl font-semibold mb-4">Highlights</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {place.highlights.map((highlight, index) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl text-center border border-primary/10"
                        >
                          <span className="text-sm font-medium text-foreground">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="history" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="font-display text-2xl font-semibold mb-4">History & Significance</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {place.history}
                    </p>
                    <div className="mt-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                      <h4 className="font-semibold mb-2">Did you know?</h4>
                      <p className="text-muted-foreground text-sm">
                        {place.name} has been a significant landmark in Assam's cultural landscape for centuries, 
                        attracting visitors from all over the world who come to experience its unique heritage.
                      </p>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="howtoreach" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="font-display text-2xl font-semibold mb-4">How to Reach</h2>
                    <div className="space-y-4">
                      <div className="p-5 bg-card rounded-xl border border-border">
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          ✈️ By Air
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          The nearest airport is Lokpriya Gopinath Bordoloi International Airport (GAU) in Guwahati, 
                          well-connected to major Indian cities. From there, you can hire a taxi or take a bus.
                        </p>
                      </div>
                      <div className="p-5 bg-card rounded-xl border border-border">
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          🚂 By Train
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Guwahati Railway Station is a major junction connected to all parts of India. 
                          Regular trains run from Delhi, Kolkata, and other major cities.
                        </p>
                      </div>
                      <div className="p-5 bg-card rounded-xl border border-border">
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          🚌 By Road
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Assam has good road connectivity. State and private buses operate regularly 
                          from neighboring states and within Assam.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="besttime" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="font-display text-2xl font-semibold mb-4">Best Time to Visit</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-6 bg-tea-green/10 rounded-xl border border-tea-green/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Sun className="w-6 h-6 text-tea-green" />
                          <h4 className="font-semibold">Peak Season</h4>
                        </div>
                        <p className="text-lg font-medium text-foreground mb-1">{place.bestSeason}</p>
                        <p className="text-muted-foreground text-sm">
                          Pleasant weather, ideal for outdoor activities and sightseeing.
                        </p>
                      </div>
                      <div className="p-6 bg-secondary rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                          <CloudRain className="w-6 h-6 text-muted-foreground" />
                          <h4 className="font-semibold">Monsoon</h4>
                        </div>
                        <p className="text-lg font-medium text-foreground mb-1">June - September</p>
                        <p className="text-muted-foreground text-sm">
                          Heavy rainfall, some areas may be inaccessible. Lush green landscapes.
                        </p>
                      </div>
                    </div>
                    {place.weather && (
                      <div className="mt-6 p-6 bg-card rounded-xl border border-border">
                        <h4 className="font-semibold mb-3">Current Weather Conditions</h4>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                            <Sun className="w-8 h-8 text-gold" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">{place.weather.temp}</p>
                            <p className="text-muted-foreground">{place.weather.condition}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </TabsContent>

                <TabsContent value="gallery" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="font-display text-2xl font-semibold mb-4">Photo Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {galleryImages.map((img, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                          onClick={() => {
                            setCurrentImageIndex(index);
                            setLightboxOpen(true);
                          }}
                        >
                          <img
                            src={img}
                            alt={`${place.name} ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="faq" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="font-display text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <FAQAccordion />
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border sticky top-24"
              >
                <h3 className="font-display text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="gold" className="w-full" size="lg">
                    <MapPin className="w-4 h-4" />
                    View on Map
                  </Button>
                  <Link to="/itinerary" className="block">
                    <Button variant="outline" className="w-full" size="lg">
                      Add to Itinerary
                    </Button>
                  </Link>
                  <Link to="/research" className="block">
                    <Button variant="outline" className="w-full">
                      <FileText className="w-4 h-4" />
                      Research Documentation
                    </Button>
                  </Link>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button
                      variant={isWishlisted ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
                      {isWishlisted ? "Saved" : "Save"}
                    </Button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium mb-3">Location</h4>
                  <div className="aspect-video rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                      <span className="text-muted-foreground text-sm">Interactive Map</span>
                    </div>
                  </div>
                </div>

                {/* Trip Info */}
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  {place.duration && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{place.duration}</span>
                    </div>
                  )}
                  {place.bestSeason && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Best Season</span>
                      <span className="font-medium">{place.bestSeason}</span>
                    </div>
                  )}
                  {place.budget && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Budget</span>
                      <span className="font-medium">{place.budget}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
              }}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={galleryImages[currentImageIndex]}
              alt={`${place.name} ${currentImageIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PlaceDetail;
