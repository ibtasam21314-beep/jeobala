import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface ProductFilterProps {
  categories: FilterOption[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilter({ categories, activeCategory, onCategoryChange }: ProductFilterProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button onClick={() => setMobileOpen(true)} className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-border rounded-lg text-sm font-medium text-foreground">
        <Filter className="w-4 h-4" />
        Filter Products
      </button>
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24 bg-white rounded-2xl border border-border p-5">
          <h3 className="font-semibold text-foreground mb-4">Categories</h3>
          <ul className="space-y-1">
            <li>
              <button onClick={() => onCategoryChange('')} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!activeCategory ? 'bg-primary/10 text-primary font-medium' : 'text-muted hover:bg-muted/10'}`}>
                All Products
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.value}>
                <button onClick={() => onCategoryChange(cat.value)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeCategory === cat.value ? 'bg-primary/10 text-primary font-medium' : 'text-muted hover:bg-muted/10'}`}>
                  {cat.label}
                  {cat.count !== undefined && <span className="text-muted/60 ml-1">({cat.count})</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed top-0 left-0 bottom-0 w-80 max-w-full bg-white z-50 lg:hidden overflow-y-auto">
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground">Filter Products</h3>
                  <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-muted/10 rounded-lg" aria-label="Close filters">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <ul className="space-y-1">
                  <li>
                    <button onClick={() => { onCategoryChange(''); setMobileOpen(false); }} className={`w-full text-left px-3 py-3 rounded-lg text-sm transition-colors ${!activeCategory ? 'bg-primary/10 text-primary font-medium' : 'text-muted hover:bg-muted/10'}`}>
                      All Products
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button onClick={() => { onCategoryChange(cat.value); setMobileOpen(false); }} className={`w-full text-left px-3 py-3 rounded-lg text-sm transition-colors ${activeCategory === cat.value ? 'bg-primary/10 text-primary font-medium' : 'text-muted hover:bg-muted/10'}`}>
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
