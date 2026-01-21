import { useState } from "react";
import { Plus, GripVertical, Trash2, MapPin, Clock, Calendar, Download, Share2 } from "lucide-react";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { places } from "@/data/mockData";

interface DayPlan {
  id: string;
  day: number;
  items: typeof places;
}

const Itinerary = () => {
  const [tripName, setTripName] = useState("My Assam Adventure");
  const [days, setDays] = useState<DayPlan[]>([
    { id: "day-1", day: 1, items: [places[0]] },
    { id: "day-2", day: 2, items: [places[1], places[2]] },
    { id: "day-3", day: 3, items: [] },
  ]);
  const [showAddPlace, setShowAddPlace] = useState<string | null>(null);

  const addDay = () => {
    const newDay = {
      id: `day-${days.length + 1}`,
      day: days.length + 1,
      items: [],
    };
    setDays([...days, newDay]);
  };

  const removeDay = (dayId: string) => {
    setDays(days.filter((d) => d.id !== dayId).map((d, i) => ({ ...d, day: i + 1 })));
  };

  const addPlaceToDay = (dayId: string, place: typeof places[0]) => {
    setDays(
      days.map((d) =>
        d.id === dayId ? { ...d, items: [...d.items, place] } : d
      )
    );
    setShowAddPlace(null);
  };

  const removePlaceFromDay = (dayId: string, placeId: string) => {
    setDays(
      days.map((d) =>
        d.id === dayId
          ? { ...d, items: d.items.filter((p) => p.id !== placeId) }
          : d
      )
    );
  };

  const availablePlaces = places.filter(
    (p) => !days.some((d) => d.items.some((item) => item.id === p.id))
  );

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Trip Planner</span>
              <Input
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                className="font-display text-3xl md:text-4xl font-bold text-primary-foreground bg-transparent border-none p-0 h-auto focus-visible:ring-0 mt-2"
              />
              <p className="text-primary-foreground/70 mt-2">
                {days.length} days • {days.reduce((acc, d) => acc + d.items.length, 0)} places
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="heroOutline" size="sm">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="gold" size="sm">
                <Download className="w-4 h-4" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Itinerary Days */}
            <div className="lg:col-span-2 space-y-6">
              {days.map((day, dayIndex) => (
                <motion.div
                  key={day.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: dayIndex * 0.1 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden"
                >
                  {/* Day Header */}
                  <div className="flex items-center justify-between p-4 bg-muted/50 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold">Day {day.day}</h3>
                        <p className="text-sm text-muted-foreground">
                          {day.items.length} {day.items.length === 1 ? "place" : "places"}
                        </p>
                      </div>
                    </div>
                    {days.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeDay(day.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  {/* Day Items */}
                  <div className="p-4 space-y-3">
                    <AnimatePresence mode="popLayout">
                      {day.items.map((place, index) => (
                        <motion.div
                          key={place.id}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl group"
                        >
                          <div className="cursor-grab active:cursor-grabbing text-muted-foreground">
                            <GripVertical className="w-5 h-5" />
                          </div>
                          <img
                            src={place.image}
                            alt={place.name}
                            className="w-14 h-14 rounded-lg object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{place.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                              <MapPin className="w-3 h-3" />
                              <span className="truncate">{place.category}</span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removePlaceFromDay(day.id, place.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {day.items.length === 0 && (
                      <div className="py-8 text-center text-muted-foreground">
                        <p className="text-sm">No places added yet</p>
                      </div>
                    )}

                    {/* Add Place Button */}
                    {showAddPlace === day.id ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="border border-dashed border-border rounded-xl p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium">Select a place to add</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowAddPlace(null)}
                          >
                            Cancel
                          </Button>
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {availablePlaces.length > 0 ? (
                            availablePlaces.map((place) => (
                              <button
                                key={place.id}
                                onClick={() => addPlaceToDay(day.id, place)}
                                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors text-left"
                              >
                                <img
                                  src={place.image}
                                  alt={place.name}
                                  className="w-10 h-10 rounded-lg object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">{place.name}</p>
                                  <p className="text-xs text-muted-foreground">{place.category}</p>
                                </div>
                              </button>
                            ))
                          ) : (
                            <p className="text-sm text-muted-foreground text-center py-4">
                              All places have been added to your itinerary
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full border-dashed"
                        onClick={() => setShowAddPlace(day.id)}
                      >
                        <Plus className="w-4 h-4" />
                        Add Place
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Add Day Button */}
              <Button
                variant="outline"
                size="lg"
                className="w-full border-dashed"
                onClick={addDay}
              >
                <Plus className="w-4 h-4" />
                Add Another Day
              </Button>
            </div>

            {/* Summary Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                <h3 className="font-display text-lg font-semibold mb-4">Trip Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <span className="font-medium">{days.length} days</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Places</span>
                    </div>
                    <span className="font-medium">
                      {days.reduce((acc, d) => acc + d.items.length, 0)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Est. Time</span>
                    </div>
                    <span className="font-medium">
                      {days.reduce((acc, d) => acc + d.items.length * 3, 0)}+ hours
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button variant="gold" className="w-full">
                    <Download className="w-4 h-4" />
                    Download Itinerary
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="w-4 h-4" />
                    Share with Friends
                  </Button>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h4 className="font-display font-semibold mb-3">Travel Tips</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best time to visit: October to April</li>
                  <li>• Book Kaziranga safari in advance</li>
                  <li>• Carry light cotton clothes</li>
                  <li>• Try local Assamese cuisine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Itinerary;
