"use client";

import { useState } from "react";
import { BookOpen, Calendar as CalendarIcon, FileCheck, Award, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function StudentOverviewPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownloadPDF = (title: string) => {
    const pdfData = "JVBERi0xLjQKJcOkw7zDtsOUCjEgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDIgMCBSPj4KZW5kb2JqCjIgMCBvYmoKPDwvVHlwZS9QYWdlcy9LaWRzWzMgMCBSXS9Db3VudCAxPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZS9QYWdlL01lZGlhQm94WzAgMCA1OTUgODQyXS9QYXJlbnQgMiAwIFIvUmVzb3VyY2VzPDwvRm9udDw8L0YxIDQgMCBSPj4+Pi9Db250ZW50cyA1IDAgUj4+CmVuZG9iago0IDAgb2JqCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1R5cGUxL0Jhc2VGb250L0hlbHZldGljYT4+CmVuZG9iago1IDAgb2JqCjw8L0xlbmd0aCA0ND4+CnN0cmVhbQpCVAovRjEgMjQgVGYKMTAwIDcwMCBUZAooU2F1ZGkgRWxpdGUgQWNhZGVteSkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTIzIDAwMDAwIG4gCjAwMDAwMDAyMzEgMDAwMDAgbiAKMDAwMDAwMDI4OCAwMDAwMCBuIAp0cmFpbGVyCjw8L1Jvb3QgMSAwIFIvU2l6ZSA2Pj4Kc3RhcnR4cmVmCjM4MwolJUVPRgo=";
    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,${pdfData}`;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`تم تنزيل ${title} بنجاح!`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">أهلاً بك، عمر</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">طالب - الصف الثالث الثانوي | علوم طبيعية</p>
        </div>
        <button onClick={() => handleDownloadPDF("شهادة_التفوق")} className="bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10">
          تحميل الشهادة
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
              <TrendingUp className="w-3 h-3 ml-1" />
              +2.5%
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">98.5%</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">المعدل التراكمي</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-lg border border-slate-200 dark:border-white/10">
              مكتمل
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">12</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">الواجبات المنجزة</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-lg border border-red-100 dark:border-red-800/30">
              2 غياب
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">95%</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">نسبة الحضور</p>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-lg border border-slate-200 dark:border-white/10">
              الفصل الثاني
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">6</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">المواد الدراسية</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Grades Table */}
        <div className="glass-card lg:col-span-2 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">أحدث الدرجات</h2>
            <Link href="/student/grades" className="text-sm cursor-pointer text-primary font-bold hover:underline">السجل المكتمل</Link>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-right">
              <thead className="bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm">
                <tr>
                  <th className="py-4 px-6 font-semibold">المادة</th>
                  <th className="py-4 px-6 font-semibold">المعلم</th>
                  <th className="py-4 px-6 font-semibold">الدرجة</th>
                  <th className="py-4 px-6 font-semibold">التقدير</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {[
                  { subject: "الرياضيات", teacher: "أ. أحمد خالد", grade: "98/100", status: "ممتاز" },
                  { subject: "الفيزياء", teacher: "أ. محمد عبدالله", grade: "95/100", status: "ممتاز" },
                  { subject: "الكيمياء", teacher: "أ. سعد فهد", grade: "89/100", status: "جيد جداً" },
                  { subject: "اللغة الإنجليزية", teacher: "أ. عمر طارق", grade: "100/100", status: "ممتاز" }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{item.subject}</span>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{item.teacher}</td>
                    <td className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">{item.grade}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 border rounded-full text-xs font-bold ${item.status === "ممتاز" ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/30" :
                        "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800/30"
                        }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Schedule/Up-Next */}
        <div className="glass-card flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">الجدول اليومي</h2>
            <Link href="/student/schedule" className="text-sm text-primary font-bold hover:underline">جدول الأسبوع</Link>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-6">
            {[
              { title: "الرياضيات", room: "معمل 101", time: "08:00 ص - 08:45 ص", color: "bg-blue-500", current: false },
              { title: "الفيزياء", room: "معمل 204", time: "08:50 ص - 09:35 ص", color: "bg-primary", current: true },
              { title: "استراحة", room: "الساحة الرئيسية", time: "09:35 ص - 10:05 ص", color: "bg-slate-300 dark:bg-slate-600", current: false },
              { title: "الكيمياء", room: "معمل 202", time: "10:05 ص - 10:50 ص", color: "bg-purple-500", current: false },
            ].map((event, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className={`w-3 h-3 rounded-full mt-1.5 ${event.color} ${event.current ? 'ring-4 ring-primary/20 animate-pulse' : ''}`} style={{ right: '0' }}></div>
                <div className="flex-1 border-r-2 pr-4 py-1 relative" style={{ borderColor: event.current ? '#0ca845' : 'transparent' }}>
                  <h4 className={`text-sm font-bold mb-1 transition-colors ${event.current ? 'text-primary' : 'text-slate-900 dark:text-white group-hover:text-primary'}`}>{event.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                    <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded text-[10px]">{event.room}</span>
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
