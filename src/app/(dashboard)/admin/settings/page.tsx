"use client";

import { Settings, Save, Shield, Globe, Bell, Server, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [regOpen, setRegOpen] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSave = () => showToast("تم حفظ إعدادات النظام بنجاح!");

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">إعدادات النظام</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">تهيئة خصائص المنصة والصلاحيات الإدارية</p>
        </div>
        <button onClick={handleSave} className="flex items-center gap-2 bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10">
          <Save className="w-4 h-4" />
          تحديث وحفظ النظام
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          <div className="glass-card p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('general')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'general' ? 'bg-primary/10 text-primary' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300'}`}
            >
              <Settings className="w-5 h-5" />
              الإعدادات العامة
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'security' ? 'bg-primary/10 text-primary' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300'}`}
            >
              <Shield className="w-5 h-5" />
              إدارة الصلاحيات
            </button>
            <button 
              onClick={() => setActiveTab('server')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'server' ? 'bg-primary/10 text-primary' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300'}`}
            >
              <Server className="w-5 h-5" />
              النسخ الاحتياطي والأداء
            </button>
          </div>
        </div>

        {/* Settings Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 sm:p-8 space-y-8">
            {activeTab === 'general' && (
              <>
                <section>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/10 pb-4">المعلومات الأساسية للمنصة</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-600 dark:text-slate-300">اسم المنصة</label>
                      <input type="text" defaultValue="النخبة السعودية" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-600 dark:text-slate-300">البريد الإلكتروني للإدارة</label>
                      <input type="email" defaultValue="admin@saudi-elite.edu.sa" className="mt-2 w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-left text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors" dir="ltr" />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/10 pb-4">حالة النظام</h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-200 dark:border-white/5">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm">وضع الصيانة</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">تجميد الوصول لجميع المستخدمين لحين اكتمال التحديثات</p>
                      </div>
                      <button
                        onClick={() => setMaintenanceMode(!maintenanceMode)}
                        className={`w-12 h-6 rounded-full transition-colors relative ${maintenanceMode ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                      >
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${maintenanceMode ? 'left-1' : 'right-1'}`}></div>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-200 dark:border-white/5">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm">بوابة التسجيل للعام الجديد</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">السماح بتسجيل الطلاب ورفع طلبات القبول</p>
                      </div>
                      <button
                        onClick={() => setRegOpen(!regOpen)}
                        className={`w-12 h-6 rounded-full transition-colors relative flex-shrink-0 ${regOpen ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                      >
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${regOpen ? 'left-1' : 'right-1'}`}></div>
                      </button>
                    </div>
                  </div>
                </section>
              </>
            )}

            {activeTab === 'security' && (
              <section className="text-center py-10">
                <Shield className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">إدارة الصلاحيات</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">لا توجد إعدادات إضافية حالياً.</p>
              </section>
            )}

            {activeTab === 'server' && (
              <section className="text-center py-10">
                <Server className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">النسخ الاحتياطي والأداء</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">لا توجد إعدادات إضافية حالياً.</p>
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
