"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function GetAQuotePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    service: "",
    units: "1",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          subject: `Quote Request from ${formData.name} — ${formData.service}`,
          ...formData,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", area: "", service: "", units: "1", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-16 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            Get A Free Quote
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you with a quote ASAP.
            Same-day service available!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <div className="bg-light-blue rounded-2xl p-8 shadow-sm">
            {status === "success" ? (
              <div className="text-center py-8">
                <span className="text-6xl block mb-4">✅</span>
                <h3 className="font-poppins font-bold text-navy text-2xl mb-3">Quote Request Sent!</h3>
                <p className="text-gray-600">
                  Salamat! We&apos;ll get back to you shortly with your quote.
                </p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-primary font-semibold hover:underline">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block font-poppins font-semibold text-navy text-sm mb-2">Your Name</label>
                  <input id="name" name="name" type="text" required placeholder="Juan dela Cruz"
                    value={formData.name} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-poppins font-semibold text-navy text-sm mb-2">Phone Number</label>
                  <input id="phone" name="phone" type="tel" required placeholder="09XX-XXX-XXXX"
                    value={formData.phone} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                </div>
                <div>
                  <label htmlFor="area" className="block font-poppins font-semibold text-navy text-sm mb-2">Your Area</label>
                  <select id="area" name="area" required value={formData.area} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                    <option value="">Select your area...</option>
                    {SERVICE_AREAS.map((area) => (
                      <option key={area.name} value={area.name}>{area.name}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="service" className="block font-poppins font-semibold text-navy text-sm mb-2">Service Needed</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                    <option value="">Select a service...</option>
                    {SERVICES.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name} — ₱{service.price.toLocaleString()}/unit
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="units" className="block font-poppins font-semibold text-navy text-sm mb-2">Number of Units</label>
                  <input id="units" name="units" type="number" min="1" max="20" required
                    value={formData.units} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-poppins font-semibold text-navy text-sm mb-2">Additional Notes (Optional)</label>
                  <textarea id="message" name="message" rows={3} placeholder="Any details about your aircon or preferred schedule..."
                    value={formData.message} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none" />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or contact us directly.</p>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="bg-primary hover:bg-sky-600 disabled:bg-sky-300 text-white font-poppins font-bold text-lg py-4 rounded-xl transition-colors">
                  {status === "loading" ? "Sending..." : "Request Quote"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h2 className="font-poppins font-bold text-xl mb-6">Prefer to Call?</h2>
              <div className="flex flex-col gap-5">
                <a href={`tel:${BUSINESS.phone.replace(/-/g, "")}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sky-300 text-xs font-semibold uppercase tracking-wide mb-0.5">Call or Text</p>
                    <p className="text-white font-poppins font-bold text-lg">{BUSINESS.phone}</p>
                  </div>
                </a>
                <a href={BUSINESS.facebookMessengerUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.914 1.38 5.516 3.54 7.237V22l3.235-1.779A10.726 10.726 0 0012 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.44l-2.551-2.72-4.978 2.72 5.478-5.814 2.614 2.72 4.916-2.72-5.479 5.814z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sky-300 text-xs font-semibold uppercase tracking-wide mb-0.5">Facebook Messenger</p>
                    <p className="text-white font-poppins font-bold text-lg">Message Us on FB</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Pricing summary */}
            <div className="bg-light-blue rounded-2xl p-6 border border-sky-100">
              <h3 className="font-poppins font-bold text-navy text-lg mb-4">Our Rates</h3>
              {SERVICES.map((service) => (
                <div key={service.name} className="flex justify-between items-center py-3 border-b border-sky-200 last:border-0">
                  <div>
                    <p className="font-poppins font-semibold text-navy text-sm">{service.name}</p>
                    <p className="text-gray-400 text-xs">{service.duration}</p>
                  </div>
                  <span className="font-poppins font-extrabold text-primary text-xl">
                    ₱{service.price.toLocaleString()}
                  </span>
                </div>
              ))}
              <p className="text-gray-400 text-xs mt-3">* No hidden charges. Price is per unit.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
