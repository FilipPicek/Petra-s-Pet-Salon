import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-brown-900 mb-4">
            Petra’s Pet Salon – Kontakt
          </h2>
          <p className="text-xl text-brown-600">
            Page · Pet Groomer — Radno vrijeme: PO DOGOVORU
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-sky-400 to-sky-500 p-4 rounded-2xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown-900 mb-2">Adresa</h3>
                <p className="text-brown-600">
                  Puškarićeva 32/1<br />
                  10000 Zagreb, Croatia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-beige-400 to-brown-400 p-4 rounded-2xl">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown-900 mb-2">Telefon</h3>
                <p className="text-brown-600">
                  091 595 6357
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-sky-300 to-beige-300 p-4 rounded-2xl">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown-900 mb-2">Email</h3>
                <p className="text-brown-600">
                  info@petraspet.hr
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-sky-400 to-sky-500 p-4 rounded-2xl">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown-900 mb-2">Radno vrijeme</h3>
                <p className="text-brown-600">
                  PO DOGOVORU<br />
                  Ponedjeljak – Četvrtak: 08:00 – 20:00<br />
                  Petak: 08:00 – 17:00<br />
                  Subota: ZATVORENO<br />
                  Nedjelja: ZATVORENO
                </p>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.3346417971726!2d15.97798!3d45.81444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb%2C%20Croatia!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
