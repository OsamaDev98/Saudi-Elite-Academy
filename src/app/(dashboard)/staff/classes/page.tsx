"use client";

import { useState } from "react";
import { Users, Search, Filter, MoreVertical, Activity, MessageSquare, CheckCircle2, X } from "lucide-react";
import Image from "next/image";

export default function TeacherClassesPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeClass, setActiveClass] = useState("class-1");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [messageTarget, setMessageTarget] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isStudentActionsModalOpen, setIsStudentActionsModalOpen] = useState(false);
  const [studentActionsTarget, setStudentActionsTarget] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const classesTabs = [
    { id: 'class-1', name: 'الثالث الثانوي - أ' },
    { id: 'class-2', name: 'الثالث الثانوي - ب' },
    { id: 'class-3', name: 'الثاني الثانوي - أ' }
  ];

  const studentsDb = [
    { classId: 'class-1', name: "عمر عبدالرحمن الشمري", id: "20230145", attendance: "98%", grade: "98%", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=60" },
    { classId: 'class-1', name: "أحمد فهد العتيبي", id: "20230188", attendance: "95%", grade: "85%", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&auto=format&fit=crop&q=60" },
    { classId: 'class-1', name: "سعد محمد الدوسري", id: "20230211", attendance: "88%", grade: "75%", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&auto=format&fit=crop&q=60" },
    { classId: 'class-2', name: "فيصل خالد المطيري", id: "20230219", attendance: "90%", grade: "88%", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=60" },
    { classId: 'class-3', name: "عبدالله حسن الزهراني", id: "20230303", attendance: "99%", grade: "96%", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=60" },
  ];

  const filteredStudents = studentsDb.filter(student => {
    const gradeNum = parseInt(student.grade.replace('%', ''));
    let matchesFilter = true;
    if (activeFilter === "excellent") matchesFilter = gradeNum >= 90;
    if (activeFilter === "good") matchesFilter = gradeNum >= 80 && gradeNum < 90;
    if (activeFilter === "needs_improvement") matchesFilter = gradeNum < 80;

    return student.classId === activeClass &&
    (student.name.includes(searchQuery) || student.id.includes(searchQuery)) &&
    matchesFilter;
  });

  const handleDownloadPDF = (studentName: string) => {
    const content = `
      <div style="font-family: Arial, sans-serif; direction: rtl; padding: 40px; background: #fff; max-width: 800px; margin: auto;">
        <div style="border-bottom: 2px solid #0f172a; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="color: #0f172a; margin: 0;">أكاديمية النخبة السعودية</h1>
            <p style="color: #64748b; margin: 5px 0 0 0;">السجل الأكاديمي التفصيلي</p>
        </div>
        
        <h2 style="color: #334155;">بيانات الطالب: ${studentName}</h2>
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 30px; background: #f8fafc; padding: 20px; border-radius: 8px;">
            <div>
                <p><strong>تقييم الأداء العام:</strong> ممتاز جداً</p>
                <p><strong>نسبة الحضور:</strong> 98%</p>
            </div>
            <div>
                <p><strong>السلوك والمواظبة:</strong> 100/100</p>
                <p><strong>المشاركات الصفية:</strong> متميز</p>
            </div>
        </div>

        <h3 style="margin-top: 30px; color: #334155;">سجل الدرجات - الفصل الدراسي الحالي:</h3>
        <table border="1" cellpadding="15" style="border-collapse: collapse; width: 100%; text-align: right; border-color: #cbd5e1;">
          <tr style="background-color: #f1f5f9;">
            <th style="color: #0f172a;">المادة</th>
            <th style="color: #0f172a;">درجة الأعمال</th>
            <th style="color: #0f172a;">الاختبارات</th>
            <th style="color: #0f172a;">المجموع</th>
            <th style="color: #0f172a;">التقدير</th>
          </tr>
          <tr><td>الرياضيات</td><td>40/40</td><td>58/60</td><td>98/100</td><td>ممتاز+</td></tr>
          <tr><td>الفيزياء</td><td>38/40</td><td>57/60</td><td>95/100</td><td>ممتاز</td></tr>
          <tr><td>الكيمياء</td><td>40/40</td><td>60/60</td><td>100/100</td><td>ممتاز+</td></tr>
        </table>
        
        <div style="margin-top: 40px; font-size: 12px; color: #94a3b8; text-align: center;">
            <p>وثيقة معتمدة بنظام أكاديمية النخبة السعودية للتعليم الذكي</p>
            <p>تاريخ الإصدار: ${new Date().toLocaleDateString('ar-SA')}</p>
        </div>
      </div>
    `;
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(content);
      win.document.close();
      win.focus();
      setTimeout(() => win.print(), 500);
    }
    showToast('تم استخراج السجل بنجاح');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMessageModalOpen(false);
    setMessageContent("");
    showToast("تم إرسال الرسالة إلى ولي الأمر بنجاح!");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">الفصول والطلاب</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">إدارة قوائم الطلاب المسجلين في فصولك</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 border-l-4 border-l-primary flex flex-col justify-center">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">إجمالي الطلاب</h3>
          <p className="text-3xl font-black text-slate-900 dark:text-white">{studentsDb.length}</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-blue-500 flex flex-col justify-center">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">الفصول الدراسية</h3>
          <p className="text-3xl font-black text-slate-900 dark:text-white">{classesTabs.length}</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-l-amber-500 flex flex-col justify-center">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">نسبة الحضور لهذا الأسبوع</h3>
          <p className="text-3xl font-black text-slate-900 dark:text-white">96%</p>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 bg-slate-50 dark:bg-black/20 p-1 rounded-xl w-fit">
            {classesTabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => { setActiveClass(tab.id); showToast(`تم اختيار الفصل: ${tab.name}`); }}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
                  activeClass === tab.id 
                    ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
            <div className="relative w-full sm:w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="ابحث برقم أو إسم طالب..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pr-10 pl-4 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full transition-all"
              />
            </div>
            <div className="relative">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-all text-slate-700 dark:text-slate-200 appearance-none font-bold"
              >
                <option value="all">الكل</option>
                <option value="excellent">ممتاز (90%+)</option>
                <option value="good">جيد جداً (80%+)</option>
                <option value="needs_improvement">يحتاج تحسين</option>
              </select>
              <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm">
              <tr>
                <th className="py-4 px-6 font-semibold">اسم الطالب</th>
                <th className="py-4 px-6 font-semibold">الرقم الأكاديمي</th>
                <th className="py-4 px-6 font-semibold">نسبة الحضور</th>
                <th className="py-4 px-6 font-semibold">المعدل التراكمي في المادة</th>
                <th className="py-4 px-6 font-semibold text-left">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {filteredStudents.length > 0 ? filteredStudents.map((student, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-primary/20 bg-slate-200 dark:bg-slate-800 shrink-0">
                        {student.image ? (
                          <Image src={student.image} alt={student.name} fill className="object-cover" />
                        ) : null}
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-mono text-sm text-slate-500 dark:text-slate-400">{student.id}</td>
                  <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{student.attendance}</td>
                  <td className="py-4 px-6 font-black text-slate-900 dark:text-white">{student.grade}</td>
                  <td className="py-4 px-6 text-left flex justify-end gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setMessageTarget(student.name);
                        setIsMessageModalOpen(true);
                      }}  
                      className="p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors" 
                      title="مراسلة ولي الأمر"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadPDF(student.name);
                      }}  
                      className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors" 
                      title="السجل المفصل"
                    >
                      <Activity className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setStudentActionsTarget(student.name);
                        setIsStudentActionsModalOpen(true);
                      }}  
                      className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500 font-bold text-sm">لا توجد نتائج مطابقة لبحثك.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isMessageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-black text-slate-900 dark:text-white">مراسلة ولي الأمر</h2>
              <button 
                onClick={() => setIsMessageModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSendMessage} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">إلى ولي أمر الطالب:</label>
                  <input 
                    type="text" 
                    value={messageTarget}
                    readOnly
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-slate-900 dark:text-white font-bold opacity-70 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">عنوان الرسالة:</label>
                  <input 
                    type="text" 
                    required
                    placeholder="مثل: دعوة لحضور اجتماع"
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">محتوى الرسالة:</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="اكتب رسالتك لولي الأمر هنا..."
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary/20 dark:bg-slate-800 border-slate-300 dark:border-slate-700" />
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">إرسال نسخة عبر رسالة نصية (SMS)</span>
                  </label>
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsMessageModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  إلغاء
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all active:scale-95"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isStudentActionsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-black text-slate-900 dark:text-white">إجراءات الطالب</h2>
              <button 
                onClick={() => setIsStudentActionsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                الطالب: <span className="text-slate-900 dark:text-white">{studentActionsTarget}</span>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    showToast('تم إرسال تنبيه للطالب بنجاح');
                    setIsStudentActionsModalOpen(false);
                  }}
                  className="w-full text-right px-4 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-900/20 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 font-bold rounded-xl transition-colors border border-slate-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-800"
                >
                  إرسال تنبيه تأخير/غياب
                </button>
                <button
                  onClick={() => {
                    handleDownloadPDF(studentActionsTarget);
                    setIsStudentActionsModalOpen(false);
                  }}
                  className="w-full text-right px-4 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold rounded-xl transition-colors border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800"
                >
                  طباعة التقرير الشامل
                </button>
                <button
                  onClick={() => {
                    showToast('تم طلب الاجتماع بنجاح');
                    setIsStudentActionsModalOpen(false);
                  }}
                  className="w-full text-right px-4 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold rounded-xl transition-colors border border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800"
                >
                  طلب اجتماع مع ولي الأمر
                </button>
              </div>
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
