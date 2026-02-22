import React, { useState } from 'react';
import { 
  CheckCircle, MessageCircle, Info, Accessibility, 
  ChevronRight, ChevronLeft, Check, Eye, Brain, FileText, 
  AlertOctagon, Clock
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

// --- CONSTANTES & DADOS ---

const SM_2026 = 1621.00;

// Dados do Carrossel de Doenças
const diseasesSlides = [
  {
    id: 1,
    law: "🏥 ART. 151 - LEI 8.213/1991",
    title: "Isenção de Carência",
    subtitle: "Doenças que podem isentar de carência para auxílio-doença/aposentadoria por invalidez",
    description: "Algumas doenças, quando geram incapacidade, podem dispensar o cumprimento dos 12 meses de carência, conforme a legislação.",
    lists: [
      ["Câncer (Neoplasia Maligna)", "Cardiopatia Grave", "Doença de Parkinson", "Espondilite Anquilosante", "Nefropatia Grave", "AIDS/SIDA"],
      ["Alienação Mental", "Cegueira", "Esclerose Múltipla", "Hepatopatia Grave", "Paralisia Irreversível", "Tuberculose Ativa", "Hanseníase"]
    ],
    alert: {
      type: "warning",
      title: "Requisito: Incapacidade",
      text: "A isenção de carência depende da comprovação da incapacidade laborativa por perícia médica."
    }
  },
  {
    id: 2,
    law: "📊 ESTATÍSTICAS",
    title: "Outras Condições Comuns",
    subtitle: "Doenças que frequentemente geram benefícios por incapacidade",
    description: "Diversas condições de saúde podem gerar direito a benefícios, desde que comprovada a incapacidade para o trabalho.",
    customContent: (
      <div className="space-y-4 my-6 text-left">
        <div>
          <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><Accessibility size={18} /> ORTOPÉDICAS</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Hérnia de Disco</li>
            <li>Artrose</li>
            <li>Problemas na coluna</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><Brain size={18} /> SAÚDE MENTAL</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li><strong>Depressão</strong></li>
            <li><strong>Transtornos de Ansiedade</strong></li>
          </ul>
        </div>
      </div>
    ),
    alert: {
      type: "warning",
      title: "Carência",
      text: "Em regra, exige-se 12 meses de contribuição, salvo isenções legais ou acidentes."
    }
  },
  {
    id: 3,
    law: "♿ LEGISLAÇÃO PCD",
    title: "Aposentadoria da Pessoa com Deficiência",
    subtitle: "Regras específicas da LC 142/2013",
    description: "A legislação prevê critérios diferenciados de tempo de contribuição e idade para pessoas com deficiência, dependendo do grau (leve, moderado ou grave).",
    customContent: (
      <div className="space-y-4 my-6 text-left">
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <h4 className="font-bold text-green-800 mb-1 flex items-center gap-2"><Check size={16} /> CONDIÇÕES ABRANGIDAS</h4>
          <p className="text-xs text-green-700">Diversas condições podem ser enquadradas, mediante avaliação biopsicossocial.</p>
        </div>
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <h4 className="font-bold text-green-800 mb-1 flex items-center gap-2"><Check size={16} /> VISÃO MONOCULAR</h4>
          <p className="text-xs text-green-700">Reconhecida como deficiência sensorial pela Lei 14.126/2021.</p>
        </div>
        <div className="bg-green-50 p-3 rounded border border-green-200">
          <h4 className="font-bold text-green-800 mb-1 flex items-center gap-2"><Check size={16} /> AVALIAÇÃO</h4>
          <p className="text-xs text-green-700">Necessária perícia médica e social para graduar a deficiência.</p>
        </div>
      </div>
    ),
    alert: {
      type: "success",
      title: "Critérios Diferenciados",
      text: "Possibilidade de redução no tempo de contribuição exigido."
    }
  }
];

const faqData = [
  { q: "Qual a diferença entre Aposentadoria PCD e BPC/LOAS?", a: "A Aposentadoria PCD é um benefício previdenciário para quem contribuiu ao INSS, com valor baseado nas contribuições. O BPC/LOAS é um benefício assistencial de um salário mínimo para quem não tem meios de subsistência, independente de contribuição." },
  { q: "Como é comprovada a deficiência?", a: "Através de perícia médica e avaliação social no INSS, que analisam os impedimentos de longo prazo e as barreiras enfrentadas." },
  { q: "Posso continuar trabalhando?", a: "Na Aposentadoria da Pessoa com Deficiência (por idade ou tempo de contribuição), o segurado pode continuar trabalhando. Já na Aposentadoria por Invalidez, não é permitido o retorno ao trabalho." },
  { q: "Fibromialgia dá direito à aposentadoria PCD?", a: "A Fibromialgia pode ser enquadrada como deficiência se gerar impedimentos de longo prazo, sujeita à avaliação biopsicossocial." },
  { q: "O que fazer se o pedido for negado?", a: "É possível recorrer administrativamente no próprio INSS ou ingressar com ação judicial para reavaliação do caso." }
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
  
  const getWhatsappLink = () => {
    let text = `Olá! Gostaria de saber mais sobre a Aposentadoria PCD 2026:%0A%0A`;
    return `https://wa.me/5585981186205?text=${text}`;
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-body text-[#333]">
      
      {/* SEÇÃO 1: HERO IMPACTANTE */}
      <section className="bg-primary-dark text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight drop-shadow-lg">
              Informações sobre <br/>
              <span className="text-secondary">Aposentadoria da Pessoa com Deficiência</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Saiba como funciona a aposentadoria para quem possui limitações de longo prazo e entenda os requisitos da Lei Complementar 142/2013.
            </p>
            <a 
              href={getWhatsappLink()}
              className="inline-flex items-center gap-3 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-transform hover:scale-105 text-lg"
            >
              <MessageCircle size={24} /> FALAR COM ESPECIALISTA
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
                  { label: "Natureza", bpc: "Assistencial", pcd: "Previdenciário" },
                  { label: "13º Salário", bpc: "Não recebe", pcd: "Sim" },
                  { label: "Pensão por Morte", bpc: "Não deixa", pcd: "Sim" },
                  { label: "Permite Trabalho?", bpc: "Não", pcd: "Sim" },
                  { label: "Exige Contribuição?", bpc: "Não", pcd: "Sim" },
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
              <strong>NOTA:</strong> A escolha do melhor benefício depende do histórico de cada segurado. Consulte um especialista para análise.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 & 5: CARROSSEL DE DOENÇAS */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Condições de Saúde e Previdência</h2>
            <p className="text-gray-600">Entenda como a legislação trata diferentes condições de saúde.</p>
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
                  A visão monocular é classificada como deficiência sensorial para todos os efeitos legais, permitindo o enquadramento nas regras da LC 142/2013, mediante avaliação biopsicossocial.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-green-700 text-sm font-bold"><CheckCircle size={16} /> Aposentadoria PCD</div>
                  <div className="flex items-center gap-2 text-green-700 text-sm font-bold"><CheckCircle size={16} /> Isenção Imposto Renda (se aposentado)</div>
                  <div className="flex items-center gap-2 text-green-700 text-sm font-bold"><CheckCircle size={16} /> BPC/LOAS (se baixa renda)</div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center mt-auto">
                  <div className="flex items-center justify-center gap-2 mb-2 text-orange-800 font-bold">
                    <AlertOctagon size={20} /> Avaliação
                  </div>
                  <p className="text-xs text-orange-700">
                    A perícia analisa as barreiras enfrentadas e o impacto na participação social.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2: Fibromialgia & TEA (NOVO) */}
            <div className="bg-gradient-to-br from-purple-700 to-indigo-900 rounded-2xl shadow-xl p-1 h-full">
              <div className="bg-white rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-purple-600"></div>
                
                <span className="inline-block bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded mb-4 text-xs tracking-wider w-fit">LEGISLAÇÃO APLICÁVEL</span>
                
                <h2 className="text-2xl font-heading font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <Brain className="text-purple-600" size={28} /> Fibromialgia e TEA
                </h2>
                
                <p className="text-sm text-gray-700 mb-6 flex-grow leading-relaxed">
                  Condições que geram impedimentos de longo prazo podem ser enquadradas como deficiência para fins previdenciários, dependendo da avaliação das barreiras e limitações funcionais.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-purple-700 text-sm font-bold"><CheckCircle size={16} /> Avaliação Biopsicossocial</div>
                  <div className="flex items-center gap-2 text-purple-700 text-sm font-bold"><CheckCircle size={16} /> LC 142/2013</div>
                  <div className="flex items-center gap-2 text-purple-700 text-sm font-bold"><CheckCircle size={16} /> Lei 12.764/2012 (TEA)</div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 text-center mt-auto">
                  <div className="flex items-center justify-center gap-2 mb-2 text-indigo-800 font-bold">
                    <FileText size={20} /> Documentação
                  </div>
                  <p className="text-xs text-indigo-700">
                    Relatórios médicos detalhados sobre as limitações funcionais são essenciais.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 10: FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <details key={i} className="bg-gray-5 entry border border-gray-200 rounded-lg group">
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
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><FileText size={20} /> Avaliação Biopsicossocial</h4>
            <p className="text-sm text-gray-600">O INSS realiza a avaliação médica e social para determinar o grau da deficiência (leve, moderada ou grave), impactando o tempo exigido.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><Clock size={20} /> Conversão de Tempo</h4>
            <p className="text-sm text-gray-600">Períodos trabalhados com e sem deficiência podem ser convertidos e somados, conforme regras específicas de cálculo.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 12: FINAL CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Busque seus direitos</h2>
          <p className="text-xl text-gray-200 mb-10">
            Agende uma consulta para análise detalhada do seu tempo de contribuição e enquadramento nas regras de Aposentadoria PCD.
          </p>
          <a 
            href={getWhatsappLink()}
            className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-12 rounded-md text-lg shadow-2xl transition-transform hover:scale-105"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </section>

    </div>
  );
};

export default AposentadoriaPcd;