import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Window Type vs Split Type Aircon Cleaning in the Philippines | NJ Aircon Services",
  description:
    "What's the difference between Window Type and Split Type aircon cleaning? Learn what each service covers, when you need a deep clean add-on, and how much it costs in Sarangani Province.",
  keywords: [
    "window type aircon cleaning Philippines",
    "split type aircon cleaning Philippines",
    "aircon cleaning services Sarangani",
    "aircon deep clean add-on General Santos City",
    "aircon cleaning price Alabel",
  ],
  alternates: {
    canonical: "https://njairconservices.com/blog/regular-clean-vs-deep-clean-vs-preventive-maintenance",
  },
  openGraph: {
    title: "Window Type vs Split Type Aircon Cleaning | NJ Aircon Services",
    description:
      "What's the difference between Window Type and Split Type aircon cleaning? Learn what each service covers and when you need a deep clean add-on in Sarangani Province.",
    url: "https://njairconservices.com/blog/regular-clean-vs-deep-clean-vs-preventive-maintenance",
    type: "article",
    siteName: "NJ Aircon Services",
    images: [
      {
        url: "https://njairconservices.com/images/blog-regular-vs-deep.jpg",
        width: 1200,
        height: 630,
        alt: "NJ Aircon Services technicians performing aircon service in Alabel Sarangani Province",
      },
    ],
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Window Type vs Split Type Aircon Cleaning in the Philippines: What's the Difference?",
  "description": "A clear breakdown of Window Type and Split Type aircon cleaning services in Sarangani Province — what each covers, pricing, and when to add a deep clean or preventive maintenance.",
  "image": "https://njairconservices.com/images/blog-regular-vs-deep.jpg",
  "datePublished": "2026-04-19",
  "dateModified": "2026-04-19",
  "author": { "@type": "Organization", "name": "NJ Aircon Services" },
  "publisher": {
    "@type": "Organization",
    "name": "NJ Aircon Services",
    "logo": { "@type": "ImageObject", "url": "https://njairconservices.com/images/logo.png" },
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://njairconservices.com/blog/regular-clean-vs-deep-clean-vs-preventive-maintenance",
  },
  "keywords": "window type aircon cleaning Philippines, split type aircon cleaning Philippines, aircon cleaning Sarangani, aircon cleaning General Santos City",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between Window Type and Split Type aircon cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Window Type aircon cleaning costs ₱500 per unit and covers filter cleaning, coil rinse, fan blade cleaning, and drain line check. Split Type cleaning costs ₱1,000 per unit and involves more components — indoor and outdoor unit cleaning, blower wheel cleaning, and full reassembly — due to the more complex design of split type units.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does aircon cleaning cost in General Santos City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NJ Aircon Services charges ₱500 per unit for Window Type aircon cleaning and ₱1,000 per unit for Split Type cleaning in General Santos City and Sarangani Province. Deep clean and preventive maintenance are available as add-ons for units that need extra attention.",
      },
    },
    {
      "@type": "Question",
      "name": "When do I need a deep clean add-on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You need a deep clean add-on when your aircon has not been cleaned in over a year, has a persistent musty or bad smell, has visible mold on internal parts, or is still not cooling properly after a standard cleaning.",
      },
    },
    {
      "@type": "Question",
      "name": "What is preventive maintenance and when do I need it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Preventive maintenance is an add-on service that includes a full inspection of electrical connections, refrigerant level, thermostat calibration, and performance testing. It is recommended for units 5 years or older, commercial units with heavy usage, or any unit showing signs of reduced performance.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I get a deep clean and preventive maintenance on the same visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both add-ons can be done in the same visit on top of your standard Window Type or Split Type cleaning. This is the most thorough option for older or heavily used units. Contact NJ Aircon Services at 0938-503-2512 to arrange this in Alabel or General Santos City.",
      },
    },
  ],
};

export default function BlogPostRegularVsDeep() {
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
              Window Type vs Split Type Aircon Cleaning: What&apos;s the Difference?
            </h1>
            <p className="text-gray-400 text-sm">April 19, 2026 · 6 min read</p>
          </div>

          {/* Hero image */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-10">
            <Image
              src="/images/blog-regular-vs-deep.jpg"
              alt="NJ Aircon Services technicians performing aircon service in Alabel Sarangani Province"
              fill
              className="object-cover"
              style={{ objectPosition: "72% 15%" }}
              priority
            />
          </div>

          <div className="text-gray-700 space-y-8">

            {/* Intro */}
            <p className="text-lg leading-relaxed">
              When you book an aircon cleaning in the Philippines, the first question
              your technician will ask is: Window Type or Split Type? These aren&apos;t
              just labels — they&apos;re different units with different designs, and they
              require different cleaning procedures.
            </p>
            <p className="leading-relaxed">
              If you&apos;re in Sarangani Province or General Santos City, here&apos;s a clear
              breakdown of what each service covers, how much it costs, and when you
              might need a deep clean or preventive maintenance added on top.
            </p>

            {/* Window Type */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Window Type Aircon Cleaning — ₱500 per unit
              </h2>
              <div className="bg-light-blue rounded-xl p-4 flex flex-wrap gap-6 mb-4 text-sm">
                <span><strong className="text-navy">Unit type:</strong> Single-piece window-mounted units</span>
                <span><strong className="text-navy">Time:</strong> ~45 mins/unit</span>
                <span><strong className="text-primary font-bold text-base">₱500</strong> <span className="text-gray-400">/ unit</span></span>
              </div>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Window type aircons are the older, single-piece units installed
                  directly into a wall opening or window frame. Because everything is
                  in one box — compressor, evaporator, and condenser — they&apos;re simpler
                  to access and clean.
                </p>
                <p><strong>What&apos;s included:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Air filter removal and cleaning</li>
                  <li>Evaporator coil rinse</li>
                  <li>Fan blade cleaning</li>
                  <li>Drain pan and drain line check</li>
                  <li>Front panel wipe-down</li>
                  <li>Basic operational check after cleaning</li>
                </ul>
                <p>
                  You can book a window type cleaning starting at ₱500 —{" "}
                  <Link href="/get-a-quote" className="text-primary hover:underline font-semibold">
                    get a quote here
                  </Link>{" "}
                  or call us at{" "}
                  <a href="tel:+639385032512" className="text-primary hover:underline font-semibold">
                    0938-503-2512
                  </a>.
                </p>
              </div>
            </div>

            {/* Split Type */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Split Type Aircon Cleaning — ₱1,000 per unit
              </h2>
              <div className="bg-light-blue rounded-xl p-4 flex flex-wrap gap-6 mb-4 text-sm">
                <span><strong className="text-navy">Unit type:</strong> Two-piece indoor/outdoor units</span>
                <span><strong className="text-navy">Time:</strong> ~2 hrs/unit</span>
                <span><strong className="text-primary font-bold text-base">₱1,000</strong> <span className="text-gray-400">/ unit</span></span>
              </div>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Split type aircons are the modern wall-mounted units with a
                  separate indoor head unit and outdoor compressor. They&apos;re more
                  common in newer homes and offices, and they take longer to clean
                  properly because the indoor unit needs to be fully opened and the
                  blower wheel cleaned.
                </p>
                <p><strong>What&apos;s included:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Air filter removal and cleaning</li>
                  <li>Indoor unit cover removal</li>
                  <li>Evaporator coil wash</li>
                  <li>Blower wheel (fan) cleaning</li>
                  <li>Drain pan and drain line clearing</li>
                  <li>Outdoor unit inspection and rinse</li>
                  <li>Full reassembly and operational test</li>
                </ul>
              </div>
            </div>

            {/* Why split type costs more */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Why Does Split Type Cost More?
              </h2>
              <p className="leading-relaxed">
                The price difference comes down to time and complexity. A window type
                unit takes about 45 minutes because it&apos;s one accessible piece. A split
                type takes about 2 hours because the indoor unit has to be carefully
                opened, the blower wheel — which collects the most mold and dust — has
                to be removed and cleaned separately, and then everything has to be
                properly reassembled.
              </p>
              <p className="leading-relaxed mt-4">
                The extra cost reflects the extra work — not a markup. A split type
                unit that&apos;s been properly cleaned will outperform one that was rushed
                through in 30 minutes.
              </p>
            </div>

            {/* Comparison */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-6">
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-sky-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left px-4 py-3 font-poppins font-semibold"></th>
                      <th className="text-center px-4 py-3 font-poppins font-semibold">Window Type</th>
                      <th className="text-center px-4 py-3 font-poppins font-semibold bg-primary">Split Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "Filter cleaning",         wt: true,      st: true },
                      { label: "Coil wash",               wt: "Rinse",   st: "Full wash" },
                      { label: "Blower wheel cleaning",   wt: false,     st: true },
                      { label: "Drain line",              wt: "Check",   st: "Full clear" },
                      { label: "Outdoor unit",            wt: "N/A",     st: "Inspection + rinse" },
                      { label: "Full reassembly",         wt: false,     st: true },
                      { label: "Time per unit",           wt: "45 min",  st: "~2 hrs" },
                      { label: "Price per unit",          wt: "₱500",    st: "₱1,000" },
                    ].map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? "bg-light-blue" : "bg-white"}>
                        <td className="px-4 py-3 font-semibold text-navy">{row.label}</td>
                        <td className="px-4 py-3 text-center text-sm text-navy">
                          {row.wt === true ? <span className="text-green-500 font-bold">✓</span> : row.wt === false ? <span className="text-gray-300">—</span> : row.wt}
                        </td>
                        <td className="px-4 py-3 text-center text-sm text-navy bg-primary/5">
                          {row.st === true ? <span className="text-green-500 font-bold">✓</span> : row.st === false ? <span className="text-gray-300">—</span> : row.st}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <h2 className="font-poppins font-extrabold text-2xl text-navy mb-4">
                Add-On Services: Deep Clean &amp; Preventive Maintenance
              </h2>
              <p className="leading-relaxed mb-6">
                Both Window Type and Split Type cleaning are standard maintenance
                services. But some units need more than that — and that&apos;s where our
                add-on services come in. These are charged on top of the base cleaning
                price and are only recommended when the unit actually needs it.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-light-blue rounded-xl p-6 border border-sky-100">
                  <span className="text-3xl block mb-3">🧪</span>
                  <h3 className="font-poppins font-bold text-navy text-lg mb-2">
                    Deep Clean / Chemical Wash
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Full chemical treatment of all internal components — evaporator
                    coil, blower wheel, and drain pan. Eliminates mold, bacteria,
                    and heavy buildup that a standard cleaning can&apos;t fully remove.
                  </p>
                  <p className="font-poppins font-semibold text-navy text-sm">Recommended when:</p>
                  <ul className="text-gray-600 text-sm mt-1 space-y-1">
                    <li>✓ Unit hasn&apos;t been cleaned in over a year</li>
                    <li>✓ Persistent musty or bad smell</li>
                    <li>✓ Visible mold inside the unit</li>
                    <li>✓ Still not cooling after standard clean</li>
                  </ul>
                </div>
                <div className="bg-light-blue rounded-xl p-6 border border-sky-100">
                  <span className="text-3xl block mb-3">🔧</span>
                  <h3 className="font-poppins font-bold text-navy text-lg mb-2">
                    Preventive Maintenance
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Full inspection of electrical connections, refrigerant level,
                    thermostat calibration, fan motor, and capacitor. Identifies
                    developing problems before they cause a breakdown.
                  </p>
                  <p className="font-poppins font-semibold text-navy text-sm">Recommended when:</p>
                  <ul className="text-gray-600 text-sm mt-1 space-y-1">
                    <li>✓ Unit is 5 years old or more</li>
                    <li>✓ Commercial unit with heavy daily use</li>
                    <li>✓ Higher electricity bill without explanation</li>
                    <li>✓ Unit making unusual sounds</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                * Add-on pricing is quoted on assessment. Contact us to find out what your unit needs before booking.
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
                    q: "What is the difference between Window Type and Split Type aircon cleaning?",
                    a: "Window Type cleaning (₱500) covers filter, coil rinse, fan blades, and drain check — standard for single-piece window units. Split Type cleaning (₱1,000) takes longer and includes blower wheel cleaning, full indoor unit disassembly, and outdoor unit rinse due to the more complex two-piece design.",
                  },
                  {
                    q: "How much does aircon cleaning cost in General Santos City?",
                    a: "NJ Aircon Services charges ₱500 per unit for Window Type and ₱1,000 per unit for Split Type cleaning in General Santos City and Sarangani Province. Deep clean and preventive maintenance are available as add-ons for units that need extra attention.",
                  },
                  {
                    q: "When do I need a deep clean add-on?",
                    a: "You need a deep clean when your aircon hasn't been cleaned in over a year, has a persistent musty smell, has visible mold inside, or is still not cooling properly after a standard clean. It's a chemical treatment on top of the standard service.",
                  },
                  {
                    q: "What is preventive maintenance and when do I need it?",
                    a: "Preventive maintenance is an add-on that includes a full inspection of electrical connections, refrigerant level, thermostat, and performance. It's recommended for units 5 years or older, commercial units, or any unit showing signs of reduced performance.",
                  },
                  {
                    q: "Can I get a deep clean and preventive maintenance on the same visit?",
                    a: "Yes. Both add-ons can be done in the same visit on top of your Window Type or Split Type cleaning. This is the most thorough option for older or heavily used units. Contact us at 0938-503-2512 to arrange this in Alabel or General Santos City.",
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
                Book Aircon Cleaning in Alabel or General Santos City
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Not sure what your unit needs? Just call or message us — we&apos;ll
                ask a few quick questions and recommend the right service.
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
