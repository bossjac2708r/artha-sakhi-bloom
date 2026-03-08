import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FounderSpotlight = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-earth-cream relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">Founder Spotlight</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-80 rounded-2xl bg-card border-2 border-accent flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                    <svg className="w-10 h-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">Founder Photo</p>
                </div>
              </div>
              {/* Decorative frame accent */}
              <div className="absolute -bottom-3 -right-3 w-72 h-80 rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </motion.div>

          {/* Bio & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-1 font-serif">Ms Hema Poonia</h3>
            <p className="text-primary font-medium mb-6 font-sans">Wealth Management Consultant & Social Impact Leader</p>

            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed mb-8">
              <p>
                With a strong belief that financial awareness can transform lives, she has spent years guiding women and families toward better understanding of money, investments, and long-term financial thinking.
              </p>
              <p>
                Her mission continues to focus on building financially empowered women and financially aware families.
              </p>
            </div>

            {/* Quote block */}
            <div className="relative bg-card rounded-xl p-6 border border-border">
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 left-4" />
              <blockquote className="pl-8 text-foreground italic font-serif leading-relaxed">
                "Financial awareness is one of the most powerful forms of empowerment. When women understand money, they gain the confidence to make informed decisions, protect their families' future, and build long-term financial stability."
              </blockquote>
              <p className="pl-8 mt-4 text-sm text-primary font-sans font-medium">— Ms Hema Poonia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSpotlight;
