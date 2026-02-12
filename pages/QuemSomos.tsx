import React from 'react';
import { ShieldCheck, Heart, Star, Globe, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const QuemSomos: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen">
      {/* SEÇÃO 1: HERO SECTION */}
      <section className="bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Advocacia Especializada em Direito Previdenciário, Cível e Saúde
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-8">
            Atendimento 100% digital para todo o Brasil
          </p>
          <a href="https://wa.me/5585981186205" target="_blank" rel="noreferrer" className="inline-block bg-[#B1915E] hover:bg-[#8f744a] text-white font-bold py-4 px-10 rounded-md shadow-lg transform transition hover:scale-105 uppercase tracking-wide">
            Agendar Consulta Gratuita
          </a>
        </div>
      </section>

      {/* SEÇÃO 2: APRESENTAÇÃO DO ESCRITÓRIO */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Sobre Vitor Coelho Advocacia</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 leading-relaxed text-text-main text-lg space-y-6 text-justify">
            <p>
              Vitor Coelho Advocacia é um escritório de advocacia com atuação em Direito Previdenciário, Cível e Saúde, oferecendo atendimento jurídico acessível e de qualidade através de plataforma 100% digital. Acreditamos que o acesso à justiça não deve ser privilégio de poucos, e por isso trabalhamos para tornar a advocacia especializada acessível a todos, independentemente de onde você esteja.
            </p>
            <p>
              Com uma abordagem profissional e humanizada, combinamos expertise jurídica com tecnologia para entregar atendimento eficiente. Nossa equipe está comprometida em proteger seus direitos com ética, profissionalismo e transparência em cada etapa do processo.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: ESTATÍSTICAS/NÚMEROS */}
      <section className="bg-primary-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-[#B1915E] mb-2">3</div>
              <h3 className="font-heading font-bold text-lg mb-2">Áreas de Especialização</h3>
              <p className="text-sm text-gray-400">Direito Previdenciário, Cível e Saúde</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-[#B1915E] mb-2">100%</div>
              <h3 className="font-heading font-bold text-lg mb-2">Atendimento Digital</h3>
              <p className="text-sm text-gray-400">Atendimento online para todo o Brasil</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-[#B1915E] mb-2">24h</div>
              <h3 className="font-heading font-bold text-lg mb-2">Tempo de Resposta</h3>
              <p className="text-sm text-gray-400">Respondemos em até 24 horas úteis</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-[#B1915E] mb-2">OAB 56.789</div>
              <h3 className="font-heading font-bold text-lg mb-2">Conformidade</h3>
              <p className="text-sm text-gray-400">Inscrito na Ordem dos Advogados do Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: SOBRE VITOR COELHO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
             <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-xl relative flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 font-bold uppercase tracking-wider">Foto Dr. Vitor</span>
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Vitor Coelho - Advogado</h2>
            <div className="space-y-4 text-text-light text-lg leading-relaxed text-justify">
              <p>
                Vitor Coelho é um advogado especializado em Direito Previdenciário, Cível e Saúde, comprometido com a excelência jurídica e com a acessibilidade à justiça. Através de análise técnica profunda, atualização contínua sobre jurisprudência e mudanças legais, oferece atendimento humanizado e de qualidade a seus clientes.
              </p>
              <p>
                Sua abordagem inovadora e uso de tecnologia moderna permitem que ele ofereça atendimento eficiente, sem comprometer a excelência profissional.
              </p>
              <p>
                Inscrito na OAB-CE sob número 56.789, Vitor atua em todo o território nacional através de atendimento 100% digital, permitindo que clientes de qualquer estado recebam orientação jurídica sem necessidade de deslocamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: VALORES E MISSÃO */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">Nossos Valores e Compromissos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary hover:-translate-y-1 transition-transform">
              <div className="text-primary mb-4"><ShieldCheck size={32} /></div>
              <h3 className="text-xl font-bold text-primary mb-3">ÉTICA E INTEGRIDADE</h3>
              <p className="text-text-light text-sm">
                Atuamos sempre com boa-fé, transparência e conformidade com as regulamentações da OAB.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary hover:-translate-y-1 transition-transform">
              <div className="text-primary mb-4"><Heart size={32} /></div>
              <h3 className="text-xl font-bold text-primary mb-3">HUMANIDADE E EMPATIA</h3>
              <p className="text-text-light text-sm">
                Entendemos que cada cliente enfrenta uma situação única. Por isso, oferecemos atendimento acolhedor e orientação personalizada.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary hover:-translate-y-1 transition-transform">
              <div className="text-primary mb-4"><Star size={32} /></div>
              <h3 className="text-xl font-bold text-primary mb-3">EXCELÊNCIA E PROFISSIONALISMO</h3>
              <p className="text-text-light text-sm">
                Buscamos constantemente aprimorar nossa expertise jurídica através de atualização contínua.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary hover:-translate-y-1 transition-transform">
              <div className="text-primary mb-4"><Globe size={32} /></div>
              <h3 className="text-xl font-bold text-primary mb-3">ACESSIBILIDADE E INOVAÇÃO</h3>
              <p className="text-text-light text-sm">
                Acreditamos que a advocacia especializada deve ser acessível a todos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary md:col-span-2 lg:col-span-2 hover:-translate-y-1 transition-transform">
              <div className="text-primary mb-4"><MessageSquare size={32} /></div>
              <h3 className="text-xl font-bold text-primary mb-3">TRANSPARÊNCIA E CONFIANÇA</h3>
              <p className="text-text-light text-sm">
                Você merece saber exatamente como seu caso será conduzido, quais são os prazos e possibilidades.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 6: ÁREAS DE ATUAÇÃO (Resumo) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-heading font-bold text-primary mb-12">Áreas de Atuação</h2>
           <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
               <h3 className="font-bold text-xl mb-2 text-secondary">Direito Previdenciário</h3>
               <p className="text-sm text-text-light">Atuação em aposentadorias, benefícios por incapacidade, BPC/LOAS, revisões de benefícios e planejamento previdenciário.</p>
             </div>
             <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
               <h3 className="font-bold text-xl mb-2 text-secondary">Direito Cível e Família</h3>
               <p className="text-sm text-text-light">Atuação em questões familiares, contratos, obrigações de fazer, retificação de registro civil e interdição.</p>
             </div>
             <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
               <h3 className="font-bold text-xl mb-2 text-secondary">Direito à Saúde</h3>
               <p className="text-sm text-text-light">Atuação relacionada a planos de saúde, SUS, liberação de medicamentos e procedimentos.</p>
             </div>
           </div>
        </div>
      </section>

      {/* SEÇÃO 7: CARACTERÍSTICAS DO ATENDIMENTO */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">Características do Atendimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "ATENDIMENTO 100% DIGITAL", text: "Você não precisa sair de casa. Todo o atendimento é realizado através de plataformas seguras, videochamadas, email e WhatsApp." },
              { title: "RESPOSTA RÁPIDA", text: "Sua dúvida é importante. Respondemos em até 24 horas úteis." },
              { title: "CONSULTA GRATUITA INICIAL", text: "Antes de contratar, você tem direito a uma consulta inicial gratuita." },
              { title: "TRANSPARÊNCIA EM HONORÁRIOS", text: "Sem surpresas. Você saberá exatamente como será calculado o valor dos honorários." },
              { title: "CONFORMIDADE TOTAL COM OAB", text: "Atuamos em total conformidade com as regulamentações da OAB (Provimento 205/2021)." },
              { title: "PROTEÇÃO LGPD", text: "Seus dados são confidenciais e protegidos conforme a Lei Geral de Proteção de Dados (LGPD)." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <CheckCircle size={18} className="text-secondary" /> {item.title}
                </h4>
                <p className="text-sm text-text-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 & 9: MISSÃO E VISÃO */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-[#B1915E]">Nossa Missão</h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Oferecer atendimento jurídico especializado, ético e humanizado, tornando a advocacia acessível a todos através de tecnologia moderna.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-[#B1915E]">Nossa Visão</h2>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              Ser referência em advocacia digital, reconhecido pela excelência profissional, ética inquestionável e impacto positivo na vida de nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10: CTA FINAL */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Pronto para Resolver seu Caso?</h2>
          <p className="text-lg text-text-light mb-8">Não deixe para depois. Sua primeira consulta é gratuita e sem compromisso.</p>
          <a 
            href="https://wa.me/5585981186205" 
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#B1915E] hover:bg-[#8f744a] text-white font-bold py-4 px-10 rounded-md shadow-lg transform transition hover:scale-105 uppercase tracking-wide"
          >
            Agendar Consulta Gratuita
          </a>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;