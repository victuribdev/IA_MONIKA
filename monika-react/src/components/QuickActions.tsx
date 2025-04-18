import React from 'react';

interface QuickActionsProps {
  onAction: (action: string) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onAction }) => {
  return (
    <div className="p-4 bg-white border-t">
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => onAction('clima')}
          className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
        >
          🌦️ Clima
        </button>
        <button
          onClick={() => onAction('lembrete')}
          className="px-4 py-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
        >
          📝 Lembrete
        </button>
        <button
          onClick={() => onAction('noticias')}
          className="px-4 py-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
        >
          📰 Notícias
        </button>
        <button
          onClick={() => onAction('calculadora')}
          className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
        >
          🧮 Calculadora
        </button>
        <button
          onClick={() => onAction('aprendizado')}
          className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
        >
          🧠 Aprender
        </button>
      </div>
    </div>
  );
}; 