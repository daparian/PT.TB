import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ShoppingCart } from 'lucide-react';

const CATEGORIES = ['Semua', 'Office', 'IT & Electronics', 'Industrial', 'Safety'];

const PRODUCTS = [
  { id: 1, name: 'Ergonomic Office Chair', category: 'Office', price: 'Rp 2.500.000', image: 'https://images.unsplash.com/photo-1505797149-43b0076649d6?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'High-End Laptop Pro', category: 'IT & Electronics', price: 'Rp 15.000.000', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Industrial Drill Machine', category: 'Industrial', price: 'Rp 4.200.000', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Safety Helmet Set', category: 'Safety', price: 'Rp 350.000', image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Smart Projector 4K', category: 'IT & Electronics', price: 'Rp 8.500.000', image: 'https://images.unsplash.com/photo-1535016120720-40c646bebbfc?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Executive Desk Wood', category: 'Office', price: 'Rp 5.750.000', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400' },
];

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'Semua' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Katalog Produk</h1>
              <p className="text-slate-500 mt-2">Temukan berbagai kebutuhan pengadaan barang berkualitas untuk perusahaan Anda.</p>
            </div>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 shrink-0 space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" /> Kategori
                </h3>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium text-left transition-all ${
                        activeCategory === cat
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-primary mb-2">Butuh Penawaran Khusus?</h4>
                <p className="text-xs text-slate-600 mb-4">Dapatkan harga grosir untuk pengadaan dalam jumlah besar.</p>
                <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors">
                  Hubungi Sales
                </button>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-xl transition-all"
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-primary font-bold text-xl mb-4">{product.price}</p>
                      <button className="w-full flex items-center justify-center space-x-2 bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-primary transition-colors">
                        <ShoppingCart className="w-4 h-4" />
                        <span>Minta Penawaran</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-24">
                  <p className="text-slate-400 text-lg">Tidak ada produk yang ditemukan.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
