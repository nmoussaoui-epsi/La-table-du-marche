import React from 'react';

export const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
      alt: "Table gastronomique",
      class: "md:col-span-2 md:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2070&auto=format&fit=crop",
      alt: "Cocktail signature",
      class: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      alt: "Ambiance restaurant",
      class: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      alt: "Chef dressant une assiette",
      class: "md:col-span-1 md:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop",
      alt: "Dessert raffiné",
      class: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1600&auto=format&fit=crop",
      alt: "Plat végétarien raffiné",
      class: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-serif italic text-primary mb-2">L'Art de la Table</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">GALERIE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <div key={index} className={`relative overflow-hidden group rounded-sm ${img.class}`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer opacity-90 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif italic text-lg tracking-wide">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};