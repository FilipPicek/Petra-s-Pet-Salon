import { useEffect, useRef, useState } from 'react';
import { Scissors, Activity, Sparkles, Droplets, Brush, Ear } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Kupanje',
    description: 'Nježno kupanje s kvalitetnim šamponima i regeneratorima prilagođenim koži i dlaci.',
    gradient: 'from-sky-400 to-sky-500',
  },
  {
    icon: Scissors,
    title: 'Šišanje',
    description: 'Stručno šišanje i stiliziranje prema pasmini i vašim željama.',
    gradient: 'from-beige-400 to-brown-400',
  },
  {
    icon: Brush,
    title: 'Izlinjavanje i raščešljavanje',
    description: 'Uklanjanje mrtve dlake i nježno raščešljavanje čvorova za zdravu i sjajnu dlaku.',
    gradient: 'from-sky-300 to-beige-300',
  },
  {
    icon: Activity,
    title: 'Higijena noktića',
    description: 'Sigurno skraćivanje i turpijanje noktiju uz maksimalnu udobnost ljubimca.',
    gradient: 'from-beige-300 to-sky-300',
  },
  {
    icon: Ear,
    title: 'Higijena ušiju',
    description: 'Temeljito čišćenje ušiju s naglaskom na higijenu i prevenciju iritacija.',
    gradient: 'from-sky-200 to-beige-200',
  },
  {
    icon: Sparkles,
    title: 'I druge usluge',
    description: 'Dodatni tretmani po dogovoru – pitajte nas za prilagođene usluge vašem psu.',
    gradient: 'from-brown-200 to-beige-200',
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-beige-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-brown-900 mb-4">
            Naše usluge
          </h2>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            Pružamo kompletnu njegu za vašeg psa s pažnjom prema detaljima
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  visibleCards[index]
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-white to-sky-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-sky-100 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brown-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-brown-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
