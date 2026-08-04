import type { Metadata } from "next";
import { Rubik, Manrope } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const baseUrl = "https://www.rhsplbesan.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "RHSPL | Premium Chana Dal & Besan Manufacturer & Bulk Supplier",
    template: "%s | RHSPL Manufacturing",
  },
  description: "RHSPL (Ramkaran Heeralal & Sons) is a leading manufacturer & bulk supplier of premium Chana Dal, Besan (Gram Flour), Chana Gota, Chana Churi, and Husk in Chittorgarh, Rajasthan.",
  keywords: [
    "RHSPL Besan",
    "Ramkaran Heeralal Sons",
    "Chana Dal Bulk Supplier",
    "Besan Manufacturer India",
    "Gram Flour Bulk Supplier",
    "Chittorgarh Besan Mill",
    "Besan Processing Plant",
    "Chana Gota Supplier",
    "Chana Churi Feed",
    "Sortex Chana Dal",
    "Superfine Besan Manufacturer"
  ],
  authors: [{ name: "Ramkaran Heeralal & Sons (RHSPL)" }],
  creator: "RHSPL",
  publisher: "Ramkaran Heeralal & Sons",
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "RHSPL | Premium Chana Dal & Besan Manufacturer & Bulk Supplier",
    description: "Superior-Grade Chana Dal and Besan manufacturer providing 1500 Kg/Hr processing capacity to leading food manufacturers and wholesalers nationwide.",
    url: baseUrl,
    siteName: "RHSPL - Ramkaran Heeralal & Sons",
    images: [
      {
        url: "/images/hero_factory.webp",
        width: 1200,
        height: 630,
        alt: "RHSPL Chana Dal and Besan Processing Plant Facility",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RHSPL | Premium Chana Dal & Besan Manufacturer",
    description: "Leading manufacturer and bulk supplier of superior-grade Chana Dal and Besan nationwide.",
    images: ["/images/hero_factory.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization", "ManufacturingBusiness"],
  "@id": `${baseUrl}/#organization`,
  "name": "Ramkaran Heeralal & Sons (RHSPL)",
  "alternateName": "RHSPL",
  "url": baseUrl,
  "logo": `${baseUrl}/images/rhspl_official_logo.png`,
  "image": `${baseUrl}/images/hero_factory.webp`,
  "description": "RHSPL (Ramkaran Heeralal & Sons) is a premier manufacturer and bulk supplier of superior-grade Chana Dal, Besan (Gram Flour), Chana Gota, Chana Churi, and Husk nationwide.",
  "foundingDate": "2017",
  "telephone": "+919001208781",
  "email": "rhsplbesan@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Araji No.- 368 Mi., Industrial Area Mandaldeh",
    "addressLocality": "Chittorgarh",
    "addressRegion": "Rajasthan",
    "postalCode": "312201",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "24.8887",
    "longitude": "74.6269"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "priceRange": "$$",
  "sameAs": [
    "https://wa.me/919001208781"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${manrope.variable} font-sans h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#04062a] focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#775a17]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

