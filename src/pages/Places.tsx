import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, Filter } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { places } from "@/data/mockData";

const categories = ["All", "Wildlife", "Temple", "Island", "Heritage"];

const Places = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || place.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Explore</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Places to Visit
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              Discover the most beautiful destinations in Assam, from wildlife sanctuaries to ancient temples
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background sticky top-16 md:top-20 z-30 border-b border-border">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search places..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Places Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((place, index) => (
              <Link
                key={place.id}
                to={`/places/${place.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-tea-green-dark text-xs font-medium rounded-full">
                    {place.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm line-clamp-2">
                    {place.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Assam, India</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No places found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Places;
