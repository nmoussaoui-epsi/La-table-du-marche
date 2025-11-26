import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, MapPin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-surface border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Column */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <p className="font-serif italic text-primary mb-2">Nous contacter</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase mb-6">RÉSERVATION</h2>
              <p className="text-gray-400 leading-loose">
                Pour une expérience gastronomique inoubliable, réservez votre table dès maintenant. 
                Pour les événements privés, veuillez nous contacter directement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-dark p-3 rounded-full text-primary border border-gray-800">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide mb-1">ADRESSE</h4>
                  <p className="text-gray-400 text-sm">12 Avenue des Champs-Élysées,<br />75008 Paris</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                 <div className="bg-dark p-3 rounded-full text-primary border border-gray-800">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide mb-1">TÉLÉPHONE</h4>
                  <p className="text-gray-400 text-sm">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                 <div className="bg-dark p-3 rounded-full text-primary border border-gray-800">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide mb-1">EMAIL</h4>
                  <p className="text-gray-400 text-sm">reservation@latabledumarche.fr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-2/3 bg-dark p-8 md:p-12 border border-gray-800 rounded-sm relative">
            <h3 className="text-xl text-white font-bold tracking-widest mb-8 border-b border-gray-800 pb-4">
              RÉSERVER UNE TABLE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider">NOM COMPLET</label>
                  <input required type="text" className="w-full bg-surface border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider">TÉLÉPHONE</label>
                  <input required type="tel" className="w-full bg-surface border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Votre numéro" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider flex items-center"><Calendar size={12} className="mr-2"/> DATE</label>
                  <input required type="date" className="w-full bg-surface border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider flex items-center"><Clock size={12} className="mr-2"/> HEURE</label>
                  <select className="w-full bg-surface border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors">
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 tracking-wider flex items-center"><Users size={12} className="mr-2"/> PERS.</label>
                  <select className="w-full bg-surface border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors">
                    <option>2 Personnes</option>
                    <option>3 Personnes</option>
                    <option>4 Personnes</option>
                    <option>5+ Personnes</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-bold tracking-widest py-4 hover:bg-amber-600 transition-colors mt-4">
                CONFIRMER LA RÉSERVATION
              </button>

              {formStatus === 'success' && (
                <div className="p-4 bg-green-900/30 border border-green-500/30 text-green-400 text-center text-sm">
                  Votre demande a été envoyée avec succès. Nous vous confirmerons par email.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};