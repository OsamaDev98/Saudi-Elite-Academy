import { Bell, CheckCircle2 } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-2">الإشعارات</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">جميع التنبيهات والإشعارات الواردة</p>
      </div>
      <div className="glass-card p-6">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/10 hover:shadow-md transition-shadow">
              <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">تحديث جديد في النظام</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">تم إضافة ميزات جديدة، الرجاء الاطلاع عليها والاستفادة منها في تجربتك الأكاديمية. نحن نعمل دائماً على تحسين النظام.</p>
                <div className="mt-2 text-xs text-slate-400 flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  منذ ساعتين
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
