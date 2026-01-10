import { Layout } from "@/components/layout";
import { historyTimeline } from "@/data/mockData";

const History = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Through Time</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              History of Assam
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              Journey through millennia of rich history, from ancient kingdoms to modern times
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {historyTimeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div
                    className={`bg-card rounded-2xl p-6 shadow-sm border border-border hover-lift animate-fade-up ml-8 md:ml-0`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                        event.era === "ancient"
                          ? "bg-terracotta-light text-terracotta"
                          : event.era === "medieval"
                          ? "bg-river-blue-light text-river-blue"
                          : event.era === "colonial"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-tea-green/10 text-tea-green"
                      }`}
                    >
                      {event.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-card-foreground">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 mt-6" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
