"use client";

import { Bell, CheckCircle2, ShieldAlert, Star, Users } from "lucide-react";
import { useState } from "react";

export default function AdminNotificationsPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'طلب تسجيل جديد', desc: 'تم استلام طلب تسجيل جديد للطالب خالد الدوسري، يرجى المراجعة.', time: 'منذ ١٥ دقيقة', type: 'info', isNew: true },
    { id: 2, title: 'تنبيه تأخير رسوم', desc: 'يوجد ٥ طلاب متأخرين في سداد رسوم الفصل الدراسي الثاني.', time: 'أمس', type: 'warning', isNew: true },
    { id: 3, title: 'اعتماد الخطة الدراسية', desc: 'تم اعتماد الخطة الدراسية للأسبوع القادم بنجاح.', time: 'منذ يومين', type: 'success', isNew: false },
    { id: 4, title: 'اجتماع أولياء الأمور', desc: 'تذكير باجتماع أولياء الأمور يوم الخميس القادم.', time: 'الأسبوع الماضي', type: 'star', isNew: false },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isNew: false })));
    showToast('تم تحديد جميع الإشعارات كمقروءة');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">التنبيهات الإدارية</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">سجل التنبيهات والأحداث الخاصة بالنظام</p>
        </div>
        <button
          onClick={markAllAsRead}
          className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 hover:text-primary text-slate-700 dark:text-slate-300 font-bold py-2.5 px-6 rounded-xl transition-colors text-sm shadow-sm"
        >
          تحديد الكل كمقروء
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          {notifications.map((notif) => (
            <div key={notif.id} 
                 onClick={() => {
                   if (notif.isNew) {
                     setNotifications(notifications.map(n => n.id === notif.id ? { ...n, isNew: false } : n));
                   }
                 }}
                 className={`p-6 transition-colors hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer relative ${notif.isNew ? 'bg-primary/5 dark:bg-primary/10' : ''}`}>
              {notif.isNew && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-none rounded-l-md"></div>}
              <div className="flex items-start gap-4">
                <div className={`mt-1 p-3 rounded-full shrink-0 ${notif.type === 'info' ? 'bg-blue-50 text-blue-500 dark:bg-blue-900/20' :
                    notif.type === 'warning' ? 'bg-rose-50 text-rose-500 dark:bg-rose-900/20' :
                      notif.type === 'success' ? 'bg-emerald-50 text-emerald-500 dark:bg-emerald-900/20' :
                        'bg-amber-50 text-amber-500 dark:bg-amber-900/20'
                  }`}>
                  {notif.type === 'info' && <Bell className="w-6 h-6" />}
                  {notif.type === 'warning' && <ShieldAlert className="w-6 h-6" />}
                  {notif.type === 'success' && <CheckCircle2 className="w-6 h-6" />}
                  {notif.type === 'star' && <Star className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className={`text-base mb-1 ${notif.isNew ? 'font-black text-slate-900 dark:text-white' : 'font-bold text-slate-700 dark:text-slate-300'}`}>{notif.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-2 max-w-2xl">{notif.desc}</p>
                  <p className="text-xs font-semibold text-slate-400">{notif.time}</p>
                </div>
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
