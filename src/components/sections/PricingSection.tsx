import { PricingPlan1 } from '../../data/siteContent';
import { IconArrow, IconCheck, Reveal, SectionHeading } from '../ui';

export function PricingSection() {
  return (
    <section id="pricing" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-gradient-to-br from-space via-slate-900 to-space p-8 text-white shadow-2xl sm:p-10 lg:p-14">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Pilih Paket yang Sesuai dengan Kebutuhan Anda"
            color="white"
            description="Paket dibuat transparan agar mudah memilih solusi yang paling relevan."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PricingPlan1.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100}>
              <article className={`rounded-[1.9rem] border p-6 transition duration-300 hover:-translate-y-1 ${plan.highlight ? 'border-orange/30 bg-white text-space shadow-glow' : 'border-white/10 bg-white/5 text-white'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                  {plan.highlight ? (
                    <span className="rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">Popular</span>
                  ) : (
                    <span className="rounded-full border border-current/15 px-3 py-1 text-xs font-semibold text-current/70">Flexible</span>
                  )}
                </div>
                <div className={`mt-6 text-4xl font-bold tracking-tight ${plan.highlight ? 'text-space' : 'text-white'}`}>{plan.price}</div>
                <p className={`mt-4 text-sm leading-7 ${plan.highlight ? 'text-space/75' : 'text-white/70'}`}>{plan.summary}</p>
                <ul className="mt-8 space-y-4 text-sm leading-7">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className={`grid h-6 w-6 place-items-center rounded-full ${plan.highlight ? 'bg-space text-white' : 'bg-white/10 text-orange'}`}>
                        <IconCheck />
                      </span>
                      <span className={plan.highlight ? 'text-space/80' : 'text-white/80'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href={plan.slug}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 ${
                      plan.highlight ? 'bg-space text-white hover:bg-blue' : 'border border-white/15 bg-white/10 text-white hover:bg-white/15'
                    }`}
                  >
                    Ambil Paketnya
                    <IconArrow />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-left">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
          >
            Konsultasi paket custom
            <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}