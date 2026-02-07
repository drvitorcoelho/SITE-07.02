import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, ChevronLeft, ChevronRight, 
  Pill, Bone, Activity, BedDouble, Baby, Map, Scan, Home, HeartPulse, Accessibility, // SUS Icons
  AlertTriangle, Clock, Siren, Ban, // Critical Icons
  FileWarning, Scissors, Brain, TrendingUp, FileX, Dna, Building, DollarSign, UserMinus, // Plan Icons
  CheckCircle, FileText, HelpCircle, User, ShieldCheck, Trophy, Globe
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

// --- DATA STRUCTURES ---

const susServices = [
  { icon: <Pill size={32} />, title: "Medicamentos de Alto Custo", text: "Fornecimento de remédios oncológicos, para doenças raras ou não padronizados pelo SUS.", msg: "medicamento pelo SUS" },
  { icon: <Bone size={32} />, title: "Órteses e Próteses (OPME)", text: "Garantia de próteses, órteses e materiais especiais essenciais para cirurgias.", msg: "OPME/insumos pelo SUS" },
  { icon: <Activity size={32} />, title: "Cirurgias de Alta Complexidade", text: "Aceleração de procedimentos cardíacos e oncológicos na fila do SUS.", msg: "cirurgia pelo SUS" },
  { icon: <BedDouble size={32} />, title: "Leitos de UTI e Emergência", text: "Ação imediata para transferência ou vaga em leitos de terapia intensiva.", msg: "leito de UTI pelo SUS" },
  { icon: <Baby size={32} />, title: "Insumos e Dietas Especiais", text: "Fornecimento de fraldas, sondas, suplementos alimentares e fórmulas infantis especiais.", msg: "insumos médicos pelo SUS" },
  { icon: <Map size={32} />, title: "Tratamento Fora do Domicílio (TFD)", text: "Garantia de transporte e ajuda de custo para tratamentos em outros municípios.", msg: "TFD pelo SUS" },
  { icon: <Scan size={32} />, title: "Exames de Alta Complexidade", text: "Biópsias, ressonâncias e PET-Scan negados ou com demora excessiva na rede pública.", msg: "exames pelo SUS" },
  { icon: <Home size={32} />, title: "Home Care pelo SUS", text: "Assistência médica domiciliar para pacientes com indicação clínica e sem condições de hospitalização.", msg: "Home Care pelo SUS" },
  { icon: <HeartPulse size={32} />, title: "Doenças Crônicas", text: "Acesso contínuo a terapias para diabetes, hipertensão pulmonar e doenças autoimunes.", msg: "tratamento de doença crônica pelo SUS" },
  { icon: <Accessibility size={32} />, title: "Clínica de Reabilitação", text: "Vaga em centros especializados para recuperação motora ou dependência química.", msg: "reabilitação pelo SUS" },
];

const criticalSituations = [
  { icon: <Siren size={32} />, title: "Risco de Morte por Falta de Leito", text: "Aguardando vaga em UTI enquanto o quadro clínico se agrava. Cada segundo é vital.", btn: "Conseguir Vaga em UTI", msg: "ajuda urgente com leito de UTI pelo SUS" },
  { icon: <Clock size={32} />, title: "Câncer com Tratamento Atrasado", text: "Diagnóstico confirmado, mas a quimioterapia ou cirurgia não começam. O tempo é o maior inimigo.", btn: "Proteger meu Tratamento", msg: "ajuda urgente com tratamento de câncer pelo SUS" },
  { icon: <AlertTriangle size={32} />, title: "Cirurgia Urgente em Fila Eletiva", text: "O caso é grave, mas o SUS classifica como eletivo. Não espere a sequela se tornar permanente.", btn: "Acelerar Cirurgia", msg: "ajuda urgente com cirurgia pelo SUS" },
  { icon: <Ban size={32} />, title: "Falta de Medicamento Contínuo", text: "A interrupção do remédio pode causar danos irreversíveis. O Estado não pode parar seu tratamento.", btn: "Garantir meu Remédio", msg: "ajuda urgente com medicamento contínuo pelo SUS" },
  { icon: <Baby size={32} />, title: "Negativa de Insumos Vitais", text: "Fórmulas alimentares ou sondas essenciais para a vida que o hospital parou de fornecer.", btn: "Exigir Insumos", msg: "ajuda urgente com insumos pelo SUS" },
  { icon: <Accessibility size={32} />, title: "Criança com Deficiência", text: "Negativa de terapias multidisciplinares ou equipamentos adaptados pelo sistema público.", btn: "Garantir Assistência", msg: "ajuda urgente com assistência para criança com deficiência pelo SUS" },
  { icon: <BedDouble size={32} />, title: "Paciente 'Preso' em Hospital", text: "Internado sem o exame vital para diagnóstico. Exigimos a remoção ou vaga.", btn: "Resolver Situação", msg: "ajuda urgente com paciente preso em hospital pelo SUS" },
  { icon: <Map size={32} />, title: "Transferência Negada", text: "O hospital local não tem recursos e a transferência para centro especializado é recusada.", btn: "Exigir Transferência", msg: "ajuda urgente com transferência hospitalar pelo SUS" },
  { icon: <Bone size={32} />, title: "Falta de Prótese em Cirurgia", text: "Cirurgia cancelada na hora por falta do material especial (OPME).", btn: "Garantir Prótese", msg: "ajuda urgente com falta de prótese em cirurgia pelo SUS" },
  { icon: <Map size={32} />, title: "Abandono por Falta de TFD", text: "O paciente não tem como viajar para tratar o câncer e o Estado nega o transporte.", btn: "Garantir TFD", msg: "ajuda urgente com TFD pelo SUS" },
];

const planServices = [
  { icon: <FileWarning size={32} />, title: "Remédio 'Off-Label'", text: "Plano nega o remédio alegando que o uso não está na bula para sua doença.", msg: "medicamento off-label pelo plano" },
  { icon: <Scissors size={32} />, title: "Bariátrica/Reparadora", text: "Recusa sob alegação de procedimento estético. Seus direitos valem mais.", msg: "cirurgia bariátrica negada pelo plano" },
  { icon: <Brain size={32} />, title: "Limitação de Terapias (TEA)", text: "Corte de sessões de fono ou psicologia. O tratamento deve ser ilimitado.", msg: "limitação de terapias pelo plano" },
  { icon: <Home size={32} />, title: "Negativa de Home Care", text: "O plano recusa a internação domiciliar mesmo com laudo médico indicando a necessidade.", msg: "Home Care negado pelo plano" },
  { icon: <TrendingUp size={32} />, title: "Reajuste Abusivo (Idade)", text: "Aumento drástico na mensalidade ao completar 59 ou 60 anos. Revisamos.", msg: "reajuste abusivo do plano" },
  { icon: <FileX size={32} />, title: "Doença Preexistente", text: "Negativa de atendimento alegando que a doença existia antes do contrato.", msg: "doença preexistente pelo plano" },
  { icon: <Dna size={32} />, title: "Exames Genéticos", text: "Recusa de sequenciamento genético ou biópsias oncológicas modernas.", msg: "exames genéticos negados pelo plano" },
  { icon: <Building size={32} />, title: "Descredenciamento", text: "O plano retira seu hospital de confiança da rede sem aviso prévio.", msg: "descredenciamento de hospital pelo plano" },
  { icon: <DollarSign size={32} />, title: "Negativa de Reembolso", text: "Dificuldade ou recusa em reembolsar valores gastos em urgências.", msg: "reembolso negado pelo plano" },
  { icon: <UserMinus size={32} />, title: "Aposentados e Demitidos", text: "O plano tenta cancelar seu contrato após sair da empresa. Garanta sua vaga.", msg: "manutenção de plano para aposentado/demitido" },
];

const faqItems = [
  { question: "O SUS pode demorar meses para uma cirurgia urgente?", answer: "Não. A fila de espera não pode comprometer a vida. Se houver urgência comprovada, o Judiciário pode determinar a realização imediata, inclusive em rede privada às custas do Estado." },
  { question: "Como conseguir medicamento que não está na lista do SUS?", answer: "Comprovando a necessidade médica e a ineficácia dos remédios da lista, além da incapacidade financeira, o Estado é obrigado a fornecer conforme decisão do STF." },
  { question: "O plano de saúde pode limitar sessões de Autismo (TEA)?", answer: "Absolutamente não. A ANS já proibiu qualquer limite de sessões para terapias multidisciplinares em casos de TEA." },
  { question: "Qual a responsabilidade da União, Estados e Municípios na saúde?", answer: "A responsabilidade é solidária entre todos os entes federados (União, Estados e Municípios), conforme o Tema 793 do STF. Isso significa que o paciente pode acionar qualquer um deles para garantir seu direito à saúde." },
  { question: "O que é OPME e o plano de saúde/SUS é obrigado a fornecer?", answer: "OPME são Órteses, Próteses e Materiais Especiais. Se forem essenciais para o sucesso de um procedimento cirúrgico ou tratamento, e houver indicação médica, tanto o SUS quanto os planos de saúde são obrigados a fornecê-los." },
];

// --- REUSABLE COMPONENTS ---

const CarouselSection: React.FC<{ 
  title: string; 
  subtitle?: string;
  items: any[]; 
  variant: 'sus' | 'critical' | 'plan'; 
}> = ({ title, subtitle, items, variant }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? Math.max(0, items.length - itemsPerPage) : prev - itemsPerPage));
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);
  
  // Logic for infinite loop illusion for remaining items if array end is reached
  const filledItems = visibleItems.length < itemsPerPage 
    ? [...visibleItems, ...items.slice(0, itemsPerPage - visibleItems.length)]
    : visibleItems;

  const getCardStyle = () => {
    if (variant === 'sus') return "bg-white border-t-4 border-primary hover:-translate-y-2";
    if (variant === 'critical') return "bg-red-50 border-l-4 border-red-500 hover:shadow-red-100";
    if (variant === 'plan') return "bg-white border border-gray-200 hover:border-secondary hover:shadow-lg";
    return "";
  };

  const getButtonStyle = () => {
    if (variant === 'critical') return "bg-red-600 hover:bg-red-700 text-white";
    return "text-secondary border border-secondary hover:bg-secondary hover:text-white";
  };

  return (
    <div className="relative py-12">
      <div className="text-center mb-10 px-4">
        <h2 className={`text-3xl font-heading font-bold mb-2 ${variant === 'critical' ? 'text-red-700' : 'text-primary'}`}>{title}</h2>
        {subtitle && <p className="text-text-light">{subtitle}</p>}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <button onClick={prevSlide} className="p-3 rounded-full bg-white text-primary shadow-md hover:bg-gray-100 z-10 transition-colors">
            <ChevronLeft size={24} />
          </button>

          <div className="flex-grow overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filledItems.map((item, idx) => (
                <div key={idx} className={`p-8 rounded-lg shadow-md transition-all duration-300 flex flex-col h-full ${getCardStyle()}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${variant === 'critical' ? 'bg-red-100 text-red-600' : 'bg-primary/10 text-primary'}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center font-heading text-gray-800">{item.title}</h3>
                  <p className="text-text-light text-center mb-6 flex-grow">{item.text}</p>
                  <div className="text-center mt-auto">
                    <a 
                      href={`https://wa.me/5585981186205?text=Olá Dr. Vitor, preciso de ${item.msg}`}
                      className={`inline-block w-full py-3 px-4 rounded-md font-bold transition-colors ${getButtonStyle()}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.btn || "Saiba mais"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="p-3 rounded-full bg-white text-primary shadow-md hover:bg-gray-100 z-10 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

const Saude: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light">
      
      {/* 1. HERO SECTION (PUBLIC HEALTH FOCUS) */}
      <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image: Elderly/Hope/Public Health */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 drop-shadow-lg">
              Direito à Saúde Pública: <br />
              <span className="text-white bg-secondary/80 px-2 rounded box-decoration-clone">Sua Luta é Nossa Causa</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-semibold drop-shadow-md leading-relaxed">
              Quando o SUS, o Estado ou a União negam o acesso a tratamentos essenciais, medicamentos, cirurgias ou leitos, nós agimos para garantir seu direito fundamental à vida e à saúde.
            </p>
            <a
              href="https://wa.me/5585981186205?text=Olá Dr. Vitor, preciso de ajuda com uma questão de saúde pública."
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white text-lg font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105"
            >
              <MessageCircle size={24} />
              Fale com um Especialista Agora
            </a>
          </div>
        </div>
      </section>

      {/* Shortcuts */}
      <ServiceShortcuts />

      {/* 2. CAROUSEL 1: SUS SERVICES */}
      <section className="bg-background-light pt-8">
        <CarouselSection 
          title="Em quais situações podemos te ajudar?" 
          subtitle="Atuação contra Estado, Município e União"
          items={susServices} 
          variant="sus" 
        />
      </section>

      {/* 3. CAROUSEL 2: CRITICAL SITUATIONS */}
      <section className="bg-white border-y border-gray-200">
        <CarouselSection 
          title="Situações Críticas que Exigem Ação Imediata" 
          subtitle="Se você está passando por isso, não espere."
          items={criticalSituations} 
          variant="critical" 
        />
      </section>

      {/* 4. CAROUSEL 3: HEALTH PLANS */}
      <section className="bg-background-light pb-12">
        <CarouselSection 
          title="Problemas com Planos de Saúde?" 
          subtitle="Não fique desamparado diante de negativas abusivas."
          items={planServices} 
          variant="plan" 
        />
      </section>

      {/* 5. DOCUMENTS GUIDE */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Alert Box */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 mb-16 text-center shadow-lg">
            <div className="flex justify-center mb-4">
               <HelpCircle size={40} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading">Não tem todos os documentos agora?</h3>
            <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
              Não se preocupe! Sabemos que organizar tudo pode ser complexo em um momento delicado. 
              Você pode entrar em contato conosco imediatamente. Nossa equipe está pronta para orientar você passo a passo sobre como obter cada laudo.
            </p>
            <a 
              href="https://wa.me/5585981186205?text=Olá Dr. Vitor, preciso de orientação sobre documentos." 
              className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Falar com Advogado Agora
            </a>
          </div>

          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-white drop-shadow-md">Documentos Essenciais para Ações de Saúde</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <FileText size={28} /> Relatório Médico
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">O documento mais crucial. Deve conter: Diagnóstico (CID), tratamento indicado, justificativa da urgência (risco de vida) e ineficácia de alternativas do SUS.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <FileX size={28} /> Negativa Formal
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Protocolo ou carta de negativa do SUS, Secretaria de Saúde ou Plano. É seu direito exigir por escrito.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <User size={28} /> Documentos Pessoais
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">RG, CPF, comprovante de residência atualizado e Cartão do SUS (ou carteirinha do plano).</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <DollarSign size={28} /> Hipossuficiência
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Para ações contra o Estado, comprovar a incapacidade financeira (contracheque, IR ou declaração).</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <Pill size={28} /> Receitas Médicas
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Atualizadas e legíveis, com a posologia e tempo de tratamento.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <Scan size={28} /> Exames
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Laudos e resultados que comprovem a necessidade do tratamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 bg-background-white">
        <div className="max-w-4xl mx-auto px-4">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Perguntas Frequentes</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
           </div>
           
           <div className="space-y-4">
             {faqItems.map((item, idx) => (
               <details key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                 <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors font-heading text-lg">
                   {item.question}
                   <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                 </summary>
                 <div className="px-5 pb-5 text-text-light text-base leading-relaxed border-t border-gray-100 pt-3">
                   <p>{item.answer}</p>
                 </div>
               </details>
             ))}
           </div>
        </div>
      </section>

      {/* 7. ABOUT DR VITOR */}
      <section className="py-20 bg-background-light border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3">
                 {/* Placeholder for Dr. Vitor's Photo */}
                 <div className="aspect-[3/4] bg-gradient-to-br from-primary to-primary-dark rounded-lg shadow-2xl flex items-center justify-center text-white relative overflow-hidden group">
                    <User size={120} className="opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-bold border border-white px-4 py-2 rounded uppercase tracking-wider">Foto Dr. Vitor</span>
                    </div>
                 </div>
              </div>
              <div className="w-full md:w-2/3">
                 <h2 className="text-3xl font-heading font-bold text-primary mb-4">Quem irá te representar?</h2>
                 <div className="flex flex-wrap items-center gap-3 mb-6">
                    <h3 className="text-2xl font-bold text-secondary">Dr. João Vitor Alves Honorato Coelho</h3>
                    <span className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md tracking-wide uppercase">OAB/CE 56.789</span>
                 </div>
                 
                 <div className="space-y-4 text-text-main text-lg leading-relaxed text-justify">
                    <p>
                       Especialista em Direito Previdenciário e em <strong>Direito da Saúde Pública</strong>, com foco em garantir o acesso a tratamentos, medicamentos e cirurgias essenciais. 
                    </p>
                    <p>
                       Minha missão é assegurar que meus clientes recebam os benefícios e direitos que lhes são devidos, com um atendimento personalizado e combativo.
                       Com experiência sólida e foco em soluções eficazes, fundei o escritório para oferecer atendimento personalizado e resultados consistentes.
                    </p>
                 </div>
                 
                 <div className="mt-8">
                    <a href="https://wa.me/5585981186205?text=Olá Dr. Vitor, gostaria de falar sobre um caso de saúde." className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md shadow-lg transition-transform hover:scale-105">
                       <MessageCircle size={20} />
                       Falar com Dr. Vitor
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 8. ACHIEVEMENTS / STATS */}
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

    </div>
  );
};

export default Saude;