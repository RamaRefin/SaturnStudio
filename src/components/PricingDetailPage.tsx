import type { PricingPlan } from '../data/siteContent';
import { IconArrow, IconCheck, Reveal, SectionHeading } from './ui';
import {Header} from './sections/Header';

type PricingDetailPageProps = {
  plan: PricingPlan;
};

function buildGalleryImages(slug: string) {
  const baseSeed = slug.split('/').join('-');

  return [
    `https://picsum.photos/seed/${encodeURIComponent(baseSeed)}-1/1200/900`,
    `https://picsum.photos/seed/${encodeURIComponent(baseSeed)}-2/1200/900`,
    `https://picsum.photos/seed/${encodeURIComponent(baseSeed)}-3/1200/900`,
  ];
}

export function PricingDetailPage({ plan }: PricingDetailPageProps) {
  const galleryImages = buildGalleryImages(plan.slug);

  return (
    
    <div className="bg-ice text-space">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-10rem] h-80 w-80 rounded-full bg-blue/10 blur-3xl animate-float" />
        <div className="absolute right-[-6rem] top-[18rem] h-72 w-72 rounded-full bg-orange/10 blur-3xl animate-float [animation-delay:1.5s]" />
        <div className="absolute bottom-[-8rem] left-[20%] h-64 w-64 rounded-full bg-space/5 blur-3xl animate-float [animation-delay:3s]" />
      </div>

<Header />
      <main className="px-5 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-space/10 bg-white/80 px-4 py-2 text-sm font-semibold text-space shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-blue/30 hover:text-blue"
            >
              <IconArrow />
              Kembali ke beranda
            </a>
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Pricing Detail"
                  title={plan.name}
                  description={plan.description}
                />
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-8 rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-glow sm:p-8">
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-space/45">Harga Paket</div>
                  <div className="mt-3 text-4xl font-bold tracking-tight text-space sm:text-5xl">{plan.price}</div>
                  <p className="mt-4 text-base leading-8 text-space/70">{plan.summary}</p>

                  <div className="mt-6 rounded-[1.5rem] bg-space/5 p-5 text-sm leading-7 text-space/70">
                    {plan.idealFor}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-space px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue"
                    >
                      Konsultasi Paket Ini
                      <IconArrow />
                    </a>
                    <a
                      href="/"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-space/10 bg-white px-6 py-3.5 text-sm font-semibold text-space transition duration-300 hover:-translate-y-0.5 hover:border-blue/30 hover:text-blue"
                    >
                      Lihat paket lain
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl sm:col-span-2 lg:col-span-1">
                  <img
                    src={galleryImages[0]}
                    alt={`${plan.name} preview utama`}
                    className="h-72 w-full object-cover sm:h-80 lg:h-[22rem]"
                    loading="lazy"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 sm:col-span-2 lg:grid-cols-2 lg:col-span-1">
                  <img
                    src={galleryImages[1]}
                    alt={`${plan.name} preview tambahan 1`}
                    className="h-44 w-full rounded-[1.5rem] object-cover shadow-lg"
                    loading="lazy"
                  />
                  <img
                    src={galleryImages[2]}
                    alt={`${plan.name} preview tambahan 2`}
                    className="h-44 w-full rounded-[1.5rem] object-cover shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-sm sm:p-8">
                <SectionHeading
                  eyebrow="Apa yang didapat"
                  title="Rincian paket"
                  description="Setiap paket dibuat dengan fokus yang berbeda agar Anda bisa memilih sesuai kebutuhan bisnis atau project."
                />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-space/50">Fitur yang didapat pada paket ini</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-2xl border border-space/5 bg-space/3 p-4">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-space text-white">
                        <IconCheck />
                      </span>
                      <span className="text-sm leading-7 text-space/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-white/80 bg-gradient-to-br from-space via-slate-900 to-space p-6 text-white shadow-2xl sm:p-8">
                <SectionHeading
                  eyebrow="Alur kerja"
                  title="Bagaimana paket ini dikerjakan"
                  description="Alur dibuat sederhana supaya pengerjaan tetap rapi, cepat, dan mudah dipantau."
                  color="white"
                />
                <div className="mt-8 space-y-4">
                  {[
                    {
                      step: '01',
                      title: 'Brief dan referensi',
                      text: 'Kami mengumpulkan kebutuhan, target, dan referensi visual yang sesuai.',
                    },
                    {
                      step: '02',
                      title: 'Pembuatan konsep',
                      text: 'Struktur halaman dan visual utama dirancang mengikuti scope paket.',
                    },
                    {
                      step: '03',
                      title: 'Review dan finalisasi',
                      text: 'Hasil akhir disesuaikan lagi sebelum dipublikasikan atau diserahkan.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Step {item.step}</div>
                      <div className="mt-2 font-display text-xl font-bold">{item.title}</div>
                      <div className="mt-2 text-sm leading-7 text-white/70">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  );
}
