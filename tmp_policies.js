const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// We might need to use the service role key to query system tables? 
// No, pg_policies might not be queryable via the REST API unless exposed.
// Let's try it, but fall back to using psql or maybe the user needs to provide service role.
// Actually, `supabase` JS client cannot query pg_policies easily. The REST API only exposes `public` schema.

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // Maybe use service role key if it exists in env?
);

console.log('ANON:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'exists' : 'no');
console.log('SERVICE:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'exists' : 'no');
