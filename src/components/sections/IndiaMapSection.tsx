import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const locations = [
  { x: 41, y: 18, city: "Delhi NCR", desc: "Community financial awareness discussion" },
  { x: 33, y: 24, city: "Jaipur", desc: "Women's investment awareness session" },
  { x: 48, y: 26, city: "Lucknow", desc: "Interactive financial learning circle" },
  { x: 25, y: 52, city: "Mumbai", desc: "Community financial awareness discussion" },
  { x: 30, y: 58, city: "Pune", desc: "Women's investment awareness session" },
  { x: 22, y: 38, city: "Ahmedabad", desc: "Interactive financial learning circle" },
  { x: 62, y: 36, city: "Kolkata", desc: "Community financial awareness discussion" },
  { x: 35, y: 78, city: "Bengaluru", desc: "Women's investment awareness session" },
  { x: 42, y: 80, city: "Chennai", desc: "Interactive financial learning circle" },
  { x: 38, y: 66, city: "Hyderabad", desc: "Community financial awareness discussion" },
];

// Realistic India map SVG path
const INDIA_PATH = "M 170,28 L 175,25 180,28 185,30 190,28 195,25 200,22 205,20 210,22 215,25 218,30 220,35 225,32 230,28 235,25 240,28 245,32 250,35 255,38 260,35 265,30 268,28 272,32 275,38 278,42 280,48 282,55 278,60 275,65 280,70 285,75 290,80 295,85 298,90 295,95 290,100 288,105 290,110 295,108 300,112 305,118 310,125 308,130 305,135 300,140 295,145 298,150 302,155 305,160 302,165 298,170 295,175 290,180 285,185 280,190 275,195 270,200 265,205 260,210 255,215 250,220 248,225 250,230 252,235 248,240 242,245 238,250 235,255 232,260 228,265 225,270 220,275 215,278 210,282 208,288 210,292 215,295 218,300 215,308 210,315 205,320 200,325 195,330 190,335 188,340 192,345 195,350 190,355 185,360 180,362 175,358 170,352 168,345 165,340 160,338 155,342 150,348 145,352 140,355 138,360 142,365 148,370 152,375 148,380 142,385 138,390 140,395 145,400 148,405 145,410 140,415 135,418 130,415 125,410 120,405 118,400 122,395 128,390 130,385 125,380 120,375 115,370 112,365 115,360 120,355 125,350 128,345 125,340 120,335 118,330 122,325 128,320 130,315 125,310 120,305 115,300 110,295 105,290 100,285 98,280 102,275 108,270 112,265 108,260 102,255 98,250 95,245 98,240 102,235 105,230 102,225 98,220 95,215 98,210 102,205 105,200 102,195 98,190 95,185 92,180 88,175 85,170 82,165 80,160 78,155 75,150 72,145 70,140 68,135 70,128 75,122 80,118 85,115 88,110 85,105 80,100 78,95 82,88 88,82 92,78 95,72 98,68 102,62 108,58 112,55 115,50 118,45 122,40 128,38 135,35 140,32 148,30 155,28 162,27 170,28 Z";

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
          className="relative max-w-sm mx-auto"
        >
          {/* Real India map outline */}
          <svg viewBox="50 10 280 400" className="w-full h-auto drop-shadow-sm">
            <defs>
              <radialGradient id="mapGrad" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="hsl(var(--earth-sage))" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(var(--earth-warm))" stopOpacity="0.55" />
              </radialGradient>
              <filter id="mapShadow" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="hsl(var(--earth-brown))" floodOpacity="0.15" />
              </filter>
            </defs>
            <path
              d={INDIA_PATH}
              fill="url(#mapGrad)"
              stroke="hsl(var(--earth-green))"
              strokeWidth="1.5"
              strokeOpacity="0.5"
              strokeLinejoin="round"
              filter="url(#mapShadow)"
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
                className="absolute rounded-full bg-earth-terracotta/30"
                initial={false}
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                style={{ width: 16, height: 16, left: -4, top: -4 }}
              />
              {/* Dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-earth-terracotta shadow-md cursor-pointer relative z-10 hover:scale-[2] transition-transform ring-2 ring-earth-terracotta/20" />

              {/* Tooltip */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20 w-48"
                  >
                    <div className="bg-card border border-border rounded-xl shadow-xl p-3 text-center">
                      <p className="text-xs font-bold text-foreground font-serif mb-0.5">{loc.city}</p>
                      <p className="text-[10px] text-muted-foreground font-sans leading-tight">{loc.desc}</p>
                    </div>
                    <div className="w-2.5 h-2.5 bg-card border-b border-r border-border rotate-45 mx-auto -mt-1.5" />
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
