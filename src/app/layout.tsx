import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Σογο LTD | Premium Nursery & Garden Supplies Cyprus',
  description: 'Your trusted source for high-quality plants, seeds, and garden essentials in Cyprus. Cultivating beauty and expertise since 1995.',
  keywords: ["nursery Cyprus, garden supplies Cyprus, plants Cyprus, seeds Cyprus, gardening Cyprus, landscaping Cyprus, Σογο LTD, outdoor living, flower shop, Cyprus horticulture"],
  openGraph: {
    "title": "Σογο LTD | Premium Nursery & Garden Supplies Cyprus",
    "description": "Your trusted source for high-quality plants, seeds, and garden essentials in Cyprus. Cultivating beauty and expertise since 1995.",
    "url": "https://www.sogo-ltd.cy",
    "siteName": "Σογο LTD",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/high-angle-view-gardening-gloves-watering-can-near-fresh-flower-plants-greenhouse_23-2147948245.jpg",
        "alt": "Lush green garden with vibrant flowers"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Σογο LTD | Premium Nursery & Garden Supplies Cyprus",
    "description": "Your trusted source for high-quality plants, seeds, and garden essentials in Cyprus. Cultivating beauty and expertise since 1995.",
    "images": [
      "http://img.b2bpic.net/free-photo/high-angle-view-gardening-gloves-watering-can-near-fresh-flower-plants-greenhouse_23-2147948245.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
