import { Briefcase, FileText, Mail, Phone, User, GraduationCap } from "lucide-react";
import Image from "next/image";
import { getPageSections } from "@/lib/supabase/queries";

export default async function CareersPage() {
  const sections = await getPageSections('careers');
  
  const heroTitle = sections['hero_title']?.content || "انضم لفريقنا";
  const heroImage = sections['hero_title']?.image || "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop";
  const heroDescription = sections['hero_description']?.content || "نبحث دائماً عن المعلمين الشغوفين والموظفين المتميزين للانضمام إلى عائلتنا التعليمية المرموقة.";
  const formTitle = sections['form_title']?.content || "نموذج التقديم";
  const detailsText = sections['details_text']?.content || "نحن في أكاديمية النخبة السعودية نؤمن بأن البيئة الإيجابية هي سر النجاح والإبداع. سواء كنت باحثاً عن فرصة وظيفية أو طالباً تتطلع للتميز، فإننا نوفر لك كل ما تحتاجه للوصول إلى أهدافك.";

  return (
    <div className="w-full flex-grow pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mt-[-96px] flex items-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0 bg-background-dark">
          <Image
            src={heroImage}
            alt="Careers Hero"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 islamic-pattern text-primary opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white mt-16 w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 text-white mb-6">
            <Briefcase className="w-4 h-4 text-accent-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">بناء المستقبل معاً</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            {heroTitle}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            {heroDescription}
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        {/* Info Content */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">لماذا تنضم إلينا؟</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
              {detailsText}
            </p>
          </div>

          <div className="glass-card p-8 flex items-start gap-6 hover:-translate-y-1 transition-transform">
            <div className="bg-primary/10 p-4 rounded-xl text-primary">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">للطلاب</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-md">
                بيئة تعليمية مجهزة بأحدث التقنيات تركز على بناء الشخصية القيادية جنباً إلى جنب مع التميز الأكاديمي.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 flex items-start gap-6 hover:-translate-y-1 transition-transform">
            <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-500">
              <Briefcase className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">للموظفين والمعلمين</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-md">
                برامج تطوير مهني مستمرة، رواتب تنافسية، بيئة عمل داعمة تشجع على الابتكار في طرق التدريس والعمل الإداري.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="lg:col-span-7 glass-card p-10 lg:p-14">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">{formTitle}</h2>
          <form className="space-y-6">

            <div className="space-y-4">
              <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">نوع التقديم</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <label className="flex items-center gap-3 p-4 border border-slate-200 dark:border-white/10 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <input type="radio" name="application_type" value="student" className="w-5 h-5 text-primary focus:ring-primary" defaultChecked />
                  <span className="font-bold text-slate-900 dark:text-white">طالب / طالبة</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-slate-200 dark:border-white/10 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <input type="radio" name="application_type" value="job" className="w-5 h-5 text-primary focus:ring-primary" />
                  <span className="font-bold text-slate-900 dark:text-white">طلب توظيف</span>
                </label>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">الاسم الكامل</label>
                <div className="relative mt-2">
                  <User className="absolute right-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="محمد أحمد"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 pr-12 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">البريد الإلكتروني</label>
                <div className="relative mt-2">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 pl-12 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white text-left dir-ltr"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">رقم الجوال</label>
                <div className="relative mt-2">
                  <Phone className="absolute right-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="050 000 0000"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 pr-12 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white text-left dir-ltr"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">المستوى الدراسي / المسمى الوظيفي</label>
                <input
                  type="text"
                  placeholder="مثال: الصف الأول الثانوي / معلم رياضيات"
                  className="mt-2 w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">إرفاق السيرة الذاتية أو السجل الأكاديمي</label>
              <div className="flex items-center justify-center w-full mt-2">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 dark:hover:bg-white/5 dark:bg-black/20 dark:border-white/10 hover:bg-slate-100 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FileText className="w-8 h-8 mb-3 text-slate-400 group-hover:text-primary transition-colors" />
                    <p className="mb-2 text-sm text-slate-500 dark:text-slate-400"><span className="font-bold">اضغط لاختيار ملف</span> أو قم بالسحب والإفلات هنا</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">PDF, DOCX, JPG (الحد الأقصى 10MB)</p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">رسالة إضافية (اختياري)</label>
              <textarea
                rows={4}
                placeholder="تحدث لنا بتفصيل أكثر عن سبب رغبتك بالانضمام..."
                className="mt-2 w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full cursor-pointer bg-gradient-to-l from-primary to-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              إرسال الطلب
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
