import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { useState } from "react";

const pillars = [
  {
    icon: BookOpen,
    label: "Knowledge",
    desc: "Learning about savings, investments, and financial planning to build a strong foundation.",
    angle: 0,
  },
  {
    icon: TrendingUp,
    label: "Confidence",
    desc: "Women gaining confidence to participate actively in financial decisions for their families.",
    angle: 90,
  },
  {
    icon: ShieldCheck,
    label: "Independence",
    desc: "Financial security and independence empowering women to shape their own futures.",
    angle: 180,
  },
  {
    icon: Users,
    label: "Family Strength",
    desc: "Financially aware families making better, more informed long-term decisions together.",
    angle: 270,
  },
];

const FinancialLiteracyCore = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hovered, setHovered] = useState<number | null>(null);

  const orbitRadius = 160;

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
            Financial Knowledge at the Heart of Empowerment
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            ArthaSakhi believes that financial awareness is the foundation of stronger families and confident communities. When women understand money, they gain the power to shape their financial future.
          </p>
        </motion.div>

        {/* Desktop orbital view */}
        <div className="hidden md:flex justify-center items-center py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            style={{ width: orbitRadius * 2 + 140, height: orbitRadius * 2 + 140 }}
          >
            {/* Orbit ring */}
            <div
              className="absolute rounded-full border border-dashed border-primary/20"
              style={{
                width: orbitRadius * 2 + 40,
                height: orbitRadius * 2 + 40,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Glowing Core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-28 rounded-full flex items-center justify-center relative"
                style={{
                  background: "radial-gradient(circle, hsl(40, 60%, 70%) 0%, hsl(35, 50%, 55%) 60%, hsl(30, 40%, 40%) 100%)",
                  boxShadow: "0 0 40px 10px hsla(40, 60%, 65%, 0.4), 0 0 80px 20px hsla(40, 50%, 55%, 0.2)",
                }}
              >
                <span className="text-3xl font-serif font-bold text-primary-foreground drop-shadow-md">AS</span>
                {/* Light rays */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <motion.div
                    key={deg}
                    className="absolute w-0.5 h-8 bg-gradient-to-t from-transparent to-primary/20"
                    style={{
                      transform: `rotate(${deg}deg) translateY(-52px)`,
                      transformOrigin: "center center",
                    }}
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Orbiting pillars */}
            {pillars.map((pillar, i) => {
              const angleRad = (pillar.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * (orbitRadius + 20);
              const y = Math.sin(angleRad) * (orbitRadius + 20);

              return (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="absolute z-20"
                  style={{
                    left: `calc(50% + ${x}px - 36px)`,
                    top: `calc(50% + ${y}px - 36px)`,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Connecting line */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{
                      left: 36,
                      top: 36,
                      width: 1,
                      height: 1,
                      overflow: "visible",
                    }}
                  >
                    <motion.line
                      x1={0}
                      y1={0}
                      x2={-x}
                      y2={-y}
                      stroke="hsl(var(--primary))"
                      strokeWidth={1}
                      strokeOpacity={0.2}
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={isVisible ? { pathLength: 1 } : {}}
                      transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
                    />
                  </svg>

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-[72px] h-[72px] rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center cursor-pointer relative"
                  >
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <p className="text-xs font-serif font-bold text-foreground text-center mt-2 w-[72px]">
                    {pillar.label}
                  </p>

                  {/* Hover tooltip */}
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute z-30 w-56 bg-card border border-border rounded-xl shadow-xl p-3 text-center"
                        style={{
                          left: "50%",
                          transform: "translateX(-50%)",
                          top: pillar.angle === 180 || pillar.angle === 270 ? "auto" : "100%",
                          bottom: pillar.angle === 180 || pillar.angle === 270 ? "100%" : "auto",
                          marginTop: 8,
                          marginBottom: 8,
                        }}
                      >
                        <p className="text-xs font-bold text-foreground font-serif mb-1">{pillar.label}</p>
                        <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">{pillar.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile view - stacked cards */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-10">
          {/* Core center */}
          <div className="col-span-2 flex justify-center mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "radial-gradient(circle, hsl(40, 60%, 70%) 0%, hsl(35, 50%, 55%) 60%, hsl(30, 40%, 40%) 100%)",
                boxShadow: "0 0 30px 8px hsla(40, 60%, 65%, 0.3)",
              }}
            >
              <span className="text-xl font-serif font-bold text-primary-foreground">AS</span>
            </motion.div>
          </div>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-4 text-center shadow-sm"
            >
              <pillar.icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <h3 className="text-sm font-serif font-bold text-foreground mb-1">{pillar.label}</h3>
              <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialLiteracyCore;
