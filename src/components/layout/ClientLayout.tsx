"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardOrAuth = pathname?.startsWith("/admin") || 
                            pathname?.startsWith("/student") || 
                            pathname?.startsWith("/parent") || 
                            pathname?.startsWith("/staff") ||
                            pathname?.startsWith("/login");

  return (
    <>
      {!isDashboardOrAuth && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isDashboardOrAuth && <Footer />}
    </>
  );
}
