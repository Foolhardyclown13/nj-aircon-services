import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Regular Clean vs. Deep Clean vs. Preventive Maintenance | NJ Aircon Services",
  description:
    "Not sure whether your aircon needs a regular clean, deep clean, or preventive maintenance? Here's exactly what each service covers and how to choose the right one.",
  keywords: [
    "aircon regular clean vs deep clean Philippines",
    "aircon chemical wash vs regular cleaning",
    "aircon preventive maintenance Philippines",
    "aircon cleaning services Sarangani",
  ],
};

const COMPARISON = [
  { label: "Filter cleaning",       regular: true,  deep: true,  pm: true  },
  { label: "Coil rinse",            regular: "Rinse", deep: "Chemical wash", pm: "Rinse" },
  { label: "Full disassembly",      regular: false, deep: true,  pm: false },
  { label: "Mold treatment",        regular: "Basic", deep: "Full chemical", pm: "Basic" },
  { label: "Drain line",            regular: "Check", deep: "Full flush", pm: "Check" },
  { label: "Electrical inspection", regular: false, deep: false, pm: true  },
  { label: "Refrigerant check",     regular: false, deep: false, pm: true  },
  { label: "Performance test",      regular: false, deep: false, pm: true  },
  { label: "Time per unit",         regular: "45 min", deep: "2 hrs", pm: "1 hr" },
  { label: "Price per unit",        regular: "₱500", deep: "₱1,000", pm: "₱600" },
  { label: "Frequency",             regular: "Every 3–6 months", deep: "Once a year", pm: "Once a year" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-green-500 font-bold">✓</span>;
  if (value === false) return <span className="text-gray-300">—</span>;
  return <span className="text-navy text-sm">{value}</span>;
}

export default function BlogPostRegularVsDeep() {
  return (
    <main>
      <Navbar />

      <article className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-poppins font-semibold text-primary uppercase tracking-wide">
              Maintenance Tips
            </span>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4 leading-tight">
              Regular Clean vs. Deep Clean vs. Preventive Maintenance: Which One Does Your Aircon Need?
            </h1>
            <p className="text-gray-400 text-sm">April 18, 2026 · 6 min read</p>
          </div>

          {/* Hero image */}
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg mb-10">
            <Image
              src="/images/blog-regular-vs-deep.jpg"
              alt="NJ Aircon Services technicians performing aircon service in Alabel Sarangani Province"
              fill
              className="object-cover object-right"
              priority
            />
          </div>

          <div className="text-gray-700 space-y-8">
            <p className="text-lg leading-relaxed">
              When you call an aircon technician in the Philippines, you&apos;ll hear three
              terms come up regularly: regular clean, deep clean (sometimes called a
              chemical wash), and preventive maintenance. They&apos;re not the same thing,
              they don&apos;t cost the same, and they&apos;re not interchangeable.
            </p>
            <p className="leading-relaxed">
              Choosing the right service for your unit&apos;s actual condition saves you money
              and keeps your aircon running at its best. Here&apos;s a clear breakdown.
            </p>

            {/* Regular Clean */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Regular Clean — Your Routine Maintenance Service
              </h2>
              <div className="bg-light-blue rounded-xl p-4 flex flex-wrap gap-6 mb-4 text-sm">
                <span><strong className="text-navy">Covers:</strong> Filter, coil rinse, fan blades, drain check</span>
                <span><strong className="text-navy">Time:</strong> ~45 mins/unit</span>
                <span><strong className="text-primary font-bold text-base">₱500</strong> <span className="text-gray-400">/ unit</span></span>
              </div>
              <div className="space-y-4 leading-relaxed">
                <p>
                  A regular clean is the standard maintenance service every aircon needs on
                  a consistent schedule. Think of it the same way you think about changing
                  your car&apos;s oil — it&apos;s not glamorous, but it&apos;s what keeps everything
                  running properly between more intensive services.
                </p>
                <p>
                  <strong>Who it&apos;s for:</strong> Any aircon being serviced on schedule (every 3–6
                  months). If your unit is cooling well and due for its routine service, this
                  is all you need.
                </p>
                <p>
                  <strong>What it doesn&apos;t cover:</strong> Heavy mold, calcified coil deposits,
                  chemical treatment, or electrical and refrigerant inspection.
                </p>
              </div>
            </div>

            {/* Deep Clean */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Deep Clean (Chemical Wash) — The Intensive Reset
              </h2>
              <div className="bg-light-blue rounded-xl p-4 flex flex-wrap gap-6 mb-4 text-sm">
                <span><strong className="text-navy">Covers:</strong> Full disassembly, chemical wash of all internal parts</span>
                <span><strong className="text-navy">Time:</strong> ~2 hrs/unit</span>
                <span><strong className="text-primary font-bold text-base">₱1,000</strong> <span className="text-gray-400">/ unit</span></span>
              </div>
              <div className="space-y-4 leading-relaxed">
                <p>
                  A deep clean is the comprehensive service your aircon needs when it&apos;s been
                  neglected, heavily soiled, or dealing with problems a regular clean can&apos;t
                  fully resolve. The technician fully disassembles the indoor unit, applies a
                  chemical solution to break down mold, bacteria, oil deposits, and scale,
                  then flushes and reassembles everything.
                </p>
                <p><strong>Who it&apos;s for:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Aircons not serviced in over a year</li>
                  <li>Units with a persistent musty smell</li>
                  <li>Visible mold on internal parts</li>
                  <li>Units still underperforming after a recent regular clean</li>
                  <li>First-time service on a second-hand or newly acquired unit</li>
                </ul>
              </div>
            </div>

            {/* Preventive Maintenance */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Preventive Maintenance — The Full System Check
              </h2>
              <div className="bg-light-blue rounded-xl p-4 flex flex-wrap gap-6 mb-4 text-sm">
                <span><strong className="text-navy">Covers:</strong> Cleaning + electrical, refrigerant, and performance inspection</span>
                <span><strong className="text-navy">Time:</strong> ~1 hr/unit</span>
                <span><strong className="text-primary font-bold text-base">₱600</strong> <span className="text-gray-400">/ unit</span></span>
              </div>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Preventive maintenance is what you choose when you want more than just a
                  clean — you want to know your unit is in good mechanical and electrical
                  condition, and that nothing is quietly developing into a major problem.
                </p>
                <p><strong>Who it&apos;s for:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Older units (5 years or more)</li>
                  <li>Commercial units in offices, restaurants, and shops</li>
                  <li>Units underperforming despite recent cleaning</li>
                  <li>Before the dry season when demand peaks</li>
                </ul>
              </div>
            </div>

            {/* Comparison table */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-6">
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-sky-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3 font-poppins font-semibold"></th>
                      <th className="text-center px-4 py-3 font-poppins font-semibold">Regular Clean</th>
                      <th className="text-center px-4 py-3 font-poppins font-semibold bg-primary">Deep Clean</th>
                      <th className="text-center px-4 py-3 font-poppins font-semibold">Prev. Maintenance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? "bg-light-blue" : "bg-white"}>
                        <td className="px-4 py-3 font-semibold text-navy">{row.label}</td>
                        <td className="px-4 py-3 text-center"><Cell value={row.regular} /></td>
                        <td className="px-4 py-3 text-center bg-primary/5"><Cell value={row.deep} /></td>
                        <td className="px-4 py-3 text-center"><Cell value={row.pm} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Which do you need */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Which Service Do You Need Right Now?
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { q: "When was your aircon last professionally cleaned?", a: "Less than 6 months → Regular Clean | 6–12 months → Regular or Deep | Over 1 year → Deep Clean" },
                  { q: "Does your aircon have a musty smell?", a: "Yes → Deep Clean" },
                  { q: "Is it underperforming despite a recent cleaning?", a: "Yes → Preventive Maintenance" },
                  { q: "Is your aircon 5 years old or more?", a: "Yes → Preventive Maintenance (or Deep Clean + PM together)" },
                  { q: "Is it a commercial unit running 10+ hours/day?", a: "Yes → PM every 3 months, Deep Clean every 6 months" },
                ].map((item) => (
                  <div key={item.q} className="bg-light-blue rounded-xl p-4 border border-sky-100">
                    <p className="font-poppins font-semibold text-navy text-sm mb-1">{item.q}</p>
                    <p className="text-gray-500 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-navy rounded-2xl p-8 text-white text-center">
              <h3 className="font-poppins font-bold text-xl mb-3">
                Book the Right Service in Alabel or General Santos City
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Not sure which one you need? Just call or message us — we&apos;ll
                recommend the right service for your unit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                  className="bg-primary hover:bg-sky-600 text-white font-poppins font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Call {BUSINESS.phone}
                </a>
                <Link
                  href="/get-a-quote"
                  className="bg-white text-navy hover:bg-light-blue font-poppins font-semibold px-6 py-3 rounded-xl transition-colors"
                >
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
