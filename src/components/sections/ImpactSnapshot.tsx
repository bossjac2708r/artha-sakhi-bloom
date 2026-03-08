import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import { Calendar, Users, Home, Clock } from "lucide-react";

const metrics = [
  { icon: Calendar, number: 150, suffix: "+", label: "Community Sessions Conducted" },
  { icon: Users, number: 2000, suffix: "+", label: "Women Participants Engaged" },
  { icon: Home, number: 500, suffix: "+", label: "Families Reached Through Awareness" },
  { icon: Clock, number: 8, suffix: "+", label: "Years of Community Activity" },
];

const MetricCard = ({ icon: Icon, number, suffix, label, isVisible, delay }: {
  icon: typeof Calendar; number: number; suffix: string; label: string; isVisible: boolean; delay: number;
}) => {
  const count = useCountUp(number, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, boxShadow: "0 12px 30px -8px hsl(var(--primary) / 0.15)" }}
      className="text-center p-8 rounded-xl bg-card border border-border transition-colors group cursor-default"
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors"
        whileHover={{ rotate: 10 }}
      >
        <Icon className="w-7 h-7 text-primary" />
      </motion.div>
      <p className="text-4xl md:text-5xl font-bold text-primary font-serif mb-2">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground font-sans text-sm">{label}</p>
    </motion.div>
  );
};

const ImpactSnapshot = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">Impact Snapshot</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} isVisible={isVisible} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSnapshot;
