import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isTransparent = !isScrolled;

  const toggleLanguage = () => {
    const currentLang = i18n.language || 'id';
    const newLang = currentLang.startsWith('id') ? 'en' : 'id';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        !isTransparent ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <svg viewBox="0 0 100 100" className="w-10 h-10 shadow-sm rounded-2xl shrink-0" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="24" fill="#0f172a" />
            <text x="50" y="52" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42" fill="#ffffff" textAnchor="middle" dominantBaseline="middle" letterSpacing="1">TB</text>
            <circle cx="76" cy="24" r="8" fill="#0ea5e9" />
          </svg>
          <div className="flex flex-col">
            <span className={cn('font-bold text-lg leading-tight', !isTransparent ? 'text-slate-900' : 'text-white')}>
              PT. TEKNOTAMA BARU
            </span>
            <span className={cn('text-[10px] tracking-widest uppercase', !isTransparent ? 'text-slate-500' : 'text-slate-300')}>
              Service & Procurement
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const translationKey = item.path === '/' ? 'home' : item.path.substring(1);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === item.path
                    ? 'text-primary'
                    : !isTransparent
                    ? 'text-slate-700'
                    : 'text-white'
                )}
              >
                {t(`nav.${translationKey}`)}
              </Link>
            );
          })}
          <button 
            onClick={toggleLanguage}
            className={cn(
              "flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors",
              !isTransparent ? "text-slate-500" : "text-slate-300"
            )}
          >
            <Globe className="w-4 h-4" />
            <span>{i18n.language?.startsWith('id') ? 'ID | EN' : 'EN | ID'}</span>
          </button>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
          >
            {t('nav.quote')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(!isTransparent ? 'text-slate-900' : 'text-white')}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-screen py-6' : 'max-h-0'
        )}
      >
        <div className="container-custom flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => {
            const translationKey = item.path === '/' ? 'home' : item.path.substring(1);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 border-b border-slate-100',
                  location.pathname === item.path ? 'text-primary' : 'text-slate-700'
                )}
              >
                {t(`nav.${translationKey}`)}
              </Link>
            );
          })}
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 text-lg font-medium py-2 border-b border-slate-100 text-slate-700"
          >
            <Globe className="w-5 h-5" />
            <span>{i18n.language?.startsWith('id') ? 'Change to English' : 'Ganti ke Bahasa Indonesia'}</span>
          </button>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-lg font-bold"
          >
            {t('nav.quote')}
          </Link>
        </div>
      </div>
    </nav>
  );
};
