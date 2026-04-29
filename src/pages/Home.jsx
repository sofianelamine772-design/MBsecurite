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
    <span ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-header font-bold gold-text-gradient inline-block mb-2">
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
    <div className="bg-dark min-h-screen text-white font-content selection:bg-gold selection:text-black overflow-x-hidden">
      {/* Hero Section - HUD Aesthetic */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
         {/* Background with Vignette and Gradient overlay */}
         <div className="absolute inset-0 z-0">
            <img src="/hero-bg.png" alt="Security Presence" className="w-full h-full object-cover scale-110 md:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/40 to-dark"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.9)_100%)]"></div>
         </div>

         {/* Central Content */}
         <div className="container relative z-10 mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
               <div className="mb-6">
                  <span className="inline-block px-4 py-1 border border-gold/30 text-gold text-[9px] md:text-[10px] font-header uppercase tracking-[0.4em] bg-gold/5 backdrop-blur-sm">Saint-Gaudens & Occitanie</span>
               </div>
               
               <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] font-header font-bold leading-[0.9] mb-8 italic tracking-tighter uppercase text-white drop-shadow-2xl">
                  VOTRE <br />
                  <span className="gold-text-gradient">SÉCURITÉ</span>
               </h1>

               <div className="flex gap-4 items-center mb-10 w-full justify-center max-w-lg">
                  <div className="hidden sm:block h-[1px] flex-1 bg-gold/30"></div>
                  <p className="text-white/60 font-header uppercase tracking-[0.2em] text-[10px] md:text-sm lg:text-base leading-relaxed px-4">
                    Leader régional de la surveillance humaine et du gardiennage
                  </p>
                  <div className="hidden sm:block h-[1px] flex-1 bg-gold/30"></div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
                  <Link to="/services" className="gold-gradient text-black px-12 py-5 font-header font-bold tracking-[0.2em] uppercase text-xs hover:translate-y-[-5px] transition-all shadow-[0_10px_30px_rgba(255,215,0,0.3)] w-full sm:w-auto">
                    Nos Solutions
                  </Link>
                  <a href="#contact" className="border border-white/20 hover:border-white/60 bg-white/5 backdrop-blur-sm px-12 py-5 font-header font-bold tracking-[0.2em] uppercase text-xs transition-all hover:bg-white/10 w-full sm:w-auto text-white">
                    Consultation
                  </a>
               </div>

               {/* Mini Services Overview Section */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1, duration: 1 }}
                 className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-t border-white/5 pt-12 max-w-5xl w-full"
               >
                  <div className="text-center md:text-left px-4">
                    <h5 className="text-gold font-header text-[10px] md:text-xs uppercase tracking-widest mb-3 font-bold italic">Surveillance Humaine</h5>
                    <p className="text-white/40 text-[9px] md:text-[10px] uppercase leading-relaxed tracking-wider">Agents qualifiés pour la protection physique de vos sites sensibles et chantiers.</p>
                  </div>
                  <div className="text-center md:text-left md:border-x border-white/5 md:px-8 px-4">
                    <h5 className="text-gold font-header text-[10px] md:text-xs uppercase tracking-widest mb-3 font-bold italic">Sécurité Incendie</h5>
                    <p className="text-white/40 text-[9px] md:text-[10px] uppercase leading-relaxed tracking-wider">Expertise SSIAP 1, 2 et 3 pour la prévention et la gestion des risques incendie.</p>
                  </div>
                  <div className="text-center md:text-left px-4">
                    <h5 className="text-gold font-header text-[10px] md:text-xs uppercase tracking-widest mb-3 font-bold italic">Intervention Mobile</h5>
                    <p className="text-white/40 text-[9px] md:text-[10px] uppercase leading-relaxed tracking-wider">Réactivité totale 24h/24 pour levée de doute et patrouilles de dissuasion.</p>
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* Alarm & Remote Monitoring Section */}
      <section className="relative py-24 md:py-40 bg-dark-card border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-6xl font-header font-bold italic uppercase mb-12 text-white leading-[1.1] tracking-tight">
                Protégez-vous avec un <br/><span className="gold-text-gradient">système d’alarme avec télésurveillance</span>
              </h2>
              
              <div className="space-y-12 text-white/50 font-header uppercase tracking-[0.2em] text-[10px] md:text-sm leading-relaxed max-w-3xl mx-auto">
                  <p>
                    La sécurité de votre habitation et de vos proches est un enjeu crucial. MB SÉCURITÉ vous accompagne avec l'installation d'alarme avec télésurveillance. Nous vous proposons une gamme d’appareils de sécurité pour vous protéger contre les risques du quotidien : tentative d’intrusion, actes de vandalisme, dégagement de fumée, fuite d’eau, urgence médicale etc...
                  </p>
                  
                  <div className="h-px w-20 bg-gold/20 mx-auto"></div>
                  
                  <p className="text-white/70 italic bg-white/[0.02] p-8 md:p-12 border border-white/5 rounded-sm">
                    Notre centre de télésurveillance réagit au moindre déclenchement d'alarme 24h/24 et 7j/7, même si vous n’êtes pas sur place pour prévenir les services d’urgence, grâce à notre numéro réservé, offrir une vérification par image et gagner ainsi des secondes vitales.
                  </p>
                  
                  <p>
                    Vous aurez également la possibilité de contrôler votre système d'alarme à distance depuis notre application mobile dédiée : intuitive et simple d’emploi, elle permet d’activer et désactiver vos alarmes, de prendre des photos pendant votre absence, d’être informé en temps réel si les portes et fenêtres sont ouvertes.
                  </p>
              </div>
              
              <div className="mt-20 flex justify-center">
                  <div className="w-24 h-1 bg-gold/30 shadow-[0_0_15px_rgba(255,215,0,0.2)]"></div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 md:py-40 bg-black overflow-hidden">
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 blur-[120px] rounded-full"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center mb-16 md:mb-32 text-center">
               <h2 className="text-gold font-header text-[10px] tracking-[0.5em] uppercase mb-4">Architecture de Défense</h2>
               <h3 className="text-4xl md:text-7xl font-header font-bold uppercase mb-6 italic leading-tight text-white">Solutions de <br/> <span className="gold-text-gradient text-white">Surveillance Humaine</span></h3>
               <div className="w-24 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
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

            {/* Mobile/Tablet Layout - Premium Grid */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
               {[
                  { title: "Sécurité Incendie", desc: "Prévention & SSI", icon: <Shield size={28} /> },
                  { title: "Équipe Cynophile", desc: "Conducteur & Chien", icon: <CheckCircle2 size={28} /> },
                  { title: "Événementiel", desc: "Manifestations & VIP", icon: <Bell size={28} /> },
                  { title: "Gardiennage", desc: "Protection Physique", icon: <Lock size={28} /> },
                  { title: "Intervention", desc: "Réponse sur Alarme", icon: <Zap size={28} /> }
               ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 bg-dark-card border border-white/5 rounded-sm flex flex-col items-center text-center gap-6 group hover:border-gold/30 transition-all"
                  >
                     <div className="p-4 bg-gold/10 text-gold rounded-full border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
                        {item.icon}
                     </div>
                     <div>
                        <h4 className="font-header font-bold text-white uppercase italic text-lg mb-2">{item.title}</h4>
                        <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{item.desc}</p>
                     </div>
                  </motion.div>
               ))}
               <div className="sm:col-span-2 mt-12 p-12 flex justify-center border-t border-white/5">
                  <img src="/logo.png" alt="Logo" className="w-1/2 md:w-1/3 opacity-20 grayscale" />
               </div>
            </div>
         </div>
      </section>

      {/* Trust Banner */}
      <section id="propos" className="py-24 bg-dark-card border-y border-white/5 relative">
         <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 text-center">
            {[
               { label: "Gardiens", val: "25", suffix: "+" },
               { label: "Interventions/Mois", val: "120", suffix: "+" },
               { label: "Sites Protégés", val: "50", suffix: "+" },
               { label: "Satisfaction", val: "99", suffix: "%" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <Counter value={stat.val} suffix={stat.suffix} />
                <div className="text-[9px] md:text-[10px] font-header uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* CTA Footer */}
      <section id="contact" className="py-24 md:py-40 bg-black relative">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <h4 className="text-4xl md:text-7xl font-header font-bold mb-12 italic uppercase text-white leading-none">VOTRE SÉCURITÉ <br/><span className="gold-text-gradient underline decoration-gold/30 underline-offset-8">NOTRE MISSION</span></h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
               <a href="tel:0668072141" className="bg-bg-card border border-gold/20 p-10 hover:border-gold transition-all block group rounded-sm shadow-xl">
                  <Phone className="mx-auto mb-6 text-gold group-hover:scale-110 transition-all" size={32} />
                  <span className="block font-header text-xl md:text-2xl mb-2 uppercase text-white">Appelez-nous</span>
                  <span className="text-gold font-header text-2xl md:text-3xl font-bold">06 68 07 21 41</span>
               </a>
               <a href="mailto:contact@mbsecurite.fr" className="bg-bg-card border border-gold/20 p-10 hover:border-gold transition-all block group rounded-sm shadow-xl">
                  <Mail className="mx-auto mb-6 text-gold group-hover:scale-110 transition-all" size={32} />
                  <span className="block font-header text-xl md:text-2xl mb-2 uppercase text-white">Email direct</span>
                  <span className="text-gold font-header text-lg md:text-xl truncate uppercase font-bold">contact@mbsecurite.fr</span>
               </a>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-10 border-t border-white/5 pt-12">
                <div className="text-center md:text-left">
                  <p className="text-white/20 font-header uppercase tracking-[0.3em] text-[8px] md:text-[9px] mb-2">MB SÉCURITÉ - TOUS DROITS RÉSERVÉS - 2026</p>

                </div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                  <Link to="/zones-intervention" className="text-gold/40 hover:text-gold transition-all font-header uppercase tracking-[0.3em] text-[8px] md:text-[9px] border-b border-gold/10 pb-1">
                    Zones
                  </Link>
                  <Link to="/statut-legal" className="text-gold/40 hover:text-gold transition-all font-header uppercase tracking-[0.3em] text-[8px] md:text-[9px] border-b border-gold/10 pb-1">
                    Statut Légal
                  </Link>
                  <Link to="/mentions-legales" className="text-gold/40 hover:text-gold transition-all font-header uppercase tracking-[0.3em] text-[8px] md:text-[9px] border-b border-gold/10 pb-1">
                    Mentions
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

export default Home;
