"use client";

import { useSearchParams } from "next/navigation";
import { Search, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") || "";

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <Link href="/student" className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors">
          <ChevronRight className="w-5 h-5 text-slate-500" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-1">نتائج البحث</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {query ? (
              <>عرض النتائج للبحث عن: <span className="font-bold text-primary">"{query}"</span></>
            ) : (
              "الرجاء إدخال كلمة بحث صحيحة"
            )}
          </p>
        </div>
      </div>

      <div className="glass-card p-6 min-h-[400px] flex items-center justify-center border-dashed">
        {query ? (
          <div className="text-center max-w-sm">
            <div className="w-20 h-20 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300 dark:text-slate-600">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">لا توجد نتائج مطابقة لـ "{query}"</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium leading-relaxed">عذراً، لم نتمكن من العثور على أي بيانات مطابقة. تأكد من صحة الكلمة وتجربة بحث مختلف.</p>
            <Link href="/student" className="inline-flex bg-primary text-white font-bold py-2 px-6 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm">
              العودة للرئيسية
            </Link>
          </div>
        ) : (
          <div className="text-center max-w-sm">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">كيف يمكننا مساعدتك؟</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">يمكنك البحث عن دوراتك، الواجبات، الدرجات، الإشعارات أو أي تفاصيل أخرى.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="flex h-40 items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
      <SearchContent />
    </Suspense>
  );
}
