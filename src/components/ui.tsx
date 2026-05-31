import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

export function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}

export function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  color = 'space',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  color?: 'white' | 'space';
}) {
  const titleClass = color === 'white' ? 'text-white' : 'text-space';
  const descClass = color === 'white' ? 'text-white/70' : 'text-space/70';

  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-space/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-space/60 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className={`font-display text-3xl font-bold tracking-tight ${titleClass} sm:text-4xl md:text-5xl`}>{title}</h2>
      {description ? <p className={`mt-5 text-base leading-8 ${descClass} sm:text-lg`}>{description}</p> : null}
    </div>
  );
}

export function PrimaryButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-space px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-space/15 transition duration-300 hover:-translate-y-0.5 hover:bg-blue"
    >
      {children}
      <span className="transition duration-300 group-hover:translate-x-0.5">
        <IconArrow />
      </span>
    </a>
  );
}

export function SecondaryButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-space/10 bg-white/80 px-6 py-3.5 text-sm font-semibold text-space shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-blue/30 hover:text-blue"
    >
      {children}
    </a>
  );
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`${className} transition-all duration-700 ease-out will-change-transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {children}
    </div>
  );
}