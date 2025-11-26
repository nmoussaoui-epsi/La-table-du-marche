import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sophie Martin",
    role: "Critique culinaire amateur",
    content: "Une expérience inoubliable. Le mélange des saveurs est audacieux mais parfaitement maîtrisé. Le service est digne des plus grands étoilés.",
    rating: 5
  },
  {
    name: "Jean Dupont",
    role: "Client régulier",
    content: "Le 'Best Roasted Rumsteak' est tout simplement le meilleur que j'ai mangé à Paris. L'ambiance est chaleureuse et élégante.",
    rating: 5
  },
  {
    name: "Marie & Thomas",
    role: "Dîner romantique",
    content: "Nous avons fêté notre anniversaire ici. Tout était parfait, de l'accueil au dessert. Mention spéciale pour la carte des vins.",
    rating: 5
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-serif italic text-primary mb-2">Témoignages</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">CE QU'ILS DISENT DE NOUS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-surface p-8 md:p-10 border border-gray-800 rounded-lg relative group hover:border-primary/50 transition-colors duration-300">
              <Quote className="absolute top-6 right-6 text-gray-700 w-10 h-10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-gray-300 italic leading-relaxed mb-8 min-h-[80px]">
                "{review.content}"
              </p>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-primary font-serif font-bold text-lg mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{review.name.toUpperCase()}</h4>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};