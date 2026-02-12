import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterForm: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <section className="bg-primary-dark text-white py-12 border-t border-secondary/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {isSubscribed ? (
          <div className="animate-fade-in bg-white/10 p-6 rounded-lg border border-green-400/50 inline-block">
            <div className="flex items-center justify-center gap-3 mb-2 text-green-400">
              <CheckCircle size={32} />
              <h3 className="text-2xl font-heading font-bold">Bem-vindo!</h3>
            </div>
            <p className="text-gray-200">
              Você foi inscrito com sucesso. Você receberá informações jurídicas e atualizações legais.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold mb-2">Fique Atualizado</h2>
              <p className="text-gray-300">Receba informações jurídicas e atualizações legais diretamente no seu email.</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Seu nome (opcional)" 
                  className="w-full p-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input 
                  type="email" 
                  placeholder="seu.email@exemplo.com" 
                  required
                  className="w-full p-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <label className="flex items-start gap-2 text-left cursor-pointer group">
                  <input type="checkbox" required className="mt-1 accent-secondary" />
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    Aceito receber informações jurídicas e atualizações legais de interesse.
                  </span>
                </label>
                <button 
                  type="submit" 
                  className="w-full bg-[#B1915E] hover:bg-[#8f744a] text-white font-bold py-3 rounded transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <Mail size={18} /> INSCREVER-SE
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsletterForm;