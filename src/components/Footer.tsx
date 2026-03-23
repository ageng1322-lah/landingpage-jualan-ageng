const Footer = () => (
  <footer className="relative z-10 border-t border-border py-10">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-lg font-bold text-foreground tracking-wider mb-2">
        AQUA<span className="text-gradient">SENSE</span>
      </p>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} AquaSense. Solusi cerdas monitoring perairan.
      </p>
    </div>
  </footer>
);

export default Footer;
