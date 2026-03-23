import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Keunggulan", href: "#features" },
  { label: "Harga", href: "#pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold text-foreground tracking-wider">
          AQUA<span className="text-gradient">SENSE</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="btn-glow px-5 py-2.5 rounded-lg text-xs font-display font-semibold text-primary-foreground tracking-wider uppercase">
            Pesan
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-body">
                  {l.label}
                </a>
              ))}
              <a href="#pricing" onClick={() => setOpen(false)} className="btn-glow block text-center px-5 py-2.5 rounded-lg text-xs font-display font-semibold text-primary-foreground tracking-wider uppercase">
                Pesan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
