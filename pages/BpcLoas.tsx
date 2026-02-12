import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, ChevronLeft, ChevronRight, 
  User, Brain, Heart, Eye, Activity, Zap, Accessibility, Stethoscope, AlertCircle, Dna, // Profile Icons
  AlertTriangle, FileWarning, Ban, Home, Users, SearchX, FileX, // Risk Icons
  Gavel, FileCheck, Clock, TrendingUp, Globe, Lock, Calculator, // Solution Icons
  HelpCircle, CheckCircle, Trophy, ShieldCheck, MapPin
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

// --- DATA STRUCTURES ---

const profilesData = [
  { icon: <User size={32} />, title: "Idosos (65+ anos)", text: "Cidadãos com 65 anos ou mais que comprovem não possuir meios de prover a própria manutenção.", msg: "BPC para idoso" },
  { icon: <Brain size={32} />, title: "Autismo (TEA)", text: "Pessoas com Transtorno do Espectro Autista que enfrentam barreiras.", msg: "BPC para autismo" },
  { icon: <Heart size={32} />, title: "Síndrome de Down", text: "Apoio para pessoas com Síndrome de Down em situação de vulnerabilidade.", msg: "BPC para Síndrome de Down" },
  { icon: <Eye size={32} />, title: "Deficiência Visual/Auditiva", text: "Pessoas com deficiência visual ou auditiva que impeça a participação plena na sociedade.", msg: "BPC para deficiência visual/auditiva" },
  { icon: <Activity size={32} />, title: "Esquizofrenia/Saúde Mental", text: "Transtornos mentais graves que geram incapacidade para o trabalho.", msg: "BPC para saúde mental" },
  { icon: <Zap size={32} />, title: "Epilepsia Refratária", text: "Casos de epilepsia de difícil controle que limitam a vida laboral.", msg: "BPC para epilepsia" },
  { icon: <Accessibility size={32} />, title: "Mobilidade Reduzida", text: "Deficiências físicas que causam restrições de mobilidade.", msg: "BPC para mobilidade reduzida" },
  { icon: <Stethoscope size={32} />, title: "Doenças Graves", text: "Portadores de doenças graves que impedem o sustento próprio.", msg: "BPC para doenças graves" },
  { icon: <AlertCircle size={32} />, title: "Dependência Química", text: "Casos graves de dependência que geram incapacidade.", msg: "BPC para dependência química" },
  { icon: <Dna size={32} />, title: "Doenças Raras", text: "Condições genéticas raras que demandam cuidados constantes.", msg: "BPC para doenças raras" },
];

const risksData = [
  { icon: <FileWarning size={32} />, title: "CadÚnico Desatualizado", text: "A falta de atualização do cadastro pode gerar suspensão do benefício.", btn: "Regularizar CadÚnico", msg: "ajuda com CadÚnico desatualizado BPC" },
  { icon: <SearchX size={32} />, title: "Revisão de Renda", text: "Procedimentos do INSS para verificação da renda familiar per capita.", btn: "Consultar Revisão", msg: "ajuda com revisão de renda BPC" },
  { icon: <Ban size={32} />, title: "Perícia Médica", text: "Necessidade de agendamento e realização de perícia médica periódica.", btn: "Informações Perícia", msg: "ajuda com bloqueio de perícia BPC" },
  { icon: <AlertTriangle size={32} />, title: "Divergências de CPF", text: "Problemas cadastrais no CPF podem impactar o recebimento.", btn: "Regularizar CPF", msg: "ajuda com CPF irregular BPC" },
  { icon: <Users size={32} />, title: "Composição Familiar", text: "Alterações na composição familiar devem ser informadas.", btn: "Atualizar Dados", msg: "ajuda com novo emprego na família BPC" },
  { icon: <Home size={32} />, title: "Dois BPC na mesma Casa", text: "Regras sobre o recebimento de mais de um benefício no mesmo lar.", btn: "Entender Regras", msg: "ajuda com dois BPC na mesma casa" },
  { icon: <MapPin size={32} />, title: "Endereço Desatualizado", text: "Manter o endereço atualizado é fundamental para notificações.", btn: "Atualizar Endereço", msg: "ajuda com mudança de endereço BPC" },
  { icon: <FileX size={32} />, title: "Indícios de Irregularidade", text: "Defesa administrativa em caso de notificação de irregularidade.", btn: "Consultar", msg: "ajuda com indícios de irregularidade BPC" },
  { icon: <Accessibility size={32} />, title: "Reavaliação da Deficiência", text: "Processos de reavaliação da condição de deficiência.", btn: "Saiba Mais", msg: "ajuda com reavaliação de deficiência BPC" },
  { icon: <TrendingUp size={32} />, title: "Variação no CNIS", text: "Análise de vínculos empregatícios no CNIS.", btn: "Consultar CNIS", msg: "ajuda com variação CNIS BPC" },
];

const solutionsData = [
  { icon: <Calculator size={32} />, title: "Cálculo de Renda", text: "Análise detalhada da renda familiar para enquadramento.", btn: "Analisar Renda", msg: "ajuda com BPC negado por renda" },
  { icon: <FileX size={32} />, title: "Perícia Médica", text: "Orientações sobre documentos médicos para perícia.", btn: "Documentos Perícia", msg: "ajuda com perícia médica negativa BPC" },
  { icon: <Clock size={32} />, title: "Acompanhamento", text: "Monitoramento do andamento do pedido administrativo.", btn: "Consultar Andamento", msg: "ajuda com demora na resposta BPC" },
  { icon: <FileWarning size={32} />, title: "Correção de Dados", text: "Retificação de informações incorretas no sistema do INSS.", btn: "Corrigir Dados", msg: "ajuda com erro no cálculo de renda BPC" },
  { icon: <FileCheck size={32} />, title: "Documentação", text: "Lista de documentos necessários para o requerimento.", btn: "Lista Documentos", msg: "ajuda com laudo médico rejeitado BPC" },
  { icon: <Clock size={32} />, title: "Agendamento", text: "Auxílio no agendamento de perícias e atendimentos.", btn: "Agendar", msg: "ajuda com agendamento de perícia BPC" },
  { icon: <Globe size={32} />, title: "Estrangeiros", text: "Informações sobre BPC para estrangeiros residentes.", btn: "Informações", msg: "ajuda com BPC para estrangeiros" },
  { icon: <Lock size={32} />, title: "Curatela", text: "Orientações sobre representação legal para o benefício.", btn: "Sobre Curatela", msg: "ajuda com curatela BPC" },
  { icon: <FileCheck size={32} />, title: "Comprovação Social", text: "Documentos para comprovar a situação de vulnerabilidade.", btn: "Saiba Mais", msg: "ajuda com provas de pobreza BPC" },
  { icon: <Gavel size={32} />, title: "Recursos", text: "Atuação em recursos administrativos e judiciais.", btn: "Consultar", msg: "ajuda com recurso administrativo BPC" },
];

const faqItems = [
  { question: "Posso receber BPC e outra pessoa da minha família também?", answer: "Sim! Se houver outro idoso ou pessoa com deficiência na casa que já receba o BPC ou uma aposentadoria de valor mínimo, esse valor não entra no cálculo para o seu novo pedido." },
  { question: "O INSS negou porque minha renda passou de 1/4 do salário mínimo. Ainda tenho chance?", answer: "Sim. Em via judicial, é possível demonstrar que a renda familiar, mesmo superior a 1/4 do salário mínimo, não é suficiente para prover as necessidades básicas, considerando gastos com saúde e medicamentos." },
  { question: "O BPC dá direito a 13º salário ou pensão por morte?", answer: "Não. O BPC é um benefício assistencial e, pela legislação atual, não prevê pagamento de 13º salário nem gera direito a pensão por morte." },
  { question: "Preciso ter contribuído para o INSS para receber o BPC?", answer: "Não. O BPC é um benefício assistencial destinado a quem não possui meios de prover a própria manutenção, não exigindo contribuições prévias ao INSS." },
  { question: "O que é o 'Pente-fino' e como me proteger?", answer: "É um procedimento de revisão dos benefícios. Para evitar problemas, mantenha seu CadÚnico atualizado a cada dois anos e seus dados no INSS sempre corretos." },
];

// --- REUSABLE COMPONENT: CAROUSEL ---

const CarouselSection: React.FC<{ 
  title: string; 
  subtitle?: string;
  items: any[]; 
  variant: 'profiles' | 'risks' | 'solutions'; 
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
  
  // Logic for infinite loop illusion
  const filledItems = visibleItems.length < itemsPerPage 
    ? [...visibleItems, ...items.slice(0, itemsPerPage - visibleItems.length)]
    : visibleItems;

  const getCardStyle = () => {
    if (variant === 'profiles') return "bg-white border-t-4 border-secondary hover:-translate-y-2";
    if (variant === 'risks') return "bg-red-50 border-l-4 border-red-500 hover:shadow-red-100";
    if (variant === 'solutions') return "bg-white border border-secondary/30 hover:border-secondary hover:shadow-lg";
    return "";
  };

  const getIconStyle = () => {
    if (variant === 'risks') return "bg-red-100 text-red-600";
    if (variant === 'profiles') return "bg-primary/10 text-primary";
    return "bg-secondary/10 text-secondary";
  };

  const getButtonStyle = () => {
    if (variant === 'risks') return "bg-red-600 hover:bg-red-700 text-white";
    return "text-secondary border border-secondary hover:bg-secondary hover:text-white";
  };

  return (
    <div className="relative py-12">
      <div className="text-center mb-10 px-4">
        <h2 className={`text-3xl font-heading font-bold mb-2 ${variant === 'risks' ? 'text-red-700' : 'text-primary'}`}>{title}</h2>
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

// --- MAIN COMPONENT ---

const BpcLoas: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image: Elderly/Inclusive */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 drop-shadow-lg">
              Consultoria sobre <span className="text-primary bg-white px-3 py-1 rounded-lg shadow-md inline-block mt-2 md:mt-0">BPC/LOAS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-semibold drop-shadow-md leading-relaxed">
              Informações e assessoria jurídica sobre o Benefício de Prestação Continuada para idosos e pessoas com deficiência.
            </p>
            <a
              href="https://wa.me/5585981186205?text=Olá%20Dr.%20Vitor,%20quero%20saber%20mais%20sobre%20o%20BPC%20LOAS."
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white text-lg font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105"
            >
              <MessageCircle size={24} />
              Falar com um Especialista Agora
            </a>
          </div>
        </div>
      </section>

      {/* Shortcuts */}
      <ServiceShortcuts />

      {/* 2. CAROUSEL: QUEM TEM DIREITO */}
      <section className="bg-background-light pt-8">
        <CarouselSection 
          title="Quem pode solicitar o BPC/LOAS?" 
          subtitle="Requisitos básicos para o benefício"
          items={profilesData} 
          variant="profiles" 
        />
      </section>

      {/* 3. CAROUSEL: RISCOS (Pente Fino) */}
      <section className="bg-white border-y border-gray-200">
        <CarouselSection 
          title="Pontos de Atenção" 
          subtitle="Fatores que podem impactar o benefício."
          items={risksData} 
          variant="risks" 
        />
      </section>

      {/* 4. CAROUSEL: SOLUÇÕES */}
      <section className="bg-background-light pb-12">
        <CarouselSection 
          title="Nossos Serviços" 
          subtitle="Como podemos auxiliar no seu processo."
          items={solutionsData} 
          variant="solutions" 
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
            <h3 className="text-2xl font-bold mb-4 font-heading">Precisa de ajuda com a documentação?</h3>
            <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
              Organizar os documentos corretamente é essencial para a análise do pedido. 
              Entre em contato para receber orientações sobre a documentação necessária.
            </p>
            <a 
              href="https://wa.me/5585981186205?text=Olá%20Dr.%20Vitor,%20preciso%20de%20orientação%20sobre%20documentos%20para%20BPC%20LOAS." 
              className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Falar com Advogado Agora
            </a>
          </div>

          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-white drop-shadow-md">Documentos para Análise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <FileCheck size={28} /> CadÚnico
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Inscrição atualizada no Cadastro Único do Governo Federal.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <Users size={28} /> Documentos Pessoais
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">RG, CPF e Certidões de todos os componentes do grupo familiar.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <Calculator size={28} /> Renda
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Comprovantes de renda ou declaração de ausência de renda.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <FileWarning size={28} /> Despesas Médicas
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Comprovantes de gastos com medicamentos, tratamentos e fraldas.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-300 text-text-main md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4 text-secondary font-bold text-xl">
                <Stethoscope size={28} /> Laudos Médicos (PCD)
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Laudos, exames e receitas médicas que comprovem a deficiência e a incapacidade de longo prazo.</p>
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
                       Especialista em Direito Previdenciário e em <strong>Direito Assistencial (BPC/LOAS)</strong>, com foco na defesa dos direitos de idosos e pessoas com deficiência. 
                    </p>
                    <p>
                       Atuo com dedicação para garantir que os benefícios assistenciais sejam concedidos a quem tem direito, sempre pautado pela ética e transparência.
                    </p>
                 </div>
                 
                 <div className="mt-8">
                    <a href="https://wa.me/5585981186205?text=Olá%20Dr.%20Vitor,%20gostaria%20de%20falar%20sobre%20um%20caso%20de%20BPC%20LOAS." className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md shadow-lg transition-transform hover:scale-105">
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

export default BpcLoas;