import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, Accessibility } from 'lucide-react';

const CalculatorShortcuts: React.FC = () => {
  return (
    <section className="py-16 bg-background-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Ferramentas e Informações para Seus Direitos</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
          
          {/* Aposentadoria PCD Card */}
          <Link 
            to="/aposentadoria-pcd" 
            className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-sm border border-gray-100 hover:border-secondary hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Accessibility size={40} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 font-heading group-hover:text-secondary transition-colors">
              Aposentadoria PCD
            </h3>
            <p className="text-text-light mb-8 leading-relaxed">
              Entenda como funciona a redução no tempo de contribuição e as regras atualizadas.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full font-bold shadow-md group-hover:bg-secondary-dark transition-colors">
              Saiba Mais <ArrowRight size={18} />
            </span>
          </Link>

          {/* BPC/LOAS Card */}
          <Link 
            to="/bpc-loas" 
            className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-sm border border-gray-100 hover:border-secondary hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UserCheck size={40} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 font-heading group-hover:text-secondary transition-colors">
              BPC/LOAS
            </h3>
            <p className="text-text-light mb-8 leading-relaxed">
              Verifique se você ou seu familiar tem direito ao benefício de um salário mínimo. Entenda os requisitos.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full font-bold shadow-md group-hover:bg-secondary-dark transition-colors">
              Verificar Direito <ArrowRight size={18} />
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CalculatorShortcuts;
