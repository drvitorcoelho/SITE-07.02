import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
          <ContactCard 
            icon={<FileText size={28} />}
            title="Formulário"
            content="Formulário de Contato"
            description="Descreva seu caso em detalhes. Ideal para quem prefere deixar tudo registrado por escrito."
            btnText="Preencher Formulário"
            link="#formulario-contato"
            footer="Descreva seu caso em detalhes. Ideal para quem prefere deixar tudo registrado por escrito."
          />
        </div>

        {/* FORMULÁRIO */}
        <div id="formulario-contato" className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">Envie uma Mensagem</h2>
            <p className="text-text-light">Preencha o formulário abaixo e entraremos em contato em até 24 horas úteis.</p>
          </div>

          {/* Integrado com Formspree */}
          <form 
            action="https://formspree.io/ajax/contato@vitorcoelho.adv.br" 
            method="POST"
            className="space-y-6"
          >
            {/* Campo Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-bold text-primary mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome completo"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white text-gray-900"
              />
            </div>

            {/* Grid Email e Telefone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu.email@exemplo.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-bold text-primary mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(XX) XXXXX-XXXX"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white text-gray-900"
                />
              </div>
            </div>

            {/* Campo Necessidade (Combinado) */}
            <div>
              <label htmlFor="necessidade" className="block text-sm font-bold text-primary mb-2">
                Qual é sua necessidade? *
              </label>
              <select
                id="necessidade"
                name="necessidade"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white text-gray-900"
              >
                <option value="">Selecione sua necessidade</option>
                
                {/* GRUPO: APOSENTADORIAS */}
                <optgroup label="Aposentadorias">
                  <option value="Consulta - Aposentadoria INSS">Consulta: Aposentadoria INSS</option>
                  <option value="Análise - Aposentadoria INSS">Análise: Aposentadoria INSS</option>
                  <option value="Ação Judicial - Aposentadoria INSS">Ação Judicial: Aposentadoria INSS</option>
                  <option value="Revisão - Aposentadoria INSS">Revisão: Aposentadoria INSS</option>
                </optgroup>

                {/* GRUPO: BENEFÍCIOS POR INCAPACIDADE */}
                <optgroup label="Benefícios por Incapacidade">
                  <option value="Consulta - Benefício por Incapacidade">Consulta: Benefício por Incapacidade</option>
                  <option value="Análise - Benefício por Incapacidade">Análise: Benefício por Incapacidade</option>
                  <option value="Ação Judicial - Benefício por Incapacidade">Ação Judicial: Benefício por Incapacidade</option>
                  <option value="Revisão - Benefício por Incapacidade">Revisão: Benefício por Incapacidade</option>
                </optgroup>

                {/* GRUPO: BPC/LOAS */}
                <optgroup label="BPC/LOAS">
                  <option value="Consulta - BPC/LOAS">Consulta: BPC/LOAS</option>
                  <option value="Análise - BPC/LOAS">Análise: BPC/LOAS</option>
                  <option value="Ação Judicial - BPC/LOAS">Ação Judicial: BPC/LOAS</option>
                  <option value="Revisão - BPC/LOAS">Revisão: BPC/LOAS</option>
                </optgroup>

                {/* GRUPO: SALÁRIO MATERNIDADE */}
                <optgroup label="Salário Maternidade">
                  <option value="Consulta - Salário Maternidade">Consulta: Salário Maternidade</option>
                  <option value="Análise - Salário Maternidade">Análise: Salário Maternidade</option>
                  <option value="Ação Judicial - Salário Maternidade">Ação Judicial: Salário Maternidade</option>
                </optgroup>

                {/* GRUPO: APOSENTADORIA PCD */}
                <optgroup label="Aposentadoria PCD">
                  <option value="Consulta - Aposentadoria PCD">Consulta: Aposentadoria PCD</option>
                  <option value="Análise - Aposentadoria PCD">Análise: Aposentadoria PCD</option>
                  <option value="Ação Judicial - Aposentadoria PCD">Ação Judicial: Aposentadoria PCD</option>
                  <option value="Revisão - Aposentadoria PCD">Revisão: Aposentadoria PCD</option>
                </optgroup>

                {/* GRUPO: DIREITO CÍVEL E FAMÍLIA */}
                <optgroup label="Direito Cível e Família">
                  <option value="Consulta - Direito Cível e Família">Consulta: Direito Cível e Família</option>
                  <option value="Análise - Direito Cível e Família">Análise: Direito Cível e Família</option>
                  <option value="Ação Judicial - Direito Cível e Família">Ação Judicial: Direito Cível e Família</option>
                </optgroup>

                {/* GRUPO: DIREITO À SAÚDE */}
                <optgroup label="Direito à Saúde">
                  <option value="Consulta - Direito à Saúde">Consulta: Direito à Saúde</option>
                  <option value="Análise - Direito à Saúde">Análise: Direito à Saúde</option>
                  <option value="Ação Judicial - Direito à Saúde">Ação Judicial: Direito à Saúde</option>
                </optgroup>

                {/* GRUPO: PLANEJAMENTO */}
                <optgroup label="Planejamento">
                  <option value="Planejamento Previdenciário">Planejamento Previdenciário</option>
                </optgroup>

                {/* OPÇÃO GERAL */}
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Campo Descrição */}
            <div>
              <label htmlFor="mensagem" className="block text-sm font-bold text-primary mb-2">
                Descrição do Caso *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Descreva seu caso em detalhes..."
                required
                minLength={20}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none bg-white text-gray-900"
              />
              <p className="text-xs text-gray-500 mt-1">Quanto mais detalhes você fornecer, melhor poderemos analisar seu caso.</p>
            </div>

            {/* Checkbox Privacidade */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacidade"
                name="privacidade"
                required
                className="mt-1 w-4 h-4 text-secondary focus:ring-secondary cursor-pointer"
              />
              <label htmlFor="privacidade" className="text-sm text-text-light cursor-pointer">
                Aceito a Política de Privacidade e autorizo o processamento de meus dados conforme LGPD *
              </label>
            </div>

            {/* Botão Enviar */}
            <button
              type="submit"
              className="w-full bg-[#B1915E] hover:bg-[#8f744a] text-white font-bold py-4 px-6 rounded-lg transition-all uppercase tracking-wider shadow-lg hover:shadow-xl text-lg"
            >
              Enviar Mensagem
            </button>
          </form>
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
                 <div className="bg-primary/10 p-3 rounded-full text-primary"><MapPin size={24} /></div>
                 <div>
                    <h4 className="font-bold text-primary">Localização</h4>
                    <p className="text-gray-700">Fortaleza, Ceará</p>
                    <p className="text-sm text-gray-500">Atendimento 100% digital - Não é necessário comparecer presencialmente</p>
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

           {/* Mapa Interativo e Aviso */}
           <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Nossa Localização</h2>
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center mb-4 relative overflow-hidden">
                 {/* Placeholder for Google Maps Embed */}
                 <div className="absolute inset-0 bg-gray-300 flex flex-col items-center justify-center text-gray-500">
                    <MapPin size={48} className="mb-2" />
                    <span className="font-bold">Mapa de Fortaleza, Ceará</span>
                 </div>
              </div>
              <p className="text-text-light mb-4">
                Atendimento 100% Digital - Embora estejamos localizados em Fortaleza, atendemos clientes de todo o Brasil através de atendimento 100% digital. Você não precisa vir ao escritório - tudo é feito online.
              </p>
              <a href="https://maps.google.com/?q=Fortaleza,Ceara" target="_blank" rel="noreferrer" className="text-secondary font-bold hover:underline mb-8 block">Abrir no Google Maps</a>

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

        {/* PERGUNTAS RÁPIDAS */}
        <div className="mt-16 max-w-3xl mx-auto">
           <h3 className="text-xl font-heading font-bold text-primary mb-6 text-center">Dúvidas Comuns</h3>
           <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                 <p className="font-bold text-primary">Qual é o melhor horário para entrar em contato?</p>
                 <p className="text-sm text-gray-600">Atendimento comercial: segunda a sexta, 7h às 18h. WhatsApp está disponível 24/7.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                 <p className="font-bold text-primary">Quanto custa a consulta inicial?</p>
                 <p className="text-sm text-gray-600">A consulta inicial é completamente gratuita e sem compromisso.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                 <p className="font-bold text-primary">Preciso ir presencialmente?</p>
                 <p className="text-sm text-gray-600">Não. Todo o atendimento é 100% online. Você não precisa sair de casa.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                 <p className="font-bold text-primary">Como envio documentos?</p>
                 <p className="text-sm text-gray-600">Você pode enviar pelo WhatsApp, email ou plataforma segura que fornecemos.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                 <p className="font-bold text-primary">Quanto tempo leva para responder?</p>
                 <p className="text-sm text-gray-600">Respondemos em até 24 horas úteis. Casos urgentes podem ser atendidos mais rapidamente.</p>
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