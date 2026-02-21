import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const schema = process.env.SUPABASE_DB_SCHEMA;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: schema },
  global: {
    headers: {
      Authorization: `Bearer ${serviceKey}`,
    },
  },
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export default supabase;
