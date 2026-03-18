import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Saudi Elite Academy - Empowering Tomorrow's Leaders",
  description: "A prestigious institution committed to academic excellence, national values, and preparing students for global leadership in modern Saudi Arabia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${publicSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
