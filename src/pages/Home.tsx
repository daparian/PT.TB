import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Users, Shield, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '../constants';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            alt="Corporate Office"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-bold tracking-widest uppercase mb-4 block">
              {t('home.subtitle')}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t('home.title1')} <span className="text-accent">{t('home.title2')}</span> {t('home.title3')}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              {t('home.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all group"
              >
                {t('home.quoteBtn')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all"
              >
                {t('home.servicesBtn')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                <span className="text-4xl font-bold text-white block mb-1">10+</span>
                <span className="text-white/80 text-sm uppercase tracking-wider">{t('home.experience')}</span>
              </div>
            </motion.div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {t('home.introTitle')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t('home.introDesc')}
              </p>
              <ul className="space-y-4">
                {[
                  t('home.introList1'),
                  t('home.introList2'),
                  t('home.introList3'),
                  t('home.introList4')
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-primary font-bold inline-flex items-center hover:underline">
                {t('home.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Services */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.servicesTitle')}</h2>
            <p className="text-slate-600">
              {t('home.servicesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  {/* Dynamic icon rendering would be better, but for now using placeholders */}
                  <Zap className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">
                  {service.category === 'Solution' ? t('services.cat1Title') : t('services.cat2Title')}
                </span>
                <h3 className="text-xl font-bold mb-3">{t(`services.items.${service.id}.title`)}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {t(`services.items.${service.id}.description`)}
                </p>
                <Link to="/services" className="text-primary font-bold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform">
                  {t('home.serviceDetail')} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('home.whyUsTitle')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Shield, title: t('home.whyUs1Title'), desc: t('home.whyUs1Desc') },
                  { icon: Zap, title: t('home.whyUs2Title'), desc: t('home.whyUs2Desc') },
                  { icon: Users, title: t('home.whyUs3Title'), desc: t('home.whyUs3Desc') },
                  { icon: Award, title: t('home.whyUs4Title'), desc: t('home.whyUs4Desc') },
                ].map((item, index) => (
                  <div key={index} className="space-y-3">
                    <item.icon className="w-10 h-10 text-accent" />
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">{t('home.ctaTitle')}</h3>
              <p className="text-white/80 mb-8">
                {t('home.ctaDesc')}
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg block text-center transition-all"
              >
                {t('home.ctaBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container-custom">
          <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">
            {t('home.partners')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Placeholder Logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-8 w-32 bg-slate-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
