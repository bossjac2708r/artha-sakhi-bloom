import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const locations = [
  { x: 28, y: 22, city: "Delhi NCR", desc: "Community financial awareness discussion" },
  { x: 22, y: 28, city: "Jaipur", desc: "Women's investment awareness session" },
  { x: 35, y: 38, city: "Lucknow", desc: "Interactive financial learning circle" },
  { x: 45, y: 55, city: "Mumbai", desc: "Community financial awareness discussion" },
  { x: 55, y: 60, city: "Pune", desc: "Women's investment awareness session" },
  { x: 30, y: 45, city: "Ahmedabad", desc: "Interactive financial learning circle" },
  { x: 60, y: 42, city: "Kolkata", desc: "Community financial awareness discussion" },
  { x: 48, y: 75, city: "Bengaluru", desc: "Women's investment awareness session" },
  { x: 55, y: 80, city: "Chennai", desc: "Interactive financial learning circle" },
  { x: 40, y: 68, city: "Hyderabad", desc: "Community financial awareness discussion" },
];

const IndiaMapSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 bg-earth-cream relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
            Where Our Community Gathered
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Regions where ArthaSakhi conducted financial awareness discussions and community sessions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-md mx-auto"
        >
          {/* India map outline SVG */}
          <svg viewBox="0 0 100 110" className="w-full h-auto drop-shadow-sm">
            <defs>
              <radialGradient id="mapGrad" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="hsl(var(--earth-sage))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--earth-warm))" stopOpacity="0.5" />
              </radialGradient>
            </defs>
            {/* Simplified India shape */}
            <path
              d="M30 5 C25 5 18 8 15 14 C12 20 14 24 16 28 C13 30 10 34 10 38 C10 42 12 44 14 46 C14 50 16 55 18 58 C20 62 22 64 25 66 C27 70 30 75 32 78 C34 82 38 88 42 92 C44 95 48 100 50 102 C52 100 54 96 55 93 C57 88 58 82 58 78 C60 74 62 70 63 66 C65 62 68 58 70 54 C72 50 74 46 74 42 C76 38 75 34 73 30 C72 26 70 22 68 18 C66 14 62 10 58 8 C54 6 48 4 44 4 C40 4 34 5 30 5Z"
              fill="url(#mapGrad)"
              stroke="hsl(var(--earth-green))"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </svg>

          {/* Location points */}
          {locations.map((loc, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onTouchStart={() => setActive(active === i ? null : i)}
            >
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-earth-terracotta/30"
                initial={false}
                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                style={{ width: 14, height: 14, marginLeft: -3, marginTop: -3 }}
              />
              {/* Dot */}
              <div className="w-2 h-2 rounded-full bg-earth-terracotta shadow-sm cursor-pointer relative z-10 hover:scale-150 transition-transform" />

              {/* Tooltip */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20 w-44"
                  >
                    <div className="bg-card border border-border rounded-lg shadow-lg p-3 text-center">
                      <p className="text-xs font-bold text-foreground font-serif mb-0.5">{loc.city}</p>
                      <p className="text-[10px] text-muted-foreground font-sans leading-tight">{loc.desc}</p>
                    </div>
                    <div className="w-2 h-2 bg-card border-b border-r border-border rotate-45 mx-auto -mt-1" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground font-sans italic mt-10 max-w-lg mx-auto"
        >
          ArthaSakhi sessions have been conducted through community gatherings and discussions in various local settings.
        </motion.p>
      </div>
    </section>
  );
};

export default IndiaMapSection;
