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
  slug: string;
  name: string;
  price: string;
  highlight: boolean;
  items: string[];
  summary: string;
  description: string;
  idealFor: string;
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
    slug: '/pricing/landing-page',
    name: 'Landing Page',
    price: 'Rp499.000',
    highlight: false,
    summary: 'Halaman fokus konversi untuk kampanye, produk, atau promosi singkat.',
    description:
      'Paket landing page cocok untuk bisnis yang ingin satu halaman ringkas dengan alur yang jelas, visual yang kuat, dan ajakan aksi yang langsung mengarah ke kontak atau order.',
    idealFor: 'Cocok untuk promo produk tunggal, event, webinar, dan lead generation.',
    items: [],
  },
  {
    slug: '/pricing/company-profile',
    name: 'Company Profile',
    price: 'Rp1.499.000',
    highlight: true,
    summary: 'Website profesional untuk membangun kredibilitas dan kepercayaan bisnis.',
    description:
      'Paket company profile menampilkan identitas bisnis secara lengkap, mulai dari profil, layanan, portofolio, hingga jalur kontak yang rapi dan mudah diakses.',
    idealFor: 'Cocok untuk perusahaan jasa, agensi, studio, dan brand yang ingin tampil premium.',
    items: [],
  },
  {
    slug: '/pricing/e-commerce-website',
    name: 'E-Commerce Website',
    price: 'Rp2.899.000',
    highlight: false,
    summary: 'Toko online untuk menampilkan katalog, produk, dan proses pemesanan.',
    description:
      'Paket e-commerce dibuat untuk bisnis yang ingin menjual produk secara langsung melalui website dengan katalog yang jelas dan pengalaman belanja yang mudah.',
    idealFor: 'Cocok untuk brand fashion, makanan, aksesoris, dan toko online kecil sampai menengah.',
    items: [],
  },
  {
    slug: '/pricing/game-2d-basic',
    name: 'Game 2D Basic',
    price: 'Rp5.999.000',
    highlight: false,
    summary: 'Paket awal untuk game 2D sederhana dengan mekanik inti yang solid.',
    description:
      'Paket basic cocok untuk prototype, pembelajaran, atau game kecil yang membutuhkan sistem permainan dasar, tampilan rapi, dan implementasi cepat.',
    idealFor: 'Cocok untuk ide awal game, prototype pitching, dan proyek edukasi.',
    items: [],
  },
  {
    slug: '/pricing/game-2d-standard',
    name: 'Game 2D Standard',
    price: 'Rp7.999.000',
    highlight: false,
    summary: 'Paket menengah dengan fitur lebih lengkap dan polish visual lebih baik.',
    description:
      'Paket standard menambahkan lebih banyak konten, variasi level, dan penyempurnaan tampilan agar game terasa lebih lengkap dan menarik untuk dimainkan.',
    idealFor: 'Cocok untuk game indie kecil yang butuh variasi level dan sistem progres.',
    items: [],
  },
  {
    slug: '/pricing/game-2d-expert',
    name: 'Game 2D Expert',
    price: 'Rp11.999.000',
    highlight: false,
    summary: 'Paket paling lengkap untuk game 2D dengan scope yang lebih serius.',
    description:
      'Paket expert ditujukan untuk proyek yang membutuhkan lebih banyak detail, konten, dan penyempurnaan gameplay agar siap dipresentasikan atau dikembangkan lebih lanjut.',
    idealFor: 'Cocok untuk game yang ingin ditingkatkan ke tahap presentasi, demo, atau produksi lanjutan.',
    items: [],
  },
];