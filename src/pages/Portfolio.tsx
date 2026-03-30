import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Calendar } from 'lucide-react';

const PROJECTS = [
  { id: 1, title: 'Pengadaan Infrastruktur IT Gedung Perkantoran', client: 'PT. Maju Bersama', year: '2025', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Layanan Outsourcing Kebersihan & Keamanan', client: 'Apartemen Green View', year: '2024', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Pemeliharaan Teknis Fasilitas Industri', client: 'Pabrik Tekstil Sentosa', year: '2024', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Penyediaan Alat Kantor & Furniture', client: 'Bank Nasional Indonesia', year: '2023', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600' },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio Proyek</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Rekam jejak kesuksesan kami dalam menangani berbagai proyek pengadaan dan layanan jasa untuk klien-klien ternama.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-2 text-accent text-xs font-bold uppercase tracking-widest mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-6">Klien: {project.client}</p>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 transition-all">
                    <span>Lihat Detail</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Again (Consistent with Home) */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-center text-2xl font-bold mb-12">Klien & Mitra Kami</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-12 bg-slate-300 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
