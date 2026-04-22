import React from 'react';
import { Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSection = () => {
  return (
    <section className="py-20 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 border border-gold/30 text-gold text-[10px] font-header uppercase tracking-[0.4em] mb-6 bg-gold/5 rounded-full">
              Restons Connectés
            </span>
            <h2 className="text-3xl md:text-5xl font-header font-bold italic uppercase tracking-tighter mb-4 text-white">
              Suivez notre <span className="text-gold">Activité</span>
            </h2>
            <p className="text-white/40 font-header uppercase tracking-[0.2em] text-[10px] md:text-xs leading-relaxed mb-12">
              Découvrez notre professionnalisme et notre efficacité au quotidien sur les réseaux sociaux
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <motion.a 
              href="https://facebook.com/profile.php?id=61556096538356" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-6 bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-xl backdrop-blur-md hover:border-gold/50 transition-all duration-500 min-w-[300px] overflow-hidden"
            >
              {/* Animated Background Shine */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="p-4 bg-white/5 text-white/40 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 rounded-lg border border-white/10 group-hover:border-blue-400/50">
                  <Facebook size={28} strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-left">
                <span className="block text-white font-header font-bold text-lg tracking-widest uppercase mb-1">Facebook</span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium group-hover:text-gold transition-colors">@mbsecurite31</span>
              </div>
              <div className="absolute top-4 right-4 p-1 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={14} className="text-gold" />
              </div>
            </motion.a>

            {/* Instagram Card */}
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-6 bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-xl backdrop-blur-md hover:border-gold/50 transition-all duration-500 min-w-[300px] overflow-hidden"
            >
              {/* Animated Background Shine */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

              <div className="relative">
                <div className="absolute inset-0 bg-pink-600 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="p-4 bg-white/5 text-white/40 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:text-white transition-all duration-500 rounded-lg border border-white/10 group-hover:border-pink-400/50">
                  <Instagram size={28} strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-left">
                <span className="block text-white font-header font-bold text-lg tracking-widest uppercase mb-1">Instagram</span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium group-hover:text-gold transition-colors">@mb.securite</span>
              </div>
              <div className="absolute top-4 right-4 p-1 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={14} className="text-gold" />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
