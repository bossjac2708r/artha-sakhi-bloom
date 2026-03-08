import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const GrowingMovement = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Growth visual */}
      <svg className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-96 opacity-[0.04] text-secondary" viewBox="0 0 200 200" fill="currentColor">
        <circle cx="100" cy="100" r="90" />
      </svg>

      <div className="container mx-auto px-6 max-w-3xl text-center relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">A Growing Movement</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-10 rounded-full" />

          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed font-sans mb-10">
            <p>
              ArthaSakhi represents a growing awareness movement that encourages women to confidently participate in financial conversations.
            </p>
            <p>
              ArthaSakhi continues to stand as a symbol of the belief that financial knowledge has the power to transform families and generations.
            </p>
          </div>

          {/* Growth icon */}
          <div className="flex justify-center mb-10">
            <svg className="w-20 h-20 text-secondary/40" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M40 70V30" strokeLinecap="round" />
              <path d="M40 30C40 30 30 35 25 25C20 15 30 10 40 15C50 10 60 15 55 25C50 35 40 30 40 30Z" fill="currentColor" opacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 70H50" strokeLinecap="round" />
            </svg>
          </div>

          <p className="text-xl md:text-2xl text-primary font-bold italic font-serif leading-relaxed">
            "Financial awareness is not just knowledge — it is empowerment that strengthens families and future generations."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowingMovement;
