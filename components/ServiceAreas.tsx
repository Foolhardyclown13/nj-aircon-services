import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-light-blue">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            We Serve Alabel, General Santos City &amp; South Cotabato
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We cover Alabel and nearby cities — fast, reliable service wherever
            you are in Sarangani Province and South Cotabato.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center border border-sky-100"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-primary"
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
              <h3 className="font-poppins font-bold text-navy text-lg mb-2">
                {area.name}
              </h3>
              <p className="text-gray-500 text-sm">{area.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
          <p className="text-navy font-poppins font-semibold text-lg">
            Not sure if we cover your area?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline"
            >
              Send us a message
            </a>{" "}
            and we&apos;ll let you know!
          </p>
        </div>
      </div>
    </section>
  );
}
