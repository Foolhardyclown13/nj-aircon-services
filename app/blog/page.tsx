import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aircon Tips & Guides | NJ Aircon Services Blog",
  description:
    "Helpful tips about aircon cleaning, maintenance, and common problems for homeowners in Alabel, General Santos City, and Sarangani Province.",
};

const POSTS = [
  {
    slug: "regular-clean-vs-deep-clean-vs-preventive-maintenance",
    title: "Regular Clean vs. Deep Clean vs. Preventive Maintenance: Which One Does Your Aircon Need?",
    excerpt:
      "Not sure whether your aircon needs a regular clean, deep clean, or preventive maintenance? Here's exactly what each service covers and how to choose the right one.",
    date: "April 18, 2026",
    readTime: "6 min read",
    category: "Maintenance Tips",
  },
];

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
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-light-blue rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className="text-xs font-poppins font-semibold text-primary uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h2 className="font-poppins font-bold text-navy text-lg leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-sky-200 mt-auto">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
