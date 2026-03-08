import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const moments = [
  { caption: "Financial awareness session with community women", color: "bg-earth-warm" },
  { caption: "Interactive discussion on savings and investments", color: "bg-accent" },
  { caption: "Women engaging in financial learning sessions", color: "bg-earth-sage/30" },
  { caption: "Community workshop on goal-based investing", color: "bg-card" },
  { caption: "Group discussion on family financial planning", color: "bg-earth-cream" },
  { caption: "Empowering women through financial knowledge", color: "bg-muted" },
];

const CommunityMoments = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-earth-cream">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">Community Moments</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground font-sans">Snapshots from our journey of financial empowerment</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((moment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`${moment.color} rounded-2xl aspect-[4/3] flex items-center justify-center border border-border shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-[1.02]`}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-background/60 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">Photo placeholder</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground text-center font-sans italic">{moment.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityMoments;
