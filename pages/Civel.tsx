import React, { useState, useEffect } from 'react';
import { MessageCircle, Heart, FileText, UserPlus, Home, Users, ChevronLeft, ChevronRight, Quote, Shield, Clock, Smile, Trophy, ShieldCheck, Globe } from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

const testimonialsData = [
  { text: "Consultoria profissional em Direito Civil. Atendimento atencioso e bem orientado.", name: "M.S.", location: "Fortaleza, CE" },
  { text: "Orientação clara em questões familiares. Profissionalismo e competência.", name: "J.O.", location: "Sobral, CE" },
  { text: "Atendimento humanizado e especializado. Muito bom.", name: "A.P.", location: "Juazeiro do Norte, CE" },
  { text: "Consultoria bem estruturada. Profissionais competentes e dedicados.", name: "F.S.", location: "Caucaia, CE" },
  { text: "Atendimento profissional e atencioso. Excelente orientação.", name: "A.C.", location: "Crato, CE" },
  { text: "Consultoria especializada em Direito Civil. Muito satisfeito.", name: "J.R.", location: "Maracanaú, CE" },
  { text: "Orientação clara e profissional. Equipe dedicada.", name: "F.L.", location: "Quixadá, CE" },
  { text: "Atendimento de qualidade. Profissionais competentes e humanizados.", name: "A.S.", location: "Iguatu, CE" },
  { text: "Consultoria profissional em questões familiares. Recomendo.", name: "M.F.", location: "São Paulo, SP" },
  { text: "Atendimento ágil e profissional. Muito bom.", name: "R.A.", location: "Canindé, CE" },
  { text: "Orientação clara e bem estruturada. Profissionais competentes.", name: "A.R.", location: "Eusébio, CE" },
  { text: "Consultoria especializada. Atendimento de excelência.", name: "P.G.", location: "Rio de Janeiro, RJ" },
  { text: "Atendimento profissional e atencioso. Muito satisfeito.", name: "L.M.", location: "Aquiraz, CE" },
  { text: "Consultoria bem orientada. Equipe dedicada e competente.", name: "C.E.", location: "Russas, CE" },
  { text: "Orientação clara em Direito Civil. Profissionais humanizados.", name: "F.B.", location: "Recife, PE" },
  { text: "Atendimento de qualidade. Consultoria especializada.", name: "P.H.", location: "Crateús, CE" },
  { text: "Profissionais competentes e atenciosos. Muito bom.", name: "J.D.", location: "Aracati, CE" },
  { text: "Consultoria profissional em questões familiares. Recomendo.", name: "M.V.", location: "Tianguá, CE" },
  { text: "Atendimento ágil e bem orientado. Muito satisfeito.", name: "P.L.", location: "Horizonte, CE" },
  { text: "Orientação clara e profissional. Equipe dedicada.", name: "R.M.", location: "Salvador, BA" }
];

const problemsData = [
  {
    title: "Pensão Alimentícia",
    text: "Orientação jurídica sobre fixação, revisão e execução de pensão alimentícia para filhos menores e outros dependentes.",
    button: "Saiba Mais"
  },
  {
    title: "Interdição e Curatela",
    text: "Procedimentos legais para nomeação de curador para pessoas incapazes de gerir seus próprios atos e bens.",
    button: "Entenda o Processo"
  },
  {
    title: "Guarda e Visitas",
    text: "Regulamentação de guarda (compartilhada ou unilateral) e regime de convivência familiar.",
    button: "Verificar Opções"
  },
  {
    title: "Direito à Saúde",
    text: "Atuação em casos de negativas de procedimentos, cirurgias e medicamentos por planos de saúde ou SUS.",
    button: "Consultar Direitos"
  },
  {
    title: "Retificação de Registro Civil",
    text: "Correção de erros em certidões de nascimento, casamento e óbito, via judicial ou extrajudicial.",
    button: "Saiba Como Funciona"
  },
  {
    title: "Revisional de Pensão",
    text: "Análise da possibilidade de revisão do valor da pensão alimentícia em caso de mudança na capacidade financeira.",
    button: "Análise de Caso"
  },
  {
    title: "Acordos Extrajudiciais",
    text: "Elaboração e homologação de acordos para garantir segurança jurídica e evitar litígios.",
    button: "Formalizar Acordo"
  },
  {
    title: "Divórcio e Separação",
    text: "Assessoria em divórcios consensuais e litigiosos, partilha de bens e dissolução de união estável.",
    button: "Agendar Consulta"
  },
  {
    title: "Inventário e Sucessões",
    text: "Abertura e acompanhamento de inventários judiciais e extrajudiciais para partilha de bens.",
    button: "Saiba Mais"
  },
  {
    title: "Danos Morais e Materiais",
    text: "Ações de reparação civil por danos sofridos em decorrência de atos ilícitos.",
    button: "Consultar Advogado"
  }
];

const Civel: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(1);
  
  // States for the two carousels
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  // Adjust items per page based on window width
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

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Testimonial Navigation
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

  // Problems Navigation
  const nextProblem = () => {
    setCurrentProblemIndex((prevIndex) => 
      (prevIndex + itemsPerPage >= problemsData.length) ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevProblem = () => {
    setCurrentProblemIndex((prevIndex) => 
      (prevIndex - itemsPerPage < 0) ? Math.max(0, problemsData.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const visibleTestimonials = testimonialsData.slice(currentTestimonialIndex, currentTestimonialIndex + itemsPerPage);
  const visibleProblems = problemsData.slice(currentProblemIndex, currentProblemIndex + itemsPerPage);

  return (
    <div className="flex flex-col bg-background-light">
      {/* 1. Headline Impactante */}
      <section className="relative bg-background-light py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
           {/* Texto Centralizado na coluna dele */}
           <div className="relative z-10 text-center flex flex-col items-center">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight mb-6">
                Consultoria em <span className="text-secondary">Direito Civil e Família</span>
              </h1>
              <p className="text-lg text-text-light mb-8 leading-relaxed max-w-lg mx-auto text-justify">
                Especialista em questões de Direito Civil e Família. Atendimento profissional em pensão alimentícia, guarda, divórcio, herança, união estável e direitos de saúde. Consultoria com discrição e profissionalismo.
              </p>
              <a 
                href="https://wa.me/5585981186205" 
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-8 rounded-md shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={20} />
                Agendar Atendimento
              </a>
           </div>
           
           {/* Elemento gráfico/textual */}
           <div className="relative z-0 flex justify-center lg:justify-end">
             <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-secondary max-w-md w-full">
                <h3 className="text-xl font-bold text-primary mb-8 text-center font-heading">Diferenciais do Atendimento</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full text-white flex-shrink-0">
                      <Smile size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Consultoria Especializada</h4>
                      <p className="text-sm text-text-light">Expertise em Direito Civil e Família com profundo conhecimento das questões legais envolvidas.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full text-white flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Atendimento Profissional</h4>
                      <p className="text-sm text-text-light">Procedimentos bem estruturados e orientação clara em todas as etapas do processo.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full text-white flex-shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Sigilo e Confidencialidade</h4>
                      <p className="text-sm text-text-light">Todos os dados são tratados com sigilo profissional conforme Código de Ética da OAB.</p>
                    </div>
                  </li>
                </ul>
             </div>
           </div>
        </div>
      </section>

      {/* Shortcuts */}
      <ServiceShortcuts />

      {/* 2. Seção de Problemas (Carousel) */}
      <section className="py-20 bg-background-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Áreas de Atuação</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="flex justify-between items-center gap-4">
              <button 
                onClick={prevProblem}
                className="p-3 rounded-full bg-background-light hover:bg-gray-200 text-primary shadow-sm transition-colors z-10"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex-grow overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {visibleProblems.map((item, idx) => (
                    <div key={idx} className="bg-background-light p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
                       <h3 className="font-bold text-xl text-primary mb-4 font-heading">{item.title}</h3>
                       <p className="text-text-light mb-6 flex-grow text-justify">{item.text}</p>
                       <a 
                          href="https://wa.me/5585981186205"
                          className="inline-block w-full text-center bg-white border border-secondary text-secondary hover:bg-secondary hover:text-white font-bold py-3 px-4 rounded-md transition-colors"
                       >
                         {item.button}
                       </a>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={nextProblem}
                className="p-3 rounded-full bg-background-light hover:bg-gray-200 text-primary shadow-sm transition-colors z-10"
                aria-label="Próximo"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Dots Indicator for Problems */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(problemsData.length / itemsPerPage) }).map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all ${Math.ceil(currentProblemIndex / itemsPerPage) === idx ? 'bg-secondary w-8' : 'bg-gray-300 w-2'}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-primary mb-6">Busque orientação profissional para resolver suas questões jurídicas.</p>
            <a href="https://wa.me/5585981186205" className="text-secondary font-bold hover:underline text-lg">Inicie uma conversa no WhatsApp &rarr;</a>
          </div>
        </div>
      </section>

      {/* 3. Solução */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Escritório Moderno" 
                  className="rounded-lg shadow-xl border-4 border-secondary"
                />
             </div>
             <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Como o escritório atua</h2>
                <p className="text-gray-200 mb-8 text-lg text-justify">
                  Oferecemos um atendimento técnico e personalizado, analisando cada caso detalhadamente para definir a melhor estratégia jurídica.
                </p>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm text-primary"><Users size={24} /></div>
                      <div>
                        <h4 className="font-bold text-white font-heading">Direito de Família</h4>
                        <p className="text-sm text-gray-300">Divórcio, Guarda, Pensão Alimentícia, União Estável.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm text-primary"><UserPlus size={24} /></div>
                      <div>
                        <h4 className="font-bold text-white font-heading">Registros Públicos</h4>
                        <p className="text-sm text-gray-300">Retificação de Nome, Sobrenome e Gênero em certidões.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm text-primary"><Home size={24} /></div>
                      <div>
                        <h4 className="font-bold text-white font-heading">Obrigações e Contratos</h4>
                        <p className="text-sm text-gray-300">Ações de cobrança, despejo, indenizações e revisão de contratos.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Benefícios - Updated for visibility (White BG) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-heading font-bold mb-12 text-primary">Nossa Metodologia</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-secondary mb-3 font-heading">Clareza</h3>
                <p className="text-text-light">Comunicação acessível para que você entenda cada etapa do processo.</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-secondary mb-3 font-heading">Agilidade</h3>
                <p className="text-text-light">Processos digitais e comunicação eficiente via canais online.</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-secondary mb-3 font-heading">Segurança</h3>
                <p className="text-text-light">Sigilo absoluto e profissionalismo na condução de casos sensíveis.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Prova Social (Carrossel) */}
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

      {/* 6. FAQ (Atualizado) */}
      <section className="py-16 bg-background-light">
        <div className="max-w-4xl mx-auto px-4">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Dúvidas Comuns - Área Cível</h2>
              <div className="bg-secondary/10 border-l-4 border-secondary text-primary p-4 text-sm text-left rounded shadow-sm max-w-2xl mx-auto">
                <p><strong>Atenção:</strong> As informações aqui apresentadas são de caráter meramente informativo e não configuram consultoria jurídica. Para casos específicos, é fundamental buscar o auxílio de um advogado.</p>
              </div>
           </div>
           
           <div className="space-y-4">
             <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
               <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors font-heading">
                 Posso pedir pensão alimentícia depois de anos?
                 <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
               </summary>
               <div className="px-5 pb-5 text-text-light text-sm leading-relaxed border-t border-gray-100 pt-3">
                 <p>Sim. O direito à pensão alimentícia para filhos menores é <strong>indisponível</strong> e pode ser solicitado a qualquer momento, desde que o alimentando necessite e o alimentante tenha condições de pagar. No entanto, a cobrança de <strong>prestações alimentares vencidas</strong> (retroativas) possui um prazo prescricional de 2 (dois) anos, contados a partir do vencimento de cada parcela. Para filhos maiores de idade, a necessidade da pensão deve ser comprovada.</p>
               </div>
             </details>

             <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
               <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors font-heading">
                 Como funciona a retificação de registro civil?
                 <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
               </summary>
               <div className="px-5 pb-5 text-text-light text-sm leading-relaxed border-t border-gray-100 pt-3">
                 <p>A retificação de registro civil (como nome, sobrenome, data de nascimento) pode ser realizada de forma <strong>extrajudicial</strong> (diretamente no cartório) em muitos casos, especialmente quando não há litígio ou necessidade de produção de provas complexas. É indispensável a assistência de um advogado para instruir o pedido corretamente, apresentando os documentos necessários e garantindo a conformidade com a Lei de Registros Públicos (Lei nº 6.015/73) e as normas da Corregedoria Geral de Justiça. Casos mais complexos podem exigir processo judicial.</p>
               </div>
             </details>

             <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
               <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors font-heading">
                 É possível realizar o divórcio sem processo judicial?
                 <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
               </summary>
               <div className="px-5 pb-5 text-text-light text-sm leading-relaxed border-t border-gray-100 pt-3">
                 <p>Sim, é possível realizar o <strong>divórcio extrajudicial</strong> (em cartório) quando o casal atende a alguns requisitos: ambos devem estar de acordo com o divórcio, não podem ter filhos menores ou incapazes, e a mulher não pode estar grávida. É obrigatória a assistência de um advogado para a lavratura da escritura pública de divórcio, que terá os mesmos efeitos de uma sentença judicial.</p>
               </div>
             </details>

             <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
               <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors font-heading">
                 Como funciona a guarda compartilhada de filhos?
                 <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
               </summary>
               <div className="px-5 pb-5 text-text-light text-sm leading-relaxed border-t border-gray-100 pt-3">
                 <p>A <strong>guarda compartilhada</strong> é a regra geral no Brasil, conforme o Código Civil, e busca garantir que ambos os pais participem ativamente da vida dos filhos, compartilhando responsabilidades e decisões. Mesmo que os pais residam em cidades diferentes, a guarda compartilhada pode ser aplicada, com a definição de uma base de moradia para a criança e um plano de convivência que contemple a participação de ambos. A decisão final sempre visa o melhor interesse da criança.</p>
               </div>
             </details>

             <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
               <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors font-heading">
                 Tenho direito de me arrepender de uma compra online?
                 <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
               </summary>
               <div className="px-5 pb-5 text-text-light text-sm leading-relaxed border-t border-gray-100 pt-3">
                 <p>Sim, o Código de Defesa do Consumidor (Lei nº 8.078/90) prevê o <strong>direito de arrependimento</strong> (ou direito de desistência) para compras realizadas fora do estabelecimento comercial (online, por telefone, a domicílio). O consumidor tem o prazo de 7 (sete) dias, a contar da assinatura do contrato ou do recebimento do produto ou serviço, para desistir da compra, sem necessidade de justificativa e com direito à devolução integral dos valores pagos.</p>
               </div>
             </details>

             <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
               <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors font-heading">
                 O que é usucapião e como posso adquiri-la?
                 <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
               </summary>
               <div className="px-5 pb-5 text-text-light text-sm leading-relaxed border-t border-gray-100 pt-3">
                 <p>A <strong>usucapião</strong> é uma forma de adquirir a propriedade de um bem (móvel ou imóvel) pela posse prolongada, contínua e ininterrupta, com a intenção de ser dono, e cumprindo os requisitos legais específicos para cada modalidade (urbana, rural, extraordinária, ordinária, familiar, etc.). Os prazos de posse variam de 2 a 15 anos, dependendo do tipo de usucapião e da presença de boa-fé e justo título. O processo pode ser judicial ou, em alguns casos, extrajudicial (em cartório), sempre com a assistência de um advogado.</p>
               </div>
             </details>

             <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
               <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors font-heading">
                 Quais os direitos de quem vive em união estável?
                 <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
               </summary>
               <div className="px-5 pb-5 text-text-light text-sm leading-relaxed border-t border-gray-100 pt-3">
                 <p>A <strong>união estável</strong> é reconhecida como entidade familiar e garante aos companheiros direitos semelhantes aos do casamento, como direitos patrimoniais, previdenciários e sucessórios. Para que seja reconhecida, a união deve ser pública, contínua e duradoura, com o objetivo de constituir família. A comprovação da união estável pode ser feita por diversos meios, como contrato de convivência, testemunhas, contas conjuntas, entre outros. Em caso de falecimento de um dos companheiros, o sobrevivente tem direito à herança, conforme a legislação vigente e o entendimento do Supremo Tribunal Federal.</p>
               </div>
             </details>
           </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="py-16 bg-white text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Entre em contato</h2>
            <p className="text-lg text-text-light mb-8">Estamos prontos para analisar seu caso. Agende uma consulta.</p>
            <a 
              href="https://wa.me/5585981186205" 
              className="inline-flex items-center justify-center w-full sm:w-auto bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-10 rounded-md shadow-lg transition-transform hover:scale-105 gap-2"
            >
              <MessageCircle size={24} />
              Falar com Dr. Vitor Coelho
            </a>
         </div>
      </section>

    </div>
  );
};

export default Civel;