import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Tambak Udang",
    text: "Drone ini mengubah cara kami memantau kualitas air. Dulu butuh 3 jam manual, sekarang cukup 15 menit dengan hasil lebih akurat.",
  },
  {
    name: "Dr. Rina Wati",
    role: "Peneliti Kelautan LIPI",
    text: "Sensor yang terintegrasi sangat membantu riset kami. Data real-time membuat analisis jadi jauh lebih efisien.",
  },
  {
    name: "Ahmad Fauzi",
    role: "Manajer Perikanan",
    text: "ROI-nya luar biasa. Investasi sekali, hemat biaya monitoring bertahun-tahun. Sangat direkomendasikan!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Testimoni</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Dipercaya <span className="text-gradient">Para Profesional</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="card-glow rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
