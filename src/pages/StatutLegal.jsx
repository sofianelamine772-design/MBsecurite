import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Scale, FileText, BadgeCheck, Gavel, Landmark, Info, Plus, Minus, Search, CheckCircle2, Award, UserCheck } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
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
            <p className="pb-8 text-white/50 leading-relaxed text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LegalCard = ({ title, content, icon: Icon }) => (
  <div className="bg-white/5 border border-white/5 p-8 md:p-10 rounded-sm hover:border-gold/30 transition-all group">
    <div className="flex items-start gap-6">
      <div className="p-4 bg-gold/10 text-gold rounded-sm group-hover:bg-gold group-hover:text-black transition-all">
        <Icon size={28} />
      </div>
      <div>
        <h3 className="text-xl font-header font-bold uppercase italic text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed font-content uppercase tracking-widest italic">
          {content}
        </p>
      </div>
    </div>
  </div>
);

const StatutLegal = () => {
  return (
    <div className="bg-dark min-h-screen text-white pt-24 font-content">
      {/* Hero Section */}
      <section className="relative py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-gold font-header text-[10px] uppercase tracking-[0.5em] mb-4 block text-glow">Cadre Réglementaire & Excellence</span>
            <h1 className="text-5xl md:text-8xl font-header font-bold italic uppercase tracking-tighter mb-8 leading-none">
              Statut <span className="gold-text-gradient">Légal</span>
            </h1>
            <p className="text-white/40 font-header uppercase tracking-[0.2em] text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
              MB SÉCURITÉ exerce son activité dans le strict respect des lois et règlements régissant la sécurité privée en France.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <LegalCard 
            icon={Landmark}
            title="Autorisation Administrative"
            content="MB SÉCURITÉ opère sous l'autorisation d'exercice N° 2026-0032214-AGD-ESP-0978198 délivrée par le CNAPS. C'est l'assurance d'un prestataire vérifié et agréé."
          />
          <LegalCard 
            icon={ShieldCheck}
            title="Assurance RC Pro"
            content="Notre entreprise est couverte par une assurance Responsabilité Civile Professionnelle à hauteur des risques encourus."
          />
          <LegalCard 
            icon={Scale}
            title="Code de Déontologie"
            content="Tous nos agents sont formés au respect du code de déontologie des activités de sécurité privée (Décret n° 2012-870)."
          />
          <LegalCard 
            icon={BadgeCheck}
            title="Conformité CNAPS"
            content="Chaque agent possède une carte professionnelle en cours de validité, vérifiée systématiquement."
          />
        </div>

        {/* Rigorous Recruitment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20 border-t border-white/5">
           <div>
              <h2 className="text-4xl font-header font-bold italic uppercase mb-8">Un Recrutement <br/><span className="gold-text-gradient">Ultra-Sélectif</span></h2>
              <p className="text-white/50 uppercase tracking-widest text-xs leading-relaxed mb-10">La qualité de nos services dépend de la qualité de nos hommes. Notre processus de recrutement garantit une fiabilité totale pour nos clients.</p>
              
              <div className="space-y-6">
                 {[
                    { t: "Vérification CNAPS", d: "Contrôle automatique de l'autorisation d'exercer." },
                    { t: "Casier Judiciaire", d: "Vérification du bulletin N°3 et moralité exemplaire." },
                    { t: "Tests d'Aptitude", d: "Mises en situation réelles et tests de réflexes." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                       <CheckCircle2 className="text-gold mt-1 shrink-0" size={18} />
                       <div>
                          <h4 className="text-sm font-header font-bold uppercase text-white mb-1">{item.t}</h4>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full"></div>
              <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop" alt="Professional Security" className="relative z-10 rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" />
           </div>
        </div>

        {/* Legal Notice Box */}
        <div className="bg-gold/5 border border-gold/20 p-12 rounded-sm max-w-5xl mx-auto text-center mt-20">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gold/10 text-gold rounded-full">
               <Gavel size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-header font-bold uppercase italic text-white mb-6 tracking-wide">Mention Obligatoire</h2>
          <p className="text-white/60 font-medium leading-relaxed italic text-lg max-w-3xl mx-auto mb-8">
            « L'autorisation d'exercice ne confère aucune prérogative de puissance publique à l'entreprise ou aux personnes qui en bénéficient. »
          </p>
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            Article L612-14 du Code de la sécurité intérieure
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-16">
              <span className="text-gold font-header text-[10px] uppercase tracking-[0.5em] mb-4 block text-glow">Plus de précisions</span>
              <h2 className="text-3xl font-header font-bold uppercase italic text-white">Foire Aux Questions <span className="gold-text-gradient">Légales</span></h2>
           </div>
           
           <div className="space-y-2">
              <FAQItem 
                question="Puis-je vérifier vos agréments ?"
                answer="Absolument. Sur simple demande, nous vous fournissons nos attestations CNAPS, KBIS et notre attestation d'assurance RC Professionnelle à jour."
              />
              <FAQItem 
                question="Vos agents sont-ils armés ?"
                answer="Nos agents interviennent dans le cadre de la législation française. Sauf mission spécifique autorisée, nos agents de surveillance n'utilisent aucun armement de catégorie B ou C."
              />
              <FAQItem 
                question="Quelle est la durée de validité d'une carte pro ?"
                answer="La carte professionnelle délivrée par le CNAPS est valable 5 ans. Nous vérifions systématiquement les recyclages (MAC) de nos collaborateurs."
              />
              <FAQItem 
                question="Comment gérez-vous les données de mes locaux ?"
                answer="Nous respectons scrupuleusement le RGPD. Toutes les informations concernant vos sites (codes d'accès, plans, vulnérabilités) sont cryptées et confidentielles."
              />
              <FAQItem 
                question="Quels diplômes possèdent vos agents ?"
                answer="Chaque agent est titulaire au minimum du CQP APS (Certificat de Qualification Professionnelle). Nos agents incendie sont diplômés SSIAP 1, 2 ou 3."
              />
           </div>
        </div>
      </section>

      {/* Expertise & Standards */}
      <section className="py-32 bg-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-header font-bold uppercase italic mb-4 text-white">Engagement de Qualité</h2>
                <div className="w-20 h-px bg-gold mx-auto"></div>
             </div>
             
             <div className="space-y-12">
                <div className="flex gap-8 group">
                   <div className="text-gold mt-1 font-bold">01.</div>
                   <div>
                      <h4 className="text-white font-header font-bold uppercase tracking-widest mb-3 group-hover:text-gold transition-colors">Transparence Totale</h4>
                      <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest font-medium">Nous fournissons à nos clients tous les documents légaux sur simple demande.</p>
                   </div>
                </div>
                <div className="flex gap-8 group">
                   <div className="text-gold mt-1 font-bold">02.</div>
                   <div>
                      <h4 className="text-white font-header font-bold uppercase tracking-widest mb-3 group-hover:text-gold transition-colors">Confidentialité</h4>
                      <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest font-medium">Le secret professionnel est au cœur de nos engagements. Vos données restent strictement confidentielles.</p>
                   </div>
                </div>
                <div className="flex gap-8 group">
                   <div className="text-gold mt-1 font-bold">03.</div>
                   <div>
                      <h4 className="text-white font-header font-bold uppercase tracking-widest mb-3 group-hover:text-gold transition-colors">Formation Continue</h4>
                      <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest font-medium">Nos agents suivent régulièrement des recyclages pour maintenir leurs compétences au plus haut niveau.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatutLegal;
