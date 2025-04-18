import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubble } from './components/ChatBubble';
import { QuickActions } from './components/QuickActions';
import { MonikaAvatar } from './components/MonikaAvatar';

interface Message {
  id: number;
  text: string;
  isMonika: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! 👋\n\nEstou aqui para te ajudar com o que precisar:\n📌 Saber sobre o clima\n📝 Criar lembretes\n🌦️ Planejar o seu dia\n\nComo posso te ajudar hoje?",
      isMonika: true
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: input,
        isMonika: false
      };
      setMessages([...messages, newMessage]);
      setInput('');
      
      try {
        const response = await fetch('http://localhost:5000/api/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });
        
        const data = await response.json();
        
        setTimeout(() => {
          const monikaResponse: Message = {
            id: messages.length + 2,
            text: data.text,
            isMonika: true
          };
          setMessages(prev => [...prev, monikaResponse]);
        }, 1000);
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        const errorMessage: Message = {
          id: messages.length + 2,
          text: "Desculpe, tive um probleminha... 😅\nTenta de novo, por favor?",
          isMonika: true
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-monika-light to-white">
      {/* Sidebar com avatar */}
      <div className="w-24 bg-monika-pink flex flex-col items-center justify-end p-4">
        <MonikaAvatar />
      </div>

      {/* Área principal */}
      <div className="flex-1 flex flex-col">
        {/* Cabeçalho */}
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-2xl font-quicksand text-monika-dark">
            MONIKA - ASSISTENTE VIRTUAL
          </h1>
        </header>

        {/* Área de chat */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ChatBubble
                  text={message.text}
                  isMonika={message.isMonika}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Ações rápidas */}
        <QuickActions onAction={(action: string) => {
          if (action === 'clima') {
            setInput('Como está o clima em ');
          } else if (action === 'lembrete') {
            setInput('Me lembra de ');
          } else if (action === 'noticias') {
            setInput('Quais são as notícias de hoje?');
          } else if (action === 'calculadora') {
            setInput('Calcule ');
          } else if (action === 'aprendizado') {
            setInput('Aprenda que ');
          }
        }} />

        {/* Área de entrada */}
        <div className="p-4 bg-white border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 p-2 rounded-full border border-gray-200 focus:outline-none focus:border-monika-pink"
              placeholder="Digite uma mensagem..."
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSend}
              className="bg-monika-pink text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
            >
              💖
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
