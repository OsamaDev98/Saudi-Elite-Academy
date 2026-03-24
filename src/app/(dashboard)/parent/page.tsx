"use client";

import { useState } from "react";
import { Users, CreditCard, Bell, Calendar as CalendarIcon, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ParentOverviewPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">أهلاً بك، عبدالرحمن</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">ولي أمر - متابعة الأبناء والإدارة المالية</p>
        </div>
        <Link href="/parent/finance" className="bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10 flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          تسديد الرسوم
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Quick Summary Cards */}
        <div className="glass-card p-6 flex flex-col justify-between border-b-4 border-b-primary">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">3</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">الأبناء المسجلين</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between border-b-4 border-b-rose-500">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded-lg border border-rose-100 dark:border-rose-800/30">
              مستحق الدفع
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">2,500 <span className="text-sm text-slate-400">ر.س</span></h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">الرصيد المتبقي</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between border-b-4 border-b-amber-500">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Bell className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-lg border border-amber-100 dark:border-amber-800/30">
              جديد
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">4</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">رسائل غير مقروءة</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between border-b-4 border-b-purple-500">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <CalendarIcon className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">غداً</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">اجتماع المعلمين</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Linked Children Summary */}
        <div className="glass-card flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">الأبناء في الأكاديمية</h2>
            <Link href="/parent/children" className="text-sm text-primary font-bold hover:underline flex items-center">
              عرض التفاصيل <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {[
              { name: "عمر عبدالرحمن", grade: "الصف الثالث الثانوي", attendance: "98%", status: "ممتاز", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=60" },
              { name: "سارة عبدالرحمن", grade: "الصف الأول المتوسط", attendance: "100%", status: "منتظم", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&auto=format&fit=crop&q=60" },
              { name: "خالد عبدالرحمن", grade: "الصف الرابع الابتدائي", attendance: "95%", status: "يحتاج متابعة", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&auto=format&fit=crop&q=60" }
            ].map((child, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-primary/20">
                    <Image src={child.image} alt={child.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{child.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{child.grade}</p>
                  </div>
                </div>
                <div className="text-left flex flex-col items-end gap-1">
                  <span className={`text-xs font-bold px-2 py-1 rounded-md ${child.status === 'ممتاز' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' :
                      child.status === 'منتظم' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' :
                        'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
                    }`}>{child.status}</span>
                  <span className="text-xs text-slate-500">حضور: <strong className="text-slate-900 dark:text-white">{child.attendance}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Notifications & Invoices */}
        <div className="flex flex-col gap-6">
          <div className="glass-card flex-1">
            <div className="p-6 border-b border-slate-100 dark:border-white/10">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">الفواتير المستحقة</h2>
            </div>
            <div className="p-6">
              <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-rose-900 dark:text-rose-100 text-sm">القسط الثاني - خالد عبدالرحمن</h4>
                    <p className="text-xs text-rose-700/70 dark:text-rose-300/70 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      يستحق بعد 5 أيام
                    </p>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
                  <span className="font-black text-rose-700 dark:text-rose-400">2,500 ر.س</span>
                  <button onClick={() => showToast('جاري تحويلك لصفحة السداد...')} className="text-xs font-bold bg-rose-600 text-white px-3 py-1.5 rounded-lg hover:bg-rose-700 transition-colors shadow-sm">دفع الآن</button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card flex-1">
            <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">أحدث الرسائل والإعلانات</h2>
              <Link href="/parent/messages" className="text-xs text-primary font-bold hover:underline">عرض الصندوق</Link>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-white/5">
              <div className="p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">دعوة لاجتماع أولياء الأمور</h4>
                  <p className="text-xs text-slate-500 line-clamp-1">السيد ولي الأمر المكرم، يسرنا دعوتكم لحضور الاجتماع الفصلي...</p>
                  <p className="text-[10px] text-slate-400 mt-2">الإدارة • منذ ساعتين</p>
                </div>
              </div>
              <div className="p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">تحديث بخصوص نتيجة سارة</h4>
                  <p className="text-xs text-slate-500 line-clamp-1">مرحباً، أود إبلاغكم بأن سارة أظهرت تحسناً ملحوظاً في...</p>
                  <p className="text-[10px] text-slate-400 mt-2">أ. فاطمة (معلمة الرياضيات) • أمس</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
}
