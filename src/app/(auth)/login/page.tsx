"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Lock, Mail, ArrowRight, BookOpen, User, ShieldCheck, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/supabase/context";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await login(email, password);
      // Redirect to the selected dashboard
      router.push(`/${role}`);
    } catch (err: any) {
      setError(err.message || "حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary/10">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"
          alt="Academy Students"
          fill
          className="object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>
        <div className="absolute inset-0 islamic-pattern opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-16 text-white text-right">
          <h2 className="text-5xl font-black mb-6 drop-shadow-md">بوابة <span className="text-gradient">النخبة</span> الإلكترونية</h2>
          <p className="text-xl text-slate-300 max-w-lg ml-auto font-medium leading-relaxed">
            منصتك الرقمية المتكاملة لمتابعة الأداء الأكاديمي، التواصل مع المعلمين، وإدارة رحلتك التعليمية بكل يسر وسهولة.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl rounded-full"></div>

        <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-10">
            <Link href="/" className="inline-block mb-8 hover:scale-105 transition-transform duration-500">
              <div className="w-20 h-20 bg-gradient-to-tr from-primary to-emerald-400 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-xl shadow-primary/20 transform rotate-3 hover:rotate-6 transition-all">
                <span className="text-4xl font-black -rotate-3 hover:-rotate-6 transition-all">ن</span>
              </div>
            </Link>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">تسجيل الدخول</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide">مرحباً بك مجدداً في النخبة السعودية</p>
          </div>

          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-premium border border-white/20 dark:border-white/10">
            {/* Role Switcher */}
            <div className="flex bg-slate-100/50 dark:bg-black/30 p-1.5 rounded-2xl mb-10 border border-slate-200/50 dark:border-white/5 relative overflow-hidden">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`cursor-pointer flex-1 py-3 px-1 sm:px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 relative z-10 ${role === "student" ? "bg-white dark:bg-white/10 text-primary shadow-sm" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
              >
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                طالب
              </button>
              <button
                type="button"
                onClick={() => setRole("parent")}
                className={`cursor-pointer flex-1 py-3 px-1 sm:px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 relative z-10 ${role === "parent" ? "bg-white dark:bg-white/10 text-primary shadow-sm" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                ولي أمر
              </button>
              <button
                type="button"
                onClick={() => setRole("staff")}
                className={`cursor-pointer flex-1 py-3 px-1 sm:px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 relative z-10 ${role === "staff" ? "bg-white dark:bg-white/10 text-primary shadow-sm" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
              >
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                موظف
              </button>
              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`cursor-pointer flex-1 py-3 px-1 sm:px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 relative z-10 ${role === "admin" ? "bg-white dark:bg-white/10 text-primary shadow-sm" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
              >
                <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                إدارة
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-2xl text-destructive text-sm font-bold text-center animate-shake">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-200 mb-2">البريد الإلكتروني / رقم الطالب</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-50/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl py-4 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-medium text-left hover:border-primary/30"
                    placeholder="user@saudi-elite.edu.sa"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-bold text-slate-900 dark:text-slate-200">كلمة المرور</label>
                  <Link href="/reset-password" className="text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-colors">نسيت كلمة المرور؟</Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-slate-50/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl py-4 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-medium text-left hover:border-primary/30"
                    placeholder="••••••••"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      دخول البوابة
                      <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    setIsSubmitting(true);
                    try {
                      await login(`demo-${role}@saudi-elite.edu.sa`, "demo123");
                      router.push(`/${role}`);
                    } catch (err: any) {
                      setError(err.message);
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  disabled={isSubmitting}
                  className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 font-bold py-3 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  Demo login
                </button>
              </div>
            </form>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              ليس لديك حساب؟ <Link href="/careers" className="font-black text-primary hover:text-primary-hover hover:underline transition-colors">قدم طلب التحاق الآن</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
