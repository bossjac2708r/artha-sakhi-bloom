import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Shield, Sparkles, Brain, Home } from "lucide-react";

const reasons = [
  { icon: Shield, label: "Security" },
  { icon: Sparkles, label: "Independence" },
  { icon: Brain, label: "Informed Decision-Making" },
  { icon: Home, label: "Building a Stable Future" },
];

const WhyItMatters = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
            Why Financial Awareness Matters
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />

          <p className="text-lg text-muted-foreground mb-10 font-sans">
            Financial awareness is not only about growing wealth. It is about:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {reasons.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border"
              >
                <r.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-foreground font-medium text-sm font-sans">{r.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-xl text-primary font-medium italic font-serif">
            When women understand finances, entire families become stronger and more confident about their future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;
