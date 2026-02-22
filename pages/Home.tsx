import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Scale, Users, ChevronLeft, ChevronRight, Monitor, Globe, 
  FileSearch, Activity, Trophy, ShieldCheck, Baby, Calculator, Accessibility,
  Stethoscope, Handshake, Eye, FileBarChart2, FileSignature, FileText, ShieldAlert, HeartHandshake,
  Dna, Briefcase, ClipboardList, Clock
} from 'lucide-react';



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
      <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image: Themis (Lady Justice) */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-dark via-primary to-primary/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-block bg-secondary/20 border border-secondary/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
              <span className="text-secondary font-bold text-sm tracking-wider uppercase">Atendimento Digital em Todo Brasil</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight mb-6 drop-shadow-lg text-white">
              Seus Direitos, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Nossa Prioridade.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-100 mb-8 max-w-2xl font-body leading-relaxed drop-shadow-md">
              Escritório especializado em Direito Previdenciário e Cível. Garantimos agilidade e segurança jurídica para você conquistar o que é seu por direito, sem sair de casa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5585981186205" 
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar com Especialista
              </a>
              <Link 
                to="/quem-somos" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-8 rounded-full backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                Conhecer o Escritório
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-10">
               <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">Excelência em Advocacia</h2>
               <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-xl relative">
                <div className="absolute -top-6 -left-6 text-secondary opacity-20">
                  <Scale size={64} />
                </div>
                <p className="text-text-main text-lg leading-relaxed text-justify relative z-10">
                  O escritório <strong className="text-primary">Dr. Vitor Coelho Advocacia (OAB/CE 56.789)</strong> é referência em atendimento jurídico digital. Combinamos conhecimento técnico profundo com a facilidade da tecnologia para oferecer um serviço ágil, transparente e humano. Atuamos em todo o território nacional, defendendo seus direitos previdenciários e cíveis com a dedicação que você merece.
                </p>
                <div className="mt-8 text-center">
                  <Link to="/quem-somos" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
                    Conheça nossa história e valores 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
            </div>
          </div>
          
          {/* SPECIALIZATION CAROUSELS SECTION */}
          <div className="max-w-6xl mx-auto mb-20">
             <div className="text-center mb-16">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Nossas Especialidades</span>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary">Áreas de Atuação</h2>
                <p className="text-text-light mt-4 max-w-2xl mx-auto text-lg">
                  Soluções jurídicas completas para proteger seu patrimônio, sua família e garantir seus benefícios.
                </p>
             </div>

             {/* 1. Direito Previdenciário Carousel */}
             <SpecialtyCarousel 
               title="Direito Previdenciário"
               description="Especialistas em garantir o melhor benefício do INSS para você. Atuamos em concessões, revisões e recursos."
               items={previdenciarioData}
               colorClass="bg-gradient-to-br from-primary to-secondary"
               indicatorColor="bg-primary"
               />

             {/* 2. Direito Cível Carousel */}
             <SpecialtyCarousel 
               title="Direito Cível & Família"
               description="Segurança jurídica para suas relações familiares e patrimoniais. Resolução de conflitos com agilidade."
               items={civelData}
               colorClass="bg-gradient-to-br from-purple-600 to-indigo-600"
               indicatorColor="bg-purple-600"
             />

          </div>

          {/* Why Choose Us / Diferenciais */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary">Por Que Nos Escolher?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 mx-auto">
                  <Monitor size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">100% Digital</h3>
                <p className="text-gray-600 text-center">
                  Atendimento completo por WhatsApp e videochamada. Envie documentos pelo celular e acompanhe tudo sem sair de casa.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 mx-auto">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Especialização</h3>
                <p className="text-gray-600 text-center">
                  Foco exclusivo em Previdenciário e Cível. Conhecimento atualizado das leis e decisões judiciais mais recentes.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Agilidade</h3>
                <p className="text-gray-600 text-center">
                  Processos internos otimizados para dar entrada no seu pedido o mais rápido possível e acompanhar cada etapa.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-20 bg-primary-dark rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-secondary rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-white">O Que Dizem Nossos Clientes</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <div className="flex text-secondary mb-4">
                  {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-200 italic mb-4">"Excelente atendimento! O Dr. Vitor foi muito atencioso e conseguiu minha aposentadoria que o INSS tinha negado. Recomendo a todos."</p>
                <p className="text-white font-bold">- Maria S., Aposentada</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <div className="flex text-secondary mb-4">
                  {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-200 italic mb-4">"Resolvi meu divórcio de forma muito rápida e sem dor de cabeça. A equipe cuidou de tudo online. Profissionalismo nota 10."</p>
                <p className="text-white font-bold">- Carlos A., Empresário</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <div className="flex text-secondary mb-4">
                  {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-200 italic mb-4">"Muito esclarecedor. Tirou todas as minhas dúvidas sobre o BPC/LOAS para meu filho. Conseguimos o benefício graças à orientação."</p>
                <p className="text-white font-bold">- Ana P., Dona de Casa</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-primary">Dúvidas Frequentes</h2>
            </div>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors">
                  Como funciona o atendimento online?
                  <ChevronRight className="transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 border-t border-gray-100 pt-3">
                  Tudo é feito via WhatsApp ou videochamada. Você nos envia fotos dos documentos, fazemos a análise, o contrato é assinado digitalmente (no celular) e nós cuidamos de todo o processo no INSS ou na Justiça.
                </div>
              </details>
              <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors">
                  Atendem em quais estados?
                  <ChevronRight className="transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 border-t border-gray-100 pt-3">
                  Atendemos em todo o Brasil. Como o processo é eletrônico (PJe e Meu INSS), não há barreiras geográficas para nossa atuação.
                </div>
              </details>
              <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors">
                  Cobram para analisar o caso?
                  <ChevronRight className="transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 border-t border-gray-100 pt-3">
                  Fazemos uma pré-análise gratuita para verificar a viabilidade do seu direito. Para cálculos complexos ou planejamento previdenciário detalhado, apresentamos um orçamento prévio.
                </div>
              </details>
            </div>
            <div className="text-center mt-8">
              <Link to="/faq" className="text-secondary font-bold hover:underline">Ver todas as perguntas &rarr;</Link>
            </div>
          </div>

        </div>
      </section>





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