"use client";

import { User, Lock, Bell, Globe, Database, Save, Activity, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function StudentSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownloadPDF = (title: string) => {
    const pdfData = "JVBERi0xLjQKJcOkw7zDtsOUCjEgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDIgMCBSPj4KZW5kb2JqCjIgMCBvYmoKPDwvVHlwZS9QYWdlcy9LaWRzWzMgMCBSXS9Db3VudCAxPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZS9QYWdlL01lZGlhQm94WzAgMCA1OTUgODQyXS9QYXJlbnQgMiAwIFIvUmVzb3VyY2VzPDwvRm9udDw8L0YxIDQgMCBSPj4+Pi9Db250ZW50cyA1IDAgUj4+CmVuZG9iago0IDAgb2JqCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1R5cGUxL0Jhc2VGb250L0hlbHZldGljYT4+CmVuZG9iago1IDAgb2JqCjw8L0xlbmd0aCA0ND4+CnN0cmVhbQpCVAovRjEgMjQgVGYKMTAwIDcwMCBUZAooU2F1ZGkgRWxpdGUgQWNhZGVteSkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTIzIDAwMDAwIG4gCjAwMDAwMDAyMzEgMDAwMDAgbiAKMDAwMDAwMDI4OCAwMDAwMCBuIAp0cmFpbGVyCjw8L1Jvb3QgMSAwIFIvU2l6ZSA2Pj4Kc3RhcnR4cmVmCjM4MwolJUVPRgo=";
    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,${pdfData}`;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`تم تنزيل ${title} بنجاح!`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">إعدادات الحساب</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">إدارة بيانات ملفك الشخصي وتفضيلات النظام</p>
        </div>
        <button onClick={() => showToast("تم حفظ الإعدادات بنجاح!")} className="bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10 flex items-center gap-2">
          <Save className="w-4 h-4" />
          حفظ التعديلات
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Navigation/Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          <div className="glass-card p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'profile' ? 'bg-primary/10 text-primary' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300'}`}
            >
              <User className="w-5 h-5" />
              الملف الشخصي
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'security' ? 'bg-primary/10 text-primary' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300'}`}
            >
              <Lock className="w-5 h-5" />
              الأمان وكلمة المرور
            </button>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10">
              <button onClick={() => handleDownloadPDF("بيانات_الطالب_عمر")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 font-bold transition-colors group">
                <span className="flex items-center gap-3">
                  <Database className="w-5 h-5" />
                  تحميل بياناتي
                </span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="glass-card p-6 border-l-4 border-emerald-500">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-emerald-500" />
              <h3 className="font-bold text-slate-900 dark:text-white">حالة الحساب</h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">آخر تسجيل دخول كان اليوم الساعة 08:30 صباحاً من هاتف محمول.</p>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-lg inline-block text-center border border-emerald-100 dark:border-emerald-800/30">نشط وآمن</div>
          </div>
        </div>

        {/* Settings Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 sm:p-8">
            {activeTab === 'profile' && (
              <>
                <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-primary" />
                  المعلومات الأساسية
                </h2>

                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden relative bg-slate-100 dark:bg-white/5 ring-4 ring-primary/20 shrink-0">
                    <Image src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=60" alt="Student Profile" fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                      <span className="text-white text-xs font-bold">تغيير الصورة</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-bold text-slate-600 dark:text-slate-300">الاسم الأول</label>
                        <input type="text" defaultValue="عمر" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-bold text-slate-600 dark:text-slate-300">الاسم الأخير</label>
                        <input type="text" defaultValue="عبدالرحمن" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-600 dark:text-slate-300">البريد الإلكتروني المدني (للأكاديمية)</label>
                      <input type="email" defaultValue="omar.a@students.saudielite.edu" disabled className="mt-2 w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-500 dark:text-slate-400 cursor-not-allowed" />
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 mt-10 flex items-center gap-2 border-t border-slate-100 dark:border-white/10 pt-8">
                  المعلومات الإضافية
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-300">رقم الهاتف الجوال</label>
                    <input type="tel" defaultValue="050 123 4567" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-left" dir="ltr" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-300">تاريخ الميلاد</label>
                    <input type="date" defaultValue="2007-05-15" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-300">نبذة تعريفية (تظهر للطلاب والمعلمين)</label>
                    <textarea rows={4} placeholder="طالب في الأكاديمية منذ عام 2022، مهتم بعلوم الحاسب والذكاء الاصطناعي ومشارك في نادي الروبوتكس." className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"></textarea>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'security' && (
              <section className="text-center py-10">
                <Lock className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">الأمان وكلمة المرور</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">يمكنك تغيير كلمة المرور وإعدادات الأمان الخاصة بك هنا.</p>
                <div className="mt-8 max-w-sm mx-auto space-y-4 text-right">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-300">كلمة المرور الحالية</label>
                    <input type="password" placeholder="••••••••" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-300">كلمة المرور الجديدة</label>
                    <input type="password" placeholder="••••••••" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
              </section>
            )}
          </div>
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
