import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Shield, Lock, Bell, Zap, Phone, Mail, MapPin, ChevronRight, Menu, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counter = ({ value, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) return;
      
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-header font-bold gold-text-gradient inline-block mb-2">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ServicePoint = ({ title, className, description, side = 'left' }) => (
  <motion.div 
    initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className={`absolute z-20 flex items-center gap-4 ${className}`}
  >
    {side === 'right' && (
       <div className="flex items-center">
          <div className="w-12 h-[1px] bg-gold-dark shadow-[0_0_10px_gold]"></div>
          <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_gold]"></div>
       </div>
    )}
    <div className={`flex flex-col ${side === 'right' ? 'items-start' : 'items-end'}`}>
      <span className="text-xl font-header font-bold text-white tracking-widest uppercase italic">{title}</span>
      <span className="text-[10px] uppercase text-gold/60 tracking-wider font-bold mb-1">{description}</span>
    </div>
    {side === 'left' && (
       <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_gold]"></div>
          <div className="w-12 h-[1px] bg-gold-dark shadow-[0_0_10px_gold]"></div>
       </div>
    )}
  </motion.div>
);

const Home = () => {
  return (
    <div className="bg-dark min-h-screen text-white font-content selection:bg-gold selection:text-black">
      {/* Hero Section - HUD Aesthetic */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-28 pb-10">
         {/* Background with Vignette and Gradient overlay */}
         <div className="absolute inset-0 z-0">
            <img src="/hero-bg.png" alt="Security Presence" className="w-full h-full object-cover animate-pulse scale-105" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] text-black"></div>
         </div>

         {/* Central Content */}
         <div className="container relative z-10 mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
               <div className="mb-4">
                  <span className="inline-block px-4 py-1 border border-gold/30 text-gold text-[8px] md:text-[10px] font-header uppercase tracking-[0.4em] mb-4 bg-gold/5">Saint-Gaudens & Occitanie</span>
               </div>
               <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[140px] font-header font-bold leading-[0.8] mb-8 italic tracking-tighter uppercase">
                  VOTRE <br />
                  <span className="gold-text-gradient">SÉCURITÉ</span>
               </h1>
               <div className="flex gap-4 items-center mb-10 w-full justify-center">
                  <div className="h-[1px] flex-1 max-w-[50px] bg-gold/30"></div>
                  <p className="text-secondary max-w-sm font-header uppercase tracking-[0.2em] text-[10px] md:text-sm lg:text-base opacity-80 leading-relaxed">
                    Leader régional de la protection et du gardiennage
                  </p>
                  <div className="h-[1px] flex-1 max-w-[50px] bg-gold/30"></div>
               </div>
               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link to="/services" className="gold-gradient text-black px-10 py-4 font-header font-bold tracking-[0.2em] uppercase text-xs hover:translate-y-[-5px] transition-all shadow-[0_10px_30px_rgba(255,215,0,0.3)]">
                    Nos Solutions
                  </Link>
                  <a href="#contact" className="border-2 border-white/20 hover:border-white/60 bg-transparent px-10 py-4 font-header font-bold tracking-[0.2em] uppercase text-xs transition-all hover:bg-white/5">
                    Consultation
                  </a>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Services Section - Inspired by the PDF Cover */}
      <section id="services" className="relative py-24 md:py-40 bg-black overflow-hidden">
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 blur-[120px] rounded-full"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center mb-16 md:mb-32 text-center text-black">
               <h2 className="text-gold font-header text-[10px] tracking-[0.5em] uppercase mb-4">Architecture de Défense</h2>
               <h3 className="text-3xl md:text-6xl font-header font-bold uppercase mb-4 italic leading-tight text-white">Solutions de <br/> <span className="gold-text-gradient">Protection Intégrée</span></h3>
               <div className="w-20 md:w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>

            {/* Desktop Layout - HUD Connectors */}
            <div className="hidden lg:flex relative max-w-5xl mx-auto min-h-[700px] items-center justify-center">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="relative z-10 w-full max-w-[450px] group"
               >
                  <div className="absolute inset-0 bg-gold blur-[80px] opacity-20 transition-all duration-1000 group-hover:opacity-40 scale-125"></div>
                  <img src="/logo.png" alt="Logo MB Sécurité" className="w-full h-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-105 relative z-20" />
               </motion.div>

               <ServicePoint title="Sécurité Incendie" description="Prévention & SSI" className="top-10 left-[5%]" side="left" />
               <ServicePoint title="Équipe Cynophile" description="Conducteur & Chien" className="top-1/2 -translate-y-1/2 left-[0%]" side="left" />
               <ServicePoint title="Événementiel" description="Manifestations & VIP" className="bottom-10 left-[10%]" side="left" />
               <ServicePoint title="Gardiennage" description="Protection Physique" className="top-20 right-[5%]" side="right" />
               <ServicePoint title="Intervention" description="Réponse sur Alarme" className="bottom-1/2 right-[0%]" side="right" />
            </div>

            {/* Mobile Layout - Cards/Grid */}
            <div className="lg:hidden grid grid-cols-1 gap-6">
               {[
                  { title: "Sécurité Incendie", desc: "Prévention & SSI", icon: <Shield size={24} /> },
                  { title: "Équipe Cynophile", desc: "Conducteur & Chien", icon: <CheckCircle2 size={24} /> },
                  { title: "Événementiel", desc: "Manifestations & VIP", icon: <Bell size={24} /> },
                  { title: "Gardiennage", desc: "Protection Physique", icon: <Lock size={24} /> },
                  { title: "Intervention", desc: "Réponse sur Alarme", icon: <Zap size={24} /> }
               ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-6 bg-dark-card border border-white/5 rounded flex items-center gap-6"
                  >
                     <div className="p-3 bg-gold/10 text-gold rounded border border-gold/20">
                        {item.icon}
                     </div>
                     <div>
                        <h4 className="font-header font-bold text-white uppercase italic text-sm">{item.title}</h4>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.desc}</p>
                     </div>
                  </motion.div>
               ))}
               <div className="mt-10 p-6 flex justify-center">
                  <img src="/logo.png" alt="Logo" className="w-1/2 opacity-20" />
               </div>
            </div>
         </div>
      </section>

      {/* Trust Banner - Section Propos */}
      <section id="propos" className="py-24 bg-dark-card border-y border-white/5 relative">
         <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
               { label: "Gardiens", val: "25", suffix: "+" },
               { label: "Interventions/Mois", val: "120", suffix: "+" },
               { label: "Sites Protégés", val: "50", suffix: "+" },
               { label: "Satisfaction", val: "99", suffix: "%" }
            ].map((stat, i) => (
              <div key={i}>
                <Counter value={stat.val} suffix={stat.suffix} />
                <div className="text-[10px] font-header uppercase tracking-widest text-white/40">{stat.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* CTA Footer */}
      <section id="contact" className="py-40 bg-black relative">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <h4 className="text-5xl md:text-7xl font-header font-bold mb-10 italic uppercase text-white">Prêt à sécuriser <br/>votre <span className="gold-text-gradient underline decoration-gold/30 underline-offset-8">patrimoine</span> ?</h4>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
               <a href="tel:0634394254" className="bg-bg-card border border-gold/20 p-10 hover:border-gold transition-all block group">
                  <Phone className="mx-auto mb-4 text-gold group-hover:scale-110 transition-all" size={40} />
                  <span className="block font-header text-2xl mb-2 uppercase text-white">Appelez-nous</span>
                  <span className="text-gold font-header text-3xl">06 34 39 42 54</span>
               </a>
               <a href="mailto:mbsecurite31@gmail.com" className="bg-bg-card border border-gold/20 p-10 hover:border-gold transition-all block group">
                  <Mail className="mx-auto mb-4 text-gold group-hover:scale-110 transition-all" size={40} />
                  <span className="block font-header text-2xl mb-2 uppercase text-white">Email direct</span>
                  <span className="text-gold font-header text-xl truncate uppercase">mbsecurite31@gmail.com</span>
               </a>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 border-t border-white/5 pt-10">
                <div className="text-left">
                  <p className="text-white/20 font-header uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-1">MB SÉCURITÉ - TOUS DROITS RÉSERVÉS - 2026</p>
                  <p className="text-gold/30 font-header uppercase tracking-[0.2em] text-[7px] md:text-[9px]">Agrément CNAPS n° 2026-0032214-AGD-ESP-0978198</p>
                </div>
                <div className="flex gap-8">
                  <Link to="/zones-intervention" className="text-gold/40 hover:text-gold transition-all font-header uppercase tracking-[0.3em] text-[8px] md:text-[10px] border-b border-gold/10 pb-1">
                    Zones d'intervention
                  </Link>
                  <Link to="/mentions-legales" className="text-gold/40 hover:text-gold transition-all font-header uppercase tracking-[0.3em] text-[8px] md:text-[10px] border-b border-gold/10 pb-1">
                    Mentions Légales
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

export default Home;
