import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-serif italic text-gray-400 text-lg mb-2">Moments Spéciaux</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">À Propos de Nous</h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Image */}
          <div className="h-96 lg:h-[600px] overflow-hidden relative group">
             <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" // High end food plating
              alt="Plat signature" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 hover:opacity-100"
            />
          </div>

          {/* Center Content */}
          <div className="bg-dark p-8 md:p-12 h-full flex flex-col justify-center items-center text-center border border-gray-800">
            <p className="font-serif italic text-primary mb-4">Perception du goût</p>
            <h3 className="text-3xl font-sans font-bold text-white mb-6 leading-tight">
              TRADITION &<br />MODERNITÉ
            </h3>
            <p className="text-gray-400 text-sm leading-loose mb-8">
              Situé au cœur de la ville, La Table du Marché revisite les classiques de la gastronomie française. 
              Notre chef sélectionne chaque matin les meilleurs produits pour vous offrir une expérience culinaire authentique et surprenante.
            </p>
            <Link to="/gallery" className="px-8 py-3 bg-primary text-white text-xs font-bold tracking-widest hover:bg-amber-600 transition-colors">
              VOIR LA GALERIE
            </Link>
          </div>

          {/* Right Image */}
          <div className="h-96 lg:h-[600px] overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop" // Chef concentration
              alt="Chef en cuisine" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 hover:opacity-100"
            />
          </div>

        </div>
      </div>
    </section>
  );
};