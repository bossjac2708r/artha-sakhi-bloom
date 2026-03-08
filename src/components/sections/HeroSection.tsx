import { motion } from "framer-motion";
import logo from "@/assets/arthasakhi-logo.png";
import heroIllustration from "@/assets/hero-illustration.png";
import { Button } from "@/components/ui/button";
import { ArrowDown, User } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-earth-cream">
    {/* Animated gradient overlay */}
    <motion.div
      className="absolute inset-0 opacity-30"
      animate={{
        background: [
          "radial-gradient(ellipse at 20% 50%, hsl(var(--earth-warm)) 0%, transparent 70%)",
          "radial-gradient(ellipse at 80% 50%, hsl(var(--earth-warm)) 0%, transparent 70%)",
          "radial-gradient(ellipse at 20% 50%, hsl(var(--earth-warm)) 0%, transparent 70%)",
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Decorative SVG elements */}
    <motion.svg
      className="absolute top-10 left-10 w-24 h-24 opacity-[0.07] text-secondary"
      viewBox="0 0 100 100"
      fill="currentColor"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <path d="M50 5C30 5 10 25 10 50c0 20 15 35 30 42C55 85 70 70 70 50 70 25 60 5 50 5z" />
    </motion.svg>
    <motion.svg
      className="absolute top-32 right-16 w-16 h-16 opacity-[0.06] text-primary"
      viewBox="0 0 100 100"
      fill="currentColor"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="50" cy="50" r="45" />
    </motion.svg>
    <svg className="absolute bottom-40 left-20 w-20 h-20 opacity-[0.05] text-secondary" viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 5C30 5 10 25 10 50c0 20 15 35 30 42C55 85 70 70 70 50 70 25 60 5 50 5z" />
    </svg>
    <motion.svg
      className="absolute bottom-20 right-10 w-32 h-32 opacity-[0.06] text-secondary"
      viewBox="0 0 100 100"
      fill="currentColor"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M50 5C30 5 10 25 10 50c0 20 15 35 30 42C55 85 70 70 70 50 70 25 60 5 50 5z" />
    </motion.svg>

    <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logo} alt="ArthaSakhi Logo — Women empowerment through financial literacy" className="w-32 h-32 mx-auto lg:mx-0 mb-6 drop-shadow-sm" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 font-serif tracking-tight">
          ArthaSakhi
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-5 font-sans">
          A Community for Financial Awareness & Investment Education
        </p>
        <div className="space-y-1.5 text-muted-foreground text-lg font-sans mb-8">
          <p className="italic">Empowering Women with Financial Knowledge.</p>
          <p className="italic">Strengthening Families through Smart Investing.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans rounded-full px-8 hover:shadow-lg transition-shadow"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="w-4 h-4 mr-2" />
            Learn About the Initiative
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 font-sans rounded-full px-8 hover:shadow-md transition-shadow"
            onClick={() => document.getElementById("founder")?.scrollIntoView({ behavior: "smooth" })}
          >
            <User className="w-4 h-4 mr-2" />
            Meet the Founder
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.img
          src={heroIllustration}
          alt="Community members in a financial awareness discussion circle"
          className="w-full max-w-lg rounded-3xl drop-shadow-lg"
          loading="eager"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
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
