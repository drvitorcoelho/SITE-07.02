import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5585981186205"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-green-500 text-white py-3 px-5 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2 animate-bounce-slow"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={24} className="fill-current" />
      <span className="font-bold text-sm">Falar no WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;