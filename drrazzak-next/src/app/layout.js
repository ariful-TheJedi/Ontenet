import "./globals.css";
import "./app.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


import ContactLayoutClient from "@/components/ContactLayoutClient";


const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ✅ Metadata for SEO
export const metadata = {
  metadataBase: new URL("https://www.drabdurrazzak.com"),
  // title: {
  //   default: " Dr. Muhammad Abdur Razzak - Certified Transplant Nephrologist",
  //   template: "%s | Dr. Muhammad Abdur Razzak - Certified Transplant Nephrologist",
  // },
  description:
    "Official website of Dr. Muhammad Abdur Razzak, transplant nephrologist specializing in kidney transplant and renal care.",
  keywords: [
    "Transplant Nephrologist",
    "kidney transplant specialist",
    "renal specialist",
    "Dhaka doctor",
    "Dr. Razzak",
    "Popular Diagnostic Center Limited",
    "Assistant Professor",
    "National Institute of Kidney Diseases and Urology",
    "Bangladesh"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.drabdurrazzak.com",
  },


  // 🌐 Global Open Graph
  openGraph: {
    title: "Dr. Muhammad Abdur Razzak | Transplant Nephrologist",
    description:
      "Learn more about kidney transplant and nephrology services offered by Dr. Razzak.",
    url: "https://www.drabdurrazzak.com",
    siteName: "Dr. Abdur Razzak",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: API_URL+"/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-logo.png",
        width: 1200,
        height: 630,
        alt: "Dr. Razzak Nephrology Website Preview",
      },
    ],
  },

  // 🐦 Global Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Dr. Muhammad Abdur Razzak | Transplant Nephrologist",
    description: "Expert in kidney transplant and renal care.",
    images: [
      API_URL+"/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-logo.png",
    ],
    creator: "@DrRazzak",
  },
};





// ✅ Root layout component
export default function RootLayout({ children }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;


  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Muhammad Abdur Razzak",
    "url": "https://www.drabdurrazzak.com",
    "image": API_URL+"/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-logo.png",
    "description": "Transplant nephrologist specializing in kidney transplants and renal care.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Medical Avenue",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "sameAs": [
      "https://www.facebook.com/nephrology.bd",
      "https://www.linkedin.com/in/muhammad-abdur-razzak-mbbs-md-fasn-60a594128",
      "https://x.com/abdurrazzak103",
      "https://www.youtube.com/@dr.muhammadabdurrazzak9632"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={API_URL+"/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-logo.png"} />
         <meta name="robots" content="index, follow" />
        {/* script schema */}
         <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
         
         {/* google analytics */}
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B99PKEBPG7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B99PKEBPG7');
          `}
        </Script>


        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>

        {/* Roboto Condensed font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          referrerPolicy="no-referrer"
        />

        {/* Preload important hero images */}
        <link
          rel="preload"
          as="image"
          href="https://sub.drabdurrazzak.com/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-compressed.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://sub.drabdurrazzak.com/wp-content/uploads/2025/10/bio-pic-br-muhammad-abdur-razzak-compressed.webp"
          type="image/webp"
        />
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        <Header/>
          <main>
              <ContactLayoutClient>{children}</ContactLayoutClient>
          </main>
        <Footer/>
      </body>
    </html>
  );
}
