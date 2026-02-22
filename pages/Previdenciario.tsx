import React from 'react';
import { 
  MessageCircle, Heart, Home, Users, ChevronRight, 
  Shield, Clock, CheckCircle, Search, 
  Briefcase, DollarSign, ChevronDown,
  Activity, Baby, Stethoscope, FileSearch
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

const Previdenciario: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsappLink = () => {
    return "https://wa.me/5585981186205?text=Olá Dr. Vitor, gostaria de uma consultoria em Direito Previdenciário.";
  };

  return (
    <div className="flex flex-col bg-[#f8f9fa] text-[#333] font-body">
      
      {/* SEÇÃO 1: HERO SECTION */}
      <section className="relative bg-primary-dark text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:w-3/4">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight drop-shadow-lg">
              Consultoria em <span className="text-secondary">Direito Previdenciário</span>
            </h1>
            <h2 className="text-xl text-gray-200 mb-4 font-semibold">
              Especialista em Aposentadorias, Benefícios e Revisões do INSS.
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              O Direito Previdenciário garante sua proteção social. Se você busca aposentadoria, auxílio-doença, pensão ou teve seu benefício negado, nós podemos ajudar a garantir o melhor benefício possível.
            </p>
            <a 
              href={getWhatsappLink()}
              className="inline-flex items-center gap-3 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-transform hover:scale-105 text-lg"
            >
              <MessageCircle size={24} /> FALAR COM UM DE NOSSOS ESPECIALISTAS
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
              { id: 'o-que-e', label: '1. O que é Direito Previdenciário?' },
              { id: 'areas', label: '2. Áreas de Atuação' },
              { id: 'mudancas', label: '3. Mudanças em 2026' },
              { id: 'atendimento', label: '4. Como Funciona' },
              { id: 'prazos', label: '5. Prazos Estimados' },
              { id: 'quem-tem-direito', label: '6. Quem Tem Direito?' },
              { id: 'documentos', label: '7. Documentos Necessários' },
              { id: 'revisao', label: '8. Revisão de Benefício' },
              { id: 'faq', label: '9. Perguntas Frequentes' },
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

      {/* SEÇÃO 3: O QUE É DIREITO PREVIDENCIÁRIO? */}
      <section id="o-que-e" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary mt-2">O Que é Direito Previdenciário?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Direito Previdenciário é a área que regula os direitos e benefícios relacionados ao INSS (Instituto Nacional do Seguro Social), garantindo proteção ao trabalhador e seus dependentes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-primary text-xl mb-4 flex items-center gap-2"><Briefcase size={24}/> Aposentadorias</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Por Idade e Tempo de Contribuição</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Aposentadoria Especial e Rural</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Aposentadoria da Pessoa com Deficiência</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary text-xl mb-4 flex items-center gap-2"><Stethoscope size={24}/> Incapacidade</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Auxílio-Doença (Incapacidade Temporária)</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Aposentadoria por Invalidez (Permanente)</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Auxílio-Acidente</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary text-xl mb-4 flex items-center gap-2"><Baby size={24}/> Família e Maternidade</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Salário Maternidade (Urbano e Rural)</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Pensão por Morte</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Auxílio-Reclusão</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary text-xl mb-4 flex items-center gap-2"><Heart size={24}/> Assistencial (LOAS)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> BPC para Idosos (65+)</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> BPC para Pessoas com Deficiência</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Sem necessidade de contribuição</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: ÁREAS DE ATUAÇÃO */}
      <section id="areas" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">Áreas de Atuação</h2>
            <p className="text-gray-600 mt-2">Atuação completa em processos administrativos e judiciais contra o INSS.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Aposentadoria por Idade", desc: "Para quem atingiu a idade mínima (65 anos homem, 62 mulher) e carência." },
              { title: "Aposentadoria por Tempo", desc: "Análise de direito adquirido e regras de transição para quem contribuiu por longo período." },
              { title: "Benefícios por Incapacidade", desc: "Auxílio-doença e aposentadoria por invalidez para quem não pode trabalhar." },
              { title: "Aposentadoria PCD", desc: "Regras mais brandas para pessoas com deficiência (leve, moderada ou grave)." },
              { title: "Aposentadoria Rural", desc: "Para trabalhadores do campo, pescadores e segurados especiais." },
              { title: "Salário Maternidade", desc: "Para mães urbanas, rurais e desempregadas no nascimento ou adoção." },
              { title: "BPC/LOAS", desc: "Benefício de um salário mínimo para idosos e deficientes de baixa renda." },
              { title: "Pensão por Morte", desc: "Para dependentes do segurado falecido. Análise de qualidade de segurado." },
              { title: "Planejamento Previdenciário", desc: "Cálculos e projeções para garantir a melhor aposentadoria no futuro." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow hover:border-secondary group">
                <h4 className="font-bold text-lg mb-3 text-primary group-hover:text-secondary">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: MUDANÇAS EM 2026 */}
      <section id="mudancas" className="py-16 bg-primary-dark text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Mudanças Importantes em 2026</h2>
            <p className="text-gray-300">Fique atento às atualizações nas regras previdenciárias:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2"><Activity className="text-secondary"/> Regras de Aposentadoria</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Pontos:</strong> Aumento na pontuação necessária para algumas regras de transição.</li>
                <li>• <strong>Idade Mínima:</strong> Consolidação das regras de idade progressiva.</li>
                <li>• <strong>Cálculo:</strong> Novas considerações para o descarte de contribuições.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2"><FileSearch className="text-secondary"/> Avaliação Biopsicossocial</h3>
              <p className="text-sm text-gray-700 mb-4">Obrigatória para benefícios por incapacidade e BPC/LOAS.</p>
              <div className="bg-green-50 p-3 rounded text-xs text-green-800 border border-green-200">
                <strong>Impacto:</strong> Análise não apenas médica, mas também social e ambiental do segurado.
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2"><Activity className="text-secondary"/> Fibromialgia</h3>
              <p className="text-sm text-gray-700 mb-4">Reconhecimento facilitado como deficiência para fins previdenciários (Lei 15.176/2025).</p>
              <p className="text-xs text-gray-500">Direito a benefícios especiais e avaliação adaptada.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2"><Search className="text-secondary"/> Pente Fino do INSS</h3>
              <p className="text-sm text-gray-700 mb-4">Intensificação nas revisões de benefícios por incapacidade mantidos por longo período.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: COMO FUNCIONA */}
      <section id="atendimento" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">Como Funciona Nosso Atendimento</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Consulta Inicial", desc: "Análise gratuita do seu caso e verificação de direitos." },
              { step: 2, title: "Análise Técnica", desc: "Estudo da documentação, CNIS e legislação aplicável." },
              { step: 3, title: "Requerimento", desc: "Protocolo administrativo no INSS com toda fundamentação." },
              { step: 4, title: "Perícia/Acompanhamento", desc: "Orientação para perícia médica e cumprimento de exigências." },
              { step: 5, title: "Resultado", desc: "Concessão do benefício ou recurso/ação judicial se necessário." }
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 p-4 rounded-lg text-center relative group hover:-translate-y-1 transition-transform border border-gray-200">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3 group-hover:bg-secondary transition-colors">
                  {item.step}
                </div>
                <h3 className="font-bold text-base mb-2 text-primary">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: PRAZOS ESTIMADOS */}
      <section id="prazos" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary flex items-center justify-center gap-2">
              <Clock/> Prazos Estimados
            </h2>
            <p className="text-gray-600 mt-2">Tempo médio de análise pelo INSS</p>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4">Benefício</th>
                  <th className="p-4">Prazo Estimado</th>
                  <th className="p-4 hidden md:table-cell">Observações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {[
                  { proc: "Aposentadoria por Idade", time: "30-90 dias", obs: "Com documentação completa" },
                  { proc: "Aposentadoria por Tempo", time: "30-90 dias", obs: "Depende da complexidade da análise" },
                  { proc: "Benefício por Incapacidade", time: "15-45 dias", obs: "Depende da data da perícia" },
                  { proc: "Salário Maternidade", time: "7-30 dias", obs: "Geralmente rápido (automático em alguns casos)" },
                  { proc: "BPC/LOAS", time: "30-90 dias", obs: "Envolve avaliação social e médica" },
                  { proc: "Pensão por Morte", time: "30-60 dias", obs: "Se houver qualidade de segurado clara" },
                  { proc: "Recurso Administrativo", time: "30-90 dias", obs: "Após a negativa inicial" },
                  { proc: "Ação Judicial", time: "6-24 meses", obs: "Quando o INSS nega o direito" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">{row.proc}</td>
                    <td className="p-4 text-secondary font-bold">{row.time}</td>
                    <td className="p-4 text-gray-600 hidden md:table-cell">{row.obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: QUEM TEM DIREITO */}
      <section id="quem-tem-direito" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">Quem Tem Direito?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-xl text-blue-800 mb-4">Aposentadoria por Idade</h3>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>✓ <strong>Homem:</strong> 65 anos de idade</li>
                <li>✓ <strong>Mulher:</strong> 62 anos de idade</li>
                <li>✓ <strong>Carência:</strong> 15 anos de contribuição (180 meses)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-xl text-green-800 mb-4">Aposentadoria por Tempo</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li>✓ <strong>Homem:</strong> 35 anos de contribuição</li>
                <li>✓ <strong>Mulher:</strong> 30 anos de contribuição</li>
                <li>✓ Regras de transição (pontos, pedágio) aplicáveis</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-xl text-purple-800 mb-4">Benefício por Incapacidade</h3>
              <ul className="space-y-2 text-sm text-purple-900">
                <li>✓ Estar incapacitado para o trabalho (temporária ou permanente)</li>
                <li>✓ Ter qualidade de segurado (estar contribuindo ou no período de graça)</li>
                <li>✓ Cumprir carência de 12 meses (exceto acidentes e doenças graves)</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-xl text-orange-800 mb-4">BPC/LOAS</h3>
              <ul className="space-y-2 text-sm text-orange-900">
                <li>✓ Idosos com 65 anos ou mais OU Pessoas com Deficiência</li>
                <li>✓ Renda familiar per capita de até 1/4 do salário mínimo</li>
                <li>✓ Não exige contribuição ao INSS</li>
                <li>✓ Cadastro único (CadÚnico) atualizado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9: DOCUMENTOS NECESSÁRIOS */}
      <section id="documentos" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Documentos Necessários</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg mb-4 text-secondary border-b pb-2">Documentação Básica (Todos os Casos)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-green-500"/> RG e CPF</div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-green-500"/> Comprovante de Residência</div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-green-500"/> Carteira de Trabalho (CTPS)</div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-green-500"/> Extrato CNIS (Meu INSS)</div>
            </div>

            <h3 className="font-bold text-lg mb-4 text-secondary border-b pb-2">Específicos por Benefício</h3>
            <div className="space-y-4">
              <div>
                <strong className="block text-primary mb-1">Incapacidade (Auxílio-Doença/Invalidez):</strong>
                <p className="text-sm text-gray-600">Laudos médicos atualizados, receitas, exames, prontuários.</p>
              </div>
              <div>
                <strong className="block text-primary mb-1">Rural:</strong>
                <p className="text-sm text-gray-600">Autodeclaração rural, documentos da terra, notas fiscais de produtor, certidões de nascimento/casamento antigas.</p>
              </div>
              <div>
                <strong className="block text-primary mb-1">Maternidade:</strong>
                <p className="text-sm text-gray-600">Certidão de nascimento da criança, atestado de afastamento (se empregada).</p>
              </div>
              <div>
                <strong className="block text-primary mb-1">BPC/LOAS:</strong>
                <p className="text-sm text-gray-600">Comprovante de CadÚnico, documentos de todos os membros da família, laudos (se deficiência).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10: REVISÃO */}
      <section id="revisao" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary">Revisão de Benefício</h2>
              <p className="text-gray-600 mt-2">Você pode estar recebendo menos do que deveria.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-secondary font-bold text-xl">?</div>
                <h3 className="font-bold text-lg mb-2">O que é?</h3>
                <p className="text-sm text-gray-600">Uma análise para recalcular o valor do seu benefício, incluindo períodos não considerados ou corrigindo erros do INSS.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-secondary font-bold text-xl">!</div>
                <h3 className="font-bold text-lg mb-2">Quando fazer?</h3>
                <p className="text-sm text-gray-600">Se você se aposentou nos últimos 10 anos, teve salários altos no passado ou trabalhou em condições insalubres.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-secondary font-bold text-xl">$</div>
                <h3 className="font-bold text-lg mb-2">Resultado</h3>
                <p className="text-sm text-gray-600">Pode resultar no aumento do valor mensal e no recebimento de atrasados (diferença dos últimos 5 anos).</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a href={getWhatsappLink()} className="text-secondary font-bold hover:underline">Solicitar Análise de Revisão →</a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11: DIFERENCIAIS */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-heading font-bold mb-12 text-primary">Nossos Diferenciais</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl bg-white hover:shadow-lg transition-all">
                <Shield size={40} className="text-secondary mx-auto mb-4"/>
                <h3 className="text-xl font-bold text-primary mb-2">Especialização</h3>
                <p className="text-sm text-gray-600">Foco exclusivo em garantir o melhor benefício. Conhecimento profundo das normas do INSS.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl bg-white hover:shadow-lg transition-all">
                <MessageCircle size={40} className="text-secondary mx-auto mb-4"/>
                <h3 className="text-xl font-bold text-primary mb-2">Atendimento Digital</h3>
                <p className="text-sm text-gray-600">Resolva tudo sem sair de casa. Atendemos todo o Brasil com envio digital de documentos.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl bg-white hover:shadow-lg transition-all">
                <Clock size={40} className="text-secondary mx-auto mb-4"/>
                <h3 className="text-xl font-bold text-primary mb-2">Agilidade</h3>
                <p className="text-sm text-gray-600">Acompanhamento proativo do seu processo para evitar atrasos desnecessários.</p>
              </div>
           </div>
        </div>
      </section>

      {/* SEÇÃO 12: FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Perguntas Frequentes</h2>
           <div className="space-y-4">
             {[
               { q: "Como funciona a aposentadoria por idade?", a: "Exige idade mínima (65H/62M) e 15 anos de contribuição. O valor é 60% da média + 2% por ano que exceder 20 (H) ou 15 (M) anos." },
               { q: "Qual é o tempo mínimo de contribuição?", a: "Para aposentadoria por idade, 15 anos (180 meses). Para outras regras, varia (30/35 anos)." },
               { q: "Como é calculado o valor da aposentadoria?", a: "Geralmente é a média de 100% dos salários de contribuição desde 07/1994, aplicado um coeficiente dependendo do tipo de benefício." },
               { q: "O que é revisão de aposentadoria?", a: "É um pedido para reanalisar o cálculo do benefício. Pode ser feita para incluir tempo rural, especial, ou corrigir salários." },
               { q: "Como solicitar benefício ao INSS?", a: "Pode ser feito pelo site/app Meu INSS ou telefone 135. Recomendamos assessoria para garantir a documentação correta." },
               { q: "Quanto tempo leva para ser aprovado?", a: "O INSS tem prazo legal de 45 a 90 dias, mas pode demorar mais. Ações judiciais podem levar de 1 a 2 anos." },
               { q: "O que fazer se o benefício for negado?", a: "É possível entrar com recurso administrativo no próprio INSS ou ingressar com ação judicial para reverter a decisão." },
               { q: "Como funciona o salário maternidade?", a: "Pago por 120 dias. Para empregadas, a empresa paga. Para as demais, o INSS paga. Exige carência de 10 meses (exceto empregadas)." },
               { q: "O que é BPC/LOAS?", a: "Benefício de prestação continuada no valor de 1 salário mínimo para idosos (65+) ou deficientes de baixa renda (per capita < 1/4 salário)." },
               { q: "Como comprovar direito ao benefício?", a: "Através do CNIS, carteira de trabalho, carnês, laudos médicos, documentos rurais e documentos pessoais." }
             ].map((item, i) => (
               <details key={i} className="bg-[#f8f9fa] rounded-lg shadow-sm border border-gray-200 group">
                 <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors">
                   {item.q}
                   <ChevronDown className="transition-transform group-open:rotate-180" size={20}/>
                 </summary>
                 <div className="px-5 pb-5 text-gray-600 text-sm border-t border-gray-200 pt-3">
                   {item.a}
                 </div>
               </details>
             ))}
           </div>
        </div>
      </section>

      {/* SEÇÃO 13: PRÓXIMOS PASSOS */}
      <section className="py-16 bg-[#f8f9fa] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">Próximos Passos</h2>
            <p className="text-gray-600 mt-2">Garanta seu direito agora</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Reúna Documentos", text: "Separe RG, CPF, Carteira de Trabalho e laudos médicos (se houver)." },
              { title: "Baixe o CNIS", text: "Acesse o Meu INSS e baixe seu Extrato de Contribuições (CNIS)." },
              { title: "Fale Conosco", text: "Envie sua documentação para análise de um especialista." },
              { title: "Inicie o Processo", text: "Daremos entrada no seu pedido da forma correta e segura." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg text-center border border-gray-200 shadow-sm">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">{i+1}</div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Não arrisque seu futuro</h2>
          <p className="text-xl text-gray-200 mb-10">
            Um erro no pedido pode custar meses ou anos de espera. Conte com quem entende do assunto.
          </p>
          <a 
            href={getWhatsappLink()}
            className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-12 rounded-md text-lg shadow-2xl transition-transform hover:scale-105"
          >
            FALAR COM UM DE NOSSOS ESPECIALISTAS
          </a>
        </div>
      </section>

      {/* RODAPÉ DA PÁGINA */}
      <div className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p><strong>Aviso:</strong> O conteúdo desta página tem caráter informativo. O resultado de cada processo depende da análise do INSS e do Poder Judiciário.</p>
          <p>Baseado na legislação previdenciária vigente (Lei 8.213/91 e alterações).</p>
        </div>
      </div>

    </div>
  );
};

export default Previdenciario;
