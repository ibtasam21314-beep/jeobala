import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import Loading from '../components/Loading';
import { fetchProducts, fetchCategories } from '../lib/api';

export default function ProductSegment() {
  const { segment } = useParams<{ segment: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const activeCategory = searchParams.get('category') || '';
  const segmentUpper = segment?.toUpperCase() || 'AGRI';
  const isAgri = segmentUpper === 'AGRI';

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchProducts({ category: segmentUpper }),
      fetchCategories(segmentUpper)
    ]).then(([prods, cats]) => {
      setProducts(prods);
      setCategories(cats);
    }).finally(() => setLoading(false));
  }, [segmentUpper]);

  const filteredProducts = activeCategory ? products.filter(p => {
    const cat = categories.find(c => c.slug === activeCategory);
    return cat && p.subcategory === cat.name_en;
  }) : products;

  const filterOptions = categories.map(c => ({
    value: c.slug,
    label: c.name_en,
    count: products.filter(p => p.subcategory === c.name_en).length
  }));

  const handleCategoryChange = (category: string) => {
    if (category) setSearchParams({ category });
    else setSearchParams({});
  };

  return (
    <>
      <Hero heading={isAgri ? 'Agri Segment' : 'Textile Segment'} subheading={isAgri ? 'Premium Basmati rice, Non-Basmati varieties, and authentic spices for global markets.' : 'Quality bedding, towels, kitchen linens, and institutional textiles.'} compact primaryCta={{ text: 'Request Quote', link: '/contact' }} />
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <ProductFilter categories={filterOptions} activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted text-sm">{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</p>
              </div>
              {loading ? <Loading /> : filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted">No products found in this category.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
