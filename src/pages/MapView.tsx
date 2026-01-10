import { MapPin, Navigation } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { places } from "@/data/mockData";
import { Link } from "react-router-dom";

const MapView = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Navigate</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
                Map View
              </h1>
            </div>
            <Button variant="heroOutline" size="sm">
              <Navigation className="w-4 h-4" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Map Area */}
      <section className="flex-1">
        <div className="grid lg:grid-cols-3 h-[70vh]">
          {/* Map Placeholder */}
          <div className="lg:col-span-2 bg-river-blue-light relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 bg-card/90 backdrop-blur rounded-2xl shadow-lg">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold">Interactive Map</h3>
                <p className="text-muted-foreground mt-2 text-sm max-w-xs">
                  The interactive map will be integrated here. Click on markers to explore tourist spots.
                </p>
              </div>
            </div>
            
            {/* Mock Markers */}
            {places.slice(0, 3).map((place, index) => (
              <div
                key={place.id}
                className="absolute cursor-pointer group"
                style={{
                  top: `${30 + index * 15}%`,
                  left: `${20 + index * 20}%`,
                }}
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-card rounded-lg shadow-lg p-3 whitespace-nowrap">
                    <p className="font-medium text-sm">{place.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Locations List */}
          <div className="bg-card border-l border-border overflow-y-auto">
            <div className="p-4 border-b border-border sticky top-0 bg-card z-10">
              <h3 className="font-display text-lg font-semibold">Tourist Locations</h3>
              <p className="text-sm text-muted-foreground">{places.length} places found</p>
            </div>
            <div className="divide-y divide-border">
              {places.map((place) => (
                <Link
                  key={place.id}
                  to={`/places/${place.id}`}
                  className="flex gap-4 p-4 hover:bg-muted transition-colors"
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{place.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {place.shortDescription}
                    </p>
                    <span className="inline-block px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded mt-2">
                      {place.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MapView;
