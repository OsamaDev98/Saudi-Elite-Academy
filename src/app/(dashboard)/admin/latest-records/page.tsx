"use client";

import { useState } from "react";
import { Users, Search, Edit, Trash2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";

export default function AdminLatestRecordsPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [actionTarget, setActionTarget] = useState<any>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const [students, setStudents] = useState([
    { id: "1001", name: "عمر عبدالرحمن الشمري", grade: "الثالث الثانوي", status: "مكتمل", date: "منذ ساعة", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=60" },
    { id: "1002", name: "أحمد فهد العتيبي", grade: "الأول الثانوي", status: "بانتظار الدفع", date: "منذ ساعتين", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&auto=format&fit=crop&q=60" },
    { id: "1003", name: "سعد محمد الدوسري", grade: "الثاني المتوسط", status: "قيد المراجعة", date: "منذ 3 ساعات", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&auto=format&fit=crop&q=60" },
    { id: "1004", name: "خالد سعيد الغامدي", grade: "السادس الابتدائي", status: "مكتمل", date: "اليوم", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60" },
    { id: "1005", name: "فيصل ناصر القحطاني", grade: "الثالث الثانوي", status: "مكتمل", date: "أمس", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            أحدث السجلات
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">متابعة أحدث تسجيلات وتحديثات الطلاب</p>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto p-6">
          <table className="w-full text-right">
            <thead className="bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm">
              <tr>
                <th className="py-4 px-6 font-semibold">اسم الطالب</th>
                <th className="py-4 px-6 font-semibold">وقت التحديث</th>
                <th className="py-4 px-6 font-semibold">المرحلة / الصف</th>
                <th className="py-4 px-6 font-semibold">الحالة</th>
                <th className="py-4 px-6 font-semibold text-left">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {students.map((student, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-primary/20">
                        <Image src={student.image} alt={student.name} fill className="object-cover" />
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{student.date}</td>
                  <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{student.grade}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 border rounded-full text-xs font-bold ${
                        student.status === "مكتمل" ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/30" :
                        student.status === "قيد المراجعة" ? "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800/30" :
                        "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-800/30"
                      }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-left flex justify-end gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActionTarget(student);
                        setIsEditModalOpen(true);
                      }}  
                      className="p-2 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-1"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActionTarget(student);
                        setIsDeleteModalOpen(true);
                      }}  
                      className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="تعديل حالة السجل">
        {actionTarget && (
          <form onSubmit={(e) => { e.preventDefault(); showToast(`تم حفظ تعديلات السجل للطالب ${actionTarget.name}`); setIsEditModalOpen(false); }} className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-200 dark:border-white/10 text-center font-bold text-lg text-slate-900 dark:text-white">
              {actionTarget.name}
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">الحالة</label>
              <select name="status" defaultValue={actionTarget.status} className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 font-bold">
                <option value="مكتمل">مكتمل</option>
                <option value="قيد المراجعة">قيد المراجعة</option>
                <option value="بانتظار الدفع">بانتظار الدفع</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-gradient-to-l from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/30 text-white font-bold py-3 rounded-xl transition-all">
              تحديث الحالة
            </button>
          </form>
        )}
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="تأكيد الحذف">
        {actionTarget && (
          <div className="space-y-4">
            <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-900/30 text-center">
              <h3 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-2">هل أنت متأكد من حذف السجل؟</h3>
              <p className="text-slate-700 dark:text-slate-300 font-bold">{actionTarget.name}</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsDeleteModalOpen(false)} 
                className="flex-1 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white font-bold py-3 rounded-xl transition-colors"
              >
                إلغاء
              </button>
              <button 
                onClick={() => {
                  setStudents(students.filter(s => s.id !== actionTarget.id));
                  showToast(`تم حذف السجل للطالب ${actionTarget.name}`);
                  setIsDeleteModalOpen(false);
                }} 
                className="flex-1 bg-gradient-to-l from-rose-500 to-red-600 shadow-lg shadow-rose-500/30 text-white font-bold py-3 rounded-xl transition-all"
              >
                تأكيد الحذف
              </button>
            </div>
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
