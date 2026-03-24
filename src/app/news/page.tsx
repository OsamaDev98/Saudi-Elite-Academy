import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

const newsItems = [
  {
    id: "1",
    title: "مشاركة طلاب الأكاديمية في الأولمبياد الوطني للإبداع العلمي",
    category: "إنجازات",
    date: "15 أكتوبر 2026",
    author: "إدارة الإعلام",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    excerpt: "حقق طلابنا مراكز متقدمة في التصفيات النهائية للأولمبياد الوطني، مؤكدين التزامنا بالتميز العلمي والابتكار."
  },
  {
    id: "2",
    title: "احتفالية اليوم الوطني السعودي",
    category: "فعاليات",
    date: "23 سبتمبر 2026",
    author: "النشاط الطلابي",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    excerpt: "نظمت الأكاديمية احتفالاً ضخماً بمناسبة اليوم الوطني بمشاركة جميع الطلاب والمعلمين لإحياء التراث."
  },
  {
    id: "3",
    title: "افتتاح مختبرات الروبوتكس والذكاء الاصطناعي الجديدة",
    category: "أخبار الأكاديمية",
    date: "10 نوفمبر 2026",
    author: "إدارة المشاريع",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    excerpt: "تماشياً مع رؤية 2030، تم تدشين أحدث مختبرات الذكاء الاصطناعي لتأهيل كوادر قادرة على مواكبة العصر."
  },
  {
    id: "4",
    title: "شراكة استراتيجية مع جامعة عالمية لتبادل الطلاب",
    category: "شراكات",
    date: "01 ديسمبر 2026",
    author: "القبول والتسجيل",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    excerpt: "وقعنا اتفاقية تعاون مع أفضل الجامعات الدولية لتوفير برامج تبادل طلابية لطلاب المرحلة الثانوية."
  }
];

export default function NewsPage() {
  return (
    <div className="w-full flex-grow pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mt-[-96px] flex items-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0 bg-background-dark">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
            alt="News Center Hero"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 islamic-pattern text-primary opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white mt-16 w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 text-white mb-6">
            <Calendar className="w-4 h-4 text-accent-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">نبض الأكاديمية</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            المركز <span className="text-gradient">الإعلامي</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            ابق على اطلاع بأحدث الأخبار، والفعاليات، والإنجازات في أكاديمية النخبة السعودية.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {newsItems.map((news) => (
            <Link
              href={`/news/${news.id}`}
              key={news.id}
              className="group glass-card overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 w-full h-full"></div>
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 w-full h-full"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full text-primary font-bold text-sm shadow-sm ring-1 ring-primary/20">
                  {news.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {news.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {news.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                    {news.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {news.excerpt}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                  اقرأ المزيد <ArrowLeft className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
