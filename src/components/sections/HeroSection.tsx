import { Reveal, PrimaryButton, SecondaryButton } from '../ui';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue">
            Premium web studio for modern businesses
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-space sm:text-5xl md:text-6xl lg:text-7xl">
            Website Profesional untuk Mengembangkan Bisnis Anda
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-space/70 sm:text-xl">
            Kami membantu UMKM, bisnis, startup, dan personal brand memiliki website modern yang cepat,
            profesional, dan siap meningkatkan kredibilitas.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-space/65 sm:text-lg">
            SaturnStudio menyediakan jasa pembuatan website modern dengan desain premium, performa optimal,
            dan tampilan responsif untuk membantu bisnis berkembang di era digital.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#contact">Konsultasi Gratis</PrimaryButton>
            <SecondaryButton href="#portfolio">Lihat Portofolio</SecondaryButton>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: '50+', label: 'Project delivered' },
              { value: '100%', label: 'Mobile responsive' },
              { value: '24/7', label: 'Support after launch' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur">
                <div className="text-2xl font-bold text-space">{stat.value}</div>
                <div className="mt-1 text-sm text-space/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative lg:pl-8" delay={150}>
          <div className="absolute -left-2 top-8 hidden h-24 w-24 rounded-full border border-blue/20 bg-white/60 shadow-glow backdrop-blur md:block animate-float" />
          <div className="absolute -right-3 bottom-10 hidden h-20 w-20 rounded-[2rem] border border-orange/20 bg-white/70 shadow-glow backdrop-blur md:block animate-float [animation-delay:1.2s]" />

          <div className="rounded-[2rem] border border-white/80 bg-gradient-to-br from-white via-white to-ice p-4 shadow-glow">
            <div className="rounded-[1.65rem] border border-space/5 bg-space p-5 text-white shadow-2xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-sm font-medium text-white/60">SaturnStudio Dashboard</div>
                  <div className="mt-1 text-xl font-semibold">Premium website mockup</div>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">Live Preview</div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 flex items-center justify-between text-sm text-white/70">
                    <span>Performance</span>
                    <span>SEO ready</span>
                  </div>
                  <div className="rounded-[1.2rem] bg-gradient-to-br from-blue/90 via-blue to-orange/80 p-5">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/75">Conversion focused</div>
                    <div className="mt-3 text-2xl font-bold leading-tight">Modern digital presence that builds trust.</div>
                    <div className="mt-5 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/15" />
                      <div>
                        <div className="text-sm font-semibold">Lead generation</div>
                        <div className="text-xs text-white/70">Clean, clear, premium</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/60">Website visits</div>
                    <div className="mt-2 flex items-end gap-2">
                      <div className="h-16 w-3 rounded-full bg-white/25" />
                      <div className="h-24 w-3 rounded-full bg-white/45" />
                      <div className="h-20 w-3 rounded-full bg-white/65" />
                      <div className="h-28 w-3 rounded-full bg-blue" />
                      <div className="h-16 w-3 rounded-full bg-orange" />
                    </div>
                  </div>
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/60">Project status</div>
                    <div className="mt-3 space-y-3 text-sm text-white/85">
                      <div className="flex items-center justify-between">
                        <span>Brief</span>
                        <span className="text-orange">Done</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Design</span>
                        <span className="text-blue">In progress</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Launch</span>
                        <span>Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}