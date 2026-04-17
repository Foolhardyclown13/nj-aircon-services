import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aircon Tips & Guides | NJ Aircon Services Blog",
  description:
    "Helpful tips about aircon cleaning, maintenance, and common problems for homeowners in Alabel, General Santos City, and Sarangani Province.",
};

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-16 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            Aircon Tips &amp; Guides
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Helpful advice for homeowners in Sarangani Province and General
            Santos City — keep your aircon running cold and efficient.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <span className="text-6xl block mb-6">✍️</span>
          <h2 className="font-poppins font-bold text-2xl text-navy mb-3">
            Articles Coming Soon
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We&apos;re working on helpful guides about aircon cleaning and
            maintenance. Check back soon!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
