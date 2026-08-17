import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import ScrollToTop from "@/components/ScrollToTop";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bookhavenmart.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BookHaven Mart | Botanical Sanctuary & Cozy Digital Reading",
    template: "%s | BookHaven Mart",
  },
  description: "Find your quiet reading sanctuary at BookHaven Mart. Discover soothing literature, cozy digital reads, and curated EPUB e-books.",
  keywords: ["BookHaven Mart", "Cozy Bookstore", "Reading Haven", "Digital Sanctuary", "Botanical Bookstore"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "BookHaven Mart | Botanical Sanctuary & Cozy Digital Reading",
    description: "Curated literature and soothing digital EPUB reads at BookHaven Mart.",
    url: siteUrl,
    siteName: "BookHaven Mart",
    images: [{ url: "/icon.svg", width: 1200, height: 630, alt: "BookHaven Mart" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body 
        className="min-h-full flex flex-col font-jakarta bg-[#F5F3EF] text-[#2E4A3E]"
        suppressHydrationWarning
      >
        <CartProvider>
          <ScrollToTop />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
