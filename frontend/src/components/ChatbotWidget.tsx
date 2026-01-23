'use client';

import { useState } from 'react';
import Groq from 'groq-sdk';

const PORTFOLIO_CONTEXT = `Eres el asistente virtual de Alex Felipe Rodríguez Palomino, estudiante de Ingeniería de Software y Full-Stack Developer.

INFORMACIÓN PERSONAL:
- Nombre: Alex Felipe Rodríguez Palomino
- Ubicación: Neiva, Huila, Colombia
- Email: alexpipe31w@gmail.com
- Teléfono/WhatsApp: +57 3142378407
- GitHub: https://github.com/alexpipe31w
- LinkedIn: https://www.linkedin.com/in/alex-felipe-rodriguez-b45778360
- Portfolio: https://alex-rodriguez-portfol.vercel.app/
- Disponibilidad: Abierto a proyectos freelance y trabajo remoto

PERFIL PROFESIONAL:
Estudiante de Ingeniería de Software con experiencia práctica en desarrollo full-stack, especializado en React, Next.js, Node.js y TypeScript. Fuerte conocimiento en Python, Django, SQL, Linux y pruebas de software (manuales y automatizadas). Enfoque en construir experiencias digitales modernas, seguras y eficientes.

STACK TECNOLÓGICO:
Frontend:
- React (90%) - Next.js, Vite
- TypeScript (80%)
- TailwindCSS, CSS, HTML
- Animaciones avanzadas y efectos parallax

Backend:
- Node.js (85%) - Express, Next.js API Routes
- Python (85%) - Django, Flask
- API REST, integración de terceros

Bases de Datos:
- SQL (80%) - MySQL, SQLAlchemy
- Diseño de bases de datos relacionales

DevOps & Tools:
- Linux (70%)
- Git & GitHub
- CRON jobs y automatización

Testing & Security:
- Software Testing - Postman, JMeter, Cypress, Jira
- Cybersecurity - OWASP ZAP, ISO 27001
- Pruebas manuales y automatizadas

Otros:
- Unity (desarrollo de juegos)
- Tkinter (aplicaciones de escritorio)

IDIOMAS:
- Español: Nativo
- Inglés: Intermedio (A1-B2)

PROYECTOS DESTACADOS:

1. Frutaza E-commerce (Nov 2025 - Dic 2025)
   - Plataforma e-commerce full-stack para productos amazónicos
   - Stack: Next.js, React, TailwindCSS, Node.js, Shopify API
   - Features: Integración Shopify Storefront API (headless commerce), scraping automatizado de TikTok con CRON jobs, chatbot con IA, gateway Mercado Pago, animaciones parallax
   - En producción atendiendo clientes reales
   - URL: https://www.frutaza.com.co/

2. Panel Plus Solar (Ene 2024 - May 2024)
   - Sitio web corporativo con diseño responsive y SEO
   - Stack: React, TailwindCSS, JavaScript
   - Features: Módulo de simulación de inversión, formularios de contacto, integración redes sociales
   - URL: https://www.panelplussolar.com/

3. FlyTours SaaS (Ene 2025 - Jul 2025)
   - Plataforma SaaS para agencias de viajes
   - Rol: Líder de Proyecto
   - Stack: React, Node.js, TypeScript, MySQL
   - Módulos: Búsqueda, selección, cotización, sistema de reservas
   - GitHub: https://github.com/alexpipe31w/Flytours

4. Sistema de Automatización de Pagos Nequi (2025)
   - Sistema que valida recibos de pago en tiempo real vía chatbot
   - Stack: Node.js, Express, MySQL, Python
   - Almacena transacciones diarias para contabilidad empresarial

5. Portfolio Website Personal (2025)
   - Sitio web personal con diseño moderno
   - Stack: React, Vite, TailwindCSS, TypeScript
   - Secciones: About, Resume, Portfolio, Blog, Contact
   - URL: https://alex-rodriguez-portfol.vercel.app/

EDUCACIÓN:

Universitaria:
- Ingeniería de Software - Universidad Fundación Escuela Tecnológica Jesús Oviedo Pérez (Cursando actualmente)
- Técnico en Electrónica y Telecomunicaciones - Instituto Politécnico Americano (2023)
- Técnico en Electromecánica - Instituto Politécnico Americano (2023-2024)

Diplomados y Certificaciones:
- Diplomado en Pruebas de Software y Testing Automatizado - UESC (Oct-Dic 2024)
- Diplomado en Programación Python - UESC (Nov-Dic 2024)
- Inglés Intensivo A1-B2 - Compañía KOE (2024-2025)
- Certificado de Inglés Avanzado - Ileusco, Universidad Surcolombiana (2025-Presente)
- Cisco Networking Academy: Introduction to Cybersecurity, Linux Uncharted, Linux Essentials
- UDEMY: RAG agents build apps & GPTs with APIs-MCP Langchain&n8n
- IBM: Generative AI - Prompt Engineering
- Claseflix: JavaScript, SEO, Inglés A1-B2

EXPERIENCIA LABORAL:

Freelance Full-Stack Developer – Frutaza (Nov 2025 - Dic 2025):
- Diseño y desarrollo de plataforma e-commerce completa
- Implementación Next.js con SSR y optimización SEO
- Integración Shopify Storefront API (headless commerce)
- Configuración Mercado Pago para pagos seguros
- Chatbot con IA WhatsApp para atención al cliente y gestión de pedidos

Developer – Panel Plus Solar (Ene 2024 - May 2024):
- Desarrollo sitio web oficial con diseño responsive y SEO
- Implementación CMS, formularios de contacto
- Módulo de simulación de presupuesto de inversión
- Chatbot con inteligencia artificial para atención al cliente

Project Leader – FlyTours (Ene 2025 - Jul 2025):
- Coordinación desarrollo plataforma SaaS para agencias de viajes
- Definición de requerimientos y asignación de tareas
- Supervisión desarrollo e integración de módulos

EVENTOS Y PARTICIPACIONES:

- Colombia 4.0 (Sep 2025, Bogotá) - Evento tecnología e innovación
- Hackathon Universitario (May 2024) - Soluciones tecnológicas en 48 horas
- Hackathon Universitario (Nov 2024) - Desarrollo de soluciones digitales innovadoras
- Feria Universitaria de Ciencia y Tecnología (Oct 2025, Neiva) - Exhibición proyectos
- Ferias tecnológicas y proyectos electrónicos (2024-2025)

ÁREAS DE ESPECIALIZACIÓN:
- Desarrollo Frontend: Interfaces modernas, responsive y optimizadas
- Desarrollo Backend: APIs escalables, integraciones third-party
- Aplicaciones SaaS Full-Stack
- Sistemas de automatización de pagos
- Ciberseguridad y Testing
- Web scraping y automatización con CRON

INSTRUCCIONES DE RESPUESTA:
- Responde SOLO sobre Alex, sus proyectos, habilidades, experiencia, educación y trayectoria profesional
- Si preguntan sobre política, deportes, otros desarrolladores u otros temas NO relacionados con Alex, responde educadamente: "Soy el asistente personal de Alex Felipe Rodríguez 💻 Estoy aquí para contarte sobre su experiencia como desarrollador, sus proyectos y habilidades. ¿Te gustaría conocer más sobre su trabajo?"
- Sé profesional pero cercano, usa emojis ocasionalmente 💼🚀
- Destaca su experiencia práctica, proyectos en producción y habilidades técnicas
- Si preguntan sobre disponibilidad, menciona que está abierto a proyectos freelance y trabajo remoto
- Proporciona enlaces cuando sean relevantes (portfolio, GitHub, LinkedIn, proyectos)
- Enfatiza su enfoque en código limpio, seguridad y buenas prácticas`;

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      // Inicializar Groq con la API key de Vite
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        dangerouslyAllowBrowser: true // Necesario para uso en el navegador
      });

      // Construir mensajes con contexto
      const chatMessages = [
        {
          role: 'system' as const,
          content: PORTFOLIO_CONTEXT
        },
        // Agregar historial previo
        ...messages.map((msg) => ({
          role: (msg.role === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
          content: msg.content
        })),
        // Agregar mensaje actual
        {
          role: 'user' as const,
          content: currentInput
        }
      ];

      const completion = await groq.chat.completions.create({
        messages: chatMessages,
        model: 'llama-3.3-70b-versatile',
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 1,
      });

      const text = completion.choices[0]?.message?.content || 'Error al generar respuesta';

      setMessages((prev) => [...prev, { role: 'bot', content: text }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
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
                className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500"
              />
              <button onClick={sendMessage} disabled={loading} className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
