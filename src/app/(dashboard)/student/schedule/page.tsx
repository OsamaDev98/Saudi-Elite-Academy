"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Clock, MapPin, Search } from "lucide-react";

export default function StudentSchedulePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"];
  const periods = [
    { num: "1", time: "08:00 - 08:45" },
    { num: "2", time: "08:45 - 09:30" },
    { break: true, time: "09:30 - 10:00", num: "فسحة" },
    { num: "4", time: "10:00 - 10:45" },
    { num: "5", time: "10:45 - 11:30" },
    { break: true, time: "11:30 - 12:00", num: "صلاة" },
    { num: "7", time: "12:00 - 12:45" }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">الجدول الدراسي</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">الفصل الدراسي الثاني - الصف الثالث الثانوي</p>
        </div>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="ابحث في الجدول (مثال: رياضيات)..." 
              className="bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pr-10 pl-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary w-full sm:w-64 transition-all shadow-sm"
            />
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-white/10 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-primary" />
            جدول الأسبوع
          </h2>
        </div>
        <div className="overflow-x-auto p-6">
          <div className="min-w-[800px]">
            {/* Header row */}
            <div className="grid grid-cols-8 gap-4 mb-4">
              <div className="col-span-1 border-b-2 border-primary pb-2 font-black text-slate-400 text-center">اليوم / الحصة</div>
              {periods.map((p, i) => (
                <div key={i} className="col-span-1 text-center font-bold text-slate-900 dark:text-white">
                  {p.break ? p.num : `الحصة ${p.num}`}
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-1">{p.time}</div>
                </div>
              ))}
            </div>

            {/* Timetable Rows */}
            <div className="space-y-4">
              {days.map((day, i) => (
                <div key={i} className="grid grid-cols-8 gap-4 items-center">
                  <div className="col-span-1 font-black text-lg text-slate-900 dark:text-white text-center bg-slate-50 dark:bg-white/5 py-4 rounded-xl border border-slate-100 dark:border-white/10">
                    {day}
                  </div>
                  
                  {periods.map((p, j) => {
                    if (p.break) {
                      return (
                        <div key={j} className="col-span-1 h-full bg-slate-100/50 dark:bg-white/5 rounded-xl border border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center p-2 text-center">
                          <span className="text-slate-400 font-bold text-sm rotate-90 sm:rotate-0">{p.num}</span>
                        </div>
                      );
                    }
                    
                    // Generate random mock classes for the timetable
                    const subjects = ["رياضيات", "فيزياء", "كيمياء", "أحياء", "لغة عربية", "انجليزي", "حاسب", "تربية إسلامية"];
                    const colors = ["bg-blue-50 text-blue-600 border-blue-200", "bg-emerald-50 text-emerald-600 border-emerald-200", "bg-purple-50 text-purple-600 border-purple-200", "bg-amber-50 text-amber-600 border-amber-200", "bg-rose-50 text-rose-600 border-rose-200"];
                    const darkColors = ["dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/30", "dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/30", "dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800/30", "dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/30", "dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-800/30"];
                    
                    const subIndex = (i * 3 + j * 7) % subjects.length;
                    const colIndex = subIndex % colors.length;
                    const subjectName = subjects[subIndex];
                    const isMatch = searchTerm === "" || subjectName.includes(searchTerm);
                    
                    return (
                      <div key={j} className={`col-span-1 h-full flex flex-col items-center justify-center p-3 rounded-xl border ${colors[colIndex]} ${darkColors[colIndex]} shadow-sm hover:shadow-md transition-all cursor-pointer ${isMatch ? '' : 'opacity-20 scale-95'}`}>
                        <span className="font-bold text-sm mb-1">{subjectName}</span>
                        <div className="flex items-center gap-1 text-[10px] opacity-80 font-medium">
                          <MapPin className="w-3 h-3" />
                          {`م ${100 + j}`}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
