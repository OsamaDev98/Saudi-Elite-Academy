'use server';

import { supabase } from '@/lib/supabase/client';
import { revalidatePath } from 'next/cache';

export async function updatePageSection(pageSlug: string, sectionKey: string, contentAr: string, imageUrl?: string) {
  if (!supabase) {
    return { success: false, error: 'Database connection failed' };
  }

  try {
    const { error } = await supabase
      .from('page_sections')
      .upsert({
        page_slug: pageSlug,
        section_key: sectionKey,
        content_ar: contentAr,
        image_url: imageUrl || null,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'page_slug,section_key'
      });

    if (error) throw error;

    // Revalidate the page so changes show immediately
    const pathToRevalidate = pageSlug === 'home' ? '/' : `/${pageSlug}`;
    revalidatePath(pathToRevalidate);

    return { success: true };
  } catch (error: any) {
    console.error('Error updating page section:', error);
    return { success: false, error: error.message || 'Failed to update content' };
  }
}
