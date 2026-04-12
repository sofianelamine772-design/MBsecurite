import React, { useState } from 'react';
import { ChevronLeft, MapPin, Check, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

const cities = [
  "Toulouse", "Colomiers", "Tournefeuille", "Blagnac", "Muret",
  "Plaisance-du-Touch", "Cugnaux", "Balma", "L'Union", "Castanet-Tolosan",
  "Saint-Orens-de-Gameville", "Saint-Gaudens", "Revel", "Auterive", "Léguevin",
  "Fonsorbes", "Grenade", "Castelginest", "Villeneuve-Tolosane", "Pibrac",
  "Montréjeau", "Lannemezan", "Trie-sur-Baïse", "Boulogne-sur-Gesse", "Saint-Blancard",
  "Arreau", "Saint-Lary-Soulan", "Loudenvielle", "Bagnères-de-Bigorre", "Bagnères-de-Luchon",
  "Saint-Béat", "Aspet", "Salies-du-Salat", "Foix", "Saint-Girons",
  "Aurignac", "Martres-Tolosane", "Cazères"
];

const LieuxIntervention = () => {
  return (
    <div className="bg-dark min-h-screen text-white font-content selection:bg-gold selection:text-black">
      {/* Hero Section for Zones */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src="/zones-bg.png" alt="Haute-Garonne Security" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-transparent to-dark"></div>
         </div>
         
         <div className="container relative z-10 mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                 <div className="h-[1px] w-12 bg-gold/30"></div>
                 <MapPin className="text-gold" size={32} />
                 <div className="h-[1px] w-12 bg-gold/30"></div>
              </div>
              <h1 className="text-4xl md:text-7xl font-header font-bold italic tracking-tighter uppercase mb-6 leading-none">Zones d'<span className="text-gold">Intervention</span></h1>
              <p className="text-white/60 font-header uppercase tracking-[0.2em] text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
                MB SÉCURITÉ déploie ses agents sur l'ensemble de la Haute-Garonne (31). <br/> Une vigilance totale de Toulouse au Comminges.
              </p>
            </motion.div>
         </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl -mt-20 relative z-20">

        {/* Pricing Info Banner */}
        <div className="bg-dark-card border border-gold/20 p-8 md:p-12 mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="text-2xl font-header text-gold mb-4 uppercase italic">Tarification Flexible</h2>
              <p className="text-white/60 leading-relaxed max-w-xl">
                Parce que chaque mission est unique, nos tarifs sont adaptés en fonction du lieu d'intervention et de la distance parcourue depuis nos bases. Nous couvrons **le 31 sans exception** pour garantir votre protection.
              </p>
            </div>
            <a href="tel:0634394254" className="bg-gold hover:bg-white text-black px-10 py-5 rounded-sm font-header font-bold text-xs tracking-[0.2em] uppercase transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              Demander un devis
            </a>
          </div>
        </div>

        {/* Main Cities Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {cities.map((city, idx) => {
            const slug = city.toLowerCase().replace(/ /g, '-').replace(/'/g, '-');
            return (
              <Link 
                key={idx} 
                to={`/zones-intervention/${slug}`}
                className="bg-white/5 border border-white/5 hover:border-gold/30 p-6 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_gold]"></div>
                  <span className="font-header font-bold uppercase tracking-widest text-xs md:text-sm group-hover:text-gold transition-colors">{city}</span>
                </div>
                <Check size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-gold font-header text-xs tracking-[0.5em] uppercase mb-4">FAQ</h2>
            <h3 className="text-3xl font-header font-bold uppercase italic">Questions Fréquentes</h3>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm">
            <FAQItem 
              question="Intervenez-vous dans tout le département ?" 
              answer="Oui, MB SÉCURITÉ couvre l'intégralité de la Haute-Garonne (31). Que vous soyez à Toulouse, dans le Comminges ou le Lauragais, nos agents se déplacent partout sans exception." 
            />
            <FAQItem 
              question="Quels sont les délais d'intervention ?" 
              answer="La réactivité est notre priorité. Pour une intervention sur alarme, les délais dépendent de la distance, mais nous optimisons nos patrouilles pour une réponse ultra-rapide 24h/24." 
            />
            <FAQItem 
              question="Comment sont calculés les tarifs ?" 
              answer="Nos tarifs sont variables et transparents. Ils prennent en compte la nature de la mission (gardiennage fixe, événementiel, intervention mobile) et la distance depuis nos bases logistiques." 
            />
            <FAQItem 
              question="Êtes-vous agréés par le CNAPS ?" 
              answer="Absolument. MB SÉCURITÉ est titulaire d'une autorisation d'exercer délivrée par le CNAPS. Tous nos agents possèdent une carte professionnelle à jour après vérification de leurs aptitudes." 
            />
            <FAQItem 
              question="Proposez-vous des services 24h/24 et 7j/7 ?" 
              answer="La sécurité n'attend pas. Nous assurons une vigilance totale, de jour comme de nuit, tous les jours de l'année, y compris les week-ends et jours fériés." 
            />
          </div>
        </div>

        {/* Full Department Note */}
        <div className="text-center p-12 border-t border-white/5 opacity-80 italic max-w-2xl mx-auto">
          <p className="text-sm text-white/40">
            "Nous intervenons sur l'intégralité des 586 communes de la Haute-Garonne. Que vous soyez en zone urbaine à Toulouse ou en zone rurale dans le Comminges, MB SÉCURITÉ assure votre vigilance."
          </p>
        </div>

        {/* Global Footer will be displayed below */}
      </div>
    </div>
  );
};

export default LieuxIntervention;
