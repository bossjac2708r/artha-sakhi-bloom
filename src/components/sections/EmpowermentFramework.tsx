import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Lightbulb, BarChart3, ArrowUpRight, Users } from "lucide-react";

const levels = [
  {
    icon: Users,
    title: "Empowerment",
    desc: "Financially aware women contribute to stronger families, secure futures, and empowered communities.",
    width: "w-56",
  },
  {
    icon: ArrowUpRight,
    title: "Confidence",
    desc: "Women become confident discussing financial matters and actively participate in family decisions.",
    width: "w-72",
  },
  {
    icon: BarChart3,
    title: "Understanding",
    desc: "Participants understand investments, mutual funds, budgeting, and long-term financial planning.",
    width: "w-[22rem]",
  },
  {
    icon: Lightbulb,
    title: "Awareness",
    desc: "Women begin by learning basic concepts of money, savings, and financial planning — the foundation of empowerment.",
    width: "w-[26rem]",
  },
];

const EmpowermentFramework = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 bg-earth-cream relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
            From Awareness to Empowerment: The ArthaSakhi Model
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            ArthaSakhi believes that financial empowerment begins with awareness and grows through knowledge, confidence, and responsible financial decision-making.
          </p>
        </motion.div>

        {/* Pyramid */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          {levels.map((level, i) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 30, scaleX: 0.8 }}
              animate={isVisible ? { opacity: 1, y: 0, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className={`${level.width} max-w-full`}
            >
              <div
                className="bg-card border border-border rounded-xl p-4 md:p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                {/* Gold accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                  style={{
                    background: `linear-gradient(to bottom, hsla(40, 60%, 65%, ${1 - i * 0.15}), hsla(35, 50%, 55%, ${0.6 - i * 0.1}))`,
                  }}
                />

                <div className="w-10 h-10 rounded-lg bg-accent/60 border border-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors ml-2">
                  <level.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif font-bold text-foreground text-base mb-1">
                    {level.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                    {level.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pyramid label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-6"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
            <div className="w-4 h-0.5 bg-primary/30 rounded" />
            <span>Foundation</span>
            <div className="w-12 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            <span>Empowerment</span>
            <div className="w-4 h-0.5 bg-primary/30 rounded" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmpowermentFramework;
