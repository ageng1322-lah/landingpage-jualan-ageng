import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="card-glow rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 relative z-10">
            Siap Revolusi <span className="text-gradient">Monitoring Air Anda?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 relative z-10">
            Hubungi tim kami sekarang dan dapatkan konsultasi gratis untuk kebutuhan Anda.
          </p>
          <a
            href="#pricing"
            className="btn-glow inline-flex items-center gap-3 px-10 py-4 rounded-lg font-display text-sm font-semibold text-primary-foreground tracking-wider uppercase relative z-10"
          >
            Mulai Sekarang
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
