import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Syed Muslim Shah | Technical Performance Marketer",
  description:
    "Technical Performance Marketer specializing in paid acquisition, e-commerce measurement, Shopify tracking diagnostics, and funnel analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased bg-[#121212] text-[#ededed]`}
    >
      <body className="min-h-full flex flex-col no-scrollbar">{children}</body>
    </html>
  );
}
