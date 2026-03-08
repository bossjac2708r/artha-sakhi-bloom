import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import {
  Calendar, Users, Home, Clock,
  MessageCircle, Users2, BookOpen, Award, Quote,
} from "lucide-react";

/* ── Part 1 — Dashboard Metrics ── */
const metrics = [
  { icon: Calendar, number: 150, suffix: "+", label: "Community Sessions Conducted", color: "bg-primary/10" },
  { icon: Users, number: 2000, suffix: "+", label: "Women Participants Engaged", color: "bg-secondary/10" },
  { icon: Home, number: 500, suffix: "+", label: "Families Impacted", color: "bg-earth-terracotta/10" },
  { icon: Clock, number: 8, suffix: "+", label: "Years of Community Activity", color: "bg-accent" },
];

const MetricCard = ({
  icon: Icon, number, suffix, label, color, isVisible, delay,
}: {
  icon: typeof Calendar; number: number; suffix: string; label: string; color: string; isVisible: boolean; delay: number;
}) => {
  const count = useCountUp(number, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, boxShadow: "0 14px 36px -10px hsl(var(--primary) / 0.12)" }}
      className="text-center p-7 rounded-2xl bg-card border border-border group cursor-default"
    >
      <motion.div
        className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mx-auto mb-4`}
        whileHover={{ rotate: 8, scale: 1.1 }}
      >
        <Icon className="w-7 h-7 text-primary" />
      </motion.div>
      <p className="text-4xl md:text-5xl font-bold text-primary font-serif mb-1.5">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground font-sans text-sm">{label}</p>
    </motion.div>
  );
};

/* ── Part 2 — Growth Timeline ── */
const milestones = [
  {
    icon: MessageCircle,
    title: "Beginning",
    desc: "Small informal discussions about financial awareness among women.",
  },
  {
    icon: Users2,
    title: "Growing Community",
    desc: "More women began participating in interactive financial learning sessions.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    desc: "Workshops and discussions expanded to cover savings, investments, and long-term planning.",
  },
  {
    icon: Award,
    title: "Community Movement",
    desc: "ArthaSakhi evolved into a trusted community platform promoting financial awareness.",
  },
];

const ImpactJourneySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation(0.1);
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation(0.1);

  return (
    <section className="py-28 bg-background relative overflow-hidden" id="impact-journey">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-sans mb-3">Social Impact Report</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Impact & Journey of ArthaSakhi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-5 rounded-full" />
          <p className="text-muted-foreground font-sans max-w-xl mx-auto text-lg">
            A visual snapshot of the community's growth and grassroots impact over the years.
          </p>
        </motion.div>

        {/* Part 1 — Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} isVisible={isVisible} delay={0.2 + i * 0.12} />
          ))}
        </div>

        {/* Part 2 — Growth Timeline */}
        <div ref={ref2} className="mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isVisible2 ? { opacity: 1 } : {}}
            className="text-center text-2xl md:text-3xl font-bold text-foreground font-serif mb-14"
          >
            Growth Timeline
          </motion.h3>

          {/* Horizontal timeline for desktop, vertical for mobile */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible2 ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 origin-left"
            />
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 relative z-10 shadow-sm"
                >
                  <m.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h4 className="font-serif font-bold text-foreground text-sm mb-2">{m.title}</h4>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden relative pl-10">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute left-[-26px] w-3 h-3 rounded-full bg-primary border-2 border-primary-foreground z-10 mt-1" />
                <div className="bg-card rounded-xl p-5 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <m.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground text-sm">{m.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 3 — Visual Impact Story Quote */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-card to-accent/30 rounded-3xl p-10 md:p-14 border border-border shadow-sm">
            {/* Decorative quote marks */}
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/10" />
            <Quote className="absolute bottom-6 right-6 w-10 h-10 text-primary/10 rotate-180" />

            <div className="text-center relative z-10">
              <p className="text-xl md:text-2xl text-foreground font-serif italic leading-relaxed mb-6">
                "Financial awareness creates confidence. When women understand money, families gain stronger financial foundations."
              </p>
              <div className="w-12 h-0.5 bg-primary/30 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground font-sans">
                The ArthaSakhi community has empowered women to move from hesitation to confident participation in family financial discussions and investment decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactJourneySection;
