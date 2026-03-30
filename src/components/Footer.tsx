import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold">TB</span>
              </div>
              <span className="text-white font-bold text-lg">PT. TEKNOTAMA BARU</span>
            </div>
            <p className="text-sm leading-relaxed">
              Solusi terpercaya untuk layanan jasa dan pengadaan barang berkualitas tinggi di Indonesia. Kami berkomitmen untuk memberikan efisiensi dan nilai tambah bagi setiap mitra bisnis kami.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Layanan Kami</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Outsourcing Tenaga Kerja</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Pemeliharaan Teknis</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Pengadaan Alat Kantor</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Solusi IT & Elektronik</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Peralatan Industri</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Jl. Jendral Sudirman No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@teknotamabaru.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 PT. TEKNOTAMA BARU. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
