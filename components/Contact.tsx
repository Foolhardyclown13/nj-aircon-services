"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New inquiry from ${formData.name} - NJ Aircon Services`,
          ...formData,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            Book Your Aircon Cleaning in Alabel or GenSan Today
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Fill out the form below and we&apos;ll get back to you ASAP. Or
            reach us directly by call or Messenger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-light-blue rounded-2xl p-8 shadow-sm">
            {status === "success" ? (
              <div className="text-center py-8">
                <span className="text-6xl block mb-4">✅</span>
                <h3 className="font-poppins font-bold text-navy text-2xl mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Salamat! We received your message and will get back to you
                  shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-poppins font-semibold text-navy text-sm mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Juan dela Cruz"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-poppins font-semibold text-navy text-sm mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="09XX-XXX-XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-poppins font-semibold text-navy text-sm mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hi, I'd like to book an aircon cleaning for my 1HP unit in Alabel..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try again or contact us
                    directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary hover:bg-sky-600 disabled:bg-sky-300 text-white font-poppins font-bold text-lg py-4 rounded-xl transition-colors"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Direct contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="font-poppins font-bold text-xl mb-6">
                Contact Us Directly
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sky-300 text-xs font-semibold uppercase tracking-wide mb-0.5">
                      Call or Text
                    </p>
                    <p className="text-white font-poppins font-bold text-lg">
                      {BUSINESS.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={BUSINESS.facebookMessengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.914 1.38 5.516 3.54 7.237V22l3.235-1.779A10.726 10.726 0 0012 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.44l-2.551-2.72-4.978 2.72 5.478-5.814 2.614 2.72 4.916-2.72-5.479 5.814z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sky-300 text-xs font-semibold uppercase tracking-wide mb-0.5">
                      Facebook Messenger
                    </p>
                    <p className="text-white font-poppins font-bold text-lg">
                      Message Us on FB
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sky-300 text-xs font-semibold uppercase tracking-wide mb-0.5">
                      Based in
                    </p>
                    <p className="text-white font-poppins font-bold text-lg">
                      {BUSINESS.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS.facebookMessengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-sky-600 text-white font-poppins font-bold text-lg py-5 rounded-2xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.914 1.38 5.516 3.54 7.237V22l3.235-1.779A10.726 10.726 0 0012 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.44l-2.551-2.72-4.978 2.72 5.478-5.814 2.614 2.72 4.916-2.72-5.479 5.814z" />
              </svg>
              Message on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
