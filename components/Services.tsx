import Image from "next/image";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            Aircon Cleaning Services in Sarangani Province
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Transparent, affordable rates for every cleaning need — no hidden
            charges, ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.name}
              className={`rounded-2xl p-8 flex flex-col gap-4 shadow-md hover:shadow-xl transition-shadow ${
                index === 1
                  ? "bg-primary text-white scale-105"
                  : "bg-light-blue text-navy"
              }`}
            >
              <div>
                <h3
                  className={`font-poppins font-bold text-xl mb-1 ${
                    index === 1 ? "text-white" : "text-navy"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-sm ${
                    index === 1 ? "text-sky-100" : "text-gray-500"
                  }`}
                >
                  {service.duration}
                </p>
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  index === 1 ? "text-sky-50" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
              <div className="mt-auto">
                <span
                  className={`font-poppins font-extrabold text-4xl ${
                    index === 1 ? "text-white" : "text-primary"
                  }`}
                >
                  ₱{service.price.toLocaleString()}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    index === 1 ? "text-sky-100" : "text-gray-400"
                  }`}
                >
                  / unit
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "/images/ac-cleaning-1.jpg", alt: "Aircon cleaning service in Alabel Sarangani Province" },
            { src: "/images/ac-cleaning-2.jpg", alt: "Deep clean aircon service in General Santos City" },
            { src: "/images/ac-cleaning-3.jpg", alt: "Professional aircon maintenance in Malapatan" },
            { src: "/images/ac-cleaning-4.jpg", alt: "Aircon preventive maintenance in Polomolok" },
          ].map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
