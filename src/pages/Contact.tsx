import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@jeobala.com', href: 'mailto:info@jeobala.com' },
    { icon: Phone, label: 'Phone', value: '+92 XXX XXXXXXX', href: 'tel:+92XXXXXXXXX' },
    { icon: MapPin, label: 'Location', value: 'Pakistan' },
    { icon: Clock, label: 'Business Hours', value: 'Mon-Sat: 9AM-6PM PKT' },
  ];

  return (
    <>
      <Hero heading="Let's Build Your Supply Chain" subheading="Connect with our export specialists for quotations, samples, and partnership opportunities." compact />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-muted/5 rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                </div>
                <p className="text-muted mb-8">Fill out the form below and our team will respond within 24 hours.</p>
                <ContactForm />
              </motion.div>
            </div>
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-foreground text-white rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Quick Response Guarantee</h3>
                <p className="text-muted text-sm leading-relaxed">We value your time. Our team commits to responding to all inquiries within 24 business hours with detailed information and competitive quotes.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
