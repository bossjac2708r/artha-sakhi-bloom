const Footer = () => (
  <footer className="py-12 bg-earth-cream border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-foreground font-semibold font-serif text-lg mb-1">Founded by Ms Hema Poonia</p>
      <p className="text-primary font-sans text-sm mb-3">Wealth Management Consultant</p>
      <p className="text-muted-foreground font-sans text-sm italic">
        Building Financially Empowered Women & Families
      </p>
      <div className="w-10 h-0.5 bg-primary/30 mx-auto mt-6" />
      <p className="text-muted-foreground/60 text-xs mt-4 font-sans">© {new Date().getFullYear()} ArthaSakhi. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
