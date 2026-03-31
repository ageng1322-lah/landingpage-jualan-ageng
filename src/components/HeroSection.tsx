import { motion } from "framer-motion";
import droneHero from "@/assets/drone-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={droneHero} alt="Underwater Drone" className="w-full h-full object-cover opacity-40" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Teknologi Monitoring Bawah Air
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Jaga Kualitas Air</span>
            <br />
            <span className="text-gradient">Tanpa Batas</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Drone bawah air cerdas dengan 3 sensor terintegrasi yang memantau kondisi perairan Anda secara real-time. 
            Hemat waktu, hemat biaya, hasil akurat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://mujaer-tech.myscalev.com/p/drone-under-water" target="_blank" rel="noopener noreferrer" className="btn-glow px-8 py-4 rounded-lg font-display text-sm font-semibold text-primary-foreground tracking-wider uppercase">
              Pesan Sekarang
            </a>
            <a href="#features" className="glass px-8 py-4 rounded-lg font-display text-sm font-semibold text-foreground tracking-wider uppercase hover:border-primary/40 transition-all duration-300">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
