import { useState } from "react";
import { Star, Send } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { reviews } from "@/data/mockData";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Traveler Reviews
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              See what other travelers have to say about their Assam experience
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-6">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{review.name}</h4>
                          <p className="text-sm text-muted-foreground">{review.location}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? "text-gold fill-gold"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Review Form */}
            <div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border sticky top-24">
                <h3 className="font-display text-xl font-semibold mb-6">Share Your Experience</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Rating</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                          className="p-1"
                        >
                          <Star
                            className={`w-6 h-6 transition-colors ${
                              star <= (hoverRating || rating)
                                ? "text-gold fill-gold"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Input placeholder="Your city" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Review</label>
                    <Textarea
                      placeholder="Share your experience..."
                      rows={4}
                    />
                  </div>

                  <Button variant="gold" className="w-full">
                    <Send className="w-4 h-4" />
                    Submit Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
