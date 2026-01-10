import { FileText, Download, BookOpen, GraduationCap } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

const documents = [
  {
    title: "History of the Ahom Kingdom",
    type: "PDF",
    size: "2.4 MB",
    category: "History",
  },
  {
    title: "Assamese Folk Traditions",
    type: "PDF",
    size: "1.8 MB",
    category: "Culture",
  },
  {
    title: "Wildlife of Kaziranga",
    type: "PDF",
    size: "3.2 MB",
    category: "Wildlife",
  },
  {
    title: "Ancient Temples of Assam",
    type: "PDF",
    size: "4.1 MB",
    category: "Heritage",
  },
  {
    title: "Bihu Festival Documentation",
    type: "PDF",
    size: "1.5 MB",
    category: "Festivals",
  },
];

const Research = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Academic Resources</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Research & Documentation
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              Access scholarly resources, historical documents, and research materials about Assam
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose max-w-none">
                <h2 className="font-display text-2xl font-semibold">About This Resource</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This section is dedicated to researchers, historians, and students interested in studying 
                  the rich heritage of Assam. Here you'll find academic papers, historical documents, and 
                  detailed research materials covering various aspects of Assamese culture, history, and traditions.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold mb-6">Available Documents</h3>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{doc.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {doc.type} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                          {doc.category}
                        </span>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/50 rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Historical References</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong>Buranjis:</strong> Traditional Ahom chronicles documenting the history of Assam 
                    from the 13th century onwards.
                  </p>
                  <p>
                    <strong>Kalika Purana:</strong> Ancient Sanskrit text associated with the Kamakhya Temple, 
                    containing important historical and religious information.
                  </p>
                  <p>
                    <strong>Yogini Tantra:</strong> A tantric text that provides insights into the religious 
                    practices and cultural traditions of ancient Assam.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Digital Archives</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Academic Papers</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Government Records</span>
                  </a>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-display text-lg font-semibold mb-3">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For research assistance or access to restricted materials, please contact our documentation team.
                </p>
                <Button variant="default" size="sm" className="w-full">
                  Contact Research Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
