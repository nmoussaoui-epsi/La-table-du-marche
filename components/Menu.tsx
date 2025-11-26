import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    name: "Fines Tartare Steak",
    description: "Bœuf charolais coupé au couteau, assaisonnement traditionnel, jaune d'œuf confit.",
    price: 50,
    category: 'starter'
  },
  {
    name: "Creamy Chicken Soup",
    description: "Velouté de volaille fermière, crème d'Isigny, croûtons à l'ail et herbes fraîches.",
    price: 60,
    category: 'starter'
  },
  {
    name: "Boiled Eggs on Toast",
    description: "Œufs mollets sur pain de campagne toasté, copeaux de truffe noire, beurre demi-sel.",
    price: 120,
    category: 'main'
  },
  {
    name: "Best Roasted Rumsteak",
    description: "Cœur de rumsteak rôti au thym, pommes grenailles, jus corsé au vin rouge.",
    price: 150,
    category: 'main'
  },
  {
    name: "Risotto & Mushrooms",
    description: "Riz Arborio crémeux, mélange forestier, parmesan Reggiano 24 mois.",
    price: 90,
    category: 'main'
  }
];

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="bg-dark py-24 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image - Chef Plating */}
          <div className="relative h-[600px] lg:h-[800px] w-full overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
              alt="Plat gastronomique" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/50 to-transparent"></div>
          </div>

          {/* Right Menu Content */}
          <div className="lg:pl-10">
            <p className="font-serif italic text-gray-400 text-lg mb-2">Notre cuisine saine</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase mb-12">
              NOS SPÉCIALITÉS
            </h2>

            <div className="space-y-10">
              {menuItems.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg md:text-xl font-bold tracking-wide text-gray-100 group-hover:text-primary transition-colors">
                      {item.name.toUpperCase()}
                    </h4>
                    
                    {/* Dotted Line Connector */}
                    <div className="flex-grow border-b border-dotted border-gray-600 mx-4 relative -top-1"></div>
                    
                    <span className="text-primary font-bold text-lg">${item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm italic">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/contact" className="px-8 py-3 bg-primary hover:bg-amber-600 text-white text-xs font-bold tracking-widest transition-colors duration-300">
                RÉSERVER UNE TABLE
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};