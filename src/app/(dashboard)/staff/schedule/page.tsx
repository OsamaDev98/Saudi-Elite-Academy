"use client";

import { Calendar as CalendarIcon, MapPin, Search } from "lucide-react";
import { useState, useMemo } from "react";

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

export default function TeacherSchedulePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const scheduleData = useMemo(() => {
    const classes = ["3ث - أ", "3ث - ب", "2ث - أ", "2ث - ب", "1م - ج", "2م - أ"];
    return days.map((day, dIdx) => {
      return periods.map((p, pIdx) => {
        if (p.break) return { isBreak: true };
        const isActive = (dIdx * 7 + pIdx) % 3 !== 0; 
        const clsName = classes[(dIdx * 3 + pIdx * 7) % classes.length];
        return { isBreak: false, isActive, className: clsName, room: `م ${100 + pIdx}` };
      });
    });
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">الجدول الدراسي والمعمل</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">توزيع الحصص الأسبوعية والأوقات المكتبية</p>
        </div>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="ابحث في الجدول..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pr-10 pl-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64 transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-white/10 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-primary" />
            نصاب المعلم: 18 حصة أسبوعياً
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
                    const block = scheduleData[i][j];
                    if (block.isBreak) {
                      return (
                        <div key={j} className="col-span-1 h-full bg-slate-100/50 dark:bg-white/5 rounded-xl border border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center p-2 text-center">
                          <span className="text-slate-400 font-bold text-sm rotate-90 sm:rotate-0">{p.num}</span>
                        </div>
                      );
                    }
                    
                    if (!block.isActive) {
                      return (
                        <div key={j} className="col-span-1 h-full flex flex-col items-center justify-center p-3 rounded-xl border border-dashed border-slate-200 dark:border-white/10 opacity-50 relative group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                          <span className="text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">فراغ</span>
                        </div>
                      );
                    }

                    const isHighlighted = searchQuery && block.className.includes(searchQuery);
                    
                    return (
                      <div key={j} className={`col-span-1 h-full flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer ${
                        isHighlighted 
                          ? 'bg-primary text-white border-primary shadow-lg scale-105 z-10' 
                          : 'bg-primary/10 text-primary border-primary/20 shadow-sm hover:shadow-md'
                      }`}>
                        <span className="font-bold text-sm mb-1">{block.className}</span>
                        <div className={`flex items-center gap-1 text-[10px] font-medium ${isHighlighted ? 'opacity-100 text-white/90' : 'opacity-80'}`}>
                          <MapPin className="w-3 h-3" />
                          {block.room}
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
