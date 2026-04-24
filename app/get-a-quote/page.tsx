"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS, SERVICE_CATEGORIES, SERVICE_AREAS, ADD_ONS } from "@/lib/constants";

const TIME_SLOTS = [
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
];

type ServiceLine = {
  hp: string;
  units: number;
  price: number;
};

type SelectedServices = Record<string, ServiceLine>;

type FormData = {
  name: string;
  phone: string;
  area: string;
  address: string;
  selectedServices: SelectedServices;
  addOns: string[];
  preferredDate: string;
  preferredTime: string;
  message: string;
};

function getServiceLines(selectedServices: SelectedServices) {
  return Object.entries(selectedServices).map(([catName, line]) => ({
    catName,
    hp: line.hp,
    units: line.units,
    price: line.price,
    subtotal: line.price * line.units,
  }));
}

function buildCalendarUrl(data: FormData) {
  const lines = getServiceLines(data.selectedServices);
  const totalUnits = lines.reduce((s, l) => s + l.units, 0);
  const totalPrice = lines.reduce((s, l) => s + l.subtotal, 0);

  const durationMins = lines.reduce((sum, line) => {
    const cat = SERVICE_CATEGORIES.find((c) => c.name === line.catName);
    const perUnit = cat?.duration === "2 hrs/unit" ? 120 : 45;
    return sum + perUnit * line.units;
  }, 0);

  const serviceShort = lines
    .map((l) => `${l.catName.split(" ").slice(0, 2).join(" ")} ×${l.units}`)
    .join(", ");
  const addOnText = data.addOns.length > 0 ? ` + ${data.addOns.join(", ")}` : "";
  const title = encodeURIComponent(
    `Aircon Cleaning Quote – ${serviceShort}${addOnText} | NJ Aircon Services`
  );

  const serviceDetails = lines
    .map((l) => `  • ${l.catName} (${l.hp}) ×${l.units} — ₱${l.subtotal.toLocaleString()}`)
    .join("\n");

  const details = encodeURIComponent(
    [
      `📋 SERVICE BREAKDOWN`,
      serviceDetails,
      data.addOns.length > 0 ? `Add-ons: ${data.addOns.join(", ")}` : "",
      `Total Units: ${totalUnits}`,
      `Est. Duration: ~${
        durationMins >= 60
          ? `${Math.floor(durationMins / 60)}h${durationMins % 60 > 0 ? ` ${durationMins % 60}m` : ""}`
          : `${durationMins} mins`
      }`,
      `Estimated Base Price: ₱${totalPrice.toLocaleString()} (final quote pending inspection)`,
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
    data.address
      ? `${data.address}, ${data.area}, Philippines`
      : `${data.area}, Philippines`
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
  selectedServices: {},
  addOns: [],
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function GetAQuotePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [serviceError, setServiceError] = useState(false);

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

  const toggleService = (catName: string) => {
    setServiceError(false);
    setFormData((prev) => {
      const next = { ...prev.selectedServices };
      if (next[catName]) {
        delete next[catName];
      } else {
        const cat = SERVICE_CATEGORIES.find((c) => c.name === catName)!;
        next[catName] = { hp: cat.tiers[0].hp, units: 1, price: cat.tiers[0].price };
      }
      return { ...prev, selectedServices: next };
    });
  };

  const updateServiceHp = (catName: string, hp: string) => {
    const cat = SERVICE_CATEGORIES.find((c) => c.name === catName)!;
    const tier = cat.tiers.find((t) => t.hp === hp)!;
    setFormData((prev) => ({
      ...prev,
      selectedServices: {
        ...prev.selectedServices,
        [catName]: { ...prev.selectedServices[catName], hp, price: tier.price },
      },
    }));
  };

  const updateServiceUnits = (catName: string, units: number) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: {
        ...prev.selectedServices,
        [catName]: { ...prev.selectedServices[catName], units: Math.max(1, units) },
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(formData.selectedServices).length === 0) {
      setServiceError(true);
      return;
    }

    setStatus("loading");

    const lines = getServiceLines(formData.selectedServices);
    const totalUnits = lines.reduce((s, l) => s + l.units, 0);
    const totalPrice = lines.reduce((s, l) => s + l.subtotal, 0);
    const calendarUrl = buildCalendarUrl(formData);
    const timeLabel =
      TIME_SLOTS.find((t) => t.value === formData.preferredTime)?.label ?? "Not specified";

    const servicesText = lines
      .map((l) => `${l.catName} (${l.hp}) ×${l.units} — ₱${l.subtotal.toLocaleString()}`)
      .join("; ");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Quote Request — ${formData.name} | ${totalUnits} unit${totalUnits !== 1 ? "s" : ""} | ${formData.area}`,
          name: formData.name,
          phone: formData.phone,
          area: formData.area,
          address: formData.address,
          services: servicesText,
          addOns: formData.addOns.length > 0 ? formData.addOns.join(", ") : "None",
          totalUnits: String(totalUnits),
          estimatedBasePrice: `₱${totalPrice.toLocaleString()} (pending inspection)`,
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

  const submittedLines = submittedData
    ? getServiceLines(submittedData.selectedServices)
    : [];
  const submittedTotalPrice = submittedLines.reduce((s, l) => s + l.subtotal, 0);
  const submittedTotalUnits = submittedLines.reduce((s, l) => s + l.units, 0);

  const liveLines = getServiceLines(formData.selectedServices);
  const liveTotalPrice = liveLines.reduce((s, l) => s + l.subtotal, 0);

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
                  <p className="font-poppins font-bold text-navy text-base mb-1">Your Quote Request</p>

                  <div className="flex flex-col gap-2">
                    {submittedLines.map((l) => (
                      <div key={l.catName} className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-navy text-sm">{l.catName}</p>
                          <p className="text-gray-400 text-xs">{l.hp} · {l.units} unit{l.units !== 1 ? "s" : ""}</p>
                        </div>
                        <span className="font-semibold text-navy shrink-0 ml-4">
                          ₱{l.subtotal.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {submittedData.addOns.length > 0 && (
                    <div className="flex justify-between pt-1">
                      <span className="text-gray-500">Add-ons</span>
                      <span className="font-semibold text-navy text-right max-w-[60%]">
                        {submittedData.addOns.join(", ")}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Units</span>
                    <span className="font-semibold text-navy">{submittedTotalUnits}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Area</span>
                    <span className="font-semibold text-navy">{submittedData.area}</span>
                  </div>

                  {submittedData.address && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Address</span>
                      <span className="font-semibold text-navy text-right max-w-[60%]">
                        {submittedData.address}
                      </span>
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
                    <span className="text-gray-500">Total</span>
                    <div className="text-right">
                      <span className="font-poppins font-extrabold text-primary text-lg">
                        ₱{submittedTotalPrice.toLocaleString()}
                      </span>
                      <p className="text-gray-400 text-xs">final quote after inspection</p>
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
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                  </svg>
                  Add to Google Calendar
                </a>

                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  This saves the booking details to your calendar. We&apos;ll still confirm the exact schedule with you via phone or Facebook.
                </p>

                <button
                  onClick={() => { setStatus("idle"); setSubmittedData(null); }}
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

                {/* Multi-service selector */}
                <div>
                  <p className="font-poppins font-semibold text-navy text-sm mb-1">
                    Services Needed <span className="text-red-500">*</span>
                  </p>
                  <p className="text-gray-400 text-xs mb-3">Select all aircon types that need cleaning. You can mix and match.</p>
                  <div className="flex flex-col gap-3">
                    {SERVICE_CATEGORIES.map((cat) => {
                      const isSelected = !!formData.selectedServices[cat.name];
                      const line = formData.selectedServices[cat.name];
                      return (
                        <div
                          key={cat.name}
                          className={`bg-white border rounded-xl overflow-hidden transition-colors ${
                            isSelected ? "border-primary" : "border-sky-200"
                          }`}
                        >
                          <label className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleService(cat.name)}
                              className="accent-primary w-4 h-4 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-poppins font-semibold text-navy text-sm">{cat.name}</p>
                              <p className="text-gray-400 text-xs">
                                {cat.tiers[0].hp}: ₱{cat.tiers[0].price.toLocaleString()} &nbsp;·&nbsp;
                                {cat.tiers[1].hp}: ₱{cat.tiers[1].price.toLocaleString()}
                              </p>
                            </div>
                          </label>
                          {isSelected && line && (
                            <div className="px-4 pb-4 pt-2 border-t border-sky-100 bg-sky-50/50 flex gap-3">
                              <div className="flex-1">
                                <label className="block text-xs font-semibold text-gray-500 mb-1.5">HP Size</label>
                                <select
                                  value={line.hp}
                                  onChange={(e) => updateServiceHp(cat.name, e.target.value)}
                                  className="w-full border border-sky-200 rounded-lg px-3 py-2 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                                >
                                  {cat.tiers.map((tier) => (
                                    <option key={tier.hp} value={tier.hp}>
                                      {tier.hp} — ₱{tier.price.toLocaleString()}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="w-24">
                                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Units</label>
                                <input
                                  type="number"
                                  min="1"
                                  max="20"
                                  value={line.units}
                                  onChange={(e) =>
                                    updateServiceUnits(cat.name, parseInt(e.target.value, 10) || 1)
                                  }
                                  className="w-full border border-sky-200 rounded-lg px-3 py-2 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {serviceError && (
                    <p className="text-red-500 text-xs mt-2">Please select at least one service.</p>
                  )}

                  {/* Live price summary */}
                  {liveLines.length > 0 && (
                    <div className="mt-3 bg-white border border-sky-200 rounded-xl px-4 py-3 flex flex-col gap-1.5 text-sm">
                      {liveLines.map((l) => (
                        <div key={l.catName} className="flex justify-between text-xs text-gray-500">
                          <span>{l.catName} ({l.hp}) ×{l.units}</span>
                          <span className="font-semibold text-navy">₱{l.subtotal.toLocaleString()}</span>
                        </div>
                      ))}
                      <div className="border-t border-sky-100 pt-2 flex justify-between">
                        <span className="font-poppins font-semibold text-navy text-xs">Estimated Total</span>
                        <span className="font-poppins font-extrabold text-primary text-sm">
                          ₱{liveTotalPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs">Final price confirmed after inspection.</p>
                    </div>
                  )}
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
                    Additional Notes <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea id="message" name="message" rows={3}
                    placeholder="Any details about your aircon or preferred schedule..."
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
