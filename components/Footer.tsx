import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, ChevronRight, CheckCircle, Lock, Shield, Phone, Clock, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import TikTokIcon from './TikTokIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          
          {/* Column 1: Sobre */}
          <div className="space-y-6">
            {/* Logo */}
            <Link to="/" className="block">
              <div className="h-20 w-56 bg-white/5 border border-white/10 rounded flex items-center justify-center text-center p-2 group hover:bg-white/10 transition-all">
                 <span className="text-slate-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                   SUA LOGO AQUI<br/>
                   <span className="text-[10px] font-normal opacity-70">(100x50px)</span>
                 </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 text-justify">
              Consultoria jurídica especializada em Direito Previdenciário, Cível e Saúde. Atendimento 100% online em todo Brasil com foco em especialização, transparência e atendimento humanizado.
            </p>
            
            {/* OAB Badge */}
            <a href="#" className="inline-block border border-secondary/30 bg-secondary/10 px-4 py-2 rounded-md hover:bg-secondary/20 transition-colors">
               <p className="text-secondary font-bold font-heading tracking-widest text-sm">
                 OAB/CE 56.789
               </p>
            </a>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/advogadovitorcoelho/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/vitorcoelho.adv" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/joaovitoralveshonoratocoelho/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-all transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              {/* TikTok Button */}
              <a href="https://www.tiktok.com/@vitorcoelho_adv" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all transform hover:scale-110 border border-white/5">
                 <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Institucional */}
          <div>
            <h3 className="text-white text-lg font-bold font-heading mb-6 border-l-4 border-secondary pl-3">Institucional</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Início
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/trabalhe" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link to="/contato" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Áreas de Atuação */}
          <div>
            <h3 className="text-white text-lg font-bold font-heading mb-6 border-l-4 border-secondary pl-3">Áreas de Atuação</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/previdenciario" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Direito Previdenciário (INSS)
                </Link>
              </li>
              <li>
                <Link to="/civel" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Direito Cível & Família
                </Link>
              </li>
              <li>
                <Link to="/saude" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Direito à Saúde (SUS e Planos)
                </Link>
              </li>
              <li>
                <Link to="/bpc-loas" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  BPC/LOAS (Idoso e Deficiente)
                </Link>
              </li>
              <li>
                <Link to="/salario-maternidade" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Salário Maternidade
                </Link>
              </li>
              <li>
                <Link to="/aposentadoria-pcd" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <ChevronRight size={14} className="text-slate-500 group-hover:text-secondary transition-colors" />
                  Aposentadoria PCD
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div>
            <h3 className="text-white text-lg font-bold font-heading mb-6 border-l-4 border-secondary pl-3">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <Mail size={16} className="text-secondary" />
                </div>
                <a href="mailto:contato@vitorcoelho.adv.br" className="hover:text-white transition-colors">
                  contato@vitorcoelho.adv.br
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-full group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle size={16} className="text-green-500" />
                </div>
                <a href="https://wa.me/5585981186205" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  (85) 9 8118-6205
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <Phone size={16} className="text-secondary" />
                </div>
                <a href="tel:+5585981186205" className="hover:text-white transition-colors">
                  (85) 9 8118-6205
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <Clock size={16} className="text-secondary" />
                </div>
                <span className="text-slate-400">
                  07h às 18h (Seg-Sex)
                </span>
              </li>
              
              <li className="pt-6">
                <a 
                  href="https://wa.me/5585981186205" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-4 rounded-lg transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 gap-2"
                >
                  <MessageCircle size={20} />
                  INICIAR ATENDIMENTO
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Badges de Conformidade */}
        <div className="border-t border-slate-800 pt-10 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="flex flex-col items-center text-center gap-2 group">
              <div className="p-3 bg-slate-800 rounded-full text-secondary group-hover:bg-secondary/20 transition-colors">
                <CheckCircle size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">OAB/CE 56.789</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Provimento 205/2021</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center gap-2 group">
              <div className="p-3 bg-slate-800 rounded-full text-green-500 group-hover:bg-green-500/20 transition-colors">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">LGPD Conforme</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Dados Protegidos</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-2 group">
              <div className="p-3 bg-slate-800 rounded-full text-blue-400 group-hover:bg-blue-400/20 transition-colors">
                <Lock size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">SSL Seguro</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Conexão Criptografada</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-2 group">
              <div className="p-3 bg-slate-800 rounded-full text-yellow-400 group-hover:bg-yellow-400/20 transition-colors">
                <Star size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Google Reviews</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Avaliações Verificadas</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-2 group">
              <div className="p-3 bg-slate-800 rounded-full text-purple-400 group-hover:bg-purple-400/20 transition-colors">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Atendimento 24h</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Resposta Rápida</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links Legais & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; 2026 Vitor Coelho Advocacia. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <Link to="/privacidade" className="hover:text-secondary transition-colors">Política de Privacidade</Link>
             <Link to="/termos" className="hover:text-secondary transition-colors">Termos de Uso</Link>
             <Link to="/cookies" className="hover:text-secondary transition-colors">Política de Cookies</Link>
             <Link to="/legal" className="hover:text-secondary transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;