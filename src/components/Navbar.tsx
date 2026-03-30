import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">TB</span>
          </div>
          <div className="flex flex-col">
            <span className={cn('font-bold text-lg leading-tight', isScrolled ? 'text-primary' : 'text-white')}>
              PT. TEKNOTAMA BARU
            </span>
            <span className={cn('text-[10px] tracking-widest uppercase', isScrolled ? 'text-slate-500' : 'text-slate-200')}>
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
                  : isScrolled
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
            className={cn(isScrolled ? 'text-slate-900' : 'text-white')}
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
