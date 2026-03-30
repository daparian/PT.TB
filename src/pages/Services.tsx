import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceSolutions = SERVICES.filter(s => s.category === 'Solution');
  const procurementServices = SERVICES.filter(s => s.category === 'Procurement');

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Layanan Kami
          </motion.h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Solusi komprehensif untuk mendukung pertumbuhan dan efisiensi operasional bisnis Anda melalui layanan jasa profesional dan pengadaan barang berkualitas.
          </p>
        </div>
      </section>

      {/* Service Solutions */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Kategori 01</span>
            <h2 className="text-3xl font-bold text-slate-900">Solusi Layanan (Service Solutions)</h2>
            <div className="w-20 h-1.5 bg-primary mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceSolutions.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 bg-slate-50 p-8 rounded-3xl border border-slate-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    <p className="font-bold text-sm uppercase tracking-wider text-slate-400">Lingkup Pekerjaan:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {['Tenaga Terlatih', 'SOP Standar', 'Peralatan Modern', 'Monitoring Berkala'].map(item => (
                        <li key={item} className="flex items-center space-x-2 text-sm text-slate-600">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Services */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container-custom">
          <div className="mb-16 text-right flex flex-col items-end">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Kategori 02</span>
            <h2 className="text-3xl font-bold">Pengadaan Barang (Procurement)</h2>
            <div className="w-20 h-1.5 bg-accent mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {procurementServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group"
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {['Produk Original', 'Garansi Resmi', 'Pengiriman Cepat'].map(item => (
                    <li key={item} className="flex items-center space-x-2 text-xs text-white/80">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-accent font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                  Minta Katalog <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Butuh Solusi Kustom untuk Perusahaan Anda?</h2>
          <p className="text-slate-600 mb-10">
            Kami memahami bahwa setiap bisnis memiliki kebutuhan yang berbeda. Tim kami siap mendiskusikan solusi yang paling tepat untuk tantangan operasional Anda.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl">
            Konsultasi Gratis Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};
