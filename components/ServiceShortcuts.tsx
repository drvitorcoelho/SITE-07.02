import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Activity, FileSearch, Baby, Accessibility } from 'lucide-react';

const ServiceShortcuts: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Direito Previdenciário - Large Blue Button */}
            <Link to="/previdenciario" className="bg-[#1a56db] hover:bg-[#1545b3] text-white p-4 rounded-lg shadow-md flex items-center justify-between group transition-all hover:scale-[1.02]">
                <span className="font-extrabold text-lg uppercase tracking-wide">Direito Previdenciário</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Direito Cível & Família - Purple */}
            <Link to="/civel" className="bg-[#9333ea] hover:bg-[#7e22ce] text-white p-4 rounded-lg shadow-md flex items-center justify-between group transition-all hover:scale-[1.02]">
                <span className="font-bold text-lg uppercase tracking-wide">Direito Cível & Família</span>
                <Users size={24} />
            </Link>

            {/* Direito à Saúde - Teal */}
            <Link to="/saude" className="bg-[#0d9488] hover:bg-[#0f766e] text-white p-4 rounded-lg shadow-md flex items-center justify-between group transition-all hover:scale-[1.02]">
                <span className="font-bold text-lg uppercase tracking-wide">Direito à Saúde</span>
                <Activity size={24} />
            </Link>

             {/* BPC/LOAS - Blue Gradient */}
            <Link to="/bpc-loas" className="bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] hover:from-[#0284c7] hover:to-[#0891b2] text-white p-4 rounded-lg shadow-md flex items-center justify-between group transition-all hover:scale-[1.02]">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase opacity-90">Quem tem direito?</span>
                    <span className="font-extrabold text-lg uppercase tracking-wide leading-tight">Ao BPC/LOAS</span>
                </div>
                <FileSearch size={28} />
            </Link>

            {/* Salário Maternidade - Pink/Orange Gradient */}
            <Link to="/salario-maternidade" className="bg-gradient-to-r from-[#ec4899] to-[#f97316] hover:from-[#db2777] hover:to-[#ea580c] text-white p-4 rounded-lg shadow-md flex items-center justify-between group transition-all hover:scale-[1.02]">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase opacity-90">Quem tem direito?</span>
                    <span className="font-extrabold text-lg uppercase tracking-wide leading-tight">Salário Maternidade</span>
                </div>
                <Baby size={28} />
            </Link>

            {/* Aposentadoria PCD - Indigo Gradient */}
            <Link to="/aposentadoria-pcd" className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white p-4 rounded-lg shadow-md flex items-center justify-between group transition-all hover:scale-[1.02]">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase opacity-90">Requisitos e Regras</span>
                    <span className="font-extrabold text-lg uppercase tracking-wide leading-tight">Aposentadoria PCD</span>
                </div>
                <Accessibility size={28} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceShortcuts;