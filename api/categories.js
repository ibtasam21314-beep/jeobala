import supabase from './_supabase.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { segment } = req.query;
      let query = supabase.from('categories').select('*');
      if (segment) query = query.eq('segment', segment);
      query = query.order('id', { ascending: true });
      const { data, error } = await query;
      if (error) {
        console.error('Supabase error:', error);
        return res.status(500).json({ error: error.message, details: error });
      }
      return res.status(200).json(data || []);
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}
