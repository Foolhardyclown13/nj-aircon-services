"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, SERVICES, SERVICE_AREAS, ADD_ONS } from "@/lib/constants";

const TIME_SLOTS = [
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
];

type FormData = {
  name: string;
  phone: string;
  area: string;
  address: string;
  service: string;
  units: string;
  addOns: string[];
  preferredDate: string;
  preferredTime: string;
  message: string;
};

function buildCalendarUrl(data: FormData) {
  const service = SERVICES.find((s) => s.name === data.service);
  const units = parseInt(data.units, 10) || 1;

  const addOnText = data.addOns.length > 0 ? ` + ${data.addOns.join(", ")}` : "";
  const title = encodeURIComponent(
    `Aircon Cleaning – ${data.service}${addOnText} ×${units} | NJ Aircon Services`
  );

  const durationMins = (data.service === "Window Type" ? 45 : 120) * units;
  const totalPrice = service ? service.price * units : 0;

  const details = encodeURIComponent(
    [
      `📋 SERVICE BREAKDOWN`,
      `Service: ${data.service}`,
      data.addOns.length > 0 ? `Add-ons: ${data.addOns.join(", ")}` : "",
      `Units: ${units}`,
      `Duration: ~${durationMins >= 60 ? `${Math.floor(durationMins / 60)}h${durationMins % 60 > 0 ? ` ${durationMins % 60}m` : ""}` : `${durationMins} mins`}`,
      totalPrice > 0 ? `Base Price: ₱${totalPrice.toLocaleString()}${data.addOns.length > 0 ? " (add-ons quoted on assessment)" : ""}` : "",
      ``,
      `📍 LOCATION`,
      data.address ? `Address: ${data.address}` : "",
      `Area: ${data.area}`,
      ``,
      `👤 CUSTOMER`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.message ? `Notes: ${data.message}` : "",
      ``,
      `📞 NJ Aircon Services`,
      `Phone: ${BUSINESS.phone}`,
    ]
      .filter(Boolean)
      .join("\n")
  );

  const location = encodeURIComponent(
    data.address ? `${data.address}, ${data.area}, Philippines` : `${data.area}, Philippines`
  );

  let dates = "";
  if (data.preferredDate && data.preferredTime) {
    const [startH, startM] = data.preferredTime.split(":").map(Number);
    const start = new Date(`${data.preferredDate}T00:00:00`);
    start.setHours(startH, startM, 0);
    const end = new Date(start.getTime() + durationMins * 60 * 1000);
    const fmtDateTime = (dt: Date) =>
      `${dt.getFullYear()}${String(dt.getMonth() + 1).padStart(2, "0")}${String(dt.getDate()).padStart(2, "0")}T${String(dt.getHours()).padStart(2, "0")}${String(dt.getMinutes()).padStart(2, "0")}00`;
    dates = `${fmtDateTime(start)}/${fmtDateTime(end)}`;
  } else if (data.preferredDate) {
    const d = new Date(data.preferredDate + "T00:00:00");
    const next = new Date(d);
    next.setDate(next.getDate() + 1);
    const fmt = (dt: Date) =>
      `${dt.getFullYear()}${String(dt.getMonth() + 1).padStart(2, "0")}${String(dt.getDate()).padStart(2, "0")}`;
    dates = `${fmt(d)}/${fmt(next)}`;
  }

  let url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  if (dates) url += `&dates=${dates}`;
  return url;
}

const EMPTY_FORM: FormData = {
  name: "",
  phone: "",
  area: "",
  address: "",
  service: "",
  units: "1",
  addOns: [],
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function BookPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      addOns: e.target.checked
        ? [...prev.addOns, e.target.value]
        : prev.addOns.filter((v) => v !== e.target.value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const calendarUrl = buildCalendarUrl(formData);
    const service = SERVICES.find((s) => s.name === formData.service);
    const units = parseInt(formData.units, 10) || 1;
    const totalPrice = service ? service.price * units : 0;
    const timeLabel = TIME_SLOTS.find((t) => t.value === formData.preferredTime)?.label ?? "Not specified";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Booking — ${formData.name} | ${formData.service} ×${formData.units} | ${formData.area}`,
          name: formData.name,
          phone: formData.phone,
          area: formData.area,
          address: formData.address,
          service: formData.service,
          addOns: formData.addOns.length > 0 ? formData.addOns.join(", ") : "None",
          units: formData.units,
          estimatedBasePrice: totalPrice > 0 ? `₱${totalPrice.toLocaleString()}` : "—",
          preferredDate: formData.preferredDate || "Not specified",
          preferredTime: timeLabel,
          message: formData.message || "—",
          addToCalendar: calendarUrl,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmittedData(formData);
        setStatus("success");
        setFormData(EMPTY_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const selectedService = SERVICES.find((s) => s.name === submittedData?.service);
  const submittedUnits = parseInt(submittedData?.units ?? "1", 10) || 1;
  const estimatedPrice = selectedService ? selectedService.price * submittedUnits : 0;

  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-16 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            Book a Cleaning
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            For residential units — up to 5 aircons. Fill in your details and
            we&apos;ll confirm your schedule via phone or Messenger.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <div className="bg-light-blue rounded-2xl p-8 shadow-sm">
            {status === "success" && submittedData ? (
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <span className="text-5xl block mb-3">✅</span>
                  <h3 className="font-poppins font-bold text-navy text-2xl mb-2">Booking Received!</h3>
                  <p className="text-gray-500 text-sm">
                    Salamat, {submittedData.name}! We&apos;ll contact you shortly to confirm your schedule.
                  </p>
                </div>

                {/* Booking summary */}
                <div className="bg-white rounded-xl border border-sky-100 p-5 flex flex-col gap-3 text-sm">
                  <p className="font-poppins font-bold text-navy text-base mb-1">Booking Summary</p>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service</span>
                    <span className="font-semibold text-navy">{submittedData.service}</span>
                  </div>
                  {submittedData.addOns.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Add-ons</span>
                      <span className="font-semibold text-navy text-right max-w-[60%]">
                        {submittedData.addOns.join(", ")}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Units</span>
                    <span className="font-semibold text-navy">{submittedData.units}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Area</span>
                    <span className="font-semibold text-navy">{submittedData.area}</span>
                  </div>
                  {submittedData.address && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Address</span>
                      <span className="font-semibold text-navy text-right max-w-[60%]">{submittedData.address}</span>
                    </div>
                  )}
                  {submittedData.preferredDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Preferred Date</span>
                      <span className="font-semibold text-navy">
                        {new Date(submittedData.preferredDate + "T00:00:00").toLocaleDateString("en-PH", {
                          month: "long", day: "numeric", year: "numeric",
                        })}
                        {submittedData.preferredTime && (
                          <span className="text-primary ml-1">
                            @ {TIME_SLOTS.find((t) => t.value === submittedData.preferredTime)?.label}
                          </span>
                        )}
                      </span>
                    </div>
                  )}
                  <div className="border-t border-sky-100 pt-3 flex justify-between items-center">
                    <span className="text-gray-500">Base Price</span>
                    <div className="text-right">
                      <span className="font-poppins font-extrabold text-primary text-lg">
                        ₱{estimatedPrice.toLocaleString()}
                      </span>
                      {submittedData.addOns.length > 0 && (
                        <p className="text-gray-400 text-xs">+ add-ons quoted on assessment</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Calendar button */}
                <a
                  href={buildCalendarUrl(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary font-poppins font-semibold py-3 rounded-xl hover:bg-primary hover:text-white transition-colors text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                  </svg>
                  Add to Google Calendar
                </a>

                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  We&apos;ll still confirm the exact schedule with you via phone or Facebook.
                </p>

                <button
                  onClick={() => { setStatus("idle"); setSubmittedData(null); }}
                  className="text-primary font-semibold hover:underline text-sm text-center"
                >
                  Submit another booking
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
                  <label htmlFor="address" className="block font-poppins font-semibold text-navy text-sm mb-2">Complete Address</label>
                  <input id="address" name="address" type="text" required
                    placeholder="e.g. Purok 3, Brgy. Alegria, Alabel"
                    value={formData.address} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                </div>

                <div>
                  <label htmlFor="service" className="block font-poppins font-semibold text-navy text-sm mb-2">Service</label>
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
                  <input id="units" name="units" type="number" min="1" max="5" required
                    value={formData.units} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                  <p className="text-gray-400 text-xs mt-1.5">
                    For 6 or more units,{" "}
                    <Link href="/get-a-quote" className="text-primary hover:underline font-semibold">
                      request a quote instead
                    </Link>.
                  </p>
                </div>

                {/* Add-ons */}
                <div>
                  <p className="font-poppins font-semibold text-navy text-sm mb-3">
                    Add-On Services <span className="text-gray-400 font-normal">(optional)</span>
                  </p>
                  <div className="flex flex-col gap-3">
                    {ADD_ONS.map((addon) => (
                      <label key={addon.name} className="flex items-start gap-3 bg-white border border-sky-200 rounded-xl px-4 py-3 cursor-pointer hover:border-primary transition-colors">
                        <input
                          type="checkbox"
                          value={addon.name}
                          checked={formData.addOns.includes(addon.name)}
                          onChange={handleCheckbox}
                          className="mt-0.5 accent-primary w-4 h-4 shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-navy text-sm">{addon.icon} {addon.name}</p>
                          <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{addon.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs mt-2">* Add-on prices are quoted on assessment.</p>
                </div>

                <div>
                  <label className="block font-poppins font-semibold text-navy text-sm mb-2">
                    Preferred Schedule <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      id="preferredDate" name="preferredDate" type="date"
                      value={formData.preferredDate} onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    />
                    <select
                      id="preferredTime" name="preferredTime"
                      value={formData.preferredTime} onChange={handleChange}
                      className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    >
                      <option value="">Any time</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot.value} value={slot.value}>{slot.label}</option>
                      ))}
                    </select>
                  </div>
                  <p className="text-gray-400 text-xs mt-1.5">Available 9 AM – 4 PM · Lunch break 12 PM – 1 PM</p>
                </div>

                <div>
                  <label htmlFor="message" className="block font-poppins font-semibold text-navy text-sm mb-2">
                    Notes <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea id="message" name="message" rows={3}
                    placeholder="Any details about your aircon, access instructions, etc."
                    value={formData.message} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none" />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or contact us directly.</p>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="bg-primary hover:bg-sky-600 disabled:bg-sky-300 text-white font-poppins font-bold text-lg py-4 rounded-xl transition-colors">
                  {status === "loading" ? "Sending..." : "Book Now"}
                </button>
              </form>
            )}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Pricing */}
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
              <p className="text-gray-400 text-xs mt-3">* Per unit. Add-ons quoted on assessment.</p>
            </div>

            {/* Large job callout */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <p className="font-poppins font-bold text-base mb-2">Have 6 or more units?</p>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                For commercial properties, offices, or large residential jobs that need an inspection first, request a quote instead.
              </p>
              <Link
                href="/get-a-quote"
                className="inline-block bg-white text-navy font-poppins font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-light-blue transition-colors"
              >
                Request a Quote →
              </Link>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 border border-sky-100">
              <h3 className="font-poppins font-bold text-navy text-base mb-4">Prefer to talk first?</h3>
              <div className="flex flex-col gap-3">
                <a href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                  className="flex items-center gap-3 text-navy hover:text-primary transition-colors">
                  <span className="text-lg">📞</span>
                  <span className="font-semibold text-sm">{BUSINESS.phone}</span>
                </a>
                <a href={BUSINESS.facebookMessengerUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-navy hover:text-primary transition-colors">
                  <span className="text-lg">💬</span>
                  <span className="font-semibold text-sm">Message on Facebook</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
