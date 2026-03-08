import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { MessageCircle, Users, BookOpen, Award } from "lucide-react";

const milestones = [
  {
    icon: MessageCircle,
    title: "The Beginning",
    desc: "Small community discussions on financial awareness among women and families.",
  },
  {
    icon: Users,
    title: "Community Growth",
    desc: "More women began joining financial awareness sessions, creating a growing network of learners.",
  },
  {
    icon: BookOpen,
    title: "Financial Learning",
    desc: "Sessions covering savings, investments, mutual funds, and goal-based financial planning.",
  },
  {
    icon: Award,
    title: "Community Movement",
    desc: "ArthaSakhi became a trusted platform for financial discussions among women and families.",
  },
];

const JourneyTimeline = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-earth-cream">
      <div className="container mx-auto px-6 max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
            Journey of ArthaSakhi
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-primary-foreground z-10 mt-5" />

              {/* Content card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left md:ml-auto"}`}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <m.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground font-serif">{m.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
