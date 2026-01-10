import { useState } from "react";
import { Star, MapPin, Wifi, Utensils, Car, Trees } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { hotels, parks } from "@/data/mockData";

const tabs = ["Hotels", "National Parks", "Inns & Stays"];

const Stay = () => {
  const [activeTab, setActiveTab] = useState("Hotels");

  const filteredHotels = hotels.filter((h) => {
    if (activeTab === "Hotels") return h.type === "Hotel";
    if (activeTab === "National Parks") return false;
    return h.type === "Inn" || h.type === "Resort";
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Accommodation</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Parks, Hotels & Stays
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              Find the perfect place to stay during your Assam adventure
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-background border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container-custom py-4">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          {activeTab === "National Parks" ? (
            <div className="grid md:grid-cols-2 gap-6">
              {parks.map((park, index) => (
                <div
                  key={park.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-video">
                    <img
                      src={park.image}
                      alt={park.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-tea-green text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                      <Trees className="w-3 h-3" />
                      National Park
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-card-foreground">
                      {park.name}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {park.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {park.location}
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        Best time: <span className="font-medium text-foreground">{park.bestTime}</span>
                      </span>
                      <Button variant="gold" size="sm">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHotels.map((hotel, index) => (
                <div
                  key={hotel.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-card text-card-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      {hotel.rating}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {hotel.type}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-card-foreground mt-1">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {hotel.location}
                    </div>
                    <div className="flex gap-2 mt-4">
                      {hotel.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div>
                        <span className="text-lg font-bold text-foreground">{hotel.price}</span>
                        <span className="text-sm text-muted-foreground">/night</span>
                      </div>
                      <Button variant="gold" size="sm">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Stay;
