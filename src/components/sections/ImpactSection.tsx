import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Users } from "lucide-react";

const highlights = [
  { icon: MessageCircle, text: "Women felt comfortable discussing money" },
  { icon: Users, text: "Families became more financially aware" },
  { icon: Heart, text: "Financial conversations became normal and empowering" },
];

const ImpactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-earth-cream">
      <div className="container mx-auto px-6 max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center font-serif">
            Community Impact
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-10 rounded-full" />

          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed font-sans mb-12">
            <p>
              Over the years, the initiative saw remarkable participation and engagement. Women who once felt hesitant discussing finances began confidently asking questions, understanding investments, and actively participating in financial decisions within their families.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="text-center p-6 rounded-xl bg-background border border-border"
              >
                <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-foreground font-medium font-sans">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground text-lg mt-10 text-center font-sans">
            The response and participation from the community were overwhelmingly positive, turning this initiative into a meaningful movement for financial awareness.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
