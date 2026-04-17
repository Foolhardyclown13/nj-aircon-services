import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | NJ Aircon Services — Alabel, Sarangani Province",
  description:
    "Learn about NJ Aircon Services — your trusted local aircon cleaning experts in Alabel, General Santos City, Malapatan, and Polomolok, Sarangani Province.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            About NJ Aircon Services
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Your trusted local aircon cleaning team in Alabel, Sarangani Province.
            We keep homes cool and aircons running efficiently.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 md:h-full min-h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/ac-cleaning-3.jpg"
              alt="NJ Aircon Services team working in Alabel Sarangani Province"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-poppins font-extrabold text-3xl text-navy mb-5">
              Who We Are
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>
                NJ Aircon Services is a home service business based in
                <strong> Alabel, Sarangani Province</strong>. We specialize in
                aircon cleaning and maintenance for homes and small businesses
                across Sarangani Province and South Cotabato.
              </p>
              <p>
                We started this business because we saw how many homeowners in
                our area were paying too much for poor service — or worse, letting
                their units go uncleaned for years until they completely broke
                down. Our goal is simple: provide honest, quality aircon cleaning
                at prices that are fair for everyone in our community.
              </p>
              <p>
                Every job we take, we treat like it&apos;s our own home. We don&apos;t
                rush, we don&apos;t cut corners, and we don&apos;t leave until the unit is
                clean and working properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: "🤝", title: "Honesty", desc: "We give you a straight answer about what your aircon needs. No upselling, no unnecessary services." },
              { icon: "⭐", title: "Quality", desc: "We don't consider a job done until your aircon is clean, reassembled properly, and cooling efficiently." },
              { icon: "📍", title: "Local", desc: "We're from this community. When you call us, you're supporting a local family business — not a franchise." },
            ].map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <span className="text-5xl block mb-4">{v.icon}</span>
                <h3 className="font-poppins font-bold text-white text-xl mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-20 bg-light-blue">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-poppins font-extrabold text-3xl text-navy mb-4">
            Where We Operate
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            We&apos;re based in Alabel and serve the following areas:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {SERVICE_AREAS.map((area) => (
              <div key={area.name} className="bg-white border border-sky-100 rounded-full px-6 py-3 shadow-sm">
                <span className="font-poppins font-semibold text-navy text-sm">📍 {area.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-poppins font-extrabold text-3xl text-navy mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-500 mb-8">
            Book a cleaning or get a free quote today.
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
