import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Send, Heart } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const subject = encodeURIComponent("ArthaSakhi — New Inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:arthasakhi@gmail.com?subject=${subject}&body=${body}`, "_blank");

    toast({ title: "Opening your email client…", description: "Thank you for reaching out!" });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="relative py-20 bg-earth-cream overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 50%, hsl(var(--earth-warm)) 0%, transparent 70%)",
            "radial-gradient(ellipse at 70% 50%, hsl(var(--earth-sage)) 0%, transparent 70%)",
            "radial-gradient(ellipse at 30% 50%, hsl(var(--earth-warm)) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-3">
            Join the ArthaSakhi Community
          </h2>
          <p className="text-muted-foreground font-sans max-w-lg mx-auto">
            Have questions about financial literacy workshops or want to bring ArthaSakhi to your community? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">Email Us</p>
                  <p className="text-sm text-muted-foreground font-sans">arthasakhi@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">Community</p>
                  <p className="text-sm text-muted-foreground font-sans">Join our growing family of financially empowered women</p>
                </div>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border">
              <p className="font-serif font-semibold text-foreground mb-2">Why Connect?</p>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                <li>• Invite ArthaSakhi to your college or community</li>
                <li>• Learn about upcoming financial literacy workshops</li>
                <li>• Collaborate on women empowerment initiatives</li>
                <li>• Share your financial growth story</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="text-sm font-sans font-medium text-foreground mb-1.5 block">Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 100))}
                placeholder="Your name"
                required
                className="bg-background/50 border-border"
              />
            </div>
            <div>
              <label className="text-sm font-sans font-medium text-foreground mb-1.5 block">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.slice(0, 255))}
                placeholder="your@email.com"
                required
                className="bg-background/50 border-border"
              />
            </div>
            <div>
              <label className="text-sm font-sans font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
                placeholder="Tell us how we can help…"
                rows={4}
                className="bg-background/50 border-border"
              />
            </div>
            <Button type="submit" className="w-full rounded-full font-sans">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
