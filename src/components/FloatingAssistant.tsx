import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const faqs = [
  {
    q: "What is ArthaSakhi?",
    a: "ArthaSakhi is a grassroots financial awareness initiative empowering women and families with practical financial knowledge through community-driven sessions and discussions.",
    section: "about",
  },
  {
    q: "What does the initiative teach?",
    a: "The initiative covers financial planning, savings awareness, mutual funds, goal-based investing, and building a culture of financial discussions within families.",
    section: "focus",
  },
  {
    q: "Who founded the initiative?",
    a: "ArthaSakhi was founded by Ms Hema Poonia, a Wealth Management Consultant dedicated to making financial knowledge accessible to women and families.",
    section: "founder",
  },
  {
    q: "Why is financial awareness important for women?",
    a: "When women understand finances, they gain independence, make informed decisions, and strengthen the financial confidence of entire families.",
    section: "why",
  },
];

const FloatingAssistant = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleNav = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setSelected(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="mb-3 w-72 bg-card border border-border rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-primary/10 px-4 py-3 border-b border-border">
              <p className="font-serif font-bold text-foreground text-sm">ArthaSakhi Assistant</p>
              <p className="text-[11px] text-muted-foreground font-sans">How can I help you today?</p>
            </div>

            <div className="p-3 max-h-72 overflow-y-auto">
              {selected === null ? (
                <div className="space-y-2">
                  {faqs.map((faq, i) => (
                    <button
                      key={i}
                      onClick={() => setSelected(i)}
                      className="w-full text-left px-3 py-2.5 rounded-lg bg-muted/50 hover:bg-accent text-sm text-foreground font-sans transition-colors"
                    >
                      {faq.q}
                    </button>
                  ))}
                </div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  <p className="text-xs font-bold text-primary font-sans">{faqs[selected].q}</p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {faqs[selected].a}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleNav(faqs[selected].section)}
                      className="text-xs text-primary hover:underline font-sans"
                    >
                      Go to section →
                    </button>
                    <button
                      onClick={() => setSelected(null)}
                      className="text-xs text-muted-foreground hover:underline font-sans ml-auto"
                    >
                      ← Back
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setOpen(!open); setSelected(null); }}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>
    </div>
  );
};

export default FloatingAssistant;
