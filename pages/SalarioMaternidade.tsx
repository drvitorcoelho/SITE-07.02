import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, ChevronLeft, ChevronRight, 
  Baby, Heart, ShieldCheck, Clock, FileCheck, DollarSign, Calendar, Smile, Search, Briefcase, // Gestante Icons
  Lightbulb, Unlock, Key, TrendingUp, BookOpen, Barcode, Shield, CheckCircle, Target, Zap, // Strategy Icons
  History, Coins, RefreshCw, Users, FileText, PiggyBank, Gavel, Scale, AlertCircle, // Retroactive Icons
  HelpCircle, MapPin, Calculator, Trophy, Globe, FileWarning, UserCheck, Info
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

// --- DATA STRUCTURES ---

const gestanteData = [
  { icon: <DollarSign size={32} />, title: "Benefício Previdenciário", text: "Direito devido a seguradas em caso de nascimento, adoção ou guarda judicial.", msg: "informação salário maternidade" },
  { icon: <Calendar size={32} />, title: "Data do Requerimento", text: "Informações sobre quando solicitar o benefício junto ao INSS.", msg: "requerimento salário maternidade" },
  { icon: <ShieldCheck size={32} />, title: "Segurada Rural", text: "Direitos específicos para trabalhadoras rurais.", msg: "salário maternidade rural" },
  { icon: <FileCheck size={32} />, title: "Documentação", text: "Análise da documentação necessária para o pedido.", msg: "documentos maternidade" },
  { icon: <Heart size={32} />, title: "Proteção à Maternidade", text: "Benefício que visa proteger a maternidade e a infância.", msg: "proteção maternidade" },
  { icon: <CheckCircle size={32} />, title: "Requisitos", text: "Verificação do cumprimento de carência e qualidade de segurado.", msg: "requisitos salário maternidade" },
  { icon: <FileText size={32} />, title: "Organização Documental", text: "Orientações sobre como organizar provas rurais.", msg: "provas rurais" },
  { icon: <Baby size={32} />, title: "Direito da Criança", text: "Benefício voltado ao cuidado com o recém-nascido.", msg: "direito da criança" },
  { icon: <Smile size={32} />, title: "Planejamento", text: "Orientações para futuras mamães sobre direitos previdenciários.", msg: "planejamento maternidade" },
  { icon: <MessageCircle size={32} />, title: "Consultoria", text: "Tire suas dúvidas com um especialista.", msg: "consultoria salário maternidade" },
];

const strategyData = [
  { icon: <Target size={32} />, title: "Contribuição Facultativa", text: "Análise de possibilidade de contribuição para seguradas facultativas.", msg: "contribuição facultativa" },
  { icon: <Unlock size={32} />, title: "Carência", text: "Entenda os períodos de carência exigidos para cada categoria.", msg: "carência inss" },
  { icon: <Clock size={32} />, title: "Planejamento Previdenciário", text: "Importância de manter as contribuições em dia.", msg: "planejamento previdenciário" },
  { icon: <Shield size={32} />, title: "Segurança Jurídica", text: "Atuação conforme a legislação previdenciária vigente.", msg: "legislação previdenciária" },
  { icon: <TrendingUp size={32} />, title: "Valor do Benefício", text: "Como é calculado o valor do Salário Maternidade.", msg: "cálculo benefício" },
  { icon: <BookOpen size={32} />, title: "Normas do INSS", text: "Atualizações sobre instruções normativas e portarias.", msg: "normas inss" },
  { icon: <Barcode size={32} />, title: "Guias de Pagamento", text: "Orientações sobre emissão e pagamento de GPS.", msg: "pagamento inss" },
  { icon: <Zap size={32} />, title: "Qualidade de Segurado", text: "Manutenção da qualidade de segurado para acesso aos benefícios.", msg: "qualidade de segurado" },
  { icon: <Key size={32} />, title: "Retorno ao Sistema", text: "Como voltar a contribuir para o INSS.", msg: "voltar a pagar inss" },
  { icon: <Scale size={32} />, title: "Análise Legal", text: "Verificação de enquadramento nas regras previdenciárias.", msg: "análise legal" },
];

const retroactiveData = [
  { icon: <History size={32} />, title: "Prazo para Requerer", text: "O benefício pode ser requerido em até 5 anos após o parto.", msg: "prazo requerimento" },
  { icon: <Coins size={32} />, title: "Pagamento Retroativo", text: "Possibilidade de recebimento de valores atrasados.", msg: "pagamento retroativo" },
  { icon: <RefreshCw size={32} />, title: "Revisão de Pedido", text: "Análise de indeferimentos anteriores.", msg: "revisão benefício" },
  { icon: <TrendingUp size={32} />, title: "Atualização Monetária", text: "Valores pagos com correção monetária.", msg: "correção monetária" },
  { icon: <Users size={32} />, title: "Múltiplos Partos", text: "Direito analisado para cada nascimento ocorrido no período.", msg: "múltiplos partos" },
  { icon: <Briefcase size={32} />, title: "Trabalho Rural", text: "Comprovação de atividade rural em período anterior.", msg: "comprovação rural" },
  { icon: <FileText size={32} />, title: "Provas Materiais", text: "Análise de documentos da época do parto.", msg: "provas materiais" },
  { icon: <PiggyBank size={32} />, title: "Natureza Alimentar", text: "Benefício de caráter alimentar para a família.", msg: "natureza alimentar" },
  { icon: <DollarSign size={32} />, title: "Honorários", text: "Consulta sobre honorários advocatícios.", msg: "honorários" },
  { icon: <Search size={32} />, title: "Prescrição", text: "Verificação de prazos prescricionais.", msg: "prescrição" },
];

const faqItems = [
  { question: "Qual o prazo para pedir o Salário Maternidade?", answer: "O benefício pode ser solicitado em até 5 anos a contar da data do parto, adoção ou guarda judicial." },
  { question: "A segurada rural precisa contribuir?", answer: "A segurada especial (rural) deve comprovar o exercício de atividade rural nos 10 meses anteriores ao parto, não sendo exigida contribuição direta, mas sim a prova da atividade." },
  { question: "Quem está desempregada tem direito?", answer: "Sim, desde que mantenha a qualidade de segurada (período de graça) ou cumpra os requisitos de carência se voltar a contribuir." },
  { question: "O benefício é pago em caso de natimorto?", answer: "Sim, em caso de natimorto (feto que morre dentro do útero ou no parto após 23 semanas de gestação), a segurada tem direito ao benefício integral." },
  { question: "O Salário-Maternidade inclui o 13º salário?", answer: "Sim, o benefício gera direito ao abono anual (13º salário) proporcional ao tempo de duração do benefício." },
];

// --- REUSABLE COMPONENT: CAROUSEL ---

const CarouselSection: React.FC<{ 
  title: string; 
  subtitle?: string;
  items: any[]; 
  variant: 'gestante' | 'strategy' | 'retroactive'; 
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
  const filledItems = visibleItems.length < itemsPerPage 
    ? [...visibleItems, ...items.slice(0, itemsPerPage - visibleItems.length)]
    : visibleItems;

  // Styling logic
  const getCardStyle = () => {
    if (variant === 'gestante') return "bg-pink-50 border-t-4 border-pink-500 hover:-translate-y-2 hover:shadow-pink-100";
    if (variant === 'strategy') return "bg-emerald-50 border-l-4 border-emerald-500 hover:shadow-emerald-100";
    if (variant === 'retroactive') return "bg-white border border-amber-200 hover:border-amber-500 hover:shadow-lg";
    return "";
  };

  const getIconStyle = () => {
    if (variant === 'strategy') return "bg-emerald-100 text-emerald-600";
    if (variant === 'retroactive') return "bg-amber-100 text-amber-600";
    return "bg-pink-100 text-pink-600"; // Gestante default
  };

  const getButtonStyle = () => {
    if (variant === 'strategy') return "bg-emerald-600 hover:bg-emerald-700 text-white";
    if (variant === 'retroactive') return "bg-amber-600 hover:bg-amber-700 text-white";
    return "text-pink-600 border border-pink-600 hover:bg-pink-600 hover:text-white";
  };

  return (
    <div className="relative py-12">
      <div className="text-center mb-10 px-4">
        <h2 className={`text-3xl font-heading font-bold mb-2 ${
          variant === 'strategy' ? 'text-emerald-700' : 
          variant === 'retroactive' ? 'text-amber-700' : 'text-pink-600'
        }`}>{title}</h2>
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
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${getIconStyle()}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center font-heading text-gray-800">{item.title}</h3>
                  <p className="text-text-light text-center mb-6 flex-grow">{item.text}</p>
                  <div className="text-center mt-auto">
                    <a 
                      href={`https://wa.me/5585981186205?text=Olá Dr. Vitor, ${item.msg}`}
                      className={`inline-block w-full py-3 px-4 rounded-md font-bold transition-colors ${getButtonStyle()}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Saiba mais
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

const SalarioMaternidade: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light">
      
      {/* 1. HERO SECTION (Gestante Focus) */}
      <section className="relative bg-pink-600 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image: Pregnant rural woman */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-700 via-pink-600/95 to-pink-500/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 drop-shadow-lg">
              Consultoria sobre <span className="text-pink-600 bg-white px-3 py-1 rounded-lg shadow-md inline-block">Salário-Maternidade Rural</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-semibold drop-shadow-md leading-relaxed">
              Informações jurídicas sobre o benefício, requisitos de concessão e planejamento previdenciário para gestantes.
            </p>
            <a
              href="https://wa.me/5585981186205?text=Olá%20Dr.%20Vitor,%20quero%20saber%20mais%20sobre%20Salário-Maternidade."
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white text-lg font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105"
            >
              <MessageCircle size={24} />
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Shortcuts */}
      <ServiceShortcuts />

      {/* 2. CAROUSEL 1: GESTANTE RURAL (Planning) */}
      <section className="bg-background-light pt-8">
        <CarouselSection 
          title="Direitos da Gestante Rural" 
          subtitle="Informações sobre o benefício previdenciário."
          items={gestanteData} 
          variant="gestante" 
        />
      </section>

      {/* 3. CAROUSEL 2: STRATEGY (Single Contribution) */}
      <section className="bg-emerald-50 border-y border-emerald-200">
        <CarouselSection 
          title="Planejamento Previdenciário" 
          subtitle="Estratégias legais de contribuição."
          items={strategyData} 
          variant="strategy" 
        />
      </section>

      {/* 4. CAROUSEL 3: RETROACTIVE (Already Born) */}
      <section className="bg-background-light pb-12">
        <CarouselSection 
          title="Benefício Retroativo" 
          subtitle="Prazos para requerimento após o parto."
          items={retroactiveData} 
          variant="retroactive" 
        />
      </section>

      {/* 5. DOCUMENTS GUIDE */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Alert Box - Information */}
          <div className="bg-amber-100 text-amber-900 border-l-8 border-amber-500 rounded-r-xl p-8 mb-8 shadow-lg">
            <div className="flex items-start gap-4">
               <AlertCircle size={48} className="text-amber-600 flex-shrink-0" />
               <div>
                 <h3 className="text-2xl font-bold mb-2 font-heading">Atenção aos Prazos</h3>
                 <p className="text-lg leading-relaxed">
                   O planejamento previdenciário é fundamental para o cumprimento dos requisitos de carência e qualidade de segurado. 
                   Consulte um advogado para verificar sua situação específica.
                 </p>
                 <a 
                   href="https://wa.me/5585981186205?text=Olá%20Dr.%20Vitor,%20preciso%20de%20orientação." 
                   className="inline-block mt-4 bg-whatsapp hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
                 >
                   Agendar Consulta
                 </a>
               </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-white drop-shadow-md">Documentação Necessária</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-400 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-pink-600 font-bold text-xl">
                <Heart size={28} /> Comprovação da Gestação
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Exames ou certidão de nascimento da criança.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-emerald-500 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-emerald-600 font-bold text-xl">
                <DollarSign size={28} /> Contribuições
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Guias de recolhimento (GPS) quando houver.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-400 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-pink-600 font-bold text-xl">
                <MapPin size={28} /> Documentos Rurais
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Documentos que comprovem a atividade rural (ITR, contratos, notas fiscais).</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-400 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-pink-600 font-bold text-xl">
                <Briefcase size={28} /> Provas de Atividade
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Documentos que demonstrem o trabalho no campo no período de carência.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-400 hover:scale-[1.02] transition-transform duration-300 text-text-main md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4 text-pink-600 font-bold text-xl">
                <UserCheck size={28} /> Identificação
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">RG, CPF e comprovante de residência atualizados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 bg-background-white">
        <div className="max-w-4xl mx-auto px-4">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Dúvidas Frequentes</h2>
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
                 <div className="aspect-[3/4] bg-gradient-to-br from-primary to-primary-dark rounded-lg shadow-2xl flex items-center justify-center text-white relative overflow-hidden group">
                    <UserCheck size={120} className="opacity-50" />
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
                       Especialista em Direito Previdenciário e em <strong>Salário-Maternidade</strong>, com foco na garantia de direitos para mães rurais e urbanas.
                    </p>
                    <p>
                       Atuo com ética e profissionalismo para assegurar que o benefício seja concedido corretamente, inclusive com análise de valores retroativos.
                    </p>
                 </div>
                 
                 <div className="mt-8">
                    <a href="https://wa.me/5585981186205?text=Olá Dr. Vitor, gostaria de falar sobre salário maternidade." className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md shadow-lg transition-transform hover:scale-105">
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

export default SalarioMaternidade;