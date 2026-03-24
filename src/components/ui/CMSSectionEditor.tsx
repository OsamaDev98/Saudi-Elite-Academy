"use client";

import { useState } from "react";
import { updatePageSection } from "@/app/actions/cms";
import { Save, CheckCircle2, AlertCircle } from "lucide-react";

export default function CMSSectionEditor({
  pageSlug,
  sectionKey,
  title,
  defaultContent,
  defaultImage,
  hasImage = false,
}: {
  pageSlug: string;
  sectionKey: string;
  title: string;
  defaultContent: string;
  defaultImage?: string;
  hasImage?: boolean;
}) {
  const [content, setContent] = useState(defaultContent);
  const [image, setImage] = useState(defaultImage || "");
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSave = async () => {
    setIsSaving(true);
    setStatus("idle");
    const result = await updatePageSection(pageSlug, sectionKey, content, image);
    setIsSaving(false);
    if (result.success) {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100">{title}</h4>
        {status === "success" && (
          <span className="flex items-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-4 h-4" /> تم الحفظ بنجاح
          </span>
        )}
        {status === "error" && (
          <span className="flex items-center gap-2 text-sm font-bold text-destructive bg-destructive/10 px-3 py-1 rounded-full">
            <AlertCircle className="w-4 h-4" /> خطأ في الحفظ
          </span>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">النص (عربي)</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-xl p-4 min-h-[100px] focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-800 dark:text-slate-100"
          />
        </div>

        {hasImage && (
          <div>
            <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">رابط الصورة (URL)</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-left text-slate-800 dark:text-slate-100"
              dir="ltr"
              placeholder="https://..."
            />
            {image && (
              <div className="mt-4 relative h-32 w-48 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        )}

        <div className="pt-2">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 hover:-translate-y-0.5"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "جاري الحفظ..." : "حفظ التغييرات"}
          </button>
        </div>
      </div>
    </div>
  );
}
