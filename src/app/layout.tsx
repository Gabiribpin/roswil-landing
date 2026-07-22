import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s · ${siteConfig.brandName}`,
  },
  description: siteConfig.seo.description,
  applicationName: siteConfig.brandName,
  keywords: [
    "costura",
    "oficina de costura",
    "facção",
    "overloque",
    "máquina reta",
    "ajustes de roupa",
    "confecção",
    siteConfig.brandName,
    siteConfig.professionalName,
  ],
  authors: [{ name: siteConfig.professionalName }],
  creator: siteConfig.brandName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.seo.url,
    siteName: siteConfig.brandName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [
      {
        url: "/images/logo-roswil.png",
        width: 800,
        height: 800,
        alt: `Logo ${siteConfig.brandName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/images/logo-roswil.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
