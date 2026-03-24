"use client";

import { useState } from "react";
import { Users, FileCheck, Calendar as CalendarIcon, Clock, CheckCircle2, TrendingUp, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeacherOverviewPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cancelingPeriodIndex, setCancelingPeriodIndex] = useState<number | null>(null);

  const [periods, setPeriods] = useState([
    { time: "08:00 ص - 08:45 ص", class: "الصف الثالث الثانوي - أ", subject: "الرياضيات 6", status: "completed" },
    { time: "08:50 ص - 09:35 ص", class: "الصف الثالث الثانوي - ب", subject: "الرياضيات 6", status: "active" },
    { time: "10:05 ص - 10:50 ص", class: "الصف الثاني الثانوي - أ", subject: "الرياضيات 4", status: "upcoming" },
    { time: "11:30 ص - 12:15 م", class: "الصف الأول المتوسط - ج", subject: "رياضيات", status: "upcoming" }
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">أهلاً بك، أ. أحمد</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">معلم رياضيات - المرحلة الثانوية والمتوسطة</p>
        </div>
        <Link href="/staff/grading" className="bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10 flex items-center gap-2">
          <FileCheck className="w-4 h-4" />
          رصد الدرجات السريع
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-lg border border-blue-100 dark:border-blue-800/30">
              اليوم
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">5</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">حصص مجدولة</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded-lg border border-rose-100 dark:border-rose-800/30">
              يتطلب إجراء
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">12</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">واجب بانتظار التصحيح</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
              متميز
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">89%</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">متوسط أداء الفصول</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">142</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">طالب في فصولي</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="glass-card lg:col-span-1 flex flex-col border-t-4 border-t-primary">
          <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">حصص اليوم</h2>
            <Link href="/staff/schedule" className="text-sm text-primary font-bold hover:underline">الجدول بالكامل</Link>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            {periods.map((period, i) => (
              <div key={i} className={`p-4 rounded-xl border ${period.status === 'active' ? 'bg-primary/5 border-primary shadow-sm ring-1 ring-primary/20' :
                period.status === 'completed' ? 'opacity-60 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10' :
                period.status === 'cancelled' ? 'bg-rose-50/50 dark:bg-rose-900/10 border-rose-200 dark:border-rose-800/30' :
                  'bg-white dark:bg-black/20 dark:border-white/5 hover:border-primary/50 transition-colors'
                }`}>
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-md ${period.status === 'active' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                    }`}>
                    {period.time}
                  </span>
                  {period.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  {period.status === 'active' && <span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span></span>}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{period.class}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{period.subject}</p>

                {period.status === 'active' && (
                  <div className="mt-4 pt-4 border-t border-primary/20 flex gap-2">
                    <Link href="/staff/student-preparation" className="flex-1 text-xs font-bold bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm text-center flex items-center justify-center">تحضير الطلاب</Link>
                    <button 
                      onClick={() => setCancelingPeriodIndex(i)} 
                      className="flex-1 text-xs font-bold bg-white text-rose-600 border border-rose-200 py-2 rounded-lg hover:bg-rose-50 transition-colors"
                    >
                      إلغاء الحصة
                    </button>
                  </div>
                )}
                {period.status === 'cancelled' && (
                  <div className="mt-4 pt-4 border-t border-rose-100 dark:border-rose-900/30 flex justify-center">
                    <span className="text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-4 py-1.5 rounded-lg border border-rose-200 dark:border-rose-800/30">
                      تم الغاء الحصة
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks & Recent Submissions */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="glass-card flex-1">
            <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">مهام بانتظار الإنجاز</h2>
              <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-black px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800/30">
                12 مهمة
              </span>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-white/5">
              {[
                { title: "تصحيح واجب المعادلات التربيعية", desc: "الصف الثالث الثانوي - أ", count: 28, due: "اليوم" },
                { title: "اعتماد درجات المشاركة الشهرية", desc: "جميع الفصول", count: 142, due: "غداً" },
                { title: "إعداد اختبار الفصل الثاني", desc: "الصف الثاني الثانوي", count: 1, due: "بعد 3 أيام" }
              ].map((task, i) => (
                <div key={i} className="p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-500 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{task.title}</h4>
                      <p className="text-xs text-slate-500">{task.desc} • {task.count} عنصر</p>
                    </div>
                  </div>
                  <Link href="/staff/missions" className="text-xs font-bold bg-slate-100 dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg transition-colors border border-slate-200 dark:border-white/10 shadow-sm min-w-[70px] text-center">
                    ابدأ
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {cancelingPeriodIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 p-6">
            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-2">تأكيد إلغاء الحصة</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 font-semibold">هل أنت متأكد من رغبتك في إلغاء هذه الحصة؟ لا يمكن التراجع عن هذا الإجراء وسيتم إشعار الطلاب والإدارة بذلك.</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setCancelingPeriodIndex(null)}
                className="px-5 py-2.5 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                تراجع
              </button>
              <button
                onClick={() => {
                  showToast('تم الغاء الحصة بنجاح');
                  setPeriods(periods.map((p, idx) => idx === cancelingPeriodIndex ? { ...p, status: 'cancelled' } : p));
                  setCancelingPeriodIndex(null);
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-600/20 transition-all active:scale-95 flex items-center gap-2"
              >
                تأكيد الإلغاء
              </button>
            </div>
          </div>
        </div>
      )}

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
