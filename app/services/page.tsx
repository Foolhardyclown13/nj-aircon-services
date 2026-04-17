import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aircon Cleaning Services | Window Type & Split Type | NJ Aircon Services",
  description:
    "Professional aircon cleaning for Window Type and Split Type units in Alabel, General Santos City, Malapatan, and Polomolok. Transparent pricing, no hidden charges.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            Our Aircon Cleaning Services
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Professional aircon cleaning and maintenance for homes and businesses
            in Alabel, General Santos City, Malapatan, and Polomolok.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map((service) => (
              <div key={service.name} className="bg-light-blue rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <Image
                    src="/images/ac-cleaning-1.jpg"
                    alt={`${service.name} aircon cleaning service in Alabel and General Santos City`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{service.icon}</span>
                    <h2 className="font-poppins font-extrabold text-2xl text-navy">
                      {service.name}
                    </h2>
                  </div>
                  <p className="text-gray-500 text-sm mb-1">{service.duration}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="font-poppins font-extrabold text-4xl text-primary">
                        ₱{service.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">/ unit</span>
                    </div>
                    <Link
                      href="/get-a-quote"
                      className="bg-primary hover:bg-sky-600 text-white font-poppins font-semibold px-5 py-2.5 rounded-xl transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white text-center mb-12">
            What&apos;s Included in Every Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🧽", title: "Filter Cleaning", desc: "Dust and debris removed from all filters" },
              { icon: "❄️", title: "Coil Cleaning", desc: "Evaporator and condenser coils cleaned" },
              { icon: "💧", title: "Drain Pan Check", desc: "Drain pan and lines cleared to prevent leaks" },
              { icon: "🌡️", title: "Performance Check", desc: "Cooling efficiency tested after every service" },
              { icon: "🔩", title: "Parts Inspection", desc: "All components checked for wear and damage" },
              { icon: "✅", title: "Satisfaction Check", desc: "We confirm you're happy before we leave" },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-poppins font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light-blue text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-poppins font-extrabold text-3xl text-navy mb-4">
            Ready to Book a Cleaning?
          </h2>
          <p className="text-gray-500 mb-8">
            Call us directly or fill out our quote form — we&apos;ll get back to you right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
              className="bg-primary hover:bg-sky-600 text-white font-poppins font-bold px-8 py-4 rounded-2xl transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/get-a-quote"
              className="bg-navy hover:bg-slate-800 text-white font-poppins font-bold px-8 py-4 rounded-2xl transition-colors"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
