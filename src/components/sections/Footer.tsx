export function Footer() {
  return (
    <footer className="border-t border-white/80 bg-white/70 px-5 py-10 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="font-display text-xl font-bold text-space">SaturnStudio</div>
          <div className="mt-2 text-sm text-space/60">Website profesional untuk bisnis modern.</div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-space/65">
          <a href="#about" className="transition hover:text-space">Tentang</a>
          <a href="#services" className="transition hover:text-space">Layanan</a>
          <a href="#portfolio" className="transition hover:text-space">Project</a>
          <a href="#pricing" className="transition hover:text-space">Harga</a>
          <a href="#contact" className="transition hover:text-space">Kontak</a>
        </div>
        <div className="text-sm text-space/55">Copyright © 2026 SaturnStudio</div>
      </div>
    </footer>
  );
}