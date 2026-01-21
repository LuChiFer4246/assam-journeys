import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import bihuImg from "@/assets/culture/bihu-dance.jpg";
import mugaImg from "@/assets/culture/muga-silk.jpg";
import foodImg from "@/assets/culture/assamese-food.jpg";
import kazirangaImg from "@/assets/places/kaziranga.jpg";
import kamakhyaImg from "@/assets/places/kamakhya.jpg";
import majuliImg from "@/assets/places/majuli.jpg";
import heroImg from "@/assets/hero-assam.jpg";

const categories = ["All", "Nature", "Culture", "Heritage", "Wildlife", "Festivals"];

const galleryImages = [
  { id: 1, src: heroImg, title: "Brahmaputra Valley", category: "Nature" },
  { id: 2, src: kazirangaImg, title: "Kaziranga National Park", category: "Wildlife" },
  { id: 3, src: bihuImg, title: "Bihu Dance Performance", category: "Festivals" },
  { id: 4, src: kamakhyaImg, title: "Kamakhya Temple", category: "Heritage" },
  { id: 5, src: mugaImg, title: "Muga Silk Weaving", category: "Culture" },
  { id: 6, src: majuliImg, title: "Majuli Island Sunset", category: "Nature" },
  { id: 7, src: foodImg, title: "Traditional Assamese Thali", category: "Culture" },
  { id: 8, src: heroImg, title: "Tea Gardens", category: "Nature" },
  { id: 9, src: kazirangaImg, title: "One-Horned Rhino", category: "Wildlife" },
  { id: 10, src: bihuImg, title: "Rongali Bihu Celebration", category: "Festivals" },
  { id: 11, src: kamakhyaImg, title: "Temple Architecture", category: "Heritage" },
  { id: 12, src: majuliImg, title: "Satras of Majuli", category: "Culture" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Visual Journey</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Photo Gallery
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              Explore the breathtaking beauty of Assam through our curated collection
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-background sticky top-16 md:top-20 z-30 border-b border-border">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
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

      {/* Masonry Gallery */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 py-1 bg-gold/90 text-tea-green-dark text-xs font-medium rounded mb-2">
                      {image.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
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
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[85vh] px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImageIndex]?.src}
                alt={filteredImages[currentImageIndex]?.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg mx-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="font-display text-xl font-semibold text-white">
                  {filteredImages[currentImageIndex]?.title}
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  {currentImageIndex + 1} of {filteredImages.length}
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
