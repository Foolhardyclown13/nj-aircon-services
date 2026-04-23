import Image from "next/image";
import { BUSINESS, SERVICE_AREAS, SERVICE_CATEGORIES, ADD_ONS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="NJ Aircon Services logo"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <span className="font-poppins font-bold text-xl">
                NJ Aircon<br />
                <span className="text-primary text-base font-semibold">Services</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional aircon cleaning and maintenance in Alabel, General
              Santos City, and surrounding areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-bold text-white mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              {SERVICE_CATEGORIES.map((service) => (
                <li key={service.name}>
                  <a
                    href="/#services"
                    className="text-gray-400 text-sm hover:text-primary transition-colors"
                  >
                    {service.name} — ₱{service.tiers[0].price.toLocaleString()}+
                  </a>
                </li>
              ))}
              <li className="pt-1 border-t border-white/10 mt-1">
                <span className="text-gray-500 text-xs uppercase tracking-wide font-semibold">Add-ons</span>
              </li>
              {ADD_ONS.map((addon) => (
                <li key={addon.name}>
                  <a
                    href="/#services"
                    className="text-gray-400 text-sm hover:text-primary transition-colors"
                  >
                    {addon.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-poppins font-bold text-white mb-4">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name} className="text-gray-400 text-sm">
                  {area.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold text-white mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                className="text-gray-400 text-sm hover:text-primary transition-colors"
              >
                📞 {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-primary transition-colors"
              >
                💬 Facebook Page
              </a>
              <address className="not-italic text-gray-400 text-sm">
                📍 {BUSINESS.address}
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs text-center sm:text-right">
            Aircon Cleaning · Alabel, Sarangani Province, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
