"use client";

import { AlertCircle, CheckCircle2, CheckSquare } from "lucide-react";
import { useState } from "react";

export default function MissionsPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const tasks = [
    { title: "تصحيح واجب المعادلات التربيعية", desc: "الصف الثالث الثانوي - أ", count: 28, due: "اليوم", status: 'pending' },
    { title: "اعتماد درجات المشاركة الشهرية", desc: "جميع الفصول", count: 142, due: "غداً", status: 'pending' },
    { title: "إعداد اختبار الفصل الثاني", desc: "الصف الثاني الثانوي", count: 1, due: "بعد 3 أيام", status: 'pending' },
    { title: "رفع التقرير الأسبوعي", desc: "الإدارة", count: 1, due: "مكتمل", status: 'completed' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">المهام</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">المهام المطلوبة بانتظار الإنجاز</p>
        </div>
      </div>

      <div className="glass-card flex-1">
        <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">مهام بانتظار الإنجاز والإنجازات</h2>
          <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-black px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800/30">
            {tasks.length} مهمة
          </span>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          {tasks.map((task, i) => (
            <div key={i} className={`p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex justify-between items-center ${task.status === 'completed' ? 'opacity-60' : ''}`}>
              <div className="flex gap-4 items-center">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  task.status === 'completed' 
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500' 
                    : 'bg-amber-50 dark:bg-amber-900/20 text-amber-500'
                }`}>
                  {task.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{task.title}</h4>
                  <p className="text-xs text-slate-500">{task.desc} • {task.count} عنصر</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500">{task.due}</span>
                {task.status === 'pending' ? (
                  <button onClick={() => showToast('جاري بدء المهمة...')} className="text-xs font-bold bg-slate-100 dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg transition-colors border border-slate-200 dark:border-white/10 shadow-sm flex items-center gap-2">
                    <CheckSquare className="w-4 h-4" />
                    ابدأ
                  </button>
                ) : (
                  <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-lg border border-emerald-200 dark:border-emerald-800/30">
                    مكتمل
                  </span>
                )}
              </div>
            </div>
          ))}
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
