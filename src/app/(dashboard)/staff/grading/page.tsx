"use client";

import { useState } from "react";
import { PenTool, CheckCircle2, Save } from "lucide-react";

export default function TeacherGradingPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('midterm');
  const [activeClass, setActiveClass] = useState('الثالث الثانوي - أ');

  const assessmentTypes = [
    { id: 'midterm', name: 'الاختبار النصفي' },
    { id: 'participation', name: 'المشاركة والتفاعل (الشهر 2)' },
    { id: 'homework', name: 'واجب المعادلات', badge: '12 بانتظار التصحيح' },
  ];

  const students = [
    { name: "عمر عبدالرحمن الشمري", val: 29, status: "saved" },
    { name: "أحمد فهد العتيبي", val: 25, status: "saved" },
    { name: "سعد محمد الدوسري", val: 0, status: "pending" },
    { name: "خالد صالح الغامدي", val: 30, status: "saved" },
  ];

  const getTableTitle = () => {
    switch(activeTab) {
      case 'midterm': return { title: `الاختبار النصفي - ${activeClass}`, max: 30 };
      case 'participation': return { title: `المشاركة والتفاعل - ${activeClass}`, max: 10 };
      case 'homework': return { title: `واجب المعادلات - ${activeClass}`, max: 5 };
      default: return { title: "", max: 100 };
    }
  }

  const { title, max } = getTableTitle();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };
  
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">رصد الدرجات والتصحيح</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">تحديث وتقييم أداء الطلاب الأكاديمي</p>
        </div>
        <button onClick={() => showToast('تم حفظ واعتماد النتيجة بنجاح!')} className="bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10 flex items-center gap-2">
          <Save className="w-4 h-4" />
          حفظ واعتماد النتيجة
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 glass-card p-4 space-y-4 h-fit">
          <div className="space-y-1 border-b border-slate-100 dark:border-white/10 pb-4">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400">الفصل الدراسي</label>
            <select 
              value={activeClass}
              onChange={(e) => setActiveClass(e.target.value)}
              className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-primary text-sm font-bold"
            >
              <option value="الثالث الثانوي - أ">الثالث الثانوي - أ</option>
              <option value="الثالث الثانوي - ب">الثالث الثانوي - ب</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400">نوع التقييم</label>
            <div className="flex flex-col gap-2 mt-2">
              {assessmentTypes.map(type => (
                <button 
                  key={type.id}
                  onClick={() => setActiveTab(type.id)} 
                  className={`px-4 py-2.5 rounded-xl font-bold text-sm text-right transition-colors flex justify-between items-center ${
                    activeTab === type.id 
                      ? 'bg-primary/10 border border-primary/20 text-primary'
                      : 'bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {type.name}
                  {activeTab === type.id && !type.badge && <div className="w-2 h-2 rounded-full bg-primary/50 shrink-0"></div>}
                  {type.badge && (
                    <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap mr-2">
                      {type.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 glass-card overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-black/20 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h2>
              <p className="text-xs text-slate-500 mt-1">الدرجة القصوى: {max} | تم رصد 25/28 طالب</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-white dark:bg-transparent text-slate-500 dark:text-slate-400 text-sm border-b border-slate-100 dark:border-white/5">
                <tr>
                  <th className="py-4 px-6 font-semibold">اسم الطالب</th>
                  <th className="py-4 px-6 font-semibold w-1/4">الدرجة</th>
                  <th className="py-4 px-6 font-semibold w-1/3">ملاحظات (اختياري)</th>
                  <th className="py-4 px-6 font-semibold text-center">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {students.map((student, i) => {
                  const simulatedValue = activeTab === 'midterm' ? student.val : Math.min(student.val, max);
                  return (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                    <td className="py-4 px-6">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{student.name}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          max={max}
                          min="0"
                          defaultValue={student.status === 'saved' ? simulatedValue : ""}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            if (val > max) {
                              showToast(`لا يمكن إدخال درجة أكبر من الدرجة القصوى (${max})`);
                              e.target.value = max.toString();
                            }
                          }}
                          className="w-20 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-center text-slate-900 dark:text-white font-black text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                        <span className="text-sm font-bold text-slate-400">/ {max}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <input
                        type="text"
                        placeholder="أضف ملاحظة..."
                        className="w-full bg-transparent border-none placeholder-slate-300 dark:placeholder-slate-600 text-sm text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-0"
                      />
                    </td>
                    <td className="py-4 px-6 text-center">
                      {student.status === 'saved' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 inline-block" />
                      ) : (
                        <PenTool className="w-4 h-4 text-amber-500 inline-block animate-pulse" />
                      )}
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
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
