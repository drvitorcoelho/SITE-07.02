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
  { icon: <DollarSign size={32} />, title: "Valor de R$ 6.578,00", text: "Garanta o suporte financeiro que você e seu bebê merecem, com o 13º proporcional!", msg: "garantir valor de 6.578 salário maternidade" },
  { icon: <Calendar size={32} />, title: "Receba Antes do Parto", text: "Comece a receber até 28 dias antes do nascimento para o enxoval.", msg: "receber salário maternidade antes do parto" },
  { icon: <ShieldCheck size={32} />, title: "Proteção no Campo", text: "Sua garantia de descanso e sustento durante os primeiros meses.", msg: "proteção gestante rural" },
  { icon: <FileCheck size={32} />, title: "Evite Negativas", text: "Com a estratégia certa, o dinheiro cai na conta sem burocracia.", msg: "evitar negativa do INSS gestante" },
  { icon: <Heart size={32} />, title: "Tranquilidade na Gestação", text: "4 meses de salário mínimo + 13º para a paz que toda gestante precisa.", msg: "tranquilidade na gestação rural" },
  { icon: <CheckCircle size={32} />, title: "Aprovação Rápida", text: "Analisamos seu caso para uma concessão segura pelo INSS.", msg: "aprovação rápida salário maternidade" },
  { icon: <FileText size={32} />, title: "Dossiê de Documentos", text: "Organizamos tudo antes do parto para não haver correria.", msg: "organizar documentos maternidade rural" },
  { icon: <Baby size={32} />, title: "Segurança Pós-Parto", text: "Recursos garantidos para fraldas, remédios e alimentação.", msg: "segurança pós parto rural" },
  { icon: <Smile size={32} />, title: "Foco na Saúde", text: "Permita-se cuidar de você e do bebê sem o estresse da falta de renda.", msg: "foco na saúde da gestante" },
  { icon: <MessageCircle size={32} />, title: "Consultoria Gratuita", text: "Fale conosco e descubra como garantir seu direito hoje.", msg: "consultoria gratuita gestante rural" },
];

const strategyData = [
  { icon: <Target size={32} />, title: "Apenas Uma Contribuição", text: "Basta um único pagamento antes do parto para liberar o benefício.", msg: "estratégia contribuição única INSS" },
  { icon: <Unlock size={32} />, title: "Fim da Carência", text: "Você não precisa mais de 10 meses de trabalho para ter direito.", msg: "salário maternidade sem carência" },
  { icon: <Clock size={32} />, title: "Pague Antes do Parto", text: "O segredo é quitar a contribuição antes do nascimento do bebê.", msg: "pagar INSS antes do parto" },
  { icon: <Shield size={32} />, title: "Blindagem Jurídica", text: "A contribuição única dificulta que o INSS negue seu pedido.", msg: "blindagem jurídica salário maternidade" },
  { icon: <TrendingUp size={32} />, title: "Investimento Seguro", text: "Um pequeno valor pago garante mais de R$ 6.578,00 de retorno.", msg: "investimento salário maternidade" },
  { icon: <BookOpen size={32} />, title: "Regras de 2025", text: "A IN 188/2025 do INSS é a sua maior aliada neste momento.", msg: "regras INSS 2025 maternidade" },
  { icon: <Barcode size={32} />, title: "Código de Pagamento", text: "Orientamos sobre o código e valor exatos para não haver erros.", msg: "código pagamento INSS gestante" },
  { icon: <Zap size={32} />, title: "Proteção Imediata", text: "Pagou e processou? Você já está segurada para o parto.", msg: "proteção imediata INSS" },
  { icon: <Key size={32} />, title: "Ponte para o Direito", text: "Ideal para quem está há muito tempo sem contribuir com o INSS.", msg: "voltar a pagar INSS grávida" },
  { icon: <Scale size={32} />, title: "Estratégia Legal", text: "Método 100% dentro da lei e das normas atuais da previdência.", msg: "estratégia legal salário maternidade" },
];

const retroactiveData = [
  { icon: <History size={32} />, title: "Até 5 Anos Atrás", text: "Se o seu filho nasceu nos últimos 5 anos e você era rural, o direito ainda é seu.", msg: "salário maternidade retroativo 5 anos" },
  { icon: <Coins size={32} />, title: "Receba Tudo de Vez", text: "Valores retroativos acumulados (incluindo 13º) são pagos em parcela única.", msg: "receber atrasados salário maternidade" },
  { icon: <RefreshCw size={32} />, title: "Recupere Negativas", text: "Negaram seu pedido no passado? Nós revertemos na justiça.", msg: "reverter negativa antiga maternidade" },
  { icon: <TrendingUp size={32} />, title: "R$ 6.578,00 Corrigidos", text: "O valor é atualizado para o salário mínimo vigente de hoje, com 13º.", msg: "valor atualizado maternidade" },
  { icon: <Users size={32} />, title: "Vários Filhos", text: "Pode receber por cada filho nascido no prazo de 5 anos.", msg: "salário maternidade vários filhos" },
  { icon: <Briefcase size={32} />, title: "Mesmo Sem Pagar Carnê", text: "Provamos seu trabalho na roça com documentos e testemunhas.", msg: "salário maternidade sem pagar carnê" },
  { icon: <FileText size={32} />, title: "Documentos Antigos", text: "Notas e certidões da época do parto são provas fundamentais.", msg: "provas antigas maternidade rural" },
  { icon: <PiggyBank size={32} />, title: "Suporte para a Criança", text: "Um valor essencial para ajudar na criação do seu filho.", msg: "suporte financeiro filho rural" },
  { icon: <DollarSign size={32} />, title: "Sem Custos Iniciais", text: "Você só paga nossos honorários quando o dinheiro cair na conta.", msg: "advogado salário maternidade êxito" },
  { icon: <Search size={32} />, title: "Análise de Prazo", text: "Verificamos gratuitamente se você ainda está dentro do tempo legal.", msg: "analisar prazo salário maternidade" },
];

const faqItems = [
  { question: "Quando devo pagar a contribuição única?", answer: "Obrigatoriamente antes da data do parto para garantir a qualidade de segurada no sistema. Se pagar depois, a estratégia não funciona para a carência." },
  { question: "Quanto tempo preciso esperar após pagar?", answer: "Não há tempo de espera (carência) se você já teve vínculos anteriores ou se enquadra na regra de transição. Pagou antes do parto? O direito está garantido pela IN 188/2025." },
  { question: "E se o meu filho já nasceu?", answer: "Você ainda pode buscar o retroativo se ele tiver até 5 anos, através da prova do trabalho rural (notas, documentos da terra) em vez da contribuição única." },
  { question: "Preciso ter documento da terra no meu nome?", answer: "Não necessariamente. Documentos em nome do pai, esposo ou sogro podem ser usados para comprovar que você trabalha naquelas terras em regime de economia familiar." },
  { question: "O Salário-Maternidade Rural inclui o 13º salário?", answer: "Sim! Você tem direito ao 13º salário proporcional, que será pago junto com a última parcela do benefício ou no valor retroativo total." },
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
              Gestante Rural: Garanta <span className="text-pink-600 bg-white px-3 py-1 rounded-lg shadow-md inline-block">R$ 6.578,00</span> para o seu Bebê
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-semibold drop-shadow-md leading-relaxed">
              Sabia que com apenas <strong>uma única contribuição</strong> antes do parto você garante o seu Salário-Maternidade integral, <strong>incluindo o 13º salário proporcional</strong>? Não corra riscos e planeje o futuro do seu filho com quem entende do assunto.
            </p>
            <a
              href="https://wa.me/5585981186205?text=Olá%20Dr.%20Vitor,%20estou%20grávida%20e%20quero%20garantir%20meu%20Salário-Maternidade%20de%20R$%206.578."
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white text-lg font-bold py-4 px-10 rounded-md shadow-xl transition-transform hover:scale-105"
            >
              <MessageCircle size={24} />
              Garantir meu Benefício Agora
            </a>
          </div>
        </div>
      </section>

      {/* Shortcuts */}
      <ServiceShortcuts />

      {/* 2. CAROUSEL 1: GESTANTE RURAL (Planning) */}
      <section className="bg-background-light pt-8">
        <CarouselSection 
          title="Planejamento para a Gestante Rural" 
          subtitle="Prepare-se para receber seu benefício com tranquilidade."
          items={gestanteData} 
          variant="gestante" 
        />
      </section>

      {/* 3. CAROUSEL 2: STRATEGY (Single Contribution) */}
      <section className="bg-emerald-50 border-y border-emerald-200">
        <CarouselSection 
          title="O Segredo da Contribuição Única" 
          subtitle="A estratégia legal que o INSS não divulga para você."
          items={strategyData} 
          variant="strategy" 
        />
      </section>

      {/* 4. CAROUSEL 3: RETROACTIVE (Already Born) */}
      <section className="bg-background-light pb-12">
        <CarouselSection 
          title="Seu Filho já Nasceu? Você ainda pode Receber!" 
          subtitle="Não deixe o dinheiro da sua família perdido. Busque até 5 anos atrás."
          items={retroactiveData} 
          variant="retroactive" 
        />
      </section>

      {/* 5. DOCUMENTS GUIDE */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Alert Box - Specific for Pregnant Women - RISK */}
          <div className="bg-amber-100 text-amber-900 border-l-8 border-amber-500 rounded-r-xl p-8 mb-8 shadow-lg">
            <div className="flex items-start gap-4">
               <AlertCircle size={48} className="text-amber-600 flex-shrink-0" />
               <div>
                 <h3 className="text-2xl font-bold mb-2 font-heading">Gestante, não corra riscos desnecessários!</h3>
                 <p className="text-lg leading-relaxed">
                   Uma contribuição errada ou paga fora do prazo pode te fazer perder <strong>R$ 6.578,00</strong>. 
                   Entre em contato agora para receber o passo a passo da estratégia da contribuição única e garanta o futuro do seu bebê.
                 </p>
                 <a 
                   href="https://wa.me/5585981186205?text=Olá%20Dr.%20Vitor,%20preciso%20de%20orientação%20sobre%20a%20contribuição%20única%20para%20Gestante." 
                   className="inline-block mt-4 bg-whatsapp hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
                 >
                   Falar com Especialista
                 </a>
               </div>
            </div>
          </div>

          {/* Alert Box - Values Explanation */}
          <div className="bg-blue-50 text-blue-900 border-l-8 border-blue-500 rounded-r-xl p-8 mb-16 shadow-lg">
            <div className="flex items-start gap-4">
               <Info size={48} className="text-blue-600 flex-shrink-0" />
               <div>
                 <h3 className="text-2xl font-bold mb-2 font-heading">Atenção aos Valores</h3>
                 <p className="text-lg leading-relaxed text-justify">
                    O valor total de <strong>R$ 6.578,00</strong> inclui as 4 parcelas do benefício somadas ao <strong>13º salário proporcional (abono anual)</strong>. 
                    A possibilidade de receber o 13º depende da análise do seu histórico previdenciário no ano do parto. Caso você já tenha recebido o 13º por outro benefício no mesmo ano, o valor final poderá ser de R$ 6.072,00. Nossa equipe realiza o cálculo exato para garantir que você receba cada centavo do seu direito.
                 </p>
               </div>
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-white drop-shadow-md">O que você precisa para Garantir seu Benefício</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-400 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-pink-600 font-bold text-xl">
                <Heart size={28} /> Exame de Gravidez
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Para comprovar a gestação e planejar os prazos de pagamento.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-emerald-500 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-emerald-600 font-bold text-xl">
                <DollarSign size={28} /> Guia de Contribuição
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">A guia paga (GPS) é a prova do seu seguro antes do parto.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-400 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-pink-600 font-bold text-xl">
                <MapPin size={28} /> Documentos da Terra
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">ITR, contrato de parceria, carta de anuência ou declaração de trabalho rural.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-400 hover:scale-[1.02] transition-transform duration-300 text-text-main">
              <div className="flex items-center gap-3 mb-4 text-pink-600 font-bold text-xl">
                <Briefcase size={28} /> Provas de Lavradora
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Certidões antigas, histórico escolar rural ou ficha do sindicato.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-pink-400 hover:scale-[1.02] transition-transform duration-300 text-text-main md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4 text-pink-600 font-bold text-xl">
                <UserCheck size={28} /> RG e CPF
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">Seus documentos de identificação atualizados e em bom estado.</p>
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
                 <h2 className="text-3xl font-heading font-bold text-primary mb-4">Especialista em Causas Rurais</h2>
                 <div className="flex flex-wrap items-center gap-3 mb-6">
                    <h3 className="text-2xl font-bold text-secondary">Dr. João Vitor Alves Honorato Coelho</h3>
                    <span className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md tracking-wide uppercase">OAB/CE 56.789</span>
                 </div>
                 
                 <div className="space-y-4 text-text-main text-lg leading-relaxed text-justify">
                    <p>
                       Com vasta experiência em garantir direitos para as famílias do campo, sou especialista em aplicar as novas estratégias do INSS para que <strong>Gestantes Rurais</strong> não percam seus benefícios.
                    </p>
                    <p>
                       Minha missão é assegurar que você receba cada centavo para cuidar do seu bebê com dignidade.
                    </p>
                 </div>
                 
                 <div className="mt-8">
                    <a href="https://wa.me/5585981186205?text=Olá%20Dr.%20Vitor,%20quero%20sua%20ajuda%20para%20garantir%20meu%20Salário-Maternidade." className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md shadow-lg transition-transform hover:scale-105">
                       <MessageCircle size={20} />
                       Falar com Dr. Vitor no WhatsApp
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

export default SalarioMaternidade;