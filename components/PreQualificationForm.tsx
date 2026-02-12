import React, { useState } from 'react';
import { Briefcase, Clock, FileSearch, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';

const PreQualificationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    urgency: '',
    status: '',
    financial: '',
    name: '',
    email: '',
    phone: '',
    contactPref: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedPref = checked 
        ? [...formData.contactPref, value]
        : formData.contactPref.filter(p => p !== value);
      setFormData({ ...formData, contactPref: updatedPref });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Logic to send data would go here
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 text-center animate-fade-in max-w-2xl mx-auto my-12">
        <div className="flex justify-center mb-6 text-green-500">
          <CheckCircle size={64} />
        </div>
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Obrigado!</h2>
        <p className="text-lg text-text-light mb-6">
          Sua pré-qualificação foi recebida com sucesso. Entraremos em contato em até 24 horas com uma análise inicial e as próximas etapas.
        </p>
        <p className="text-sm text-gray-500">
          Se tiver dúvidas antes disso, entre em contato pelo WhatsApp: (85) 9 8118-6205
        </p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-background-light">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-primary mb-2">Pré-Qualificação Gratuita</h2>
          <p className="text-text-light">Responda 5 perguntas rápidas para que possamos entender melhor seu caso e oferecer a melhor orientação.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-secondary">
          
          {/* Question 1: Service Type */}
          <div className="mb-8">
            <label className="block text-primary font-bold mb-3 flex items-center gap-2">
              <Briefcase size={20} className="text-secondary" /> 1. Qual é sua principal necessidade jurídica?
            </label>
            <select 
              name="serviceType" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50"
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma opção...</option>
              <option value="Aposentadoria (INSS)">Aposentadoria (INSS)</option>
              <option value="Benefício por Incapacidade">Benefício por Incapacidade</option>
              <option value="BPC/LOAS">BPC/LOAS (Idoso ou PCD)</option>
              <option value="Salário Maternidade">Salário Maternidade</option>
              <option value="Aposentadoria PCD">Aposentadoria PCD</option>
              <option value="Revisão de Benefício">Revisão de Benefício</option>
              <option value="Direito Cível e Família">Direito Cível e Família</option>
              <option value="Direito à Saúde">Direito à Saúde</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Question 2: Urgency */}
          <div className="mb-8">
            <label className="block text-primary font-bold mb-3 flex items-center gap-2">
              <Clock size={20} className="text-secondary" /> 2. Qual é o nível de urgência do seu caso?
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="urgency" value="Urgente" onChange={handleChange} className="text-secondary focus:ring-secondary" required />
                <span>⚡ Urgente (Preciso resolver em dias)</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="urgency" value="Moderado" onChange={handleChange} className="text-secondary focus:ring-secondary" />
                <span>🔔 Moderado (Preciso resolver em semanas)</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="urgency" value="Não urgente" onChange={handleChange} className="text-secondary focus:ring-secondary" />
                <span>📅 Não urgente (Posso esperar alguns meses)</span>
              </label>
            </div>
          </div>

          {/* Question 3: Status */}
          <div className="mb-8">
            <label className="block text-primary font-bold mb-3 flex items-center gap-2">
              <FileSearch size={20} className="text-secondary" /> 3. Qual é sua situação atual?
            </label>
            <select 
              name="status" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50"
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="Nunca procurei ajuda">Nunca procurei ajuda jurídica</option>
              <option value="Procurei sem resultado">Procurei ajuda, mas sem resultado</option>
              <option value="Resultado parcial">Procurei ajuda com resultado parcial</option>
              <option value="Processo em andamento">Tenho processo em andamento</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Question 4: Financial */}
          <div className="mb-8">
            <label className="block text-primary font-bold mb-3 flex items-center gap-2">
              <DollarSign size={20} className="text-secondary" /> 4. Qual é sua situação financeira?
            </label>
            <select 
              name="financial" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50"
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="Sem renda">Sem renda</option>
              <option value="Até 1 SM">Renda até 1 salário mínimo</option>
              <option value="1 a 3 SM">Renda de 1 a 3 salários mínimos</option>
              <option value="Acima de 3 SM">Renda acima de 3 salários mínimos</option>
              <option value="Não informar">Prefiro não informar</option>
            </select>
          </div>

          {/* Question 5: Contact Info */}
          <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <label className="block text-primary font-bold mb-4 text-lg border-b pb-2">5. Seus Dados de Contato</label>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Seu nome completo" 
                className="w-full p-3 border border-gray-300 rounded focus:border-secondary focus:outline-none"
                required
                minLength={3}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="seu.email@exemplo.com" 
                className="w-full p-3 border border-gray-300 rounded focus:border-secondary focus:outline-none"
                required
                onChange={handleChange}
              />
            </div>
            <input 
              type="tel" 
              name="phone" 
              placeholder="(85) 9 9999-9999" 
              className="w-full p-3 border border-gray-300 rounded focus:border-secondary focus:outline-none mb-4"
              required
              onChange={handleChange}
            />
            
            <div className="mt-4">
              <p className="text-sm font-bold text-gray-700 mb-2">Como prefere ser contatado?</p>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="contactPref" value="WhatsApp" onChange={handleChange} /> WhatsApp
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="contactPref" value="Email" onChange={handleChange} /> Email
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="contactPref" value="Telefone" onChange={handleChange} /> Telefone
                </label>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#B1915E] hover:bg-[#8f744a] text-white font-bold py-4 rounded-lg shadow-md transition-transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
          >
            ENVIAR PRÉ-QUALIFICAÇÃO <ArrowRight />
          </button>

        </form>
      </div>
    </section>
  );
};

export default PreQualificationForm;