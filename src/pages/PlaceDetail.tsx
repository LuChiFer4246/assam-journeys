import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft, FileText, Share2, Heart } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { places } from "@/data/mockData";

const PlaceDetail = () => {
  const { id } = useParams();
  const place = places.find((p) => p.id === id);

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
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tea-green-dark/90 via-tea-green-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 container-custom">
          <Link
            to="/places"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Places
          </Link>
          <span className="inline-block px-3 py-1 bg-gold text-tea-green-dark text-xs font-medium rounded-full mb-3">
            {place.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            {place.name}
          </h1>
          <div className="flex items-center gap-2 mt-3 text-primary-foreground/80">
            <MapPin className="w-4 h-4" />
            <span>Assam, India</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {place.description}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">History & Significance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {place.history}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">Highlights</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {place.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="p-4 bg-secondary rounded-xl text-center"
                    >
                      <span className="text-sm font-medium text-secondary-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden">
                      <img
                        src={place.image}
                        alt={`${place.name} ${i}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border sticky top-24">
                <h3 className="font-display text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="gold" className="w-full">
                    <MapPin className="w-4 h-4" />
                    View on Map
                  </Button>
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
                    <Button variant="outline" className="flex-1">
                      <Heart className="w-4 h-4" />
                      Save
                    </Button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium mb-3">Location</h4>
                  <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Map View</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlaceDetail;
