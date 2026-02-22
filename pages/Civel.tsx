import React from 'react';
import { 
  MessageCircle, Heart, FileText, UserPlus, Home, Users, ChevronRight, 
  Shield, Clock, Smile, CheckCircle, AlertTriangle, Calendar, Search, 
  Briefcase, DollarSign, Gavel, FileSignature, Scale, Lock, ChevronDown
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';

const Civel: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsappLink = () => {
    return "https://wa.me/5585981186205?text=Olá Dr. Vitor, gostaria de uma consultoria em Direito Civil.";
  };

  return (
    <div className="flex flex-col bg-[#f8f9fa] text-[#333] font-body">
      
      {/* SEÇÃO 1: HERO SECTION */}
      <section className="relative bg-primary-dark text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:w-3/4">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight drop-shadow-lg">
              Consultoria em <span className="text-secondary">Direito Civil e Família</span>
            </h1>
            <h2 className="text-xl text-gray-200 mb-4 font-semibold">
              Orientação jurídica especializada em questões de família, propriedade, contratos e sucessões.
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Direito Civil é a área que regula as relações entre pessoas e empresas, envolvendo questões como divórcio, guarda, pensão alimentícia, herança, contratos e indenizações. Se você tem dúvidas sobre direitos pessoais, familiares ou patrimoniais, estamos aqui para orientá-lo.
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
              { id: 'o-que-e', label: '1. O que é Direito Civil?' },
              { id: 'areas', label: '2. Áreas de Atuação' },
              { id: 'mudancas', label: '3. Mudanças em 2026' },
              { id: 'atendimento', label: '4. Como Funciona' },
              { id: 'prazos', label: '5. Prazos Estimados' },
              { id: 'o-que-fazer', label: '6. O Que Você Precisa Fazer' },
              { id: 'documentos', label: '7. Documentos Necessários' },
              { id: 'faq', label: '8. Perguntas Frequentes' },
              { id: 'proximos', label: '9. Próximos Passos' },
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

      {/* SEÇÃO 3: O QUE É DIREITO CIVIL? */}
      <section id="o-que-e" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary mt-2">O Que é Direito Civil?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Direito Civil é a área do direito que regula as relações entre pessoas físicas e jurídicas, envolvendo direitos e deveres em diversas situações do cotidiano.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-primary text-xl mb-4 flex items-center gap-2"><Users size={24}/> Relações Familiares</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Divórcio, separação e dissolução de união estável</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Guarda, visitas e pensão alimentícia</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Reconhecimento de filiação</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Direitos e deveres entre cônjuges</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary text-xl mb-4 flex items-center gap-2"><Home size={24}/> Propriedade e Bens</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Compra, venda e aluguel de imóveis</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Direitos de propriedade e Usucapião</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Despejo e conflitos imobiliários</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary text-xl mb-4 flex items-center gap-2"><FileSignature size={24}/> Contratos e Obrigações</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Elaboração e revisão de contratos</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Cobrança de dívidas e Indenizações</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Responsabilidade civil</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary text-xl mb-4 flex items-center gap-2"><Scale size={24}/> Sucessões e Especiais</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Testamentos, heranças e inventários</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Direitos do consumidor e Interdição</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="text-secondary mt-1"/> Retificação de registros civis</li>
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
            <p className="text-gray-600 mt-2">Atuação completa em todas as esferas do Direito Civil.</p>
          </div>

          <div className="space-y-12">
            {/* Família */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 border-b pb-2 flex items-center gap-2"><Users/> Direito de Família</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Divórcio</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Divórcio amigável e litigioso</li>
                    <li>• Dissolução de união estável</li>
                    <li>• Partilha de bens</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Guarda e Visitas</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Guarda compartilhada e unilateral</li>
                    <li>• Regime de convivência</li>
                    <li>• Modificação de guarda</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Pensão Alimentícia</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fixação e revisão de valores</li>
                    <li>• Execução e exoneração</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">União Estável</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reconhecimento e dissolução</li>
                    <li>• Direitos e deveres</li>
                    <li>• Herança em união estável</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Abandono Afetivo</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reconhecimento e indenização</li>
                    <li>• Danos morais</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Multiparentalidade</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reconhecimento de múltiplos pais</li>
                    <li>• Direitos sucessórios</li>
                    <li>• Filiação socioafetiva</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sucessões */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 border-b pb-2 flex items-center gap-2"><FileText/> Sucessões e Heranças</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Herança e Partilha</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Divisão de bens entre herdeiros</li>
                    <li>• Cálculo de quinhões</li>
                    <li>• Resolução de conflitos</li>
                    <li>• Contestação de testamento</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Inventário e Testamento</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Elaboração e validade de testamento</li>
                    <li>• Abertura de inventário</li>
                    <li>• Avaliação e partilha de bens</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Propriedade */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 border-b pb-2 flex items-center gap-2"><Home/> Propriedade e Bens</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Imobiliário</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Compra, venda e locação</li>
                    <li>• Despejo e defesa</li>
                    <li>• Conflitos entre vizinhos</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Regularização</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Usucapião (ordinária, familiar, etc)</li>
                    <li>• Retificação de registro civil</li>
                    <li>• Direitos de propriedade</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Obrigações */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 border-b pb-2 flex items-center gap-2"><FileSignature/> Obrigações e Contratos</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Cobrança</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ação de cobrança</li>
                    <li>• Execução de título</li>
                    <li>• Negociação de débito</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Contratos</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Análise de cláusulas abusivas</li>
                    <li>• Renegociação e nulidade</li>
                    <li>• Revisão de contratos</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-secondary">Indenizações</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Danos morais e materiais</li>
                    <li>• Responsabilidade civil</li>
                    <li>• Acidentes e lesões</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: MUDANÇAS EM 2026 */}
      <section id="mudancas" className="py-16 bg-primary-dark text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Mudanças Importantes em 2026</h2>
            <p className="text-gray-300">O Direito de Família passa por atualizações significativas. Conheça as principais:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2"><Users className="text-secondary"/> Guarda Compartilhada Obrigatória</h3>
              <p className="text-sm text-gray-700 mb-4">A partir de 2026, a guarda compartilhada é a regra. Ambos os pais participam das decisões e responsabilidades.</p>
              <div className="bg-green-50 p-3 rounded text-xs text-green-800 border border-green-200">
                <strong>Benefício:</strong> Maior participação de ambos os pais na vida dos filhos.
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2"><Briefcase className="text-secondary"/> Reforma do Código Civil</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Pets:</strong> Reconhecidos como membros da família (guarda e pensão).</li>
                <li>• <strong>Relacionamentos:</strong> Ampliação de direitos para novos tipos de família.</li>
                <li>• <strong>Sucessões:</strong> Novos direitos sucessórios e alterações em testamentos.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2"><DollarSign className="text-secondary"/> Pensão Alimentícia Atualizada</h3>
              <p className="text-sm text-gray-700 mb-4">Cálculo sobre valor atualizado (R$ 1.621,00) e novas regras de execução.</p>
              <p className="text-xs text-gray-500">Se você recebe pensão antiga, pode pedir revisão.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2"><Users className="text-secondary"/> Multiparentalidade</h3>
              <p className="text-sm text-gray-700 mb-4">Reconhecimento legal de múltiplos pais (biológico, padrasto, socioafetivo) com garantia de direitos sucessórios.</p>
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

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Consulta Inicial", desc: "Você descreve sua situação. Analisamos detalhes e explicamos opções." },
              { step: 2, title: "Planejamento", desc: "Definimos a estratégia, prazos e custos. Você tem um plano claro." },
              { step: 3, title: "Ação e Execução", desc: "Iniciamos o processo. Mantemos você informado a cada etapa." },
              { step: 4, title: "Resolução", desc: "Negociamos acordo ou levamos a julgamento. Você recebe o resultado." }
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 p-6 rounded-lg text-center relative group hover:-translate-y-1 transition-transform border border-gray-200">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 group-hover:bg-secondary transition-colors">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
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
            <p className="text-gray-600 mt-2">Quanto tempo leva?</p>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4">Processo</th>
                  <th className="p-4">Prazo Estimado</th>
                  <th className="p-4 hidden md:table-cell">Observações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {[
                  { proc: "Divórcio Amigável", time: "30-60 dias", obs: "Com acordo prévio entre as partes" },
                  { proc: "Divórcio Litigioso", time: "6-24 meses", obs: "Depende da complexidade e contestação" },
                  { proc: "Pensão Alimentícia", time: "2-6 meses", obs: "Pode ser rápido com acordo" },
                  { proc: "Guarda de Filhos", time: "3-12 meses", obs: "Depende se há contestação" },
                  { proc: "Herança Simples", time: "6-12 meses", obs: "Sem conflitos entre herdeiros" },
                  { proc: "Herança Complexa", time: "12-36 meses", obs: "Com muitos bens ou conflitos" },
                  { proc: "Usucapião", time: "12-36 meses", obs: "Processo mais longo" },
                  { proc: "Indenização", time: "6-36 meses", obs: "Varia muito conforme o caso" },
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
          <p className="text-xs text-gray-500 mt-4 text-center italic">
            *Estimativas. Cada caso é único e depende da complexidade e do tribunal.
          </p>
        </div>
      </section>

      {/* SEÇÃO 8: O QUE VOCÊ PRECISA FAZER */}
      <section id="o-que-fazer" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">O Que Você Precisa Fazer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-xl text-blue-800 mb-4">Para Divórcio</h3>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>✓ Reúna certidão de casamento e documentos pessoais</li>
                <li>✓ Liste bens do casal e documentos de propriedades</li>
                <li>✓ Defina se quer amigável ou litigioso</li>
                <li>✓ Pense sobre acordo de bens e filhos</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-xl text-green-800 mb-4">Para Pensão Alimentícia</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li>✓ Reúna documentos da criança e certidão de nascimento</li>
                <li>✓ Comprove renda e gastos (contracheques, notas)</li>
                <li>✓ Prepare histórico de relacionamento e pagamentos</li>
                <li>✓ Defina o valor que considera justo</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-xl text-purple-800 mb-4">Para Herança</h3>
              <ul className="space-y-2 text-sm text-purple-900">
                <li>✓ Certidão de óbito e testamento (se houver)</li>
                <li>✓ Documentos pessoais do falecido e herdeiros</li>
                <li>✓ Documentos de todos os bens e dívidas</li>
                <li>✓ Lista de herdeiros</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-xl text-orange-800 mb-4">Para Indenização/Contratos</h3>
              <ul className="space-y-2 text-sm text-orange-900">
                <li>✓ Documentação do ocorrido (BO, fotos, vídeos)</li>
                <li>✓ Testemunhas e orçamentos de danos</li>
                <li>✓ Cópia do contrato e comprovantes de pagamento</li>
                <li>✓ Cronologia dos fatos</li>
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
            <h3 className="font-bold text-lg mb-4 text-secondary border-b pb-2">Documentação Pessoal (Sempre)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-green-500"/> RG e CPF</div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-green-500"/> Comprovante de Residência</div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle size={16} className="text-green-500"/> Certidão de Nascimento/Casamento</div>
            </div>

            <h3 className="font-bold text-lg mb-4 text-secondary border-b pb-2">Específicos por Caso</h3>
            <div className="space-y-4">
              <div>
                <strong className="block text-primary mb-1">Divórcio:</strong>
                <p className="text-sm text-gray-600">Certidão de casamento, documentos de bens (imóveis, veículos), documentos dos filhos.</p>
              </div>
              <div>
                <strong className="block text-primary mb-1">Pensão Alimentícia:</strong>
                <p className="text-sm text-gray-600">Certidão de nascimento do filho, comprovantes de renda e despesas, histórico.</p>
              </div>
              <div>
                <strong className="block text-primary mb-1">Herança:</strong>
                <p className="text-sm text-gray-600">Certidão de óbito, testamento, documentos de bens e herdeiros.</p>
              </div>
              <div>
                <strong className="block text-primary mb-1">Indenização:</strong>
                <p className="text-sm text-gray-600">Provas do ocorrido (fotos, vídeos, BO), orçamentos, laudos médicos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10: DIFERENCIAIS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-heading font-bold mb-12 text-primary">Por Que Escolher Nosso Atendimento</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition-all">
                <Shield size={40} className="text-secondary mx-auto mb-4"/>
                <h3 className="text-xl font-bold text-primary mb-2">Especializado</h3>
                <p className="text-sm text-gray-600">Expertise em Direito Civil e Família. Cada caso é analisado com atenção aos detalhes.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition-all">
                <Lock size={40} className="text-secondary mx-auto mb-4"/>
                <h3 className="text-xl font-bold text-primary mb-2">Sigilo Total</h3>
                <p className="text-sm text-gray-600">Todos os dados tratados com sigilo profissional conforme Código de Ética da OAB.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition-all">
                <Clock size={40} className="text-secondary mx-auto mb-4"/>
                <h3 className="text-xl font-bold text-primary mb-2">Resposta Rápida</h3>
                <p className="text-sm text-gray-600">Respondemos suas dúvidas em até 24 horas úteis. Comunicação clara e ágil.</p>
              </div>
           </div>
        </div>
      </section>

      {/* SEÇÃO 11: FAQ */}
      <section id="faq" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Perguntas Frequentes</h2>
           <div className="space-y-4">
             {[
               { q: "Qual a diferença entre divórcio amigável e litigioso?", a: "Amigável: partes concordam, é mais rápido e barato. Litigioso: há discordância, o juiz decide, é mais demorado e caro." },
               { q: "Como funciona a pensão alimentícia?", a: "Calculada sobre a renda de quem paga (geralmente 15-30%) e necessidade do filho. Paga mensalmente até 18 anos ou fim da faculdade." },
               { q: "O que é guarda compartilhada?", a: "Ambos os pais decidem sobre a vida do filho e dividem responsabilidades. É a regra desde 2014. O filho tem uma base de moradia, mas convive com ambos." },
               { q: "Quais direitos na união estável?", a: "Direito à herança, pensão, partilha de bens e benefícios do INSS. Comprovada por convivência pública, contínua e duradoura." },
               { q: "Como funciona a herança?", a: "Transmissão de bens aos herdeiros (cônjuge, filhos, pais). Requer inventário. Prazo varia de meses a anos dependendo da complexidade." },
               { q: "O que é usucapião?", a: "Aquisição de propriedade por posse prolongada (5 a 15 anos), contínua e sem oposição. Requer processo judicial ou extrajudicial." },
               { q: "Posso revisar um contrato?", a: "Sim, se houver cláusulas abusivas ou mudança drástica nas circunstâncias econômicas que tornem o cumprimento impossível." },
               { q: "O que é abandono afetivo?", a: "Quando o pai/mãe não cumpre dever de convivência e afeto. Pode gerar indenização por danos morais." },
               { q: "O que é multiparentalidade?", a: "Reconhecimento legal de mais de dois pais (ex: biológico e socioafetivo). Garante direitos sucessórios e de filiação a todos." },
               { q: "Qual o prazo para pedir pensão?", a: "Não há prazo máximo para pedir. Pode ser cobrada retroativamente desde a data da citação no processo." }
             ].map((item, i) => (
               <details key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                 <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-secondary transition-colors">
                   {item.q}
                   <ChevronDown className="transition-transform group-open:rotate-180" size={20}/>
                 </summary>
                 <div className="px-5 pb-5 text-gray-600 text-sm border-t border-gray-100 pt-3">
                   {item.a}
                 </div>
               </details>
             ))}
           </div>
        </div>
      </section>

      {/* SEÇÃO 12: PRÓXIMOS PASSOS */}
      <section id="proximos" className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">Próximos Passos</h2>
            <p className="text-gray-600 mt-2">O que fazer agora?</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Reúna Documentos", text: "Coloque todos os documentos relevantes em ordem cronológica." },
              { title: "Descreva a Situação", text: "Escreva o que está acontecendo e liste suas dúvidas." },
              { title: "Fale Conosco", text: "Agende uma consulta inicial gratuita para análise." },
              { title: "Inicie o Processo", text: "Começamos a trabalhar no seu caso para buscar o melhor resultado." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
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
          <h2 className="text-3xl font-heading font-bold mb-6">Não deixe para depois</h2>
          <p className="text-xl text-gray-200 mb-10">
            Quanto mais cedo você buscar orientação, melhor será o resultado. Estamos prontos para ajudar.
          </p>
          <a 
            href={getWhatsappLink()}
            className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-12 rounded-md text-lg shadow-2xl transition-transform hover:scale-105"
          >
            FALAR COM UM DE NOSSOS ESPECIALISTAS
          </a>
        </div>
      </section>

      {/* RODAPÉ DA PÁGINA (Informações Legais) */}
      <div className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p><strong>Aviso Importante:</strong> Esta página contém informações educativas sobre Direito Civil. Cada caso é único e requer análise individual.</p>
          <p>Conforme Provimento 205/2021 da OAB | Baseado em legislação vigente</p>
          <p>Atualizado com mudanças de 2026 | Sem promessas de resultados</p>
        </div>
      </div>

    </div>
  );
};

export default Civel;
