"use client";

import { CheckCircle2, Search, Filter, UserCheck, UserX, UserMinus } from "lucide-react";
import { useState } from "react";

export default function StudentPreparationPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeClass, setActiveClass] = useState("الثالث الثانوي - أ");
  const [activeFilter, setActiveFilter] = useState("all");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const [students, setStudents] = useState([
    { id: 1, name: "أحمد محمد عبدالله", status: "present", idNumber: "1122334455", class: "الثالث الثانوي - أ" },
    { id: 2, name: "خالد سعيد القحطاني", status: "absent", idNumber: "1122334456", class: "الثالث الثانوي - ب" },
    { id: 3, name: "عمر فهد الدوسري", status: "late", idNumber: "1122334457", class: "الثالث الثانوي - أ" },
    { id: 4, name: "فيصل ناصر المطيري", status: "present", idNumber: "1122334458", class: "الثالث الثانوي - ب" },
    { id: 5, name: "سعد مسفر العتيبي", status: "none", idNumber: "1122334459", class: "الثالث الثانوي - أ" },
  ]);

  const updateStatus = (id: number, status: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, status } : s));
  };

  const filteredStudents = students.filter(s => {
    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch = !searchLower || s.name.toLowerCase().includes(searchLower) || s.idNumber.toLowerCase().includes(searchLower);
    const matchesClass = s.class === activeClass;
    const matchesFilter = activeFilter === "all" || s.status === activeFilter;
    return matchesSearch && matchesClass && matchesFilter;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">تحضير الطلاب</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            إدارة حضور الطلاب لمقرر الرياضيات
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => showToast('تم حفظ التحضير بنجاح')} 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-xl transition-colors text-sm shadow-sm flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            حفظ تحضير الحصة
          </button>
        </div>
      </div>

      <div className="glass-card">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 dark:bg-slate-900/50 rounded-t-2xl">
          <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
            <select
              value={activeClass}
              onChange={(e) => setActiveClass(e.target.value)}
              className="bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary transition-all text-slate-700 dark:text-slate-200 font-bold"
            >
              <option value="الثالث الثانوي - أ">الثالث الثانوي - أ</option>
              <option value="الثالث الثانوي - ب">الثالث الثانوي - ب</option>
            </select>
            <div className="relative flex-1 md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="ابحث برقم الهوية أو اسم الطالب..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pr-10 pl-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-700 dark:text-slate-200 font-bold placeholder:font-normal"
              />
            </div>
            <div className="relative">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-all text-slate-700 dark:text-slate-200 appearance-none font-bold"
              >
                <option value="all">الكل</option>
                <option value="present">حاضر</option>
                <option value="absent">غائب</option>
                <option value="late">متأخر</option>
                <option value="none">لم يتم التحضير</option>
              </select>
              <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right">
            <thead className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-white/5 border-b border-slate-100 dark:border-white/10 font-bold">
              <tr>
                <th className="px-6 py-4 rounded-tr-xl">اسم الطالب</th>
                <th className="px-6 py-4">رقم الهوية</th>
                <th className="px-6 py-4 w-64 rounded-tl-xl text-center">التحضير</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-semibold text-slate-700 dark:text-slate-300">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                        {student.name.charAt(0)}
                      </div>
                      <span className="font-bold">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">{student.idNumber}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => updateStatus(student.id, 'present')}
                        className={`p-2 rounded-lg border flex items-center gap-1 transition-all ${
                          student.status === 'present' 
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-900/20 dark:border-emerald-800/30 dark:text-emerald-400' 
                            : 'bg-white border-slate-200 text-slate-400 hover:bg-slate-50 dark:bg-black/20 dark:border-white/10 dark:hover:bg-white/5'
                        }`}
                        title="حاضر"
                      >
                        <UserCheck className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => updateStatus(student.id, 'late')}
                        className={`p-2 rounded-lg border flex items-center gap-1 transition-all ${
                          student.status === 'late' 
                            ? 'bg-amber-50 border-amber-200 text-amber-600 dark:bg-amber-900/20 dark:border-amber-800/30 dark:text-amber-400' 
                            : 'bg-white border-slate-200 text-slate-400 hover:bg-slate-50 dark:bg-black/20 dark:border-white/10 dark:hover:bg-white/5'
                        }`}
                        title="متأخر"
                      >
                        <UserMinus className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => updateStatus(student.id, 'absent')}
                        className={`p-2 rounded-lg border flex items-center gap-1 transition-all ${
                          student.status === 'absent' 
                            ? 'bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-900/20 dark:border-rose-800/30 dark:text-rose-400' 
                            : 'bg-white border-slate-200 text-slate-400 hover:bg-slate-50 dark:bg-black/20 dark:border-white/10 dark:hover:bg-white/5'
                        }`}
                        title="غائب"
                      >
                        <UserX className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredStudents.length === 0 && (
            <div className="p-8 text-center text-slate-500 font-bold">
              لا توجد نتائج تطابق بحثك
            </div>
          )}
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
