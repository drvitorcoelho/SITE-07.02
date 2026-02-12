import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, ChevronLeft, ChevronRight, 
  Pill, Bone, Activity, BedDouble, Baby, Map, Scan, Home, HeartPulse, Accessibility, 
  AlertTriangle, Clock, Siren, Ban, 
  FileWarning, Scissors, Brain, TrendingUp, FileX, Dna, Building, DollarSign, UserMinus, 
  FileText, HelpCircle, User, ShieldCheck, Trophy, Globe
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

// --- DATA STRUCTURES ---

const susServices = [
  { icon: <Pill size={32} />, title: "Medicamentos de Alto Custo", text: "Solicitação de medicamentos não fornecidos regularmente pelo SUS.", msg: "medicamento pelo SUS" },
  { icon: <Bone size={32} />, title: "Órteses e Próteses (OPME)", text: "Requerimento de materiais especiais para cirurgias e tratamentos.", msg: "OPME/insumos pelo SUS" },
  { icon: <Activity size={32} />, title: "Cirurgias de Alta Complexidade", text: "Atuação para realização de procedimentos cirúrgicos na rede pública.", msg: "cirurgia pelo SUS" },
  { icon: <BedDouble size={32} />, title: "Leitos de UTI", text: "Medidas judiciais para obtenção de vaga em UTI quando necessário.", msg: "leito de UTI pelo SUS" },
  { icon: <Baby size={32} />, title: "Insumos e Dietas Especiais", text: "Solicitação de fraldas, sondas e suplementos alimentares.", msg: "insumos médicos pelo SUS" },
  { icon: <Map size={32} />, title: "Tratamento Fora do Domicílio", text: "Pedidos de TFD para tratamento em outros municípios.", msg: "TFD pelo SUS" },
  { icon: <Scan size={32} />, title: "Exames de Alta Complexidade", text: "Requerimento de exames não disponíveis na rede básica.", msg: "exames pelo SUS" },
  { icon: <Home size={32} />, title: "Home Care pelo SUS", text: "Solicitação de internação domiciliar quando houver indicação médica.", msg: "Home Care pelo SUS" },
  { icon: <HeartPulse size={32} />, title: "Doenças Crônicas", text: "Busca por tratamento contínuo para doenças crônicas.", msg: "tratamento de doença crônica pelo SUS" },
  { icon: <Accessibility size={32} />, title: "Reabilitação", text: "Acesso a centros especializados de reabilitação.", msg: "reabilitação pelo SUS" },
];

const criticalSituations = [
  { icon: <Siren size={32} />, title: "Urgência em UTI", text: "Atuação em casos de necessidade urgente de leito de terapia intensiva.", btn: "Consultar Direito", msg: "ajuda urgente com leito de UTI pelo SUS" },
  { icon: <Clock size={32} />, title: "Tratamento Oncológico", text: "Acompanhamento para início de tratamento de câncer nos prazos legais.", btn: "Saiba Mais", msg: "ajuda urgente com tratamento de câncer pelo SUS" },
  { icon: <AlertTriangle size={32} />, title: "Cirurgia Urgente", text: "Medidas para casos cirúrgicos classificados como urgentes.", btn: "Verificar Opções", msg: "ajuda urgente com cirurgia pelo SUS" },
  { icon: <Ban size={32} />, title: "Fornecimento de Medicamento", text: "Atuação em casos de interrupção ou não fornecimento de remédios.", btn: "Consultar", msg: "ajuda urgente com medicamento contínuo pelo SUS" },
  { icon: <Baby size={32} />, title: "Insumos Essenciais", text: "Solicitação de insumos vitais para pacientes.", btn: "Saiba Mais", msg: "ajuda urgente com insumos pelo SUS" },
  { icon: <Accessibility size={32} />, title: "Assistência PCD", text: "Busca por terapias e equipamentos para pessoas com deficiência.", btn: "Consultar", msg: "ajuda urgente com assistência para criança com deficiência pelo SUS" },
  { icon: <BedDouble size={32} />, title: "Internação Hospitalar", text: "Questões relacionadas à internação e realização de exames.", btn: "Saiba Mais", msg: "ajuda urgente com paciente preso em hospital pelo SUS" },
  { icon: <Map size={32} />, title: "Transferência Hospitalar", text: "Pedidos de transferência para unidades com recursos adequados.", btn: "Verificar", msg: "ajuda urgente com transferência hospitalar pelo SUS" },
  { icon: <Bone size={32} />, title: "Materiais Cirúrgicos", text: "Solicitação de próteses e materiais necessários para cirurgias.", btn: "Consultar", msg: "ajuda urgente com falta de prótese em cirurgia pelo SUS" },
  { icon: <Map size={32} />, title: "TFD", text: "Direito ao Tratamento Fora do Domicílio quando necessário.", btn: "Saiba Mais", msg: "ajuda urgente com TFD pelo SUS" },
];

const planServices = [
  { icon: <FileWarning size={32} />, title: "Medicamento 'Off-Label'", text: "Análise de negativas de medicamentos não previstos em bula.", msg: "medicamento off-label pelo plano" },
  { icon: <Scissors size={32} />, title: "Cirurgias Reparadoras", text: "Atuação em negativas de cirurgias pós-bariátrica e reparadoras.", msg: "cirurgia bariátrica negada pelo plano" },
  { icon: <Brain size={32} />, title: "Terapias (TEA)", text: "Questões sobre limites de sessões para terapias multidisciplinares.", msg: "limitação de terapias pelo plano" },
  { icon: <Home size={32} />, title: "Home Care", text: "Solicitação de cobertura para internação domiciliar.", msg: "Home Care negado pelo plano" },
  { icon: <TrendingUp size={32} />, title: "Reajustes de Mensalidade", text: "Análise de abusividade em reajustes por faixa etária ou sinistralidade.", msg: "reajuste abusivo do plano" },
  { icon: <FileX size={32} />, title: "Doença Preexistente", text: "Questões sobre carência e cobertura de doenças preexistentes.", msg: "doença preexistente pelo plano" },
  { icon: <Dna size={32} />, title: "Exames Genéticos", text: "Cobertura de exames de alta complexidade e genéticos.", msg: "exames genéticos negados pelo plano" },
  { icon: <Building size={32} />, title: "Descredenciamento", text: "Direitos em caso de descredenciamento de hospitais e clínicas.", msg: "descredenciamento de hospital pelo plano" },
  { icon: <DollarSign size={32} />, title: "Reembolso", text: "Atuação em casos de negativa ou divergência de reembolso.", msg: "reembolso negado pelo plano" },
  { icon: <UserMinus size={32} />, title: "Manutenção de Contrato", text: "Direito de manter o plano para aposentados e demitidos.", msg: "manutenção de plano para aposentado/demitido" },
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
              Consultoria em <br />
              <span className="text-white bg-secondary/80 px-2 rounded box-decoration-clone">Direito à Saúde</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-semibold drop-shadow-md leading-relaxed">
              Atuação jurídica em defesa do acesso a tratamentos, medicamentos e procedimentos junto ao SUS e Planos de Saúde.
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
          title="Atuação Contra o Estado (SUS)" 
          subtitle="Consultoria para obtenção de direitos na saúde pública."
          items={susServices} 
          variant="sus" 
        />
      </section>

      {/* 3. CAROUSEL 2: CRITICAL SITUATIONS */}
      <section className="bg-white border-y border-gray-200">
        <CarouselSection 
          title="Situações de Atuação" 
          subtitle="Casos que demandam análise jurídica especializada."
          items={criticalSituations} 
          variant="critical" 
        />
      </section>

      {/* 4. CAROUSEL 3: HEALTH PLANS */}
      <section className="bg-background-light pb-12">
        <CarouselSection 
          title="Planos de Saúde" 
          subtitle="Análise de contratos e coberturas."
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
            <h3 className="text-2xl font-bold mb-4 font-heading">Dúvidas sobre documentos?</h3>
            <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
              Sabemos que a documentação médica pode ser complexa. 
              Entre em contato para receber orientações sobre quais laudos e relatórios são necessários para a análise do seu caso.
            </p>
            <a 
              href="https://wa.me/5585981186205?text=Olá Dr. Vitor, preciso de orientação sobre documentos." 
              className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Falar com Advogado Agora
            </a>
          </div>

          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-white drop-shadow-md">Documentos Importantes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <FileText size={28} /> Relatório Médico
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Documento essencial contendo diagnóstico (CID), tratamento indicado e justificativa clínica.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <FileX size={28} /> Negativa Formal
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Protocolo ou documento que comprove a recusa do fornecimento pelo SUS ou Plano de Saúde.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <User size={28} /> Documentos Pessoais
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">RG, CPF, comprovante de residência e Cartão do SUS (ou carteira do plano).</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <DollarSign size={28} /> Hipossuficiência
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Comprovantes de renda para casos de justiça gratuita.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <Pill size={28} /> Receitas Médicas
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Receitas atualizadas e legíveis.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <Scan size={28} /> Exames
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Laudos de exames que fundamentam o diagnóstico.</p>
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
                       Especialista em Direito Previdenciário e em <strong>Direito da Saúde</strong>, com foco na garantia de acesso a tratamentos e medicamentos. 
                    </p>
                    <p>
                       Atuo com ética e profissionalismo para assegurar que os direitos dos pacientes sejam respeitados, oferecendo consultoria jurídica especializada.
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

    </div>
  );
};

export default Saude;