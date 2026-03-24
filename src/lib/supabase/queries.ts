import { supabase, supabaseAdmin } from './client';

// Use admin client (bypasses RLS) for server-side reads, fallback to anon client
const getClient = () => supabaseAdmin || supabase;

export async function getLatestNews(limit = 3) {
  const client = getClient();
  if (!client) return [];
  
  const { data, error } = await client
    .from('news_articles')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching news:', error);
    return [];
  }

  return data;
}

export async function getFAQs() {
  const client = getClient();
  if (!client) return [];
  
  const { data, error } = await client
    .from('faqs')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }

  return data;
}

export async function getTestimonials(limit = 3) {
  const client = getClient();
  if (!client) return [];
  
  const { data, error } = await client
    .from('testimonials')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }

  return data;
}

export async function getPageSections(pageSlug: string) {
  const client = getClient();
  if (!client) return {};
  
  const { data, error } = await client
    .from('page_sections')
    .select('section_key, content_ar, image_url, metadata')
    .eq('page_slug', pageSlug);

  if (error) {
    console.error(`Error fetching page sections for ${pageSlug}:`, error);
    return {};
  }

  // Convert array to key-value object
  return data.reduce((acc: any, curr) => {
    acc[curr.section_key] = {
      content: curr.content_ar,
      image: curr.image_url,
      ...curr.metadata
    };
    return acc;
  }, {});
}
