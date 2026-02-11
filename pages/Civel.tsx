import React, { useState, useEffect } from 'react';
import { MessageCircle, Heart, FileText, UserPlus, Home, Users, ChevronLeft, ChevronRight, Quote, Shield, Clock, Smile, Trophy, ShieldCheck, Globe } from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

const testimonialsData = [
  { name: "Maria Silva", location: "Fortaleza, CE" },
  { name: "João Oliveira", location: "Sobral, CE" },
  { name: "Ana Pereira", location: "Juazeiro do Norte, CE" },
  { name: "Francisco Santos", location: "Caucaia, CE" },
  { name: "Antônia Costa", location: "Crato, CE" },
  { name: "José Rodrigues", location: "Maracanaú, CE" },
  { name: "Francisca Lima", location: "Quixadá, CE" },
  { name: "Antônio Sousa", location: "Iguatu, CE" },
  { name: "Maria Ferreira", location: "São Paulo, SP" },
  { name: "Raimundo Alves", location: "Canindé, CE" },
  { name: "Adriana Rocha", location: "Eusébio, CE" },
  { name: "Paulo Gomes", location: "Rio de Janeiro, RJ" },
  { name: "Luciana Martins", location: "Aquiraz, CE" },
  { name: "Carlos Eduardo", location: "Russas, CE" },
  { name: "Fernanda Barbosa", location: "Recife, PE" },
  { name: "Pedro Henrique", location: "Crateús, CE" },
  { name: "Juliana Dias", location: "Aracati, CE" },
  { name: "Marcos Vinícius", location: "Tianguá, CE" },
  { name: "Patrícia Lima", location: "Horizonte, CE" },
  { name: "Rafael Moreira", location: "Salvador, BA" },
];

const problemsData = [
  {
    title: "Seu filho precisa de pensão urgente?",
    text: "A demora na pensão alimentícia pode trazer dificuldades enormes. Não deixe seu filho desamparado. Agimos com urgência para garantir o sustento que ele merece.",
    button: "Aja agora!"
  },
  {
    title: "Preocupado com um familiar incapaz?",
    text: "Quando um ente querido não consegue mais gerir sua vida, a interdição e curatela são essenciais para protegê-lo. Garanta a segurança e o bem-estar de quem você ama.",
    button: "Proteja quem você ama"
  },
  {
    title: "Guarda dos filhos ou pensão desatualizada?",
    text: "As circunstâncias mudam, e a guarda ou o valor da pensão podem não refletir a realidade atual. Evite conflitos e garanta o melhor para seus filhos com uma revisão justa.",
    button: "Reavalie sua situação"
  },
  {
    title: "Plano de saúde negou sua cirurgia ou tratamento?",
    text: "A saúde não pode esperar! Se o seu plano de saúde recusou um procedimento essencial, você tem direitos. Lutamos para que você receba o tratamento que precisa, sem demora.",
    button: "Exija seu direito à saúde"
  },
  {
    title: "Documentos com erros que travam sua vida?",
    text: "Um nome errado, uma data incorreta no registro... Pequenos erros podem causar grandes problemas. Restaure seus documentos e destrave sua vida sem burocracia.",
    button: "Corrija seus registros"
  },
  {
    title: "A pensão alimentícia está pesando no seu bolso?",
    text: "Se sua situação financeira mudou, o valor da pensão também pode ser ajustado. Não se sobrecarregue. Busque uma revisão para equilibrar suas finanças.",
    button: "Busque um reajuste justo"
  },
  {
    title: "Acordo extrajudicial: precisa de segurança legal?",
    text: "Fez um acordo fora da justiça e quer garantir que ele seja válido e respeitado? A homologação judicial é a chave para a sua tranquilidade e segurança jurídica.",
    button: "Formalize seu acordo"
  },
  {
    title: "Divórcio litigioso: um pesadelo sem fim?",
    text: "Conflitos na separação podem ser exaustivos e dolorosos. Busque uma solução que minimize o desgaste emocional e proteja seus interesses e os de sua família.",
    button: "Encontre a melhor saída"
  },
  {
    title: "Herança: dor de cabeça ou direito garantido?",
    text: "Lidar com um inventário e partilha de bens pode ser complexo após a perda de alguém. Garanta que a vontade do falecido seja cumprida e seus direitos sucessórios protegidos.",
    button: "Garanta sua herança"
  },
  {
    title: "Foi lesado e busca reparação?",
    text: "Se você sofreu danos morais ou materiais, não aceite o prejuízo. Busque a justiça para ser compensado e restaurar sua dignidade. Seus direitos merecem ser defendidos.",
    button: "Busque sua reparação"
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
                Soluções Jurídicas em Direito Civil e Família com <span className="text-secondary">Excelência e Resultado</span>
              </h1>
              <p className="text-lg text-text-light mb-8 leading-relaxed max-w-lg mx-auto text-justify">
                Conflitos familiares, questões sucessórias e direitos pessoais exigem mais que conhecimento técnico: exigem sensibilidade e estratégia. Nosso escritório oferece consultoria jurídica especializada em Direito Civil e Família, com foco em soluções práticas que protegem seus interesses e preservam relacionamentos. Atuamos em pensão alimentícia, guarda compartilhada, divórcio, herança, união estável e direitos de saúde com a máxima discrição e eficiência.
              </p>
              <a 
                href="https://wa.me/5585981186205" 
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-8 rounded-md shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp Agora
              </a>
           </div>
           
           {/* Elemento gráfico/textual */}
           <div className="relative z-0 flex justify-center lg:justify-end">
             <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-secondary max-w-md w-full">
                <h3 className="text-xl font-bold text-primary mb-8 text-center font-heading">Diferenciais do Nosso Escritório</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full text-white flex-shrink-0">
                      <Smile size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Consultoria Especializada</h4>
                      <p className="text-sm text-text-light">Expertise em Direito Civil e Família com profundo conhecimento das nuances legais e emocionais envolvidas em cada caso.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full text-white flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Estratégia Personalizada</h4>
                      <p className="text-sm text-text-light">Cada caso é único. Desenvolvemos estratégias jurídicas customizadas que protegem seus interesses e preservam relacionamentos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full text-white flex-shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Discrição e Confiança</h4>
                      <p className="text-sm text-text-light">Sigilo absoluto e confidencialidade total. Suas informações pessoais e familiares são protegidas com máxima segurança.</p>
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
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Situações que tiram o seu sono</h2>
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
            <p className="text-xl font-medium text-primary mb-6">Não deixe para depois. Resolver agora evita problemas maiores no futuro.</p>
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
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Como o Dr. Vitor Coelho pode ajudar</h2>
                <p className="text-gray-200 mb-8 text-lg text-justify">
                  Oferecemos um atendimento personalizado, onde cada detalhe da sua história importa. Não aplicamos fórmulas prontas; construímos a melhor estratégia para o seu caso.
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
           <h2 className="text-3xl font-heading font-bold mb-12 text-primary">Por que nos contratar?</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-secondary mb-3 font-heading">Clareza</h3>
                <p className="text-text-light">Explicamos tudo sem juridiquês. Você vai entender cada passo do processo.</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-secondary mb-3 font-heading">Agilidade</h3>
                <p className="text-text-light">Processos digitais e comunicação rápida via WhatsApp para resolver logo sua questão.</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg bg-background-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-secondary mb-3 font-heading">Segurança</h3>
                <p className="text-text-light">Profissionalismo e sigilo absoluto para lidar com questões delicadas da sua vida.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Prova Social (Carrossel) */}
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
                      "Serviço de excelência e muita atenção aos detalhes. Recomendo o escritório."
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

      {/* 7. CTA Final */}
      <section className="py-16 bg-white text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Não deixe para depois</h2>
            <p className="text-lg text-text-light mb-8">Seus direitos podem estar sendo negados injustamente. Vamos analisar seu caso hoje.</p>
            <a 
              href="https://wa.me/5585981186205" 
              className="inline-flex items-center justify-center w-full sm:w-auto bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-10 rounded-md shadow-lg transition-transform hover:scale-105 gap-2"
            >
              <MessageCircle size={24} />
              Falar com Dr. Vitor Coelho Agora
            </a>
         </div>
      </section>

    </div>
  );
};

export default Civel;