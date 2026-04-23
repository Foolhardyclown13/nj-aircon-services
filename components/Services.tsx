import Image from "next/image";
import { SERVICE_CATEGORIES } from "@/lib/constants";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SERVICE_CATEGORIES.map((service, index) => (
            <div
              key={service.name}
              className={`rounded-2xl p-7 flex flex-col gap-4 shadow-md hover:shadow-xl transition-shadow ${
                index === 2
                  ? "bg-primary text-white"
                  : "bg-light-blue text-navy"
              }`}
            >
              <span className="text-4xl">{service.icon}</span>
              <div>
                <h3
                  className={`font-poppins font-bold text-lg mb-1 ${
                    index === 2 ? "text-white" : "text-navy"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-xs ${
                    index === 2 ? "text-sky-100" : "text-gray-500"
                  }`}
                >
                  {service.duration}
                </p>
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  index === 2 ? "text-sky-50" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              {/* Tier pricing */}
              <div className={`mt-auto rounded-xl overflow-hidden border ${index === 2 ? "border-white/20" : "border-sky-200"}`}>
                {service.tiers.map((tier, i) => (
                  <div
                    key={tier.hp}
                    className={`flex items-center justify-between px-4 py-2.5 ${
                      i < service.tiers.length - 1
                        ? index === 2
                          ? "border-b border-white/20"
                          : "border-b border-sky-200"
                        : ""
                    } ${index === 2 ? "bg-white/10" : "bg-white/60"}`}
                  >
                    <span className={`text-xs font-semibold ${index === 2 ? "text-sky-100" : "text-gray-500"}`}>
                      {tier.hp}
                    </span>
                    <span className={`font-poppins font-extrabold text-lg ${index === 2 ? "text-white" : "text-primary"}`}>
                      ₱{tier.price.toLocaleString()}
                    </span>
                  </div>
                ))}
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
