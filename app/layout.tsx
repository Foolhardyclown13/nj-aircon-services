import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://njairconservices.com"),
  title: "Aircon Cleaning in Alabel & General Santos City | NJ Aircon Services",
  description:
    "Professional aircon cleaning and maintenance in Alabel, General Santos City, Malapatan, and Polomolok. NJ Aircon Services — affordable rates, experienced technicians in Sarangani Province.",
  keywords: [
    "aircon cleaning Alabel",
    "aircon cleaning General Santos City",
    "aircon cleaning Sarangani",
    "aircon maintenance GenSan",
    "aircon cleaning Polomolok",
    "aircon cleaning Malapatan",
    "aircon service Sarangani Province",
  ],
  openGraph: {
    title:
      "Aircon Cleaning in Alabel & General Santos City | NJ Aircon Services",
    description:
      "Professional aircon cleaning and maintenance in Alabel, General Santos City, Malapatan, and Polomolok. Affordable rates, experienced technicians.",
    type: "website",
    locale: "en_PH",
    siteName: "NJ Aircon Services",
    images: [
      {
        url: "/images/ac-cleaning-1.jpg",
        width: 1200,
        height: 630,
        alt: "Professional aircon cleaning service in Alabel and General Santos City",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alabel",
    addressRegion: "Sarangani Province",
    addressCountry: "PH",
  },
  areaServed: SERVICE_AREAS.map((area) => area.name),
  priceRange: "₱₱",
  image: "/images/logo.png",
  description:
    "Professional aircon cleaning and preventive maintenance services in Alabel, General Santos City, Malapatan, and Polomolok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
