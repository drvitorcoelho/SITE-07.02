import React from 'react';
import { Mail, Phone, MessageCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const ContactCard = ({ icon, title, content, description, btnText, link, footer }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-heading font-bold text-primary mb-2">{title}</h3>
    <p className="font-bold text-lg text-text-main mb-2">{content}</p>
    <p className="text-sm text-text-light mb-6">{description}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer"
      className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-6 rounded-full transition-colors mb-4 w-full"
    >
      {btnText}
    </a>
    <p className="text-xs text-gray-400 mt-auto">{footer}</p>
  </div>
);

const Contato: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Entre em Contato</h1>
        <p className="text-xl text-gray-200">Múltiplas formas de nos alcançar. Escolha a que for mais conveniente para você.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* CARDS DE CONTATO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactCard 
            icon={<MessageCircle size={28} />}
            title="WhatsApp"
            content="(85) 9 8118-6205"
            description="Resposta rápida e prática. Ideal para dúvidas rápidas e agendamentos."
            btnText="Abrir WhatsApp"
            link="https://wa.me/5585981186205"
            footer="Resposta rápida e prática. Ideal para dúvidas rápidas e agendamentos."
          />
          <ContactCard 
            icon={<Mail size={28} />}
            title="Email"
            content="contato@vitorcoelho.adv.br"
            description="Para assuntos mais formais e documentação. Ideal para enviar documentos."
            btnText="Enviar Email"
            link="mailto:contato@vitorcoelho.adv.br"
            footer="Para assuntos mais formais e documentação. Ideal para enviar documentos."
          />
          <ContactCard 
            icon={<Phone size={28} />}
            title="Telefone"
            content="(85) 9 8118-6205"
            description="Fale diretamente conosco. Ideal para conversas mais longas."
            btnText="Ligar Agora"
            link="tel:+5585981186205"
            footer="Fale diretamente conosco. Ideal para conversas mais longas."
          />
        </div>

        {/* ZOHO FORMULÁRIO (Iframe) */}
        <div id="formulario-contato" className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border-t-4 border-secondary">
          <div className="text-center pt-8 px-8 pb-4">
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">Envie uma Mensagem</h2>
            <p className="text-text-light">Preencha o formulário abaixo e entraremos em contato em até 24 horas úteis.</p>
          </div>

          <div className="w-full">
            <iframe
              aria-label="Envie uma Mensagem"
              frameBorder="0"
              style={{
                height: '700px',
                width: '100%',
                border: 'none'
              }}
              src="https://forms.zohopublic.com/escritoriovitor1/form/EnvieumaMensagem/formperma/29Bdf3sKadO6cGfMcuN2vd3N7iiO9S_p-5IejfksT-M"
              title="Formulário de Contato Zoho"
            />
          </div>
        </div>

        {/* INFORMAÇÕES PROFISSIONAIS E MAPA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
           
           {/* Informações Profissionais */}
           <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-primary">Informações Profissionais</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full text-primary"><CheckCircle size={24} /></div>
                 <div>
                    <h4 className="font-bold text-primary">Inscrição OAB-CE</h4>
                    <p className="text-secondary font-bold text-lg">56.789</p>
                    <p className="text-sm text-gray-500">Você pode verificar nossa inscrição no site da OAB-CE</p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full text-primary"><CheckCircle size={24} /></div>
                 <div>
                    <h4 className="font-bold text-primary">Horário de Atendimento</h4>
                    <p className="text-gray-700">Segunda a Sexta: 7h - 18h</p>
                    <p className="text-sm text-gray-500">Atendimento online disponível 24/7 via WhatsApp</p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full text-primary"><CheckCircle size={24} /></div>
                 <div>
                    <h4 className="font-bold text-primary">Tempo de Resposta</h4>
                    <p className="text-gray-700">Até 24 horas úteis</p>
                    <p className="text-sm text-gray-500">Respondemos rapidamente para que você tenha as informações necessárias</p>
                 </div>
              </div>
           </div>

           {/* Aviso de Segurança */}
           <div className="flex flex-col justify-center">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-secondary">
                 <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><AlertTriangle size={18} /> Seus Dados Estão Seguros</h4>
                 <p className="text-sm text-gray-700 mb-4">
                   Seus dados são confidenciais e protegidos conforme a Lei Geral de Proteção de Dados (LGPD). Utilizamos informações apenas para contato e análise do seu caso.
                 </p>
                 <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>Criptografia</li>
                    <li>Sigilo Profissional</li>
                    <li>Acesso Restrito</li>
                    <li>Conformidade LGPD</li>
                 </ul>
              </div>
           </div>

        </div>

        {/* CTA FINAL */}
        <div className="mt-16 text-center">
           <h2 className="text-2xl font-heading font-bold text-primary mb-4">Pronto para Resolver seu Caso?</h2>
           <p className="text-lg text-text-light mb-8">Não deixe para depois. Quanto antes você buscar ajuda, melhor. Sua primeira consulta é gratuita e sem compromisso.</p>
           <a 
             href="https://wa.me/5585981186205" 
             target="_blank"
             rel="noreferrer"
             className="inline-block bg-[#B1915E] hover:bg-[#8f744a] text-white font-bold py-4 px-10 rounded-md shadow-lg transform transition hover:scale-105 uppercase tracking-wide"
           >
             Agendar Consulta Gratuita
           </a>
        </div>

      </div>
    </div>
  );
};

export default Contato;