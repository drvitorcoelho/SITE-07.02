import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Scale, Users, ChevronLeft, ChevronRight, Monitor, Globe, 
  FileSearch, Activity, Trophy, ShieldCheck, Baby, Calculator, Accessibility,
  Stethoscope, Handshake, Eye, FileBarChart2, FileSignature, FileText, ShieldAlert, HeartHandshake,
  Dna, Briefcase, ClipboardList
} from 'lucide-react';
import CalculatorShortcuts from '../components/CalculatorShortcuts';
import NewsletterForm from '../components/NewsletterForm';

// --- DADOS DOS CARROSSÉIS (Conteúdo solicitado) ---

const previdenciarioData = [
  {
    icon: <Stethoscope size={32} />,
    title: "Benefícios por Incapacidade",
    description: "Análise de direitos para trabalhadores incapacitados temporária ou permanentemente.",
    services: ["Auxílio-Doença", "Aposentadoria por Invalidez", "Auxílio-Acidente", "Análise de elegibilidade"],
    link: "/previdenciario",
    btnText: "Saiba Mais"
  },
  {
    icon: <Handshake size={32} />,
    title: "BPC/LOAS",
    description: "Amparo assistencial para idosos e pessoas com deficiência em situação de vulnerabilidade.",
    services: ["Análise de vulnerabilidade", "Perícia biopsicossocial", "Revisão de benefícios", "Recursos administrativos"],
    link: "/bpc-loas",
    btnText: "Verificar Requisitos"
  },
  {
    icon: <Baby size={32} />,
    title: "Salário-Maternidade Rural",
    description: "Informações sobre direitos de mães rurais, urbanas e desempregadas.",
    services: ["Cálculo do benefício (4 meses)", "13º salário proporcional", "Contribuição única (2025)", "Casos retroativos"],
    link: "/salario-maternidade",
    btnText: "Saiba Mais"
  },
  {
    icon: <Accessibility size={32} />,
    title: "Aposentadoria PCD",
    description: "Regras específicas de tempo e idade para pessoas com deficiência comprovada.",
    services: ["Avaliação biopsicossocial", "Graus de deficiência (Grave, Moderada, Leve)", "Cálculo de elegibilidade", "Revisão de benefícios"],
    link: "/aposentadoria-pcd",
    btnText: "Saiba Mais"
  },
  {
    icon: <Briefcase size={32} />, // Using Briefcase or similar for Fibromialgia represents work capacity issues
    title: "Fibromialgia e PCD",
    description: "Reconhecimento pela Lei 15.176/2025. Análise de aposentadoria com regras específicas.",
    services: ["Lei 15.176/2025 (vigência 2026)", "Perícia médica especializada", "Laudo reumatológico", "Cálculo de benefício"],
    link: "/aposentadoria-pcd",
    btnText: "Saiba Mais"
  },
  {
    icon: <Eye size={32} />,
    title: "Visão Monocular",
    description: "Reconhecimento da perda total de visão em um olho como deficiência sensorial (Lei 14.126/2021).",
    services: ["Tema 378 da TNU", "Avaliação biopsicossocial", "Isenção de IR", "Aposentadoria PCD"],
    link: "/aposentadoria-pcd",
    btnText: "Saiba Mais"
  },
  {
    icon: <FileBarChart2 size={32} />,
    title: "Revisões de Benefícios",
    description: "Análise jurídica para verificação de valores e possibilidade de revisão previdenciária.",
    services: ["Revisão da vida toda", "Cálculo de diferenças", "Ação de cobrança", "Atualização de valores"],
    link: "/previdenciario",
    btnText: "Saiba Mais"
  }
];

const civelData = [
  {
    icon: <HeartHandshake size={32} />,
    title: "Direito de Família",
    description: "Consultoria em questões familiares com foco na legislação vigente.",
    services: ["Divórcio (judicial e extrajudicial)", "Guarda e visitas", "Pensão alimentícia", "Mediação familiar"],
    link: "/civel",
    btnText: "Saiba Mais"
  },
  {
    icon: <Scale size={32} />,
    title: "Obrigações de Fazer",
    description: "Ações relativas ao cumprimento de obrigações legais e contratuais na área da saúde.",
    services: ["Procedimentos cirúrgicos", "Medicamentos", "Cumprimento de contratos", "Planos de saúde"],
    link: "/saude",
    btnText: "Saiba Mais"
  },
  {
    icon: <ClipboardList size={32} />,
    title: "Contratos",
    description: "Análise, elaboração e revisão de contratos civis.",
    services: ["Contratos de compra e venda", "Contratos de aluguel", "Contratos comerciais", "Análise de cláusulas"],
    link: "/civel",
    btnText: "Saiba Mais"
  },
  {
    icon: <FileSignature size={32} />,
    title: "Retificação de Registro Civil",
    description: "Procedimentos para correção de erros em documentos oficiais.",
    services: ["Correção de certidões de nascimento", "Correção de certidões de casamento", "Correção de certidões de óbito", "Processos administrativos"],
    link: "/civel",
    btnText: "Saiba Mais"
  },
  {
    icon: <ShieldAlert size={32} />,
    title: "Interdição e Curatela",
    description: "Procedimentos legais para representação de pessoas incapazes de gerir seus próprios atos.",
    services: ["Interdição por incapacidade", "Curatela de idosos", "Curatela de deficientes", "Proteção patrimonial"],
    link: "/civel",
    btnText: "Saiba Mais"
  }
];

// --- COMPONENTES AUXILIARES ---

// Componente de Card Individual do Carrossel
const CarouselCard: React.FC<{ item: any; colorClass: string }> = ({ item, colorClass }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col h-full hover:shadow-xl transition-all duration-300 group">
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
        {item.icon}
      </div>
      <h4 className="text-xl font-bold text-primary font-heading leading-tight">{item.title}</h4>
    </div>
    
    <p className="text-text-light text-sm mb-4 leading-relaxed">{item.description}</p>
    
    <ul className="space-y-2 mb-6 flex-grow">
      {item.services.map((service: string, idx: number) => (
        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
          <CheckCircle size={14} className="text-secondary mt-0.5 flex-shrink-0" />
          <span>{service}</span>
        </li>
      ))}
    </ul>

    <Link 
      to={item.link}
      className={`w-full py-3 rounded-lg text-center font-bold text-white uppercase text-xs tracking-wider transition-all hover:opacity-90 shadow-md ${colorClass}`}
    >
      {item.btnText}
    </Link>
  </div>
);

// Componente Genérico de Carrossel
const SpecialtyCarousel: React.FC<{
  title: string;
  description: string;
  items: typeof previdenciarioData;
  colorClass: string;
  indicatorColor: string;
}> = ({ title, description, items, colorClass, indicatorColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Responsividade
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setItemsPerPage(3); // Desktop Grande
      else if (window.innerWidth >= 768) setItemsPerPage(2); // Tablet
      else setItemsPerPage(1); // Mobile
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage));
  const prev = () => setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? Math.max(0, items.length - itemsPerPage) : prev - itemsPerPage));
  const goTo = (idx: number) => setCurrentIndex(idx * itemsPerPage);

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);
  
  // Preencher com itens do início se chegar ao fim (loop visual suave)
  const displayItems = visibleItems.length < itemsPerPage 
    ? [...visibleItems, ...items.slice(0, itemsPerPage - visibleItems.length)]
    : visibleItems;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary flex items-center gap-3">
          <span className={`w-1.5 h-8 rounded-full ${indicatorColor}`}></span>
          {title}
        </h3>
        <p className="text-text-light mt-2 max-w-3xl text-lg">{description}</p>
      </div>

      <div className="relative">
        {/* Botões de Navegação */}
        <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10">
          <button onClick={prev} className="p-3 rounded-full bg-white text-primary shadow-lg border border-gray-100 hover:bg-gray-50 transition-all hover:scale-110">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
          <button onClick={next} className="p-3 rounded-full bg-white text-primary shadow-lg border border-gray-100 hover:bg-gray-50 transition-all hover:scale-110">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Área dos Cards */}
        <div className="overflow-hidden py-4 px-1"> {/* Padding evita corte da sombra */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
            {displayItems.map((item, idx) => (
              <CarouselCard key={`${item.title}-${idx}`} item={item} colorClass={colorClass} />
            ))}
          </div>
        </div>

        {/* Indicadores (Dots) */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === idx ? `${indicatorColor} w-8` : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Ir para página ${idx + 1}`}
            />
          ))}
          <span className="ml-4 text-sm font-bold text-gray-400 self-center">
            {currentIndex + 1}-{Math.min(currentIndex + itemsPerPage, items.length)} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light">
      
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image: Themis (Lady Justice) - Opacity increased for vividness */}
        <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:w-3/4">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6 drop-shadow-lg text-white">
              Consultoria Jurídica em <span className="text-white bg-secondary/80 px-2 rounded box-decoration-clone">Direito Previdenciário</span> e <span className="text-white bg-secondary/80 px-2 rounded box-decoration-clone">Cível</span>
            </h1>
            <p className="text-lg lg:text-xl text-white mb-8 max-w-2xl font-body font-semibold drop-shadow-md">
              Vitor Coelho Advocacia. Atendimento digital em todo o Brasil. Especialista em Direito Previdenciário, Cível e Saúde.
            </p>
            
            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
              
              <Link 
                to="/previdenciario" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md shadow-xl transition-all flex items-center justify-between gap-2 border-2 border-transparent hover:scale-[1.02]"
              >
                <span>Direito Previdenciário</span>
                <ArrowRight size={20} />
              </Link>

              <Link 
                to="/civel" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-md shadow-xl transition-all flex items-center justify-between gap-2 border-2 border-transparent hover:scale-[1.02]"
              >
                <span>Direito Cível & Família</span>
                <Users size={20} />
              </Link>

              <Link 
                to="/saude" 
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-md shadow-xl transition-all flex items-center justify-between gap-2 border-2 border-transparent hover:scale-[1.02]"
              >
                <span>Direito à Saúde</span>
                <Activity size={20} />
              </Link>

              <Link 
                to="/bpc-loas" 
                className="bg-gradient-to-r from-blue-700 via-blue-500 to-teal-400 hover:from-blue-600 hover:via-blue-400 hover:to-teal-300 text-white font-bold py-3 px-6 rounded-md shadow-xl transition-all flex items-center justify-between gap-4 border-2 border-transparent hover:scale-[1.02] md:col-span-1 lg:col-span-1"
              >
                 <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-bold tracking-wider opacity-90 uppercase">Requisitos e Regras</span>
                    <span className="text-sm font-extrabold tracking-wide uppercase">BPC/LOAS</span>
                 </div>
                 <FileSearch size={24} />
              </Link>

              <Link 
                to="/salario-maternidade" 
                className="bg-gradient-to-r from-pink-700 via-pink-500 to-amber-500 hover:from-pink-600 hover:via-pink-400 hover:to-amber-400 text-white font-bold py-3 px-6 rounded-md shadow-xl transition-all flex items-center justify-between gap-4 border-2 border-transparent hover:scale-[1.02] md:col-span-1 lg:col-span-1"
              >
                 <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-bold tracking-wider opacity-90 uppercase">Requisitos e Regras</span>
                    <span className="text-sm font-extrabold tracking-wide uppercase">Salário Maternidade</span>
                 </div>
                 <Baby size={24} />
              </Link>

              <Link 
                to="/aposentadoria-pcd" 
                className="bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-500 hover:from-indigo-600 hover:via-purple-500 hover:to-blue-400 text-white font-bold py-3 px-6 rounded-md shadow-xl transition-all flex items-center justify-between gap-4 border-2 border-transparent hover:scale-[1.02] md:col-span-1 lg:col-span-1"
              >
                 <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-bold tracking-wider opacity-90 uppercase">Requisitos e Regras</span>
                    <span className="text-sm font-extrabold tracking-wide uppercase">Aposentadoria PCD</span>
                 </div>
                 <Accessibility size={24} />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
               <h2 className="text-3xl font-heading font-bold text-primary mb-4">Sobre o Dr. Vitor Coelho</h2>
               <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
                <p className="text-text-main text-lg leading-relaxed text-justify">
                  O escritório <strong className="text-primary">Dr. Vitor Coelho Advocacia (OAB/CE 56.789)</strong> presta consultoria jurídica especializada, atuando de forma digital em todo o território nacional. Nosso foco é oferecer orientação técnica e estratégica em demandas previdenciárias e cíveis, sempre pautados pela ética, transparência e pelo compromisso com a defesa dos direitos de nossos clientes.
                </p>
                <div className="mt-6 text-center">
                  <Link to="/quem-somos" className="text-secondary font-bold hover:underline">
                    Conheça mais sobre nossa história e valores &rarr;
                  </Link>
                </div>
            </div>
          </div>
          
          {/* SPECIALIZATION CAROUSELS SECTION (NEW) */}
          <div className="max-w-6xl mx-auto mb-20">
             <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-3 bg-white shadow-sm rounded-full text-secondary mb-4 border border-secondary/20">
                  <Scale size={32} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary">Áreas de Atuação</h2>
                <p className="text-text-light mt-2 max-w-2xl mx-auto text-lg">
                  Atuação jurídica focada nas seguintes áreas, com serviços de consultoria e representação legal.
                </p>
             </div>

             {/* 1. Direito Previdenciário Carousel */}
             <SpecialtyCarousel 
               title="Direito Previdenciário"
               description="Atuamos em demandas administrativas e judiciais relacionadas à Previdência Social. Nossos serviços incluem:"
               items={previdenciarioData}
               colorClass="bg-gradient-to-br from-primary to-secondary"
               indicatorColor="bg-primary"
             />

             {/* 2. Direito Cível Carousel */}
             <SpecialtyCarousel 
               title="Direito Cível & Família"
               description="Consultoria jurídica em questões de Direito Civil e de Família, com foco na resolução de conflitos e segurança jurídica:"
               items={civelData}
               colorClass="bg-gradient-to-br from-purple-600 to-indigo-600"
               indicatorColor="bg-purple-600"
             />

          </div>

          {/* Remote Service Section */}
          <div className="max-w-5xl mx-auto">
             <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12 text-text-main shadow-2xl relative overflow-hidden">
                {/* Subtle Background Patterns */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary rounded-full opacity-5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-secondary rounded-full opacity-5 blur-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                   <div className="flex-shrink-0 relative">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 absolute -top-4 -left-4">
                         <Globe size={48} className="text-primary opacity-50" />
                      </div>
                      <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-100 relative z-10">
                         <Monitor size={48} className="text-secondary" />
                      </div>
                   </div>

                   <div className="flex-grow">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-primary">
                        Atendimento 100% Online
                      </h3>
                      <p className="text-text-light text-lg leading-relaxed text-justify font-medium">
                        O escritório Dr. Vitor Coelho utiliza a tecnologia para oferecer atendimento jurídico digital. Realizamos consultas por videochamada e mantemos comunicação via WhatsApp, permitindo que você tenha acesso a uma consultoria especializada de qualquer lugar do Brasil.
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Calculator Shortcuts */}
      <CalculatorShortcuts />

      {/* NEW: Newsletter Form */}
      <NewsletterForm />

      {/* CTA Section */}
      <section className="bg-white py-16 border-t border-gray-100">
         <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading text-primary mb-6 font-bold">Precisa de orientação jurídica?</h2>
            <p className="text-text-light mb-8 text-lg">Entre em contato para agendar uma consulta com um especialista.</p>
            <a 
              href="https://wa.me/5585981186205" 
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-10 rounded-md shadow-lg transform transition hover:scale-105"
            >
              Falar com Dr. Vitor Coelho
            </a>
         </div>
      </section>
    </div>
  );
};

export default Home;