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
    slug: "how-often-clean-aircon-philippines",
    title: "How Often Should You Clean Your Aircon in the Philippines?",
    excerpt:
      "Living in a hot and humid climate like Sarangani Province means your aircon works harder than most. Find out how often you should be cleaning it to avoid breakdowns and high electricity bills.",
    date: "April 10, 2026",
    readTime: "4 min read",
    category: "Maintenance Tips",
  },
  {
    slug: "signs-aircon-needs-cleaning",
    title: "7 Signs Your Aircon Urgently Needs Cleaning",
    excerpt:
      "Is your aircon not as cold as it used to be? Making strange noises? These are warning signs you shouldn't ignore. Here are 7 clear signs your unit needs a professional clean.",
    date: "April 14, 2026",
    readTime: "5 min read",
    category: "Troubleshooting",
  },
  {
    slug: "aircon-cleaning-price-sarangani",
    title: "Aircon Cleaning Price in Sarangani Province: What to Expect",
    excerpt:
      "Wondering how much aircon cleaning costs in Alabel or General Santos City? We break down the different service types, what's included, and why the cheapest option isn't always the best.",
    date: "April 17, 2026",
    readTime: "3 min read",
    category: "Pricing",
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
