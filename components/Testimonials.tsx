const TESTIMONIALS = [
  {
    quote:
      "Tinawagan ko sila ng umaga, dumating sila ng hapon. Sobrang bilis at maayos ang trabaho. Ang ganda ng malamig na aircon ulit!",
    name: "Maria R.",
    location: "Alabel, Sarangani",
    stars: 5,
  },
  {
    quote:
      "Very professional and affordable. My Samsung aircon wasn't cooling properly for months — after the deep clean, it's like brand new. Highly recommend!",
    name: "Jun B.",
    location: "General Santos City",
    stars: 5,
  },
  {
    quote:
      "Fair price, no hidden charges, and they cleaned up after themselves. Will definitely book again for my other units.",
    name: "Ana L.",
    location: "Polomolok, South Cotabato",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real feedback from homeowners across Sarangani Province and General
            Santos City.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-light-blue rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-sky-200 pt-4">
                <p className="font-poppins font-bold text-navy text-sm">
                  {t.name}
                </p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
