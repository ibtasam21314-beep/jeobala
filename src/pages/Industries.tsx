import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChefHat, Building2, Heart, Factory, Store } from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: ChefHat, title: 'Food Service & Catering', desc: 'Supplying restaurants, hotels, and catering companies with premium rice and spices.', products: ['Basmati Rice', 'Spices', 'Seasonings'] },
    { icon: ShoppingBag, title: 'Retail & Grocery', desc: 'Private label and branded products for supermarkets and grocery chains worldwide.', products: ['Packaged Rice', 'Spice Blends', 'Gourmet Salts'] },
    { icon: Factory, title: 'Food Manufacturing', desc: 'Bulk ingredients for food manufacturers and processing facilities.', products: ['Bulk Rice', 'Ground Spices', 'Industrial Packing'] },
    { icon: Building2, title: 'Hospitality', desc: 'Quality textiles for hotels, resorts, and hospitality businesses.', products: ['Bed Linens', 'Towels', 'Table Linens'] },
    { icon: Heart, title: 'Healthcare', desc: 'Institutional textiles for hospitals, clinics, and healthcare facilities.', products: ['Patient Gowns', 'Lab Coats', 'Medical Linens'] },
    { icon: Store, title: 'Home & Living', desc: 'Premium home textiles for retailers and e-commerce businesses.', products: ['Bedding Sets', 'Bath Accessories', 'Kitchen Textiles'] },
  ];

  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Industries</p>
            <h1 className="font-display text-3xl lg:text-5xl font-medium text-foreground leading-snug mb-6">
              Serving diverse industries <span className="text-primary">worldwide.</span>
            </h1>
            <p className="text-muted leading-relaxed max-w-xl text-sm lg:text-base">
              From retail chains to hospitality groups, we supply quality agricultural products and textiles to businesses that demand excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <motion.div key={industry.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-muted/5 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{industry.title}</h3>
                <p className="text-muted text-sm mb-4">{industry.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map(p => <span key={p} className="px-3 py-1 bg-white border border-border text-xs text-muted rounded-full">{p}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-foreground text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-medium mb-4">Your Industry Not Listed?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">We work with businesses across sectors. Contact us to discuss your specific requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
            Discuss Your Needs
          </Link>
        </div>
      </section>
    </>
  );
}
