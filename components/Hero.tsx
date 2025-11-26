import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
          alt="Restaurant Interior Gastronomic"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <p className="font-serif italic text-gray-300 text-lg md:text-2xl mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Bienvenue dans notre coin délicieux
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide uppercase animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Au Cœur des Saveurs
        </h1>
        <p className="max-w-2xl text-gray-300 text-sm md:text-base mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Découvrez une cuisine passionnée, où chaque plat raconte une histoire. 
          Des produits frais, une cuisson maîtrisée, et une ambiance inoubliable.
        </p>
        <Link 
          to="/menu"
          className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-bold tracking-widest animate-fade-in-up" 
          style={{ animationDelay: '0.8s' }}
        >
          DÉCOUVRIR LE MENU
        </Link>
      </div>
    </section>
  );
};