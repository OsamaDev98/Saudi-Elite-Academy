"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { School, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // or "" depends, but usually "auto" or "" is fine
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Don't show header on dashboard routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-primary/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="bg-primary group-hover:bg-primary-hover transition-colors p-2.5 rounded-xl shadow-lg shadow-primary/20 transform group-hover:scale-105 duration-300">
              <School className="text-white h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-50 group-hover:text-primary transition-colors duration-300">
                أكاديمية النخبة
              </span>
              <span className="text-[11px] font-bold tracking-[0.3em] text-accent-gold uppercase leading-none mt-1.5">
                السعودية
              </span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-[15px] font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">الرئيسية</Link>
            <Link href="/about" className="text-[15px] font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">عن الأكاديمية</Link>
            <Link href="/admissions" className="text-[15px] font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">القبول</Link>
            <Link href="/academics" className="text-[15px] font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">البرامج</Link>
            <Link href="/contact" className="text-[15px] font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">اتصل بنا</Link>
          </nav>
          <div className="flex items-center gap-5">
            <Link href="/login" className="hidden md:flex bg-gradient-to-l from-primary to-emerald-400 text-white text-[15px] font-bold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
              بوابة الدخول
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-slate-900 dark:text-slate-100 p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu & Backdrop via Portal */}
      {isMobileMenuOpen && typeof document !== "undefined" && createPortal(
        <div className="lg:hidden absolute inset-0 z-[100] h-screen w-screen flex flex-col pointer-events-none">
          <div
            className="fixed top-[96px] left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm pointer-events-auto transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-[96px] left-0 w-full bg-white dark:bg-background-dark border-b border-primary/10 shadow-lg px-4 pt-4 pb-8 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 pointer-events-auto">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-white/5 p-3 rounded-xl transition-colors">الرئيسية</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-white/5 p-3 rounded-xl transition-colors">عن الأكاديمية</Link>
            <Link href="/admissions" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-white/5 p-3 rounded-xl transition-colors">القبول</Link>
            <Link href="/academics" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-white/5 p-3 rounded-xl transition-colors">البرامج</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-white/5 p-3 rounded-xl transition-colors">اتصل بنا</Link>
            <div className="pt-4 border-t border-slate-100 dark:border-white/5">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full bg-gradient-to-l from-primary to-emerald-400 text-white text-[16px] font-bold px-6 py-4 rounded-xl shadow-md">
                بوابة الدخول
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}

