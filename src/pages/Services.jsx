import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Flame, Dog, UserCheck, Bell, Zap, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceSection = ({ title, subtitle, description, icon: Icon, points, image, reverse = false }) => {
  return (
    <section className={`py-24 border-b border-white/5 bg-dark relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gold/10 text-gold border border-gold/20 rounded-sm">
                <Icon size={32} />
              </div>
              <span className="text-gold font-header text-sm tracking-[0.3em] uppercase">{subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-header font-bold mb-8 italic uppercase text-white">
              {title}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80 group">
                  <CheckCircle2 size={18} className="text-gold group-hover:scale-125 transition-transform" />
                  <span className="font-header text-xs uppercase tracking-wider">{point}</span>
                </li>
              ))}
            </ul>
            <a 
              href="mailto:mbsecurite31@gmail.com" 
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-all font-header text-sm font-bold uppercase tracking-widest border-b border-gold/20 pb-2 group"
            >
              Demander un devis
              <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full"></div>
            <div className="relative z-10 border border-white/10 p-2 bg-white/5 rounded-sm overflow-hidden group shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="absolute inset-0 border border-gold/20 m-4 pointer-events-none opacity-40"></div>
              <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-gold/40 pointer-events-none"></div>
              <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-gold/40 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const allServices = [
    {
      title: "Sécurité Incendie",
      subtitle: "Prévention & SSI",
      icon: Flame,
      description: "La prévention et la lutte contre l'incendie sont au cœur de nos priorités. Nos agents SSIAP sont formés pour intervenir sur tout type d'établissement recevant du public ou immeuble de grande hauteur.",
      points: [
        "Agents SSIAP 1, 2 et 3",
        "Rondes de surveillance",
        "Exploitation du SSI",
        "Alerte et évacuation"
      ],
      image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Gardiennage",
      subtitle: "Surveillance & Protection",
      icon: Shield,
      description: "Une présence physique permanente ou ponctuelle pour sécuriser vos infrastructures. Nos agents assurent la surveillance de vos locaux contre le vol, le vandalisme et les intrusions.",
      points: [
        "Agents de surveillance",
        "Rondes régulières",
        "Accueil et filtrage",
        "Ouverture/Fermeture de sites"
      ],
      image: "https://images.unsplash.com/photo-1454165833267-028733276cd8?q=80&w=1200&auto=format&fit=crop",
      reverse: true
    },
    {
      title: "Équipe Cynophile",
      subtitle: "Conducteur & Chien",
      icon: Dog,
      description: "Le binôme homme-chien constitue une force de dissuasion inégalée. Nous intervenons pour la protection de sites industriels, de chantiers ou de zones privées sensibles.",
      points: [
        "Maîtres-chiens diplômés",
        "Surveillance périmétrique",
        "Dissuasion active",
        "Détection d'intrusion"
      ],
      image: "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Intervention",
      subtitle: "Réponse sur Alarme",
      icon: Zap,
      description: "Suite au déclenchement d'une alarme sur votre site, nos agents mobiles interviennent en un temps record pour effectuer une levée de doute physique et prendre les mesures nécessaires.",
      points: [
        "Levée de doute physique",
        "Intervention rapide",
        "Rapport détaillé",
        "Appel des forces de l'ordre"
      ],
      image: "https://images.unsplash.com/photo-1621525540141-893ec245ae27?q=80&w=1200&auto=format&fit=crop",
      reverse: true
    },
    {
      title: "Événementiel",
      subtitle: "Manifestations & VIP",
      icon: UserCheck,
      description: "Assurez le succès de vos manifestations culturelles, sportives ou privées. Nos agents gèrent les flux de personnes, les contrôles d'accès et la sécurisation globale de l'événement.",
      points: [
        "Contrôle d'accès & filtrage",
        "Palpations de sécurité",
        "Gestion des foules",
        "Protection VIP"
      ],
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Services Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-28 pb-12">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
             <img src="/hero-bg.png" alt="Background" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#0A0B0D_100%)] opacity-80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 border border-gold/30 text-gold text-[10px] font-header uppercase tracking-[0.4em] mb-6 bg-gold/5">
              Expertise & Protection
            </span>
            <h1 className="text-5xl md:text-8xl font-header font-bold italic uppercase tracking-tighter mb-8">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-gold-dark">Services</span>
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto font-header uppercase tracking-[0.2em] text-xs md:text-sm leading-relaxed mb-6">
              Une gamme complète de solutions de sécurité sur-mesure pour les professionnels et les particuliers en Occitanie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      {allServices.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}

      {/* CTA Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-header font-bold mb-10 italic uppercase">
              Besoin d'une solution <br/> <span className="text-gold">particulière</span> ?
            </h2>
            <p className="text-white/60 mb-12 text-lg">
              Nos experts sont à votre disposition pour analyser vos besoins et vous proposer un plan de sécurité adapté.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:0668072141" className="bg-gold text-black px-12 py-5 font-header font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:translate-y-[-5px] transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                <Phone size={18} />
                06 68 07 21 41
              </a>
              <Link to="/zones-intervention" className="border border-white/20 hover:border-gold/50 px-12 py-5 font-header font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 transition-all">
                Nos zones d'intervention
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
