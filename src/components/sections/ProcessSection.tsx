import { processSteps } from '../../data/siteContent';
import { PrimaryButton, Reveal, SectionHeading } from '../ui';

export function ProcessSection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/80 bg-white/80 p-8 shadow-sm sm:p-10 lg:p-14">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Bagaimana Kami Bekerja"
            description="Proses kerja yang rapi untuk memastikan hasil cepat, jelas, dan sesuai kebutuhan."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 80}>
              <div className="rounded-[1.6rem] border border-space/10 bg-ice p-5 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="font-display text-2xl font-bold text-blue">0{index + 1}</div>
                  <div className="h-3 w-3 rounded-full bg-orange" />
                </div>
                <div className="mt-10 font-display text-lg font-semibold text-space">{step}</div>
                <div className="mt-2 text-sm leading-7 text-space/60">Tahapan dibuat sederhana agar Anda mudah memantau progress project.</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <PrimaryButton href="#contact">Mulai Sekarang</PrimaryButton>
        </div>
      </div>
    </section>
  );
}