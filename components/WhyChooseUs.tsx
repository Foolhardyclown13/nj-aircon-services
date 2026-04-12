import Image from "next/image";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Why Choose NJ Aircon Services?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We&apos;re your trusted local aircon cleaning experts in Sarangani
            Province and General Santos City.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <span className="text-5xl block mb-4">{item.icon}</span>
              <h3 className="font-poppins font-bold text-white text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature image */}
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-2xl">
          <Image
            src="/images/ac-cleaning-2.jpg"
            alt="NJ Aircon Services technician performing professional aircon cleaning in General Santos City"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-8">
            <p className="text-white font-poppins font-semibold text-xl max-w-lg">
              &ldquo;Quality service you can trust, at prices you can
              afford.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
