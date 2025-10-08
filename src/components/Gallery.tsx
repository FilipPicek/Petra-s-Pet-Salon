import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import slikap1 from '../../slikap1.png';
import slikap2 from '../../slikap2.png';
import slikap3 from '../../slikap3.png';
import slikap4 from '../../slikap4.png';
import slikap5 from '../../slikap5.png';
import slikap6 from '../../slikap6.png';

const images = [
  { url: slikap1, alt: 'Galerija 1' },
  { url: slikap2, alt: 'Galerija 2' },
  { url: slikap3, alt: 'Galerija 3' },
  { url: slikap4, alt: 'Galerija 4' },
  { url: slikap5, alt: 'Galerija 5' },
  { url: slikap6, alt: 'Galerija 6' },
];

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState<boolean[]>(new Array(images.length).fill(false));
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            images.forEach((_, index) => {
              setTimeout(() => {
                setVisibleImages((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-beige-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-brown-900 mb-4">
            Galerija naših radova
          </h2>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            Pogledajte zadovoljne psiće nakon naših tretmana
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                visibleImages[index]
                  ? 'scale-100 opacity-100'
                  : 'scale-90 opacity-0'
              } ${
                index % 3 === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group h-full"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-sky-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            loading="eager"
            sizes="90vw"
          />
        </div>
      )}
    </section>
  );
}
