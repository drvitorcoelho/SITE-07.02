import React, { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle, AlertTriangle, ShieldCheck, Clock, ChevronLeft, ChevronRight, Quote, Home, Image as ImageIcon, FileSearch, Trophy, Globe, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceShortcuts from '../components/ServiceShortcuts';

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: boolean }> = ({ children, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">{children}</h2>
    {subtitle && <div className="w-20 h-1 bg-secondary mx-auto"></div>}
  </div>
);

const solutionsData = [
  {
    title: "Salário Maternidade",
    text: "Informações sobre direitos ao Salário Maternidade para mães rurais, urbanas e desempregadas. Conheça os requisitos e procedimentos para solicitar o benefício.",
    button: "Saiba Mais"
  },
  {
    title: "BPC/LOAS",
    text: "Benefício assistencial para idosos e pessoas com deficiência em situação de vulnerabilidade. Orientações sobre requisitos, documentação e processos administrativos.",
    button: "Verificar Requisitos"
  },
  {
    title: "Benefícios do INSS",
    text: "Atuação em casos de benefícios cessados ou indeferidos. Análise jurídica para verificação de direitos e possibilidade de restabelecimento.",
    button: "Análise de Caso"
  },
  {
    title: "Revisão de Aposentadoria",
    text: "Cálculo e análise para verificar se o valor do benefício está correto. Identificação de períodos não contabilizados e possibilidades de revisão.",
    button: "Calcular Revisão"
  },
  {
    title: "Auxílio-Doença e Aposentadoria por Invalidez",
    text: "Informações sobre benefícios por incapacidade laboral. Conheça os requisitos legais para concessão e os documentos médicos necessários.",
    button: "Entender Direitos"
  },
  {
    title: "Pensão por Morte",
    text: "Orientações sobre pensão por morte para dependentes. Saiba quais documentos são necessários para o requerimento junto ao INSS.",
    button: "Saiba Mais"
  },
  {
    title: "Planejamento Previdenciário",
    text: "Estudo detalhado do histórico de contribuições para identificar a melhor regra de aposentadoria e o momento ideal para o requerimento.",
    button: "Planejar Aposentadoria"
  }
];

const testimonialsData = [
  { text: "Atendimento profissional e especializado. Equipe dedicada e atenciosa.", name: "M.S.", location: "Fortaleza, CE" },
  { text: "Consultoria clara e bem estruturada. Profissionais competentes e humanizados.", name: "J.S.", location: "Solonópole, CE" },
  { text: "Processo bem explicado. Atendimento ágil e profissional.", name: "A.P.C.", location: "Quixadá, CE" },
  { text: "Orientação clara sobre direitos previdenciários. Muito satisfeito com o atendimento.", name: "F.L.", location: "Quixeramobim, CE" },
  { text: "Consultoria especializada em planejamento previdenciário. Profissionais competentes.", name: "P.A.", location: "Solonópole, CE" },
  { text: "Orientação clara e atendimento humanizado. Muito bom.", name: "S.P.", location: "Quixadá, CE" },
  { text: "Equipe profissional e atenciosa. Consultoria de qualidade.", name: "L.O.", location: "Solonópole, CE" },
  { text: "Consultoria especializada e bem estruturada. Recomendo.", name: "G.R.", location: "Quixeramobim, CE" },
  { text: "Atendimento ágil e profissional. Muito bom.", name: "R.M.", location: "Quixadá, CE" },
  { text: "Excelente experiência com atendimento online. Profissionalismo garantido.", name: "C.G.", location: "Fortaleza, CE" }
];

const Previdenciario: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= solutionsData.length ? 0 : prev + itemsPerPage));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? Math.max(0, solutionsData.length - itemsPerPage) : prev - itemsPerPage));
  };
  
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex + itemsPerPage >= testimonialsData.length) ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex - itemsPerPage < 0) ? Math.max(0, testimonialsData.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const visibleSolutions = solutionsData.slice(currentIndex, currentIndex + itemsPerPage);
  const visibleTestimonials = testimonialsData.slice(currentTestimonialIndex, currentTestimonialIndex + itemsPerPage);

  return (
    <div className="flex flex-col bg-background-light">
      
      {/* 1. Hero Section */}
      <section className="relative bg-primary text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        {/* Added darker gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 drop-shadow-lg">
            Especialista em <span className="text-white bg-secondary/80 px-2 rounded box-decoration-clone">Direito Previdenciário</span> e Benefícios do INSS
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-semibold drop-shadow-md">
            Consultoria especializada em Direito Previdenciário. Atendimento ágil para questões de aposentadoria, benefícios e revisões de valores.
          </p>
          <div className="flex flex-col items-center gap-6 w-full">
            <a
              href="https://wa.me/5585981186205"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-md shadow-xl transition-transform hover:scale-105"
            >
              <MessageCircle size={24} />
              Solicitar Consultoria
            </a>
          </div>
        </div>
      </section>

      {/* Shortcuts */}
      <ServiceShortcuts />

      {/* 2. Problem Presentation */}
      <section className="py-20 bg-background-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg shadow-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-6 group hover:border-secondary transition-colors">
                 <div className="mb-4 text-gray-400 group-hover:text-secondary">
                    <ImageIcon size={48} />
                 </div>
                 <h3 className="text-lg font-bold text-gray-600 mb-2">Local da Imagem: Atendimento Jurídico</h3>
                 <p className="text-sm text-gray-500 mb-1">Dimensão Recomendada:</p>
                 <code className="bg-gray-200 px-2 py-1 rounded text-primary font-bold font-mono">800 x 600 px</code>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Informações sobre Direitos Previdenciários
              </h2>
              <p className="text-lg text-text-main mb-6">
                Atuamos nas seguintes situações:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Requerimento de Salário Maternidade.",
                  "Solicitação de BPC/LOAS para idosos e deficientes.",
                  "Análise de benefícios indeferidos ou cessados.",
                  "Acompanhamento de processos administrativos no INSS."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-main">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-background-light border-l-4 border-secondary p-4 rounded text-text-light italic">
                "Nosso objetivo é garantir a correta aplicação da lei previdenciária."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution (Carousel) */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle>Áreas de Atuação Previdenciária</SectionTitle>
          
          <div className="relative">
            <div className="flex justify-between items-center gap-4">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-white text-primary shadow-md hover:bg-secondary hover:text-white transition-all z-10"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex-grow overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {visibleSolutions.map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary hover:shadow-xl transition-shadow flex flex-col h-full">
                      <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                      <p className="text-text-light mb-6 flex-grow text-justify">{item.text}</p>
                      <a 
                        href="https://wa.me/5585981186205"
                        className="inline-block w-full text-center bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-md transition-colors"
                      >
                        {item.button}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-white text-primary shadow-md hover:bg-secondary hover:text-white transition-all z-10"
                aria-label="Próximo"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(solutionsData.length / itemsPerPage) }).map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all ${Math.ceil(currentIndex / itemsPerPage) === idx ? 'bg-secondary w-8' : 'bg-gray-300 w-2'}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-text-main mb-6">Atendimento personalizado para o seu caso.</p>
            <a 
               href="https://wa.me/5585981186205"
               className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md shadow transition-colors"
            >
              Falar com Dr. Vitor Coelho no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 4. Benefits of Hiring - Updated for visibility (White BG) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Diferenciais do Atendimento</h2>
            <p className="text-text-light">Por que contar com assessoria especializada?</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary font-heading">Análise Técnica</h3>
              <p className="text-text-light">Fundamentação jurídica baseada na legislação vigente e jurisprudência atualizada.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary font-heading">Atendimento Digital</h3>
              <p className="text-text-light">Consultoria 100% online, com envio de documentos e acompanhamento à distância.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary font-heading">Suporte Contínuo</h3>
              <p className="text-text-light">Acompanhamento de todas as etapas do processo, com informações claras e objetivas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Proof (Carousel) */}
      <section className="py-20 bg-background-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-heading font-bold text-primary">Avaliações</h2>
          </div>
          
          <div className="relative">
            <div className="flex justify-between items-center gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-background-light hover:bg-gray-200 text-primary transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full overflow-hidden transition-all">
                {visibleTestimonials.map((item, index) => (
                  <div key={index} className="bg-background-light p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center animate-fade-in">
                    <div className="text-secondary mb-4">
                      <Quote size={24} className="fill-current opacity-50" />
                    </div>
                    <div className="flex text-secondary mb-4 text-sm">★★★★★</div>
                    <p className="text-text-light italic mb-6 text-sm text-justify">
                      "{item.text}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-bold text-primary">{item.name}</h4>
                      <p className="text-xs text-text-light uppercase tracking-wide mt-1 flex items-center justify-center gap-1">
                        <Home size={12} /> {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-background-light hover:bg-gray-200 text-primary transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(testimonialsData.length / itemsPerPage) }).map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all ${Math.floor(currentTestimonialIndex / itemsPerPage) === idx ? 'bg-secondary w-8' : 'bg-gray-300 w-2'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-16 bg-background-light">
        <div className="max-w-3xl mx-auto px-4">
           <SectionTitle>Perguntas Frequentes</SectionTitle>
           <div className="space-y-4">
             <details className="bg-white rounded-lg shadow-sm p-4 cursor-pointer border border-gray-100">
               <summary className="font-bold text-primary font-heading">É possível recorrer de benefício negado?</summary>
               <p className="mt-2 text-text-light">Sim. É possível apresentar recurso administrativo ou ingressar com ação judicial, dependendo da análise do caso concreto.</p>
             </details>
             <details className="bg-white rounded-lg shadow-sm p-4 cursor-pointer border border-gray-100">
               <summary className="font-bold text-primary font-heading">O atendimento é presencial?</summary>
               <p className="mt-2 text-text-light">Nosso atendimento é realizado preferencialmente de forma digital, abrangendo todo o território nacional.</p>
             </details>
             <details className="bg-white rounded-lg shadow-sm p-4 cursor-pointer border border-gray-100">
               <summary className="font-bold text-primary font-heading">Quais são os prazos?</summary>
               <p className="mt-2 text-text-light">Os prazos variam conforme o tipo de procedimento (administrativo ou judicial) e a complexidade de cada caso.</p>
             </details>
           </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Busque orientação profissional</h2>
          <p className="text-xl text-gray-200 mb-10">Agende uma consulta para análise do seu caso previdenciário.</p>
          <a 
            href="https://wa.me/5585981186205"
            className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-12 rounded-md text-lg shadow-2xl transition-transform hover:scale-105"
          >
            Falar com Advogado
          </a>
          <p className="mt-6 text-sm text-gray-400">Atendimento Online | Todo o Brasil | OAB/CE 56.789</p>
        </div>
      </section>
    </div>
  );
};

export default Previdenciario;