import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, ChevronRight, CheckCircle, Lock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-gray-300 border-t-4 border-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            {/* Logo Placeholder */}
            <Link to="/" className="block">
              <div className="h-20 w-56 bg-white/5 border-2 border-dashed border-white/20 rounded flex items-center justify-center text-center p-2 group hover:bg-white/10 transition-all">
                 <span className="text-gray-500 text-xs font-bold tracking-widest uppercase group-hover:text-gray-300">
                   SUA LOGO AQUI<br/>
                   <span className="text-[10px] font-normal opacity-70">(Recomendado: 250x80px)</span>
                 </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-gray-400">
              Excelência e agilidade na defesa dos seus direitos. Atendimento digital humanizado em todo o território nacional.
            </p>
            
            {/* OAB Badge */}
            <div className="inline-block border border-secondary/50 bg-secondary/10 px-4 py-2 rounded-md">
               <p className="text-secondary font-bold font-heading tracking-widest text-sm">
                 OAB/CE 56.789
               </p>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/advogadovitorcoelho/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/vitorcoelho.adv" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/joaovitoralveshonoratocoelho/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Institucional */}
          <div>
            <h3 className="text-white text-lg font-bold font-heading mb-6 border-l-4 border-secondary pl-3">Institucional</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-gray-500 group-hover:text-secondary" />
                  Início
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-gray-500 group-hover:text-secondary" />
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-gray-500 group-hover:text-secondary" />
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/trabalhe" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-gray-500 group-hover:text-secondary" />
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Áreas de Atuação (Full List) */}
          <div>
            <h3 className="text-white text-lg font-bold font-heading mb-6 border-l-4 border-secondary pl-3">Áreas de Atuação</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/previdenciario" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-gray-500 group-hover:text-secondary" />
                  Direito Previdenciário (INSS)
                </Link>
              </li>
              <li>
                <Link to="/civel" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-gray-500 group-hover:text-secondary" />
                  Direito Cível & Família
                </Link>
              </li>
              <li>
                <Link to="/saude" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-gray-500 group-hover:text-secondary" />
                  Direito à Saúde (SUS e Planos)
                </Link>
              </li>
              <li>
                <Link to="/bpc-loas" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-gray-500 group-hover:text-secondary" />
                  BPC/LOAS (Idoso e Deficiente)
                </Link>
              </li>
              <li>
                <Link to="/salario-maternidade" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-gray-500 group-hover:text-secondary" />
                  Salário Maternidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white text-lg font-bold font-heading mb-6 border-l-4 border-secondary pl-3">Fale Conosco</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-white font-semibold">Atendimento Nacional</span>
                  <span className="text-gray-400">100% Online e Digital</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a href="mailto:contato@vitorcoelho.adv.br" className="hover:text-white transition-colors">
                  contato@vitorcoelho.adv.br
                </a>
              </li>
              <li className="text-gray-400 text-xs mt-2">
                 <p className="mb-1"><strong>Número OAB-CE:</strong> 56.789</p>
                 <p>Todos os dados são tratados com sigilo profissional conforme Código de Ética e Disciplina da OAB.</p>
              </li>
              <li className="pt-4">
                <Link 
                  to="/contato" 
                  className="inline-flex w-full items-center justify-center bg-whatsapp hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition-all shadow-lg hover:shadow-green-900/20"
                >
                  Iniciar Atendimento
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Badges and Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-800 pt-8 pb-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2 bg-white/5 rounded-full text-secondary">
              <CheckCircle size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Conformidade OAB</h4>
              <p className="text-xs text-gray-500">Atuamos conforme Provimento 205/2021</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2 bg-white/5 rounded-full text-green-500">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Conformidade LGPD</h4>
              <p className="text-xs text-gray-500">Seus dados protegidos pela lei</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2 bg-white/5 rounded-full text-blue-400">
              <Lock size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Site Seguro</h4>
              <p className="text-xs text-gray-500">Conexão criptografada (SSL)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Vitor Coelho Advocacia. Todos os direitos reservados.</p>
          <div className="flex gap-4">
             <span className="hover:text-gray-300 cursor-pointer">Termos de Uso</span>
             <span className="hover:text-gray-300 cursor-pointer">Política de Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;