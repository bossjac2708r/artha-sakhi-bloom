import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users, ShieldCheck, BookOpen, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const ArthaSakhiLanding = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "#6D28D9" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "#F472B6" }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]"
      >
        <div className="glass-panel-sm flex items-center justify-between px-6 h-14">
          <span className="text-foreground font-semibold text-lg tracking-tight">
            Artha<span className="gradient-text">Sakhi</span>
          </span>
          <div className="hidden md:flex items-center gap-6">
            {["Tools", "Community", "Learn"].map((link) => (
              <button
                key={link}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>
          <button className="gradient-button text-foreground text-sm font-medium px-5 py-2 rounded-full">
            Join
          </button>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground glass-panel-sm px-4 py-1.5 mb-8">
                <Sparkles className="w-4 h-4 text-secondary" />
                Empowering Women Financially
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[64px] font-semibold text-foreground leading-[1.1] mb-6 tracking-tight"
            >
              Financial Freedom
              <br />
              <span className="gradient-text">for Women</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto"
            >
              ArthaSakhi empowers women with intelligent financial tools,
              beautiful design, and a supportive ecosystem to build
              independence and long-term wealth.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="gradient-button text-foreground font-medium px-8 py-3 rounded-full text-base inline-flex items-center gap-2 justify-center">
                Start Journey
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="glass-panel-sm text-foreground font-medium px-8 py-3 text-base hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200 inline-flex items-center gap-2 justify-center">
                Explore Tools
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards - Bento Grid */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Finance Tools Card */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 group hover:-translate-y-1.5 transition-transform duration-200 lg:col-span-2"
            >
              <TrendingUp className="w-8 h-8 text-secondary mb-5 opacity-80" />
              <h3 className="text-xl font-medium text-foreground mb-3">
                Smart Finance Dashboard
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Track spending, monitor savings goals, and grow wealth with
                simple visual tools designed for women starting their financial
                journey.
              </p>
              {/* Mini chart visualization */}
              <div className="flex items-end gap-1.5 h-16">
                {[40, 55, 35, 65, 50, 75, 60, 85, 70, 90, 80, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm opacity-60"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, #6D28D9, #F472B6)`,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Community Card */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 group hover:-translate-y-1.5 transition-transform duration-200"
            >
              <Users className="w-8 h-8 text-secondary mb-5 opacity-80" />
              <h3 className="text-xl font-medium text-foreground mb-3">
                Women Community
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mentors, founders, and learners supporting each other in a safe
                and empowering financial community.
              </p>
            </motion.div>

            {/* Savings Widget */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 group hover:-translate-y-1.5 transition-transform duration-200"
            >
              <ShieldCheck className="w-8 h-8 text-secondary mb-5 opacity-80" />
              <h3 className="text-lg font-medium text-foreground mb-4">
                Savings Goal
              </h3>
              <div className="w-full h-3 rounded-full bg-muted overflow-hidden mb-3">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #6D28D9, #F472B6)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "67%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                ₹12,000 <span className="text-foreground/50">/</span> ₹18,000 saved
              </p>
            </motion.div>

            {/* Learning Card */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 group hover:-translate-y-1.5 transition-transform duration-200 lg:col-span-2"
            >
              <BookOpen className="w-8 h-8 text-secondary mb-5 opacity-80" />
              <h3 className="text-xl font-medium text-foreground mb-3">
                Learn Financial Skills
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Step-by-step learning modules covering budgeting, investing,
                financial safety, and building independent wealth — designed
                specifically for women.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <motion.div
            className="glass-panel p-12 md:p-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ArthaSakhi exists to close financial knowledge gaps and empower
              women with technology, community, and elegant tools that make
              financial growth simple and accessible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-border">
        <div className="container mx-auto px-6 max-w-[1200px] text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ArthaSakhi. Empowering financial independence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArthaSakhiLanding;
