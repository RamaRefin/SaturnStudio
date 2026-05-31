import { services } from '../../data/siteContent';
import { IconSpark, PrimaryButton, Reveal, SectionHeading } from '../ui';

export function ServicesSection() {
  return (
    <section id="services" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Layanan yang Kami Sediakan"
            description="Solusi website profesional yang dirancang sesuai kebutuhan bisnis Anda."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 75}>
              <article className="group rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-space text-white transition duration-300 group-hover:bg-blue">
                  <IconSpark />
                </div>
                <h3 className="font-display text-xl font-semibold text-space">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-space/65">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <PrimaryButton href="#pricing">Lihat Detail Layanan</PrimaryButton>
        </div>
      </div>
    </section>
  );
}