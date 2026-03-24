"use client";

import { useState } from "react";
import { CalendarDays, Clock, MapPin, Plus, Edit, Trash2, CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export default function UpcomingEventsPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [actionTarget, setActionTarget] = useState<any>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const [events, setEvents] = useState([
    { title: "اجتماع أولياء الأمور (الابتدائية)", date: "20 مارس", time: "05:00 م - 08:00 م", location: "القاعة الرئيسية", color: "bg-blue-500", upcoming: true },
    { title: "معرض العلوم والتكنولوجيا", date: "25 مارس", time: "09:00 ص - 01:00 م", location: "ساحة المعارض", color: "bg-primary", upcoming: true },
    { title: "اختبارات منتصف الفصل الدراسي", date: "02 أبريل", time: "أسبوع كامل", location: "جميع الفصول", color: "bg-amber-500", upcoming: true },
    { title: "اليوم الرياضي المفتوح", date: "10 أبريل", time: "08:00 ص - 02:00 م", location: "النادي الرياضي", color: "bg-purple-500", upcoming: true },
    { title: "مسابقة حفظ القرآن الكريم", date: "15 أبريل", time: "09:00 ص - 11:00 ص", location: "المسجد", color: "bg-emerald-500", upcoming: false },
  ]);

  const confirmAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const dateStr = formData.get("date") as string;
    const time = (formData.get("time") as string) || "10:00 ص";
    const loc = formData.get("location") as string;
    
    // Quick parse just to have a display string
    const d = new Date(dateStr);
    const day = d.getDate() || 20;
    const months = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
    const month = months[d.getMonth()] || "مارس";

    setEvents([...events, {
      title,
      date: `${day} ${month}`,
      time,
      location: loc,
      color: "bg-blue-500",
      upcoming: true
    }]);
    setIsAddModalOpen(false);
    showToast("تم إضافة الفعالية بنجاح!");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <CalendarDays className="w-6 h-6 text-primary" />
            الفعاليات القادمة
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">إدارة فعاليات وأحداث الأكاديمية</p>
        </div>
        <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm">
          <Plus className="w-4 h-4" />
          إضافة فعالية جديدة
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {events.map((event, i) => (
            <div key={i} className="bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5 rounded-2xl p-5 hover:shadow-lg transition-all group relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-1.5 h-full ${event.color} opacity-70`}></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${event.upcoming ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                  {event.upcoming ? 'قادم' : 'انتهى'}
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => { setActionTarget(event); setIsEditModalOpen(true); }} className="text-slate-400 hover:text-blue-500 transition-colors bg-white dark:bg-slate-800 p-1 rounded-md shadow-sm border border-slate-100 dark:border-slate-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button onClick={() => { setActionTarget(event); setIsDeleteModalOpen(true); }} className="text-slate-400 hover:text-rose-500 transition-colors bg-white dark:bg-slate-800 p-1 rounded-md shadow-sm border border-slate-100 dark:border-slate-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4 line-clamp-2">{event.title}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-500 flex items-center justify-center shrink-0">
                    <CalendarDays className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">{event.date}</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">{event.time}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="إضافة فعالية جديدة">
        <form onSubmit={confirmAdd} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">اسم الفعالية</label>
            <input name="title" required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">تاريخ الفعالية</label>
            <input name="date" required type="date" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">الوقت</label>
              <input name="time" placeholder="مثال: 09:00 ص - 12:00 م" required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-left" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">الموقع / القاعة</label>
              <input name="location" required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
          <button type="submit" className="w-full bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-3 rounded-xl transition-all mt-4">
            إضافة واعتماد
          </button>
        </form>
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="تعديل الفعالية">
        {actionTarget && (
          <form onSubmit={(e) => { e.preventDefault(); showToast(`تم حفظ تعديلات ${actionTarget.title}`); setIsEditModalOpen(false); }} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">اسم الفعالية</label>
              <input name="title" defaultValue={actionTarget.title} required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">تاريخ الفعالية</label>
                <input name="date" defaultValue={actionTarget.date} required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">الوقت</label>
                <input name="time" defaultValue={actionTarget.time} required type="text" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-left" />
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-l from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/30 text-white font-bold py-3 rounded-xl transition-all">
              حفظ التعديلات
            </button>
          </form>
        )}
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="إلغاء الفعالية">
        {actionTarget && (
          <div className="space-y-4">
            <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-900/30 text-center">
              <h3 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-2">هل أنت متأكد من إلغاء الفعالية؟</h3>
              <p className="text-slate-700 dark:text-slate-300 font-bold">{actionTarget.title}</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsDeleteModalOpen(false)} 
                className="flex-1 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white font-bold py-3 rounded-xl transition-colors"
              >
                تراجع
              </button>
              <button 
                onClick={() => {
                  setEvents(events.filter(e => e.title !== actionTarget.title));
                  showToast(`تم إلغاء الفعالية ${actionTarget.title}`);
                  setIsDeleteModalOpen(false);
                }} 
                className="flex-1 bg-gradient-to-l from-rose-500 to-red-600 shadow-lg shadow-rose-500/30 text-white font-bold py-3 rounded-xl transition-all"
              >
                نعم، الغاء الفعالية
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
