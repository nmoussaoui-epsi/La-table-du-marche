import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0c0e] text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-serif font-bold tracking-wider text-white block mb-6">
              LA TABLE DU MARCHÉ
            </Link>
            <p className="text-gray-500 text-sm leading-loose mb-6">
              Une expérience gastronomique inoubliable au cœur de la ville. 
              Tradition, modernité et passion dans chaque assiette.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold tracking-widest mb-6 text-primary">HORAIRES</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span>18:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-primary">Fermé</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold tracking-widest mb-6 text-primary">CONTACT</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary shrink-0" />
                <span>12 Avenue des Champs-Élysées,<br />75008 Paris, France</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary shrink-0" />
                <span>reservation@latabledumarche.fr</span>
              </li>
            </ul>
          </div>

           {/* Newsletter */}
           <div>
            <h4 className="text-lg font-bold tracking-widest mb-6 text-primary">NEWSLETTER</h4>
            <p className="text-gray-500 text-sm mb-4">Inscrivez-vous pour recevoir nos offres spéciales.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-surface border border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white px-4 py-3 text-xs font-bold tracking-widest hover:bg-amber-600 transition-colors">
                S'ABONNER
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} La Table du Marché. Tous droits réservés.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};