"use client";

import { useState } from "react";
import { BookOpen, TrendingUp, Award, Download, Filter, CheckCircle2 } from "lucide-react";

export default function StudentGradesPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [filterTerm, setFilterTerm] = useState("الفصل الثاني");
  const [showFilterMenu, setShowFilterMenu] = useState(false);

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

  const allGrades = [
    { subject: "الرياضيات 6", works: "20", mid: "29", final: "49", total: "98", grade: "A+", term: "الفصل الثاني" },
    { subject: "الفيزياء 4", works: "19", mid: "28", final: "48", total: "95", grade: "A+", term: "الفصل الثاني" },
    { subject: "الكيمياء 4", works: "18", mid: "25", final: "46", total: "89", grade: "B+", term: "الفصل الثاني" },
    { subject: "اللغة الإنجليزية", works: "20", mid: "30", final: "50", total: "100", grade: "A+", term: "الفصل الثاني" },
    { subject: "الأحياء 3", works: "19", mid: "27", final: "46", total: "92", grade: "A", term: "الفصل الثاني" },
    { subject: "الحاسب الآلي", works: "20", mid: "30", final: "49", total: "99", grade: "A+", term: "الفصل الثاني" },
    { subject: "الرياضيات 5", works: "18", mid: "28", final: "45", total: "91", grade: "A", term: "الفصل الأول" },
    { subject: "الفيزياء 3", works: "20", mid: "30", final: "48", total: "98", grade: "A+", term: "الفصل الأول" }
  ];

  const filteredGrades = allGrades.filter(g => filterTerm === "الجميع" || g.term === filterTerm);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">سجل الدرجات</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">تفاصيل النتيجة الأكاديمية للفصل الدراسي الثاني</p>
        </div>
        <div className="flex items-center gap-3 relative">
          <button onClick={() => setShowFilterMenu(!showFilterMenu)} className="flex items-center gap-2 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-bold py-2 px-4 rounded-xl border border-slate-200 dark:border-white/10 transition-colors text-sm shadow-sm">
            <Filter className="w-4 h-4" />
            تصفية
          </button>
          
          {showFilterMenu && (
            <div className="absolute top-12 right-0 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-20">
              <button onClick={() => { setFilterTerm("الجميع"); setShowFilterMenu(false); }} className={`w-full text-right px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 ${filterTerm === "الجميع" ? "text-primary font-bold bg-primary/5" : "text-slate-700 dark:text-slate-300"}`}>جميع الفصول</button>
              <button onClick={() => { setFilterTerm("الفصل الأول"); setShowFilterMenu(false); }} className={`w-full text-right px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 ${filterTerm === "الفصل الأول" ? "text-primary font-bold bg-primary/5" : "text-slate-700 dark:text-slate-300"}`}>الفصل الأول</button>
              <button onClick={() => { setFilterTerm("الفصل الثاني"); setShowFilterMenu(false); }} className={`w-full text-right px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 ${filterTerm === "الفصل الثاني" ? "text-primary font-bold bg-primary/5" : "text-slate-700 dark:text-slate-300"}`}>الفصل الثاني</button>
            </div>
          )}

          <button onClick={() => handleDownloadPDF("السجل_الأكاديمي")} className="flex items-center gap-2 bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2 px-4 rounded-xl transition-all text-sm border border-white/10">
            <Download className="w-4 h-4" />
            تحميل السجل
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 border-l-4 border-l-primary flex flex-col justify-center">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">المعدل التراكمي</h3>
          <p className="text-3xl font-black text-slate-900 dark:text-white">98.5%</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-blue-500 flex flex-col justify-center">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">الترتيب على الدفعة</h3>
          <p className="text-3xl font-black text-slate-900 dark:text-white">الثالث</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-amber-500 flex flex-col justify-center">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">الساعات المكتسبة</h3>
          <p className="text-3xl font-black text-slate-900 dark:text-white">125 <span className="text-sm font-medium text-slate-400">ساعة</span></p>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">سجل المواد الدراسية</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm">
              <tr>
                <th className="py-4 px-6 font-semibold rounded-br-lg">المادة</th>
                <th className="py-4 px-6 font-semibold">أعمال السنة</th>
                <th className="py-4 px-6 font-semibold">الاختبار النصفي</th>
                <th className="py-4 px-6 font-semibold">الاختبار النهائي</th>
                <th className="py-4 px-6 font-semibold">المجموع</th>
                <th className="py-4 px-6 font-semibold rounded-bl-lg">التقدير</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {filteredGrades.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">{item.subject}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.works}/20</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.mid}/30</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{item.final}/50</td>
                  <td className="py-4 px-6 font-black text-primary">{item.total}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 border rounded-xl text-sm font-bold shadow-sm ${
                      item.grade === "A+" || item.grade === "A" 
                        ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/30" 
                        : "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800/30"
                    }`}>
                      {item.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
