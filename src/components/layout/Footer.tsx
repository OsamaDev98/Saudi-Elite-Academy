"use client";
import { MapPin, Phone, Mail, ShieldCheck, Award, School, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background-dark text-slate-300 pt-24 pb-10 border-t-4 border-primary mt-auto relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-8 group">
              <div className="bg-primary/10 group-hover:bg-primary transition-colors p-3 rounded-2xl border border-primary/20 group-hover:border-primary">
                <School className="text-primary group-hover:text-white h-7 w-7 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">
                  أكاديمية النخبة
                </span>
                <span className="text-[10px] font-bold text-accent-gold uppercase leading-none tracking-[0.3em] mt-1.5">
                  السعودية
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
              بناء أسس مستقبل المملكة العربية السعودية من خلال التميز في التعليم وتطوير الشخصية القيادية.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-white text-lg mb-8 relative inline-block after:absolute after:-bottom-2 after:right-0 after:w-1/2 after:h-0.5 after:bg-primary">اتصل بنا</h5>
            <ul className="space-y-6 text-[15px] text-slate-400">
              <li className="flex gap-4 items-start group">
                <div className="mt-1 bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary h-5 w-5 shrink-0" />
                </div>
                <span className="leading-relaxed group-hover:text-slate-300 transition-colors">طريق الأمير تركي الأول، الرياض<br />المملكة العربية السعودية</span>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary h-5 w-5 shrink-0" />
                </div>
                <span dir="ltr" className="group-hover:text-slate-300 transition-colors font-mono">+966 11 123 4567</span>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary h-5 w-5 shrink-0" />
                </div>
                <span className="group-hover:text-slate-300 transition-colors">info@saudielite.edu.sa</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white text-lg mb-8 relative inline-block after:absolute after:-bottom-2 after:right-0 after:w-1/2 after:h-0.5 after:bg-primary">روابط سريعة</h5>
            <ul className="space-y-4 text-[15px] text-slate-400">
              <li><Link href="/careers" className="hover:text-accent-gold hover:translate-x-[-4px] transition-all flex items-center gap-2"><span>&bull;</span> فرص العمل</Link></li>
              <li><Link href="/about" className="hover:text-accent-gold hover:translate-x-[-4px] transition-all flex items-center gap-2"><span>&bull;</span> سياسات المدرسة</Link></li>
              <li><Link href="/about" className="hover:text-accent-gold hover:translate-x-[-4px] transition-all flex items-center gap-2"><span>&bull;</span> الصحة والسلامة</Link></li>
              <li><Link href="/contact" className="hover:text-accent-gold hover:translate-x-[-4px] transition-all flex items-center gap-2"><span>&bull;</span> الأسئلة الشائعة</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white text-lg mb-8 relative inline-block after:absolute after:-bottom-2 after:right-0 after:w-1/2 after:h-0.5 after:bg-primary">الاعتمادات</h5>
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all rounded-2xl flex items-center justify-center group">
                <ShieldCheck className="h-6 w-6 text-primary/40 group-hover:text-primary transition-colors" />
              </div>
              <div className="p-4 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all rounded-2xl flex items-center justify-center group">
                <Award className="h-6 w-6 text-primary/40 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 أكاديمية النخبة السعودية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8">
            <Link href="/about" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link href="/about" className="hover:text-white transition-colors">شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
