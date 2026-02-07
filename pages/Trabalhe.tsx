import React from 'react';
import { Send, Upload, Monitor, Globe } from 'lucide-react';

const Trabalhe: React.FC = () => {
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
            <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Quer trabalhar conosco ou propor uma parceria?</h2>
            <p className="text-text-light mb-8">Preencha o formulário abaixo que um dos nossos especialistas entrará em contato.</p>

            <form action="mailto:escritorio@vitorcoelho.adv.br" method="POST" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-main mb-1">Nome Completo</label>
                <input required type="text" id="name" name="nome" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-background-light" placeholder="Seu nome" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-1">Telefone</label>
                <input required type="tel" id="phone" name="telefone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-background-light" placeholder="(00) 00000-0000" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1">E-mail</label>
                <input required type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-background-light" placeholder="seu@email.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-main mb-1">Mensagem</label>
                <textarea required id="message" name="mensagem" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-background-light" placeholder="Conte-nos sobre você..."></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main mb-1">Anexar Currículo</label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-md p-8 text-center hover:bg-background-light transition cursor-pointer group">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" name="curriculo" />
                    <Upload className="mx-auto text-gray-400 mb-2 group-hover:text-secondary transition-colors" />
                    <p className="text-sm text-gray-500 group-hover:text-text-main">Clique ou arraste seu arquivo aqui</p>
                </div>
              </div>

              <button type="submit" className="w-full bg-whatsapp hover:bg-green-600 text-white font-bold py-4 rounded-md shadow-md transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2 text-lg">
                Enviar <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col items-center justify-center bg-primary p-8 rounded-lg border border-primary-dark text-center h-full min-h-[400px] text-white">
            <div className="bg-white/10 p-8 rounded-full shadow-lg mb-8 ring-4 ring-secondary/50 backdrop-blur-sm">
                <Monitor size={64} className="text-white" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Escritório 100% Digital</h3>
            <p className="text-xl text-gray-200 leading-relaxed max-w-md font-light">
              Atualmente o escritório trabalha apenas de forma remota, atendendo clientes em todo o Brasil com agilidade e eficiência digital.
            </p>
            <div className="mt-12 flex items-center gap-3 text-white bg-white/10 px-4 py-2 rounded-full shadow-sm border border-white/20">
                <Globe size={20} />
                <span className="text-sm font-medium uppercase tracking-wide">Atendimento Nacional</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabalhe;