import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Target, Heart, Lightbulb, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full flex-grow">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mt-[-96px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background-dark">
          <Image
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000&auto=format&fit=crop"
            alt="Academy Building"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 islamic-pattern text-primary opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white mt-16 w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 text-white mb-6">
            <Award className="w-4 h-4 text-accent-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">تاريخ من العراقة والتميز</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            عن <span className="text-gradient">أكاديميتنا</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            منذ تأسيسنا، نلتزم بتقديم تجربة تعليمية استثنائية تجمع بين الأصالة والمعاصرة لتهيئة قادة الغد.
          </p>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-32 bg-background-light dark:bg-background-dark relative border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10 rounded-full"></div>
              <div className="relative h-[600px] w-full rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-premium border-8 border-white dark:border-white/5 group">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"
                  alt="Founder of the Academy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card border border-white/20 p-8 shadow-premium max-w-xs transform rotate-2">
                <p className="text-2xl font-black mb-3 text-white">&quot;التعليم هو السلاح الأقوى لتغيير العالم&quot;</p>
                <p className="text-sm text-accent-gold font-bold uppercase tracking-widest">- مقولة نؤمن بها</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-primary"></div>
                <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">رسالة المؤسس</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">نبني الإنسان <br />قبل البنيان</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                بدأت فكرة النخبة السعودية من إيمان عميق بأن أبناءنا يستحقون تعليماً يضاهي أقوى المعايير العالمية، دون التخلي عن هويتهم العربية والإسلامية وثقافتهم الأصيلة.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                نحن لسنا مجرد مدرسة، بل منصة إطلاق للأحلام والطموحات. نوفر بيئة راقية حاضنة للابتكار، نشجع التفكير النقدي، ونعزز روح القيادة لدى كل طالب يمر عبر أبوابنا.
              </p>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-white/5 shadow-sm border border-slate-100 dark:border-white/10 w-fit">
                <div className="w-16 h-16 rounded-2xl bg-slate-200 overflow-hidden relative shadow-inner">
                  <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" fill alt="Avatar" className="object-cover" />
                </div>
                <div>
                  <p className="font-black text-xl text-slate-900 dark:text-white mb-1">د. محمد بن عبدالله</p>
                  <p className="text-primary font-bold text-sm">مؤسس ورئيس مجلس الإدارة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-slate-50 dark:bg-background-dark border-b border-primary/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">مبادئنا</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-20 drop-shadow-sm">قيمنا الأساسية</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-background-dark p-10 rounded-[2.5rem] shadow-sm hover:shadow-premium border border-slate-100 dark:border-white/5 hover:border-primary/20 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                <Target className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">التميز الأكاديمي</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">نسعى دائمًا لتقديم أفضل المناهج وتبني أحدث طرق التدريس العالمية لضمان التفوق.</p>
            </div>

            <div className="bg-white dark:bg-background-dark p-10 rounded-[2.5rem] shadow-sm hover:shadow-premium border border-slate-100 dark:border-white/5 hover:border-primary/20 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                <Heart className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">الانتماء والهوية</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">نعتز بثقافتنا وتقاليدنا ونعززها في نفوس أبنائنا ليكونوا سفراء فخر لوطنهم.</p>
            </div>

            <div className="bg-white dark:bg-background-dark p-10 rounded-[2.5rem] shadow-sm hover:shadow-premium border border-slate-100 dark:border-white/5 hover:border-primary/20 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                <Lightbulb className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">الابتكار والإبداع</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">نوفر بيئة تشجع على التفكير خارج الصندوق وحل المشكلات بطرق إبداعية مبتكرة.</p>
            </div>

            <div className="bg-white dark:bg-background-dark p-10 rounded-[2.5rem] shadow-sm hover:shadow-premium border border-slate-100 dark:border-white/5 hover:border-primary/20 transition-all duration-500 group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                <Users className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">روح الفريق</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">نؤمن بأن الإنجازات العظيمة تتحقق بالتعاون، لذا نعزز مهارات العمل الجماعي باستمرار.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-background-dark relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern dark:opacity-[0.05] opacity-[0.03] mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">كن جزءاً من قصة نجاحنا</h2>
          <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto text-emerald-50">
            انضم إلى مجتمع النخبة السعودية حيث يُبنى المستقبل. تواصل معنا اليوم لاكتشاف كيف يمكننا تشكيل مستقبل مشرق لأبنائك.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/admissions" className="bg-white hover:bg-slate-50 text-primary font-black px-10 py-5 rounded-2xl shadow-premium hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group text-lg">
              ابدأ عملية القبول الآن
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
