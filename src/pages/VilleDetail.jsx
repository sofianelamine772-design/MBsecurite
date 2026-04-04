import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, Shield, MapPin, Check, Plus, Minus, Phone, Mail, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { citiesData } from '../data/citiesData';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-gold transition-colors group"
      >
        <span className="font-header text-sm md:text-base uppercase tracking-widest italic font-bold">{question}</span>
        <div className="text-gold">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-white/60 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const VilleDetail = () => {
  const { citySlug } = useParams();
  const city = citiesData[citySlug];

  if (!city) {
    return <Navigate to="/zones-intervention" />;
  }

  return (
    <div className="bg-dark min-h-screen text-white font-content selection:bg-gold selection:text-black pt-20">
      <div className="container mx-auto px-6 max-w-5xl pt-10">
        <div className="flex justify-end items-center mb-8 md:mb-12">
            <div className="text-[10px] font-header text-white/20 uppercase tracking-widest">31 - Haute-Garonne</div>
        </div>
        
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
             <MapPin className="text-gold" size={24} />
             <div className="h-[1px] w-12 bg-gold/30"></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-header font-bold italic tracking-tighter uppercase mb-6 leading-none">
            SÉCURITÉ <br/> <span className="text-gold">{city.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl border-l-4 border-gold pl-6 py-2">
            {city.description}
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-16 md:gap-24 mb-32">
            {/* SEO Content Column */}
            <div className="lg:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-header text-gold mb-6 uppercase italic tracking-widest">Expertise et Vigilance à {city.name}</h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6">
                        {city.seoContent}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            "Gardiennage d'entreprises",
                            "Vigilance résidentielle de nuit",
                            "Surveillance de chantiers",
                            "Agent SSIAP (Incendie)",
                            "Brigade Cynophile (K9)",
                            "Intervention sur alarme 24/7"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                             <Check size={16} className="text-gold shrink-0" />
                             <span>{item}</span>
                          </div>
                        ))}
                    </div>
                </section>

                <section className="bg-dark-card border border-gold/10 p-10 rounded-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <Clock className="text-gold" size={24} />
                        <h3 className="text-xl font-header uppercase tracking-widest italic">Disponibilité à {city.name}</h3>
                    </div>
                    <p className="text-white/60 mb-8 leading-relaxed">
                        MB SÉCURITÉ intervient sur l'ensemble du secteur de **{city.name}** sans interruption. Notre centrale de veille est opérationnelle pour déclencher une levée de doute physique sur votre site en un temps record.
                    </p>
                    <a href="tel:0668072141" className="inline-block bg-gold text-black px-10 py-4 font-header font-bold text-xs tracking-widest uppercase hover:bg-white transition-all shadow-[0_10px_20px_rgba(212,175,55,0.2)]">
                        Demander un Agent
                    </a>
                </section>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-8">
                <div className="bg-white/5 border border-white/5 p-8 rounded-sm sticky top-32">
                    <h4 className="font-header text-sm text-gold mb-8 uppercase tracking-[0.3em]">Contact Direct</h4>
                    <div className="space-y-6">
                        <a href="tel:0668072141" className="flex items-center gap-4 group">
                            <div className="p-3 bg-gold/10 rounded group-hover:bg-gold transition-all duration-300">
                                <Phone size={20} className="text-gold group-hover:text-black" />
                            </div>
                            <span className="font-header text-lg italic group-hover:text-gold transition-all">06 68 07 21 41</span>
                        </a>
                        <a href="mailto:mbsecurite31@gmail.com" className="flex items-center gap-4 group">
                            <div className="p-3 bg-gold/10 rounded group-hover:bg-gold transition-all duration-300">
                                <Mail size={20} className="text-gold group-hover:text-black" />
                            </div>
                            <span className="font-header text-sm opacity-60 group-hover:opacity-100 group-hover:text-gold transition-all">mbsecurite31@gmail.com</span>
                        </a>
                    </div>
                    <div className="mt-10 pt-10 border-t border-white/5">
                        <p className="text-[10px] uppercase font-header tracking-widest text-white/30 leading-loose">
                            Intervention prioritaire sur le secteur de {city.name}. <br/> Tarification variable selon la mission.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ Perso pour la ville */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-gold font-header text-xs tracking-[0.5em] uppercase mb-4">Questions Fréquentes</h2>
            <h3 className="text-3xl font-header font-bold uppercase italic">{city.name} SÉCURITÉ</h3>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm">
            {city.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
            <FAQItem 
              question={`Quels types d'entreprises sécurisez-vous à ${city.name} ?`} 
              answer={`Nous sécurisons tout type d'infrastructure : commerces de proximité, entrepôts logistiques, sites industriels et résidences privées sur l'ensemble de ${city.name}.`} 
            />
          </div>
        </div>

        <footer className="mt-24 pt-10 border-t border-white/5 opacity-40 text-center text-[10px] font-header tracking-[0.4em] uppercase">
          MB SÉCURITÉ &copy; 2026 - VOTRE PARTENAIRE À {city.name.toUpperCase()}
        </footer>
      </div>
    </div>
  );
};

export default VilleDetail;
