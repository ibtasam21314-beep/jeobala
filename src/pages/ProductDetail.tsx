import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, Truck, Shield, MessageSquare } from 'lucide-react';

import ContactForm from '../components/ContactForm';
import Loading from '../components/Loading';
import { fetchProducts } from '../lib/api';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeVariant, setActiveVariant] = useState(0);

  useEffect(() => {
    if (slug) {
      fetchProducts({ slug }).then(setProduct).finally(() => setLoading(false));
    }
  }, [slug]);

  if (loading) return <div className="pt-24"><Loading /></div>;
  if (!product) return <div className="pt-24 text-center py-20"><p className="text-muted">Product not found.</p></div>;

  const variants = Array.isArray(product.variants) ? product.variants : (product.variants ? JSON.parse(product.variants) : []);
  const images = Array.isArray(product.images) ? product.images : (product.images ? JSON.parse(product.images) : []);
  const tags = Array.isArray(product.tags) ? product.tags : (product.tags ? JSON.parse(product.tags) : []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name_en,
    description: product.short_description,
    category: product.subcategory || product.category,
    brand: { '@type': 'Brand', name: 'JEOBALA' },
    offers: { '@type': 'Offer', priceCurrency: 'USD', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'JEOBALA' } }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="pt-24 lg:pt-32 pb-12 bg-muted/5">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to={`/products/${product.category?.toLowerCase() || 'agri'}`} className="inline-flex items-center gap-2 text-muted hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to {product.category} Products
          </Link>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="aspect-square bg-white rounded-3xl border border-border overflow-hidden mb-4">
                {images[0] ? (
                  <img src={`/images/products/${images[0]}`} alt={product.name_en} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="w-32 h-32 bg-primary/20 rounded-3xl flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">{product.name_en.charAt(0)}</span>
                    </div>
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.slice(0, 4).map((img: string, i: number) => (
                    <div key={i} className="w-20 h-20 bg-white rounded-xl border border-border overflow-hidden cursor-pointer hover:border-primary transition-colors">
                      <img src={`/images/products/${img}`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-primary font-medium text-sm uppercase tracking-wide">{product.subcategory || product.category}</span>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-2">
                {product.name_en}
                {product.name_ur && <span className="text-muted font-normal text-xl" dir="rtl"> ({product.name_ur})</span>}
              </h1>
              {product.price_example && <p className="text-xl font-semibold text-primary mb-4">{product.price_example}</p>}
              <p className="text-muted leading-relaxed mb-6">{product.long_description || product.short_description}</p>
              {variants.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Available Variants</h3>
                  <div className="space-y-3">
                    {variants.map((v: any, i: number) => (
                      <div key={i} className={`p-4 rounded-xl border cursor-pointer transition-all ${activeVariant === i ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`} onClick={() => setActiveVariant(i)}>
                        <p className="font-medium text-foreground mb-1">{v.type}</p>
                        <p className="text-sm text-muted">Packing: {Array.isArray(v.packing) ? v.packing.join(', ') : v.packing}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag: string) => <span key={tag} className="px-3 py-1 bg-muted/10 text-muted text-sm rounded-full">{tag}</span>)}
                </div>
              )}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
                  Request Quote
                </Link>
                <Link to="/contact" className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted/10 transition-colors">
                  Request Sample
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/5 rounded-xl">
                  <Package className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted">Custom Packing</p>
                </div>
                <div className="text-center p-4 bg-muted/5 rounded-xl">
                  <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted">Global Shipping</p>
                </div>
                <div className="text-center p-4 bg-muted/5 rounded-xl">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted">Quality Assured</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Inquire About This Product</h2>
            </div>
            <ContactForm productInterest={product.name_en} />
          </div>
        </div>
      </section>
    </>
  );
}
