import React, { useState } from 'react';
import { Send,  Monitor, Globe, MessageCircle, FileText, CheckCircle } from 'lucide-react';

const Trabalhe: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a mensagem para o WhatsApp
    const text = `*CANDIDATURA VIA SITE*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Mensagem:* ${formData.mensagem}%0A%0A` +
      `_Olá, preenchi meus dados no site e gostaria de enviar meu currículo (PDF) por aqui._`;

    // Redireciona para o WhatsApp Oficial
    const whatsappUrl = `https://wa.me/5585981186205?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-background-light min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 text-center">
         <h1 className="text-4xl font-heading font-bold">Trabalhe Conosco</h1>
         <p className="text-gray-300 mt-2 text-lg">Junte-se à nossa equipe de especialistas</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Quer fazer parte do time?</h2>
            <p className="text-text-light mb-8">Preencha seus dados iniciais abaixo. Para garantir que seu currículo seja analisado com agilidade, o envio do arquivo será feito diretamente pelo nosso WhatsApp Oficial.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-text-main mb-1">Nome Completo</label>
                <input 
                  required 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-background-light" 
                  placeholder="Seu nome completo" 
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-text-main mb-1">Telefone / WhatsApp</label>
                <input 
                  required 
                  type="tel" 
                  id="telefone" 
                  name="telefone" 
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-background-light" 
                  placeholder="(00) 00000-0000" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1">E-mail</label>
                <input 
                  required 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-background-light" 
                  placeholder="seu@email.com" 
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-text-main mb-1">Mensagem / Área de Interesse</label>
                <textarea 
                  required 
                  id="mensagem" 
                  name="mensagem" 
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-background-light" 
                  placeholder="Conte brevemente sobre sua experiência ou área de interesse (Ex: Previdenciário, Administrativo...)"
                ></textarea>
              </div>

              {/* Instructional Box for PDF */}
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start gap-3">
                <FileText className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div className="text-sm text-blue-800">
                  <p className="font-bold mb-1">Sobre o envio do Currículo (PDF):</p>
                  <p>
                    Ao clicar em "Enviar", você será direcionado para o nosso WhatsApp. 
                    <strong> Por favor, anexe o arquivo do seu currículo diretamente na conversa</strong> para que nosso RH possa baixar e analisar.
                  </p>
                </div>
              </div>

              <button type="submit" className="w-full bg-whatsapp hover:bg-green-600 text-white font-bold py-4 rounded-md shadow-md transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2 text-lg">
                Enviar e Anexar Currículo <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col gap-6">
            {/* Office Info */}
            <div className="flex flex-col items-center justify-center bg-primary p-8 rounded-lg border border-primary-dark text-center flex-grow text-white">
              <div className="bg-white/10 p-8 rounded-full shadow-lg mb-8 ring-4 ring-secondary/50 backdrop-blur-sm">
                  <Monitor size={64} className="text-white" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-6">Escritório 100% Digital</h3>
              <p className="text-xl text-gray-200 leading-relaxed max-w-md font-light">
                Atuamos de forma remota, atendendo clientes em todo o Brasil. Buscamos profissionais proativos, organizados e com facilidade em tecnologia.
              </p>
              <div className="mt-12 flex items-center gap-3 text-white bg-white/10 px-4 py-2 rounded-full shadow-sm border border-white/20">
                  <Globe size={20} />
                  <span className="text-sm font-medium uppercase tracking-wide">Atendimento Nacional</span>
              </div>
            </div>

            {/* Benefits / Culture */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
               <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                 <CheckCircle size={20} className="text-secondary" /> Por que trabalhar conosco?
               </h4>
               <ul className="space-y-3 text-sm text-text-light">
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
                   Ambiente colaborativo e focado em resultados.
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
                   Oportunidade de aprendizado constante em Direito Previdenciário.
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
                   Flexibilidade do trabalho remoto.
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabalhe;