import { useState } from "react";
import { Train, Bus, Calendar, MapPin, ArrowRight, Search } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Travel = () => {
  const [travelType, setTravelType] = useState<"train" | "bus">("train");

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Plan Your Trip</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Travel Booking
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              Book trains and buses to explore Assam and the Northeast
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-3xl">
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-border">
              <button
                onClick={() => setTravelType("train")}
                className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-colors ${
                  travelType === "train"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Train className="w-5 h-5" />
                Train Booking
              </button>
              <button
                onClick={() => setTravelType("bus")}
                className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-colors ${
                  travelType === "bus"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Bus className="w-5 h-5" />
                Bus Booking
              </button>
            </div>

            {/* Form */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="from">From</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="from" placeholder="Enter city" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="to" placeholder="Enter destination" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Journey Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="date" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passengers">Passengers</Label>
                  <Input id="passengers" type="number" defaultValue={1} min={1} max={10} />
                </div>
              </div>

              <Button variant="gold" size="lg" className="w-full mt-8">
                <Search className="w-4 h-4" />
                Search {travelType === "train" ? "Trains" : "Buses"}
              </Button>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold mb-6">Popular Routes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { from: "Guwahati", to: "Kaziranga", duration: "4h" },
                { from: "Guwahati", to: "Jorhat", duration: "5h" },
                { from: "Guwahati", to: "Sivasagar", duration: "6h" },
                { from: "Guwahati", to: "Tezpur", duration: "3h" },
              ].map((route, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 border border-border hover-lift cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{route.from}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{route.to}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{route.duration}</span>
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

export default Travel;
