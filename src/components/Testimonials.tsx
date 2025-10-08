import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marija Horvat',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Nevjerojatno iskustvo! Moj zlatni retriver izgleda fenomenalno nakon svake posjete. Osoblje je profesionalno i voli životinje.',
    rating: 5,
  },
  {
    name: 'Ivan Novak',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Konačno sam pronašao mjesto gdje moj mali pudl dobiva ljubav i pažnju. Spa tretmani su fantastični!',
    rating: 5,
  },
  {
    name: 'Ana Kovačević',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Moj pas uvijek izlazi sretan i njegovana. Preporučujem svima koji žele najbolje za svog ljubimca!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-beige-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beige-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-brown-900 mb-4">
            Što kažu naši klijenti
          </h2>
          <p className="text-xl text-brown-600">
            Zadovoljstvo naših pasa i njihovih vlasnika je naša najveća nagrada
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-sky-200" />

            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 sm:w-24 h-20 sm:h-24 rounded-full object-cover mb-6 border-4 border-sky-200"
                loading="lazy"
                sizes="96px"
              />

              <p className="text-xl text-brown-700 mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              <h4 className="text-2xl font-bold text-brown-900 mb-2">
                {testimonials[currentIndex].name}
              </h4>

              <div className="flex space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white rounded-full p-3 shadow-lg hover:bg-sky-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-brown-800" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white rounded-full p-3 shadow-lg hover:bg-sky-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-brown-800" />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-sky-500 w-8'
                    : 'bg-brown-300 hover:bg-brown-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
