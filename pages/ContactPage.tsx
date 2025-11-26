import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="bg-dark min-h-screen pb-24">
      <PageHeader 
        title="CONTACT & RÉSERVATION" 
        subtitle="Nous Trouver"
        bgImage="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-primary pl-4">Informations Pratiques</h3>
              <div className="space-y-6">
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Adresse</p>
                    <p>12 Avenue des Champs-Élysées<br/>75008 Paris, France</p>
                  </div>
                </div>
                <div className="flex items-start text-gray-300">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Téléphone</p>
                    <p>+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start text-gray-300">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Email</p>
                    <p>reservation@latabledumarche.fr</p>
                  </div>
                </div>
                <div className="flex items-start text-gray-300">
                  <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Horaires</p>
                    <p>Lun - Ven : 12h - 14h30 | 19h - 23h</p>
                    <p>Sam : 19h - 00h</p>
                    <p>Dim : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-surface flex items-center justify-center rounded-full text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-surface flex items-center justify-center rounded-full text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-surface flex items-center justify-center rounded-full text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>

            {/* Fake Map */}
            <div className="w-full h-64 bg-gray-800 rounded-sm overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1931&auto=format&fit=crop" 
                alt="Map location placeholder" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-primary text-white px-6 py-2 text-xs font-bold tracking-widest shadow-lg">
                  VOIR SUR GOOGLE MAPS
                </button>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-surface p-8 md:p-12 border border-gray-800">
            <h3 className="text-2xl font-serif font-bold text-white mb-8">Réserver une Table</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider">NOM</label>
                  <input type="text" required className="w-full bg-dark border border-gray-700 text-white px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider">PRÉNOM</label>
                  <input type="text" required className="w-full bg-dark border border-gray-700 text-white px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 tracking-wider">EMAIL</label>
                <input type="email" required className="w-full bg-dark border border-gray-700 text-white px-4 py-3 focus:border-primary focus:outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 tracking-wider">TÉLÉPHONE</label>
                <input type="tel" required className="w-full bg-dark border border-gray-700 text-white px-4 py-3 focus:border-primary focus:outline-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider">DATE</label>
                  <input type="date" required className="w-full bg-dark border border-gray-700 text-white px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider">HEURE</label>
                  <select className="w-full bg-dark border border-gray-700 text-white px-4 py-3 focus:border-primary focus:outline-none">
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider">PERSONNES</label>
                  <select className="w-full bg-dark border border-gray-700 text-white px-4 py-3 focus:border-primary focus:outline-none">
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 tracking-wider">MESSAGE (OPTIONNEL)</label>
                <textarea rows={4} className="w-full bg-dark border border-gray-700 text-white px-4 py-3 focus:border-primary focus:outline-none"></textarea>
              </div>

              <button className="w-full bg-primary hover:bg-amber-600 text-white font-bold py-4 tracking-widest transition-colors">
                CONFIRMER LA DEMANDE
              </button>
              
              {formStatus === 'success' && (
                <div className="text-center p-4 bg-green-900/30 text-green-400 border border-green-500/30 mt-4">
                  Demande envoyée avec succès. Nous vous contacterons rapidement.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};