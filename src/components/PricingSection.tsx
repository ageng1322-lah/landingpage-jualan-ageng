import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "15.000.000",
    desc: "Cocok untuk kebutuhan dasar monitoring perairan kecil.",
    features: [
      "1 Unit Drone Underwater",
      "Sensor pH + Suhu",
      "Kontrol via Remote",
      "Garansi 6 Bulan",
      "Panduan Penggunaan",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "25.000.000",
    desc: "Solusi lengkap untuk profesional dan bisnis akuakultur.",
    features: [
      "1 Unit Drone Underwater",
      "3 Sensor (pH, Turbidity, Suhu)",
      "Dashboard Monitoring Real-time",
      "Koneksi Wireless",
      "Garansi 1 Tahun",
      "Support Prioritas 24/7",
      "Pelatihan Operator",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Untuk proyek skala besar dan kebutuhan kustom.",
    features: [
      "Multi-unit Drone",
      "Sensor Custom Sesuai Kebutuhan",
      "Integrasi API & Cloud",
      "Dedicated Account Manager",
      "Garansi 2 Tahun",
      "SLA Premium",
      "Training Tim Lengkap",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Harga</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pilih Paket <span className="text-gradient">Terbaik Anda</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Investasi cerdas untuk masa depan monitoring perairan Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`card-glow rounded-2xl p-8 relative ${plan.popular ? "border-primary/50 scale-105 md:scale-110" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 btn-glow px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-primary-foreground" />
                  <span className="text-xs font-semibold text-primary-foreground uppercase tracking-wider">Terpopuler</span>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>

              <div className="mb-8">
                {plan.price === "Custom" ? (
                  <span className="font-display text-3xl font-bold text-gradient">Hubungi Kami</span>
                ) : (
                  <>
                    <span className="text-muted-foreground text-sm">Rp</span>
                    <span className="font-display text-4xl font-bold text-foreground ml-1">{plan.price}</span>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              {plan.price === "Custom" ? (
                <button
                  className={`w-full py-3.5 rounded-lg font-display text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                    plan.popular
                      ? "btn-glow text-primary-foreground"
                      : "glass text-foreground hover:border-primary/40"
                  }`}
                >
                  Konsultasi Gratis
                </button>
              ) : (
                <a
                  href="https://mujaer-tech.myscalev.com/p/drone-under-water"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3.5 rounded-lg font-display text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                    plan.popular
                      ? "btn-glow text-primary-foreground"
                      : "glass text-foreground hover:border-primary/40"
                  }`}
                >
                  Pesan Sekarang
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
