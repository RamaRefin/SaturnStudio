import { useEffect, useMemo, useState } from 'react';
import { testimonials } from '../../data/siteContent';
import { Reveal, SecondaryButton, SectionHeading } from '../ui';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const current = testimonials[activeIndex];

  const visibleTestimonials = useMemo(() => {
    return [
      testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length],
      current,
      testimonials[(activeIndex + 1) % testimonials.length],
    ];
  }, [activeIndex, current]);

  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Apa Kata Klien Kami"
            description="Kesan klien terhadap hasil kerja, komunikasi, dan support setelah project selesai."
          />
        </Reveal>

        <div
          className="mt-12 rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="rounded-[1.8rem] border border-space/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-space text-white">{current.author.charAt(0)}</div>
                <div>
                  <div className="font-semibold text-space">{current.author}</div>
                  <div className="text-sm text-space/55">{current.role}</div>
                </div>
              </div>
              <p className="text-lg leading-8 text-space/75">“{current.quote}”</p>
              <div className="mt-8 flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.author}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-10 bg-blue' : 'w-2.5 bg-slate'}`}
                    aria-label={`Lihat testimoni ${testimonial.author}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.author}-${index}`}
                  className={`rounded-[1.5rem] border p-5 transition duration-300 ${
                    index === 1 ? 'border-blue/20 bg-space text-white shadow-glow' : 'border-space/10 bg-white text-space'
                  }`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.24em]">Preview</div>
                  <div className="mt-3 text-sm leading-7 opacity-85">{testimonial.quote}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SecondaryButton href="#contact">Lihat Testimoni Lainnya</SecondaryButton>
        </div>
      </div>
    </section>
  );
}