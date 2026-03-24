import { BookOpen, GraduationCap, Microscope, Palette, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AcademicsPage() {
  return (
    <div className="w-full flex-grow">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mt-[-96px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background-dark">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
            alt="Academics Hero"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 islamic-pattern text-primary opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white mt-16 w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 text-white mb-6">
            <BookOpen className="w-4 h-4 text-accent-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">التميز الأكاديمي</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            برامجنا <span className="text-gradient">التعليمية</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            نقدم في أكاديمية النخبة السعودية مناهج عالمية المستوى تدمج التقاليد مع الابتكار، لإعداد قادة المستقبل لنجاح عالمي.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 grid lg:grid-cols-2 gap-16 items-center mt-32">
        <div>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">مناهج تلهم العقول</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            تم تصميم مناهجنا لتعزيز التفكير النقدي، وحل المشكلات، والتعلم مدى الحياة. نحن نركز على تطوير الطالب من جميع النواحي، موازنين بين الدقة الأكاديمية والنمو الإبداعي والبدني.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="bg-primary/10 p-4 rounded-xl h-fit">
                <Microscope className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">تعليم STEAM (العلوم والتكنولوجيا والهندسة والفنون والرياضيات)</h3>
                <p className="text-slate-600 dark:text-slate-400">نهج متكامل يشجع على الابتكار والتفكير التصميمي والتعاون.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-accent-gold/10 p-4 rounded-xl h-fit">
                <Palette className="w-8 h-8 text-accent-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">الفنون والعلوم الإنسانية</h3>
                <p className="text-slate-600 dark:text-slate-400">برنامج غني ينمي التعبير الإبداعي والوعي الثقافي والتاريخي.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-premium">
            <Image src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" alt="Science Lab" fill className="object-cover" />
          </div>
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-premium mt-12">
            <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" alt="Classroom" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* educational Stages */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full islamic-pattern opacity-[0.03] z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">المراحل الأكاديمية</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">رحلة متصلة من التميز التعليمي، تبدأ من الطفولة المبكرة وصولاً إلى التخرج.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Early Childhood */}
            <div className="glass-card p-8 bg-white dark:bg-surface-dark border-t-4 border-t-emerald-500 hover:-translate-y-2 transition-transform duration-500">
              <GraduationCap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">رياض الأطفال والابتدائي الأولي</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                التركيز على التعلم القائم على اللعب، واكتساب اللغة، وتطوير المهارات الاجتماعية والعاطفية الأساسية في بيئة آمنة ومحفزة.
              </p>
            </div>

            {/* Middle School */}
            <div className="glass-card p-8 bg-white dark:bg-surface-dark border-t-4 border-t-emerald-500 hover:-translate-y-2 transition-transform duration-500">
              <GraduationCap className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">المرحلة المتوسطة</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                مرحلة انتقالية تركز على تعميق الفهم الأكاديمي، وبناء الاستقلالية، وتوجيه الطلاب نحو اكتشاف اهتماماتهم ومواهبهم الفريدة.
              </p>
            </div>

            {/* High School */}
            <div className="glass-card p-8 bg-white dark:bg-surface-dark border-t-4 border-t-emerald-500 hover:-translate-y-2 transition-transform duration-500">
              <GraduationCap className="w-12 h-12 text-accent-gold mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">المرحلة الثانوية والبكالوريا</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                إعداد صارم للجامعات العالمية، مع خيارات متعددة تشمل البكالوريا الدولية (IB) والبرامج المتقدمة (AP)، لتأهيل الطلاب لأرقى الجامعات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24">
        <Quote className="w-16 h-16 text-primary/30 mx-auto mb-8" />
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-8">
          "نحن لا نُدرّس الطلاب ليكونوا ناجحين اليوم فقط، بل نعدهم ليكونوا قادة ومبتكرين للغد."
        </h2>
        <div>
          <p className="font-bold text-lg text-primary">د. أمينة عبد الرحمن</p>
          <p className="text-slate-500 dark:text-slate-400">المدير الأكاديمي، أكاديمية النخبة السعودية</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-32">
        <div className="glass-card p-12 bg-gradient-to-r from-primary to-emerald-500 text-white rounded-[3rem]">
          <h2 className="text-3xl lg:text-5xl font-black mb-6">جاهز لبدء رحلة التميز؟</h2>
          <p className="text-lg lg:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            انضم إلى مجتمعنا الأكاديمي المرموق. اكتشف متطلبات القبول وابدأ عملية التسجيل اليوم.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              التقديم للقبول
            </Link>
            <Link href="/contact" className="bg-primary-hover text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:bg-primary transition-colors shadow-lg hover:-translate-y-1">
              تواصل مع قسم القبول
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
