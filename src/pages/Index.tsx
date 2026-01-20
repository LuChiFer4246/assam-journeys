import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { HeroSearchWidget } from "@/components/ui/HeroSearchWidget";
import { QuickExploreBar } from "@/components/ui/QuickExploreBar";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { PlaceCard } from "@/components/ui/PlaceCard";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-assam.jpg";
import { places, topExperiences, festivals, reviews, culturalItems } from "@/data/mockData";

const Index = () => {
  return (
    <Layout hideQuickExplore>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-tea-green-dark/95 via-tea-green-dark/80 to-tea-green-dark/40" />
        </div>
        
        <div className="relative container-custom z-10 pt-20">
          <div className="max-w-3xl space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-gold/90 text-tea-green-dark text-sm font-semibold rounded-full"
            >
              Welcome to Northeast India
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
            >
              Discover Assam
              <span className="block text-gold-light mt-2">Nature, Culture & Heritage</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-xl"
            >
              Explore the enchanting land of blue hills and red rivers. 
              From ancient temples to wildlife sanctuaries, experience the magic of Assam.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/places">
                <Button variant="gold" size="xl">
                  Explore Places
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/itinerary">
                <Button variant="heroOutline" size="xl">
                  Plan Trip
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Search Widget */}
          <div className="mt-12 md:mt-16">
            <HeroSearchWidget />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/80 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Explore */}
      <QuickExploreBar />

      {/* Top Experiences */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Must Do</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Top Experiences</h2>
            </div>
            <Link to="/places" className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} {...exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Destinations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Popular Places</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Discover iconic destinations showcasing the best of Assam's natural beauty and cultural heritage
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.slice(0, 6).map((place, index) => (
              <PlaceCard key={place.id} {...place} index={index} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/places">
              <Button variant="outline" size="lg">
                View All Places <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-primary-foreground">What Travelers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-gold fill-gold" : "text-white/30"}`} />
                  ))}
                </div>
                <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">"{review.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-primary-foreground text-sm">{review.name}</p>
                    <p className="text-primary-foreground/60 text-xs">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Explore Assam?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Plan your perfect trip with our custom itinerary builder
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/itinerary">
                  <Button variant="gold" size="lg">Build Your Itinerary</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="lg">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
