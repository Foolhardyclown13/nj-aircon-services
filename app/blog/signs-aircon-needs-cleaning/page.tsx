import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "7 Signs Your Aircon Urgently Needs Cleaning | NJ Aircon Services",
  description:
    "Is your aircon not cooling properly? These 7 signs mean your unit needs a professional clean. Serving Alabel, General Santos City, and Sarangani Province.",
};

export default function BlogPost2() {
  return (
    <main>
      <Navbar />

      <article className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-xs font-poppins font-semibold text-primary uppercase tracking-wide">Troubleshooting</span>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4 leading-tight">
              7 Signs Your Aircon Urgently Needs Cleaning
            </h1>
            <p className="text-gray-400 text-sm">April 14, 2026 · 5 min read</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Most people only think about cleaning their aircon when it completely stops
              working. By then, the damage is often already done. Here are 7 warning signs
              that your unit needs professional attention — before it becomes a costly repair.
            </p>

            {[
              { num: "1", title: "It's not as cold as it used to be", body: "This is the most common sign. A dirty filter and coil block airflow and reduce cooling efficiency. If you've turned the temperature all the way down but the room still feels warm, a cleaning will almost always fix it." },
              { num: "2", title: "You notice a bad or musty smell", body: "Mold and bacteria love the dark, damp inside of an aircon unit. If you smell something musty or stale when you turn it on, that's mold — and it's being blown directly into your room. Get it cleaned immediately." },
              { num: "3", title: "Water is dripping or leaking", body: "A blocked drain line causes water to back up and drip out of the unit. This is a direct result of built-up dirt and debris inside. Left unattended, it can damage your walls, ceiling, and the unit itself." },
              { num: "4", title: "Your electricity bill has gone up", body: "A dirty aircon has to work harder to cool your room, which means it consumes more electricity. If your bill has increased without any obvious reason, your aircon efficiency may be the culprit." },
              { num: "5", title: "It's making unusual noises", body: "Rattling, buzzing, or grinding sounds often mean there's debris inside the unit or a component is struggling due to dirt buildup. Don't ignore these — they usually get worse over time." },
              { num: "6", title: "It takes a long time to cool the room", body: "If your aircon used to cool your room in 10 minutes but now takes 30, the coils are likely coated with dust and can no longer transfer heat efficiently. A clean will restore its performance." },
              { num: "7", title: "You can see visible dust on the vents", body: "If you can see dust and grime on the intake or output vents, imagine what the inside looks like. Visible dirt on the outside is a reliable sign the inside needs attention." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <span className="font-poppins font-extrabold text-4xl text-primary/20 leading-none shrink-0 w-10">
                  {item.num}
                </span>
                <div>
                  <h2 className="font-poppins font-bold text-xl text-navy mb-2">{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}

            <div className="bg-light-blue rounded-2xl p-6 border border-sky-200">
              <p className="font-poppins font-bold text-navy mb-2">Recognize any of these signs?</p>
              <p className="text-gray-600 text-sm mb-4">
                NJ Aircon Services provides professional cleaning in Alabel, General Santos
                City, Malapatan, and Polomolok. Book a cleaning today.
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
