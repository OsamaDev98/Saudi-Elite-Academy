"use client";

import { useState } from "react";
import { CreditCard, Download, Search, Filter, TrendingUp, DollarSign, Activity, CheckCircle2, X } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminFinancePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isAllTransactionsModalOpen, setIsAllTransactionsModalOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("هذا الشهر");

  const graphDataMap: any = {
    "هذا الشهر": [
      { name: "الأسبوع 1", value: 30000 },
      { name: "الأسبوع 2", value: 55000 },
      { name: "الأسبوع 3", value: 45000 },
      { name: "الأسبوع 4", value: 70000 },
    ],
    "الشهر الماضي": [
      { name: "الأسبوع 1", value: 25000 },
      { name: "الأسبوع 2", value: 48000 },
      { name: "الأسبوع 3", value: 39000 },
      { name: "الأسبوع 4", value: 68000 },
    ],
    "الفصل الدراسي": [
      { name: "الشهر 1", value: 120000 },
      { name: "الشهر 2", value: 145000 },
      { name: "الشهر 3", value: 180000 },
      { name: "الشهر 4", value: 250000 },
    ],
  };

  const currentGraphData = graphDataMap[selectedPeriod] || graphDataMap["هذا الشهر"];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const allTransactions = [
    { id: "#INV-2023-001", name: "عمر عبدالرحمن الشمري", amount: "15,000", status: "مدفوعة", date: "اليوم" },
    { id: "#INV-2023-002", name: "سعد محمد الدوسري", amount: "12,000", status: "متأخرة", date: "أمس" },
    { id: "#INV-2023-003", name: "أحمد فهد العتيبي", amount: "15,000", status: "معلقة", date: "منذ يومين" },
    { id: "#INV-2023-004", name: "خالد سعيد الغامدي", amount: "10,000", status: "مدفوعة", date: "منذ 3 أيام" },
    { id: "#INV-2023-005", name: "فيصل ناصر القحطاني", amount: "15,000", status: "مدفوعة", date: "15 مارس 2024" },
    { id: "#INV-2023-006", name: "يوسف ابراهيم الزهراني", amount: "12,000", status: "متأخرة", date: "14 مارس 2024" },
    { id: "#INV-2023-007", name: "مشعل عبدالمحسن الجهني", amount: "15,000", status: "مدفوعة", date: "10 مارس 2024" },
    { id: "#INV-2023-008", name: "بدر سعود المطيري", amount: "12,000", status: "معلقة", date: "08 مارس 2024" },
  ];

  const handleExport = () => {
    const content = `
      <div style="font-family: Arial, sans-serif; direction: rtl; padding: 40px; background: #fff; max-width: 800px; margin: auto;">
        <h1 style="color: #0f172a; margin: 0;">أكاديمية النخبة السعودية</h1>
        <p style="color: #64748b; border-bottom: 2px solid #0f172a; padding-bottom: 20px;">التقرير المالي الشهري</p>
        
        <div style="display: flex; gap: 20px; margin-bottom: 30px;">
          <div style="flex: 1; padding: 20px; background: #f8fafc; border-radius: 8px;">
            <p style="margin:0; color:#64748b;">المدفوعات المحصلة</p>
            <h2 style="margin:5px 0 0 0; color:#10b981;">450,000 ر.س</h2>
          </div>
          <div style="flex: 1; padding: 20px; background: #f8fafc; border-radius: 8px;">
            <p style="margin:0; color:#64748b;">الرسوم المتأخرة</p>
            <h2 style="margin:5px 0 0 0; color:#f59e0b;">120,000 ر.س</h2>
          </div>
        </div>

        <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%; text-align: right;">
          <tr style="background-color: #f1f5f9;">
            <th>رقم الفاتورة</th><th>الطالب</th><th>المبلغ</th><th>الحالة</th><th>التاريخ</th>
          </tr>
          ${allTransactions.map(tx => `<tr><td>${tx.id}</td><td>${tx.name}</td><td>${tx.amount}</td><td>${tx.status}</td><td>${tx.date}</td></tr>`).join('')}
        </table>
      </div>
    `;
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(content);
      win.document.close();
      win.focus();
      setTimeout(() => win.print(), 500);
      showToast("تم تحضير التقرير المالي للطباعة بنجاح!");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">الإدارة المالية</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">متابعة إيرادات الرسوم الدراسية والتقارير المحاسبية</p>
        </div>
        <button onClick={handleExport} className="flex items-center gap-2 bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10">
          <Download className="w-4 h-4" />
          تصدير التقرير المالي
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 border-l-4 border-l-emerald-500 flex justify-between items-center group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
          <div>
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">المدفوعات المحصلة (هذا الشهر)</h3>
            <p className="text-3xl font-black text-slate-900 dark:text-white">450k <span className="text-sm font-bold text-slate-400">ر.س</span></p>
          </div>
          <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
        
        <div className="glass-card p-6 border-l-4 border-l-amber-500 flex justify-between items-center group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
          <div>
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">رسوم متأخرة (غير محصلة)</h3>
            <p className="text-3xl font-black text-slate-900 dark:text-white">120k <span className="text-sm font-bold text-slate-400">ر.س</span></p>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Activity className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-card p-6 border-l-4 border-l-blue-500 flex justify-between items-center group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
          <div>
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">إجمالي الفواتير الصادرة</h3>
            <p className="text-3xl font-black text-slate-900 dark:text-white">1,450</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">آخر المعاملات المالية</h2>
            <button className="text-primary font-bold text-sm hover:underline" onClick={() => setIsAllTransactionsModalOpen(true)}>عرض الكل</button>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {allTransactions.slice(0, 4).map((tx, i) => (
              <div key={i} className="p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{tx.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{tx.id} • {tx.date}</p>
                </div>
                <div className="text-left">
                  <div className="font-black text-slate-900 dark:text-white">{tx.amount} <span className="text-xs font-bold text-slate-400">ر.س</span></div>
                  <span className={`inline-block mt-1 px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    tx.status === 'مدفوعة' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                    tx.status === 'متأخرة' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' :
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>
                    {tx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">التحليل المالي للإيرادات</h2>
            <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)} className="bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-1.5 text-xs text-slate-900 dark:text-white font-bold focus:outline-none focus:border-primary">
              <option value="هذا الشهر">هذا الشهر</option>
              <option value="الشهر الماضي">الشهر الماضي</option>
              <option value="الفصل الدراسي الحالي">الفصل الدراسي الحالي</option>
            </select>
          </div>
          
          <div className="flex-1 w-full min-h-[300px] mt-4" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentGraphData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000}k`} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', textAlign: 'right', direction: 'rtl' }}
                  itemStyle={{ color: '#0ca845', fontWeight: 'bold' }}
                  formatter={(value: any) => [`${Number(value).toLocaleString()} ر.س`, 'الإيرادات']}
                  labelStyle={{ color: '#64748b', fontWeight: 'bold', marginBottom: '4px' }}
                />
                <Line type="monotone" dataKey="value" stroke="#0ca845" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6, fill: '#0ca845', stroke: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <Modal isOpen={isAllTransactionsModalOpen} onClose={() => setIsAllTransactionsModalOpen(false)} title="جميع المعاملات المالية (هذا الفصل)">
        <div className="max-h-[60vh] overflow-y-auto w-[600px] max-w-full space-y-2 pr-2">
          {allTransactions.map((tx, i) => (
            <div key={i} className="p-4 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl hover:border-primary/50 transition-colors flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{tx.name}</h4>
                <p className="text-sm font-mono text-slate-500 dark:text-slate-400 mt-1">{tx.id}</p>
              </div>
              <div className="flex flex-col sm:items-end text-center sm:text-left">
                <div className="font-black text-slate-900 dark:text-white text-lg">{tx.amount} <span className="text-xs font-bold text-slate-400">ر.س</span></div>
                <div className="flex gap-2 items-center justify-center mt-1">
                  <span className="text-xs text-slate-400 font-semibold">{tx.date}</span>
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    tx.status === 'مدفوعة' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                    tx.status === 'متأخرة' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' :
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>
                    {tx.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
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
