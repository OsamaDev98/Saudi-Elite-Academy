import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  UserPlus,
  Clock,
  CalendarDays,
  Shirt,
  CreditCard,
  MonitorPlay,
  BookOpen,
  Sparkles,
  Users
} from "lucide-react";
import { getPageSections } from "@/lib/supabase/queries";

export default async function AdmissionsPage() {
  const sections = await getPageSections('admissions');
  
  const heroTitle = sections['hero_title']?.content || "القبول والتسجيل";
  const heroImage = sections['hero_title']?.image || "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop";
  const stepsTitle = sections['steps_title']?.content || "خطوات القبول والتسجيل";
  const stepsDesc = sections['steps_desc']?.content || "رحلتك الأكاديمية تبدأ هنا";
  const plansTitle = sections['plans_title']?.content || "باقات التميز المالي والرسوم";
  const plansDesc = sections['plans_desc']?.content || "الاستثمار المنشود في مستقبل أبنائنا وبناتنا.";

  return (
    <div className="w-full flex-grow">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mt-[-96px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background-dark">
          <Image
            src={heroImage}
            alt="Admissions"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 islamic-pattern text-primary opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white mt-16 w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 text-white mb-6">
            <UserPlus className="w-4 h-4 text-accent-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">البوابة الأكاديمية</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            {heroTitle}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            عملية القبول لدينا مصممة للتعرف على الطلاب الموهوبين والشغوفين بالتعلم، ليكونوا قادة المستقبل المؤثرين في قلب المملكة.
          </p>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-32 bg-white dark:bg-background-dark border-b border-primary/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 flex flex-col justify-center items-center">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">{stepsDesc}</h2>
            <h3 className="text-5xl font-black text-slate-900 dark:text-slate-100">{stepsTitle}</h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block rounded-full"></div>

            <div className="space-y-16">
              <div className="relative flex md:justify-end items-center group">
                <div className="md:w-[50%] md:pr-16 flex flex-col md:items-start text-right w-full">
                  <div className="rounded-[2.5rem] bg-white dark:bg-background-dark border border-slate-100 dark:border-white/5 shadow-sm p-10 hover:shadow-premium hover:-translate-y-2 transition-all duration-500 relative w-full group-hover:border-primary/20">
                    <div className="absolute -top-6 -left-6 text-8xl font-black text-slate-50 dark:text-white/[0.02] z-0 pointer-events-none group-hover:text-primary/5 transition-colors duration-500">01</div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <FileText className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">تقديم الطلب الإلكتروني</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed">املأ استمارة التسجيل الحصرية عبر الإنترنت مع إرفاق المستندات المطلوبة بدقة (شهادات سابقة، هوية الطالب، سجل التطعيمات).</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-background-dark shadow-md hidden md:block group-hover:scale-150 transition-transform duration-500 z-20"></div>
              </div>

              <div className="relative flex md:justify-start items-center group">
                <div className="md:w-[50%] md:pl-16 flex flex-col md:items-end text-right w-full">
                  <div className="rounded-[2.5rem] bg-white dark:bg-background-dark border border-slate-100 dark:border-white/5 shadow-sm p-10 hover:shadow-premium hover:-translate-y-2 transition-all duration-500 relative w-full group-hover:border-primary/20">
                    <div className="absolute -top-6 -left-6 text-8xl font-black text-slate-50 dark:text-white/[0.02] z-0 pointer-events-none group-hover:text-primary/5 transition-colors duration-500">02</div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <UserPlus className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">المقابلة الشخصية والتقييم</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed">بمجرد المراجعة، ستتم دعوة الطالب وولي الأمر لمقابلة لمعرفة الميول وإجراء اختبار تقييم مستوى الدخول الأكاديمي الشامل.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-background-dark shadow-md hidden md:block group-hover:scale-150 transition-transform duration-500 z-20"></div>
              </div>

              <div className="relative flex md:justify-end items-center group">
                <div className="md:w-[50%] md:pr-16 flex flex-col md:items-start text-right w-full">
                  <div className="rounded-[2.5rem] bg-white dark:bg-background-dark border border-slate-100 dark:border-white/5 shadow-sm p-10 hover:shadow-premium hover:-translate-y-2 transition-all duration-500 relative w-full group-hover:border-primary/20">
                    <div className="absolute -top-6 -left-6 text-8xl font-black text-slate-50 dark:text-white/[0.02] z-0 pointer-events-none group-hover:text-primary/5 transition-colors duration-500">03</div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">القبول والتأكيد</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed">ستتلقى رسالة تأكيد القبول. يتم تأمين المقعد الأكاديمي بعد دفع رسوم التسجيل وإكمال العقود الرسمية لضمان مكانكم في مسيرة النخبة.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-background-dark shadow-md hidden md:block group-hover:scale-150 transition-transform duration-500 z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parents Portal Section */}
      <section id="parents-portal" className="py-32 bg-slate-50 dark:bg-background-dark border-b border-primary/5 relative scroll-mt-24">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Users className="w-10 h-10" />
            </div>
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">خدمات أولياء الأمور</h2>
            <h3 className="text-5xl font-black text-slate-900 dark:text-slate-100">بوابة أولياء الأمور</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-2xl text-lg leading-relaxed">
              منصة متكاملة تمكّن أولياء الأمور من متابعة المسيرة التعليمية لأبنائهم والوصول إلى جميع الخدمات المتاحة بسهولة وشفافية.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col p-10 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/10 text-slate-900 dark:text-white">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <CalendarDays className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black mb-4">التقويم المهني</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                تتبع الأحداث والمواعيد الأكاديمية المهمة والأنشطة المدرسية على مدار العام الدراسي بكل سهولة.
              </p>
              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">جدول الاختبارات والإجازات الرسمية</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">مواعيد الفعاليات والأنشطة المدرسية</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">تنبيهات تلقائية بالمواعيد القادمة</span></li>
              </ul>
            </div>
            <div className="flex flex-col p-10 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/10 text-slate-900 dark:text-white">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Shirt className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black mb-4">متجر الزي</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                طلب الزي المدرسي الرسمي ومتابعة حالة الطلبات بسهولة تامة عبر المنصة الإلكترونية.
              </p>
              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">طلب الزي الموحد إلكترونياً</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">اختيار المقاسات والألوان المتاحة</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">تتبع حالة الطلب حتى الاستلام</span></li>
              </ul>
            </div>
            <div className="flex flex-col p-10 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/10 text-slate-900 dark:text-white">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black mb-4">الرسوم والمالية</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                إدارة المدفوعات والرسوم الدراسية والاطلاع على كشوف الحساب المالية بشكل مفصل.
              </p>
              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">كشف حساب مفصل وقابل للتحميل</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">خيارات سداد مرنة ومتعددة</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">إشعارات بمواعيد الاستحقاق</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Students Portal Section */}
      <section id="students-portal" className="py-32 bg-white dark:bg-background-dark border-b border-primary/5 relative scroll-mt-24">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <BookOpen className="w-10 h-10" />
            </div>
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">خدمات الطلاب</h2>
            <h3 className="text-5xl font-black text-slate-900 dark:text-slate-100">بوابة الطلاب</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-2xl text-lg leading-relaxed">
              مركز شامل يتيح للطلاب الوصول إلى أدوات التعلم الرقمية والمصادر التعليمية والأنشطة اللامنهجية الممتعة.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col p-10 bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/10 text-slate-900 dark:text-white">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black mb-4">نظام التعلم LMS</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                منصة التعلم الإلكتروني المتقدمة لمتابعة الدروس والواجبات والاختبارات بشكل تفاعلي.
              </p>
              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">دروس تفاعلية ومحتوى مرئي متقدم</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">تسليم الواجبات ومتابعة الدرجات</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">تواصل مباشر مع المعلمين</span></li>
              </ul>
            </div>
            <div className="flex flex-col p-10 bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/10 text-slate-900 dark:text-white">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black mb-4">المكتبة الرقمية</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                الوصول لأكثر من 100,000 مجلة أكاديمية ومصدر بحثي عالمي متنوع لتعزيز المعرفة.
              </p>
              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">قاعدة بيانات أكاديمية ضخمة ومتنوعة</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">كتب إلكترونية ومراجع علمية معتمدة</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">بحث متقدم وتصفح سهل الاستخدام</span></li>
              </ul>
            </div>
            <div className="flex flex-col p-10 bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-100 dark:border-white/10 text-slate-900 dark:text-white">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black mb-4">الأندية والمواهب</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                استكشف الأنشطة اللامنهجية والنوادي المتنوعة لصقل المواهب والإبداع في بيئة محفزة.
              </p>
              <ul className="space-y-3 text-right">
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">أندية الروبوتكس والبرمجة والإبداع</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">فرق رياضية وفنية متخصصة</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">مسابقات ومعارض محلية ودولية</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Fees */}
      <section className="py-32 bg-slate-50 dark:bg-background-dark border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 flex flex-col items-center justify-center">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">{plansDesc}</h2>
            <h3 className="text-5xl font-black text-slate-900 dark:text-slate-100">{plansTitle}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="bg-white dark:bg-white/5 rounded-[3rem] p-10 shadow-sm hover:shadow-premium border border-slate-100 dark:border-white/10 flex flex-col text-center transition-all duration-500 group">
              <h4 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">رياض الأطفال</h4>
              <p className="text-slate-500 mb-8 font-medium">مرحلة التأسيس والاكتشاف</p>
              <div className="text-5xl font-black text-primary mb-8 group-hover:scale-105 transition-transform">35<span className="text-2xl">,000</span> <span className="text-sm text-slate-400 font-bold block mt-2">ر.س/سنوياً</span></div>
              <ul className="text-right w-full space-y-4 mb-10">
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">مناهج منتسوري ونور البيان المتقدمة</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">وجبات مدرسية صحية وعضوية</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">رحلات استكشافية أسبوعية حيوية</span></li>
              </ul>
              <Link href="/login" className="mt-auto w-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-black py-4 rounded-2xl transition-colors">تقديم طلب</Link>
            </div>

            <div className="bg-background-dark text-white rounded-[3rem] p-12 shadow-premium-dark border-4 border-primary relative flex flex-col text-center transform md:-translate-y-6 z-10">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent-gold text-background-dark font-black text-sm px-6 py-2 rounded-full uppercase tracking-widest shadow-md">الباقة الاستثنائية</div>
              <h4 className="text-3xl font-black mb-3">الابتدائية والمتوسطة</h4>
              <p className="text-slate-300 mb-8 font-medium">بناء المهارات الأساسية والثقة</p>
              <div className="text-6xl font-black text-white mb-8">45<span className="text-3xl">,000</span> <span className="text-sm text-accent-gold font-bold block mt-3">ر.س/سنوياً</span></div>
              <ul className="text-right w-full space-y-4 mb-10">
                <li className="flex items-start gap-3 text-[15px] text-slate-300"><CheckCircle2 className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" /> <span className="leading-relaxed">منهج ثنائي اللغة مكثف وعصري</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-300"><CheckCircle2 className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" /> <span className="leading-relaxed">برامج ستيم (STEAM) التطبيقية</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-300"><CheckCircle2 className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" /> <span className="leading-relaxed">نوادي الروبوتكس والذكاء الاصطناعي</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-300"><CheckCircle2 className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" /> <span className="leading-relaxed">برامج القيادة المبكرة لبناء الشخصية</span></li>
              </ul>
              <Link href="/login" className="mt-auto w-full bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-2xl shadow-lg transition-all hover:-translate-y-1">تقديم طلب</Link>
            </div>

            <div className="bg-white dark:bg-white/5 rounded-[3rem] p-10 shadow-sm hover:shadow-premium border border-slate-100 dark:border-white/10 flex flex-col text-center transition-all duration-500 group">
              <h4 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">المرحلة الثانوية</h4>
              <p className="text-slate-500 mb-8 font-medium">الاستعداد للجامعة والمستقبل المشرق</p>
              <div className="text-5xl font-black text-primary mb-8 group-hover:scale-105 transition-transform">55<span className="text-2xl">,000</span> <span className="text-sm text-slate-400 font-bold block mt-2">ر.س/سنوياً</span></div>
              <ul className="text-right w-full space-y-4 mb-10">
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">شهادة البكالوريا الدولية (IB) المرموقة</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">إرشاد جامعي متخصص وفريد (1:1)</span></li>
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-400"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="leading-relaxed">برامج القيادة التنفيذية وخدمة المجتمع</span></li>
              </ul>
              <Link href="/login" className="mt-auto w-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-black py-4 rounded-2xl transition-colors">تقديم طلب</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-32 bg-background-light dark:bg-background-dark relative border-t-4 border-primary/20">
        <div className="absolute inset-0 islamic-pattern text-primary opacity-[0.02] mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto bg-white/60 dark:bg-white/5 rounded-[3rem] p-12 border border-slate-200 dark:border-white/10 shadow-premium backdrop-blur-md">
            <div className="flex items-center gap-8 mb-8 md:mb-0">
              <div className="w-20 h-20 bg-gradient-to-tr from-primary to-emerald-400 rounded-3xl flex items-center justify-center shrink-0 text-white shadow-lg">
                <Clock className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-3 text-slate-900 dark:text-white">جدولة مسارك المشرق</h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
                  يُرجى ملاحظة أن القبول للعام الدراسي 2024-2025 مفتوح حالياً. المقاعد محدودة، لذا ننصح ببدء إجراءات التقديم في أقرب فرصة.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto">
              <span className="bg-white dark:bg-background-dark text-slate-900 dark:text-white font-black px-8 py-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm text-center flex items-center justify-center gap-2">
                <span className="text-primary">•</span> التسجيل المبكر: 30 مايو
              </span>
              <span className="bg-primary text-white font-black px-8 py-4 rounded-2xl shadow-lg text-center flex items-center justify-center gap-2">
                <span className="text-accent-gold">•</span> انطلاق الدراسة: 1 سبتمبر
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
