import { IconSpark } from '../ui';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 font-display text-lg font-bold tracking-tight text-space">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-space text-white shadow-glow">
            <IconSpark />
          </span>
          SaturnStudio
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-space/70 md:flex">
          <a href="#about" className="transition hover:text-space">Tentang</a>
          <a href="#services" className="transition hover:text-space">Layanan</a>
          <a href="#portfolio" className="transition hover:text-space">Project</a>
          <a href="#pricing" className="transition hover:text-space">Harga</a>
          <a href="#contact" className="rounded-full bg-space px-5 py-2.5 text-white transition hover:bg-blue">Konsultasi</a>
        </nav>
        <a href="#contact" className="rounded-full bg-space px-4 py-2.5 text-sm font-semibold text-white md:hidden">
          Kontak
        </a>
      </div>
    </header>
  );
}