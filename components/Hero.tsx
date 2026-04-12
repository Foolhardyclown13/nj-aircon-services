import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ac-cleaning-1.jpg"
          alt="Professional aircon cleaning service in General Santos City and Alabel"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white">
        <span className="inline-block bg-primary/20 border border-primary/40 text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 text-sky-300">
          Serving Alabel, GenSan, Malapatan &amp; Polomolok
        </span>

        <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          Professional Aircon Cleaning in{" "}
          <span className="text-primary">Alabel &amp; General Santos City</span>
        </h1>

        <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Keep your aircon running cold and efficient. Affordable rates,
          experienced technicians, and same-day service available — right here
          in Sarangani Province.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
            className="w-full sm:w-auto bg-primary hover:bg-sky-600 text-white font-poppins font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
            </svg>
            Call Us Now
          </a>
          <a
            href={BUSINESS.facebookMessengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-navy hover:bg-light-blue font-poppins font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.914 1.38 5.516 3.54 7.237V22l3.235-1.779A10.726 10.726 0 0012 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.44l-2.551-2.72-4.978 2.72 5.478-5.814 2.614 2.72 4.916-2.72-5.479 5.814z" />
            </svg>
            Message on Facebook
          </a>
        </div>

        <p className="mt-8 text-gray-300 text-sm">
          📞 Call or text:{" "}
          <a
            href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
            className="text-white font-semibold hover:text-primary transition-colors"
          >
            {BUSINESS.phone}
          </a>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="h-6 w-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
