import { useState } from 'react';
import { Calendar, User, Dog, Phone, Check } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    dogBreed: '',
    date: '',
    time: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Booking submitted:', formData);

      setIsSuccess(true);
      setFormData({
        name: '',
        dogBreed: '',
        date: '',
        time: '',
        phone: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Došlo je do greške. Molimo pokušajte ponovno.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-100 via-beige-50 to-sky-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-beige-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-brown-900 mb-4">
            Rezervirajte termin
          </h2>
          <p className="text-xl text-brown-600">
            Popunite formu i mi ćemo Vas kontaktirati što prije
          </p>
        </div>

        <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Vaše ime"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white bg-opacity-50"
              />
            </div>

            <div className="relative">
              <Dog className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-400" />
              <input
                type="text"
                name="dogBreed"
                value={formData.dogBreed}
                onChange={handleChange}
                placeholder="Pasmina psa"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white bg-opacity-50"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-400" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white bg-opacity-50"
                />
              </div>

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 rounded-xl border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white bg-opacity-50"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Broj telefona"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white bg-opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                isSuccess
                  ? 'bg-green-500'
                  : 'bg-gradient-to-r from-sky-400 to-sky-500 hover:shadow-xl hover:scale-105'
              } disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
            >
              {isSuccess ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Uspješno poslano!</span>
                </>
              ) : (
                <span>{isSubmitting ? 'Šaljem...' : 'Rezerviraj sada'}</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
