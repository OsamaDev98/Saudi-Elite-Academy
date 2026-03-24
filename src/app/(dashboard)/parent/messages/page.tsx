"use client";

import { useState } from "react";
import { Bell, Search, Mail, Filter, Star, MoreVertical, CheckCircle2, ChevronRight, X, User } from "lucide-react";
import Image from "next/image";

type Message = {
  id: string;
  sender: string;
  role?: string;
  subject: string;
  preview: string;
  content: string;
  date: string;
  unread: boolean;
  important: boolean;
};

export default function ParentMessagesPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<'all' | 'unread' | 'important'>('all');
  const [activeMessageId, setActiveMessageId] = useState<string | null>(null);
  const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "إدارة الأكاديمية", subject: "دعوة لاجتماع أولياء الأمور", preview: "السيد ولي الأمر المكرم، يسرنا دعوتكم لحضور الاجتماع الفصلي لمناقشة أداء ومستويات الطلاب...", content: "السيد ولي الأمر المكرم،\n\nالسلام عليكم ورحمة الله وبركاته،\nيسرنا دعوتكم لحضور الاجتماع الفصلي لمناقشة أداء ومستويات الطلاب، وذلك يوم الخميس القادم الموافق 20 مارس 2026 في تمام الساعة 5:00 مساءً في مسرح الأكاديمية.\n\nحضوركم دعم لمسيرة أبنائكم.\n\nمع التحية،\nإدارة الأكاديمية", date: "منذ ساعتين", unread: true, important: true },
    { id: "2", sender: "أ. فاطمة سعيد", role: "معلمة الرياضيات - سارة", subject: "تحديث بخصوص نتيجة سارة", preview: "مرحباً، أود إبلاغكم بأن سارة أظهرت تحسناً ملحوظاً في اختبار الشهر الحالي، نرجو الاستمرار في المتابعة.", content: "مرحباً ولي أمر سارة،\n\nأود إبلاغكم بأن سارة أظهرت تحسناً ملحوظاً في اختبار الشهر الحالي للرياضيات، وحصلت على درجة 19/20.\nنرجو الاستمرار في المتابعة وتشجيعها.\n\nتحياتي،\nأ. فاطمة سعيد", date: "أمس", unread: true, important: false },
    { id: "3", sender: "المحاسبة المالية", subject: "تذكير: القسط الدراسي الثاني", preview: "نود تذكيركم باقتراب موعد استحقاق القسط الدراسي الثاني للطالب خالد عبدالرحمن.", content: "المكرم ولي الأمر،\n\nنود تذكيركم باقتراب موعد استحقاق القسط الدراسي الثاني للطالب خالد عبدالرحمن، والبالغ قيمته 2,500 ر.س، والذي يستحق الدفع في موعد أقصاه 25 مارس 2026.\n\nيمكنكم السداد عبر بوابة الدفع الإلكتروني في النظام.\n\nقسم المالية", date: "12 مارس", unread: false, important: true },
    { id: "4", sender: "أ. سعد فهد", role: "معلم الكيمياء - عمر", subject: "غياب عمر عن حصة العملي", preview: "السلام عليكم، لوحظ غياب الطالب عمر عن حصة الكيمياء العملية يوم الخميس الماضي.", content: "السلام عليكم ورحمة الله،\n\nلوحظ غياب الطالب عمر عن حصة الكيمياء العملية يوم الخميس الماضي. نرجو توضيح سبب الغياب للإدارة وتزويدنا بأي أعذار طبية إن وجدت.\n\nشكراً لتعاونكم،\nأ. سعد فهد", date: "10 مارس", unread: false, important: false },
    { id: "5", sender: "النشاط الطلابي", subject: "الموافقة على رحلة معرض العلوم", preview: "نرجو منكم التكرم بتوقيع نموذج الموافقة على مشاركة سارة في رحلة معرض العلوم السنوي.", content: "الأخوة أولياء الأمور،\n\nنرجو منكم التكرم بتوقيع نموذج الموافقة المُرفق لمشاركة الطالبة سارة في رحلة معرض العلوم السنوي المقام في مركز المعارض، وذلك يوم الأحد القادم.\n\nإدارة النشاط الطلابي", date: "5 مارس", unread: false, important: false },
  ]);

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = msg.sender.includes(searchTerm) || msg.subject.includes(searchTerm) || msg.preview.includes(searchTerm);
    const matchesFilter = filterType === 'all' ? true : (filterType === 'unread' ? msg.unread : msg.important);
    return matchesSearch && matchesFilter;
  });

  const activeMessage = messages.find(m => m.id === activeMessageId);

  const handleMessageClick = (id: string) => {
    setActiveMessageId(id);
    setMessages(msgs => msgs.map(m => m.id === id ? { ...m, unread: false } : m));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px-2.5rem)] animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">صندوق التواصل</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">تواصل مباشر مع الإدارة والمعلمين</p>
        </div>
        <button onClick={() => setIsNewMessageModalOpen(true)} className="bg-gradient-to-l from-primary to-emerald-500 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm border border-white/10 flex items-center gap-2">
          <Mail className="w-4 h-4" />
          رسالة جديدة
        </button>
      </div>

      <div className="glass-card flex-1 flex overflow-hidden border border-slate-200 dark:border-white/10">
        {/* Sidebar/List */}
        <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col border-l border-slate-100 dark:border-white/10">
          <div className="p-4 border-b border-slate-100 dark:border-white/10 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث في الرسائل..." 
                className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pr-10 pl-4 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <button 
              onClick={() => {
                if (filterType === 'all') setFilterType('unread');
                else if (filterType === 'unread') setFilterType('important');
                else setFilterType('all');
                showToast(`تمت التصفية بنجاح`);
              }}  
              className={`border p-2 rounded-xl transition-colors ${filterType !== 'all' ? 'bg-primary/10 border-primary text-primary' : 'bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-white/5 bg-white/30 dark:bg-black/10">
            {filteredMessages.length > 0 ? filteredMessages.map((msg) => (
              <div 
                key={msg.id} 
                onClick={() => handleMessageClick(msg.id)}
                className={`p-4 cursor-pointer transition-colors relative ${activeMessageId === msg.id ? 'bg-slate-100 dark:bg-white/10' : (msg.unread ? 'bg-primary/5 dark:bg-primary/10' : 'hover:bg-slate-50 dark:hover:bg-white/5')}`}
              >
                {msg.unread && activeMessageId !== msg.id && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-none rounded-l-md"></div>}
                
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`text-sm ${msg.unread ? 'font-black text-slate-900 dark:text-white' : 'font-bold text-slate-700 dark:text-slate-300'}`}>{msg.sender}</h4>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap">{msg.date}</span>
                </div>
                
                {msg.role && <p className="text-[10px] font-semibold text-primary mb-1">{msg.role}</p>}
                
                <div className="flex items-center gap-2 mb-1">
                  {msg.important && <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />}
                  <p className={`text-xs ${msg.unread ? 'font-bold text-slate-800 dark:text-slate-200' : 'font-semibold text-slate-600 dark:text-slate-400'} truncate`}>{msg.subject}</p>
                </div>
                
                <p className="text-xs text-slate-500 dark:text-slate-500 line-clamp-2 leading-relaxed">{msg.preview}</p>
              </div>
            )) : (
              <div className="p-8 text-center text-slate-500 text-sm">لا توجد رسائل مطابقة</div>
            )}
          </div>
        </div>

        {/* Selected Message/Empty State - hidden on small screens unless active */}
        <div className={`flex-1 flex flex-col bg-slate-50/50 dark:bg-black/20 h-full ${activeMessageId ? 'flex' : 'hidden md:flex'}`}>
          {activeMessage ? (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="p-6 border-b border-slate-100 dark:border-white/10 shrink-0">
                <button onClick={() => setActiveMessageId(null)} className="md:hidden flex items-center gap-2 text-slate-500 mb-4 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                  العودة للرسائل
                </button>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-xl font-black text-slate-900 dark:text-white">{activeMessage.subject}</h2>
                  <div className="flex items-center gap-2">
                    {activeMessage.important && <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />}
                    <button className="text-slate-400 hover:text-primary transition-colors p-1"><MoreVertical className="w-5 h-5" /></button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{activeMessage.sender}</h4>
                    <div className="flex items-center gap-2 text-xs">
                      {activeMessage.role && <span className="text-primary font-semibold">{activeMessage.role}</span>}
                      {activeMessage.role && <span className="text-slate-300 dark:text-slate-600">•</span>}
                      <span className="text-slate-500">{activeMessage.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 overflow-y-auto flex-1 text-slate-700 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-wrap">
                {activeMessage.content}
              </div>
              <div className="p-4 border-t border-slate-100 dark:border-white/10 shrink-0 bg-white dark:bg-slate-800">
                <textarea 
                  rows={2} 
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm"
                  placeholder="اكتب رداً..."
                ></textarea>
                <div className="flex justify-end mt-2">
                  <button onClick={() => { setActiveMessageId(null); showToast('تم الإرسال بنجاح') }} className="bg-primary hover:bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm shadow-sm">
                    إرسال الرد
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 gap-4 p-8 text-center opacity-60">
              <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-2">
                <Mail className="w-10 h-10 text-slate-300 dark:text-slate-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400">اختر رسالة لعرض محتواها</h3>
              <p className="text-sm max-w-sm">قم بتحديد رسالة من القائمة الجانبية أو ابدأ محادثة جديدة مع أحد أعضاء الكادر التعليمي.</p>
            </div>
          )}
        </div>
      </div>

      {/* New Message Modal */}
      {isNewMessageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200 dark:border-white/10 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-4 border-b border-slate-100 dark:border-white/5">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">رسالة جديدة</h3>
              <button onClick={() => setIsNewMessageModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">المرسل إليه</label>
                <select defaultValue="" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm">
                  <option value="" disabled>اختر المعلم أو الإدارة...</option>
                  <option value="math">أ. فاطمة سعيد (معلم رياضيات - سارة)</option>
                  <option value="chem">أ. سعد فهد (معلم كيمياء - عمر)</option>
                  <option value="admin">إدارة المدرسة</option>
                  <option value="finance">المحاسبة المالية</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">موضوع الرسالة</label>
                <input 
                  type="text" 
                  placeholder="اكتب عنواناً..."
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">الرسالة</label>
                <textarea 
                  rows={5} 
                  placeholder="اكتب رسالتك وتفاصيلها هنا..."
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 dark:border-white/5 flex justify-end gap-3 bg-slate-50/50 dark:bg-slate-800/50">
              <button onClick={() => setIsNewMessageModalOpen(false)} className="px-5 py-2 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                إلغاء
              </button>
              <button 
                onClick={() => {
                  setIsNewMessageModalOpen(false);
                  showToast("تم إرسال الرسالة بنجاح");
                }} 
                className="bg-primary hover:bg-emerald-500 text-white font-bold py-2 px-6 rounded-xl transition-colors text-sm shadow-md"
              >
                إرسال
              </button>
            </div>
          </div>
        </div>
      )}

      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
}
