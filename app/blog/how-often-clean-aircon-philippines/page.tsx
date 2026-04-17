import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How Often Should You Clean Your Aircon in the Philippines? | NJ Aircon Services",
  description:
    "Find out how often you should clean your aircon in the Philippines, especially in hot areas like Sarangani Province and General Santos City.",
};

export default function BlogPost1() {
  return (
    <main>
      <Navbar />

      <article className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs font-poppins font-semibold text-primary uppercase tracking-wide">Maintenance Tips</span>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4 leading-tight">
              How Often Should You Clean Your Aircon in the Philippines?
            </h1>
            <p className="text-gray-400 text-sm">April 10, 2026 · 4 min read</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              If you live in Sarangani Province, General Santos City, or anywhere in
              Mindanao, your aircon works harder than units in cooler countries. High
              temperatures, humidity, and dust mean your unit collects dirt faster —
              and a dirty aircon costs you more electricity and breaks down sooner.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-navy">The General Rule</h2>
            <p>
              For most Filipino homes, <strong>every 3 months</strong> is the recommended
              cleaning schedule. That&apos;s four times a year — roughly once every season.
              If you run your aircon more than 8 hours a day, clean it every <strong>6–8 weeks</strong>.
            </p>

            <h2 className="font-poppins font-bold text-2xl text-navy">Factors That Affect How Often You Should Clean</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>How many hours per day</strong> — the more you use it, the faster it gets dirty</li>
              <li><strong>Location</strong> — near roads, construction, or fields means more dust</li>
              <li><strong>Pets at home</strong> — pet hair clogs filters quickly</li>
              <li><strong>Number of people</strong> — more people means more dust and body oils in the air</li>
              <li><strong>Type of unit</strong> — window type units tend to collect more dust than split type</li>
            </ul>

            <h2 className="font-poppins font-bold text-2xl text-navy">Signs You&apos;ve Waited Too Long</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The aircon is running but the room doesn&apos;t get cold</li>
              <li>You notice a musty or bad smell when it&apos;s on</li>
              <li>Water is dripping or leaking from the unit</li>
              <li>Your electricity bill has gone up without explanation</li>
              <li>The unit is making more noise than usual</li>
            </ul>

            <h2 className="font-poppins font-bold text-2xl text-navy">Regular Clean vs. Deep Clean — Which Do You Need?</h2>
            <p>
              A <strong>regular clean (₱500)</strong> covers filter and coil cleaning — enough for
              units that are serviced on schedule. A <strong>deep clean (₱1,000)</strong> involves
              full disassembly and chemical washing — best if it&apos;s been 6+ months since
              the last service, or if the unit has visible mold or is leaking.
            </p>

            <div className="bg-light-blue rounded-2xl p-6 border border-sky-200">
              <p className="font-poppins font-bold text-navy mb-2">Based in Sarangani Province?</p>
              <p className="text-gray-600 text-sm mb-4">
                NJ Aircon Services covers Alabel, General Santos City, Malapatan, and
                Polomolok. Call us or send a message on Facebook to book a cleaning.
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
