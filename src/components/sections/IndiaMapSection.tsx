import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import IndiaMap from "react-svgmap-india";

const locationData: Record<string, { city: string; desc: string }> = {
  DL: { city: "Delhi NCR", desc: "Community financial awareness discussion" },
  RJ: { city: "Rajasthan", desc: "Women's investment awareness session" },
  UP: { city: "Uttar Pradesh", desc: "Interactive financial learning circle" },
  MH: { city: "Maharashtra", desc: "Community financial awareness discussion" },
  GJ: { city: "Gujarat", desc: "Interactive financial learning circle" },
  WB: { city: "West Bengal", desc: "Community financial awareness discussion" },
  KA: { city: "Karnataka", desc: "Women's investment awareness session" },
  TN: { city: "Tamil Nadu", desc: "Interactive financial learning circle" },
  TS: { city: "Telangana", desc: "Community financial awareness discussion" },
  HR: { city: "Haryana", desc: "Women's investment awareness session" },
};

const highlightedStates = Object.keys(locationData);

const IndiaMapSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

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
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
        >
          <style>{`
            .india-map-container {
              width: 100%;
              max-width: 500px;
              margin: 0 auto;
            }
            .india-map-container svg {
              width: 100% !important;
              height: auto !important;
            }
            .india-map-container path {
              transition: fill 0.3s ease, filter 0.3s ease;
              stroke: hsl(var(--earth-green));
              stroke-width: 0.5;
              cursor: pointer;
            }
            .india-map-container path:hover {
              filter: brightness(0.9);
            }
          `}</style>

          <IndiaMap
            size="100%"
            mapColor="hsl(35, 25%, 88%)"
            strokeColor="hsl(140, 20%, 38%)"
            strokeWidth="0.5"
            hoverColor="hsl(15, 50%, 65%)"
            onClick={(stateCode: string) => {
              if (highlightedStates.includes(stateCode)) {
                setHoveredState(hoveredState === stateCode ? null : stateCode);
              }
            }}
          />

          {/* Tooltip */}
          <AnimatePresence>
            {hoveredState && locationData[hoveredState] && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute z-20 w-52 pointer-events-none"
                style={{ left: tooltipPos.x - 104, top: tooltipPos.y - 80 }}
              >
                <div className="bg-card border border-border rounded-xl shadow-xl p-3 text-center">
                  <p className="text-xs font-bold text-foreground font-serif mb-0.5">
                    {locationData[hoveredState].city}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-sans leading-tight">
                    {locationData[hoveredState].desc}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
