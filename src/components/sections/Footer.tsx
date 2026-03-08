import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative py-14 bg-earth-cream border-t border-border overflow-hidden">
    {/* Subtle animated gradient */}
    <motion.div
      className="absolute inset-0 opacity-20"
      animate={{
        background: [
          "linear-gradient(135deg, hsl(var(--earth-warm)) 0%, transparent 60%)",
          "linear-gradient(135deg, transparent 40%, hsl(var(--earth-sage)) 100%)",
          "linear-gradient(135deg, hsl(var(--earth-warm)) 0%, transparent 60%)",
        ],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="container mx-auto px-6 text-center relative z-10">
      <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-3">Founded by</p>
      <p className="text-foreground font-bold font-serif text-xl mb-1">Ms Hema Poonia</p>
      <p className="text-primary font-sans text-sm mb-1">Wealth Management Consultant</p>
      <p className="text-muted-foreground font-sans text-sm mb-4">Founder of ArthaSakhi</p>
      <p className="text-muted-foreground font-sans text-sm italic mb-8">
        Building Financially Empowered Women & Families
      </p>
      <div className="w-12 h-0.5 bg-primary/20 mx-auto mb-4" />
      <p className="text-muted-foreground/60 text-xs font-sans">© ArthaSakhi Initiative</p>
    </div>
  </footer>
);

export default Footer;
