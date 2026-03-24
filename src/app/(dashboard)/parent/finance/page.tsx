"use client";

import { useState } from "react";
import { CreditCard, Download, Receipt, ArrowDownToLine, ChevronDown, CheckCircle2, AlertCircle } from "lucide-react";

export default function ParentFinancePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'unpaid' | 'paid'>('all');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownloadPDF = (title: string) => {
    // Generate a very simple blank PDF with a text string using data URI
    const pdfContent = "%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n2 0 obj\n<<\n/Type /Pages\n/Count 1\n/Kids [3 0 R]\n>>\nendobj\n3 0 obj\n<<\n/Type /Page\n/Parent 2 0 R\n/MediaBox [0 0 612 792]\n/Resources <<\n/Font <<\n/F1 4 0 R\n>>\n>>\n/Contents 5 0 R\n>>\nendobj\n4 0 obj\n<<\n/Type /Font\n/Subtype /Type1\n/BaseFont /Helvetica\n>>\nendobj\n5 0 obj\n<<\n/Length 44\n>>\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(Generated PDF) Tj\nET\nendstream\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000009 00000 n \n0000000056 00000 n \n0000000111 00000 n \n0000000212 00000 n \n0000000296 00000 n \ntrailer\n<<\n/Size 6\n/Root 1 0 R\n>>\nstartxref\n389\n%%EOF";
    
    const base64Pdf = btoa(pdfContent);
    const dataUri = `data:application/pdf;base64,${base64Pdf}`;
    
    // Create a temporary link to trigger download
    const link = document.createElement("a");
    link.href = dataUri;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast(`تم تحميل ${title} بنجاح`);
  };

  const allInvoices = [
    { id: "INV-2026-042", desc: "القسط الثاني", child: "خالد عبدالرحمن", date: "25 مارس 2026", amount: "2,500 ر.س", status: "unpaid" },
    { id: "INV-2026-031", desc: "رسوم الزي المدرسي", child: "سارة عبدالرحمن", date: "15 يناير 2026", amount: "450 ر.س", status: "paid" },
    { id: "INV-2025-890", desc: "القسط الأول", child: "خالد عبدالرحمن", date: "15 أغسطس 2025", amount: "2,500 ر.س", status: "paid" },
    { id: "INV-2025-885", desc: "الرسوم السنوية كاملة", child: "عمر عبدالرحمن", date: "10 أغسطس 2025", amount: "18,000 ر.س", status: "paid" },
    { id: "INV-2025-884", desc: "الرسوم السنوية كاملة", child: "سارة عبدالرحمن", date: "10 أغسطس 2025", amount: "15,000 ر.س", status: "paid" }
  ];

  const filteredInvoices = activeTab === 'all' 
    ? allInvoices 
    : allInvoices.filter(inv => inv.status === activeTab);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">السجل المالي والرسوم</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">متابعة الفواتير والمدفوعات الخاصة بالأبناء</p>
        </div>
        <button onClick={() => handleDownloadPDF('كشف الحساب - القيمة الإجمالية')}  className="bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10 flex items-center gap-2">
          <Download className="w-4 h-4" />
          كشف حساب شامل
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 flex items-center gap-4 border-l-4 border-slate-300 dark:border-slate-600">
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 flex flex-shrink-0 items-center justify-center">
            <Receipt className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">إجمالي الرسوم (السنوية)</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">45,000 <span className="text-sm font-medium text-slate-400">ر.س</span></h3>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4 border-l-4 border-emerald-500">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex flex-shrink-0 items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">المدفوع</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">42,500 <span className="text-sm font-medium text-slate-400">ر.س</span></h3>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4 border-l-4 border-rose-500">
          <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 flex flex-shrink-0 items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">المتبقي</p>
            <h3 className="text-2xl font-black text-rose-600 dark:text-rose-400">2,500 <span className="text-sm font-medium text-slate-400">ر.س</span></h3>
          </div>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-white/10 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            سجل الفواتير
          </h2>
          <div className="flex bg-slate-50 dark:bg-black/20 rounded-lg p-1 border border-slate-200 dark:border-white/5">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-1.5 rounded-md text-sm font-bold transition-colors ${activeTab === 'all' ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}>الكل</button>
            <button onClick={() => setActiveTab('unpaid')} className={`px-4 py-1.5 rounded-md text-sm font-bold transition-colors ${activeTab === 'unpaid' ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}>غير مدفوعة</button>
            <button onClick={() => setActiveTab('paid')} className={`px-4 py-1.5 rounded-md text-sm font-bold transition-colors ${activeTab === 'paid' ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}>مكتملة</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm">
              <tr>
                <th className="py-4 px-6 font-semibold">رقم الفاتورة</th>
                <th className="py-4 px-6 font-semibold">البيان / الابن</th>
                <th className="py-4 px-6 font-semibold">تاريخ الاستحقاق</th>
                <th className="py-4 px-6 font-semibold">المبلغ</th>
                <th className="py-4 px-6 font-semibold">الحالة</th>
                <th className="py-4 px-6 font-semibold text-left">إجراء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {filteredInvoices.map((invoice, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 font-mono text-sm text-slate-500">{invoice.id}</td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-slate-900 dark:text-white">{invoice.desc}</p>
                    <p className="text-xs text-slate-500 mt-1">{invoice.child}</p>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{invoice.date}</td>
                  <td className="py-4 px-6 font-black text-slate-900 dark:text-white">{invoice.amount}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 border rounded-lg text-xs font-bold ${
                      invoice.status === 'paid' 
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/30" 
                        : "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 border-rose-100 dark:border-rose-800/30 line-pulse" // Assume line-pulse causes it to catch attention
                    }`}>
                      {invoice.status === 'paid' ? 'مدفوعة' : 'مستحقة'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-left">
                    {invoice.status === 'unpaid' ? (
                      <button onClick={() => showToast('جاري تحويلك لصفحة السداد...')}  className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors">
                        دفع الآن
                      </button>
                    ) : (
                      <button onClick={() => handleDownloadPDF('ايصال-' + invoice.id)} className="text-slate-400 hover:text-primary p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors" title="تحميل الإيصال">
                        <ArrowDownToLine className="w-5 h-5" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
