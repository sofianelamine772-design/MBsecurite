import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', to: '/services' },
    { name: 'Zones', to: '/zones-intervention' },
    { name: 'Recrutement', to: '/recrutement' },
    { name: 'Statut Légal', to: '/statut-legal' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="MB SÉCURITÉ" className="h-10 md:h-12 w-auto group-hover:scale-110 transition-transform" />
            <div className="hidden sm:block">
              <span className="block font-header text-lg font-bold italic tracking-tighter leading-none text-white group-hover:text-gold transition-colors uppercase">MB SÉCURITÉ</span>
              <span className="block font-header text-[8px] tracking-[0.4em] text-white/40 uppercase">Vigilance & Protection</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.to}
                className={`text-[12px] font-header font-bold uppercase tracking-[0.2em] transition-all relative group ${pathname === item.to ? 'text-gold' : 'text-white hover:text-gold'}`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a href="tel:0668072141" className="gold-gradient text-black px-6 py-3 rounded-sm font-header font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(255,215,0,0.4)]">
              <Phone size={14} className="group-hover:scale-110 transition-transform" />
              <span>06 68 07 21 41</span>
            </a>
          </div>

          <button className="md:hidden text-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-black/95 border-b border-white/5"
            >
              <div className="flex flex-col p-8 gap-6 text-center">
                {menuItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)} 
                    className="font-header font-bold text-sm tracking-[0.2em] uppercase hover:text-gold transition-all py-2 border-b border-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
                <a href="tel:0668072141" className="gold-gradient text-black py-4 font-header font-bold text-xs tracking-widest uppercase rounded">
                  Urgence 24/7
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
};

export default Navbar;
