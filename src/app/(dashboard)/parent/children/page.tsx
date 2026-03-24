"use client";

import { useState } from "react";
import { Users, BookOpen, Clock, Activity, FileCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function ParentChildrenPage() {
  const router = useRouter();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownloadPDF = (title: string) => {
    // Generate a very simple blank PDF with a text string using data URI
    // In a real app, you would use a library like jsPDF
    const pdfContent = "%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n2 0 obj\n<<\n/Type /Pages\n/Count 1\n/Kids [3 0 R]\n>>\nendobj\n3 0 obj\n<<\n/Type /Page\n/Parent 2 0 R\n/MediaBox [0 0 612 792]\n/Resources <<\n/Font <<\n/F1 4 0 R\n>>\n>>\n/Contents 5 0 R\n>>\nendobj\n4 0 obj\n<<\n/Type /Font\n/Subtype /Type1\n/BaseFont /Helvetica\n>>\nendobj\n5 0 obj\n<<\n/Length 44\n>>\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(Generated PDF) Tj\nET\nendstream\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000009 00000 n \n0000000056 00000 n \n0000000111 00000 n \n0000000212 00000 n \n0000000296 00000 n \ntrailer\n<<\n/Size 6\n/Root 1 0 R\n>>\nstartxref\n389\n%%EOF";
    
    // Create base64 encoded string
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
  const children = [
    { 
      name: "عمر عبدالرحمن", 
      grade: "الصف الثالث الثانوي", 
      attendance: "98%", 
      gpa: "98.5%",
      status: "ممتاز", 
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=60",
      recentActivity: [
        { title: "اختبار الرياضيات التراكمي", result: "98/100", type: "exam" },
        { title: "الغياب والتأخير", result: "0 أيام متأخرة المتبقية", type: "attendance" }
      ]
    },
    { 
      name: "سارة عبدالرحمن", 
      grade: "الصف الأول المتوسط", 
      attendance: "100%", 
      gpa: "95%",
      status: "منتظم", 
      image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=400&auto=format&fit=crop&q=60",
      recentActivity: [
        { title: "تفاعل في حصة العلوم", result: "شكر وتقدير", type: "behavior" },
        { title: "مشروع اللغة الإنجليزية", result: "قيد التسليم", type: "assignment" }
      ]
    },
    { 
      name: "خالد عبدالرحمن", 
      grade: "الصف الرابع الابتدائي", 
      attendance: "95%", 
      gpa: "88%",
      status: "يحتاج متابعة", 
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&auto=format&fit=crop&q=60",
      recentActivity: [
        { title: "تأخر عن الطابور الصباحي", result: "إنذار أولي", type: "behavior" },
        { title: "اختبار لغتي", result: "75/100", type: "exam" }
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">متابعة الأبناء</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">تقارير أداء وحضور الأبناء المسجلين</p>
        </div>
      </div>

      <div className="space-y-8">
        {children.map((child, idx) => (
          <div key={idx} className="glass-card overflow-hidden group hover:border-primary/30 transition-colors">
            {/* Header info */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden relative shadow-md ring-4 ring-primary/10">
                  <Image src={child.image} alt={child.name} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{child.name}</h2>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {child.grade}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex-1 md:flex-none text-center bg-slate-50 dark:bg-white/5 rounded-xl px-4 py-3 border border-slate-100 dark:border-white/10">
                  <p className="text-xs text-slate-500 mb-1">المعدل العام</p>
                  <p className="font-black text-slate-900 dark:text-white">{child.gpa}</p>
                </div>
                <div className="flex-1 md:flex-none text-center bg-slate-50 dark:bg-white/5 rounded-xl px-4 py-3 border border-slate-100 dark:border-white/10">
                  <p className="text-xs text-slate-500 mb-1">الحضور</p>
                  <p className="font-black text-slate-900 dark:text-white">{child.attendance}</p>
                </div>
                <button onClick={() => handleDownloadPDF('تفاصيل الابن - ' + child.name)} className="hidden md:flex bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-xl transition-colors" title="تحميل التفاصيل">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100 dark:divide-white/5 bg-slate-50/30 dark:bg-black/10">
              <div className="p-6 col-span-1 lg:col-span-2 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  النشاط الأخير
                </h3>
                <div className="space-y-3">
                  {child.recentActivity.map((act, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                        {act.type === 'exam' && <FileCheck className="w-4 h-4 text-blue-500" />}
                        {act.type === 'behavior' && <Users className="w-4 h-4 text-amber-500" />}
                        {act.type === 'attendance' && <Clock className="w-4 h-4 text-rose-500" />}
                        {act.type === 'assignment' && <BookOpen className="w-4 h-4 text-emerald-500" />}
                        {act.title}
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white bg-white dark:bg-white/5 px-2 py-1 rounded shadow-sm border border-slate-100 dark:border-white/5">{act.result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 col-span-1 flex flex-col justify-center gap-3">
                <button onClick={() => handleDownloadPDF('السجل الأكاديمي التفصيلي - ' + child.name)} className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 text-slate-700 dark:text-slate-300 font-bold py-2.5 rounded-xl text-sm transition-colors shadow-sm">
                  السجل الأكاديمي التفصيلي
                </button>
                <button onClick={() => router.push('/parent/messages')} className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 text-slate-700 dark:text-slate-300 font-bold py-2.5 rounded-xl text-sm transition-colors shadow-sm">
                  مراسلة المعلمين المباشرة
                </button>
              </div>
            </div>
          </div>
        ))}
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
