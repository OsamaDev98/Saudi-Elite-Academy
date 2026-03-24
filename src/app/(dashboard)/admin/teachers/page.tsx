"use client";

import { useState } from "react";
import { BookOpen, Search, Filter, Plus, MoreVertical, Edit, Mail, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";

export default function AdminTeachersPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [actionTarget, setActionTarget] = useState<any>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAdd = () => setIsAddModalOpen(true);

  const [teachers, setTeachers] = useState([
    { id: "T-201", name: "د. خالد العبدالله", subject: "الفيزياء", classes: 4, status: "على رأس العمل", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60" },
    { id: "T-202", name: "أ. فاطمة السالم", subject: "الكيمياء", classes: 5, status: "على رأس العمل", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60" },
    { id: "T-203", name: "أ. محمود صابر", subject: "الرياضيات", classes: 6, status: "إجازة", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60" },
    { id: "T-204", name: "أ. سارة الميمان", subject: "اللغة العربية", classes: 4, status: "على رأس العمل", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" },
  ]);

  const confirmAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newTeacher = {
      id: "T-" + Math.floor(100 + Math.random() * 900).toString(),
      name: formData.get('name') as string,
      subject: formData.get('subject') as string,
      classes: 0,
      status: formData.get('status') as string,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    };
    setTeachers([...teachers, newTeacher]);
    setIsAddModalOpen(false);
    showToast("تمت إضافة المعلم الجديد بنجاح!");
  };

  const filteredTeachers = teachers.filter(t => {
    const matchesSearch = t.name.includes(searchQuery) || t.id.includes(searchQuery) || t.subject.includes(searchQuery);
    const matchesFilter = activeFilter === "all" || t.status === (activeFilter === "active" ? "على رأس العمل" : "إجازة");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">إدارة هيئة التدريس</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">عرض وإدارة بيانات المعلمين والموظفين</p>
        </div>
        <button onClick={handleAdd} className="flex items-center gap-2 bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10">
          <Plus className="w-4 h-4" />
          إضافة عضو جديد
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "إجمالي المعلمين", val: "85", color: "border-l-primary" },
          { label: "معلمين على رأس العمل", val: "80", color: "border-l-emerald-500" },
          { label: "شواغر وظيفية", val: "3", color: "border-l-amber-500" }
        ].map((stat, idx) => (
          <div key={idx} className={`glass-card p-6 border-l-4 ${stat.color} flex flex-col justify-center`}>
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">{stat.label}</h3>
            <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-white/10 flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="ابحث بالاسم، التخصص، أو الرقم الوظيفي..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pr-10 pl-4 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            />
          </div>
          <div className="relative">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-all text-slate-700 dark:text-slate-200 appearance-none font-bold min-w-[150px]"
            >
              <option value="all">كل الحالات</option>
              <option value="active">على رأس العمل</option>
              <option value="inactive">إجازة / غير متاح</option>
            </select>
            <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm">
              <tr>
                <th className="py-4 px-6 font-semibold">عضو هيئة التدريس</th>
                <th className="py-4 px-6 font-semibold">الرقم الوظيفي</th>
                <th className="py-4 px-6 font-semibold">التخصص</th>
                <th className="py-4 px-6 font-semibold">عدد الفصول</th>
                <th className="py-4 px-6 font-semibold">الحالة</th>
                <th className="py-4 px-6 font-semibold text-left">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {filteredTeachers.map((teacher, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl overflow-hidden relative border border-primary/20">
                        <Image src={teacher.image} alt={teacher.name} fill className="object-cover" />
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">{teacher.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-mono text-sm text-slate-500 dark:text-slate-400">{teacher.id}</td>
                  <td className="py-4 px-6 text-sm font-bold text-slate-600 dark:text-slate-300">{teacher.subject}</td>
                  <td className="py-4 px-6 font-black text-slate-900 dark:text-white">{teacher.classes}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${teacher.status === 'على رأس العمل' ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-left flex justify-end gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActionTarget(teacher);
                        setIsMessageModalOpen(true);
                      }} 
                      className="p-2 rounded-lg text-emerald-500 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors flex items-center gap-1"
                    >
                      <Mail className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActionTarget(teacher);
                        setIsEditModalOpen(true);
                      }} 
                      className="p-2 rounded-lg text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors flex items-center gap-1"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="إضافة عضو هيئة تدريس جديد">
        <form onSubmit={confirmAdd} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">اسم المعلم الرباعي</label>
            <input name="name" required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">التخصص</label>
              <select name="subject" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="الرياضيات">الرياضيات</option>
                <option value="الفيزياء">الفيزياء</option>
                <option value="اللغة العربية">اللغة العربية</option>
                <option value="الكيمياء">الكيمياء</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">الحالة</label>
              <select name="status" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="على رأس العمل">على رأس العمل</option>
                <option value="إجازة">إجازة</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">البريد الإلكتروني</label>
            <input required type="email" dir="ltr" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-left" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-3 rounded-xl transition-all">
            إضافة واعتماد
          </button>
        </form>
      </Modal>

      <Modal isOpen={isMessageModalOpen} onClose={() => setIsMessageModalOpen(false)} title="إرسال رسالة للمعلم">
        {actionTarget && (
          <form onSubmit={(e) => { e.preventDefault(); showToast(`تم إرسال الرسالة إلى ${actionTarget.name}`); setIsMessageModalOpen(false); }} className="space-y-4">
            <div className="p-3 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-200 dark:border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                <Image src={actionTarget.image} alt={actionTarget.name} fill className="object-cover" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white px-2">إلى: {actionTarget.name}</span>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">موضوع الرسالة</label>
              <input required type="text" placeholder="عنوان الرسالة" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">محتوى الرسالة</label>
              <textarea required rows={4} placeholder="اكتب رسالتك هنا..." className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-l from-emerald-500 to-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 text-white font-bold py-3 rounded-xl transition-all">
              إرسال الرسالة
            </button>
          </form>
        )}
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="تعديل بيانات المعلم">
        {actionTarget && (
          <form onSubmit={(e) => { e.preventDefault(); showToast(`تم حفظ التعديلات لـ ${actionTarget.name}`); setIsEditModalOpen(false); }} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">الاسم الرباعي</label>
              <input name="name" defaultValue={actionTarget.name} required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">المادة</label>
              <select defaultValue={actionTarget.subject} className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 font-bold">
                <option value="الرياضيات">الرياضيات</option>
                <option value="الفيزياء">الفيزياء</option>
                <option value="الكيمياء">الكيمياء</option>
                <option value="الأحياء">الأحياء</option>
                <option value="اللغة العربية">اللغة العربية</option>
                <option value="اللغة الإنجليزية">اللغة الإنجليزية</option>
                <option value="التربية الإسلامية">التربية الإسلامية</option>
                <option value="الحاسب الآلي">الحاسب الآلي</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-gradient-to-l from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/30 text-white font-bold py-3 rounded-xl transition-all">
              حفظ التعديلات
            </button>
          </form>
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
