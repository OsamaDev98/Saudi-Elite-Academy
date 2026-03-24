"use client";

import { useState } from "react";
import { CalendarDays, Filter, Search, Edit, CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export default function AdminSchedulePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState("المرحلة الثانوية");
  const [selectedClass, setSelectedClass] = useState("الصف الثالث - أ");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditGeneralModalOpen, setIsEditGeneralModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [editingCell, setEditingCell] = useState<{ dayId: number, periodId: number, day: string, period: string, grade: string, classTitle: string, currentSubject: string, currentTeacher: string } | null>(null);
  const [customSchedule, setCustomSchedule] = useState<Record<string, { subject: string, teacher: string }>>({});

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"];
  const periods = ["1", "2", "3", "4", "5", "6", "7"];

  const handleEditCell = (dayId: number, periodId: number, day: string, period: string, currentSubject: string, currentTeacher: string) => {
    setEditingCell({ dayId, periodId, day, period, grade: selectedGrade, classTitle: selectedClass, currentSubject, currentTeacher });
    setIsEditModalOpen(true);
  };

  const confirmEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCell) return;
    const formData = new FormData(e.target as HTMLFormElement);
    const subject = formData.get('subject') as string;
    const teacher = formData.get('teacher') as string;
    
    const key = `${selectedGrade}_${selectedClass}_${editingCell.dayId}_${editingCell.periodId}`;
    setCustomSchedule({ ...customSchedule, [key]: { subject, teacher } });
    
    setIsEditModalOpen(false);
    showToast(`تم تعديل حصة يوم ${editingCell.day}`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">إدارة الجدول الدراسي</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">توزيع الحصص الأسبوعية للمعلمين وحل التعارضات</p>
        </div>
        <button onClick={() => setIsEditGeneralModalOpen(true)} className="flex items-center gap-2 bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10">
          <Edit className="w-4 h-4" />
          تعديل الجدول العام
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-white/10 flex flex-col sm:flex-row justify-between gap-4 items-center bg-slate-50/50 dark:bg-black/20">
          <div className="flex gap-2 w-full sm:w-auto">
            <select value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)} className="bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary">
              <option value="المرحلة الثانوية">المرحلة الثانوية</option>
              <option value="المرحلة المتوسطة">المرحلة المتوسطة</option>
              <option value="المرحلة الابتدائية">المرحلة الابتدائية</option>
            </select>
            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary">
              <option value="الصف الثالث - أ">الصف الثالث - أ</option>
              <option value="الصف الثالث - ب">الصف الثالث - ب</option>
              <option value="الصف الثاني - أ">الصف الثاني - أ</option>
            </select>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              لا يوجد تعارضات
            </div>
            <button onClick={() => setIsFilterModalOpen(true)} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto p-6">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-8 gap-4 mb-4">
              <div className="col-span-1 border-b-2 border-primary pb-2 font-black text-slate-400 text-center">اليوم / الحصة</div>
              {periods.map((p, i) => (
                <div key={i} className="col-span-1 text-center font-bold text-slate-900 dark:text-white">
                  الحصة {p}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {days.map((day, i) => (
                <div key={i} className="grid grid-cols-8 gap-4 items-center">
                  <div className="col-span-1 font-black text-lg text-slate-900 dark:text-white text-center bg-slate-50 dark:bg-white/5 py-4 rounded-xl border border-slate-100 dark:border-white/10">
                    {day}
                  </div>
                  
                  {periods.map((p, j) => {
                    // Generate a better unique hash for the specific class
                    let str = selectedGrade + selectedClass;
                    let hash = 0;
                    for (let k = 0; k < str.length; k++) hash = str.charCodeAt(k) + ((hash << 5) - hash);
                    const classHash = Math.abs(hash);
                    
                    const subjects = ["رياضيات", "فيزياء", "كيمياء", "أحياء", "لغة عربية", "إنجليزي", "حاسب"];
                    const teachers = ["أحمد خالد", "محمد سعد", "فهد العمر", "عبدالله العلي", "سعود القحطاني"];
                    
                    const cellKey = `${selectedGrade}_${selectedClass}_${i}_${j}`;
                    const customCell = customSchedule[cellKey];
                    
                    const subIndex = (i * 3 + j * 7 + classHash) % subjects.length;
                    const teacherIndex = (i * 5 + j * 2 + classHash) % teachers.length;
                    
                    const currentSubject = customCell ? customCell.subject : subjects[subIndex];
                    const currentTeacher = customCell ? customCell.teacher : teachers[teacherIndex];
                    
                    if (j === 2) {
                      return (
                        <div key={j} className="col-span-1 h-full bg-slate-100/50 dark:bg-white/5 rounded-xl border border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center p-2 text-center">
                          <span className="text-slate-400 font-bold text-sm">فسحة</span>
                        </div>
                      );
                    }

                    return (
                      <div key={j} onClick={() => handleEditCell(i, j, day, p, currentSubject, currentTeacher)} className="col-span-1 h-full flex flex-col items-center justify-center p-3 rounded-xl border bg-white dark:bg-black/20 hover:border-primary/50 border-slate-200 dark:border-white/5 shadow-sm transition-colors cursor-pointer group relative">
                        {customCell && <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500"></div>}
                        <span className="font-bold text-sm mb-1 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{currentSubject}</span>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold text-center">
                          أ. {currentTeacher}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="تعديل الجدول">
        {editingCell && (
          <form onSubmit={confirmEdit} className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-200 dark:border-white/10 text-center space-y-2">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">تعديل {editingCell.grade} - {editingCell.classTitle}</h3>
              <p className="text-primary font-bold">{editingCell.day} - الحصة {editingCell.period}</p>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">المادة الدراسية</label>
              <select name="subject" defaultValue={editingCell.currentSubject} className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 font-bold">
                <option value="رياضيات">رياضيات</option>
                <option value="فيزياء">فيزياء</option>
                <option value="كيمياء">كيمياء</option>
                <option value="أحياء">أحياء</option>
                <option value="لغة عربية">لغة عربية</option>
                <option value="إنجليزي">إنجليزي</option>
                <option value="حاسب">حاسب</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">المعلم</label>
              <select name="teacher" defaultValue={editingCell.currentTeacher} className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 font-bold">
                <option value="أحمد خالد">أحمد خالد</option>
                <option value="محمد سعد">محمد سعد</option>
                <option value="فهد العمر">فهد العمر</option>
                <option value="عبدالله العلي">عبدالله العلي</option>
                <option value="سعود القحطاني">سعود القحطاني</option>
              </select>
            </div>
            
            <button type="submit" className="w-full bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-3 rounded-xl transition-all">
              تحديث الجدول
            </button>
          </form>
        )}
      </Modal>

      <Modal isOpen={isEditGeneralModalOpen} onClose={() => setIsEditGeneralModalOpen(false)} title="إعدادات الجدول العام">
        <form onSubmit={(e) => { e.preventDefault(); showToast('تم حفظ إعدادات الجدول العام بنجاح'); setIsEditGeneralModalOpen(false); }} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">وقت بدء الصباح</label>
            <input required type="time" defaultValue="07:00" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">مدة الحصة بالدقائق</label>
            <input required type="number" defaultValue="45" min="30" max="60" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-3 rounded-xl transition-all">
            حفظ وإغلاق
          </button>
        </form>
      </Modal>

      <Modal isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)} title="تصفية متقدمة للجدول">
        <form onSubmit={(e) => { e.preventDefault(); showToast('تم تطبيق الفلتر بنجاح'); setIsFilterModalOpen(false); }} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">البحث عن معلم</label>
            <select className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 font-bold">
              <option value="">-- جميع المعلمين --</option>
              <option value="أحمد خالد">أحمد خالد</option>
              <option value="محمد سعد">محمد سعد</option>
              <option value="فهد العمر">فهد العمر</option>
              <option value="عبدالله العلي">عبدالله العلي</option>
              <option value="سعود القحطاني">سعود القحطاني</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">البحث بالمادة</label>
            <select className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 font-bold">
              <option value="">-- جميع المواد --</option>
              <option value="رياضيات">رياضيات</option>
              <option value="فيزياء">فيزياء</option>
              <option value="كيمياء">كيمياء</option>
              <option value="أحياء">أحياء</option>
              <option value="لغة عربية">لغة عربية</option>
              <option value="إنجليزي">إنجليزي</option>
              <option value="حاسب">حاسب</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-3 rounded-xl transition-all">
            تطبيق
          </button>
        </form>
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
