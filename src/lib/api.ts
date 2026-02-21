import { supabase } from './supabase';
import { staticProducts, staticCategories } from './staticData';

export async function fetchProducts(params?: { category?: string; subcategory?: string; featured?: boolean; slug?: string }): Promise<any> {
  try {
    let query = supabase.from('products').select('*');

    if (params?.category) query = query.eq('category', params.category);
    if (params?.subcategory) query = query.eq('subcategory', params.subcategory);
    if (params?.featured) query = query.eq('featured', true);

    if (params?.slug) {
      const singleQuery = query.eq('slug', params.slug).single();
      const { data, error } = await singleQuery;
      if (error) {
        console.warn('Supabase error (products), using static data:', error.message);
        return staticProducts.find(p => p.slug === params.slug) || null;
      }
      return data;
    } else {
      query = query.order('id', { ascending: true });
      const { data, error } = await query;
      if (error) {
        console.warn('Supabase error (products), using static data:', error.message);
        let filtered = [...staticProducts];
        if (params?.category) filtered = filtered.filter(p => p.category === params.category);
        if (params?.subcategory) filtered = filtered.filter(p => p.subcategory === params.subcategory);
        if (params?.featured) filtered = filtered.filter(p => p.featured);
        return filtered;
      }
      return data || [];
    }
  } catch (err) {
    console.warn('Failed to fetch products, using static data:', err);
    let filtered = [...staticProducts];
    if (params?.slug) return staticProducts.find(p => p.slug === params.slug) || null;
    if (params?.category) filtered = filtered.filter(p => p.category === params.category);
    if (params?.subcategory) filtered = filtered.filter(p => p.subcategory === params.subcategory);
    if (params?.featured) filtered = filtered.filter(p => p.featured);
    return filtered;
  }
}

export async function fetchCategories(segment?: string) {
  try {
    let query = supabase.from('categories').select('*');
    if (segment) query = query.eq('segment', segment);
    query = query.order('id', { ascending: true });
    const { data, error } = await query;
    if (error) {
      console.warn('Supabase error (categories), using static data:', error.message);
      let filtered = [...staticCategories];
      if (segment) filtered = filtered.filter(c => c.segment === segment);
      return filtered;
    }
    return data || [];
  } catch (err) {
    console.warn('Failed to fetch categories, using static data:', err);
    let filtered = [...staticCategories];
    if (segment) filtered = filtered.filter(c => c.segment === segment);
    return filtered;
  }
}

export async function fetchPage(slug: string) {
  try {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.warn('Supabase error (pages):', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.warn('Failed to fetch page:', err);
    return null;
  }
}

export async function submitInquiry(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message: string;
  product_interest?: string;
}) {
  try {
    const { data: result, error } = await supabase
      .from('inquiries')
      .insert([{ ...data, status: 'new' }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error (inquiries):', error.message);
      throw new Error(error.message || 'Failed to submit inquiry');
    }
    return result;
  } catch (err) {
    console.error('Failed to submit inquiry:', err);
    throw err;
  }
}
