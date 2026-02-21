import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: number;
  name_en: string;
  name_ur?: string;
  slug: string;
  segment: string;
  description?: string;
  image?: string;
}

export default function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  const segmentPath = category.segment.toLowerCase();

  return (
    <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300">
      <div className="aspect-[3/2] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        {category.image ? (
          <img src={`/images/categories/${category.image}`} alt={category.name_en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{category.name_en.charAt(0)}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block px-2 py-1 bg-primary text-white text-xs font-medium rounded mb-2">{category.segment}</span>
        <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-md">
          {category.name_en}
          {category.name_ur && <span className="text-white/70 font-normal text-sm ml-2" dir="rtl">({category.name_ur})</span>}
        </h3>
        {category.description && <p className="text-white/80 text-sm line-clamp-2 mb-3">{category.description}</p>}
        <Link to={`/products/${segmentPath}?category=${category.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:gap-3 transition-all">
          Explore Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}
