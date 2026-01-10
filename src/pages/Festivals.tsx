import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Layout } from "@/components/layout";
import { Calendar } from "@/components/ui/calendar";
import { festivals } from "@/data/mockData";

const Festivals = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedFestival, setSelectedFestival] = useState<typeof festivals[0] | null>(null);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Celebrations</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Festivals & Calendar
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              Experience the vibrant festivals that bring Assam alive throughout the year
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border sticky top-24">
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  Festival Calendar
                </h3>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md"
                />
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Click on a festival to see details
                  </p>
                </div>
              </div>
            </div>

            {/* Festivals List */}
            <div className="lg:col-span-2 space-y-6">
              {festivals.map((festival, index) => (
                <div
                  key={festival.id}
                  onClick={() => setSelectedFestival(festival)}
                  className={`bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover-lift cursor-pointer animate-fade-up ${
                    selectedFestival?.id === festival.id ? "ring-2 ring-primary" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 aspect-video md:aspect-square shrink-0">
                      <img
                        src={festival.image}
                        alt={festival.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full mb-2">
                        {festival.date}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-card-foreground">
                        {festival.name}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-sm">
                        {festival.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {festival.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Festivals;
