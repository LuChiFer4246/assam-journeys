import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Compass, Mountain, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import heroImage from "@/assets/hero-assam.jpg";
import kazirangaImg from "@/assets/places/kaziranga.jpg";
import kamakhyaImg from "@/assets/places/kamakhya.jpg";
import majuliImg from "@/assets/places/majuli.jpg";
import bihuImg from "@/assets/culture/bihu-dance.jpg";
import mugaImg from "@/assets/culture/muga-silk.jpg";
import foodImg from "@/assets/culture/assamese-food.jpg";

const featuredPlaces = [
  { name: "Kaziranga National Park", image: kazirangaImg, category: "Wildlife" },
  { name: "Kamakhya Temple", image: kamakhyaImg, category: "Temple" },
  { name: "Majuli Island", image: majuliImg, category: "Island" },
];

const features = [
  { icon: Mountain, title: "Explore Nature", desc: "Tea gardens, rivers & wildlife" },
  { icon: Calendar, title: "Festivals", desc: "Experience Bihu & traditions" },
  { icon: Utensils, title: "Cuisine", desc: "Authentic Assamese flavors" },
  { icon: Compass, title: "Adventures", desc: "Safaris & river expeditions" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-tea-green-dark/90 via-tea-green-dark/70 to-transparent" />
        </div>
        
        <div className="relative container-custom z-10">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <span className="inline-block px-4 py-1.5 bg-gold/90 text-tea-green-dark text-sm font-medium rounded-full">
              Welcome to Northeast India
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Discover Assam
              <span className="block text-gold-light">Culture, Nature & History</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg">
              Explore the enchanting land of blue hills and red rivers. 
              From ancient temples to wildlife sanctuaries, experience the magic of Assam.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/places">
                <Button variant="hero" size="xl">
                  Explore Places
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/festivals">
                <Button variant="heroOutline" size="xl">
                  View Festivals
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary-foreground/80 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-primary py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 text-primary-foreground">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Top Destinations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Popular Places to Visit
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Discover iconic destinations that showcase the best of Assam's natural beauty and cultural heritage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPlaces.map((place, index) => (
              <Link
                key={place.name}
                to="/places"
                className={`group relative overflow-hidden rounded-2xl aspect-[4/5] hover-lift stagger-${index + 1}`}
                style={{ opacity: 0, animation: 'fadeUp 0.6s ease-out forwards' }}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tea-green-dark/90 via-tea-green-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-gold/90 text-tea-green-dark text-xs font-medium rounded-full mb-3">
                    {place.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground">
                    {place.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-primary-foreground/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Assam, India</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/places">
              <Button variant="gold" size="lg">
                View All Places
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Rich Heritage</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Experience Assamese Culture
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Immerse yourself in the vibrant traditions of Assam – from the rhythmic Bihu dances 
                to the golden shimmer of Muga silk. Discover a culture that has flourished for 
                thousands of years along the banks of the mighty Brahmaputra.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="font-display text-2xl font-bold text-primary">600+</div>
                  <div className="text-sm text-muted-foreground">Years of Ahom Rule</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="font-display text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Bihu Festivals</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="font-display text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Classical Dances</div>
                </div>
              </div>
              <Link to="/culture">
                <Button variant="default" size="lg">
                  Explore Culture
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden hover-lift">
                  <img src={bihuImg} alt="Bihu Dance" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden hover-lift">
                  <img src={foodImg} alt="Assamese Food" className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden hover-lift">
                  <img src={mugaImg} alt="Muga Silk" className="w-full h-64 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden hover-lift">
                  <img src={kamakhyaImg} alt="Temple" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Plan Your Assam Adventure
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            From booking travel to finding the perfect stay, we've got everything you need 
            for an unforgettable journey through Assam.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/travel">
              <Button variant="gold" size="lg">
                Book Travel
              </Button>
            </Link>
            <Link to="/stay">
              <Button variant="heroOutline" size="lg">
                Find Hotels
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
