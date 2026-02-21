import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Products',
      path: '/products',
      children: [
        { name: 'Agri Segment', path: '/products/agri' },
        { name: 'Textile Segment', path: '/products/textile' },
      ],
    },
    { name: 'Industries', path: '/industries' },
    { name: 'Quality', path: '/quality' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">JEOBALA</span>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                  <Link to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith(link.path) ? 'text-primary bg-primary/10' : 'text-muted hover:text-foreground hover:bg-muted/10'}`}>
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                        {link.children.map((child) => (
                          <Link key={child.path} to={child.path} className="block px-4 py-3 text-sm text-muted hover:text-foreground hover:bg-muted/10 transition-colors">
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary bg-primary/10' : 'text-muted hover:text-foreground hover:bg-muted/10'}`}>
                  {link.name}
                </Link>
              )
            )}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors">
              Request Quote
            </Link>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden border-t border-border overflow-hidden">
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link to={link.path} onClick={() => setMobileOpen(false)} className={`block px-4 py-3 text-base font-medium rounded-lg ${location.pathname === link.path ? 'text-primary bg-primary/10' : 'text-muted'}`}>
                      {link.name}
                    </Link>
                    {link.children && (
                      <div className="pl-4">
                        {link.children.map((child) => (
                          <Link key={child.path} to={child.path} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-muted">
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link to="/contact" onClick={() => setMobileOpen(false)} className="block w-full text-center px-5 py-3 bg-primary text-white font-medium rounded-lg">
                    Request Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
