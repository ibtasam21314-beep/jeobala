import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-xl font-bold tracking-tight">JEOBALA</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Global excellence in agricultural commodities and textile exports. Premium quality, reliable supply chains.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products/agri" className="text-white/70 text-sm hover:text-white transition-colors">Agri Segment</Link></li>
              <li><Link to="/products/textile" className="text-white/70 text-sm hover:text-white transition-colors">Textile Segment</Link></li>
              <li><Link to="/products/agri?sub=rice" className="text-white/70 text-sm hover:text-white transition-colors">Basmati Rice</Link></li>
              <li><Link to="/products/agri?sub=spices" className="text-white/70 text-sm hover:text-white transition-colors">Spices</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/quality" className="text-white/70 text-sm hover:text-white transition-colors">Quality & Certifications</Link></li>
              <li><Link to="/industries" className="text-white/70 text-sm hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/privacy" className="text-white/70 text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 text-sm hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@jeobala.com" className="text-white/70 text-sm hover:text-white transition-colors">info@jeobala.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">+92 XXX XXXXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">&copy; {currentYear} JEOBALA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-white/50 text-sm hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
