"use client";

import { useState } from "react";
import { UserPlus, Save, CheckCircle2, FileText, User, Mail, Phone, Calendar } from "lucide-react";

export default function NewStudentPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("تم تسجيل الطالب الجديد بنجاح وإرسال بيانات الدخول");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-primary" />
            تسجيل طالب جديد
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">إضافة بيانات طالب جديد للنظام والسجلات الأكاديمية</p>
        </div>
      </div>

      <div className="flex justify-center mt-8 w-full">
        <div className="glass-card overflow-hidden w-full">
          <div className="p-6 border-b border-slate-100 dark:border-white/10 flex items-center gap-3">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">نموذج التسجيل الأساسي</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Student Name */}
              <div className="space-y-2 col-span-1 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">الاسم الرباعي للطالب</label>
                <div className="relative">
                  <input required type="text" placeholder="مثال: أحمد عبد الله محمد القحطاني" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-4 pr-10 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" />
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                </div>
              </div>

              {/* National ID */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">رقم الهوية / الإقامة</label>
                <input required type="text" dir="ltr" placeholder="10xxxxxxxx" className="mt-2 w-full text-left bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">تاريخ الميلاد</label>
                <div className="relative">
                  <input required type="date" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" />
                </div>
              </div>

              {/* Grade */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">المرحلة الدراسية</label>
                <select required className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors font-bold">
                  <option value="">اختر المرحلة الدراسية...</option>
                  <option value="الابتدائية">الابتدائية</option>
                  <option value="المتوسطة">المتوسطة</option>
                  <option value="الثانوية">الثانوية</option>
                </select>
              </div>

              {/* Level */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">الصف الدراسي</label>
                <select required className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors font-bold">
                  <option value="">اختر الصف...</option>
                  <option value="الأول">الأول</option>
                  <option value="الثاني">الثاني</option>
                  <option value="الثالث">الثالث</option>
                  <option value="الرابع">الرابع</option>
                  <option value="الخامس">الخامس</option>
                  <option value="السادس">السادس</option>
                </select>
              </div>

              {/* Parent Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">اسم ولي الأمر</label>
                <div className="relative">
                  <input required type="text" placeholder="اسم ولي الأمر" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-4 pr-10 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" />
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                </div>
              </div>

              {/* Parent Phone */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">رقم جوال ولي الأمر</label>
                <div className="relative">
                  <input required type="tel" dir="ltr" placeholder="+966 5x xxx xxxx" className="mt-2 w-full text-left bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2 col-span-1 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">العنوان الوطني</label>
                <textarea placeholder="أدخل العنوان التفصيلي..." rows={3} className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"></textarea>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100 dark:border-white/10">
              <button type="button" className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                إلغاء
              </button>
              <button type="submit" className="flex items-center gap-2 bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-2.5 px-8 rounded-xl transition-all">
                <Save className="w-5 h-5" />
                حفظ وتسجيل
              </button>
            </div>
          </form>
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
