import { motion } from "framer-motion";
import logo from "@/assets/arthasakhi-logo.png";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-earth-cream">
    {/* Decorative SVG leaves */}
    <svg className="absolute top-10 left-10 w-24 h-24 opacity-10 text-secondary" viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 5C30 5 10 25 10 50c0 20 15 35 30 42C55 85 70 70 70 50 70 25 60 5 50 5z" />
    </svg>
    <svg className="absolute bottom-20 right-10 w-32 h-32 opacity-10 text-secondary" viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 5C30 5 10 25 10 50c0 20 15 35 30 42C55 85 70 70 70 50 70 25 60 5 50 5z" />
    </svg>

    <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logo} alt="ArthaSakhi Logo" className="w-28 h-28 mx-auto lg:mx-0 mb-6" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 font-serif">
          ArthaSakhi
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-6 font-sans">
          A Community for Financial Awareness & Investment Education
        </p>
        <div className="space-y-2 text-muted-foreground text-lg font-sans">
          <p className="italic">Empowering Women with Financial Knowledge.</p>
          <p className="italic">Strengthening Families through Smart Investing.</p>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={heroIllustration}
          alt="Women in a community financial discussion"
          className="w-full max-w-lg rounded-2xl"
        />
      </motion.div>
    </div>

    {/* Soft wave divider */}
    <div className="absolute bottom-0 left-0 w-full">
      <svg viewBox="0 0 1440 80" fill="none" className="w-full">
        <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(var(--background))" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
