import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Award, FileCheck, Microscope, Truck } from 'lucide-react';
import Hero from '../components/Hero';

export default function Quality() {
  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management System' },
    { name: 'HACCP', desc: 'Hazard Analysis Critical Control Points' },
    { name: 'FSSAI', desc: 'Food Safety Standards Authority' },
    { name: 'Halal Certified', desc: 'Islamic Food Standards' },
    { name: 'OEKO-TEX', desc: 'Textile Safety Standard' },
    { name: 'GOTS', desc: 'Global Organic Textile Standard' },
  ];

  const processes = [
    { icon: Microscope, title: 'Source Verification', desc: 'Every batch is traced to verified farms and mills meeting our quality standards.' },
    { icon: FileCheck, title: 'Lab Testing', desc: 'Comprehensive testing for purity, moisture, contaminants, and grade specifications.' },
    { icon: Shield, title: 'Quality Inspection', desc: 'Multi-stage inspection at sourcing, processing, and pre-shipment stages.' },
    { icon: Truck, title: 'Secure Logistics', desc: 'Temperature-controlled storage and shipping to maintain product integrity.' },
  ];

  return (
    <>
      <Hero heading="Uncompromising Quality Standards" subheading="Every product meets international quality benchmarks and certification requirements." compact />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Quality Process</h2>
            <p className="text-muted max-w-2xl mx-auto">From farm to shipment, every step is monitored to ensure consistent quality.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, i) => (
              <motion.div key={process.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <process.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-muted text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Certifications</h2>
            <p className="text-muted max-w-2xl mx-auto">Our products meet international standards and certification requirements.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl border border-border p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Quality You Can Trust</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Request product specifications, test reports, and certification documents.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
            Request Documentation
          </Link>
        </div>
      </section>
    </>
  );
}
