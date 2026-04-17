import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aircon Cleaning Price in Sarangani Province | NJ Aircon Services",
  description:
    "How much does aircon cleaning cost in Alabel and General Santos City? See our transparent pricing for Window Type and Split Type units in Sarangani Province.",
};

export default function BlogPost3() {
  return (
    <main>
      <Navbar />

      <article className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs font-poppins font-semibold text-primary uppercase tracking-wide">Pricing</span>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4 leading-tight">
              Aircon Cleaning Price in Sarangani Province: What to Expect
            </h1>
            <p className="text-gray-400 text-sm">April 17, 2026 · 3 min read</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              One of the first questions people ask when booking an aircon cleaning is:
              &ldquo;Magkano?&rdquo; — How much does it cost? The honest answer is: it depends on
              the type of service your unit needs. Here&apos;s a clear breakdown.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-navy">Our Rates at NJ Aircon Services</h2>
            <div className="rounded-2xl overflow-hidden border border-sky-200 not-prose">
              {SERVICES.map((service, i) => (
                <div key={service.name} className={`flex items-center justify-between p-5 ${i !== SERVICES.length - 1 ? "border-b border-sky-100" : ""} ${i % 2 === 0 ? "bg-light-blue" : "bg-white"}`}>
                  <div>
                    <p className="font-poppins font-bold text-navy">{service.name}</p>
                    <p className="text-gray-400 text-sm">{service.duration} · {service.description}</p>
                  </div>
                  <span className="font-poppins font-extrabold text-2xl text-primary shrink-0 ml-4">
                    ₱{service.price.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">* Price is per unit. No hidden charges.</p>

            <h2 className="font-poppins font-bold text-2xl text-navy">What Affects the Price?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Type of service</strong> — a regular clean is sufficient for units serviced regularly; a deep clean is needed for neglected units</li>
              <li><strong>Number of units</strong> — booking multiple units in one visit is more efficient and we can discuss package rates</li>
              <li><strong>Location</strong> — we serve Alabel, General Santos City, Malapatan, and Polomolok at the same rates</li>
            </ul>

            <h2 className="font-poppins font-bold text-2xl text-navy">Why You Shouldn&apos;t Just Go for the Cheapest Option</h2>
            <p>
              Some technicians offer very low rates but cut corners — using insufficient
              cleaning agents, skipping the coil cleaning, or not reassembling the unit
              properly. This can lead to leaks, electrical problems, or a unit that breaks
              down within weeks. A proper cleaning done right is always cheaper than a
              repair.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-navy">How to Book</h2>
            <p>
              You can call or text us directly, or fill out our quote form and we&apos;ll
              get back to you. We serve Alabel, General Santos City, Malapatan, and
              Polomolok with the same transparent rates.
            </p>

            <div className="bg-light-blue rounded-2xl p-6 border border-sky-200">
              <p className="font-poppins font-bold text-navy mb-2">Book a Cleaning Today</p>
              <p className="text-gray-600 text-sm mb-4">
                Transparent pricing. No hidden charges. Serving all of Sarangani Province.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                  className="bg-primary text-white font-poppins font-semibold px-5 py-2.5 rounded-xl text-sm text-center hover:bg-sky-600 transition-colors">
                  Call {BUSINESS.phone}
                </a>
                <Link href="/get-a-quote"
                  className="bg-navy text-white font-poppins font-semibold px-5 py-2.5 rounded-xl text-sm text-center hover:bg-slate-800 transition-colors">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/blog" className="text-primary font-poppins font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
