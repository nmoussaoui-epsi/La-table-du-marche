import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", cat: "plats", alt: "Dressage" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", cat: "lieu", alt: "Intérieur" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop", cat: "plats", alt: "Entrée" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", cat: "plats", alt: "Saumon" },
  { src: "https://images.unsplash.com/photo-1550966871-3ed3c6221741?q=80&w=2070&auto=format&fit=crop", cat: "lieu", alt: "Ambiance Soir" },
  { src: "https://images.unsplash.com/photo-1563551342-787ca2196817?q=80&w=2070&auto=format&fit=crop", cat: "events", alt: "Privatisation" },
  { src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop", cat: "plats", alt: "Dessert" },
  { src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop", cat: "events", alt: "Mariage" },
  { src: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?q=80&w=2070&auto=format&fit=crop", cat: "lieu", alt: "Service" },
];

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.cat === filter);

  return (
    <div className="bg-dark min-h-screen pb-24">
      <PageHeader 
        title="GALERIE" 
        subtitle="L'Art Visuel"
        bgImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
      />

      <div className="container mx-auto px-6 py-16">
        {/* Filters */}
        <div className="flex justify-center space-x-4 md:space-x-8 mb-16">
          {['all', 'plats', 'lieu', 'events'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-bold tracking-widest uppercase pb-2 transition-colors ${
                filter === cat 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'Tout' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="relative group h-80 overflow-hidden cursor-pointer">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-serif italic text-2xl">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};