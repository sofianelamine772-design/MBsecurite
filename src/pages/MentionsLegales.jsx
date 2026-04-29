import React from 'react';
import { ChevronLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentionsLegales = () => {
  return (
    <div className="bg-dark min-h-screen text-white font-content pt-32 pb-20 selection:bg-gold selection:text-black">
      <div className="container mx-auto px-6 max-w-4xl pt-10">
        <header className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
             <Shield className="text-gold" size={30} />
             <div className="h-[1px] flex-grow bg-gold/20"></div>
          </div>
          <h1 className="text-4xl md:text-7xl font-header font-bold italic tracking-tighter uppercase">Mentions <span className="text-gold">Légales</span></h1>
        </header>

        <div className="space-y-16 prose prose-invert max-w-none opacity-80">
          <section>
            <h2 className="text-2xl font-header text-gold mb-6 uppercase tracking-widest italic">1. ÉDITION DU SITE</h2>
            <p className="text-lg leading-relaxed">
              Le présent site, accessible à l'URL <span className="text-white font-bold">mbsecurite.com</span> (le « Site »), est édité par :
            </p>
            <ul className="list-none space-y-2 mt-4 border-l-2 border-gold/20 pl-6">
              <li><span className="text-gold font-bold">MB SÉCURITÉ</span></li>
              <li>Forme juridique : SASU</li>
              <li>Siège social : Saint-Gaudens, 31800</li>
              <li>Numéro SIREN : 99035090200013</li>

              <li>Directeur de la publication : MB Sécurité</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-header text-gold mb-6 uppercase tracking-widest italic">2. HÉBERGEMENT</h2>
            <p className="text-lg leading-relaxed">
              Le Site est hébergé par la société <span className="text-white font-bold">O2Switch</span>, situé 222-224 Boulevard Gustave Flaubert 63000 Clermont-Ferrand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-header text-gold mb-6 uppercase tracking-widest italic">3. PROPRIÉTÉ INTELLECTUELLE</h2>
            <p className="text-lg leading-relaxed">
              L'ensemble des contenus présents sur le Site (logos, textes, images, vidéos, icônes) sont la propriété exclusive de MB SÉCURITÉ ou de ses partenaires. Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments du Site est strictement interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-header text-gold mb-6 uppercase tracking-widest italic">4. DONNÉES PERSONNELLES</h2>
            <p className="text-lg leading-relaxed">
              MB SÉCURITÉ s'engage à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD). Vous disposez d'un droit d'accès, de rectification et d'opposition aux données vous concernant en nous contactant à : <span className="text-gold">contact@mbsecurite.fr</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-header text-gold mb-6 uppercase tracking-widest italic">5. CONTACT</h2>
            <p className="text-lg leading-relaxed mb-10">
              Pour toute question relative au Site ou aux services proposés, vous pouvez nous contacter :
            </p>
             <div className="bg-dark-card border border-gold/20 p-8 rounded-sm">
                <p className="mb-2 uppercase font-header text-xs tracking-widest text-white/40">Téléphone</p>
                <p className="text-2xl font-header text-white mb-6 italic font-bold">06 68 07 21 41</p>
                <p className="mb-2 uppercase font-header text-xs tracking-widest text-white/40">Email</p>
                <p className="text-xl font-header text-gold italic font-bold">contact@mbsecurite.fr</p>
             </div>
          </section>

          <section>
            <h2 className="text-2xl font-header text-gold mb-6 uppercase tracking-widest italic">6. RÉGLEMENTATION</h2>
            <p className="text-lg leading-relaxed border-l-2 border-gold/20 pl-6 italic">
              L'article L612-14 du code de la sécurité intérieure dispose que : "L'autorisation d'exercice ne confère aucune prérogative de puissance publique à l'entreprise ou aux personnes qui en bénéficient."
            </p>
          </section>
        </div>

        <footer className="mt-32 pt-10 border-t border-white/5 opacity-40 text-center text-xs font-header tracking-[0.4em] uppercase">
          MB SÉCURITÉ &copy; 2026 - VIGILANCE & PROFESSIONNALISME
        </footer>
      </div>
    </div>
  );
};

export default MentionsLegales;
