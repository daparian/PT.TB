import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 pt-40 pb-24 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t('contact.title')}
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-8">{t('contact.infoTitle')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{t('contact.addressTitle')}</h4>
                      <p className="text-slate-600 text-sm mt-1">JL. JANGKA KOMP. JANGKA RESIDENCE LK IV, 10, SEI PUTIH BARAT, MEDAN PETISAH, KOTA MEDAN, SUMATERA UTARA, 20118</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{t('contact.phoneTitle')}</h4>
                      <p className="text-slate-600 text-sm mt-1">+6285229502574</p>
                      <p className="text-slate-600 text-sm">+6281370742417 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{t('contact.emailTitle')}</h4>
                      <p className="text-slate-600 text-sm mt-1">teknotama.baru@gmail.com</p>
                      <p className="text-slate-600 text-sm">daffaadrian189@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{t('contact.hoursTitle')}</h4>
                      <p className="text-slate-600 text-sm mt-1">{t('contact.hours1')}</p>
                      <p className="text-slate-600 text-sm">{t('contact.hours2')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-4">{t('contact.quickResponseTitle')}</h4>
                <p className="text-white/60 text-sm mb-6">{t('contact.quickResponseDesc')}</p>
                <a
                  href="https://wa.me/6281370742417"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 py-3 rounded-xl font-bold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('contact.whatsappBtn')}</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-2">{t('contact.formTitle')}</h2>
                <p className="text-slate-500 mb-8">{t('contact.formDesc')}</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t('contact.nameLabel')}</label>
                      <input
                        type="text"
                        placeholder={t('contact.namePlaceholder')}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t('contact.companyLabel')}</label>
                      <input
                        type="text"
                        placeholder={t('contact.companyPlaceholder')}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t('contact.emailLabel')}</label>
                      <input
                        type="email"
                        placeholder={t('contact.emailFormPlaceholder')}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t('contact.phoneLabel')}</label>
                      <input
                        type="tel"
                        placeholder={t('contact.phonePlaceholder')}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t('contact.serviceLabel')}</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                      <option>{t('contact.selectService')}</option>
                      <option>{t('services.items.outsourcing.title')}</option>
                      <option>{t('services.items.maintenance.title')}</option>
                      <option>{t('services.items.office-supplies.title')}</option>
                      <option>{t('services.items.it-electronics.title')}</option>
                      <option>{t('services.items.industrial-supplies.title')}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t('contact.messageLabel')}</label>
                    <textarea
                      rows={5}
                      placeholder={t('contact.messagePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t('contact.submitBtn')}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="h-96 relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.97462924885!2d98.64674417524354!3d3.5932917963808584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312e24d45ca671%3A0xadb2ee2ceb9bac5d!2sJangka%20Residence!5e0!3m2!1sen!2sid!4v1774847269637!5m2!1sen!2sid" 
    className="w-full h-full border-0"
    loading="lazy"
  ></iframe>

  {/* Overlay Address */}
  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow">
    <p className="font-semibold text-sm">{t('contact.mapOverlayTitle')}</p>
    <p className="text-xs text-slate-500">
      {t('contact.mapOverlayDesc')}
    </p>
  </div>
</section>
    </div>
  );
};

