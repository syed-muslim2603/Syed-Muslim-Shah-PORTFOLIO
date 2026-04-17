import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muslim Shah | E-Commerce Growth Specialist",
  description: "Personal Portfolio of Muslim Shah - E-Commerce Growth Specialist",
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
      <body className="min-h-full flex flex-col no-scrollbar">
        {children}
      </body>
    </html>
  );
}
