"use client";

import { Clock, CheckCircle2, AlertCircle, FileText, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/Modal";

export default function StudentAssignmentsPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSolveModalOpen, setIsSolveModalOpen] = useState(false);
  const [activeAssignment, setActiveAssignment] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(45 * 60);

  useEffect(() => {
    if (!isSolveModalOpen) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isSolveModalOpen]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">الواجبات والمهام</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">إدارة وحل الواجبات المدرسية</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 flex items-center gap-4 border-l-4 border-amber-500">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-500 flex flex-shrink-0 items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">قيد الانتظار</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">3 <span className="text-sm font-medium text-slate-400">واجبات</span></h3>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4 border-l-4 border-emerald-500">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex flex-shrink-0 items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">مكتمل</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">12 <span className="text-sm font-medium text-slate-400">واجب</span></h3>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4 border-l-4 border-red-500">
          <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-500 flex flex-shrink-0 items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">متأخر</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">0 <span className="text-sm font-medium text-slate-400">واجبات</span></h3>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { title: "حل المعادلات التربيعية المتقدمة", subject: "الرياضيات", due: "غداً المقدر: 11:59 م", status: "pending", priority: "high" },
          { title: "بحث عن قوانين نيوتن", subject: "الفيزياء", due: "بعد يومين", status: "pending", priority: "medium" },
          { title: "قراءة في النص الأدبي", subject: "اللغة العربية", due: "الخميس القادم", status: "pending", priority: "low" },
          { title: "تمارين الكيمياء العضوية", subject: "الكيمياء", due: "منذ أسبوع", status: "completed", priority: "none" },
          { title: "مشروع اللغة الإنجليزية", subject: "اللغة الإنجليزية", due: "منذ شهر", status: "completed", priority: "none" }
        ].map((assignment, i) => (
          <div key={i} className={`glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all border-l-4 ${assignment.status === 'completed' ? 'border-emerald-500' : 'border-amber-500 cursor-pointer hover:shadow-lg hover:-translate-y-1'
            }`}>
            <div className="flex items-start gap-4">
              <div className={`mt-1 p-3 rounded-full ${assignment.status === 'completed' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500' : 'bg-primary/10 text-primary'
                }`}>
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{assignment.title}</h3>
                  {assignment.priority === "high" && (
                    <span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-red-100 dark:border-red-800/30">
                      مهم جداً
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-bold">{assignment.subject}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {assignment.status === 'completed' ? 'تم التسليم' : 'تاريخ التسليم:'} {assignment.due}
                  </span>
                </div>
              </div>
            </div>

            {assignment.status === 'completed' ? (
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-xl self-start sm:self-center">
                <CheckCircle2 className="w-5 h-5" />
                مكتمل
              </div>
            ) : (
              <button
                onClick={() => {
                  setActiveAssignment(assignment);
                  setTimeLeft(45 * 60); // Reset timer
                  setIsSolveModalOpen(true);
                }}
                className="bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-2.5 px-6 rounded-xl transition-all self-start sm:self-center shadow-md border border-white/10"
              >
                بدء الحل
              </button>
            )}
          </div>
        ))}
      </div>

      <Modal isOpen={isSolveModalOpen} onClose={() => setIsSolveModalOpen(false)} title="حل الواجب">
        {activeAssignment && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/10">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{activeAssignment.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{activeAssignment.subject}</p>
              </div>
              <div className="flex flex-col items-center bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-lg border border-red-100 dark:border-red-800/30">
                <span className="text-xs font-bold mb-1">الوقت المتبقي</span>
                <span className="font-mono font-black text-xl">{formatTime(timeLeft)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-slate-700 dark:text-slate-300">أدخل إجابتك هنا:</label>
              <textarea
                rows={6}
                className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="اكتب الحل بالتفصيل..."
              ></textarea>
            </div>

            <button
              onClick={() => {
                setIsSolveModalOpen(false);
                showToast("تم إرسال إجابتك بنجاح!");
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-3.5 px-6 rounded-xl transition-all"
            >
              <Send className="w-5 h-5" />
              تسليم الإجابة
            </button>
          </div>
        )}
      </Modal>

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
