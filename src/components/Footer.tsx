import { PawPrint, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-brown-800 to-brown-900 text-white pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 C150,60 350,60 600,30 C850,0 1050,0 1200,30 L1200,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <PawPrint className="w-8 h-8 text-sky-400" />
              <span className="text-2xl font-bold">Petra’s Pet Salon</span>
            </div>
            <p className="text-brown-300 leading-relaxed">
              Salon za pse: kupanje, šišanje, izlinjavanje, raščešljavanje, higijena noktića i ušiju i dr.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-brown-300 hover:text-sky-400 transition-colors"
                >
                  Usluge
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-brown-300 hover:text-sky-400 transition-colors"
                >
                  Galerija
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-brown-300 hover:text-sky-400 transition-colors"
                >
                  Recenzije
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-brown-300 hover:text-sky-400 transition-colors"
                >
                  Rezervacija
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-brown-300">
              <li>Puškarićeva 32/1</li>
              <li>10000 Zagreb, Croatia</li>
              <li>091 595 6357</li>
              <li>info@petraspet.hr</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Pratite nas</h3>
            <div className="flex space-x-4">
              <a
                href="https://petraspet.hr"
                className="bg-brown-700 p-3 rounded-full hover:bg-sky-500 transition-colors"
                aria-label="Web"
                title="petraspet.hr"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-brown-700 p-3 rounded-full hover:bg-sky-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@petraspet.hr"
                className="bg-brown-700 p-3 rounded-full hover:bg-sky-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-700 pt-8 text-center text-brown-300">
          <p>&copy; 2024 Petra’s Pet Salon. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}
