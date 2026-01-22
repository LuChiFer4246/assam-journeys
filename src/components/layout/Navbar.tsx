import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Search, Compass, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Explore", path: "/places" },
  { name: "Festivals", path: "/festivals" },
  { name: "Map", path: "/map" },
  { name: "Culture", path: "/culture" },
  { name: "Stays", path: "/stay" },
  { name: "Travel", path: "/travel" },
  { name: "Gallery", path: "/gallery" },
  { name: "Research", path: "/research" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
              }`}>
                <Compass className={`w-5 h-5 transition-colors ${
                  isScrolled ? "text-primary-foreground" : "text-white"
                }`} />
              </div>
              <div className="hidden sm:block">
                <span className={`font-display text-xl font-semibold transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}>
                  Assam
                </span>
                <span className={`font-display text-xl font-light ml-1 transition-colors ${
                  isScrolled ? "text-primary" : "text-gold-light"
                }`}>
                  Guide
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? isScrolled
                        ? "bg-primary text-primary-foreground"
                        : "bg-white/20 text-white backdrop-blur-sm"
                      : isScrolled
                      ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setShowSearch(true)}
                className={`p-2.5 rounded-lg transition-colors ${
                  isScrolled
                    ? "hover:bg-muted text-muted-foreground hover:text-foreground"
                    : "hover:bg-white/10 text-white/80 hover:text-white"
                }`}
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/wishlist"
                className={`p-2.5 rounded-lg transition-colors ${
                  isScrolled
                    ? "hover:bg-muted text-muted-foreground hover:text-foreground"
                    : "hover:bg-white/10 text-white/80 hover:text-white"
                }`}
              >
                <Heart className="w-5 h-5" />
              </Link>
              <ThemeToggle isScrolled={isScrolled} />
              <Link to="/login">
                <Button
                  variant={isScrolled ? "outline" : "ghost"}
                  size="sm"
                  className={!isScrolled ? "text-white border-white/30 hover:bg-white/10" : ""}
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="gold" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setShowSearch(true)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "hover:bg-muted text-foreground"
                    : "hover:bg-white/10 text-white"
                }`}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "hover:bg-muted text-foreground"
                    : "hover:bg-white/10 text-white"
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="container-custom py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        location.pathname === link.path
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex gap-3 pt-4 border-t border-border mt-4">
                  <Link to="/login" className="flex-1">
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/signup" className="flex-1">
                    <Button variant="gold" className="w-full">Sign Up</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Search Modal */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24"
            onClick={() => setShowSearch(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-2xl mx-4 bg-card rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 p-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search places, festivals, stays..."
                  className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
                  autoFocus
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-3">Quick Links</p>
                <div className="flex flex-wrap gap-2">
                  {["Kaziranga", "Majuli", "Bihu Festival", "Tea Gardens", "Hotels"].map((item) => (
                    <Link
                      key={item}
                      to="/places"
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
                      onClick={() => setShowSearch(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
