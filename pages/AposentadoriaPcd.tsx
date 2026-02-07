import React, { useState, useRef, useEffect } from 'react';
import { 
  Calculator, CheckCircle, AlertTriangle, MessageCircle, Info, Accessibility, 
  ChevronRight, ChevronLeft, Calendar, DollarSign, Clock, Check, Heart, Scale, FileText, 
  Eye, Brain, Activity, User, FileCheck, Stethoscope, AlertOctagon, HelpCircle
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

// --- CONSTANTES & DADOS ---

const SM_2026 = 1621.00;

// Dados do Carrossel de Doenças
const diseasesSlides = [
  {
    id: 1,
    law: "🏥 ART. 151 - LEI 8.213/1991",
    title: "Doenças Graves - Sem Carência",
    subtitle: "Se comprovada a incapacidade, não exigem tempo mínimo de pagamento",
    description: "Estas doenças presume-se serem graves o suficiente. Se o perito confirmar que você não pode trabalhar, a aposentadoria sai **sem exigir 12 meses de contribuição**.",
    lists: [
      ["Câncer (Neoplasia Maligna)", "Cardiopatia Grave", "Doença de Parkinson", "Espondilite Anquilosante", "Nefropatia Grave", "AIDS/SIDA"],
      ["Alienação Mental", "Cegueira", "Esclerose Múltipla", "Hepatopatia Grave", "Paralisia Irreversível", "Tuberculose Ativa", "Hanseníase"]
    ],
    alert: {
      type: "warning",
      title: "ATENÇÃO: Diagnóstico não é suficiente",
      text: "O perito do INSS precisa confirmar que a doença gera incapacidade permanente e impossibilidade de reabilitação."
    }
  },
  {
    id: 2,
    law: "📊 ESTATÍSTICAS DO INSS",
    title: "Doenças Campeãs - Maior Volume",
    subtitle: "Causam muita limitação física ou mental - Exigem 12 meses de carência",
    description: "Estas doenças **não estão na lista de isenção**, mas são as que **MAIS aposentam por volume** porque causam limitação significativa.",
    customContent: (
      <div className="space-y-4 my-6 text-left">
        <div>
          <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><Accessibility size={18} /> DOENÇAS DA COLUNA</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Hérnia de Disco grave com compressão</li>
            <li>Artrose severa (quadril/joelho/coluna)</li>
            <li>Que não melhora com cirurgia</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><Brain size={18} /> TRANSTORNOS MENTAIS</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li><strong>Depressão Recorrente Grave</strong> (resistente a remédios)</li>
            <li><strong>Transtorno Bipolar</strong> (fases maníacas incontroláveis)</li>
          </ul>
        </div>
      </div>
    ),
    alert: {
      type: "warning",
      title: "EXIGÊNCIA: 12 Meses de Carência",
      text: "Você precisa ter contribuído ao INSS por pelo menos 12 meses. Laudo médico detalhado é essencial."
    }
  },
  {
    id: 3,
    law: "♿ LEI 15.176/2025 E LEI 13.146/2015",
    title: "Novas Vias - Aposentadoria PCD",
    subtitle: "Doenças que permitem aposentadoria facilitada por serem deficiência",
    description: "Estas doenças dificilmente geram \"invalidez total\" direta, mas agora permitem **APOSENTADORIA FACILITADA** (regra mais leve) por serem consideradas Deficiência.",
    customContent: (
      <div className="space-y-4 my-6 text-left">
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <h4 className="font-bold text-green-800 mb-1 flex items-center gap-2"><Check size={16} /> FIBROMIALGIA</h4>
          <p className="text-xs text-green-700">Lei 15.176/2025. Se grave e incapacitante, requer avaliação biopsicossocial.</p>
        </div>
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <h4 className="font-bold text-green-800 mb-1 flex items-center gap-2"><Check size={16} /> VISÃO MONOCULAR</h4>
          <p className="text-xs text-green-700">Lei 14.126/2021. Classificada como deficiência visual. Tema 378 da TNU.</p>
        </div>
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <h4 className="font-bold text-green-800 mb-1 flex items-center gap-2"><Check size={16} /> AUTISMO (TEA) ADULTO</h4>
          <p className="text-xs text-green-700">Lei 12.764/2012. Nível de suporte 1, 2 ou 3. Requer avaliação multidisciplinar.</p>
        </div>
      </div>
    ),
    alert: {
      type: "success",
      title: "VANTAGEM: Requisitos Reduzidos",
      text: "Menos tempo de contribuição e idade reduzida comparado à aposentadoria comum. Sem fator previdenciário."
    }
  }
];

const faqData = [
  { q: "Qual a diferença entre Aposentadoria PCD e BPC/LOAS?", a: "A Aposentadoria PCD é para quem contribuiu ao INSS e pode receber valores muito maiores (até o teto). O BPC/LOAS é assistencial (valor fixo de 1 salário mínimo) para quem não contribuiu e tem baixa renda." },
  { q: "Preciso ter diagnóstico de deficiência para aposentar?", a: "Sim, mas o diagnóstico sozinho não basta. O INSS avalia o IMPACTO da deficiência na sua vida através da perícia biopsicossocial (IF-BrA)." },
  { q: "Posso trabalhar enquanto recebo Aposentadoria PCD?", a: "Sim! Diferente da Aposentadoria por Invalidez ou BPC, na Aposentadoria PCD você pode continuar trabalhando e recebendo o benefício." },
  { q: "Fibromialgia aposenta em 2026?", a: "Sim! A Lei 15.176/2025 reconheceu a Fibromialgia como deficiência. Agora há muito mais facilidade de aprovação com a avaliação biopsicossocial." },
  { q: "E se meu pedido for negado?", a: "Você tem direito a recurso administrativo ou ação judicial. Um especialista pode identificar os erros do INSS e buscar a aprovação." }
];

// --- SUB-COMPONENTES ---

const DiseasesCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % diseasesSlides.length);
  const prev = () => setCurrent((p) => (p - 1 + diseasesSlides.length) % diseasesSlides.length);

  const slide = diseasesSlides[current];

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-4 border-primary max-w-4xl mx-auto">
      <div className="p-8 md:p-12">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs tracking-widest rounded-full mb-3">{slide.law}</span>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">{slide.title}</h3>
          <p className="text-gray-500 italic">{slide.subtitle}</p>
        </div>

        <div className="text-gray-700 leading-relaxed mb-8 text-center md:text-left">
          {slide.description.split('**').map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
        </div>

        {slide.lists ? (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {slide.lists.map((list, i) => (
              <ul key={i} className="space-y-2">
                {list.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ) : slide.customContent}

        <div className={`p-6 rounded-lg flex items-start gap-4 ${slide.alert.type === 'warning' ? 'bg-[#fff3cd] border-l-4 border-[#f39c12]' : 'bg-[#d4edda] border-l-4 border-[#4caf50]'}`}>
          <div className="text-2xl flex-shrink-0">{slide.alert.type === 'warning' ? '⚠️' : '✅'}</div>
          <div>
            <h4 className={`font-bold text-lg mb-1 ${slide.alert.type === 'warning' ? 'text-[#003366]' : 'text-[#155724]'}`}>{slide.alert.title}</h4>
            <p className={`text-sm ${slide.alert.type === 'warning' ? 'text-[#333]' : 'text-[#155724]'}`}>{slide.alert.text}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-between items-center">
        <button onClick={prev} className="flex items-center gap-2 text-primary font-bold hover:bg-gray-200 px-4 py-2 rounded transition-colors">
          <ChevronLeft /> Anterior
        </button>
        <div className="flex gap-2">
          {diseasesSlides.map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-gray-300'}`} />
          ))}
        </div>
        <button onClick={next} className="flex items-center gap-2 text-primary font-bold hover:bg-gray-200 px-4 py-2 rounded transition-colors">
          Próximo <ChevronRight />
        </button>
      </div>
    </div>
  );
};

// Componente de Checkbox Personalizado (Reutilizável, estilo Card)
const CustomCheckbox = ({ id, checked, onChange, label }: { id: string, checked: boolean, onChange: (val: boolean) => void, label: string }) => (
  <div 
    onClick={() => onChange(!checked)}
    className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-primary/50 transition-colors shadow-sm cursor-pointer select-none group"
  >
    <div className={`w-6 h-6 rounded flex items-center justify-center border-2 transition-all duration-200 ${checked ? 'bg-whatsapp border-whatsapp' : 'bg-white border-gray-300 group-hover:border-primary'}`}>
      {checked && <Check size={16} className="text-white" strokeWidth={3} />}
    </div>
    <label htmlFor={id} className="cursor-pointer font-semibold text-gray-700 text-lg flex-grow">
      {label}
    </label>
  </div>
);

// --- PÁGINA PRINCIPAL ---

const AposentadoriaPcd: React.FC = () => {
  // State Calculator
  const [gender, setGender] = useState<'homem' | 'mulher'>('mulher');
  const [degree, setDegree] = useState<'grave' | 'moderada' | 'leve'>('grave');
  const [deficiencyTime, setDeficiencyTime] = useState<number | ''>('');
  const [contributionTime, setContributionTime] = useState<number | ''>('');
  const [age, setAge] = useState<number | ''>('');
  const [bolsaFamilia, setBolsaFamilia] = useState(false);
  const [existingBenefit, setExistingBenefit] = useState('nao');
  
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // Logic Constants
  const timeReqs = {
    'grave': { 'homem': 25, 'mulher': 20 },
    'moderada': { 'homem': 29, 'mulher': 24 },
    'leve': { 'homem': 33, 'mulher': 28 }
  };
  const ageReqs = { 'homem': 60, 'mulher': 55 };

  const handleCalculate = () => {
    if (deficiencyTime === '' || contributionTime === '' || age === '') {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    setShowResult(true);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const calculateResult = () => {
    const cTime = Number(contributionTime);
    const dTime = Number(deficiencyTime);
    const cAge = Number(age);

    // 1. Elegibilidade por Tempo
    const reqTime = timeReqs[degree][gender];
    const timeRemaining = Math.max(0, reqTime - cTime);
    
    // 2. Elegibilidade por Idade
    const reqAge = ageReqs[gender];
    const ageRemaining = Math.max(0, reqAge - cAge);
    
    const defRemaining = Math.max(0, 15 - dTime);
    const agePathBlocked = defRemaining > 0 || ageRemaining > 0;

    // Estimativa Financeira
    const estimatedMin = SM_2026; 
    const estimatedMax = 6484.00;

    const isEligible = timeRemaining <= 0 || (!agePathBlocked);

    return {
      timeRemaining,
      reqTime,
      isEligible,
      estimatedMin,
      estimatedMax,
      ageRemaining
    };
  };

  const results = calculateResult();

  const getWhatsappLink = () => {
    let text = `Olá! Fiz a simulação da Aposentadoria PCD 2026:%0A%0A`;
    text += `*Perfil:* ${gender === 'homem' ? 'Homem' : 'Mulher'}, Deficiência ${degree}%0A`;
    text += `*Tempo Deficiência:* ${deficiencyTime} anos%0A`;
    text += `*Tempo Contribuição:* ${contributionTime} anos%0A`;
    text += `*Idade:* ${age} anos%0A`;
    if(bolsaFamilia) text += `*Obs:* Recebo Bolsa Família.%0A`;
    
    if (showResult) {
      if (results.isEligible) {
         text += `*Resultado:* O sistema indicou que posso ter direito!%0A`;
      } else {
         text += `*Resultado:* Ainda falta tempo, quero planejar.%0A`;
      }
    }
    
    return `https://wa.me/5585981186205?text=${text}`;
  };

  // Reusable input style class (Matching CalculadoraSalarioMaternidade)
  const inputClass = "w-full p-4 border-2 border-gray-300 bg-white text-gray-900 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-lg shadow-sm placeholder-gray-500";

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-body text-[#333]">
      
      {/* SEÇÃO 1: HERO IMPACTANTE */}
      <section className="bg-primary-dark text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight drop-shadow-lg">
              Aposente-se Até 10 Anos Mais Cedo <br/>
              <span className="text-secondary">com a Aposentadoria PCD</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Se você sofre de limitação ou dor crônica (Fibromialgia, Problemas de Coluna, Autismo) e já contribuiu para o INSS, descubra agora o seu potencial de aposentadoria com valor integral.
            </p>
            <a 
              href="#calculadora"
              className="inline-flex items-center gap-3 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-transform hover:scale-105 text-lg"
            >
              <Calculator size={24} /> CALCULE MEU DIREITO AGORA
            </a>
          </div>
        </div>
      </section>

      <ServiceShortcuts />

      {/* SEÇÃO 2: TABELA COMPARATIVA (BPC vs PCD) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">BPC/LOAS vs. Aposentadoria PCD</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white text-sm uppercase tracking-wider">
                  <th className="p-5 w-1/3">Critério</th>
                  <th className="p-5 w-1/3 bg-primary-light">BPC/LOAS</th>
                  <th className="p-5 w-1/3 bg-secondary/90">Aposentadoria PCD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm md:text-base">
                {[
                  { label: "Valor Mensal (2026)", bpc: "R$ 1.621,00 (Fixo)", pcd: "Até R$ 7.000+/mês (Depende contribuição)" },
                  { label: "13º Salário", bpc: "Não recebe", pcd: "Sim (Integral)" },
                  { label: "Pensão por Morte", bpc: "Não deixa", pcd: "Sim, deixa para herdeiros" },
                  { label: "Pode Trabalhar?", bpc: "Não (perde o benefício)", pcd: "Sim, sem perder o benefício" },
                  { label: "Renda Familiar", bpc: "Limite R$ 405/pessoa", pcd: "Sem limite de renda" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 font-bold text-gray-700">{row.label}</td>
                    <td className="p-4 text-gray-600">{row.bpc}</td>
                    <td className="p-4 font-bold text-primary">{row.pcd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-primary p-4 rounded text-sm text-blue-900 flex items-start gap-3">
            <Info className="flex-shrink-0 mt-1" />
            <p>
              <strong>IMPORTANTE:</strong> Se você contribuiu para o INSS, a Aposentadoria PCD é geralmente MUITO MAIS VANTAJOSA. 
              Exemplo: Maria, 45 anos, Fibromialgia grave. BPC: R$ 1.621 | Aposentadoria PCD: R$ 6.484. <strong>Diferença de quase R$ 5.000/mês!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 & 5: CARROSSEL DE DOENÇAS */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Doenças que Aposentam em 2026</h2>
            <p className="text-gray-600">Conheça as condições reconhecidas para concessão de benefício.</p>
          </div>
          
          <DiseasesCarousel />
        </div>
      </section>

      {/* SEÇÃO 6: ENCARTE ESPECIAL (GRID: VISÃO MONOCULAR + FIBRO/TEA) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* CARD 1: Visão Monocular */}
            <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl shadow-xl p-1 h-full">
              <div className="bg-white rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                
                <span className="inline-block bg-secondary/10 text-secondary font-bold px-3 py-1 rounded mb-4 text-xs tracking-wider w-fit">LEI 14.126/2021</span>
                
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                  <Eye className="text-secondary" size={28} /> Visão Monocular
                </h2>
                
                <p className="text-sm text-gray-700 mb-6 flex-grow leading-relaxed">
                  Se você tem perda de visão em um olho, é reconhecido como PCD. O INSS exige a <strong>Avaliação Biopsicossocial (Tema 378 da TNU)</strong> para provar barreiras, não apenas o laudo médico.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-green-700 text-sm font-bold"><CheckCircle size={16} /> Aposentadoria Reduzida</div>
                  <div className="flex items-center gap-2 text-green-700 text-sm font-bold"><CheckCircle size={16} /> Isenção Imposto Renda</div>
                  <div className="flex items-center gap-2 text-green-700 text-sm font-bold"><CheckCircle size={16} /> BPC/LOAS (se baixa renda)</div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center mt-auto">
                  <div className="flex items-center justify-center gap-2 mb-2 text-orange-800 font-bold">
                    <AlertOctagon size={20} /> Alerta de Perícia
                  </div>
                  <p className="text-xs text-orange-700">
                    A perícia não avalia apenas a visão, mas as barreiras que você enfrenta no trabalho e na sociedade.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2: Fibromialgia & TEA (NOVO) */}
            <div className="bg-gradient-to-br from-purple-700 to-indigo-900 rounded-2xl shadow-xl p-1 h-full">
              <div className="bg-white rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-purple-600"></div>
                
                <span className="inline-block bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded mb-4 text-xs tracking-wider w-fit">LEI 14.705/2023 & 12.764/2012</span>
                
                <h2 className="text-2xl font-heading font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <Brain className="text-purple-600" size={28} /> Fibromialgia e TEA
                </h2>
                
                <p className="text-sm text-gray-700 mb-6 flex-grow leading-relaxed">
                  A Fibromialgia e o Autismo (mesmo leve ou adulto) garantem direitos PCD se houver <strong>barreiras funcionais</strong>. A dor crônica e as dificuldades de interação social contam tempo diferenciado.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-purple-700 text-sm font-bold"><CheckCircle size={16} /> Tempo Reduzido (LC 142/2013)</div>
                  <div className="flex items-center gap-2 text-purple-700 text-sm font-bold"><CheckCircle size={16} /> Sem Fator Previdenciário</div>
                  <div className="flex items-center gap-2 text-purple-700 text-sm font-bold"><CheckCircle size={16} /> Continuidade no Trabalho</div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 text-center mt-auto">
                  <div className="flex items-center justify-center gap-2 mb-2 text-indigo-800 font-bold">
                    <FileText size={20} /> Prova Invisível
                  </div>
                  <p className="text-xs text-indigo-700">
                    Dores e barreiras sociais não aparecem no Raio-X. O segredo é um relatório médico funcional detalhado.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 7: CALCULADORA */}
      <section className="py-20 bg-background-light" id="calculadora">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-primary p-8 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 flex justify-center items-center gap-3">
                <Calculator /> Calculadora de Aposentadoria PCD 2026
              </h2>
              <p className="opacity-90">Descubra o valor estimado do seu benefício e sua elegibilidade.</p>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              
              {/* Gênero */}
              <div>
                <label className="block text-primary-dark font-bold mb-3 text-lg">1. Qual é o seu gênero?</label>
                <div className="flex gap-4">
                  {['homem', 'mulher'].map((g) => (
                    <label key={g} className={`flex-1 cursor-pointer p-4 rounded-lg border-2 flex items-center justify-center gap-2 transition-all ${gender === g ? 'border-secondary bg-secondary/10 text-primary font-bold' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input type="radio" name="gender" value={g} checked={gender === g} onChange={() => setGender(g as any)} className="hidden" />
                      <span className="capitalize">{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Grau */}
              <div>
                <label className="block text-primary-dark font-bold mb-3 text-lg">2. Qual é o seu grau de deficiência?</label>
                <select value={degree} onChange={(e) => setDegree(e.target.value as any)} className={inputClass}>
                  <option value="grave">Grave</option>
                  <option value="moderada">Moderada</option>
                  <option value="leve">Leve</option>
                </select>
                <p className="text-xs text-gray-500 mt-2">*Se não tiver certeza, selecione "Grave" para simular o melhor cenário ou fale com nossos especialistas.</p>
              </div>

              {/* Tempos */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary-dark font-bold mb-2">3. Tempo COM deficiência (anos)</label>
                  <input type="number" value={deficiencyTime} onChange={(e) => setDeficiencyTime(e.target.value === '' ? '' : Number(e.target.value))} placeholder="Ex: 10" className={inputClass} />
                </div>
                <div>
                  <label className="block text-primary-dark font-bold mb-2">4. Tempo TOTAL contribuição (anos)</label>
                  <input type="number" value={contributionTime} onChange={(e) => setContributionTime(e.target.value === '' ? '' : Number(e.target.value))} placeholder="Ex: 20" className={inputClass} />
                </div>
              </div>

              {/* Idade */}
              <div>
                <label className="block text-primary-dark font-bold mb-2">5. Qual é a sua idade atual?</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))} placeholder="Ex: 45" className={inputClass} />
              </div>

              {/* Extras */}
              <div className="space-y-6">
                <CustomCheckbox 
                  id="bolsaFamilia"
                  label="Você recebe Bolsa Família?"
                  checked={bolsaFamilia}
                  onChange={setBolsaFamilia}
                />
                
                <div>
                  <label className="block text-primary-dark font-bold mb-2">Você já recebe algum benefício do INSS?</label>
                  <select value={existingBenefit} onChange={(e) => setExistingBenefit(e.target.value)} className={inputClass}>
                    <option value="nao">Não</option>
                    <option value="auxilio">Auxílio-Doença</option>
                    <option value="bpc">BPC/LOAS</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <button onClick={handleCalculate} className="w-full bg-whatsapp hover:bg-green-600 text-white font-bold py-5 rounded-xl text-xl shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-3">
                CALCULAR MEU DIREITO AGORA <ChevronRight />
              </button>
            </div>
          </div>

          {/* SEÇÃO 8: RESULTADO DO CÁLCULO */}
          {showResult && (
            <div ref={resultRef} className="mt-12 animate-fade-in space-y-8">
              
              {/* Resultado Financeiro */}
              <div className="bg-white rounded-xl shadow-lg border-l-8 border-secondary p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-primary"><DollarSign size={120} /></div>
                
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Resultado da Estimativa</h3>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-extrabold text-primary font-heading">
                    R$ 6.484,00<span className="text-lg text-gray-400 font-normal">*</span>
                  </span>
                  <p className="text-sm text-gray-500 mt-1">Valor Base Estimado (Considerando teto/média alta)</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 border-t border-gray-100 pt-6">
                  <div>
                    <span className="block text-sm text-gray-500">13º Salário Proporcional</span>
                    <strong className="text-xl text-green-600">+ R$ 540,33</strong>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Total Estimado a Receber</span>
                    <strong className="text-xl text-primary">R$ 7.024,33</strong>
                  </div>
                </div>
              </div>

              {/* Status de Elegibilidade */}
              <div className={`p-6 rounded-lg border-l-4 shadow-sm ${results.isEligible ? 'bg-green-50 border-green-500' : 'bg-amber-50 border-amber-500'}`}>
                <h4 className={`text-xl font-bold mb-2 ${results.isEligible ? 'text-green-800' : 'text-amber-800'}`}>
                  {results.isEligible ? '✅ Estratégia Válida: Forte Indício de Direito!' : '⚠️ Atenção: Tempo Faltante'}
                </h4>
                <p className="text-gray-700">
                  {results.isEligible 
                    ? "Sua situação indica que você cumpre os requisitos básicos. Fale com um especialista para validar a documentação." 
                    : `Você ainda precisa de aproximadamente ${results.timeRemaining.toFixed(1)} anos de contribuição ou aguardar a idade.`}
                </p>
              </div>

              {/* Alertas Específicos */}
              {bolsaFamilia && (
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 flex items-start gap-4">
                  <AlertTriangle className="text-orange-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-orange-900 font-bold mb-1">ATENÇÃO: Bolsa Família</strong>
                    <p className="text-sm text-orange-800">
                      A Aposentadoria é renda e pode suspender seu Bolsa Família. Planeje essa transição com cuidado!
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 flex items-start gap-4">
                <CheckCircle className="text-green-600 flex-shrink-0" />
                <div>
                  <strong className="block text-green-900 font-bold mb-1">BOA NOTÍCIA: Isenção de IR</strong>
                  <p className="text-sm text-green-800">
                    O valor é pago integralmente, sem descontos de Imposto de Renda para muitas doenças graves/PCD.
                  </p>
                </div>
              </div>

              {/* Disclaimer do Cálculo */}
              <p className="text-xs text-center text-gray-500 italic max-w-2xl mx-auto">
                * Nota: O valor de R$ 6.484,00 é uma estimativa baseada em um cenário de contribuição pelo teto ou média alta. O valor real depende da sua média salarial (80% maiores salários) e do fator previdenciário (se houver). Consulte um advogado para o cálculo exato (CNIS).
              </p>

              {/* CTA WhatsApp */}
              <div className="text-center pt-8">
                <a 
                  href={getWhatsappLink()} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-3 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all hover:scale-105 animate-pulse-slow"
                >
                  <MessageCircle size={24} /> FALAR COM UM DE NOSSOS ESPECIALISTAS
                </a>
                <p className="mt-4 text-sm text-gray-500">Análise Gratuita • Sem Compromisso • Resposta em Minutos</p>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* SEÇÃO 10: FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-lg group">
                <summary className="font-bold text-primary p-5 cursor-pointer flex justify-between items-center group-open:text-secondary">
                  {item.q}
                  <ChevronRight className="transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 border-t border-gray-100 pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 11: AVISOS */}
      <section className="py-12 bg-background-light border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><FileText size={20} /> Perícia Biopsicossocial Obrigatória</h4>
            <p className="text-sm text-gray-600">O INSS não aprova apenas com laudo médico. A avaliação biopsicossocial (IF-BrA) é crucial. Nós preparamos você para ela.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><Clock size={20} /> Conversão de Tempo</h4>
            <p className="text-sm text-gray-600">Se você trabalhou sem deficiência antes, convertemos esse tempo com multiplicadores que AUMENTAM seu tempo total.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 12: FINAL CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Você Pode Estar Deixando de Ganhar Milhares de Reais!</h2>
          <p className="text-xl text-gray-200 mb-10">
            A Aposentadoria PCD é um direito seu. Não deixe para depois. Fale com um de nossos especialistas AGORA.
          </p>
          <a 
            href={getWhatsappLink()}
            className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-12 rounded-md text-lg shadow-2xl transition-transform hover:scale-105"
          >
            FALAR COM ESPECIALISTA AGORA
          </a>
        </div>
      </section>

    </div>
  );
};

export default AposentadoriaPcd;