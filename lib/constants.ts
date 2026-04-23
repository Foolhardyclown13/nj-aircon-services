export const BUSINESS = {
  name: "NJ Aircon Services",
  phone: "0938-503-2512",
  facebookUrl: "https://www.facebook.com/CoolTechApplianceServices", // TODO: Update when page name changes
  facebookMessengerUrl: "https://m.me/CoolTechApplianceServices", // TODO: Update when page name changes
  address: "Alabel, Sarangani Province, Philippines",
  email: "", // Optional: add your email address
};

export const SERVICE_AREAS = [
  { name: "Alabel", note: "Our home base in Sarangani Province" },
  { name: "General Santos City", note: "Full coverage across GenSan" },
  { name: "Malapatan", note: "Serving Malapatan and nearby barangays" },
  { name: "Polomolok", note: "Available in Polomolok, South Cotabato" },
];

export const SERVICE_CATEGORIES = [
  {
    name: "Window Type / Non-Inverter",
    duration: "45 mins/unit",
    description:
      "Standard filter and coil cleaning for single-piece window-mounted units. Ideal for regular home maintenance.",
    icon: "🌬️",
    tiers: [
      { hp: "1 HP – 1.5 HP", price: 500 },
      { hp: "2 HP – 2.5 HP", price: 800 },
    ],
  },
  {
    name: "Window Type Inverter",
    duration: "45 mins/unit",
    description:
      "Filter and coil cleaning for energy-efficient inverter window units. Same thorough process, inverter-safe procedure.",
    icon: "❄️",
    tiers: [
      { hp: "1 HP – 1.5 HP", price: 600 },
      { hp: "2 HP – 2.5 HP", price: 900 },
    ],
  },
  {
    name: "Split Type Inverter",
    duration: "2 hrs/unit",
    description:
      "Full disassembly and thorough cleaning for modern split-type inverter units — indoor and outdoor unit included.",
    icon: "🧹",
    tiers: [
      { hp: "1 HP – 1.5 HP", price: 900 },
      { hp: "2 HP – 2.5 HP", price: 1200 },
    ],
  },
];

// Flat list used in booking form dropdowns
export const SERVICE_OPTIONS = SERVICE_CATEGORIES.flatMap((cat) =>
  cat.tiers.map((tier) => ({
    label: `${cat.name} (${tier.hp})`,
    value: `${cat.name} — ${tier.hp}`,
    price: tier.price,
    duration: cat.duration,
    category: cat.name,
    hp: tier.hp,
  }))
);

export const ADD_ONS = [
  {
    name: "Deep Clean / Chemical Wash",
    description:
      "Full chemical treatment of internal components. Recommended when the unit hasn't been cleaned in over a year, has a musty smell, or is visibly dirty inside.",
    icon: "🧪",
  },
  {
    name: "Preventive Maintenance",
    description:
      "Complete inspection of electrical connections, refrigerant level, and performance. Best for older units or commercial aircons.",
    icon: "🔧",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Technicians",
    description:
      "Our team is trained and experienced in servicing all major aircon brands — Samsung, LG, Carrier, Daikin, and more.",
    icon: "👨‍🔧",
  },
  {
    title: "Affordable Prices",
    description:
      "We offer competitive rates without hidden charges. What you see on the price list is what you pay.",
    icon: "💰",
  },
  {
    title: "Same-Day Service Available",
    description:
      "Need urgent aircon cleaning? We accommodate same-day bookings when slots are available.",
    icon: "⚡",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "We're not done until you're happy. Our work is backed by our commitment to quality service.",
    icon: "✅",
  },
];
