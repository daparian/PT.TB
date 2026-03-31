import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  id: {
    translation: {
      nav: {
        home: 'Beranda',
        about: 'Tentang Kami',
        services: 'Layanan',
        products: 'Produk',
        portfolio: 'Portfolio',
        news: 'Berita',
        contact: 'Kontak',
        quote: 'Minta Penawaran'
      },
      home: {
        subtitle: 'Solusi B2B Terintegrasi',
        title1: 'Solusi Terpercaya untuk',
        title2: 'Jasa & Pengadaan',
        title3: 'Barang',
        desc: 'Membantu bisnis Anda tumbuh lebih efisien dengan layanan outsourcing profesional dan pengadaan barang berkualitas tinggi yang disesuaikan dengan kebutuhan industri Anda.',
        quoteBtn: 'Minta Penawaran',
        servicesBtn: 'Lihat Layanan',
        experience: 'Tahun Pengalaman',
        introTitle: 'Membangun Efisiensi Bisnis Melalui Kemitraan Strategis',
        introDesc: 'PT. TEKNOTAMA BARU hadir sebagai mitra strategis bagi perusahaan yang menginginkan fokus pada core business mereka. Kami menangani segala kebutuhan pendukung operasional, mulai dari pengelolaan fasilitas hingga penyediaan infrastruktur fisik.',
        introList1: 'Standar kualitas internasional',
        introList2: 'Tim profesional dan terlatih',
        introList3: 'Rantai pasok yang handal',
        introList4: 'Layanan purna jual terjamin',
        learnMore: 'Pelajari Lebih Lanjut',
        servicesTitle: 'Layanan Unggulan Kami',
        servicesDesc: 'Kami menyediakan solusi komprehensif yang dibagi menjadi dua pilar utama: Solusi Layanan (Service Solutions) dan Pengadaan Barang (Procurement).',
        serviceDetail: 'Detail Layanan',
        whyUsTitle: 'Mengapa Memilih PT. TEKNOTAMA BARU?',
        whyUs1Title: 'Terpercaya',
        whyUs1Desc: 'Memiliki rekam jejak yang solid dengan berbagai klien korporasi.',
        whyUs2Title: 'Cepat & Tepat',
        whyUs2Desc: 'Proses pengadaan dan layanan yang efisien untuk menghemat waktu Anda.',
        whyUs3Title: 'Profesional',
        whyUs3Desc: 'Didukung oleh tenaga ahli yang berpengalaman di bidangnya.',
        whyUs4Title: 'Kualitas Terbaik',
        whyUs4Desc: 'Hanya menyediakan produk dan layanan dengan standar tertinggi.',
        ctaTitle: 'Siap Mengoptimalkan Bisnis Anda?',
        ctaDesc: 'Hubungi tim konsultan kami untuk mendiskusikan kebutuhan spesifik perusahaan Anda dan dapatkan penawaran harga yang kompetitif.',
        ctaBtn: 'Hubungi Kami Sekarang',
        partners: 'Telah Dipercaya Oleh Berbagai Perusahaan'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        products: 'Products',
        portfolio: 'Portfolio',
        news: 'News',
        contact: 'Contact',
        quote: 'Get a Quote'
      },
      home: {
        subtitle: 'Integrated B2B Solutions',
        title1: 'Trusted Solutions for',
        title2: 'Services & Procurement',
        title3: '',
        desc: 'Helping your business grow more efficiently with professional outsourcing services and high-quality procurement tailored to your industry needs.',
        quoteBtn: 'Get a Quote',
        servicesBtn: 'View Services',
        experience: 'Years Experience',
        introTitle: 'Building Business Efficiency Through Strategic Partnerships',
        introDesc: 'PT. TEKNOTAMA BARU is here as a strategic partner for companies that want to focus on their core business. We handle all operational support needs, from facility management to physical infrastructure provision.',
        introList1: 'International quality standards',
        introList2: 'Professional and trained team',
        introList3: 'Reliable supply chain',
        introList4: 'Guaranteed after-sales service',
        learnMore: 'Learn More',
        servicesTitle: 'Our Featured Services',
        servicesDesc: 'We provide comprehensive solutions divided into two main pillars: Service Solutions and Procurement.',
        serviceDetail: 'Service Details',
        whyUsTitle: 'Why Choose PT. TEKNOTAMA BARU?',
        whyUs1Title: 'Trusted',
        whyUs1Desc: 'Has a solid track record with various corporate clients.',
        whyUs2Title: 'Fast & Accurate',
        whyUs2Desc: 'Efficient procurement and service processes to save your time.',
        whyUs3Title: 'Professional',
        whyUs3Desc: 'Supported by experienced experts in their fields.',
        whyUs4Title: 'Best Quality',
        whyUs4Desc: 'Only providing products and services with the highest standards.',
        ctaTitle: 'Ready to Optimize Your Business?',
        ctaDesc: 'Contact our consulting team to discuss your company\'s specific needs and get a competitive price quote.',
        ctaBtn: 'Contact Us Now',
        partners: 'Trusted By Various Companies'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'id', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
