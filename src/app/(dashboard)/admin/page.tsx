"use client";

import { useState } from "react";
import { Users, GraduationCap, DollarSign, TrendingUp, Edit, Trash2, Calendar as CalendarIcon, FileCheck, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminOverviewPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const [enrollments, setEnrollments] = useState([
    { id: 1, name: "أحمد بندر السالم", grade: "الصف الرابع الابتدائي", date: "15 مارس 2026", status: "مكتمل", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=60" },
    { id: 2, name: "سارة فهد العتيبي", grade: "رياض الأطفال - KG2", date: "14 مارس 2026", status: "قيد المراجعة", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&auto=format&fit=crop&q=60" },
    { id: 3, name: "عبدالرحمن الشمري", grade: "الصف الأول الثانوي", date: "12 مارس 2026", status: "بانتظار الدفع", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&auto=format&fit=crop&q=60" },
    { id: 4, name: "لجين خالد الدوسري", grade: "الصف السادس الابتدائي", date: "10 مارس 2026", status: "مكتمل", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&auto=format&fit=crop&q=60" }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">نظرة عامة على الأكاديمية</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">إحصائيات وتقارير العام الدراسي 2024-2025</p>
        </div>
        <button
          onClick={() => {
            const content = `
              <div style="font-family: Arial, sans-serif; direction: rtl; padding: 40px; background: #fff; max-width: 800px; margin: auto;">
                <div style="border-bottom: 2px solid #0f172a; padding-bottom: 20px; margin-bottom: 20px;">
                    <h1 style="color: #0f172a; margin: 0;">أكاديمية النخبة السعودية</h1>
                    <p style="color: #64748b; margin: 5px 0 0 0;">التقرير الشهري العام</p>
                </div>
                <h2 style="color: #334155;">إحصائيات الأكاديمية - ${new Date().toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' })}</h2>
                <div style="display: flex; justify-content: space-between; margin-bottom: 30px; background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <div><p><strong>إجمالي الطلاب:</strong> 1,248 (+12%)</p><p><strong>نسبة الحضور:</strong> 98.5%</p></div>
                    <div><p><strong>هيئة التدريس:</strong> 142 (+5%)</p><p><strong>الرسوم المحصلة:</strong> 85%</p></div>
                </div>
                <div style="margin-top: 40px; font-size: 12px; color: #94a3b8; text-align: center;">
                    <p>هذه وثيقة تقرير معتمدة</p>
                    <p>تاريخ الإصدار: ${new Date().toLocaleDateString('ar-SA')}</p>
                </div>
              </div>
            `;
            const win = window.open('', '_blank');
            if (win) {
              win.document.write(content);
              win.document.close();
              win.focus();
              setTimeout(() => win.print(), 500);
            }
          }}
          className="bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10"
        >
          تحميل التقرير الشهري
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
              <TrendingUp className="w-3 h-3 ml-1" />
              +12%
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">1,248</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">إجمالي الطلاب</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
              <TrendingUp className="w-3 h-3 ml-1" />
              +5%
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">142</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">هيئة التدريس</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-lg border border-slate-200 dark:border-white/10">
              مستقر
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">85%</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">الرسوم المحصلة</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
              <TrendingUp className="w-3 h-3 ml-1" />
              +2%
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">98.5%</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">نسبة الحضور اليومية</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Enrollments Table */}
        <div className="glass-card lg:col-span-2 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">أحدث التسجيلات</h2>
            <Link href="/admin/latest-records" className="text-sm text-primary font-bold hover:underline">عرض الكل</Link>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-right">
              <thead className="bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm">
                <tr>
                  <th className="py-4 px-6 font-semibold">اسم الطالب</th>
                  <th className="py-4 px-6 font-semibold">المرحلة</th>
                  <th className="py-4 px-6 font-semibold">تاريخ التسجيل</th>
                  <th className="py-4 px-6 font-semibold">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {enrollments.map((student, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden relative bg-slate-100 dark:bg-white/10 ring-2 ring-primary/20">
                          <Image src={student.image} alt={student.name} fill className="object-cover" />
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white text-sm">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{student.grade}</td>
                    <td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400"><div className="flex items-center gap-1"><CalendarIcon className="w-4 h-4" />{student.date}</div></td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 border rounded-full text-xs font-bold ${student.status === "مكتمل" ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/30" :
                        student.status === "قيد المراجعة" ? "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800/30" :
                          "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-800/30"
                        }`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="glass-card flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">الفعاليات القادمة</h2>
            <Link href="/admin/upcoming-events" className="text-sm text-primary font-bold hover:underline">الجدول</Link>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-6">
            {[
              { title: "اجتماع أولياء الأمور", date: "20 مارس", time: "05:00 م - 08:00 م", color: "bg-blue-500 dark:bg-blue-400" },
              { title: "معرض العلوم والتكنولوجيا", date: "25 مارس", time: "09:00 ص - 01:00 م", color: "bg-primary" },
              { title: "اختبارات منتصف الفصل", date: "02 أبريل", time: "أسبوع كامل", color: "bg-amber-500 dark:bg-amber-400" },
              { title: "اليوم الرياضي المفتوح", date: "10 أبريل", time: "08:00 ص - 02:00 م", color: "bg-purple-500 dark:bg-purple-400" },
            ].map((event, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="flex gap-4 border-r-2 py-1 mr-4" style={{ borderColor: i === 1 ? '#0ca845' : '' }}>
                  <div className="mr-4 w-14 shrink-0 flex flex-col items-center justify-center bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/10 group-hover:border-primary/50 transition-colors py-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{event.date.split(" ")[0]}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{event.date.split(" ")[1]}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className={`w-2 h-2 rounded-full absolute -ml-4 mt-1.5 ${event.color}`} style={{ left: 'calc(100% - 5px)' }}></div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{event.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
