import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { QuickExploreBar } from "@/components/ui/QuickExploreBar";

interface LayoutProps {
  children: React.ReactNode;
  hideQuickExplore?: boolean;
}

export function Layout({ children, hideQuickExplore = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {!hideQuickExplore && <QuickExploreBar />}
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
