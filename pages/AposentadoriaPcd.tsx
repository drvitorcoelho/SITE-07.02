import React, { useState } from 'react';
import { 
  CheckCircle, MessageCircle, Info, Accessibility, 
  ChevronRight, ChevronLeft, Check, Eye, Brain, FileText, 
  AlertOctagon, Clock, Scale, AlertTriangle, List, ArrowRight,
  Heart, Activity, Shield
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

// --- CONSTANTES & DADOS ---

const faqData = [
  { q: "Qual a diferença entre Aposentadoria PCD e BPC/LOAS?", a: "A Aposentadoria PCD é para quem contribuiu ao INSS. O BPC/LOAS é para quem não contribuiu e tem baixa renda (máximo 1/4 do salário mínimo per capita). Aposentadoria PCD paga 13º salário e deixa pensão por morte; BPC não." },
  { q: "Como é comprovada a deficiência?", a: "Através de documentação médica (laudos, exames), avaliação médica do INSS e avaliação biopsicossocial (assistente social) que analisa barreiras sociais." },
  { q: "Posso continuar trabalhando se receber Aposentadoria PCD?", a: "Sim! Esta é uma grande vantagem. Diferente da Aposentadoria por Invalidez, você pode continuar trabalhando e recebendo o benefício simultaneamente, sem limite de renda." },
  { q: "Fibromialgia dá direito à Aposentadoria PCD?", a: "Sim, desde 2025 (Lei 15.176/2025). Requer avaliação biopsicossocial específica e comprovação de impedimento de longo prazo. Não é automático apenas pelo diagnóstico." },
  { q: "O que fazer se meu pedido for negado?", a: "Você pode solicitar recurso administrativo (revisão) em até 30 dias, ou entrar com ação judicial. Muitos casos negados são revertidos na justiça com orientação adequada." },
  { q: "Quanto tempo leva para ser aprovado?", a: "Geralmente 2-4 meses. Perícia médica ocorre 30-60 dias após pedido, análise do INSS 15-30 dias após perícia." },
  { q: "Preciso de documentação específica?", a: "Sim. Documentação pessoal, previdenciária (CNIS), médica (laudos completos, exames) e de deficiência (cartão PCD, CNH especial, etc)." }
];

// --- PÁGINA PRINCIPAL ---

const AposentadoriaPcd: React.FC = () => {
  
  const getWhatsappLink = () => {
    let text = `Olá! Gostaria de saber mais sobre a Aposentadoria PCD 2026:%0A%0A`;
    return `https://wa.me/5585981186205?text=${text}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-body text-[#333]">
      
      {/* SEÇÃO 1: HERO SECTION */}
      <section className="bg-primary-dark text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight drop-shadow-lg">
              Informações sobre <br/>
              <span className="text-secondary">Aposentadoria da Pessoa com Deficiência</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Saiba como funciona a aposentadoria para quem possui deficiência de longo prazo e entenda os requisitos da Lei Complementar 142/2013.
            </p>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-l-4 border-secondary mb-8">
              <p className="text-sm md:text-base">
                A Lei Complementar 142/2013 garante regras especiais: aposentadoria mais cedo, com menos tempo de contribuição ou sem idade mínima, dependendo da sua situação.
              </p>
            </div>
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

      {/* SEÇÃO 2: ÍNDICE/MENU INTERNO */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">Navegue pelo Conteúdo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: 'quem-tem-direito', label: '1. Quem tem direito?' },
              { id: 'requisitos', label: '2. Requisitos Detalhados' },
              { id: 'diferencas', label: '3. Diferenças Importantes' },
              { id: 'doencas', label: '4. Doenças Isentas de Carência' },
              { id: 'avaliacao', label: '5. Avaliação Biopsicossocial' },
              { id: 'comprovar', label: '6. Como Comprovar Deficiência' },
              { id: 'faq', label: '7. Perguntas Frequentes' },
              { id: 'proximos-passos', label: '8. Próximos Passos' },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left p-4 bg-gray-50 hover:bg-primary/5 rounded-lg border border-gray-200 hover:border-primary transition-all flex items-center justify-between group"
              >
                <span className="font-semibold text-gray-700 group-hover:text-primary">{item.label}</span>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-primary" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: QUEM TEM DIREITO? */}
      <section id="quem-tem-direito" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary mt-2">Quem tem direito à Aposentadoria PCD?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">1. Deficiência de Longo Prazo</h3>
              <p className="text-gray-600 text-sm">Deficiência com duração superior a 2 anos (física, sensorial, mental ou intelectual), comprovada por avaliação do INSS.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                <FileText size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">2. Filiação ao INSS</h3>
              <p className="text-gray-600 text-sm">Estar contribuindo ou ter contribuído como empregado, autônomo, contribuinte individual ou segurado especial.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">3. Requisitos Específicos</h3>
              <p className="text-gray-600 text-sm">Cumprir tempo de contribuição ou idade, variando conforme o grau de deficiência.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-2">Tipos de Deficiência Reconhecidas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Accessibility className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="block text-gray-800">Deficiência Física</strong>
                    <span className="text-sm text-gray-600">Limitações motoras permanentes (ex: paralisia, amputação, artrite grave).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="block text-gray-800">Deficiência Sensorial</strong>
                    <span className="text-sm text-gray-600">Visual (cegueira, visão monocular) ou Auditiva (surdez).</span>
                  </div>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Brain className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="block text-gray-800">Deficiência Mental/Intelectual</strong>
                    <span className="text-sm text-gray-600">Transtornos que geram impedimento de longo prazo ou limitações cognitivas significativas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="block text-gray-800">Deficiências Múltiplas</strong>
                    <span className="text-sm text-gray-600">Combinação de duas ou mais deficiências.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-1">
                <AlertTriangle size={18} /> Importante sobre Visão Monocular
              </h4>
              <p className="text-sm text-yellow-800">
                Desde a Lei 14.126/2021, é reconhecida como deficiência sensorial. Porém, a TNU (Tema 378) determinou que é necessária avaliação biopsicossocial, não bastando apenas a perícia médica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: REQUISITOS DETALHADOS */}
      <section id="requisitos" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary mt-2">Requisitos Detalhados</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="space-y-12">
            {/* Tipo 1 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Aposentadoria por Idade
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                  <h4 className="font-bold text-pink-700 mb-4 text-lg">Para Mulheres</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Idade Mínima:</strong> 55 anos</li>
                    <li>• <strong>Tempo de Contribuição:</strong> 15 anos (na condição PCD)</li>
                    <li>• <strong>Carência:</strong> 180 meses</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-700 mb-4 text-lg">Para Homens</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Idade Mínima:</strong> 60 anos</li>
                    <li>• <strong>Tempo de Contribuição:</strong> 15 anos (na condição PCD)</li>
                    <li>• <strong>Carência:</strong> 180 meses</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center italic">*O grau de deficiência não faz diferença nesta modalidade.</p>
            </div>

            {/* Tipo 2 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Aposentadoria por Tempo de Contribuição
              </h3>
              <p className="mb-4 text-gray-600">Esta modalidade <strong>não exige idade mínima</strong>. O tempo varia conforme o grau:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="p-4 text-left">Grau de Deficiência</th>
                      <th className="p-4 text-center bg-pink-100 text-pink-800">Mulheres (Tempo)</th>
                      <th className="p-4 text-center bg-blue-100 text-blue-800">Homens (Tempo)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-bold text-gray-800">Grave</td>
                      <td className="p-4 text-center">20 anos</td>
                      <td className="p-4 text-center">25 anos</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-800">Moderada</td>
                      <td className="p-4 text-center">24 anos</td>
                      <td className="p-4 text-center">29 anos</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-800">Leve</td>
                      <td className="p-4 text-center">28 anos</td>
                      <td className="p-4 text-center">33 anos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-bold text-blue-800 mb-1">Atenção Importante</h4>
                <p className="text-sm text-blue-700">
                  Não é necessário que todo o tempo seja na condição de PCD. Você pode ter contribuições comuns antes de ser reconhecido. O importante é ter 15 anos de contribuição APÓS o reconhecimento da deficiência para a modalidade por idade, ou converter o tempo comum para PCD na modalidade por tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: DIFERENÇAS IMPORTANTES */}
      <section id="diferencas" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary mt-2">PCD vs. Aposentadoria por Invalidez</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-5">Aspecto</th>
                  <th className="p-5 bg-secondary/90">Aposentadoria PCD</th>
                  <th className="p-5 bg-gray-600">Aposentadoria por Invalidez</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-bold text-gray-700">Para Quem</td>
                  <td className="p-4">Deficiência de longo prazo</td>
                  <td className="p-4">Incapacidade permanente</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-gray-700">Pode Trabalhar?</td>
                  <td className="p-4 text-green-600 font-bold flex items-center gap-2"><Check size={16}/> Sim</td>
                  <td className="p-4 text-red-600 font-bold flex items-center gap-2"><Accessibility size={16}/> Não</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-700">Idade Mínima</td>
                  <td className="p-4">Varia (55/60 ou nenhuma)</td>
                  <td className="p-4">Não há idade mínima</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-gray-700">Tempo Contribuição</td>
                  <td className="p-4">Reduzido</td>
                  <td className="p-4">Conforme regras gerais</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-700">Grau Deficiência</td>
                  <td className="p-4">Importante (afeta tempo)</td>
                  <td className="p-4">Não se aplica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: DOENÇAS ISENTAS */}
      <section id="doencas" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary mt-2">Doenças Isentas de Carência</h2>
            <p className="text-gray-600 mt-2">Art. 151 - Lei 8.213/1991</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2"><Activity size={18}/> Oncológicas</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Câncer (Neoplasia Maligna)</li>
                <li>Requer laudo oncológico</li>
              </ul>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2"><Heart size={18}/> Cardiovasculares</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Cardiopatia Grave</li>
                <li>Hipertensão Arterial Grave (c/ lesão)</li>
              </ul>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2"><Brain size={18}/> Neurológicas</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Doença de Parkinson</li>
                <li>Esclerose Múltipla</li>
                <li>Paralisia Irreversível</li>
                <li>Alienação Mental</li>
              </ul>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2"><Eye size={18}/> Sensoriais</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Cegueira</li>
                <li>Visão Monocular (Lei 14.126/2021)</li>
              </ul>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2"><Activity size={18}/> Renais/Hepáticas</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Nefropatia Grave</li>
                <li>Hepatopatia Grave</li>
              </ul>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border border-red-100">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2"><Shield size={18}/> Infecciosas/Outras</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>AIDS/SIDA</li>
                <li>Tuberculose Ativa</li>
                <li>Hanseníase</li>
                <li>Espondilite Anquilosante</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-100 p-4 rounded text-center text-sm text-gray-600">
            <strong>Nota:</strong> A isenção de carência não é automática. Requer comprovação de incapacidade laborativa por perícia médica.
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 & 8: AVALIAÇÃO E COMPROVAÇÃO */}
      <section id="avaliacao" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Avaliação */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Avaliação Biopsicossocial</h2>
              <p className="text-gray-600 mb-6">
                A partir de março de 2026, a avaliação passou a ser obrigatória e unificada. Ela analisa a deficiência sob três perspectivas:
              </p>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <strong className="block text-primary">Biológico</strong>
                  <span className="text-sm text-gray-600">Diagnóstico médico, limitações funcionais.</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                  <strong className="block text-secondary">Psicológico</strong>
                  <span className="text-sm text-gray-600">Impacto emocional, capacidade de adaptação.</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <strong className="block text-green-600">Social</strong>
                  <span className="text-sm text-gray-600">Barreiras enfrentadas, participação social.</span>
                </li>
              </ul>
            </div>

            {/* Comprovação */}
            <div id="comprovar">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Documentos Necessários</h2>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <FileText className="text-primary flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Médicos</strong>
                      <span className="text-sm text-gray-600">Laudos completos, histórico, exames (Ressonância, TC, etc).</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Shield className="text-primary flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Oficiais</strong>
                      <span className="text-sm text-gray-600">Cartão PCD (CIPTEA), CNH especial, Passe livre.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="text-primary flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Antigos</strong>
                      <span className="text-sm text-gray-600">Quanto mais antigo o documento, melhor para provar a duração da deficiência.</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 italic">
                    Dica: Organize tudo cronologicamente. Documentos que se complementam são mais fortes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 9: FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-lg group">
                <summary className="font-bold text-primary p-5 cursor-pointer flex justify-between items-center group-open:text-secondary list-none">
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

      {/* SEÇÃO 10: PRÓXIMOS PASSOS */}
      <section id="proximos-passos" className="py-16 bg-[#f8f9fa] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">Como Proceder Agora?</h2>
            <p className="text-gray-600 mt-2">Siga este passo a passo para buscar seu direito.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Avalie", text: "Você tem deficiência > 2 anos e contribuição?" },
              { step: 2, title: "Reúna", text: "Organize laudos, exames e CNIS." },
              { step: 3, title: "Consulte", text: "Fale com um de nossos especialistas" },
              { step: 4, title: "Prepare-se", text: "Esteja pronto para as perícias médica e social." }
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg shadow-sm text-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-secondary transition-colors">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 12: CTA FINAL & RODAPÉ */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Não está sozinho nessa jornada</h2>
          <p className="text-xl text-gray-200 mb-10">
            Nossos especialistas estão prontos para ajudar você a entender seus direitos e conquistar a Aposentadoria PCD que você merece.
          </p>
          <a 
            href={getWhatsappLink()}
            className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-12 rounded-md text-lg shadow-2xl transition-transform hover:scale-105"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </section>

      <div className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p>Conforme Provimento 205/2021 da OAB | Baseado em Lei Complementar 142/2013</p>
          <p>Atualizado: Fevereiro 2026 | Próxima revisão: Junho 2026</p>
          <p>Sem promessas de resultados. Cada caso é único.</p>
        </div>
      </div>

    </div>
  );
};

export default AposentadoriaPcd;
