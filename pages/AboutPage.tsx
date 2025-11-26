import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Users, Award, Leaf } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen">
      <PageHeader 
        title="NOTRE HISTOIRE" 
        subtitle="Tradition & Passion"
        bgImage="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
      />

      {/* Story Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-white">Depuis 1985</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-gray-400 leading-loose">
              Tout a commencé avec une vision simple : apporter le goût authentique du terroir au cœur de la ville. 
              Fondé par Jean-Pierre Dubois, La Table du Marché était à l'origine un petit bistrot de quartier.
            </p>
            <p className="text-gray-400 leading-loose">
              Aujourd'hui, repris par son fils Louis, le restaurant a évolué vers une cuisine gastronomique tout en 
              conservant son âme chaleureuse. Chaque plat raconte une histoire, celle de nos producteurs locaux 
              et de notre amour pour les produits de saison.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block text-4xl font-bold text-primary mb-2">35+</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Années d'expérience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-primary mb-2">15</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Chefs Passionnés</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Restaurant Interior" 
              className="w-full rounded-sm shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-2/3 bg-surface p-6 border-l-4 border-primary shadow-lg hidden md:block">
              <p className="font-serif italic text-gray-300">"La cuisine est l'art de transformer l'instant en souvenir."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-serif italic text-primary mb-2">Notre Philosophie</p>
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest">NOS VALEURS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-dark p-8 text-center group hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-primary/50">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Produits Frais</h3>
              <p className="text-gray-500 leading-relaxed">
                Nous travaillons exclusivement avec des producteurs locaux et des produits de saison pour garantir une fraîcheur absolue.
              </p>
            </div>
            
            <div className="bg-dark p-8 text-center group hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-primary/50">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-500 leading-relaxed">
                De la cuisine au service, nous visons la perfection dans chaque détail pour vous offrir une expérience étoilée.
              </p>
            </div>
            
            <div className="bg-dark p-8 text-center group hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-primary/50">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Convivialité</h3>
              <p className="text-gray-500 leading-relaxed">
                Plus qu'un restaurant, nous sommes une maison où chaque client est accueilli comme un membre de la famille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white uppercase tracking-widest">LE CHEF & L'ÉQUIPE</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 bg-surface p-8 md:p-0 overflow-hidden rounded-sm">
          <div className="w-full md:w-1/2 h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2070&auto=format&fit=crop" 
              alt="Chef Executive" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:p-12">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Louis Dubois</h3>
            <p className="text-primary text-sm font-bold tracking-widest mb-6">CHEF EXÉCUTIF</p>
            <p className="text-gray-400 leading-loose mb-8">
              Formé dans les plus grandes maisons parisiennes, Louis apporte sa touche créative aux classiques français. 
              "La cuisine ne se mesure pas en ingrédients, mais en émotions", aime-t-il répéter.
            </p>
            <div className="flex space-x-4">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Sous Chef" className="w-16 h-16 rounded-full object-cover border-2 border-dark grayscale hover:grayscale-0 transition-all" title="Sarah - Sous Chef" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Sommelier" className="w-16 h-16 rounded-full object-cover border-2 border-dark grayscale hover:grayscale-0 transition-all" title="Marc - Sommelier" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};