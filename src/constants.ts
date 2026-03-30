export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Solution' | 'Procurement';
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  image: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/about' },
  { label: 'Layanan', path: '/services' },
  { label: 'Produk', path: '/products' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Berita', path: '/news' },
  { label: 'Kontak', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'outsourcing',
    title: 'Outsourcing',
    description: 'Layanan kebersihan, keamanan, dan tenaga kerja profesional untuk mendukung operasional bisnis Anda.',
    icon: 'Users',
    category: 'Solution',
  },
  {
    id: 'maintenance',
    title: 'Technical & Maintenance',
    description: 'Pemeliharaan teknis gedung dan peralatan industri secara berkala dan profesional.',
    icon: 'Settings',
    category: 'Solution',
  },
  {
    id: 'office-supplies',
    title: 'Office Equipment',
    description: 'Pengadaan perlengkapan kantor berkualitas tinggi untuk efisiensi kerja tim Anda.',
    icon: 'Briefcase',
    category: 'Procurement',
  },
  {
    id: 'it-electronics',
    title: 'IT & Electronics',
    description: 'Solusi perangkat keras IT dan elektronik terbaru untuk kebutuhan infrastruktur digital.',
    icon: 'Monitor',
    category: 'Procurement',
  },
  {
    id: 'industrial-supplies',
    title: 'Industrial Supplies',
    description: 'Penyediaan suku cadang dan peralatan industri berat dengan standar internasional.',
    icon: 'Truck',
    category: 'Procurement',
  },
];
