import { useState } from 'react';
import { Menu, X, PawPrint, Facebook, Instagram, MessageCircle } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <PawPrint className="w-8 h-8 text-sky-500" />
            <span className="text-2xl font-bold text-brown-800">Petra’s Pet Salon</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-brown-700 hover:text-sky-500 transition-colors font-medium"
            >
              Usluge
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-brown-700 hover:text-sky-500 transition-colors font-medium"
            >
              Galerija
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-brown-700 hover:text-sky-500 transition-colors font-medium"
            >
              Recenzije
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-brown-700 hover:text-sky-500 transition-colors font-medium"
            >
              Kontakt
            </button>
            <div className="flex items-center space-x-3 ml-2">
              <a
                href="https://www.facebook.com/salon.petras.pet"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-brown-700 hover:text-sky-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-brown-700 hover:text-sky-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="text-brown-700 hover:text-sky-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <button
            className="md:hidden text-brown-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-brown-700 hover:text-sky-500 transition-colors font-medium py-2"
            >
              Usluge
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-brown-700 hover:text-sky-500 transition-colors font-medium py-2"
            >
              Galerija
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-brown-700 hover:text-sky-500 transition-colors font-medium py-2"
            >
              Recenzije
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-brown-700 hover:text-sky-500 transition-colors font-medium py-2"
            >
              Kontakt
            </button>
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href="https://www.facebook.com/salon.petras.pet"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="text-brown-700 hover:text-sky-500 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-brown-700 hover:text-sky-500 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="text-brown-700 hover:text-sky-500 transition-colors"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
          </div>
        </div>
      )}
    </nav>
  );
}
