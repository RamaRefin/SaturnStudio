export type Service = {
  title: string;
  description: string;
};

export type Feature = {
  title: string;
};

export type PortfolioItem = {
  title: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  highlight: boolean;
  items: string[];
};

export const contactDetails = {
  whatsapp: '6281234567890',
  email: 'hello@saturnstudio.dev',
  instagram: '@saturnstudio',
  location: 'Remote-first, melayani seluruh Indonesia',
};

export const services: Service[] = [
  { title: 'Website Company Profile', description: 'Website profesional untuk meningkatkan kredibilitas bisnis.' },
  { title: 'Landing Page Produk', description: 'Fokus meningkatkan konversi dan penjualan.' },
  { title: 'Website UMKM', description: 'Membantu UMKM tampil profesional secara online.' },
  { title: 'Website Personal Branding', description: 'Bangun citra profesional melalui website pribadi.' },
  { title: 'Website Portofolio', description: 'Tampilkan karya dan pengalaman secara elegan.' },
  { title: 'Maintenance Website', description: 'Perawatan dan pembaruan website secara berkala.' },
];

export const features: Feature[] = [
  { title: 'Desain Modern dan Premium' },
  { title: 'Website Responsif di Semua Perangkat' },
  { title: 'Loading Cepat dan SEO Friendly' },
  { title: 'Harga Transparan' },
  { title: 'Konsultasi Gratis' },
  { title: 'Support Setelah Website Selesai' },
];

export const portfolio: PortfolioItem[] = [
  { title: 'Website UMKM Kuliner', label: 'Conversion-focused' },
  { title: 'Website Travel Agency', label: 'Premium booking flow' },
  { title: 'Website Personal Branding', label: 'Executive presence' },
  { title: 'Website Fashion Store', label: 'Elegant product story' },
  { title: 'Website Company Profile', label: 'Trust building' },
  { title: 'Website Interior Design', label: 'Visual showcase' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Website yang dibuat sangat profesional dan meningkatkan kepercayaan pelanggan kami.',
    author: 'Klien UMKM',
    role: 'Owner bisnis kuliner',
  },
  {
    quote: 'Proses pengerjaan cepat dan komunikasinya sangat baik.',
    author: 'Founder Startup',
    role: 'Digital product team',
  },
  {
    quote: 'Hasil website melebihi ekspektasi dan tampil sangat premium.',
    author: 'Personal Brand',
    role: 'Konsultan profesional',
  },
  {
    quote: 'Pelayanan ramah dan support setelah project selesai sangat membantu.',
    author: 'Perusahaan Jasa',
    role: 'Operations lead',
  },
];

export const processSteps = ['Konsultasi', 'Perencanaan', 'Desain', 'Development', 'Review', 'Launching'];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Landing Page',
    price: 'Rp499.000',
    highlight: false,
    items: [],
  },
  {
    name: 'Company Profile',
    price: 'Rp1.499.000',
    highlight: true,
    items: [],
  },
  {
    name: 'E-Commerce Website',
    price: 'Rp2.899.000',
    highlight: false,
    items: [],
  },
];