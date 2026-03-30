import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
            alt="Corporate Building"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Tentang Kami
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mengenal lebih dekat PT. TEKNOTAMA BARU, visi, misi, dan perjalanan kami dalam memberikan layanan terbaik bagi industri di Indonesia.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-primary pl-4">Profil Perusahaan</h2>
              <p className="text-slate-600 leading-relaxed">
                Didirikan dengan semangat untuk memberikan solusi operasional yang efisien, PT. TEKNOTAMA BARU telah berkembang menjadi salah satu penyedia jasa dan pengadaan barang terkemuka di Indonesia. Kami memahami bahwa setiap bisnis memiliki tantangan unik, itulah sebabnya kami menawarkan pendekatan yang dipersonalisasi untuk setiap klien kami.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Fokus utama kami adalah pada kualitas, integritas, dan inovasi. Dengan jaringan pemasok yang luas dan tim profesional yang berdedikasi, kami memastikan bahwa setiap proyek yang kami tangani diselesaikan dengan standar keunggulan tertinggi.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400"
                alt="Office Life"
                className="rounded-xl shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400"
                alt="Meeting"
                className="rounded-xl shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Visi Kami</h3>
              <p className="text-slate-600 leading-relaxed">
                Menjadi mitra bisnis terdepan dan terpercaya di Indonesia dalam menyediakan solusi layanan jasa dan pengadaan barang yang inovatif, berkualitas, dan berkelanjutan.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Misi Kami</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span>Memberikan layanan jasa outsourcing dan pemeliharaan teknis yang profesional dan terstandarisasi.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span>Menyediakan produk pengadaan barang berkualitas tinggi dengan harga yang kompetitif.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span>Membangun hubungan kemitraan jangka panjang yang saling menguntungkan dengan seluruh pemangku kepentingan.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Values */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Perusahaan</h2>
            <p className="text-slate-600">Prinsip yang membimbing kami dalam setiap tindakan dan keputusan.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: History, title: 'Integritas', desc: 'Kejujuran dan transparansi dalam setiap transaksi bisnis.' },
              { icon: Award, title: 'Kualitas', desc: 'Berkomitmen pada standar tertinggi dalam produk dan layanan.' },
              { icon: Target, title: 'Inovasi', desc: 'Terus mencari cara baru untuk memberikan nilai lebih bagi klien.' },
              { icon: Eye, title: 'Fokus Klien', desc: 'Menempatkan kebutuhan klien sebagai prioritas utama kami.' },
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg">{value.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
