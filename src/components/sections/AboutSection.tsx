import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center font-serif">
            About the Community
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />

          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed font-sans">
            <p>
              ArthaSakhi is a grassroots financial awareness initiative founded with a simple yet powerful mission — to make financial knowledge accessible, practical, and empowering for women and families.
            </p>
            <p>
              For many years, this community operated through offline gatherings, awareness sessions, and discussions, where women from diverse backgrounds came together to learn about money, savings, investments, and financial security.
            </p>
            <p>
              What started as a small effort gradually grew into a vibrant community movement, attracting enthusiastic participation from women and families who wished to understand and manage their finances better.
            </p>
            <p>
              Through this initiative, the goal was never just about investment education — it was about building confidence with money, encouraging independent financial thinking, and creating financially aware families.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
