import React, { useState, useRef, useEffect } from 'react';
import { 
  Calculator, CheckCircle, AlertTriangle, MessageCircle, Info, XCircle, AlertOctagon, DollarSign, Calendar, Check
} from 'lucide-react';

const CalculadoraSalarioMaternidade: React.FC = () => {
  // State for form inputs
  const [dataParto, setDataParto] = useState('');
  const [dataContribuicao, setDataContribuicao] = useState('');
  const [temFilhos, setTemFilhos] = useState(false);
  const [recebeBolsa, setRecebeBolsa] = useState(false);
  
  // State for results/alerts
  const [showResult, setShowResult] = useState(false);
  const [alertType, setAlertType] = useState<'none' | '2025' | 'past' | 'sem_filiacao' | 'nao_tempestiva' | null>(null);
  const [postPartoWarning, setPostPartoWarning] = useState(false);
  
  const resultRef = useRef<HTMLDivElement>(null);

  // Constants 2026
  const SM_2026 = 1621.00;
  const BENEFICIO_BASE_MESES = 4;
  const ABONO_13O_PROPORCAO = BENEFICIO_BASE_MESES / 12; // 4/12
  
  // Historical Data
  const SALARIOS_MINIMOS_HISTORICOS: Record<number, number> = {
    2021: 1100.00,
    2022: 1212.00,
    2023: 1320.00,
    2024: 1412.00,
    2025: 1518.00, 
    2026: 1621.00
  };

  const formatCurrency = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Scroll to results
  useEffect(() => {
    if (showResult || alertType) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [showResult, alertType]);

  const handleCalculate = () => {
    setShowResult(false);
    setAlertType(null);
    setPostPartoWarning(false);

    if (!dataParto) {
      alert("Por favor, informe a data do parto.");
      return;
    }

    const dParto = new Date(dataParto + 'T00:00:00');
    const dContr = dataContribuicao ? new Date(dataContribuicao + 'T00:00:00') : null;
    const anoParto = dParto.getFullYear();
    const today = new Date();
    today.setHours(0,0,0,0);

    // 1. Check for 2025 (Transition Year)
    if (anoParto === 2025 || (dContr && dContr.getFullYear() === 2025)) {
        setAlertType('2025');
        return;
    }

    // 2. Check for Past Date (Retroactive analysis needed)
    if (dParto < today) {
        setAlertType('past');
        return;
    }

    // 3. Check Filiation/Carencia Logic
    let filiacaoValida = false;
    if (dContr) {
        const mesParto = dParto.getMonth();
        const mesContr = dContr.getMonth();
        const anoContr = dContr.getFullYear();
        
        const contribuicaoAntesOuNoMesParto = (anoContr < anoParto) || (anoContr === anoParto && mesContr <= mesParto);
        
        if (contribuicaoAntesOuNoMesParto) {
            filiacaoValida = true;
        }
    }

    if (!filiacaoValida) {
        setAlertType('sem_filiacao');
        return;
    }

    // 4. Check Tempestividade
    const dataLimite = new Date(anoParto, dParto.getMonth() + 1, 15);
    if (dContr) dContr.setHours(0,0,0,0);
    dataLimite.setHours(0,0,0,0);

    if (dContr && dContr > dataLimite) {
        setAlertType('nao_tempestiva');
        return;
    }

    // 5. Check Contribution Post Parto (but Timely)
    if (dContr && dContr > dParto) {
        setPostPartoWarning(true);
    }

    // If passed all blocking checks, show result
    setAlertType('none');
    setShowResult(true);
  };

  const getCalculationValues = () => {
      const dParto = new Date(dataParto + 'T00:00:00');
      const anoParto = dParto.getFullYear();
      const salarioMinimo = SALARIOS_MINIMOS_HISTORICOS[anoParto] || SM_2026;
      
      const beneficioBase = salarioMinimo * BENEFICIO_BASE_MESES;
      const abono13o = salarioMinimo * ABONO_13O_PROPORCAO;
      
      return { beneficioBase, abono13o };
  };

  const { beneficioBase, abono13o } = getCalculationValues();

  const getWhatsappLink = () => {
      let text = `Olá, acabei de fazer minha simulação de Salário-Maternidade Rural:%0A%0A`;
      const baseLink = "https://wa.me/5585981186205?text=";

      if (alertType === '2025') {
          text += `*Alerta:* Minhas datas são de 2025 e preciso de uma análise especializada.`;
      } else if (alertType === 'past') {
          text += `*Alerta:* A data do parto informada é no passado e preciso de uma análise especializada para retroativos.`;
      } else if (alertType === 'sem_filiacao') {
          text += `*Alerta:* Preciso de ajuda com a comprovação de filiação/carência rural ANTES do parto.`;
      } else if (alertType === 'nao_tempestiva') {
          text += `*Alerta:* Minha contribuição pode não ter sido tempestiva.`;
      } else if (showResult) {
          text += `*Resultados Estimados (Valor Base):*%0A- Valor Total: ${formatCurrency(beneficioBase)}%0A- 13º Salário Proporcional (Possível Acréscimo): ${formatCurrency(abono13o)}%0A%0AGostaria de mais informações.`;
          if (temFilhos) {
              text += `%0A%0A*Observação:* Tenho outros filhos nascidos nos últimos 5 anos e gostaria de analisar os direitos retroativos.`;
          }
          if (recebeBolsa) {
              text += `%0A%0A*Atenção:* Recebo Bolsa Família e quero saber se o Salário-Maternidade vai afetar meu benefício.`;
          }
      }

      return `${baseLink}${encodeURIComponent(text)}`;
  };

  // Custom Checkbox Component
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

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-primary-dark text-white p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Simulador de Salário-Maternidade Rural 2026
          </h1>
          <p className="text-gray-200 text-lg">
            Descubra o valor estimado do benefício e entenda os requisitos.
          </p>
        </div>

        <div className="p-8 md:p-12">
          
          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Aviso:</strong> Esta calculadora é apenas informativa. A concessão de benefícios depende de análise individual de cada situação conforme legislação vigente do INSS e análise documental.
            </p>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="dataParto" className="block text-primary-dark font-bold mb-2">1. Qual a data do parto (real ou prevista)?</label>
              <input 
                type="date" 
                id="dataParto" 
                value={dataParto}
                onChange={(e) => setDataParto(e.target.value)}
                required
                className="w-full p-4 border-2 border-gray-300 bg-white text-gray-900 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-lg shadow-sm placeholder-gray-500"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label htmlFor="dataContribuicao" className="block text-primary-dark font-bold mb-2">2. Se você fez alguma contribuição única, qual a data do pagamento?</label>
              <input 
                type="date" 
                id="dataContribuicao" 
                value={dataContribuicao}
                onChange={(e) => setDataContribuicao(e.target.value)}
                placeholder="Data do pagamento da contribuição (Opcional)"
                className="w-full p-4 border-2 border-gray-300 bg-white text-gray-900 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-lg shadow-sm placeholder-gray-500"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <CustomCheckbox 
                id="filhosNascidos" 
                label="3. Você tem outros filhos nascidos nos últimos 5 anos?"
                checked={temFilhos}
                onChange={setTemFilhos}
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <CustomCheckbox 
                id="recebeBolsaFamilia" 
                label="4. Você recebe Bolsa Família?"
                checked={recebeBolsa}
                onChange={setRecebeBolsa}
              />
            </div>
          </div>

          <button 
            onClick={handleCalculate}
            className="w-full bg-primary hover:bg-primary-dark text-white p-5 rounded-lg text-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3"
          >
            <Calculator size={28} />
            SIMULAR BENEFÍCIO
          </button>

          {/* Results / Errors Section */}
          <div ref={resultRef} className="mt-8 space-y-6">
            
            {/* ALERT: Ano 2025 */}
            {alertType === '2025' && (
              <div className="animate-fade-in bg-blue-50 border-l-8 border-blue-500 p-8 rounded-r-lg text-blue-900 shadow-md">
                <div className="flex items-start gap-4">
                  <Info size={40} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-2xl mb-2 font-heading text-blue-800">Atenção: Caso de 2025.</strong>
                    <p className="text-lg mb-6">
                      Identificamos que as datas informadas são de 2025. Este é um ano de transição de regras e valores, exigindo uma análise detalhada. Para verificar seu direito, é fundamental falar com um de nossos especialistas.
                    </p>
                    <a 
                      href={getWhatsappLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      <MessageCircle size={20} />
                      Análise Gratuita
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* ALERT: Parto no Passado */}
            {alertType === 'past' && (
              <div className="animate-fade-in bg-amber-50 border-l-8 border-amber-500 p-8 rounded-r-lg text-amber-900 shadow-md">
                <div className="flex items-start gap-4">
                  <AlertTriangle size={40} className="text-amber-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-2xl mb-2 font-heading text-amber-800">Atenção: Parto no Passado.</strong>
                    <p className="text-lg mb-6">
                      A data do parto informada é anterior à data atual. Isso significa que seu caso pode envolver valores retroativos e regras específicas da época do parto. Para garantir o cálculo correto e seus direitos, é fundamental falar com um de nossos especialistas.
                    </p>
                    <a 
                      href={getWhatsappLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      <MessageCircle size={20} />
                      Análise Gratuita
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* ALERT: Sem Filiação/Carência */}
            {alertType === 'sem_filiacao' && (
              <div className="animate-fade-in bg-red-50 border-l-8 border-red-500 p-8 rounded-r-lg text-red-900 shadow-md">
                <div className="flex items-start gap-4">
                  <XCircle size={40} className="text-red-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-2xl mb-2 font-heading text-red-700">Atenção: Filiação e Carência são Essenciais!</strong>
                    <p className="text-lg mb-6">
                      Para ter direito ao Salário-Maternidade Rural, é fundamental comprovar a filiação ao RGPS e a carência necessária ANTES ou NO PERÍODO da gravidez/parto. Sem a comprovação adequada, o INSS pode indeferir seu benefício.
                    </p>
                    <a 
                      href={getWhatsappLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      <MessageCircle size={20} />
                      Consultar sobre Documentação
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* ALERT: Não Tempestiva */}
            {alertType === 'nao_tempestiva' && (
              <div className="animate-fade-in bg-red-50 border-l-8 border-red-500 p-8 rounded-r-lg text-red-900 shadow-md">
                <div className="flex items-start gap-4">
                  <AlertOctagon size={40} className="text-red-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-2xl mb-2 font-heading text-red-700">Alerta: Contribuição Não Tempestiva.</strong>
                    <p className="text-lg mb-6">
                      A contribuição única informada não foi paga dentro do prazo legal de vencimento da competência. Isso pode impactar o reconhecimento do direito. É crucial que você fale com um de nossos especialistas para analisar seu caso.
                    </p>
                    <a 
                      href={getWhatsappLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      <MessageCircle size={20} />
                      Analisar Situação
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* SUCCESS Display */}
            {showResult && (
              <div className="animate-fade-in space-y-6">
                
                {/* 1. Multiple Children Alert */}
                {temFilhos && (
                   <div className="bg-emerald-50 border-l-8 border-emerald-500 p-6 rounded-r-lg text-emerald-900 shadow-md">
                      <div className="flex items-start gap-3">
                         <DollarSign size={24} className="text-emerald-600 mt-1" />
                         <div>
                            <strong className="block text-lg mb-1 font-heading">Possíveis direitos acumulados</strong>
                            <p>Identificamos que você tem outros filhos nascidos nos últimos 5 anos. Isso significa que você pode ter direito a valores retroativos de Salário-Maternidade Rural, caso preencha os requisitos na época.</p>
                         </div>
                      </div>
                   </div>
                )}

                {/* 2. Bolsa Família Alert (Conditional) */}
                {recebeBolsa && (
                   <div className="bg-orange-50 border-l-8 border-orange-500 p-6 rounded-r-lg text-orange-900 shadow-md">
                      <div className="flex items-start gap-3">
                         <AlertTriangle size={24} className="text-orange-600 mt-1" />
                         <div>
                            <strong className="block text-lg mb-1 font-heading">Atenção sobre o Bolsa Família</strong>
                            <p>O Salário-Maternidade é considerado renda e pode impactar o seu Bolsa Família, podendo levar à <strong>suspensão temporária</strong> do benefício. Fale com um de nossos especialistas para entender melhor essa questão.</p>
                         </div>
                      </div>
                   </div>
                )}

                {/* 3. Summary Card */}
                <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-xl text-center shadow-lg relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="text-sm uppercase tracking-widest opacity-90 font-bold">VALOR TOTAL ESTIMADO</span>
                    <div className="text-5xl md:text-6xl font-extrabold my-4 font-heading">{formatCurrency(beneficioBase)}</div>
                    
                    <p className="text-sm text-blue-100 bg-white/10 inline-block px-4 py-2 rounded-lg mb-4 font-medium backdrop-blur-sm">
                       *O valor total acima não inclui o 13º salário, que pode ser um acréscimo de <span className="text-white font-bold underline decoration-2">{formatCurrency(abono13o)}</span>.
                    </p>

                    <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-green-500/20 border border-green-400 text-white backdrop-blur-sm">
                      <CheckCircle size={16} />
                      <span>Simulação: Indicativo de direito (sujeito à análise)</span>
                    </div>
                  </div>
                </div>

                {/* 4. Contribuição Após Parto Tempestiva Alert */}
                {postPartoWarning && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg text-yellow-900 shadow-sm">
                    <strong className="block text-lg mb-2 font-heading flex items-center gap-2">
                       <AlertTriangle size={20} /> Importante: Contribuição Paga Após o Parto.
                    </strong>
                    <p>
                      A contribuição única informada foi realizada APÓS a data do parto, mas foi paga dentro do prazo da competência. Isso é legalmente válido, mas pode gerar questionamentos pelo INSS. Fale com um especialista!
                    </p>
                  </div>
                )}

                {/* 5. Info 13o */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg text-blue-900 text-sm leading-relaxed shadow-sm">
                  <strong className="block text-lg mb-1 font-heading">Sobre o 13º Salário (Abono Anual):</strong>
                  O 13º salário proporcional é devido no salário-maternidade e, pela regra do INSS, é pago juntamente com a última parcela do benefício. O valor total estimado acima <strong>não inclui</strong> o 13º salário, que é calculado proporcionalmente aos meses de duração do benefício.
                </div>

                {/* 6. Info Imposto */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg text-green-900 text-sm leading-relaxed shadow-sm">
                  <strong className="block text-lg mb-1 font-heading">Informação sobre Impostos:</strong>
                  O valor do benefício é pago integralmente, sem descontos de Imposto de Renda, quando o valor mensal do salário-maternidade rural (um salário mínimo) está dentro da faixa de isenção da Receita Federal.
                </div>

                {/* 7. Calculation Steps */}
                <div className="bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4 font-heading flex items-center gap-2">
                    <Info size={24} /> Memória de Cálculo Detalhada
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-dashed border-gray-200">
                      <span className="font-medium text-gray-600">Valor Base (4 meses de SM)</span>
                      <span className="font-bold text-primary text-lg">{formatCurrency(beneficioBase)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-dashed border-gray-200">
                      <span className="font-medium text-gray-600">13º Salário Proporcional (Abono Anual)</span>
                      <span className="font-bold text-gray-500 text-lg">
                        {formatCurrency(abono13o)} <span className="text-xs font-normal">(Estimado)</span>
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-4 mt-2 bg-blue-50 p-4 rounded-lg">
                      <span className="font-bold text-primary-dark text-xl">TOTAL ESTIMADO A RECEBER</span>
                      <span className="font-extrabold text-primary-dark text-2xl">{formatCurrency(beneficioBase)}</span>
                    </div>
                  </div>
                </div>

                {/* 8. CTA Section */}
                <div className="bg-[#fff8e1] border-2 border-[#ffe082] rounded-xl p-8 text-center shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-heading">Busque seus direitos</h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Esta é apenas uma estimativa do valor base. Nossa equipe de especialistas está pronta para analisar seu caso e verificar o cumprimento de todos os requisitos legais.
                  </p>
                  
                  <a 
                    href={getWhatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 text-lg"
                  >
                    <MessageCircle size={24} />
                    FALAR COM UM DE NOSSOS ESPECIALISTAS NO WHATSAPP
                  </a>
                  
                  <p className="text-xs text-gray-500 mt-6 max-w-2xl mx-auto">
                    <strong>Nota:</strong> O cálculo acima é baseado no salário mínimo de 2026 (R$ 1.621,00) e na legislação previdenciária vigente. O valor real depende de análise documental e processual.
                  </p>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraSalarioMaternidade;