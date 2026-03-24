import CMSSectionEditor from "@/components/ui/CMSSectionEditor";
import CMSPageGroup from "@/components/ui/CMSPageGroup";
import { getPageSections } from "@/lib/supabase/queries";
import { FileText } from "lucide-react";

export const revalidate = 0; // Ensure fresh data on staff load

export default async function CMSStaffPage() {
  const [homeSections, aboutSections, academicsSections, admissionsSections, careersSections, contactSections] = await Promise.all([
    getPageSections("home"),
    getPageSections("about"),
    getPageSections("academics"),
    getPageSections("admissions"),
    getPageSections("careers"),
    getPageSections("contact"),
  ]);

  return (
    <div className="max-w-4xl mx-auto space-y-4 pb-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-primary/10 p-3 rounded-xl text-primary">
          <FileText className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">إدارة المحتوى (CMS)</h1>
          <p className="text-slate-500">تحكم بنصوص وصور صفحات الموقع الرئيسية مباشرة، مبوبة حسب الصفحة والقسم.</p>
        </div>
      </div>

      <CMSPageGroup 
        title="الصفحة الرئيسية (Main Page)" 
        tabs={[
          {
            id: 'hero', name: 'البانر (Hero)', content: (
              <>
                <CMSSectionEditor pageSlug="home" sectionKey="hero_title" title="عنوان البانر الرئيسي"
                  defaultContent={homeSections["hero_title"]?.content || "تمكين قادة الغد"}
                  defaultImage={homeSections["hero_title"]?.image || "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop"}
                  hasImage={true} />
                <CMSSectionEditor pageSlug="home" sectionKey="hero_description" title="وصف البانر الرئيسي"
                  defaultContent={homeSections["hero_description"]?.content || "مؤسسة مرموقة ملتزمة بالتميز الأكاديمي، والقيم الوطنية، وإعداد الطلاب للقيادة العالمية في المملكة العربية السعودية الحديثة."} />
              </>
            )
          },
          {
            id: 'vision', name: 'الرؤية (Vision)', content: (
              <CMSSectionEditor pageSlug="home" sectionKey="vision_text" title="نص الرؤية والرسالة"
                  defaultContent={homeSections["vision_text"]?.content || "أن نكون مركزاً عالمياً للتميز التعليمي الذي يرعى التطور الفكري والأخلاقي والاجتماعي لكل طالب."} />
            )
          },
          {
            id: 'faq', name: 'الأسئلة الشائعة (FAQ)', content: (
              <>
                 <CMSSectionEditor pageSlug="home" sectionKey="faq_title" title="عنوان قسم الأسئلة الشائعة"
                  defaultContent={homeSections["faq_title"]?.content || "الأسئلة الشائعة"} />
                 <p className="text-slate-500 mt-4 bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-medium">ملاحظة: البيانات الخاصة بالأسئلة والأجوبة يتم إدارتها من جدول `faqs` المنفصل.</p>
              </>
            )
          },
          {
            id: 'testimonials', name: 'آراء أولياء الأمور (Testimonials)', content: (
              <>
                 <CMSSectionEditor pageSlug="home" sectionKey="testimonials_title" title="عنوان قسم الآراء"
                  defaultContent={homeSections["testimonials_title"]?.content || "تجارب أولياء الأمور"} />
                 <p className="text-slate-500 mt-4 bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-medium">ملاحظة: شهادات أولياء الأمور يتم إدارتها من جدول `testimonials` المنفصل.</p>
              </>
            )
          }
        ]} 
      />

      <CMSPageGroup 
        title="صفحة من نحن (About)" 
        tabs={[
          {
            id: 'hero', name: 'البانر (Hero)', content: (
              <CMSSectionEditor pageSlug="about" sectionKey="hero_title" title="عنوان البانر"
                defaultContent={aboutSections["hero_title"]?.content || "عن أكاديميتنا"}
                defaultImage={aboutSections["hero_title"]?.image || "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000&auto=format&fit=crop"}
                hasImage={true} />
            )
          },
          {
            id: 'message', name: 'رسالة المؤسس (Message)', content: (
              <CMSSectionEditor pageSlug="about" sectionKey="founder_message" title="رسالة المؤسس (الفقرة الرئيسية)"
                defaultContent={aboutSections["founder_message"]?.content || "بدأت فكرة النخبة السعودية من إيمان عميق بأن أبناءنا يستحقون تعليماً يضاهي أقوى المعايير العالمية، دون التخلي عن هويتهم العربية والإسلامية وثقافتهم الأصيلة."}
                defaultImage={aboutSections["founder_message"]?.image || "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"}
                hasImage={true} />
            )
          }
        ]} 
      />

      <CMSPageGroup 
        title="صفحة القبول والتسجيل (Admissions)" 
        tabs={[
          {
            id: 'hero', name: 'البانر (Hero)', content: (
              <CMSSectionEditor pageSlug="admissions" sectionKey="hero_title" title="عنوان البانر"
                defaultContent={admissionsSections["hero_title"]?.content || "القبول والتسجيل"}
                defaultImage={admissionsSections["hero_title"]?.image || "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"}
                hasImage={true} />
            )
          },
          {
            id: 'steps', name: 'خطوات القبول (Steps)', content: (
              <>
                 <CMSSectionEditor pageSlug="admissions" sectionKey="steps_title" title="عنوان قسم الخطوات"
                  defaultContent={admissionsSections["steps_title"]?.content || "خطوات القبول والتسجيل"} />
                 <CMSSectionEditor pageSlug="admissions" sectionKey="steps_desc" title="وصف مبسط عن الخطوات"
                  defaultContent={admissionsSections["steps_desc"]?.content || "رحلتك الأكاديمية تبدأ هنا بتسجيل إلكتروني ثم مقابلة شخصية لضمان مكانكم."} />
              </>
            )
          },
          {
            id: 'plans', name: 'الباقات والرسوم (Plans)', content: (
              <>
                 <CMSSectionEditor pageSlug="admissions" sectionKey="plans_title" title="عنوان قسم الباقات"
                  defaultContent={admissionsSections["plans_title"]?.content || "باقات التميز المالي والرسوم"} />
                 <CMSSectionEditor pageSlug="admissions" sectionKey="plans_desc" title="وصف الباقات"
                  defaultContent={admissionsSections["plans_desc"]?.content || "الاستثمار المنشود في مستقبل أبنائنا وبناتنا."} />
              </>
            )
          }
        ]} 
      />

      <CMSPageGroup 
        title="صفحة الأكاديميات (Academics)" 
        tabs={[
          {
            id: 'hero', name: 'البانر (Hero)', content: (
              <>
                <CMSSectionEditor pageSlug="academics" sectionKey="hero_title" title="عنوان البانر"
                  defaultContent={academicsSections["hero_title"]?.content || "برامجنا التعليمية"}
                  defaultImage={academicsSections["hero_title"]?.image || "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"}
                  hasImage={true} />
                <CMSSectionEditor pageSlug="academics" sectionKey="hero_description" title="وصف البانر"
                  defaultContent={academicsSections["hero_description"]?.content || "نقدم في أكاديمية النخبة السعودية مناهج عالمية المستوى تدمج التقاليد مع الابتكار، لإعداد قادة المستقبل لنجاح عالمي."} />
              </>
            )
          },
          {
            id: 'curricula', name: 'المناهج (Curricula)', content: (
              <>
                 <CMSSectionEditor pageSlug="academics" sectionKey="curricula_title" title="عنوان المناهج"
                  defaultContent={academicsSections["curricula_title"]?.content || "نظرة عامة على المناهج"} />
                 <CMSSectionEditor pageSlug="academics" sectionKey="curricula_desc" title="تفاصيل المناهج"
                  defaultContent={academicsSections["curricula_desc"]?.content || "يعتمد منهجنا على أسس تطوير المهارات الأكاديمية والعلمية بمنظور عالمي وروح وطنية."} />
              </>
            )
          },
          {
            id: 'manager', name: 'كلمة المدير (Manager Word)', content: (
              <CMSSectionEditor pageSlug="academics" sectionKey="manager_word" title="كلمة مدير الأكاديمية"
                  defaultContent={academicsSections["manager_word"]?.content || "نحن نبني جيلاً من العظماء بالعلم والمعرفة والبحث العلمي المستمر."} />
            )
          }
        ]} 
      />

      <CMSPageGroup 
        title="صفحة اتصل بنا (Contact)" 
        tabs={[
          {
            id: 'hero', name: 'البانر (Hero)', content: (
              <CMSSectionEditor pageSlug="contact" sectionKey="hero_title" title="عنوان البانر"
                defaultContent={contactSections["hero_title"]?.content || "تواصل معنا"}
                defaultImage={contactSections["hero_title"]?.image || "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop"}
                hasImage={true} />
            )
          },
          {
            id: 'form', name: 'النموذج (Form)', content: (
              <CMSSectionEditor pageSlug="contact" sectionKey="form_title" title="عنوان النموذج"
                  defaultContent={contactSections["form_title"]?.content || "أرسل رسالتك وسنرد في أقرب وقت"} />
            )
          },
          {
            id: 'details', name: 'التفاصيل (Details)', content: (
              <>
                <CMSSectionEditor pageSlug="contact" sectionKey="address" title="العنوان"
                  defaultContent={contactSections["address"]?.content || "حي العليا، شارع الأمير سلطان، الرياض، المملكة العربية السعودية"} />
                <CMSSectionEditor pageSlug="contact" sectionKey="phone" title="الهاتف"
                  defaultContent={contactSections["phone"]?.content || "+966 11 123 4567"} />
                <CMSSectionEditor pageSlug="contact" sectionKey="email" title="البريد الإلكتروني"
                  defaultContent={contactSections["email"]?.content || "info@saudielite.edu.sa"} />
              </>
            )
          },
          {
            id: 'map', name: 'الخريطة (Map)', content: (
              <CMSSectionEditor pageSlug="contact" sectionKey="map_url" title="رابط الخريطة (URL)"
                  defaultContent={contactSections["map_url"]?.content || "https://google.com/maps/..."} />
            )
          }
        ]} 
      />

      <CMSPageGroup 
        title="صفحة الوظائف (Careers)" 
        tabs={[
          {
            id: 'hero', name: 'البانر (Hero)', content: (
              <>
                <CMSSectionEditor pageSlug="careers" sectionKey="hero_title" title="عنوان البانر"
                  defaultContent={careersSections["hero_title"]?.content || "انضم لفريقنا"}
                  defaultImage={careersSections["hero_title"]?.image || "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"}
                  hasImage={true} />
                <CMSSectionEditor pageSlug="careers" sectionKey="hero_description" title="وصف البانر"
                  defaultContent={careersSections["hero_description"]?.content || "نبحث دائماً عن المعلمين الشغوفين والموظفين المتميزين للانضمام إلى عائلتنا التعليمية المرموقة."} />
              </>
            )
          },
          {
            id: 'form', name: 'النموذج (Form)', content: (
              <CMSSectionEditor pageSlug="careers" sectionKey="form_title" title="عنوان النموذج"
                  defaultContent={careersSections["form_title"]?.content || "نموذج التقديم للوظائف"} />
            )
          },
          {
            id: 'details', name: 'المتطلبات (Details)', content: (
              <CMSSectionEditor pageSlug="careers" sectionKey="details_text" title="متطلبات أو نصوص إضافية"
                  defaultContent={careersSections["details_text"]?.content || "نحن في أكاديمية النخبة السعودية نؤمن بأن البيئة الإيجابية هي سر النجاح والإبداع."} />
            )
          }
        ]} 
      />
    </div>
  );
}
