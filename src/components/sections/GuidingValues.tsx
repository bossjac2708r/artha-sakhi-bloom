import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Lightbulb, Heart, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Financial Awareness",
    desc: "Making financial knowledge simple and accessible for every woman and family.",
  },
  {
    icon: Heart,
    title: "Women Empowerment",
    desc: "Encouraging women to participate actively in financial decisions with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Responsible Investing",
    desc: "Promoting long-term thinking and disciplined financial habits for lasting security.",
  },
  {
    icon: Users,
    title: "Community Learning",
    desc: "Creating a safe space for open, supportive discussions about money and finances.",
  },
];

const GuidingValues = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">Guiding Values</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground font-sans">The core principles behind the ArthaSakhi initiative</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="text-center bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">{v.title}</h3>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidingValues;
