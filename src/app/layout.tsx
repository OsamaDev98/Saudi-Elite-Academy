import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { AuthProvider } from "@/lib/supabase/context";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
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
      <body className={`${cairo.variable} antialiased min-h-screen flex flex-col`}>
        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
