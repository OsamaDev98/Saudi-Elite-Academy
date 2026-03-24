const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function check() {
  const { data, error } = await supabase.from('news_articles').select('*').limit(1);
  console.log('news_articles exists?', error ? error.message : 'Yes');
  
  const { data: d2, error: e2 } = await supabase.from('faqs').select('*').limit(1);
  console.log('faqs exists?', e2 ? e2.message : 'Yes');
  
  const { data: d3, error: e3 } = await supabase.from('testimonials').select('*').limit(1);
  console.log('testimonials exists?', e3 ? e3.message : 'Yes');

  const { data: d4, error: e4 } = await supabase.from('page_sections').select('*').limit(1);
  console.log('page_sections exists?', e4 ? e4.message : 'Yes');
}
check();
