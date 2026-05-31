import { Reveal, SecondaryButton, SectionHeading } from '../ui';

const highlights = ['Clean modern workspace', 'Agency team collaboration', 'Premium visual direction', 'Business-first strategy'];

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/80 bg-white/80 p-8 shadow-sm backdrop-blur sm:p-10 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About SaturnStudio"
              title="Partner Digital untuk Pertumbuhan Bisnis Anda"
              description="SaturnStudio adalah studio digital yang berfokus pada pembuatan website profesional untuk membantu bisnis tampil lebih terpercaya, modern, dan mudah ditemukan secara online."
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-space/70 sm:text-lg">
              Kami percaya bahwa website bukan sekadar tampilan visual, melainkan aset digital yang mampu
              meningkatkan kredibilitas, menarik pelanggan baru, dan membantu pertumbuhan bisnis secara
              berkelanjutan.
            </p>
            <div className="mt-8">
              <SecondaryButton href="#contact">Tentang Kami</SecondaryButton>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <Reveal key={item} delay={index * 100}>
                <div
                  className={`rounded-[1.8rem] border border-space/10 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow ${
                    index === 0 || index === 3 ? 'bg-space text-white' : 'bg-ice'
                  }`}
                >
                  <div className="mb-14 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-current ring-1 ring-inset ring-white/10">
                    0{index + 1}
                  </div>
                  <div className={`font-semibold ${index === 0 || index === 3 ? 'text-white' : 'text-space'}`}>
                    {item}
                  </div>
                  <div className={`mt-2 text-sm leading-7 ${index === 0 || index === 3 ? 'text-white/65' : 'text-space/60'}`}>
                    Tampilan yang bersih, fokus, dan profesional untuk memperkuat kepercayaan pelanggan.
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}