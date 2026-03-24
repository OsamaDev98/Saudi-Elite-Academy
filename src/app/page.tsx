import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowLeft,
  CalendarDays,
  Shirt,
  CreditCard,
  MonitorPlay,
  BookOpen,
  Users,
  Star,
  Award,
  Sparkles
} from "lucide-react";
import { getLatestNews, getPageSections } from "@/lib/supabase/queries";

export default async function Home() {
  const latestNews = await getLatestNews(3);
  const sections = await getPageSections('home');

  const heroTitle = sections['hero_title']?.content || "تمكين قادة الغد";
  const heroImage = sections['hero_title']?.image || "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop";
  const heroDescription = sections['hero_description']?.content || "مؤسسة مرموقة ملتزمة بالتميز الأكاديمي، والقيم الوطنية، وإعداد الطلاب للقيادة العالمية في المملكة العربية السعودية الحديثة.";
  const visionText = sections['vision_text']?.content || "أن نكون مركزاً عالمياً للتميز التعليمي الذي يرعى التطور الفكري والأخلاقي والاجتماعي لكل طالب.";

  return (
    <div className="w-full flex-grow">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full mt-[-96px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/70 to-transparent z-10"></div>
          <Image
            src={heroImage}
            alt="Saudi Elite Academy Campus"
            fill
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 text-white mb-8">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">التميز في التعليم المتقدم</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8">
              {heroTitle}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-medium">
              {heroDescription}
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/admissions" className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-black text-lg shadow-premium hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group">
                قدم الآن
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              </Link>
              <Link href="/about" className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:-translate-y-1 shadow-premium-dark transition-all duration-300 flex items-center gap-3">
                جولة في الحرم
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 relative overflow-hidden bg-background-light">
        <div className="absolute inset-0 islamic-pattern text-primary opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10 rounded-full"></div>
              <div className="relative h-80 w-full rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-premium border-8 border-white group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop"
                  alt="Saudi Students Academic focus"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="relative h-80 w-full rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-premium translate-y-12 border-8 border-white group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
                  alt="Saudi Student life"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary"></div>
                  <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">أساسنا المتين</h2>
                </div>
                <h3 className="text-5xl font-black mb-8 text-slate-900 cursor-default leading-tight">الرؤية <span className="text-gradient">والرسالة</span></h3>
                <p className="text-slate-600 text-xl leading-relaxed mb-8">
                  {visionText}
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm hover:shadow-premium border border-slate-100/50 hover:border-primary/20 transition-all duration-500 group">
                  <div className="bg-primary/10 p-4 rounded-2xl h-fit group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all text-primary duration-500">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-2 text-slate-900 group-hover:text-primary transition-colors">التميز الأكاديمي</h4>
                    <p className="text-slate-500 leading-relaxed">مناهج عالمية المستوى مصممة لتحدي وإلهام العقول الشابة وبناء قادة المستقبل.</p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-sm hover:shadow-premium border border-slate-100/50 hover:border-primary/20 transition-all duration-500 group">
                  <div className="bg-primary/10 p-4 rounded-2xl h-fit group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all text-primary duration-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-2 text-slate-900 group-hover:text-primary transition-colors">القيم الوطنية</h4>
                    <p className="text-slate-500 leading-relaxed">متجذرة بعمق في التراث السعودي والمبادئ الإسلامية لخلق هوية حضارية قوية.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center justify-center flex flex-col items-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">خدمات متكاملة</h2>
            <h3 className="text-4xl font-black text-slate-900">الوصول السريع</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:shadow-premium transition-all duration-500 group">
              <h4 className="text-3xl text-slate-900 font-black mb-10 flex items-center gap-4">
                <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Users className="w-7 h-7" />
                </div>
                بوابة أولياء الأمور
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Link href="/admissions#parents-portal" className="flex flex-col items-center gap-4 text-center p-8 bg-white rounded-3xl hover:bg-primary hover:text-white shadow-sm hover:shadow-premium border border-slate-100 transition-all duration-300 text-slate-900 group/link">
                  <CalendarDays className="w-12 h-12 text-primary group-hover/link:text-white group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-black">التقويم المهني</span>
                </Link>
                <Link href="/admissions#parents-portal" className="flex flex-col items-center gap-4 text-center p-8 bg-white rounded-3xl hover:bg-primary hover:text-white shadow-sm hover:shadow-premium border border-slate-100 transition-all duration-300 text-slate-900 group/link">
                  <Shirt className="w-12 h-12 text-primary group-hover/link:text-white group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-black">متجر الزي</span>
                </Link>
                <Link href="/admissions#parents-portal" className="flex flex-col items-center gap-4 text-center p-8 bg-white rounded-3xl hover:bg-primary hover:text-white shadow-sm hover:shadow-premium border border-slate-100 transition-all duration-300 text-slate-900 group/link">
                  <CreditCard className="w-12 h-12 text-primary group-hover/link:text-white group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-black">الرسوم والمالية</span>
                </Link>
              </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:shadow-premium transition-all duration-500 group">
              <h4 className="text-3xl text-slate-900 font-black mb-10 flex items-center gap-4">
                <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-7 h-7" />
                </div>
                بوابة الطلاب
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Link href="/admissions#students-portal" className="flex flex-col items-center gap-4 text-center p-8 bg-white rounded-3xl hover:bg-primary hover:text-white shadow-sm hover:shadow-premium border border-slate-100 transition-all duration-300 text-slate-900 group/link">
                  <MonitorPlay className="w-12 h-12 text-primary group-hover/link:text-white group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-black">نظام التعلم LMS</span>
                </Link>
                <Link href="/admissions#students-portal" className="flex flex-col items-center gap-4 text-center p-8 bg-white rounded-3xl hover:bg-primary hover:text-white shadow-sm hover:shadow-premium border border-slate-100 transition-all duration-300 text-slate-900 group/link">
                  <BookOpen className="w-12 h-12 text-primary group-hover/link:text-white group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-black">المكتبة الرقمية</span>
                </Link>
                <Link href="/admissions#students-portal" className="flex flex-col items-center gap-4 text-center p-8 bg-white rounded-3xl hover:bg-primary hover:text-white shadow-sm hover:shadow-premium border border-slate-100 transition-all duration-300 text-slate-900 group/link">
                  <Sparkles className="w-12 h-12 text-primary group-hover/link:text-white group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-black">الأندية والمواهب</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-32 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary"></div>
                <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">نبض الأكاديمية</h2>
              </div>
              <h3 className="text-5xl text-slate-900 font-black">الأخبار والمستجدات</h3>
            </div>
            <Link href="/news" className="text-slate-500 font-bold flex items-center gap-3 hover:gap-4 transition-all hover:text-primary bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-100">
              جميع الأخبار
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {latestNews.length > 0 ? (
              latestNews.map((news) => (
                <Link
                  key={news.id}
                  href={`/news/${news.slug || news.id}`}
                  className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-premium transition-all duration-500 border border-slate-100"
                >
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-6 shadow-inner">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 w-full h-full"></div>
                    <Image
                      src={news.image_url || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 w-full h-full text-transparent"
                    />
                    {news.published_at && (
                      <div className="absolute top-4 right-4 glass text-slate-900 font-black px-4 py-2 rounded-xl text-sm z-20 shadow-sm border border-white/40">
                        {new Date(news.published_at).toLocaleDateString('ar-SA', { day: 'numeric', month: 'long' })}
                      </div>
                    )}
                  </div>
                  <div className="px-2 pb-4">
                    <h4 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors mb-3 leading-tight">{news.title}</h4>
                    <p className="text-slate-500 line-clamp-2 leading-relaxed">{news.excerpt}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-slate-400 font-bold border-2 border-dashed border-slate-100 rounded-[2.5rem]">
                لا توجد أخبار حالياً
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center justify-center flex flex-col items-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">بكل شفافية</h2>
            <h3 className="text-4xl font-black text-slate-900">الأسئلة الشائعة</h3>
          </div>
          <div className="space-y-4">
            <details className="group bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-premium transition-all duration-300">
              <summary className="font-black text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center group-open:text-primary transition-colors">
                كيف يمكنني التقديم للالتحاق بالأكاديمية؟
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-slate-500 mt-4 leading-relaxed font-medium">
                يمكنك التقديم عبر صفحة "الوظائف والانضمام" في موقعنا الإلكتروني، أو من خلال زيارة الحرم الأكاديمي خلال ساعات العمل الرسمية. نطلب تقديم السجل الأكاديمي للطالب ونسخة من الهوية للتسجيل المبدئي.
              </p>
            </details>
            <details className="group bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-premium transition-all duration-300">
              <summary className="font-black text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center group-open:text-primary transition-colors">
                هل توفر الأكاديمية منحاً دراسية؟
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-slate-500 mt-4 leading-relaxed font-medium">
                نعم، نوفر منحاً دراسية للطلاب المتفوقين أكاديمياً والموهوبين في المجالات الرياضية والتقنية. يمكنك التعرف على شروط القبول عبر بوابة أولياء الأمور أو التواصل مع شؤون الطلاب.
              </p>
            </details>
            <details className="group bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-premium transition-all duration-300">
              <summary className="font-black text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center group-open:text-primary transition-colors">
                ما هو المنهج التعليمي المعتمد لديكم؟
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-slate-500 mt-4 leading-relaxed font-medium">
                نعتمد منهجاً دولياً متكاملاً يمزج بين أفضل الممارسات التعليمية العالمية والقيم والثقافة السعودية الأصيلة، مع التركيز على مهارات القرن الحادي والعشرين كالبرمجة والذكاء الاصطناعي.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl rounded-full mix-blend-screen opacity-50"></div>
        <div className="absolute right-0 top-0 islamic-pattern text-primary h-full w-1/2 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center justify-center flex flex-col items-center mb-20">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">آراء استثنائية</h2>
            <h3 className="text-4xl font-black text-slate-900">صوت مجتمعنا</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="glass-card  p-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1.5 text-accent-gold mb-8">
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
              </div>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">&quot;كان الانتقال إلى النخبة السعودية أفضل قرار لمستقبل ابني. التوازن بين المعايير الدولية والقيم المحلية استثنائي ويفوق التوقعات دائماً.&quot;</p>
              <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accent-gold to-yellow-300 flex items-center justify-center font-black text-background-dark text-xl shadow-lg">ف ع</div>
                <div>
                  <p className="font-black text-lg text-primary">فيصل العتيبي</p>
                  <p className="text-sm text-slate-400 font-medium">ولي أمر طالب بالصف التاسع</p>
                </div>
              </div>
            </div>
            <div className="glass-card  p-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1.5 text-accent-gold mb-8">
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
              </div>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">&quot;كخريجة، يمكنني القول إن المدرسة لم تعلمني المواد الدراسية فحسب، بل علمتني كيف أفكر وأقود وأخدم وطني بفخر على جميع الأصعدة.&quot;</p>
              <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accent-gold to-yellow-300 flex items-center justify-center font-black text-background-dark text-xl shadow-lg">ن م</div>
                <div>
                  <p className="font-black text-lg text-primary">نورة محمد</p>
                  <p className="text-sm text-slate-400 font-medium">خريجة دفعة 2019، طالبة قانون</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-10 hover:-translate-y-2 transition-transform duration-300 hidden lg:block border border-primary/20">
              <div className="flex gap-1.5 text-accent-gold mb-8 relative z-10">
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
                <Star className="w-6 h-6 fill-accent-gold text-accent-gold drop-shadow-md" />
              </div>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium relative z-10">&quot;أعضاء هيئة التدريس مهرة حقاً. بناتي يواجهن تحديات مستمرة ويتم تشجيعهن للوصول إلى كامل إمكاناتهن كل يوم ضمن بيئة محفزة وآمنة.&quot;</p>
              <div className="flex items-center gap-5 pt-8 border-t border-white/10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accent-gold to-yellow-300 flex items-center justify-center font-black text-background-dark text-xl shadow-lg">خ أ</div>
                <div>
                  <p className="font-black text-lg text-primary">خالد أحمد</p>
                  <p className="text-sm text-slate-400 font-medium">ولي أمر لطالبين بالثانوية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
