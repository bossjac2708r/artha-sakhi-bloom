import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const MissionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-earth-cream">
      <div className="container mx-auto px-6 max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">Our Mission</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-10 rounded-full" />
          <p className="text-xl text-muted-foreground leading-relaxed font-sans italic">
            To promote financial literacy, responsible investing, and long-term financial awareness, especially among women, so that families can make informed and confident financial decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
