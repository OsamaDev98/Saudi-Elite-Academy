import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { getPageSections } from "@/lib/supabase/queries";

export default async function ContactPage() {
  const sections = await getPageSections('contact');
  
  const heroTitle = sections['hero_title']?.content || "تواصل معنا";
  const heroImage = sections['hero_title']?.image || "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop";
  const formTitle = sections['form_title']?.content || "أرسل رسالتك";
  const address = sections['address']?.content || "حي العليا، شارع الأمير سلطان، الرياض، المملكة العربية السعودية";
  const phone = sections['phone']?.content || "+966 11 123 4567";
  const email = sections['email']?.content || "info@saudielite.edu.sa";

  return (
    <div className="w-full flex-grow pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mt-[-96px] flex items-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0 bg-background-dark">
          <Image
            src={heroImage}
            alt="Contact Us Hero"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 islamic-pattern text-primary opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white mt-16 w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 text-white mb-6">
            <Phone className="w-4 h-4 text-accent-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">نحن هنا لخدمتك</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            {heroTitle}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            نسعد بالرد على استفساراتكم وتقديم الدعم اللازم لبدء رحلة التميز الأكاديمي.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass-card p-8 flex items-start gap-6 hover:-translate-y-1 transition-transform">
            <div className="bg-primary/10 p-4 rounded-xl text-primary">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">العنوان</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {address}
              </p>
            </div>
          </div>

          <div className="glass-card p-8 flex items-start gap-6 hover:-translate-y-1 transition-transform">
            <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-500">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">رقم الهاتف</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg dir-ltr text-right">
                {phone}
              </p>
            </div>
          </div>

          <div className="glass-card p-8 flex items-start gap-6 hover:-translate-y-1 transition-transform">
            <div className="bg-accent-gold/10 p-4 rounded-xl text-accent-gold">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">البريد الإلكتروني</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {email}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-10 lg:p-14">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">{formTitle}</h2>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">الاسم الكامل</label>
                <input
                  type="text"
                  placeholder="محمد أحمد"
                  className="mt-2 w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">البريد الإلكتروني</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="mt-2 w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white text-left dir-ltr"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">موضوع الرسالة</label>
              <select className="mt-2 w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white appearance-none cursor-pointer">
                <option value="admission">استفسار عن القبول</option>
                <option value="general">استفسار عام</option>
                <option value="careers">توظيف</option>
                <option value="other">أخرى</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300">الرسالة</label>
              <textarea
                rows={5}
                placeholder="كيف يمكننا مساعدتك؟"
                className="mt-2 w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-slate-900 dark:text-white resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full cursor-pointer bg-gradient-to-l from-primary to-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20">
        <div className="w-full h-96 bg-slate-200 dark:bg-white/5 rounded-3xl overflow-hidden relative shadow-premium flex items-center justify-center border border-slate-300 dark:border-white/10">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#0ca845 1px, transparent 1px), linear-gradient(90deg, #0ca845 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
          <div className="relative z-10 text-center glass-card px-8 py-4 bg-white/50 dark:bg-black/50">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-2 drop-shadow-md" />
            <span className="font-bold text-slate-900 dark:text-white">موقع الأكاديمية على الخريطة</span>
          </div>
        </div>
      </section>
    </div>
  );
}
