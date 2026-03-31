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
      },
      about: {
        title: 'Tentang Kami',
        subtitle: 'Mengenal lebih dekat PT. TEKNOTAMA BARU, visi, misi, dan perjalanan kami dalam memberikan layanan terbaik bagi industri di Indonesia.',
        profileTitle: 'Profil Perusahaan',
        profileDesc1: 'Didirikan dengan semangat untuk memberikan solusi operasional yang efisien, PT. TEKNOTAMA BARU telah berkembang menjadi salah satu penyedia jasa dan pengadaan barang terkemuka di Indonesia. Kami memahami bahwa setiap bisnis memiliki tantangan unik, itulah sebabnya kami menawarkan pendekatan yang dipersonalisasi untuk setiap klien kami.',
        profileDesc2: 'Fokus utama kami adalah pada kualitas, integritas, dan inovasi. Dengan jaringan pemasok yang luas dan tim profesional yang berdedikasi, kami memastikan bahwa setiap proyek yang kami tangani diselesaikan dengan standar keunggulan tertinggi.',
        visionTitle: 'Visi Kami',
        visionDesc: 'Menjadi mitra bisnis terdepan dan terpercaya di Indonesia dalam menyediakan solusi layanan jasa dan pengadaan barang yang inovatif, berkualitas, dan berkelanjutan.',
        missionTitle: 'Misi Kami',
        mission1: 'Memberikan layanan jasa outsourcing dan pemeliharaan teknis yang profesional dan terstandarisasi.',
        mission2: 'Menyediakan produk pengadaan barang berkualitas tinggi dengan harga yang kompetitif.',
        mission3: 'Membangun hubungan kemitraan jangka panjang yang saling menguntungkan dengan seluruh pemangku kepentingan.',
        valuesTitle: 'Nilai-Nilai Perusahaan',
        valuesSubtitle: 'Prinsip yang membimbing kami dalam setiap tindakan dan keputusan.',
        value1Title: 'Integritas',
        value1Desc: 'Kejujuran dan transparansi dalam setiap transaksi bisnis.',
        value2Title: 'Kualitas',
        value2Desc: 'Berkomitmen pada standar tertinggi dalam produk dan layanan.',
        value3Title: 'Inovasi',
        value3Desc: 'Terus mencari cara baru untuk memberikan nilai lebih bagi klien.',
        value4Title: 'Fokus Klien',
        value4Desc: 'Menempatkan kebutuhan klien sebagai prioritas utama kami.'
      },
      services: {
        title: 'Layanan Kami',
        subtitle: 'Solusi komprehensif untuk mendukung pertumbuhan dan efisiensi operasional bisnis Anda melalui layanan jasa profesional dan pengadaan barang berkualitas.',
        cat1: 'Kategori 01',
        cat1Title: 'Solusi Layanan (Service Solutions)',
        scope: 'Lingkup Pekerjaan:',
        scope1: 'Tenaga Terlatih',
        scope2: 'SOP Standar',
        scope3: 'Peralatan Modern',
        scope4: 'Monitoring Berkala',
        cat2: 'Kategori 02',
        cat2Title: 'Pengadaan Barang (Procurement)',
        proc1: 'Produk Original',
        proc2: 'Garansi Resmi',
        proc3: 'Pengiriman Cepat',
        reqCatalog: 'Minta Katalog',
        ctaTitle: 'Butuh Solusi Kustom untuk Perusahaan Anda?',
        ctaDesc: 'Kami memahami bahwa setiap bisnis memiliki kebutuhan yang berbeda. Tim kami siap mendiskusikan solusi yang paling tepat untuk tantangan operasional Anda.',
        ctaBtn: 'Konsultasi Gratis Sekarang',
        items: {
          'outsourcing': {
            title: 'Outsourcing',
            description: 'Layanan kebersihan, keamanan, dan tenaga kerja profesional untuk mendukung operasional bisnis Anda.'
          },
          'maintenance': {
            title: 'Technical & Maintenance',
            description: 'Pemeliharaan teknis gedung dan peralatan industri secara berkala dan profesional.'
          },
          'office-supplies': {
            title: 'Office Equipment',
            description: 'Pengadaan perlengkapan kantor berkualitas tinggi untuk efisiensi kerja tim Anda.'
          },
          'it-electronics': {
            title: 'IT & Electronics',
            description: 'Solusi perangkat keras IT dan elektronik terbaru untuk kebutuhan infrastruktur digital.'
          },
          'industrial-supplies': {
            title: 'Industrial Supplies',
            description: 'Penyediaan suku cadang dan peralatan industri berat dengan standar internasional.'
          }
        }
      },
      products: {
        title: 'Katalog Produk',
        subtitle: 'Temukan berbagai kebutuhan pengadaan barang berkualitas untuk perusahaan Anda.',
        search: 'Cari produk...',
        category: 'Kategori',
        all: 'Semua',
        specialOffer: 'Butuh Penawaran Khusus?',
        specialOfferDesc: 'Dapatkan harga grosir untuk pengadaan dalam jumlah besar.',
        contactSales: 'Hubungi Sales',
        requestQuote: 'Minta Penawaran',
        notFound: 'Tidak ada produk yang ditemukan.',
        categories: {
          'Semua': 'Semua',
          'Office': 'Kantor',
          'IT & Electronics': 'IT & Elektronik',
          'Industrial': 'Industri',
          'Safety': 'Keselamatan'
        },
        items: {
          1: { name: 'Kursi Kantor Ergonomis' },
          2: { name: 'Laptop Pro High-End' },
          3: { name: 'Mesin Bor Industri' },
          4: { name: 'Set Helm Keselamatan' },
          5: { name: 'Proyektor Pintar 4K' },
          6: { name: 'Meja Eksekutif Kayu' }
        }
      },
      portfolio: {
        title: 'Portfolio Proyek',
        subtitle: 'Rekam jejak kesuksesan kami dalam menangani berbagai proyek pengadaan dan layanan jasa untuk klien-klien ternama.',
        client: 'Klien:',
        viewDetail: 'Lihat Detail',
        partnersTitle: 'Klien & Mitra Kami',
        items: {
          1: { title: 'Pengadaan Infrastruktur IT Gedung Perkantoran', client: 'PT. Maju Bersama' },
          2: { title: 'Layanan Outsourcing Kebersihan & Keamanan', client: 'Apartemen Green View' },
          3: { title: 'Pemeliharaan Teknis Fasilitas Industri', client: 'Pabrik Tekstil Sentosa' },
          4: { title: 'Penyediaan Alat Kantor & Furniture', client: 'Bank Nasional Indonesia' }
        }
      },
      news: {
        title: 'Berita & Artikel',
        subtitle: 'Dapatkan informasi terbaru mengenai perkembangan perusahaan, tren industri, dan wawasan bisnis dari para ahli kami.',
        update: 'Update',
        readMore: 'Baca Selengkapnya',
        newsletterTitle: 'Berlangganan Newsletter',
        newsletterDesc: 'Dapatkan update terbaru dan penawaran eksklusif langsung di email Anda setiap bulan.',
        emailPlaceholder: 'Email bisnis Anda',
        subscribe: 'Daftar',
        items: {
          1: {
            title: 'PT. TEKNOTAMA BARU Memperluas Jangkauan Layanan ke Indonesia Timur',
            excerpt: 'Langkah strategis perusahaan dalam mendukung pertumbuhan industri di wilayah timur Indonesia dengan membuka kantor cabang baru.',
            date: '15 Maret 2026',
            author: 'Admin'
          },
          2: {
            title: 'Tren Pengadaan Barang Digital di Era Transformasi Industri 4.0',
            excerpt: 'Bagaimana efisiensi pengadaan barang melalui platform digital dapat membantu perusahaan menghemat biaya operasional hingga 20%.',
            date: '10 Maret 2026',
            author: 'Tim Riset'
          },
          3: {
            title: 'Pentingnya Pemeliharaan Teknis Berkala untuk Fasilitas Gedung',
            excerpt: 'Menjaga nilai aset dan kenyamanan operasional melalui manajemen pemeliharaan fasilitas yang terencana dan profesional.',
            date: '05 Maret 2026',
            author: 'Tim Teknis'
          }
        }
      },
      contact: {
        title: 'Hubungi Kami',
        subtitle: 'Punya pertanyaan atau butuh penawaran harga? Tim kami siap membantu Anda memberikan solusi terbaik untuk kebutuhan bisnis Anda.',
        infoTitle: 'Informasi Kontak',
        addressTitle: 'Alamat Kantor',
        phoneTitle: 'Telepon & WhatsApp',
        emailTitle: 'Email',
        hoursTitle: 'Jam Operasional',
        hours1: 'Senin - Jumat: 08:00 - 17:00',
        hours2: 'Sabtu - Minggu / Tanggal Merah : Libur',
        quickResponseTitle: 'Butuh Respon Cepat?',
        quickResponseDesc: 'Chat langsung dengan tim sales kami melalui WhatsApp untuk konsultasi instan.',
        whatsappBtn: 'Chat WhatsApp',
        formTitle: 'Kirim Pesan',
        formDesc: 'Lengkapi formulir di bawah ini untuk permintaan penawaran harga (RFQ) atau pertanyaan lainnya.',
        nameLabel: 'Nama Lengkap',
        namePlaceholder: 'Masukkan nama Anda',
        companyLabel: 'Nama Perusahaan',
        companyPlaceholder: 'Masukkan nama perusahaan',
        emailLabel: 'Email Bisnis',
        emailFormPlaceholder: 'nama@perusahaan.com',
        phoneLabel: 'Nomor Telepon',
        phonePlaceholder: 'Contoh: 08123456789',
        serviceLabel: 'Layanan / Produk yang Dibutuhkan',
        selectService: 'Pilih Layanan',
        messageLabel: 'Pesan / Detail Kebutuhan',
        messagePlaceholder: 'Jelaskan kebutuhan spesifik Anda...',
        submitBtn: 'Kirim Permintaan',
        mapOverlayTitle: 'PT. TEKNOTAMA BARU',
        mapOverlayDesc: 'Kota Medan, Indonesia'
      },
      footer: {
        desc: 'Solusi terpercaya untuk layanan jasa dan pengadaan barang berkualitas tinggi di Indonesia. Kami berkomitmen untuk memberikan efisiensi dan nilai tambah bagi setiap mitra bisnis kami.',
        quickLinks: 'Tautan Cepat',
        services: 'Layanan Kami',
        s1: 'Outsourcing Tenaga Kerja',
        s2: 'Pemeliharaan Teknis',
        s3: 'Pengadaan Alat Kantor',
        s4: 'Solusi IT & Elektronik',
        s5: 'Peralatan Industri',
        contact: 'Hubungi Kami',
        copyright: '© 2026 PT. TEKNOTAMA BARU. Seluruh Hak Cipta Dilindungi.',
        privacy: 'Kebijakan Privasi',
        terms: 'Syarat & Ketentuan'
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
      },
      about: {
        title: 'About Us',
        subtitle: 'Get to know PT. TEKNOTAMA BARU, our vision, mission, and journey in providing the best services for industries in Indonesia.',
        profileTitle: 'Company Profile',
        profileDesc1: 'Founded with a passion for providing efficient operational solutions, PT. TEKNOTAMA BARU has grown into one of the leading service and procurement providers in Indonesia. We understand that every business has unique challenges, which is why we offer a personalized approach for each of our clients.',
        profileDesc2: 'Our main focus is on quality, integrity, and innovation. With an extensive supplier network and a dedicated professional team, we ensure that every project we handle is completed to the highest standards of excellence.',
        visionTitle: 'Our Vision',
        visionDesc: 'To become the leading and trusted business partner in Indonesia in providing innovative, quality, and sustainable service and procurement solutions.',
        missionTitle: 'Our Mission',
        mission1: 'Providing professional and standardized outsourcing and technical maintenance services.',
        mission2: 'Providing high-quality procurement products at competitive prices.',
        mission3: 'Building mutually beneficial long-term partnerships with all stakeholders.',
        valuesTitle: 'Company Values',
        valuesSubtitle: 'The principles that guide us in every action and decision.',
        value1Title: 'Integrity',
        value1Desc: 'Honesty and transparency in every business transaction.',
        value2Title: 'Quality',
        value2Desc: 'Committed to the highest standards in products and services.',
        value3Title: 'Innovation',
        value3Desc: 'Constantly looking for new ways to provide more value to clients.',
        value4Title: 'Client Focus',
        value4Desc: 'Putting our clients\' needs as our top priority.'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions to support the growth and operational efficiency of your business through professional services and quality procurement.',
        cat1: 'Category 01',
        cat1Title: 'Service Solutions',
        scope: 'Scope of Work:',
        scope1: 'Trained Personnel',
        scope2: 'Standard SOP',
        scope3: 'Modern Equipment',
        scope4: 'Regular Monitoring',
        cat2: 'Category 02',
        cat2Title: 'Procurement',
        proc1: 'Original Products',
        proc2: 'Official Warranty',
        proc3: 'Fast Delivery',
        reqCatalog: 'Request Catalog',
        ctaTitle: 'Need a Custom Solution for Your Company?',
        ctaDesc: 'We understand that every business has different needs. Our team is ready to discuss the most appropriate solution for your operational challenges.',
        ctaBtn: 'Free Consultation Now',
        items: {
          'outsourcing': {
            title: 'Outsourcing',
            description: 'Professional cleaning, security, and labor services to support your business operations.'
          },
          'maintenance': {
            title: 'Technical & Maintenance',
            description: 'Regular and professional technical maintenance of buildings and industrial equipment.'
          },
          'office-supplies': {
            title: 'Office Equipment',
            description: 'Procurement of high-quality office supplies for your team\'s work efficiency.'
          },
          'it-electronics': {
            title: 'IT & Electronics',
            description: 'Latest IT hardware and electronic solutions for digital infrastructure needs.'
          },
          'industrial-supplies': {
            title: 'Industrial Supplies',
            description: 'Provision of spare parts and heavy industrial equipment with international standards.'
          }
        }
      },
      products: {
        title: 'Product Catalog',
        subtitle: 'Find various quality procurement needs for your company.',
        search: 'Search products...',
        category: 'Category',
        all: 'All',
        specialOffer: 'Need a Special Offer?',
        specialOfferDesc: 'Get wholesale prices for large quantity procurement.',
        contactSales: 'Contact Sales',
        requestQuote: 'Request Quote',
        notFound: 'No products found.',
        categories: {
          'Semua': 'All',
          'Office': 'Office',
          'IT & Electronics': 'IT & Electronics',
          'Industrial': 'Industrial',
          'Safety': 'Safety'
        },
        items: {
          1: { name: 'Ergonomic Office Chair' },
          2: { name: 'High-End Laptop Pro' },
          3: { name: 'Industrial Drill Machine' },
          4: { name: 'Safety Helmet Set' },
          5: { name: 'Smart Projector 4K' },
          6: { name: 'Executive Desk Wood' }
        }
      },
      portfolio: {
        title: 'Project Portfolio',
        subtitle: 'Our track record of success in handling various procurement and service projects for renowned clients.',
        client: 'Client:',
        viewDetail: 'View Details',
        partnersTitle: 'Our Clients & Partners',
        items: {
          1: { title: 'Office Building IT Infrastructure Procurement', client: 'PT. Maju Bersama' },
          2: { title: 'Cleaning & Security Outsourcing Services', client: 'Green View Apartment' },
          3: { title: 'Industrial Facility Technical Maintenance', client: 'Sentosa Textile Factory' },
          4: { title: 'Office Equipment & Furniture Provision', client: 'Bank Nasional Indonesia' }
        }
      },
      news: {
        title: 'News & Articles',
        subtitle: 'Get the latest information on company developments, industry trends, and business insights from our experts.',
        update: 'Update',
        readMore: 'Read More',
        newsletterTitle: 'Subscribe to Newsletter',
        newsletterDesc: 'Get the latest updates and exclusive offers directly to your email every month.',
        emailPlaceholder: 'Your business email',
        subscribe: 'Subscribe',
        items: {
          1: {
            title: 'PT. TEKNOTAMA BARU Expands Service Reach to Eastern Indonesia',
            excerpt: 'The company\'s strategic step in supporting industrial growth in eastern Indonesia by opening a new branch office.',
            date: 'March 15, 2026',
            author: 'Admin'
          },
          2: {
            title: 'Digital Procurement Trends in the Industry 4.0 Transformation Era',
            excerpt: 'How procurement efficiency through digital platforms can help companies save operational costs by up to 20%.',
            date: 'March 10, 2026',
            author: 'Research Team'
          },
          3: {
            title: 'The Importance of Regular Technical Maintenance for Building Facilities',
            excerpt: 'Maintaining asset value and operational comfort through planned and professional facility maintenance management.',
            date: 'March 05, 2026',
            author: 'Technical Team'
          }
        }
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Have a question or need a quote? Our team is ready to help you provide the best solution for your business needs.',
        infoTitle: 'Contact Information',
        addressTitle: 'Office Address',
        phoneTitle: 'Phone & WhatsApp',
        emailTitle: 'Email',
        hoursTitle: 'Operational Hours',
        hours1: 'Monday - Friday: 08:00 - 17:00',
        hours2: 'Saturday - Sunday / Public Holidays: Closed',
        quickResponseTitle: 'Need a Quick Response?',
        quickResponseDesc: 'Chat directly with our sales team via WhatsApp for instant consultation.',
        whatsappBtn: 'WhatsApp Chat',
        formTitle: 'Send a Message',
        formDesc: 'Complete the form below for a Request for Quotation (RFQ) or other inquiries.',
        nameLabel: 'Full Name',
        namePlaceholder: 'Enter your name',
        companyLabel: 'Company Name',
        companyPlaceholder: 'Enter company name',
        emailLabel: 'Business Email',
        emailFormPlaceholder: 'name@company.com',
        phoneLabel: 'Phone Number',
        phonePlaceholder: 'Example: 08123456789',
        serviceLabel: 'Required Service / Product',
        selectService: 'Select Service',
        messageLabel: 'Message / Requirement Details',
        messagePlaceholder: 'Explain your specific needs...',
        submitBtn: 'Send Request',
        mapOverlayTitle: 'PT. TEKNOTAMA BARU',
        mapOverlayDesc: 'Medan City, Indonesia'
      },
      footer: {
        desc: 'Trusted solutions for high-quality services and procurement in Indonesia. We are committed to providing efficiency and added value to every business partner.',
        quickLinks: 'Quick Links',
        services: 'Our Services',
        s1: 'Labor Outsourcing',
        s2: 'Technical Maintenance',
        s3: 'Office Equipment Procurement',
        s4: 'IT & Electronic Solutions',
        s5: 'Industrial Equipment',
        contact: 'Contact Us',
        copyright: '© 2026 PT. TEKNOTAMA BARU. All Rights Reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions'
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
