import { useState } from "react";
import { Layout } from "@/components/layout";
import { culturalItems } from "@/data/mockData";
import bihuImg from "@/assets/culture/bihu-dance.jpg";
import mugaImg from "@/assets/culture/muga-silk.jpg";
import foodImg from "@/assets/culture/assamese-food.jpg";

const categories = ["All", "Dance & Music", "Traditional Clothing", "Food"];

const galleryImages = [bihuImg, mugaImg, foodImg, bihuImg, mugaImg, foodImg];

const Culture = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = culturalItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Heritage</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Assamese Culture
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              Explore the rich cultural tapestry of Assam – traditions that have flourished for millennia
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background border-b border-border">
        <div className="container-custom py-4">
          <div className="flex gap-2 flex-wrap">
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
      </section>

      {/* Cultural Items */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-terracotta text-primary-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Visual Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Cultural Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl hover-lift ${
                  index === 0 || index === 5 ? "md:row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Culture;
