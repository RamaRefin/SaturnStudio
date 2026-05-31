import { features } from '../../data/siteContent';
import { IconArrow, IconCheck, Reveal, SectionHeading } from '../ui';

export function WhySection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-space px-8 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
        <Reveal>
          <SectionHeading eyebrow="Why us" title="Kenapa Klien Memilih Kami?" description="Pendekatan kami fokus pada hasil bisnis, bukan hanya tampilan." color="white" />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 90}>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange">
                  <IconCheck />
                </div>
                <div className="font-display text-lg font-semibold">{feature.title}</div>
                <div className="mt-3 text-sm leading-7 text-white/65">Solusi yang dirancang untuk meningkatkan kredibilitas dan mendorong konversi.</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-space transition duration-300 hover:-translate-y-0.5 hover:bg-orange hover:text-white">
            Mulai Konsultasi
            <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}