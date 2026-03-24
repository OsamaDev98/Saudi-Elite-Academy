"use client";

import { useState } from "react";
import { Users, Search, Filter, Plus, FileSpreadsheet, MoreVertical, Edit, Trash2, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";

export default function AdminStudentsPage() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("الجميع");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [actionTarget, setActionTarget] = useState<any>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleExport = () => {
    setIsExportModalOpen(true);
  };

  const confirmExport = () => {
    setIsExportModalOpen(false);
    showToast("تم تصدير قائمة الطلاب بنجاح!");
  };

  const handleAdd = () => setIsAddModalOpen(true);

  const [students, setStudents] = useState([
    { id: "1001", name: "عمر عبدالرحمن الشمري", grade: "الثالث الثانوي", gpa: "3.9", status: "نشط", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=60" },
    { id: "1002", name: "أحمد فهد العتيبي", grade: "الأول الثانوي", gpa: "3.5", status: "نشط", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&auto=format&fit=crop&q=60" },
    { id: "1003", name: "سعد محمد الدوسري", grade: "الثاني المتوسط", gpa: "4.0", status: "نشط", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&auto=format&fit=crop&q=60" },
    { id: "1004", name: "خالد سعيد الغامدي", grade: "السادس الابتدائي", gpa: "3.2", status: "منقطع", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60" },
    { id: "1005", name: "فيصل ناصر القحطاني", grade: "الثالث الثانوي", gpa: "3.8", status: "نشط", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" },
  ]);

  const confirmAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newStudent = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      name: formData.get('name') as string,
      grade: formData.get('grade') as string,
      gpa: "0.0",
      status: "نشط",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=60"
    };
    setStudents([...students, newStudent]);
    setIsAddModalOpen(false);
    showToast("تمت إضافة الطالب الجديد بنجاح!");
  };

  const filteredStudents = students.filter(student => {
    const matchesTab = activeTab === "الجميع" || student.grade.includes(activeTab);
    const matchesSearch = student.name.includes(searchQuery) || student.id.includes(searchQuery);
    const matchesFilter = activeFilter === "all" || student.status === (activeFilter === "active" ? "نشط" : "منقطع");
    return matchesTab && matchesSearch && matchesFilter;
  });

  const handleDownloadPDF = () => {
    const content = `
      <div style="font-family: Arial, sans-serif; direction: rtl; padding: 40px; background: #fff; max-width: 800px; margin: auto;">
        <h1 style="color: #0f172a; margin: 0;">أكاديمية النخبة السعودية</h1>
        <p style="color: #64748b; border-bottom: 2px solid #0f172a; padding-bottom: 20px;">تقرير الطلاب الشامل</p>
        <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%; text-align: right;">
          <tr style="background-color: #f1f5f9;">
            <th>اسم الطالب</th><th>الرقم</th><th>المرحلة</th><th>المعدل</th><th>الحالة</th>
          </tr>
          ${filteredStudents.map(s => `<tr><td>${s.name}</td><td>${s.id}</td><td>${s.grade}</td><td>${s.gpa}</td><td>${s.status}</td></tr>`).join('')}
        </table>
      </div>
    `;
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(content);
      win.document.close();
      win.focus();
      setTimeout(() => win.print(), 500);
    }
  };

  const handleDownloadCSV = () => {
    const content = "Name,ID,Grade,GPA,Status\n" + filteredStudents.map(s => `${s.name},${s.id},${s.grade},${s.gpa},${s.status}`).join("\n");
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "students.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">إدارة الطلاب</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">عرض وإدارة قاعدة بيانات طلاب الأكاديمية</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleExport} className="flex items-center gap-2 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-bold py-2 px-4 rounded-xl border border-slate-200 dark:border-white/10 transition-colors text-sm shadow-sm">
            <FileSpreadsheet className="w-4 h-4" />
            تصدير
          </button>
          <button onClick={handleAdd} className="flex items-center gap-2 bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10">
            <Plus className="w-4 h-4" />
            إضافة طالب جديد
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "إجمالي الطلاب", val: "1,245" },
          { label: "الطلاب النشطين", val: "1,180" },
          { label: "طلاب المنح", val: "45" },
          { label: "طلبات التسجيل", val: "12" }
        ].map((stat, idx) => (
          <div key={idx} className="glass-card p-6 border-l-4 border-l-primary flex flex-col justify-center">
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">{stat.label}</h3>
            <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-white/10 flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="flex bg-slate-50 dark:bg-black/20 rounded-lg p-1 border border-slate-200 dark:border-white/5 w-full sm:w-auto">
            {["الجميع", "الابتدائي", "المتوسط", "الثانوي"].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-md text-sm font-bold flex-1 sm:flex-none transition-colors ${activeTab === tab ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="ابحث بالاسم أو الرقم..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pr-10 pl-4 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              />
            </div>
            <div className="relative">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-all text-slate-700 dark:text-slate-200 appearance-none font-bold"
              >
                <option value="all">كل الحالات</option>
                <option value="active">نشط</option>
                <option value="inactive">منقطع</option>
              </select>
              <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm">
              <tr>
                <th className="py-4 px-6 font-semibold">اسم الطالب</th>
                <th className="py-4 px-6 font-semibold">الرقم الأكاديمي</th>
                <th className="py-4 px-6 font-semibold">المرحلة / الصف</th>
                <th className="py-4 px-6 font-semibold">المعدل</th>
                <th className="py-4 px-6 font-semibold">الحالة</th>
                <th className="py-4 px-6 font-semibold text-left">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {filteredStudents.map((student, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-primary/20">
                        <Image src={student.image} alt={student.name} fill className="object-cover" />
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-mono text-sm text-slate-500 dark:text-slate-400">{student.id}</td>
                  <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{student.grade}</td>
                  <td className="py-4 px-6 font-black text-slate-900 dark:text-white">{student.gpa}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${student.status === 'نشط' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'}`}>
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
                      className="p-2 rounded-lg text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors flex items-center gap-1"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActionTarget(student);
                        setIsDeleteModalOpen(true);
                      }}  
                      className="p-2 rounded-lg text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors flex items-center gap-1"
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

      <Modal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} title="تصدير قائمة الطلاب">
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300">اختر صيغة الملف لتصدير بيانات الطلاب الموجودة في القائمة الحالية المفلترة:</p>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => { handleDownloadCSV(); setIsExportModalOpen(false); }} className="p-4 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-colors flex flex-col items-center gap-2">
              <FileSpreadsheet className="w-8 h-8 text-emerald-500" />
              <span className="font-bold text-slate-900 dark:text-white">Excel (CSV)</span>
            </button>
            <button onClick={() => { handleDownloadPDF(); setIsExportModalOpen(false); }} className="p-4 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-colors flex flex-col items-center gap-2">
              <FileSpreadsheet className="w-8 h-8 text-rose-500" />
              <span className="font-bold text-slate-900 dark:text-white">PDF (.pdf)</span>
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="إضافة طالب جديد">
        <form onSubmit={confirmAdd} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">اسم الطالب الرباعي</label>
            <input name="name" required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">المرحلة الدراسية</label>
              <select name="grade" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="الابتدائية">الابتدائية</option>
                <option value="المتوسطة">المتوسطة</option>
                <option value="الثانوية">الثانوية</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">الصف</label>
              <select className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>الأول</option>
                <option>الثاني</option>
                <option>الثالث</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">رقم هاتف ولي الأمر</label>
            <input required type="tel" dir="ltr" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-left" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-3 rounded-xl transition-all">
            إضافة واعتماد
          </button>
        </form>
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="تعديل بيانات الطالب">
        {actionTarget && (
          <form onSubmit={(e) => { e.preventDefault(); showToast(`تم حفظ تعديلات الطالب ${actionTarget.name}`); setIsEditModalOpen(false); }} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">اسم الطالب الرباعي</label>
              <input name="name" defaultValue={actionTarget.name} required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-l from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/30 text-white font-bold py-3 rounded-xl transition-all">
              حفظ التعديلات
            </button>
          </form>
        )}
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="تأكيد الحذف">
        {actionTarget && (
          <div className="space-y-4">
            <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-900/30 text-center">
              <h3 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-2">هل أنت متأكد من حذف الطالب؟</h3>
              <p className="text-slate-700 dark:text-slate-300 font-bold">{actionTarget.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">لا يمكن التراجع عن هذا الإجراء بعد تنفيذه.</p>
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
                  showToast(`تم حذف الطالب ${actionTarget.name}`);
                  setIsDeleteModalOpen(false);
                }} 
                className="flex-1 bg-gradient-to-l from-rose-500 to-red-600 shadow-lg shadow-rose-500/30 text-white font-bold py-3 rounded-xl transition-all"
              >
                نعم، احذف
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
