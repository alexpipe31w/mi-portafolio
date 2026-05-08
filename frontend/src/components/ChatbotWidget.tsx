'use client';

import { useState, useRef, useEffect } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export default function ChatbotWidget({ isOpen, setIsOpen }: Props) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const messagesEndRef           = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://mi-portafolio-backend-nxii.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput, history: messages }),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', content: data.response || 'Error al generar respuesta' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'bot', content: 'Lo siento, hubo un error de conexión. Por favor intenta de nuevo.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50
            w-14 h-14 rounded-full shadow-lg
            bg-gradient-to-br from-blue-600 to-purple-600
            hover:from-blue-500 hover:to-purple-500
            transition-all duration-200 hover:scale-110
            flex items-center justify-center
            animate-glow"
          aria-label="Abrir chat con IA"
          title="Chatear con RobotAlex IA"
        >
          {/* Bot icon */}
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
            <rect x="7" y="6" width="10" height="9" rx="2" stroke="white" strokeWidth="1.4" fill="none"/>
            <line x1="12" y1="4" x2="12" y2="6" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
            <circle cx="12" cy="3.5" r="1" fill="#06b6d4"/>
            <circle cx="9.5" cy="9.5" r="1" fill="white"/>
            <circle cx="14.5" cy="9.5" r="1" fill="white"/>
            <path d="M9.5 12.5h5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
            <rect x="5" y="15" width="14" height="6" rx="2" stroke="white" strokeWidth="1.4" fill="none"/>
            <circle cx="9"  cy="18" r="1" fill="#06b6d4"/>
            <circle cx="12" cy="18" r="1" fill="#22c55e"/>
            <circle cx="15" cy="18" r="1" fill="#a855f7"/>
            <path d="M5 17.5H3M21 17.5H19" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50
          w-[22rem] sm:w-96 h-[560px]
          flex flex-col rounded-2xl shadow-2xl overflow-hidden
          border border-gray-700/60"
          style={{ backdropFilter: 'blur(16px)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3
            bg-gradient-to-r from-blue-900/95 to-purple-900/95
            border-b border-blue-500/30">
            <div className="flex items-center gap-3">
              {/* Mini robot avatar */}
              <div className="w-9 h-9 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <rect x="7" y="6" width="10" height="9" rx="2" stroke="#06b6d4" strokeWidth="1.3" fill="none"/>
                  <line x1="12" y1="4" x2="12" y2="6" stroke="#06b6d4" strokeWidth="1.3" strokeLinecap="round"/>
                  <circle cx="12" cy="3.5" r="1" fill="#06b6d4"/>
                  <circle cx="9.5" cy="9.5" r="1" fill="#06b6d4"/>
                  <circle cx="14.5" cy="9.5" r="1" fill="#06b6d4"/>
                  <rect x="5" y="15" width="14" height="6" rx="2" stroke="#06b6d4" strokeWidth="1.3" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">RobotAlex IA</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-xs text-green-300">En línea</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Cerrar chat"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-950/90">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-4">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center animate-float">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                    <rect x="7" y="6" width="10" height="9" rx="2" stroke="#3b82f6" strokeWidth="1.3" fill="none"/>
                    <line x1="12" y1="4" x2="12" y2="6" stroke="#06b6d4" strokeWidth="1.3" strokeLinecap="round"/>
                    <circle cx="12" cy="3.5" r="1" fill="#06b6d4"/>
                    <circle cx="9.5" cy="9.5" r="1" fill="#06b6d4"/>
                    <circle cx="14.5" cy="9.5" r="1" fill="#06b6d4"/>
                    <rect x="5" y="15" width="14" height="6" rx="2" stroke="#3b82f6" strokeWidth="1.3" fill="none"/>
                    <circle cx="9"  cy="18" r="1" fill="#06b6d4"/>
                    <circle cx="12" cy="18" r="1" fill="#22c55e"/>
                    <circle cx="15" cy="18" r="1" fill="#a855f7"/>
                  </svg>
                </div>
                <p className="text-white font-semibold text-sm">¡Hola! Soy RobotAlex</p>
                <p className="text-gray-400 text-xs">Pregúntame sobre Alex, sus proyectos, habilidades o cómo contactarlo.</p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm shadow-md ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-br-sm'
                      : 'bg-gray-800/90 border border-gray-700/50 text-gray-100 rounded-bl-sm'
                  }`}
                  style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800/90 border border-gray-700/50 px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-sm shadow-md">
                  <span className="flex items-center gap-1 text-gray-300">
                    Pensando
                    <span className="flex gap-0.5 ml-1">
                      {[0,1,2].map(i => (
                        <span key={i} className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: `${i * .15}s` }} />
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 bg-gray-900/95 border-t border-gray-700/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !loading && sendMessage()}
                placeholder="Escribe tu mensaje..."
                disabled={loading}
                className="flex-1 px-3.5 py-2.5 rounded-xl text-sm
                  bg-gray-800/80 border border-gray-700/50
                  text-white placeholder-gray-500
                  focus:outline-none focus:ring-1 focus:ring-blue-500/60
                  disabled:opacity-50 transition"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold
                  bg-gradient-to-r from-blue-600 to-purple-600
                  hover:from-blue-500 hover:to-purple-500
                  text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
