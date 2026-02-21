import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wheat, Shirt } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import Loading from '../components/Loading';
import { fetchCategories } from '../lib/api';

export default function Products() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then(setCategories).finally(() => setLoading(false));
  }, []);

  const agriCategories = categories.filter(c => c.segment === 'AGRI');
  const textileCategories = categories.filter(c => c.segment === 'TEXTILE');

  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Products</p>
            <h1 className="font-display text-3xl lg:text-5xl font-medium text-foreground leading-snug mb-6">
              Comprehensive range of <span className="text-primary">quality exports.</span>
            </h1>
            <p className="text-muted leading-relaxed max-w-xl text-sm lg:text-base mb-8">
              Explore our agricultural commodities and premium textiles, sourced and manufactured to meet global standards.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
              Request Catalog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Link to="/products/agri" className="group relative bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 border border-green-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-5">
                <Wheat className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Agri Segment</h2>
              <p className="text-muted mb-4 text-sm">Premium rice varieties and authentic spices from the finest sources.</p>
              <span className="inline-flex items-center gap-2 text-green-600 font-medium text-sm group-hover:gap-3 transition-all">
                Explore Agri Products
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link to="/products/textile" className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-5">
                <Shirt className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Textile Segment</h2>
              <p className="text-muted mb-4 text-sm">Quality bedding, towels, and institutional textiles for global markets.</p>
              <span className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
                Explore Textile Products
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {loading ? <Loading /> : (
            <>
              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display text-2xl font-medium text-foreground">Agri Categories</h3>
                  <Link to="/products/agri" className="text-primary text-sm font-medium hover:underline">View All</Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agriCategories.map((cat, i) => <CategoryCard key={cat.id} category={cat} index={i} />)}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display text-2xl font-medium text-foreground">Textile Categories</h3>
                  <Link to="/products/textile" className="text-primary text-sm font-medium hover:underline">View All</Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {textileCategories.map((cat, i) => <CategoryCard key={cat.id} category={cat} index={i} />)}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
