import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Does Your Aircon Need a Gas Top-Up? Here's the Truth | NJ Aircon Services",
  description:
    "Wondering if your aircon needs a gas top-up in the Philippines? Here's when you actually need it, when you don't, and how much it costs in Sarangani Province.",
  keywords: [
    "aircon gas top up Philippines",
    "aircon freon recharge Philippines",
    "aircon not cold after cleaning",
    "aircon refrigerant Sarangani",
    "aircon gas top up price Philippines",
  ],
  alternates: {
    canonical: "https://njairconservices.com/blog/does-your-aircon-need-gas-top-up-philippines",
  },
  openGraph: {
    title: "Does Your Aircon Need a Gas Top-Up? Here's the Truth | NJ Aircon Services",
    description:
      "Wondering if your aircon needs a gas top-up in the Philippines? Here's when you actually need it, when you don't, and how much it costs in Sarangani Province.",
    url: "https://njairconservices.com/blog/does-your-aircon-need-gas-top-up-philippines",
    type: "article",
    siteName: "NJ Aircon Services",
    images: [
      {
        url: "https://njairconservices.com/images/blog-gas-top-up.jpg",
        width: 1200,
        height: 630,
        alt: "NJ Aircon Services technician checking refrigerant levels on Koppel inverter outdoor unit in Sarangani Province",
      },
    ],
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Does Your Aircon Need a Gas Top-Up? Here's the Truth",
  description:
    "When you actually need a refrigerant top-up, when you don't, and how much it costs in Sarangani Province and General Santos City.",
  image: "https://njairconservices.com/images/blog-gas-top-up.jpg",
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
  author: { "@type": "Organization", name: "NJ Aircon Services" },
  publisher: {
    "@type": "Organization",
    name: "NJ Aircon Services",
    logo: { "@type": "ImageObject", url: "https://njairconservices.com/images/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://njairconservices.com/blog/does-your-aircon-need-gas-top-up-philippines",
  },
  keywords:
    "aircon gas top up Philippines, aircon freon recharge Philippines, aircon not cold after cleaning, aircon refrigerant Sarangani",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if my aircon needs gas or just cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Try a regular clean first. If the unit is still not cooling properly after a thorough professional cleaning, then a refrigerant pressure check is the next step. Most cooling problems in the Philippines are caused by dirty units, not low gas.",
      },
    },
    {
      "@type": "Question",
      name: "Can I top up my aircon gas myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — handling refrigerant requires specialized equipment (manifold gauges, vacuum pump) and knowledge of the correct pressure specifications for your unit. Improper handling can damage the compressor, cause injury, or result in illegal venting of refrigerants into the atmosphere. Always use a qualified technician.",
      },
    },
    {
      "@type": "Question",
      name: "How often does aircon gas need to be topped up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A properly sealed system should never need topping up. If you need refrigerant more than once every few years, there is a leak that needs to be found and fixed — not just repeatedly topped up.",
      },
    },
    {
      "@type": "Question",
      name: "What type of gas does my aircon use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check the sticker on your outdoor unit — it will list the refrigerant type (R-22, R-410A, or R-32). Never mix refrigerant types. Using the wrong gas can permanently damage your compressor.",
      },
    },
    {
      "@type": "Question",
      name: "Is it expensive to fix a refrigerant leak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on where the leak is. A loose connection joint can be tightened and resealed cheaply. A leak in the evaporator coil or copper piping is more involved. Your technician should give you a clear quote after identifying the leak location.",
      },
    },
  ],
};

export default function BlogPostGasTopUp() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <article className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-poppins font-semibold text-primary uppercase tracking-wide">
              Maintenance Tips
            </span>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy mt-3 mb-4 leading-tight">
              Does Your Aircon Need a Gas Top-Up? Here&apos;s the Truth
            </h1>
            <p className="text-gray-400 text-sm">April 24, 2026 · 7 min read</p>
          </div>

          {/* Hero image */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-10">
            <Image
              src="/images/blog-gas-top-up.jpg"
              alt="NJ Aircon Services technician checking refrigerant levels on Koppel inverter outdoor unit in Sarangani Province"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-gray-700 space-y-8">

            {/* Intro */}
            <p className="text-lg leading-relaxed">
              If your aircon isn&apos;t blowing cold air the way it used to, chances are
              someone has already told you: <em>&ldquo;Kulang na yung gas, i-top up mo na.&rdquo;</em>
            </p>
            <p className="leading-relaxed">
              Sometimes they&apos;re right. But more often than not — especially in the
              Philippines where aircon cleaning is frequently skipped — the real
              problem is a dirty unit, not low refrigerant. Understanding the
              difference can save you thousands of pesos and prevent you from paying
              for a service you don&apos;t actually need.
            </p>
            <p className="leading-relaxed">
              Here&apos;s everything you need to know about aircon gas top-ups in
              Sarangani Province and General Santos City.
            </p>

            {/* What is aircon gas */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                What Is Aircon &ldquo;Gas&rdquo; and Why Does It Matter?
              </h2>
              <p className="leading-relaxed mb-4">
                The &ldquo;gas&rdquo; in your aircon isn&apos;t actually gas in the way we normally
                think of it. It&apos;s refrigerant — a chemical substance (most commonly
                R-22 or R-410A in Philippine residential units) that cycles between
                liquid and gas states inside your aircon to absorb heat from your
                room and release it outside.
              </p>
              <p className="leading-relaxed mb-4">
                Without the correct amount of refrigerant, your aircon physically
                cannot produce cold air. The compressor runs, the fan blows, but the
                cooling effect is minimal or completely absent.
              </p>
              <div className="bg-light-blue border-l-4 border-primary rounded-r-xl px-5 py-4">
                <p className="font-semibold text-navy leading-relaxed">
                  The most important thing to understand: refrigerant does not get
                  used up during normal operation. Your aircon does not &ldquo;consume&rdquo;
                  refrigerant the way a car consumes fuel. If your refrigerant level
                  is low, it means one thing — there is a leak somewhere in the system.
                </p>
              </div>
            </div>

            {/* Signs of low refrigerant */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Signs Your Aircon Might Have Low Refrigerant
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "The unit cools for a short time, then stops.",
                    desc: "If your aircon cools well for the first 10–15 minutes and then gradually stops, this can indicate the refrigerant is running low as the system cycles.",
                  },
                  {
                    title: "Ice forms on the copper pipes or indoor unit.",
                    desc: "When refrigerant pressure drops too low, the evaporator coil gets too cold and moisture in the air freezes on it. You may notice ice on the copper pipes running between your indoor and outdoor unit.",
                  },
                  {
                    title: "Outdoor unit is running but there's very little cooling.",
                    desc: "If the compressor is clearly running — you can hear it and feel the heat from the outdoor unit — but the indoor unit is barely cooling, refrigerant level is a likely cause.",
                  },
                  {
                    title: "Still not cold after a professional cleaning.",
                    desc: "If a thorough cleaning didn't restore your unit's cooling performance, the next step is a refrigerant check. Low refrigerant is one of the few cooling problems that cleaning cannot fix.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 bg-light-blue rounded-xl p-4">
                    <span className="text-primary font-bold text-lg mt-0.5 shrink-0">✓</span>
                    <div>
                      <p className="font-poppins font-bold text-navy text-sm mb-1">{item.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Signs that look like low refrigerant but aren't */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Signs That Look Like Low Refrigerant — But Aren&apos;t
              </h2>
              <p className="leading-relaxed mb-4">
                Many cooling problems are misdiagnosed as needing a gas top-up when
                the real cause is something else entirely.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "A dirty filter or coil.",
                    desc: "A heavily clogged filter or dirty evaporator coil restricts airflow and reduces cooling dramatically — sometimes to the point where the unit barely cools at all. This is the number one cause of poor cooling performance in the Philippines. Before spending money on refrigerant, always try cleaning first.",
                  },
                  {
                    title: "A blocked outdoor condenser unit.",
                    desc: "If the outdoor unit is obstructed — by a wall too close, overgrown plants, or stored items — it cannot release heat effectively. The unit runs but the room doesn't cool. This isn't a gas problem.",
                  },
                  {
                    title: "An undersized unit for the room.",
                    desc: "A 0.75HP aircon cannot effectively cool a 30 sqm room no matter how much refrigerant it has. If your unit has always struggled to cool the room, refrigerant isn't the issue.",
                  },
                  {
                    title: "A failing compressor.",
                    desc: "If the compressor is worn out or failing, topping up the refrigerant won't help and may actually accelerate the damage.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 border border-sky-100 rounded-xl p-4">
                    <span className="text-gray-400 font-bold text-lg mt-0.5 shrink-0">✗</span>
                    <div>
                      <p className="font-poppins font-bold text-navy text-sm mb-1">{item.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right process */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                The Right Process: Check Before You Top Up
              </h2>
              <p className="leading-relaxed mb-4">
                A responsible aircon technician will never top up your refrigerant
                without doing two things first.
              </p>
              <div className="flex flex-col gap-4">
                <div className="bg-light-blue rounded-xl p-5">
                  <p className="font-poppins font-bold text-navy mb-2">Step 1 — Diagnose the actual cause.</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A technician should first clean the unit or verify it has been
                    recently cleaned, check for obvious blockages, and confirm that
                    cooling performance is still poor after ruling out dirt-related causes.
                  </p>
                </div>
                <div className="bg-light-blue rounded-xl p-5">
                  <p className="font-poppins font-bold text-navy mb-2">Step 2 — Pressure test.</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The technician connects a manifold gauge set to the service port
                    of the outdoor unit — exactly what you can see in the photo — and
                    reads the refrigerant pressure. This tells them definitively
                    whether refrigerant is low, and by how much.
                  </p>
                </div>
              </div>
              <p className="leading-relaxed mt-4">
                Only after these two steps should a refrigerant top-up be recommended.
                In the photo above, this is exactly what our technician is doing — a
                proper pressure check on a Koppel inverter unit before any decision
                is made about adding refrigerant.
              </p>
            </div>

            {/* Leak */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                If Refrigerant Is Low, You Also Have a Leak
              </h2>
              <p className="leading-relaxed mb-4">
                This is the part many technicians in the Philippines skip — and it&apos;s
                why some customers find themselves needing a gas top-up every few months.
              </p>
              <p className="leading-relaxed mb-4">
                If your refrigerant level is low, there is a leak somewhere — in the
                copper pipes, at a connection joint, or in the indoor or outdoor unit
                itself. Simply adding refrigerant without finding and fixing the leak
                means the new refrigerant will slowly escape too, and within 6–12
                months you&apos;ll be back in the same situation.
              </p>
              <p className="font-poppins font-semibold text-navy mb-3">A proper refrigerant service includes:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                <li>Pressure testing to confirm the low level</li>
                <li>Leak detection (by feel, sound, or UV dye test)</li>
                <li>Sealing the leak if it&apos;s at a connection point</li>
                <li>Adding the correct type and amount of refrigerant</li>
                <li>Retesting pressure after recharge to confirm</li>
              </ul>
              <p className="leading-relaxed mt-4 text-sm text-gray-600">
                If a technician just connects a tank and tops it up without any leak
                check, you&apos;re paying for a temporary fix.
              </p>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-6">
                How Much Does a Gas Top-Up Cost in the Philippines?
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-sky-100 shadow-sm mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3 font-poppins font-semibold">Refrigerant Type</th>
                      <th className="text-left px-4 py-3 font-poppins font-semibold">Common In</th>
                      <th className="text-center px-4 py-3 font-poppins font-semibold">Price / kg (approx.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "R-22 (Freon)", common: "Older units pre-2015", price: "₱600–₱900" },
                      { type: "R-410A", common: "Most modern split-type units", price: "₱1,200–₱1,800" },
                      { type: "R-32", common: "Newer inverter units", price: "₱1,000–₱1,500" },
                    ].map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "bg-light-blue" : "bg-white"}>
                        <td className="px-4 py-3 font-semibold text-navy">{row.type}</td>
                        <td className="px-4 py-3 text-gray-600">{row.common}</td>
                        <td className="px-4 py-3 text-center font-poppins font-bold text-primary">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A typical residential unit needs 0.5–1kg to recharge, depending on
                how low the level is. Expect to pay ₱800–₱2,000 for the refrigerant
                alone, plus the technician&apos;s service fee. Be cautious of very cheap
                gas top-up offers (₱300–₱400 flat rate) — at those prices, the
                technician is likely adding low-quality or recycled refrigerant
                without proper pressure testing.
              </p>
            </div>

            {/* PM section */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                How Our Preventive Maintenance Add-On Covers This
              </h2>
              <p className="leading-relaxed mb-4">
                At NJ Aircon Services, our <strong>Preventive Maintenance</strong> add-on
                service includes a refrigerant pressure check as part of the full
                inspection. This means:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
                <li>We check your refrigerant level with a proper manifold gauge</li>
                <li>If the pressure is correct, you don&apos;t need a top-up — and we&apos;ll tell you that honestly</li>
                <li>If the pressure is low, we identify the cause before recommending a recharge</li>
                <li>You get a complete picture of your unit&apos;s condition, not just a quick fix</li>
              </ul>
              <p className="leading-relaxed text-sm text-gray-600">
                This is the responsible way to handle refrigerant — not every unit
                that&apos;s &ldquo;not cold&rdquo; needs gas, and we&apos;ll make sure you only pay for
                what your unit actually needs.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-6">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    q: "How do I know if my aircon needs gas or just cleaning?",
                    a: "Try a regular clean first. If the unit is still not cooling properly after a thorough professional cleaning, then a refrigerant pressure check is the next step. Most cooling problems in the Philippines are caused by dirty units, not low gas.",
                  },
                  {
                    q: "Can I top up my aircon gas myself?",
                    a: "No — handling refrigerant requires specialized equipment (manifold gauges, vacuum pump) and knowledge of the correct pressure specifications for your unit. Improper handling can damage the compressor, cause injury, or result in illegal venting of refrigerants into the atmosphere. Always use a qualified technician.",
                  },
                  {
                    q: "How often does aircon gas need to be topped up?",
                    a: "A properly sealed system should never need topping up. If you need refrigerant more than once every few years, there is a leak that needs to be found and fixed — not just repeatedly topped up.",
                  },
                  {
                    q: "What type of gas does my aircon use?",
                    a: "Check the sticker on your outdoor unit — it will list the refrigerant type (R-22, R-410A, or R-32). Never mix refrigerant types. Using the wrong gas can permanently damage your compressor.",
                  },
                  {
                    q: "Is it expensive to fix a refrigerant leak?",
                    a: "It depends on where the leak is. A loose connection joint can be tightened and resealed cheaply. A leak in the evaporator coil or copper piping is more involved. Your technician should give you a clear quote after identifying the leak location.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="border border-sky-100 rounded-xl overflow-hidden">
                    <div className="bg-light-blue px-5 py-4">
                      <p className="font-poppins font-bold text-navy text-sm">{faq.q}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-navy rounded-2xl p-8 text-white text-center">
              <h3 className="font-poppins font-bold text-xl mb-3">
                Book a Preventive Maintenance Check in Alabel or General Santos City
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                If your aircon isn&apos;t cooling the way it should — and you want to know
                if it&apos;s a refrigerant issue, a cleaning issue, or something else — we
                serve Alabel, General Santos City, Malapatan, and Polomolok. Same-day
                service available when slots are open.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                  className="bg-primary hover:bg-sky-600 text-white font-poppins font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Call {BUSINESS.phone}
                </a>
                <Link
                  href="/book"
                  className="bg-white text-navy hover:bg-light-blue font-poppins font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Book Now
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
