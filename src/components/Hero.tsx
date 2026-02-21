import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  heading: string;
  subheading: string;
  primaryCta?: { text: string; link: string };
  secondaryCta?: { text: string; link: string };
  image?: string;
  overlay?: boolean;
  compact?: boolean;
}

export default function Hero({ heading, subheading, primaryCta, secondaryCta, image, overlay = true, compact = false }: HeroProps) {
  return (
    <section className={`relative ${compact ? 'pt-24 pb-16 lg:pt-32 lg:pb-20' : 'pt-28 pb-20 lg:pt-40 lg:pb-32'} overflow-hidden`}>
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          {overlay && <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />}
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
      )}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`max-w-3xl ${image ? 'text-white' : ''}`}>
          <h1 className={`${compact ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-6xl'} font-bold leading-tight mb-6`}>
            {heading}
          </h1>
          <p className={`${compact ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'} ${image ? 'text-white/80' : 'text-muted'} leading-relaxed mb-8 max-w-2xl`}>
            {subheading}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link to={primaryCta.link} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
                  {primaryCta.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.link} className={`inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg border transition-colors ${image ? 'border-white/30 text-white hover:bg-white/10' : 'border-border text-foreground hover:bg-muted/10'}`}>
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
