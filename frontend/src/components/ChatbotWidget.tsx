'use client';

import { useState } from 'react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      // 🔒 Llamada a tu backend en localhost:5000
      const response = await fetch('https://mi-portafolio-backend-nxii.onrender.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          history: messages
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = { 
        role: 'bot', 
        content: data.response || 'Error al generar respuesta' 
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { 
          role: 'bot', 
          content: 'Lo siento, hubo un error de conexión. Por favor intenta de nuevo.' 
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 z-50"
          aria-label="Abrir chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[550px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="bg-gray-900 dark:bg-gray-950 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Asistente Alex</h3>
                <p className="text-xs text-gray-300">En línea 🟢</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-3xl hover:text-gray-300 transition-colors">×</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.length === 0 && (
              <div className="text-gray-700 dark:text-gray-300 text-center text-sm mt-10 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl mb-2">👋</div>
                <p className="font-semibold">¡Hola! Soy el asistente de Alex</p>
                <p className="text-xs mt-2">¿En qué puedo ayudarte?</p>
              </div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm shadow-md ${
                  msg.role === 'user'
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-br-sm'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-sm border border-gray-200 dark:border-gray-700'
                }`} style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm shadow-md border border-gray-200 dark:border-gray-700">
                  <span className="flex items-center gap-1">Escribiendo<span className="animate-pulse">...</span></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !loading && sendMessage()}
                placeholder="Escribe tu mensaje..."
                disabled={loading}
                className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 disabled:opacity-50"
              />
              <button 
                onClick={sendMessage} 
                disabled={loading || !input.trim()} 
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
