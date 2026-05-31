import { portfolio } from '../../data/siteContent';
import { Reveal, SecondaryButton, SectionHeading } from '../ui';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Project yang Telah Kami Kerjakan"
            description="Beberapa website yang telah membantu bisnis tampil lebih profesional."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className={`group overflow-hidden rounded-[1.8rem] border border-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow ${index % 3 === 0 ? 'bg-space text-white' : 'bg-white/80'}`}>
                <div className="flex items-center justify-between">
                  <div className={`text-sm font-semibold uppercase tracking-[0.24em] ${index % 3 === 0 ? 'text-white/60' : 'text-space/50'}`}>Case study</div>
                  <div className={`rounded-full px-3 py-1 text-xs font-semibold ${index % 3 === 0 ? 'bg-white/10 text-white/80' : 'bg-space/5 text-space/70'}`}>{item.label}</div>
                </div>
                <div className={`mt-10 aspect-[4/3] rounded-[1.5rem] ${index % 3 === 0 ? 'bg-gradient-to-br from-blue via-space to-orange' : 'bg-gradient-to-br from-ice via-white to-slate/20'}`}>
                  <div className="flex h-full items-end p-4">
                    <div className={`w-full rounded-[1.25rem] border p-4 ${index % 3 === 0 ? 'border-white/15 bg-white/10 text-white' : 'border-space/10 bg-white/70 text-space'}`}>
                      <div className="text-xs uppercase tracking-[0.3em]">Website mockup</div>
                      <div className="mt-2 font-display text-xl font-semibold">{item.title}</div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <SecondaryButton href="#contact">Lihat Semua Project</SecondaryButton>
        </div>
      </div>
    </section>
  );
}