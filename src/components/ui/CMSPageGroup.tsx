"use client";
import { useState } from "react";

export default function CMSPageGroup({ 
  title, 
  tabs 
}: { 
  title: string, 
  tabs: { name: string, id: string, content: React.ReactNode }[] 
}) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="mb-12 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-slate-50 dark:bg-slate-800 p-5 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <div className="w-2 h-6 bg-primary rounded-full"></div>
          {title}
        </h2>
      </div>
      
      <div className="flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto bg-white dark:bg-slate-900 custom-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 font-bold whitespace-nowrap transition-all outline-none ${
              activeTab === tab.id 
                ? 'border-b-2 border-primary text-primary bg-primary/5' 
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 border-b-2 border-transparent'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      
      <div className="p-6 bg-white dark:bg-slate-900 min-h-[300px]">
        {tabs.find(t => t.id === activeTab)?.content}
      </div>
    </div>
  );
}
