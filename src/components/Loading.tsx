import { motion } from 'framer-motion';

export default function Loading({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-10 h-10 border-3 border-primary/20 border-t-primary rounded-full" />
      <p className="mt-4 text-muted text-sm">{text}</p>
    </div>
  );
}
