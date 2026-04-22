import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Trophy, Star, Mail, Phone, ChevronRight, FileText, Briefcase, UserCheck, CheckCircle2 } from 'lucide-react';

const Recrutement = () => {
  return (
    <div className="bg-dark min-h-screen text-white pt-24">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541873676947-41ec999086e3?q=80&w=2070&auto=format&fit=crop" 
            alt="Security Team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 border border-gold/30 text-gold text-[10px] font-header uppercase tracking-[0.4em] mb-8 bg-gold/5">
              Carrières & Opportunités
            </span>
            <h1 className="text-5xl md:text-8xl font-header font-bold italic uppercase tracking-tighter mb-10 leading-none">
              Rejoignez l'élite des <br/> <span className="gold-text-gradient">Professionnels</span>
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto font-header uppercase tracking-[0.2em] text-xs md:text-sm leading-relaxed mb-12">
              Nous recherchons des agents de sécurité passionnés par l'excellence et le service. MB SÉCURITÉ offre un cadre de travail structuré et des perspectives d'évolution réelles.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="#postuler" 
                className="gold-gradient text-black px-12 py-5 font-header font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:translate-y-[-5px] transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
              >
                Postuler maintenant
              </a>
              <a href="tel:0668072141" className="border border-white/20 hover:border-gold/50 px-12 py-5 font-header font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 transition-all">
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Feature Section: Sérieux & Rigueur - FULL WIDTH */}
      <section className="py-24 md:py-40 bg-white/[0.02] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.05),transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
              <div className="flex-1">
                <div className="p-4 bg-gold/10 text-gold border border-gold/20 w-fit rounded-sm mb-8">
                  <Shield size={40} />
                </div>
                <h2 className="text-4xl md:text-6xl font-header font-bold mb-8 italic uppercase tracking-tighter text-white">
                  Sérieux & <span className="gold-text-gradient">Rigueur</span>
                </h2>
                <div className="space-y-6 text-white/60 font-header uppercase tracking-widest text-xs md:text-sm leading-relaxed">
                  <p>
                    Rejoindre MB SÉCURITÉ, c'est intégrer une structure d'élite reconnue pour son professionnalisme sans faille et son respect strict des normes de sécurité privées. Nous ne faisons aucun compromis sur la discipline et l'éthique professionnelle.
                  </p>
                  <p>
                    Chaque collaborateur est un ambassadeur de notre marque de prestige. Nous exigeons une ponctualité exemplaire, une présentation irréprochable et une maîtrise parfaite des protocoles d'intervention. En retour, nous offrons un environnement de travail valorisant, basé sur la confiance mutuelle et le respect des engagements.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                   <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-gold" />
                      <span className="text-[10px] font-header uppercase tracking-[0.2em] font-bold text-white/80">Respect de la déontologie</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-gold" />
                      <span className="text-[10px] font-header uppercase tracking-[0.2em] font-bold text-white/80">Discipline opérationnelle</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-gold" />
                      <span className="text-[10px] font-header uppercase tracking-[0.2em] font-bold text-white/80">Loyauté et intégrité</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-gold" />
                      <span className="text-[10px] font-header uppercase tracking-[0.2em] font-bold text-white/80">Excellence de service</span>
                   </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                 <div className="relative group">
                    <div className="absolute -inset-2 bg-gold/20 blur-xl opacity-100 transition-opacity duration-700"></div>
                    <img 
                      src="/recrutement-dark.png" 
                      alt="Sérieux et Rigueur MB Sécurité" 
                      className="relative z-10 w-full h-auto border border-white/10 rounded-sm shadow-2xl" 
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile List */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-header font-bold italic uppercase tracking-tighter text-white">
                Profils <span className="gold-text-gradient">Recherchés</span>
              </h2>
              <p className="text-white/40 mt-6 font-header uppercase tracking-[0.2em] text-xs leading-relaxed">
                Nous recrutons toute l'année des agents qualifiés pour nos différents sites en Occitanie.
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="w-20 h-px bg-gold/20 self-center"></div>
              <span className="text-gold font-header text-[10px] uppercase tracking-widest">Postes Ouverts</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-dark border border-white/10 rounded-sm flex gap-6 hover:border-gold/30 transition-all group">
              <div className="p-4 bg-white/5 text-white h-fit rounded-sm group-hover:bg-gold group-hover:text-black transition-colors">
                 <UserCheck size={24} />
              </div>
              <div>
                <h4 className="text-xl font-header font-bold uppercase italic text-white mb-2">Agent de Surveillance</h4>
                <p className="text-xs text-white/50 uppercase tracking-widest leading-relaxed">Carte professionnelle à jour obligatoire. Rigueur et sens du service.</p>
              </div>
            </div>
            <div className="p-8 bg-dark border border-white/10 rounded-sm flex gap-6 hover:border-gold/30 transition-all group">
              <div className="p-4 bg-white/5 text-white h-fit rounded-sm group-hover:bg-gold group-hover:text-black transition-colors">
                 <Shield size={24} />
              </div>
              <div>
                <h4 className="text-xl font-header font-bold uppercase italic text-white mb-2">Agent SSIAP 1 & 2</h4>
                <p className="text-xs text-white/50 uppercase tracking-widest leading-relaxed">Certifications incendie indispensables. Expérience en ERP appréciée.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Form Section */}
      <section id="postuler" className="py-32">
        <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-header font-bold italic uppercase mb-8 text-white">
                Envoyez-nous votre <br/> <span className="gold-text-gradient">Candidature</span>
              </h2>
              <p className="text-white/50 mb-12 leading-relaxed uppercase text-xs tracking-widest">
                Envoyez votre CV et lettre de motivation directement par email. Nous étudions toutes les candidatures avec attention.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-12">
                <div className="flex flex-col items-center gap-4 text-white/70">
                  <div className="p-5 bg-white/5 rounded-full text-gold"><Phone size={24} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Téléphone</span>
                    <span className="font-header text-lg tracking-widest text-white font-bold">06 68 07 21 41</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 text-white/70">
                  <div className="p-5 bg-white/5 rounded-full text-gold"><Mail size={24} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Email</span>
                    <a href="mailto:contact@mbsecurite.fr" className="font-header text-lg tracking-widest text-gold font-bold hover:underline">contact@mbsecurite.fr</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Recrutement;
