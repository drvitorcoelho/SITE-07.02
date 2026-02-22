import React from 'react';
import { ShieldCheck, Heart, Star, Globe, MessageSquare, CheckCircle, ArrowRight, Scale, FileText, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceShortcuts from '../components/ServiceShortcuts';

const QuemSomos: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen font-sans">
      {/* SEÇÃO 1: HERO SECTION */}
      <section className="bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Advocacia Especializada em <br/>
            <span className="text-secondary">Direito Previdenciário, Cível e Saúde</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10">
            Atendimento 100% digital para todo o Brasil. Agilidade, segurança e compromisso com o seu direito.
          </p>
          <a 
            href="https://wa.me/5585981186205" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105 uppercase tracking-wide text-lg"
          >
            Agendar Consulta Gratuita
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Service Shortcuts */}
      <ServiceShortcuts />

      {/* SEÇÃO 2: APRESENTAÇÃO DO ESCRITÓRIO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Equipe reunida" 
                    className="rounded-xl shadow-xl w-full object-cover h-[400px]"
                  />
                </div>
             </div>
             <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Sobre Vitor Coelho Advocacia</h2>
                <div className="space-y-6 text-text-light text-lg leading-relaxed text-justify">
                  <p>
                    O escritório <strong className="text-primary">Vitor Coelho Advocacia</strong> nasceu com o propósito de democratizar o acesso à justiça de qualidade. Especializados em Direito Previdenciário, Cível e Saúde, oferecemos um atendimento jurídico de excelência através de uma plataforma 100% digital.
                  </p>
                  <p>
                    Acreditamos que a distância física não deve ser uma barreira para a defesa dos seus direitos. Por isso, investimos em tecnologia e processos eficientes para atender clientes em todo o território nacional com a mesma proximidade e atenção de um atendimento presencial.
                  </p>
                  <p>
                    Nossa equipe combina conhecimento técnico profundo com uma abordagem humanizada, garantindo que cada cliente se sinta acolhido, ouvido e, acima de tudo, bem representado.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: ESTATÍSTICAS/NÚMEROS */}
      <section className="bg-primary-dark py-16 text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-4 flex flex-col items-center justify-center">
              <div className="text-5xl font-extrabold text-secondary mb-3">3</div>
              <h3 className="font-heading font-bold text-lg uppercase tracking-widest mb-2">Áreas de Atuação</h3>
              <p className="text-sm text-gray-400 font-medium">Previdenciário, Cível e Saúde</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <div className="text-5xl font-extrabold text-secondary mb-3">100%</div>
              <h3 className="font-heading font-bold text-lg uppercase tracking-widest mb-2">Digital</h3>
              <p className="text-sm text-gray-400 font-medium">Atendimento em todo Brasil</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <div className="text-5xl font-extrabold text-secondary mb-3">24h</div>
              <h3 className="font-heading font-bold text-lg uppercase tracking-widest mb-2">Agilidade</h3>
              <p className="text-sm text-gray-400 font-medium">Resposta rápida ao cliente</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <div className="text-5xl font-extrabold text-secondary mb-3">OAB</div>
              <h3 className="font-heading font-bold text-lg uppercase tracking-widest mb-2">Regularidade</h3>
              <p className="text-sm text-gray-400 font-medium">Inscrição 56.789 (CE)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: SOBRE VITOR COELHO */}
      <section className="py-20 bg-background-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 order-2 md:order-1">
             <div className="aspect-[3/4] bg-white rounded-xl shadow-xl p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                   {/* Placeholder para foto real */}
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-6">
                      <span className="text-white font-bold uppercase tracking-wider text-sm">Dr. Vitor Coelho</span>
                   </div>
                   <span className="text-gray-400 font-bold uppercase tracking-wider">Foto</span>
                </div>
             </div>
          </div>
          <div className="w-full md:w-2/3 order-1 md:order-2">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block">Advogado Responsável</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Dr. Vitor Coelho</h2>
            <div className="space-y-4 text-text-light text-lg leading-relaxed text-justify">
              <p>
                Vitor Coelho é advogado inscrito na OAB/CE sob o nº 56.789, com sólida formação acadêmica e prática nas áreas de Direito Previdenciário, Cível e Saúde.
              </p>
              <p>
                Sua trajetória é marcada pelo compromisso inegociável com a ética e a defesa intransigente dos direitos de seus clientes. Compreendendo que por trás de cada processo existe uma vida, uma família e uma história, Dr. Vitor conduz cada caso com a máxima dedicação e empatia.
              </p>
              <p>
                Pioneiro na advocacia digital, desenvolveu uma metodologia de trabalho que permite atender clientes de qualquer lugar do país com a mesma eficiência e segurança de um escritório físico, utilizando ferramentas modernas para garantir agilidade e transparência.
              </p>
            </div>
            <div className="mt-8">
               <a href="http://lattes.cnpq.br/" target="_blank" rel="noreferrer" className="text-primary font-bold border-b-2 border-secondary hover:text-secondary transition-colors">
                 Ver Currículo Lattes &rarr;
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: VALORES E MISSÃO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block">Nossa Essência</span>
             <h2 className="text-3xl font-heading font-bold text-primary">Valores e Compromissos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Ética e Integridade</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Atuação pautada na transparência absoluta e no respeito rigoroso às normas da OAB. A confiança do cliente é nosso maior patrimônio.
              </p>
            </div>

            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Humanidade</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Advocacia feita por pessoas para pessoas. Acolhemos sua demanda com empatia, entendendo a importância do seu caso para sua vida.
              </p>
            </div>

            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Excelência Técnica</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Estudo constante e atualização permanente. Buscamos sempre a melhor tese jurídica para defender os interesses de nossos clientes.
              </p>
            </div>

            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Inovação</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Utilizamos o melhor da tecnologia para eliminar burocracias, reduzir distâncias e acelerar a resolução dos seus problemas.
              </p>
            </div>

            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group md:col-span-2 lg:col-span-2">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Comunicação Clara</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Sem "juridiquês" desnecessário. Explicamos cada etapa do seu processo de forma simples e direta, mantendo você sempre informado sobre o andamento do seu caso.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 6: ÁREAS DE ATUAÇÃO (Resumo) */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-4xl font-heading font-bold mb-16">Nossas Especialidades</h2>
           <div className="grid md:grid-cols-3 gap-8">
             
             <Link to="/previdenciario" className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-secondary/10">
               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                 <FileText size={32} className="text-white" />
               </div>
               <div className="mt-10">
                 <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-secondary transition-colors">Direito Previdenciário</h3>
                 <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                   Aposentadorias, Benefícios por Incapacidade, BPC/LOAS e Planejamento Previdenciário.
                 </p>
               </div>
             </Link>

             <Link to="/civel" className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-secondary/10">
               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                 <Scale size={32} className="text-white" />
               </div>
               <div className="mt-10">
                 <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-secondary transition-colors">Direito Cível e Família</h3>
                 <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                   Divórcios, Inventários, Contratos, Indenizações e Defesa do Consumidor.
                 </p>
               </div>
             </Link>

             <Link to="/saude" className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-secondary/10">
               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                 <Activity size={32} className="text-white" />
               </div>
               <div className="mt-10">
                 <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-secondary transition-colors">Direito à Saúde</h3>
                 <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                   Liminares contra Planos de Saúde, Medicamentos de Alto Custo e Cirurgias.
                 </p>
               </div>
             </Link>

           </div>
        </div>
      </section>

      {/* SEÇÃO 7: CARACTERÍSTICAS DO ATENDIMENTO */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary">Por que escolher nosso escritório?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "100% DIGITAL", text: "Atendimento completo sem sair de casa. Envie documentos e assine contratos pelo celular." },
              { title: "RESPOSTA RÁPIDA", text: "Não deixamos você esperando. Nosso compromisso é responder em até 24h úteis." },
              { title: "PRÉ-ANÁLISE GRATUITA", text: "Avaliamos a viabilidade do seu caso inicialmente sem custo." },
              { title: "HONORÁRIOS JUSTOS", text: "Valores transparentes e condições facilitadas de pagamento." },
              { title: "SEGURANÇA JURÍDICA", text: "Atuação rigorosa conforme as leis e normas da OAB/CE." },
              { title: "SIGILO ABSOLUTO", text: "Seus dados e sua história estão protegidos pelo sigilo profissional e LGPD." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-secondary/30">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" /> 
                  {item.title}
                </h4>
                <p className="text-sm text-text-light leading-relaxed pl-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 10: CTA FINAL */}
      <section className="py-20 bg-white text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Vamos conversar sobre o seu caso?</h2>
          <p className="text-lg text-text-light mb-10">
            Não deixe suas dúvidas para depois. Nossa equipe está pronta para ouvir você e orientar sobre o melhor caminho jurídico.
          </p>
          <a 
            href="https://wa.me/5585981186205" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full shadow-xl transform transition hover:scale-105 uppercase tracking-wide text-lg"
          >
            <MessageSquare size={24} />
            Falar com Especialista Agora
          </a>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;