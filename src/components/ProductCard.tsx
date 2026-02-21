import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name_en: string;
  name_ur?: string;
  slug: string;
  category: string;
  subcategory?: string;
  short_description: string;
  images?: string | string[];
  tags?: string | string[];
  price_example?: string;
  featured?: boolean;
}

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const images = Array.isArray(product.images) ? product.images : (product.images ? JSON.parse(product.images) : []);

  return (
    <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <div className="aspect-[4/3] bg-gradient-to-br from-muted/20 to-muted/5 relative overflow-hidden">
        {images[0] ? (
          <img src={`/images/products/${images[0]}`} alt={product.name_en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">{product.name_en.charAt(0)}</span>
            </div>
          </div>
        )}
        {product.featured && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-foreground text-xs font-medium rounded-full">Featured</span>
        )}
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">{product.subcategory || product.category}</span>
        <h3 className="text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
          {product.name_en}
        </h3>
        {product.name_ur && (
          <p className="text-muted/70 text-sm mt-1 mb-3" dir="rtl">{product.name_ur}</p>
        )}
        <p className="text-sm text-muted line-clamp-2 mb-3">{product.short_description}</p>
        {product.price_example && (
          <p className="text-sm font-semibold text-foreground/70 mb-4">{product.price_example}</p>
        )}
        <Link to={`/product/${product.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}
