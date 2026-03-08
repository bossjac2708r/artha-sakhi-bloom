import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Target, TrendingUp, PiggyBank, BarChart3, Shield, Users } from "lucide-react";

const focusAreas = [
  { icon: Target, title: "Financial Planning", desc: "Understanding the importance of financial planning" },
  { icon: Users, title: "Active Participation", desc: "Encouraging women to take active interest in family finances" },
  { icon: PiggyBank, title: "Savings Awareness", desc: "Basic awareness about savings and investments" },
  { icon: BarChart3, title: "Mutual Funds", desc: "Understanding mutual funds and long-term investing" },
  { icon: Shield, title: "Financial Discipline", desc: "Importance of financial discipline and goal-based investing" },
  { icon: TrendingUp, title: "Family Discussions", desc: "Creating a culture of financial discussions within families" },
];

const FocusSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">What We Focused On</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground font-sans">
            The sessions were designed to be simple, interactive, and easy to understand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 hover:shadow-md transition-shadow border border-border"
            >
              <area.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">{area.title}</h3>
              <p className="text-muted-foreground text-sm font-sans">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
