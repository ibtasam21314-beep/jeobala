import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const schema = import.meta.env.VITE_SUPABASE_DB_SCHEMA || 'public';

// Only use the anon key in the browser to avoid @supabase/supabase-js throwing errors.
// Because the tables are newly created and RLS is not enabled, the anon key can read safely.
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    db: { schema: schema },
});
