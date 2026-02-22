import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Users, Activity, FileSearch, Baby, Accessibility } from 'lucide-react';

const ServiceShortcuts: React.FC = () => {
  const location = useLocation();
  
  const links = [
    {
      path: '/previdenciario',
      label: 'Direito Previdenciário',
      icon: <ArrowRight size={20} />,
      className: 'bg-blue-600 hover:bg-blue-700 text-white',
      type: 'standard'
    },
    {
      path: '/civel',
      label: 'Direito Cível & Família',
      icon: <Users size={20} />,
      className: 'bg-purple-600 hover:bg-purple-700 text-white',
      type: 'standard'
    },
    {
      path: '/saude',
      label: 'Direito à Saúde',
      icon: <Activity size={20} />,
      className: 'bg-teal-600 hover:bg-teal-700 text-white',
      type: 'standard'
    },
    {
      path: '/bpc-loas',
      label: 'BPC/LOAS',
      title: 'QUEM TEM DIREITO?',
      subtitle: 'AO BPC/LOAS',
      icon: <FileSearch size={24} />,
      className: 'bg-gradient-to-r from-blue-700 via-blue-500 to-teal-400 hover:from-blue-600 hover:via-blue-400 hover:to-teal-300 text-white',
      type: 'complex'
    },
    {
      path: '/salario-maternidade',
      label: 'Salário Maternidade',
      title: 'QUEM TEM DIREITO?',
      subtitle: 'SALÁRIO MATERNIDADE',
      icon: <Baby size={24} />,
      className: 'bg-gradient-to-r from-pink-700 via-pink-500 to-amber-500 hover:from-pink-600 hover:via-pink-400 hover:to-amber-400 text-white',
      type: 'complex'
    },
    {
      path: '/aposentadoria-pcd',
      label: 'Aposentadoria PCD',
      title: 'REQUISITOS E REGRAS',
      subtitle: 'APOSENTADORIA PCD',
      icon: <Accessibility size={24} />,
      className: 'bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-500 hover:from-indigo-600 hover:via-purple-500 hover:to-blue-400 text-white',
      type: 'complex'
    }
  ];

  // Filter out the current page link
  const visibleLinks = links.filter(link => link.path !== location.pathname);

  if (visibleLinks.length === 0) return null;

  return (
    <section className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-heading font-bold text-primary mb-6 text-center md:text-left">Veja também outras áreas de atuação:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-stretch">
          {visibleLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`${link.className} font-bold p-4 rounded-md shadow-md transition-all flex items-center justify-between gap-3 border-2 border-transparent hover:scale-[1.02]`}
            >
              {link.type === 'standard' ? (
                <>
                  <span className="text-sm font-heading uppercase tracking-wide">{link.label}</span>
                  {link.icon}
                </>
              ) : (
                <>
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] font-bold tracking-wider opacity-90 uppercase mb-1">{link.title}</span>
                    <span className="text-sm font-extrabold tracking-wide uppercase">{link.subtitle}</span>
                  </div>
                  {link.icon}
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShortcuts;