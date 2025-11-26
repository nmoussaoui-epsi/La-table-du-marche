import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';

type Category = 'entrees' | 'plats' | 'desserts' | 'vins';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}

const menuData: Record<Category, MenuItem[]> = {
  entrees: [
    { name: "Foie Gras de Canard Maison", description: "Chutney de figues, toast brioché, fleur de sel de Guérande.", price: "28€", tags: ["Signature"] },
    { name: "Carpaccio de Saint-Jacques", description: "Huile de truffe blanche, zestes de citron vert, baies roses.", price: "24€" },
    { name: "Velouté de Potimarron", description: "Éclats de châtaignes, crème fouettée au lard fumé.", price: "18€", tags: ["Saison"] },
    { name: "Oeuf Parfait Bio", description: "Crème de champignons sauvages, mouillettes au beurre demi-sel.", price: "16€", tags: ["Végétarien"] },
  ],
  plats: [
    { name: "Filet de Bœuf Rossini", description: "Poêlé au foie gras, sauce périgourdine, pommes dauphines maison.", price: "42€", tags: ["Best Seller"] },
    { name: "Risotto aux Gambas", description: "Riz Carnaroli, safran, parmesan 24 mois, bisque crémeuse.", price: "34€" },
    { name: "Dos de Cabillaud Rôti", description: "Mousseline de petits pois, beurre blanc au citron confit.", price: "32€" },
    { name: "Magret de Canard au Miel", description: "Miel de lavande, légumes racines rôtis, jus corsé.", price: "36€" },
    { name: "Ravioles à la Truffe", description: "Crème légère, copeaux de truffe noire, roquette.", price: "29€", tags: ["Végétarien"] },
  ],
  desserts: [
    { name: "Paris-Brest Revisité", description: "Crème praliné, choux craquelin, cœur coulant noisette.", price: "14€" },
    { name: "Moelleux au Chocolat Noir", description: "Cœur coulant Guanaja 70%, glace vanille Bourbon.", price: "13€" },
    { name: "Tarte Fine aux Pommes", description: "Servie tiède, caramel beurre salé, crème fraîche.", price: "12€" },
    { name: "Plateau de Fromages Affinés", description: "Sélection de notre fromager, confiture de cerises noires.", price: "16€" },
  ],
  vins: [
    { name: "Château Margaux 2015", description: "Premier Grand Cru Classé, Bordeaux.", price: "450€" },
    { name: "Chablis Grand Cru 'Les Clos'", description: "Domaine William Fèvre, Bourgogne blanc.", price: "120€" },
    { name: "Côte-Rôtie 'La Landonne'", description: "E.Guigal, Vallée du Rhône.", price: "380€" },
    { name: "Sancerre 'Le Chêne Marchand'", description: "Domaine Lucien Crochet, Loire.", price: "65€" },
    { name: "Champagne Ruinart Blanc de Blancs", description: "Notes d'agrumes et de fleurs blanches.", price: "110€" },
  ]
};

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('plats');

  return (
    <div className="bg-dark min-h-screen pb-24">
      <PageHeader 
        title="NOTRE CARTE" 
        subtitle="Saveurs de Saison"
        bgImage="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop" 
      />

      <div className="container mx-auto px-6 py-16">
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(Object.keys(menuData) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 border border-primary ${
                activeCategory === cat 
                  ? 'bg-primary text-white' 
                  : 'bg-transparent text-primary hover:bg-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto animate-fade-in-up">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <span className="text-primary font-bold text-lg ml-4">{item.price}</span>
              </div>
              <p className="text-gray-400 text-sm italic mb-3">{item.description}</p>
              {item.tags && (
                <div className="flex gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase tracking-wider bg-gray-800 text-gray-300 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
            * Nos plats sont faits maison et peuvent contenir des allergènes. Veuillez informer notre personnel. <br/>
            Prix nets en euros, service compris.
          </p>
        </div>

      </div>
    </div>
  );
};