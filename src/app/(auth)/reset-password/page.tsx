"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSent(true);
  };

  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary/10">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"
          alt="Academy Campus"
          fill
          className="object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>
        <div className="absolute inset-0 islamic-pattern opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-16 text-white text-right">
          <h2 className="text-5xl font-black mb-6 drop-shadow-md">بوابة <span className="text-gradient">النخبة</span> الإلكترونية</h2>
          <p className="text-xl text-slate-300 max-w-lg ml-auto font-medium leading-relaxed">
            نسعى دائماً لتوفير بيئة تعليمية آمنة وموثوقة. استعد حسابك بكل سهولة وتابع رحلتك معنا.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>

        <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-10">
            <Link href="/" className="inline-block mb-8 hover:scale-105 transition-transform duration-500">
              <div className="w-20 h-20 bg-gradient-to-tr from-primary to-emerald-400 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-xl shadow-primary/20 transform rotate-3 hover:rotate-6 transition-all">
                <span className="text-4xl font-black -rotate-3 hover:-rotate-6 transition-all">ن</span>
              </div>
            </Link>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">استعادة كلمة المرور</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide">
              {isSent
                ? "تم إرسال رابط استعادة كلمة المرور بنجاح"
                : "أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور"}
            </p>
          </div>

          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-premium border border-white/20 dark:border-white/10">
            {isSent ? (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">تفقد صندوق الوارد</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  لقد أرسلنا تعليمات استعادة كلمة المرور إلى بريدك الإلكتروني. يرجى مراجعة البريد الوارد أو المجلد غير الهام (Spam).
                </p>
                <div className="pt-4">
                  <Link
                    href="/login"
                    className="w-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    العودة لتسجيل الدخول
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-slate-200 mb-2">البريد الإلكتروني</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      required
                      className="w-full bg-slate-50/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl py-4 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-medium text-left hover:border-primary/30"
                      placeholder="user@saudi-elite.edu.sa"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 group"
                  >
                    إرسال رابط الاستعادة
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="text-center pt-2">
                  <Link href="/login" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors inline-flex items-center gap-2">
                    العودة لتسجيل الدخول
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
