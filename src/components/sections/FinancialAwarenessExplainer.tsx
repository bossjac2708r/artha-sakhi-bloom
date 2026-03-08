import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { PiggyBank, TrendingUp, BookOpen, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: PiggyBank,
    title: "Saving Money",
    desc: "Building the habit of consistent saving creates a strong financial foundation for individuals and families.",
  },
  {
    icon: BookOpen,
    title: "Learning About Investments",
    desc: "Understanding how investments work empowers confident, informed financial decisions.",
  },
  {
    icon: TrendingUp,
    title: "Financial Planning",
    desc: "Setting goals and creating plans turns financial dreams into achievable milestones.",
  },
  {
    icon: ShieldCheck,
    title: "Family Financial Security",
    desc: "Financial awareness protects families and builds long-term stability across generations.",
  },
];

const FinancialAwarenessExplainer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
            Understanding Financial Awareness
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground font-sans max-w-lg mx-auto">
            Financial awareness empowers individuals to make confident and responsible financial decisions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group text-center"
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-accent/60 border border-border flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <step.icon className="w-9 h-9 text-primary" />
              </motion.div>
              <h3 className="font-serif font-bold text-foreground text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{step.desc}</p>

              {/* Connecting arrow for non-last items */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute">
                  {/* Arrow handled by layout gap */}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Animated flow line for desktop */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-auto mt-8 origin-left"
        />
      </div>
    </section>
  );
};

export default FinancialAwarenessExplainer;
