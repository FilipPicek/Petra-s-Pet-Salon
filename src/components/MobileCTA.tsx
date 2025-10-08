import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <button
        onClick={scrollToBooking}
        className="w-full bg-gradient-to-r from-sky-400 to-sky-500 text-white py-4 font-semibold shadow-2xl flex items-center justify-center space-x-2"
      >
        <Calendar className="w-5 h-5" />
        <span>Rezerviraj sada</span>
      </button>
    </div>
  );
}
