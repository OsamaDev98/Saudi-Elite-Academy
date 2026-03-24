import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Share2, User } from "lucide-react";

// Mock data (same as the listing page for demo purposes)
const newsData: Record<string, any> = {
  "1": {
    title: "مشاركة طلاب الأكاديمية في الأولمبياد الوطني للإبداع العلمي",
    category: "إنجازات",
    date: "15 أكتوبر 2026",
    author: "إدارة الإعلام",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
    content: "حقق طلابنا مراكز متقدمة في التصفيات النهائية للأولمبياد الوطني للإبداع العلمي (إبداع)، مؤكدين التزامنا بالتميز العلمي والابتكار. تتويجاً لجهودهم المستمرة على مدار العام الأكاديمي، أثبت طلاب أكاديمية النخبة السعودية كفاءتهم في مجالات العلوم والرياضيات والابتكار.\n\nإن هذا الإنجاز ليس وليد الصدفة، بل هو نتيجة تضافر جهود المعلمين الأكفاء وبرامجنا الإثرائية المصممة بعناية فائقة لتطوير مهارات التفكير النقدي وحل المشكلات لدى الطلاب. نفخر بهذا الإنجاز ونتطلع إلى المزيد من النجاحات التي ترفع اسم الأكاديمية عالياً في المحافل المحلية والدولية.\n\nنهنئ الطلاب الفائزين وأولياء أمورهم على هذا التميز والتفوق، ونتقدم بالشكر الجزيل لكل من ساهم في هذا النجاح من كادر تعليمي وإداري."
  },
  "2": {
    title: "احتفالية اليوم الوطني السعودي",
    category: "فعاليات",
    date: "23 سبتمبر 2026",
    author: "النشاط الطلابي",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop",
    content: "تحت شعار (نحلم ونحقق)، نظمت الأكاديمية احتفالاً ضخماً بمناسبة اليوم الوطني بمشاركة جميع الطلاب والمعلمين لإحياء التراث والثقافة السعودية الأصيلة.\n\nتضمن الحفل عدة أركان وأنشطة، منها خيمة التراث الطلابي، العرضة السعودية، ومعارض فنية تجسد نهضة المملكة ورؤية 2030. تفاعل الطلاب بشغف، وعبروا عن ولائهم وانتمائهم لوطنهم المعطاء.\n\nالوطنية ليست مجرد شعارات، بل هي أعمال نغرسها في نفوس أبنائنا ليكونوا سواعد تبني هذا الوطن. حفظ الله بلادنا وأدام عليها نعمة الأمن والأمان والاستقرار."
  },
  "3": {
    title: "افتتاح مختبرات الروبوتكس والذكاء الاصطناعي الجديدة",
    category: "أخبار الأكاديمية",
    date: "10 نوفمبر 2026",
    author: "إدارة المشاريع",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop",
    content: "تماشياً مع رؤية المملكة 2030 وفي إطار سعي أكاديمية النخبة السعودية لمواكبة التطور التقني المتسارع، تم تدشين أحدث مختبرات الروبوتكس والذكاء الاصطناعي في مبنى الأكاديمية.\n\nتم تجهيز المختبرات بأحدث تقنيات الطباعة ثلاثية الأبعاد، وطائرات الدرون التعليمية، والروبوتات المتقدمة، لتهيئة بيئة ابتكارية تحفز الطلاب على خوض غمار التكنولوجيا والبرمجة.\n\nصرحت الإدارة أن هذه المختبرات ستكون نواة لتطوير المهارات الرقمية لجيل المستقبل، وتخريج كوادر قادرة على المنافسة في اقتصاد المعرفة العالمي. خطوة للأمام تقودنا نحو مستقبل رقمي واعد."
  },
  "4": {
    title: "شراكة استراتيجية مع جامعة عالمية لتبادل الطلاب",
    category: "شراكات",
    date: "01 ديسمبر 2026",
    author: "القبول والتسجيل",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop",
    content: "في خطوة لتعزيز الأفق التعليمي، أعلنت أكاديمية النخبة السعودية عن توقيع اتفاقية تعاون مع إحدى أرقى الجامعات الدولية لتوفير برامج تبادل طلابي لطلاب المرحلة الثانوية.\n\nمن خلال هذه الشراكة، سيتمكن الطلاب المتميزون من قضاء فصل دراسي في الخارج، ما يتيح لهم فرصة الانفتاح على ثقافات جديدة وتجارب تعليمية متقدمة تصقل مهاراتهم الشخصية والأكاديمية.\n\nويأتي هذا البرنامج ضمن استراتيجية الأكاديمية لبناء قادة عالميين يتبنون قيم المواطنة العالمية مع اعتزازهم بهويتهم الثقافية والوطنية. وتتضمن الاتفاقية أيضاً برامج تدريب مشتركة وتبادل خبرات للهيئة التعليمية."
  }
};

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = newsData[params.id] || newsData["1"]; // Default to first if not found

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full mt-[-96px] overflow-hidden flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/60 to-transparent z-10"></div>
          <Image 
            src={article.image} 
            alt={article.title} 
            fill
            className="w-full h-full object-cover" 
            priority
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
          <div className="inline-block bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            {article.category}
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl">{article.title}</h1>
          <div className="flex justify-center gap-6 text-slate-300 font-medium">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> {article.date}</span>
            <span className="flex items-center gap-2"><User className="w-5 h-5" /> {article.author}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto -mt-10 relative z-30">
        <div className="glass-card p-10 lg:p-14 bg-white/90 dark:bg-surface-dark/95 mb-16 shadow-premium ring-1 ring-slate-100 dark:ring-white/5">
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-justify">
            {article.content.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
            <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold">
              <Share2 className="w-5 h-5" />
              مشاركة الخبر
            </button>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link href="/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-all font-bold group">
            <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            العودة إلى المركز الإعلامي
          </Link>
        </div>
      </section>
    </div>
  );
}
