import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center max-w-4xl">

        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
           <p className="text-white/20 font-header uppercase tracking-[0.3em] text-[8px] md:text-[10px]">
             MB SÉCURITÉ - TOUS DROITS RÉSERVÉS - 2026 - SAINT-GAUDENS
           </p>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/zones-intervention" className="text-gold/40 hover:text-gold transition-all font-header uppercase tracking-[0.3em] text-[8px] md:text-[10px] border-b border-gold/10 pb-1">
                Zones d'intervention
              </Link>
              <Link to="/statut-legal" className="text-gold/40 hover:text-gold transition-all font-header uppercase tracking-[0.3em] text-[8px] md:text-[10px] border-b border-gold/10 pb-1">
                Statut Légal
              </Link>
              <Link to="/mentions-legales" className="text-gold/40 hover:text-gold transition-all font-header uppercase tracking-[0.3em] text-[8px] md:text-[10px] border-b border-gold/10 pb-1">
                Mentions Légales
              </Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
