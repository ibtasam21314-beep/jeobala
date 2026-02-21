import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wheat, Shirt, Globe, Award, Users, Briefcase, TrendingUp, Shield, Truck, HeartHandshake, ArrowRight, Building2, UserCheck } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'group' | 'operations'>('group');

  const services = [
    { icon: Wheat, title: 'Agri Commodities', desc: 'Premium Basmati rice, non-Basmati varieties, and authentic spices sourced from certified farms.', color: 'bg-green-500' },
    { icon: Shirt, title: 'Textile Products', desc: 'Quality bedding, towels, kitchen linens, and institutional textiles manufactured to global standards.', color: 'bg-blue-500' },
    { icon: Globe, title: 'Global Export', desc: 'End-to-end export services covering documentation, logistics, and customs clearance worldwide.', color: 'bg-purple-500' },
    { icon: HeartHandshake, title: 'Trade Consulting', desc: 'EXIM mentorship, training, and consultancy for businesses entering international markets.', color: 'bg-amber-500' },
  ];

  const categories = [
    { name: 'Basmati Rice', nameUr: 'باسمتی چاول', desc: '1121, 1509, Super Basmati varieties', image: '/images/categories/basmati-rice.jpg' },
    { name: 'Non-Basmati Rice', nameUr: 'چاول', desc: 'IRRI-6, PK-386, C-9 varieties', image: '/images/categories/non-basmati-rice.jpg' },
    { name: 'Whole Spices', nameUr: 'ثابت مصالحے', desc: 'Cumin, cardamom, cinnamon, and more', image: '/images/categories/whole-spices.jpg' },
    { name: 'Ground Spices', nameUr: 'پسے ہوئے مصالحے', desc: 'Turmeric, chili, coriander powders', image: '/images/categories/ground-spices.jpg' },
    { name: 'Bedding & Linen', nameUr: 'بستر اور چادریں', desc: 'Sheets, covers, comforters', image: '/images/categories/bedding-linen.jpg' },
    { name: 'Bath & Towels', nameUr: 'غسل اور تولیے', desc: 'Terry towels, bathrobes', image: '/images/categories/bath-towels.jpg' },
  ];

  const groupFocus = [
    { icon: Building2, title: 'Strategic Partnerships', desc: 'Long-term relationships with farms, mills, and manufacturers' },
    { icon: TrendingUp, title: 'Market Intelligence', desc: 'Real-time pricing, demand forecasting, and trend analysis' },
    { icon: Shield, title: 'Risk Management', desc: 'Hedging, insurance, and compliance frameworks' },
    { icon: Award, title: 'Quality Assurance', desc: 'ISO, HACCP, and international certification standards' },
  ];

  const operationsFocus = [
    { icon: UserCheck, title: 'Customer Success', desc: 'Dedicated account managers and responsive support' },
    { icon: Truck, title: 'Logistics Excellence', desc: 'Optimized shipping routes and delivery tracking' },
    { icon: Users, title: 'Sourcing Network', desc: 'Verified supplier base across regions' },
    { icon: Globe, title: 'Global Compliance', desc: 'Export documentation and regulatory adherence' },
  ];

  const stats = [
    { value: '30+', label: 'Export Destinations' },
    { value: '500+', label: 'Business Partners' },
    { value: '15+', label: 'Years Experience' },
    { value: '100%', label: 'Quality Commitment' },
  ];

  return (
    <>
      <section className="pt-28 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">About JEOBALA</p>
            <h1 className="font-display text-3xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-snug mb-8">
              We are a service-driven business <br className="hidden lg:block" />
              built around <span className="text-primary italic">product excellence.</span>
            </h1>
            <p className="text-muted leading-relaxed max-w-xl text-sm lg:text-base font-light tracking-wide">
              Bridging premium Pakistani agricultural products and quality textiles with global markets through integrated sourcing, quality control, and logistics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">What We Do</h2>
            <p className="text-muted max-w-2xl mx-auto">Four integrated service channels delivering value across the export supply chain.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-5`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">Our Categories</h2>
            <p className="text-muted max-w-2xl mx-auto">Comprehensive product range spanning agricultural commodities and premium textiles.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={cat.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <div className="aspect-[16/10] relative">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-1 group-hover:text-accent transition-colors">{cat.name}</h3>
                      <p className="text-white/60 text-sm mb-1" dir="rtl">{cat.nameUr}</p>
                      <p className="text-white/70 text-sm">{cat.desc}</p>
                    </div>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
              Explore All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">How We Operate</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A dual focus on strategic partnerships and operational excellence drives our success.</p>
          </motion.div>
          <div className="flex justify-center gap-4 mb-12">
            <button onClick={() => setActiveTab('group')} className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'group' ? 'bg-primary text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
              Strategic Focus
            </button>
            <button onClick={() => setActiveTab('operations')} className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'operations' ? 'bg-primary text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
              Operational Focus
            </button>
          </div>
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 'group' ? groupFocus : operationsFocus).map((item) => (
              <div key={item.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-medium text-sm uppercase tracking-wide">Leadership</span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2 mb-6">Founder & CEO</h2>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">JEOBALA</h3>
                    <p className="text-primary font-medium">Founder & CEO</p>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-foreground">Experienced Exporter & Importer</strong> | EXIM Mentor | Export-Import Consultant & Trainer | Indenter & EXIM Agent | Entrepreneur.
                </p>
                <p className="text-muted leading-relaxed">
                  With extensive experience in international trade, our founder has built JEOBALA into a trusted name in global exports, mentoring businesses and facilitating trade partnerships across continents.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-gradient-to-br from-muted/5 to-muted/10 rounded-2xl p-6 text-center border border-border">
                    <div className="font-display text-4xl lg:text-5xl font-semibold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">Get In Touch Today</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Ready to explore partnership opportunities? Our team is here to discuss your requirements and provide competitive quotes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
                Contact Us
              </Link>
              <Link to="/products" className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
