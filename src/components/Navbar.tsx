import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

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
          <svg viewBox="0 0 100 100" className="w-11 h-11 rounded shadow-sm" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7ab837" />
                <stop offset="100%" stopColor="#4a8c24" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#logoGrad)" stroke="#4b7cba" strokeWidth="4" />
            <text x="13" y="66" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="72" fill="white" stroke="#4b7cba" strokeWidth="3">T</text>
            <text x="43" y="84" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="72" fill="white" stroke="#4b7cba" strokeWidth="3">B</text>
          </svg>
          <div className="flex flex-col">
            <span className={cn('font-bold text-lg leading-tight', !isTransparent ? 'text-primary' : 'text-white')}>
              PT. TEKNOTAMA BARU
            </span>
            <span className={cn('text-[10px] tracking-widest uppercase', !isTransparent ? 'text-slate-500' : 'text-slate-200')}>
              Service & Procurement
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                location.pathname === item.path
                  ? 'text-accent'
                  : !isTransparent
                  ? 'text-slate-700'
                  : 'text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
          <button className="flex items-center space-x-1 text-sm font-medium text-slate-400 hover:text-accent">
            <Globe className="w-4 h-4" />
            <span>ID | EN</span>
          </button>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Minta Penawaran
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-medium py-2 border-b border-slate-100',
                location.pathname === item.path ? 'text-primary' : 'text-slate-700'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-lg font-bold"
          >
            Minta Penawaran
          </Link>
        </div>
      </div>
    </nav>
  );
};
