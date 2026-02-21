export default function UrduText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span dir="rtl" lang="ur" className={`font-urdu ${className}`}>
      {children}
    </span>
  );
}
