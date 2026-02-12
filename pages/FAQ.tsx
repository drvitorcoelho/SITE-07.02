import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm mb-4">
      <button 
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-heading font-bold text-primary text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-100 text-text-light leading-relaxed bg-background-light animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold mb-4">Perguntas Frequentes</h1>
          <p className="text-xl text-gray-200">Tire suas dúvidas sobre nossos serviços, processo e como funcionamos</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        {/* CATEGORIA 1: SOBRE VITOR COELHO ADVOCACIA */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-secondary pl-4">Sobre Vitor Coelho Advocacia</h2>
          <FAQItem 
            question="O que faz Vitor Coelho Advocacia?"
            answer="Vitor Coelho Advocacia é um escritório especializado em Direito Previdenciário, Cível e Saúde, com atendimento 100% digital. Nosso trabalho é garantir que cada cliente receba orientação jurídica especializada, análise técnica profunda e acompanhamento completo em todas as etapas do processo. Atuamos em todo o Brasil, oferecendo atendimento jurídico acessível, ágil e humanizado."
          />
          <FAQItem 
            question="Vitor Coelho Advocacia é confiável?"
            answer="Sim. Atuamos em total conformidade com as regulamentações da OAB (Provimento 205/2021), com ética profissional inquestionável e transparência em todas as etapas. Você pode verificar nossa inscrição na OAB-CE sob número 56.789. Nosso compromisso é oferecer atendimento especializado, análise técnica profunda e orientação honesta sobre seu caso."
          />
          <FAQItem 
            question="O escritório atende clientes de todo o Brasil?"
            answer="Sim. Vitor Coelho Advocacia realiza atendimentos em todo o território nacional através de atendimento 100% digital. Isso significa que você pode receber orientação jurídica especializada sem precisar se deslocar, independentemente de qual estado você mora."
          />
          <FAQItem 
            question="O atendimento é presencial ou online?"
            answer="Nosso atendimento é 100% online. Você não precisa comparecer presencialmente. Todo o processo é realizado através de plataformas digitais seguras, videochamadas, email e WhatsApp."
          />
          <FAQItem 
            question="Como agendar uma consulta?"
            answer={
              <div>
                <p>É muito simples! Você pode agendar de três formas:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li><strong>WhatsApp:</strong> (85) 9 8118-6205</li>
                  <li><strong>Email:</strong> contato@vitorcoelho.adv.br</li>
                  <li><strong>Formulário:</strong> Preencha o formulário em nossa página de contato</li>
                </ol>
                <p className="mt-2">Responderemos em até 24 horas úteis para agendar sua consulta gratuita.</p>
              </div>
            }
          />
        </section>

        {/* CATEGORIA 2: PROCESSO E PRAZOS */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-secondary pl-4">Processo e Prazos</h2>
          <FAQItem 
            question="Como é o processo de atendimento?"
            answer={
              <div>
                <p>Nosso processo é simples e transparente:</p>
                <ul className="space-y-2 mt-2">
                  <li><strong>Passo 1 - Consulta Inicial (Gratuita):</strong> Você descreve seu caso e nós fazemos uma análise preliminar.</li>
                  <li><strong>Passo 2 - Análise Técnica:</strong> Solicitamos documentos e realizamos análise profunda.</li>
                  <li><strong>Passo 3 - Proposta de Ação:</strong> Apresentamos opções, prazos e custos.</li>
                  <li><strong>Passo 4 - Execução:</strong> Iniciamos as ações jurídicas necessárias.</li>
                  <li><strong>Passo 5 - Acompanhamento:</strong> Monitoramos até a conclusão.</li>
                </ul>
              </div>
            }
          />
          <FAQItem 
            question="Quanto tempo leva para resolver um caso?"
            answer="O tempo varia conforme o tipo de caso. Processos administrativos geralmente levam de 30 a 90 dias. Processos judiciais podem levar de 6 meses a 2 anos, dependendo da complexidade. Forneceremos um prazo estimado após análise inicial."
          />
          <FAQItem 
            question="Qual é o prazo para resposta após enviar documentos?"
            answer="Respondemos em até 24 horas úteis. Se você enviar documentos em um dia útil antes das 18h, você terá uma resposta no dia útil seguinte."
          />
          <FAQItem 
            question="Posso acompanhar o andamento do meu caso?"
            answer="Sim, com total transparência. Você receberá atualizações regulares sobre o andamento do seu caso através de email, WhatsApp ou videochamada."
          />
          <FAQItem 
            question="O que é a consulta gratuita inicial?"
            answer="A consulta gratuita inicial é um atendimento de até 30 minutos onde você descreve seu caso e nós fazemos uma análise preliminar. Não há compromisso: você pode decidir livremente se deseja prosseguir ou não."
          />
        </section>

        {/* CATEGORIA 3: CUSTOS E HONORÁRIOS */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-secondary pl-4">Custos e Honorários</h2>
          <FAQItem 
            question="Qual é o valor da consulta inicial?"
            answer="A consulta inicial é completamente gratuita. Sem custos, sem compromisso. Você terá a oportunidade de conhecer nosso trabalho e decidir se deseja contratar nossos serviços."
          />
          <FAQItem 
            question="Como são cobrados os honorários?"
            answer="Os honorários serão discutidos e definidos durante sua consulta inicial, conforme a natureza e complexidade do seu caso. Oferecemos diferentes modalidades de cobrança e buscaremos a opção mais adequada para sua situação."
          />
          <FAQItem 
            question="Há custas processuais?"
            answer="Sim, em processos judiciais há custas (taxas cobradas pelo tribunal) e possíveis despesas com perícias ou documentos. Essas custas são obrigatórias e não são nossos honorários. Informaremos o valor estimado antes de iniciar qualquer ação judicial."
          />
          <FAQItem 
            question="Posso parcelar os honorários?"
            answer="Sim. Oferecemos opções de parcelamento conforme sua situação financeira. Discutiremos as melhores formas de pagamento durante a consulta, sempre buscando uma solução que funcione para você."
          />
          <FAQItem 
            question="Há risco de não conseguir o benefício?"
            answer="Toda ação jurídica tem riscos. Antes de iniciar qualquer processo, fazemos uma análise cuidadosa do seu caso e informamos honestamente quais são as chances de sucesso. Nunca prometemos resultados garantidos, mas oferecemos análise técnica profunda para tomar a melhor decisão."
          />
        </section>

        {/* CATEGORIA 4: ATENDIMENTO ONLINE */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-secondary pl-4">Atendimento Online</h2>
          <FAQItem 
            question="Como funciona o atendimento 100% digital?"
            answer={
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>Agendamento:</strong> Você agenda pelo WhatsApp, email ou formulário.</li>
                <li><strong>Videochamada:</strong> Realizamos a consulta por videochamada em plataforma segura.</li>
                <li><strong>Documentos:</strong> Você envia documentos através de plataforma criptografada.</li>
                <li><strong>Comunicação:</strong> Mantemos contato via WhatsApp, email ou videochamada.</li>
                <li><strong>Assinatura Digital:</strong> Contratos são assinados digitalmente. Tudo seguro, rápido e sem sair de casa.</li>
              </ol>
            }
          />
          <FAQItem 
            question="Preciso ir presencialmente em algum momento?"
            answer="Nosso atendimento é 100% online. Você não precisa comparecer presencialmente para consultas, análises de documentos ou comunicação com nosso escritório. No entanto, é importante esclarecer: em alguns procedimentos específicos perante instituições como INSS ou em momentos judiciais como audiências, perícias e comparecimentos em tribunal, você pode precisar estar presente. Essas são exigências legais das instituições, não do nosso atendimento. Informaremos com antecedência se algum procedimento exigir sua presença. Quando necessário, orientamos você sobre como proceder."
          />
          <FAQItem 
            question="Como envio documentos?"
            answer={
              <div>
                <p>Você envia documentos através de:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Plataforma Segura: Link criptografado que fornecemos.</li>
                  <li>WhatsApp: Fotos ou PDFs dos documentos.</li>
                  <li>Email: Documentos digitalizados. Todos os métodos são seguros e confidenciais.</li>
                </ul>
              </div>
            }
          />
          <FAQItem 
            question="Qual é o horário de atendimento?"
            answer="Atendimento comercial: Segunda a sexta, 7h às 18h. Atendimento online via WhatsApp está disponível 24/7, mas respostas detalhadas virão durante o horário comercial. Para emergências, entre em contato conosco."
          />
          <FAQItem 
            question="Posso fazer videochamada?"
            answer="Sim. Você pode agendar videochamadas através do WhatsApp ou email. Usamos plataformas seguras e criptografadas."
          />
        </section>

        {/* CATEGORIA 5: DOCUMENTOS NECESSÁRIOS */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-secondary pl-4">Documentos Necessários</h2>
          <FAQItem 
            question="Quais documentos preciso para iniciar?"
            answer={
              <div>
                <p>Os documentos variam conforme o tipo de caso. Geralmente solicitamos:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>CPF, RG ou CNH, Comprovante de residência.</li>
                  <li>Documentos específicos (conforme o caso): Carteira de trabalho, Carnês ou guias de contribuição, CNIS, Carta de concessão do INSS, Laudos médicos, Contratos, Correspondências do INSS.</li>
                </ul>
                <p className="mt-2">Informaremos exatamente quais documentos você precisa após a consulta inicial.</p>
              </div>
            }
          />
          <FAQItem 
            question="Preciso de documentos originais?"
            answer="Não. Cópias digitalizadas (fotos ou PDFs) são suficientes para análise inicial. Se necessário avançar para ações judiciais, você pode precisar apresentar originais em cartório, mas faremos isso com você."
          />
          <FAQItem 
            question="Posso enviar documentos em partes?"
            answer="Sim. Você pode enviar os documentos gradualmente. Começamos a análise com o que você tiver disponível e solicitamos os demais conforme necessário."
          />
          <FAQItem 
            question="Meus documentos estão seguros?"
            answer="Sim. Seus documentos são protegidos conforme a Lei Geral de Proteção de Dados (LGPD). Utilizamos plataformas criptografadas, senhas seguras e sigilo profissional absoluto."
          />
          <FAQItem 
            question="Quanto tempo leva para analisar os documentos?"
            answer="Após sua primeira consulta, analisamos os documentos em até 48 horas úteis. Casos simples podem ser analisados em 24 horas. É importante ressaltar: documentos devem ser enviados após a realização da consulta inicial. Envios de documentos sem consulta prévia não são analisados imediatamente. Agende sua consulta primeiro para que possamos orientá-lo sobre quais documentos são necessários e então proceder com a análise."
          />
        </section>

        {/* CATEGORIA 6: CONFORMIDADE E SEGURANÇA */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-secondary pl-4">Conformidade e Segurança</h2>
          <FAQItem 
            question="Meus dados estão protegidos?"
            answer="Sim. Seus dados pessoais e documentos são protegidos conforme a Lei Geral de Proteção de Dados (LGPD). Utilizamos plataformas criptografadas, senhas seguras, acesso restrito apenas a profissionais autorizados e sigilo profissional absoluto."
          />
          <FAQItem 
            question="Como é garantido o sigilo profissional?"
            answer="O sigilo profissional é um direito seu e uma obrigação nossa. Tudo o que você nos disser é confidencial. Não compartilhamos informações com terceiros sem sua autorização, exceto quando obrigado por lei. Você pode confiar que suas informações ficarão entre você e nosso escritório."
          />
          <FAQItem 
            question="Posso confiar em um advogado online?"
            answer="Sim. A advocacia online é tão profissional e confiável quanto a presencial. O que importa é a competência, ética e compromisso do advogado. Você pode verificar nossa inscrição na OAB-CE (56.789) e ler avaliações de clientes. A tecnologia apenas facilita o acesso, mas a qualidade do trabalho é a mesma."
          />
          <FAQItem 
            question="Há garantia de satisfação?"
            answer="Nosso compromisso é sua satisfação. Se você não estiver satisfeito com o atendimento inicial, podemos discutir alternativas. Queremos que você se sinta confiante e bem atendido. Sua confiança é nosso maior ativo."
          />
        </section>

      </div>

      {/* CTA FOOTER */}
      <section className="bg-white py-12 text-center border-t border-gray-100">
        <h2 className="text-2xl font-heading font-bold text-primary mb-4">Ainda tem dúvidas?</h2>
        <a 
          href="https://wa.me/5585981186205" 
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#B1915E] hover:bg-[#8f744a] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle size={20} />
          Fale Conosco no WhatsApp
        </a>
      </section>
    </div>
  );
};

export default FAQ;