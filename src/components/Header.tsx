
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
};

const navigation: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div>
          <a href="#top" className="text-portfolio-primary text-2xl font-bold">
            My Portfolio
          </a>
        </div>
        
        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {menuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-2 animate-fade-in">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-portfolio-text hover:bg-portfolio-light rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button asChild className="mt-2 bg-portfolio-accent hover:bg-portfolio-highlight text-white">
                  <a href="#contact">Let's Connect</a>
                </Button>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-portfolio-texttransition-all duration-300 hover:gradient-text-hover"
              >
                {item.name}
              </a>
            ))}
            <Button asChild className="ml-4 bg-portfolio-accent hover:bg-portfolio-highlight text-white">
              <a href="#contact">Let's Connect</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
