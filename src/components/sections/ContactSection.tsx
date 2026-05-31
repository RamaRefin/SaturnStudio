import { useMemo, useState } from 'react';
import { contactDetails } from '../../data/siteContent';
import { buildContactMessage } from '../../utils/contact';
import { IconArrow, Reveal, SectionHeading } from '../ui';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', needs: '' });

  const waLink = useMemo(() => {
    const message = buildContactMessage(formData);
    return `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [formData]);

  const mailLink = useMemo(() => {
    const subject = encodeURIComponent('Konsultasi Website SaturnStudio');
    const body = encodeURIComponent(buildContactMessage(formData));
    return `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  }, [formData]);

  return (
    <section id="contact" className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Siap Memiliki Website Profesional?"
              description="Konsultasikan kebutuhan website Anda sekarang dan dapatkan solusi terbaik untuk bisnis Anda."
            />
          </Reveal>
          <div className="mt-8 space-y-4">
            {[
              ['WhatsApp', 'Chat langsung untuk konsultasi cepat'],
              ['Email', 'Untuk brief dan penawaran resmi'],
              ['Instagram', 'Lihat update project dan insight'],
              ['Lokasi Studio', contactDetails.location],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="rounded-[1.5rem] border border-white/80 bg-white/80 p-5 shadow-sm">
                  <div className="font-semibold text-space">{title}</div>
                  <div className="mt-1 text-sm text-space/60">{text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <form
            className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-glow sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              window.open(waLink, '_blank', 'noopener,noreferrer');
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 sm:col-span-1">
                <span className="text-sm font-semibold text-space">Nama</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Nama Anda"
                  className="w-full rounded-2xl border border-space/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10"
                />
              </label>
              <label className="space-y-2 sm:col-span-1">
                <span className="text-sm font-semibold text-space">Email</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  placeholder="email@domain.com"
                  className="w-full rounded-2xl border border-space/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10"
                />
              </label>
              <label className="space-y-2 sm:col-span-1">
                <span className="text-sm font-semibold text-space">Nomor WhatsApp</span>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(event) => setFormData((current) => ({ ...current, whatsapp: event.target.value }))}
                  placeholder="08xxxxxxxxxx"
                  className="w-full rounded-2xl border border-space/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10"
                />
              </label>
              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-semibold text-space">Kebutuhan Website</span>
                <textarea
                  rows={5}
                  value={formData.needs}
                  onChange={(event) => setFormData((current) => ({ ...current, needs: event.target.value }))}
                  placeholder="Ceritakan kebutuhan website Anda"
                  className="w-full rounded-2xl border border-space/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10"
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-space px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue"
              >
                Kirim Pesan via WhatsApp
                <IconArrow />
              </button>
              <a
                href={mailLink}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-space/10 bg-white px-6 py-3.5 text-sm font-semibold text-space transition duration-300 hover:-translate-y-0.5 hover:border-blue/30 hover:text-blue"
              >
                Kirim via Email
              </a>
            </div>
            <div className="mt-4 text-xs text-space/45">
              Tombol utama akan membuka WhatsApp dengan pesan yang sudah terisi otomatis.
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}