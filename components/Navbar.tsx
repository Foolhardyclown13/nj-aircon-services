import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="NJ Aircon Services logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <span className="font-poppins font-bold text-navy text-lg leading-tight">
            NJ Aircon<br />
            <span className="text-primary text-sm font-semibold">Services</span>
          </span>
        </div>
        <a
          href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
          className="bg-primary text-white font-poppins font-semibold text-sm px-4 py-2 rounded-full hover:bg-sky-600 transition-colors"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}
