import { motion } from "framer-motion";
import { Droplets, Thermometer, Eye, Zap, Shield, Wifi } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Sensor pH Presisi",
    desc: "Pantau tingkat keasaman air secara akurat untuk menjaga ekosistem perairan tetap sehat dan produktif.",
  },
  {
    icon: Eye,
    title: "Sensor Kekeruhan",
    desc: "Deteksi tingkat turbidity air secara instan. Identifikasi pencemaran sebelum terlambat.",
  },
  {
    icon: Thermometer,
    title: "Sensor Suhu Real-time",
    desc: "Monitoring suhu air 24/7 untuk memastikan kondisi optimal bagi kehidupan akuatik Anda.",
  },
  {
    icon: Zap,
    title: "Data Instan",
    desc: "Hasil monitoring langsung tersedia di perangkat Anda. Tanpa menunggu, tanpa ribet.",
  },
  {
    icon: Shield,
    title: "Tahan & Tangguh",
    desc: "Dibangun untuk bertahan di kondisi bawah air yang keras. Garansi ketahanan penuh.",
  },
  {
    icon: Wifi,
    title: "Koneksi Nirkabel",
    desc: "Kirim data secara wireless ke dashboard Anda. Pantau dari mana saja, kapan saja.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const BenefitsSection = () => {
  return (
    <section id="features" className="relative py-24 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Keunggulan</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Mengapa Memilih <span className="text-gradient">Drone Kami?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Solusi all-in-one untuk monitoring kualitas air yang cepat, akurat, dan terjangkau.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="card-glow rounded-xl p-8 cursor-default"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
