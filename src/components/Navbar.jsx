import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'Services', to: '/services' },
    { name: 'Zones', to: '/zones-intervention' },
    { name: 'Recrutement', to: '/recrutement' },
    { name: 'Statut Légal', to: '/statut-legal' }
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-[100] transition-all duration-500 ${
          scrolled ? 'py-4 bg-black/90 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gold blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <img src="/logo.png" alt="MB Sécurité" className="h-10 md:h-12 relative z-10" />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-header font-bold tracking-[0.3em] text-sm text-white">MB SÉCURITÉ</span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-gold font-bold">Vigilance & Protection</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="font-header uppercase tracking-[0.3em] text-[10px] text-white/70 hover:text-gold transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <a 
              href="tel:0668072141" 
              className="gold-gradient px-6 py-2 rounded-sm text-black font-header font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            >
              <Phone size={14} />
              06 68 07 21 41
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 relative z-[110]"
          >
            {isOpen ? <X size={28} className="text-gold" /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/5 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-8 w-full px-6">
              <div className="mb-8">
                <img src="/logo.png" alt="Logo" className="h-20 opacity-50" />
              </div>
              
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="w-full text-center"
                >
                  <Link
                    to={item.to}
                    className="block font-header text-3xl font-bold uppercase italic tracking-tighter text-white hover:text-gold transition-all"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 w-full max-w-xs"
              >
                <a 
                  href="tel:0668072141" 
                  className="gold-gradient w-full py-5 rounded-sm text-black font-header font-bold text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(255,215,0,0.2)]"
                >
                  <Phone size={18} />
                  Appeler maintenant
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex items-center gap-2 text-white/20 font-header text-[8px] uppercase tracking-[0.5em]"
              >
                <Shield size={12} />
                <span>Vigilance & Protection</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
