import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Trophy, Star, Mail, Phone, ChevronRight, FileText, Briefcase, UserCheck } from 'lucide-react';

const StatItem = ({ label, value, icon: Icon }) => (
  <div className="flex flex-col items-center p-8 bg-white/5 border border-white/5 rounded-sm hover:border-gold/30 transition-all group">
    <div className="p-4 bg-gold/10 text-gold rounded-full mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <span className="text-3xl font-header font-bold text-white mb-1">{value}</span>
    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{label}</span>
  </div>
);

const BenefitCard = ({ title, description, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 bg-dark-card border border-white/5 relative overflow-hidden group hover:border-gold/20 transition-all"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
    <div className="relative z-10">
      <div className="p-3 bg-gold/10 text-gold border border-gold/20 w-fit rounded-sm mb-6">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-header font-bold mb-4 text-white uppercase italic tracking-tight">{title}</h3>
      <p className="text-xs leading-relaxed text-white/50 tracking-wide uppercase font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

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
              Rejoignez l'élite des <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-gold-dark">Professionnels</span>
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto font-header uppercase tracking-[0.2em] text-xs md:text-sm leading-relaxed mb-12">
              Nous recherchons des agents de sécurité passionnés par l'excellence et le service. MB SÉCURITÉ offre un cadre de travail structuré et des perspectives d'évolution réelles.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="#postuler" 
                className="bg-gold text-black px-12 py-5 font-header font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:translate-y-[-5px] transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
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

      {/* Why Join Us? Points */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            icon={Shield}
            title="Sérieux & Rigueur"
            description="Rejoignez une entreprise reconnue pour son professionnalisme et son respect strict des normes de sécurité."
          />
        </div>
      </section>

      {/* Profile List */}
      <section className="py-32 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-header font-bold italic uppercase tracking-tighter text-white">
                Profils <span className="text-gold">Recherchés</span>
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
              <h2 className="text-4xl font-header font-bold italic uppercase mb-8">
                Envoyez-nous votre <br/> <span className="text-gold">Candidature</span>
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
