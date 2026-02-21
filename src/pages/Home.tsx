import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Award, Truck, Users, Wheat, Shirt } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import { fetchProducts, fetchCategories } from '../lib/api';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchProducts({ featured: true }), fetchCategories()])
      .then(([prods]) => {
        setProducts(Array.isArray(prods) ? prods : []);
      })
      .catch((err) => {
        console.error('Failed to fetch:', err);
        setError('Failed to load products');
      })
      .finally(() => setLoading(false));
  }, []);

  const features = [
    { icon: Globe, title: 'Global Reach', desc: 'Exporting to 30+ countries across continents' },
    { icon: Award, title: 'Quality Certified', desc: 'ISO, HACCP, and international certifications' },
    { icon: Truck, title: 'Reliable Logistics', desc: 'End-to-end supply chain management' },
    { icon: Users, title: 'Expert Team', desc: 'Experienced EXIM professionals' },
  ];

  return (
    <>
      <Hero heading="Global Excellence in Agri & Textile Exports" subheading="Premium Basmati rice, authentic spices, and quality textiles delivered worldwide with uncompromising standards." primaryCta={{ text: 'Explore Products', link: '/products' }} secondaryCta={{ text: 'Request Quote', link: '/contact' }} />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Segments</h2>
            <p className="text-muted max-w-2xl mx-auto">Two specialized divisions delivering excellence in agricultural commodities and premium textiles.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 border border-green-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Wheat className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Agri Segment</h3>
              <p className="text-muted mb-6">Premium Basmati & Non-Basmati rice varieties, whole and ground spices sourced from the finest farms.</p>
              <ul className="text-sm text-muted space-y-2 mb-6">
                <li>• Basmati Rice <span dir="rtl" className="text-muted/70">(باسمتی چاول)</span></li>
                <li>• Non-Basmati Rice <span dir="rtl" className="text-muted/70">(چاول)</span></li>
                <li>• Whole & Ground Spices <span dir="rtl" className="text-muted/70">(مصالحے)</span></li>
              </ul>
              <Link to="/products/agri" className="inline-flex items-center gap-2 text-green-600 font-medium hover:gap-3 transition-all">
                Explore Agri Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 border border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Shirt className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Textile Segment</h3>
              <p className="text-muted mb-6">Quality bedding, towels, kitchen linens, and institutional textiles for global markets.</p>
              <ul className="text-sm text-muted space-y-2 mb-6">
                <li>• Bedding & Bed Linen <span dir="rtl" className="text-muted/70">(بستر اور چادریں)</span></li>
                <li>• Bath & Towels <span dir="rtl" className="text-muted/70">(غسل اور تولیے)</span></li>
                <li>• Kitchen & Institutional <span dir="rtl" className="text-muted/70">(ادارہ جاتی ٹیکسٹائل)</span></li>
              </ul>
              <Link to="/products/textile" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
                Explore Textile Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
              <p className="text-muted max-w-xl">Our most sought-after exports, trusted by businesses worldwide.</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          {loading ? <Loading /> : error ? (
            <p className="text-center text-muted py-8">{error}</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.slice(0, 8).map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}
            </div>
          )}
        </div>
      </section>
      <section className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose JEOBALA</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Decades of expertise in international trade, backed by quality certifications and reliable logistics.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Get competitive quotes, product samples, and personalized support from our export specialists.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
              Request a Quote
            </Link>
            <Link to="/about" className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
