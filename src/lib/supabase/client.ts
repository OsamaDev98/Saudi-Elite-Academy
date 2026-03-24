import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Only create client if keys are real URLs (not placeholders)
const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return url.startsWith('http');
  } catch {
    return false;
  }
};

export const supabase = isValidUrl(supabaseUrl) && supabaseAnonKey.length > 20
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
