import { useEffect, useState } from 'react';
import { PawPrint } from 'lucide-react';
import shower from '../../shower.jpg';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige-100 via-sky-50 to-white pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C240,500 480,300 720,400 C960,500 1200,300 1440,400 L1440,800 L0,800 Z"
            fill="url(#gradient1)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#ddd6fe" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-20 left-10 animate-float">
          <PawPrint className="w-16 h-16 text-sky-300 opacity-40" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <PawPrint className="w-12 h-12 text-sky-400 opacity-30" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float">
          <PawPrint className="w-20 h-20 text-beige-300 opacity-25" />
        </div>
        <div className="absolute top-60 right-1/3 animate-float-delayed">
          <PawPrint className="w-14 h-14 text-sky-300 opacity-35" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brown-900 mb-6 leading-tight">
              Najbolje mjesto za{' '}
              <span className="text-sky-500 font-handwriting">vašeg psa</span>
            </h1>
            <p className="text-xl text-brown-700 mb-8 leading-relaxed">
              Profesionalno šišanje, njega i spa tretmani za vašeg četveronožnog prijatelja.
              Stvaramo ugodno okruženje gdje se svaki pas osjeća kao u raju.
            </p>
            <button
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Rezerviraj termin</span>
              <PawPrint className="w-5 h-5" />
            </button>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-200 to-beige-200 rounded-3xl blur-2xl opacity-40"></div>
              <div className="relative bg-white bg-opacity-40 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white">
                <img
                  src={shower}
                  alt="Petra’s Pet Salon - kupanje psa"
                  className="w-full h-64 sm:h-[500px] object-cover rounded-2xl"
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
