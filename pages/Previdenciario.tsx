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
    title: "Salário Maternidade Negado?",
    text: "Muitas mães têm seu direito ao Salário Maternidade injustamente negado, mesmo estando dentro do período de graça ou sendo trabalhadoras rurais e desempregadas. Você sabia que pode reverter essa situação e garantir o apoio que sua família precisa?",
    button: "Quero saber mais!"
  },
  {
    title: "BPC/LOAS: Seu direito está garantido?",
    text: "Idosos e pessoas com deficiência (autismo, doenças graves, etc.) em situação de vulnerabilidade têm direito ao BPC/LOAS. Mas a burocracia do INSS pode ser um obstáculo. Será que você ou alguém que você ama está perdendo um benefício essencial por falta de informação?",
    button: "Verificar meu direito"
  },
  {
    title: "Benefício do INSS Cortado?",
    text: "O INSS tem cortado benefícios indevidamente através do \"pente fino\" ou por erros administrativos. Se o seu benefício foi cessado, não aceite! Você pode ter direito à reativação imediata e à reparação por essa injustiça. Não deixe seus direitos serem violados.",
    button: "Reativar meu benefício"
  },
  {
    title: "Sua Aposentadoria está Correta?",
    text: "Milhares de aposentados recebem menos do que deveriam devido a erros de cálculo ou desconsideração de períodos de contribuição. Você pode ter direito a uma revisão que aumente significativamente o valor do seu benefício. Não perca dinheiro por falta de análise!",
    button: "Calcular minha revisão"
  },
  {
    title: "Auxílio-Doença ou Aposentadoria por Invalidez Negados?",
    text: "Estar incapacitado para o trabalho e ter o benefício negado é devastador. O INSS frequentemente nega esses pedidos, mas muitas dessas negativas são passíveis de reversão judicial. Não desista do seu direito à segurança financeira em momentos de fragilidade.",
    button: "Entender meus direitos"
  },
  {
    title: "Pensão por Morte: Proteja sua Família!",
    text: "A perda de um ente querido já é dolorosa, e a burocracia para garantir a pensão por morte pode ser esmagadora. Você sabe quais documentos são essenciais e como evitar que seu pedido seja negado? Garanta o futuro financeiro de sua família.",
    button: "Saiba como proteger"
  },
  {
    title: "Planejamento Previdenciário: Seu Futuro Seguro?",
    text: "Não espere a aposentadoria para descobrir que poderia ter recebido mais! Um planejamento previdenciário estratégico pode otimizar suas contribuições, antecipar sua aposentadoria e garantir o melhor benefício possível. Invista no seu futuro hoje!",
    button: "Planejar minha aposentadoria"
  }
];

const testimonialsData = [
  { text: "Não sabia que tinha direito à revisão da minha aposentadoria. Graças à equipe, consegui um aumento significativo! Atendimento impecável.", name: "Maria Silva", location: "Fortaleza, CE" },
  { text: "Meu BPC/LOAS foi negado várias vezes, mas não desisti. Com a ajuda profissional, finalmente tive meu benefício concedido. Recomendo a todos!", name: "João Santos", location: "Solonópole, CE" },
  { text: "Meu auxílio-doença foi cortado sem aviso. Fiquei desesperada! Eles agiram rápido e meu benefício foi reativado. Muita gratidão!", name: "Ana Paula Costa", location: "Quixadá, CE" },
  { text: "Consegui o salário maternidade mesmo sendo autônoma e sem saber dos meus direitos. O processo foi simples e rápido. Muito obrigada!", name: "Fernanda Lima", location: "Quixeramobim, CE" },
  { text: "O planejamento previdenciário fez toda a diferença. Agora sei exatamente como me aposentar com o melhor benefício possível. Um investimento que vale a pena!", name: "Pedro Almeida", location: "Solonópole, CE" },
  { text: "Após o falecimento do meu marido, estava perdida com a pensão por morte. A equipe me orientou em tudo e consegui o benefício para minha família.", name: "Sofia Pereira", location: "Quixadá, CE" },
  { text: "Meu benefício por incapacidade foi negado, mas com a assessoria jurídica, consegui provar meu direito. Profissionais competentes e humanos.", name: "Lucas Oliveira", location: "Solonópole, CE" },
  { text: "Achei que não tinha mais solução para o meu caso de aposentadoria especial. Eles encontraram uma brecha e meu benefício saiu!", name: "Gabriela Rocha", location: "Quixeramobim, CE" },
  { text: "Fui surpreendido com um corte no meu benefício. A equipe agiu com agilidade e competência, revertendo a situação em pouco tempo.", name: "Rafael Mendes", location: "Quixadá, CE" },
  { text: "O atendimento online é excelente! Tive todas as minhas dúvidas sobre o INSS esclarecidas e meu processo resolvido sem sair de casa.", name: "Camila Gomes", location: "Fortaleza, CE" }
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
            Seu benefício do INSS não pode esperar — <span className="text-white bg-secondary/80 px-2 rounded box-decoration-clone">nós resolvemos</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-semibold drop-shadow-md">
            Sem benefício, a conta não fecha. Se você teve seu pedido negado, cortado ou está na fila de espera, agimos rápido para garantir seu direito.
          </p>
          <div className="flex flex-col items-center gap-6 w-full">
            <a
              href="https://wa.me/5585981186205"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-md shadow-xl transition-transform hover:scale-105"
            >
              <MessageCircle size={24} />
              Solicitar Ajuda Agora
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
                 <h3 className="text-lg font-bold text-gray-600 mb-2">Local da Imagem: Pessoa Preocupada</h3>
                 <p className="text-sm text-gray-500 mb-1">Dimensão Recomendada:</p>
                 <code className="bg-gray-200 px-2 py-1 rounded text-primary font-bold font-mono">800 x 600 px</code>
                 <p className="text-xs text-gray-400 mt-4">(Adicionar no Antigravity)</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Quando o INSS nega, quem sofre é você
              </h2>
              <p className="text-lg text-text-main mb-6">
                Talvez você esteja passando por isso agora:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Salário Maternidade negado, mesmo tendo direito.",
                  "Precisa do BPC/LOAS para autismo e não sabe por onde começar.",
                  "Benefício cortado de repente, sem explicação clara.",
                  "Esperando há meses por uma resposta na fila do INSS."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-main">
                    <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-background-light border-l-4 border-secondary p-4 rounded text-text-light italic">
                "Esse benefício é verba alimentar, e a demora pode impactar sua vida. A solução é agir agora."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution (Carousel) */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle>A solução é ter a estratégia jurídica certa</SectionTitle>
          
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
            <p className="text-lg text-text-main mb-6">Aqui seu caso não é tratado como mais um protocolo.</p>
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
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary">O que muda na sua vida?</h2>
            <p className="text-text-light">Por que contratar um especialista faz toda a diferença.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary font-heading">Receber o que é seu</h3>
              <p className="text-text-light">Nada de achismo. Trabalhamos com provas e fundamentação legal para garantir seu direito.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary font-heading">Tudo sem sair de casa</h3>
              <p className="text-text-light">Atendimento 100% digital. Você manda os documentos pelo celular e nós resolvemos.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary font-heading">Atendimento Humano</h3>
              <p className="text-text-light">Casos sensíveis exigem atenção. Aqui você fala com gente de verdade, não robôs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Proof (Carousel) */}
      <section className="py-20 bg-background-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-heading font-bold text-primary">Histórias de quem confiou</h2>
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
               <summary className="font-bold text-primary font-heading">Meu benefício foi negado. Ainda posso receber?</summary>
               <p className="mt-2 text-text-light">Sim. Muitas negativas do INSS são injustas ou baseadas em análise incompleta. Podemos reverter isso na justiça.</p>
             </details>
             <details className="bg-white rounded-lg shadow-sm p-4 cursor-pointer border border-gray-100">
               <summary className="font-bold text-primary font-heading">Preciso ir até o escritório?</summary>
               <p className="mt-2 text-text-light">Não. Todo o atendimento, envio de documentos e assinatura de contrato é feito de forma digital e segura.</p>
             </details>
             <details className="bg-white rounded-lg shadow-sm p-4 cursor-pointer border border-gray-100">
               <summary className="font-bold text-primary font-heading">Quanto tempo demora?</summary>
               <p className="mt-2 text-text-light">Cada caso é único, mas nossa equipe age com prioridade máxima para protocolar e acompanhar seu pedido o mais rápido possível.</p>
             </details>
           </div>
        </div>
      </section>

      {/* ACHIEVEMENTS / STATS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-12">Somos especialistas em Direito Previdenciário e da Saúde</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                 <div className="flex justify-center mb-4 text-secondary"><Trophy size={48} /></div>
                 <h3 className="text-4xl font-extrabold text-primary mb-2">+ 500</h3>
                 <p className="text-text-light font-bold text-lg">Benefícios Concedidos</p>
                 <p className="text-sm text-gray-500 mt-1">(Judicial e Administrativo)</p>
              </div>
              <div className="p-6 border-x-0 md:border-x border-gray-100">
                 <div className="flex justify-center mb-4 text-secondary"><ShieldCheck size={48} /></div>
                 <h3 className="text-2xl font-bold text-primary mb-2 mt-2">Especialistas</h3>
                 <p className="text-text-light font-medium">Em benefícios do INSS e Saúde Pública</p>
              </div>
              <div className="p-6">
                 <div className="flex justify-center mb-4 text-secondary"><Globe size={48} /></div>
                 <h3 className="text-2xl font-bold text-primary mb-2 mt-2">Atendimento</h3>
                 <p className="text-text-light font-medium">100% Online em todo Brasil</p>
              </div>
           </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Quanto mais você espera, mais dinheiro deixa de receber.</h2>
          <p className="text-xl text-gray-200 mb-10">Não perca seu direito. Fale com um advogado especialista agora.</p>
          <a 
            href="https://wa.me/5585981186205"
            className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-12 rounded-md text-lg shadow-2xl transition-transform hover:scale-105"
          >
            Quero analisar meu caso agora
          </a>
          <p className="mt-6 text-sm text-gray-400">Atendimento Online | Todo o Brasil | OAB/CE 56.789</p>
        </div>
      </section>
    </div>
  );
};

export default Previdenciario;