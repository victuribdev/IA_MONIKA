import React from 'react';
import { motion } from 'framer-motion';

interface ChatBubbleProps {
  text: string;
  isMonika: boolean;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ text, isMonika }) => {
  return (
    <div className={`flex ${isMonika ? 'justify-start' : 'justify-end'}`}>
      <motion.div
        className={`max-w-[80%] rounded-2xl p-4 ${
          isMonika
            ? 'bg-monika-light text-monika-dark'
            : 'bg-monika-pink text-white'
        }`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <div className="whitespace-pre-wrap font-quicksand text-sm">
          {text}
        </div>
      </motion.div>
    </div>
  );
}; 