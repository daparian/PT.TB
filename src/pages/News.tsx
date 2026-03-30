import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NEWS = [
  {
    id: 1,
    title: 'PT. TEKNOTAMA BARU Memperluas Jangkauan Layanan ke Indonesia Timur',
    excerpt: 'Langkah strategis perusahaan dalam mendukung pertumbuhan industri di wilayah timur Indonesia dengan membuka kantor cabang baru.',
    date: '15 Maret 2026',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'Tren Pengadaan Barang Digital di Era Transformasi Industri 4.0',
    excerpt: 'Bagaimana efisiensi pengadaan barang melalui platform digital dapat membantu perusahaan menghemat biaya operasional hingga 20%.',
    date: '10 Maret 2026',
    author: 'Tim Riset',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: 'Pentingnya Pemeliharaan Teknis Berkala untuk Fasilitas Gedung',
    excerpt: 'Menjaga nilai aset dan kenyamanan operasional melalui manajemen pemeliharaan fasilitas yang terencana dan profesional.',
    date: '05 Maret 2026',
    author: 'Technical Team',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600'
  }
];

export const News: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Berita & Artikel</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Dapatkan informasi terbaru mengenai perkembangan perusahaan, tren industri, dan wawasan bisnis dari para ahli kami.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {NEWS.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden rounded-2xl mb-6 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Update
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-slate-400 font-medium">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{item.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <button className="text-primary font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-900">
        <div className="container-custom">
          <div className="bg-primary p-12 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Berlangganan Newsletter</h2>
              <p className="text-white/70">Dapatkan update terbaru dan penawaran eksklusif langsung di email Anda setiap bulan.</p>
            </div>
            <form className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Email bisnis Anda"
                className="flex-grow px-6 py-4 rounded-full bg-white text-slate-900 focus:outline-none"
              />
              <button className="bg-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                Daftar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
