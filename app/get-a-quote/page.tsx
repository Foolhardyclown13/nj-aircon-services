"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, SERVICE_CATEGORIES, SERVICE_OPTIONS, SERVICE_AREAS, ADD_ONS } from "@/lib/constants";

const TIME_SLOTS = [
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
];

function buildCalendarUrl(data: {
  name: string;
  service: string;
  units: string;
  area: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  addOns: string[];
  message: string;
}) {
  const option = SERVICE_OPTIONS.find((o) => o.value === data.service);
  const units = parseInt(data.units, 10) || 1;

  const addOnText = data.addOns.length > 0 ? ` + ${data.addOns.join(", ")}` : "";
  const title = encodeURIComponent(
    `Aircon Cleaning – ${data.service}${addOnText} ×${units} | NJ Aircon Services`
  );

  const durationMins = (option?.duration === "2 hrs/unit" ? 120 : 45) * units;
  const totalPrice = option ? option.price * units : 0;

  const timeLabel = TIME_SLOTS.find((t) => t.value === data.preferredTime)?.label ?? "";

  const details = encodeURIComponent(
    [
      `📋 SERVICE BREAKDOWN`,
      `Service: ${data.service}`,
      data.addOns.length > 0 ? `Add-ons: ${data.addOns.join(", ")}` : "",
      `Units: ${units}`,
      `Duration: ~${durationMins >= 60 ? `${Math.floor(durationMins / 60)}h${durationMins % 60 > 0 ? ` ${durationMins % 60}m` : ""}` : `${durationMins} mins`}`,
      totalPrice > 0 ? `Base Price: ₱${totalPrice.toLocaleString()} (add-ons quoted on assessment)` : "",
      ``,
      `📍 LOCATION`,
      data.address ? `Address: ${data.address}` : "",
      `Area: ${data.area}`,
      ``,
      `👤 CUSTOMER`,
      `Name: ${data.name}`,
      data.message ? `Notes: ${data.message}` : "",
      ``,
      `📞 NJ Aircon Services`,
      `Phone: ${BUSINESS.phone}`,
    ]
      .filter(Boolean)
      .join("\n")
  );

  const location = encodeURIComponent(data.address ? `${data.address}, ${data.area}, Philippines` : `${data.area}, Philippines`);

  let dates = "";
  if (data.preferredDate && data.preferredTime) {
    // Timed event: start at chosen time, end after estimated duration
    const [startH, startM] = data.preferredTime.split(":").map(Number);
    const start = new Date(`${data.preferredDate}T00:00:00`);
    start.setHours(startH, startM, 0);
    const end = new Date(start.getTime() + durationMins * 60 * 1000);
    const fmtDateTime = (dt: Date) =>
      `${dt.getFullYear()}${String(dt.getMonth() + 1).padStart(2, "0")}${String(dt.getDate()).padStart(2, "0")}T${String(dt.getHours()).padStart(2, "0")}${String(dt.getMinutes()).padStart(2, "0")}00`;
    dates = `${fmtDateTime(start)}/${fmtDateTime(end)}`;
  } else if (data.preferredDate) {
    // All-day fallback if no time chosen
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

export default function GetAQuotePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>({
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
  });
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
    const option = SERVICE_OPTIONS.find((o) => o.value === formData.service);
    const units = parseInt(formData.units, 10) || 1;
    const totalPrice = option ? option.price * units : 0;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Quote Request — ${formData.name} | ${formData.service} ×${formData.units} | ${formData.area}`,
          name: formData.name,
          phone: formData.phone,
          area: formData.area,
          address: formData.address,
          service: formData.service,
          addOns: formData.addOns.length > 0 ? formData.addOns.join(", ") : "None",
          units: formData.units,
          preferredDate: formData.preferredDate || "Not specified",
          preferredTime: formData.preferredTime
            ? (TIME_SLOTS.find((t) => t.value === formData.preferredTime)?.label ?? formData.preferredTime)
            : "Not specified",
          estimatedBasePrice: totalPrice > 0 ? `₱${totalPrice.toLocaleString()}` : "—",
          message: formData.message || "—",
          addToCalendar: calendarUrl,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmittedData(formData);
        setStatus("success");
        setFormData({
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
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const selectedOption = SERVICE_OPTIONS.find((o) => o.value === submittedData?.service);
  const submittedUnits = parseInt(submittedData?.units ?? "1", 10) || 1;
  const estimatedPrice = selectedOption ? selectedOption.price * submittedUnits : 0;

  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-16 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl text-navy mb-4">
            Request a Quote
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            For commercial properties, offices, or large jobs with 6 or more units that need an inspection first. We&apos;ll get back to you with a custom quote.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            For 1–5 units at home?{" "}
            <a href="/book" className="text-primary font-semibold hover:underline">Book directly here instead →</a>
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
                  <h3 className="font-poppins font-bold text-navy text-2xl mb-2">Request Sent!</h3>
                  <p className="text-gray-500 text-sm">
                    Salamat, {submittedData.name}! We&apos;ll contact you shortly to confirm your schedule.
                  </p>
                </div>

                {/* Booking summary */}
                <div className="bg-white rounded-xl border border-sky-100 p-5 flex flex-col gap-3 text-sm">
                  <p className="font-poppins font-bold text-navy text-base mb-1">Your Booking Summary</p>
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
                    <span className="font-poppins font-extrabold text-primary text-lg">
                      ₱{estimatedPrice.toLocaleString()}
                      <span className="text-gray-400 font-normal text-xs ml-1">
                        {submittedData.addOns.length > 0 ? "+ add-ons (quoted on assessment)" : ""}
                      </span>
                    </span>
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
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                  </svg>
                  Add to Google Calendar
                </a>

                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  This saves the booking details to your calendar. We&apos;ll still confirm the exact schedule with you via phone or Facebook.
                </p>

                <button
                  onClick={() => { setStatus("idle"); setSubmittedData(null); setFormData({ name: "", phone: "", area: "", address: "", service: "", units: "1", addOns: [], preferredDate: "", preferredTime: "", message: "" }); }}
                  className="text-primary font-semibold hover:underline text-sm text-center"
                >
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
                  <label htmlFor="address" className="block font-poppins font-semibold text-navy text-sm mb-2">Complete Address</label>
                  <input id="address" name="address" type="text" required
                    placeholder="e.g. Purok 3, Brgy. Alegria, Alabel"
                    value={formData.address} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                </div>
                <div>
                  <label htmlFor="service" className="block font-poppins font-semibold text-navy text-sm mb-2">Service Needed</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                    <option value="">Select a service...</option>
                    {SERVICE_CATEGORIES.map((cat) => (
                      <optgroup key={cat.name} label={cat.name}>
                        {cat.tiers.map((tier) => (
                          <option key={`${cat.name}-${tier.hp}`} value={`${cat.name} — ${tier.hp}`}>
                            {tier.hp} — ₱{tier.price.toLocaleString()}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="units" className="block font-poppins font-semibold text-navy text-sm mb-2">Number of Units</label>
                  <input id="units" name="units" type="number" min="1" max="20" required
                    value={formData.units} onChange={handleChange}
                    className="w-full border border-sky-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
                </div>

                {/* Add-ons */}
                <div>
                  <p className="font-poppins font-semibold text-navy text-sm mb-3">Add-On Services <span className="text-gray-400 font-normal">(optional)</span></p>
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
                  <label htmlFor="message" className="block font-poppins font-semibold text-navy text-sm mb-2">Additional Notes <span className="text-gray-400 font-normal">(optional)</span></label>
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
              <div className="flex flex-col gap-4">
                {SERVICE_CATEGORIES.map((cat) => (
                  <div key={cat.name}>
                    <p className="font-poppins font-semibold text-navy text-sm mb-2">{cat.name}</p>
                    {cat.tiers.map((tier) => (
                      <div key={tier.hp} className="flex justify-between items-center py-2 border-b border-sky-200 last:border-0 pl-2">
                        <span className="text-gray-500 text-xs">{tier.hp}</span>
                        <span className="font-poppins font-extrabold text-primary text-base">
                          ₱{tier.price.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-3">* No hidden charges. Price is per unit. Add-ons quoted on assessment.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
