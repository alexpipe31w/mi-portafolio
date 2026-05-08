// frontend/src/pages/Resume.tsx
import Icons from "../components/Icons";

function Resume() {
  return (
    <section className="p-6 md:p-10 border border-gray-700/50 rounded-xl bg-gray-800/40 text-white">

      {/* Header */}
      <h1 className="animate-fade-in-up text-2xl md:text-3xl font-bold mb-6 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
        <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" fill="url(#profileGrad)" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
            fill="url(#profileGrad)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="profileGrad" x1="6" y1="4" x2="18" y2="21">
              <stop stopColor="#3b82f6"/><stop offset="1" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
        <span className="gradient-text">Resume</span>
      </h1>

      {/* Education */}
      <div className="animate-fade-in-up delay-100 mb-10 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-2 justify-center md:justify-start">
          <Icons.GraduationCap className="w-6 h-6" /> Education
        </h2>
        <div className="relative border-l-2 border-blue-800/60 pl-5 md:pl-7 space-y-7 text-sm md:text-base">

          <div className="animate-fade-in-left delay-150">
            <div className="absolute -left-3 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 timeline-dot-blue"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Software Engineering</h3>
            <p className="text-gray-400">Universidad Fundación Escuela Tecnológica Jesús Oviedo Pérez (Currently studying)</p>
          </div>

          <div className="animate-fade-in-left delay-200">
            <div className="absolute -left-3 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 timeline-dot-blue"></div>
            <h3 className="font-bold text-base md:text-lg text-white">
              Técnico Profesional en Soporte de Sistemas Informáticos y Redes
            </h3>
            <p className="text-gray-400">Instituto Politécnico Americano (2023 – 2024)</p>
          </div>

          <div className="animate-fade-in-left delay-250">
            <div className="absolute -left-3 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 timeline-dot-blue"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Technical Diploma in Electronics and Telecommunications</h3>
            <p className="text-gray-400">Instituto Politécnico Americano (Jan 2023 – Dec 2023)</p>
          </div>

          <div className="animate-fade-in-left delay-300">
            <div className="absolute -left-3 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 timeline-dot-blue"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Technical Diploma in Electromechanics</h3>
            <p className="text-gray-400">Instituto Politécnico Americano (Jan 2023 – Mar 2024)</p>
          </div>

          <div className="animate-fade-in-left delay-350">
            <div className="absolute -left-3 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 timeline-dot-blue"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Diploma in Software Testing & Automated Testing</h3>
            <p className="text-gray-400">Universidad Fundación Escuela Tecnológica Jesús Oviedo Pérez (Oct 2024 – Dec 2024)</p>
          </div>

          <div className="animate-fade-in-left delay-400">
            <div className="absolute -left-3 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 timeline-dot-blue"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Diploma in Python Programming</h3>
            <p className="text-gray-400">Universidad Fundación Escuela Tecnológica Jesús Oviedo Pérez (Nov 2024 – Dec 2024)</p>
          </div>

          <div className="animate-fade-in-left delay-500">
            <div className="absolute -left-3 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 timeline-dot-blue"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Intensive English (A1 – B2)</h3>
            <p className="text-gray-400">Compañía KOE (Jan 2024 – May 2025)</p>
          </div>

          <div className="animate-fade-in-left delay-600">
            <div className="absolute -left-3 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 timeline-dot-blue"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Advanced English Certificate</h3>
            <p className="text-gray-400">Ileusco Instituto de Lenguas Extranjeras, Universidad Surcolombiana (Jan 2025 – Present)</p>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="animate-fade-in-up delay-200 mb-10 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-2 justify-center md:justify-start">
          <Icons.BookOpen className="w-6 h-6" /> Courses & Certifications
        </h2>
        <div className="relative border-l-2 border-yellow-800/60 pl-5 md:pl-7 space-y-7 text-sm md:text-base">

          <div className="animate-fade-in-left delay-250">
            <div className="absolute -left-3 w-5 h-5 bg-yellow-500 rounded-full border-2 border-gray-900 timeline-dot-yellow"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Cisco Networking Academy</h3>
            <p className="text-gray-300">Introduction to Cybersecurity · Linux Uncharted · Linux Essentials</p>
          </div>

          <div className="animate-fade-in-left delay-300">
            <div className="absolute -left-3 w-5 h-5 bg-yellow-500 rounded-full border-2 border-gray-900 timeline-dot-yellow"></div>
            <h3 className="font-bold text-base md:text-lg text-white">UDEMY</h3>
            <p className="text-gray-300">RAG Agents — Build Apps & GPTs with APIs, MCP, LangChain & n8n</p>
          </div>

          <div className="animate-fade-in-left delay-350">
            <div className="absolute -left-3 w-5 h-5 bg-yellow-500 rounded-full border-2 border-gray-900 timeline-dot-yellow"></div>
            <h3 className="font-bold text-base md:text-lg text-white">IBM</h3>
            <p className="text-gray-300">Generative AI: Prompt Engineering Basics</p>
          </div>

          <div className="animate-fade-in-left delay-400">
            <div className="absolute -left-3 w-5 h-5 bg-yellow-500 rounded-full border-2 border-gray-900 timeline-dot-yellow"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Claseflix</h3>
            <p className="text-gray-300">JavaScript · SEO · Inglés A1–B2</p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="animate-fade-in-up delay-300">
        <h2 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-2 justify-center md:justify-start">
          <Icons.Briefcase className="w-6 h-6" /> Experience
        </h2>
        <div className="relative border-l-2 border-green-800/60 pl-5 md:pl-7 space-y-7 text-sm md:text-base">

          <div className="animate-fade-in-left delay-350">
            <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 timeline-dot-green"></div>
            <h3 className="font-bold text-base md:text-lg text-white">
              Independent Developer — StockUp SaaS Platform
            </h3>
            <p className="text-gray-400">Personal Project (Feb 2026 – Present)</p>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Designed and developed StockUp, a multitenant SaaS e-commerce platform for SMBs.
              Built with Next.js, Prisma, PostgreSQL and Groq AI. Features include AI-powered analytics and
              email marketing, automated reports, inventory management, subscription-based billing,
              Mercado Pago integration, multi-carrier shipping via Envia.com, 2FA authentication, and Redis caching.
            </p>
          </div>

          <div className="animate-fade-in-left delay-400">
            <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 timeline-dot-green"></div>
            <h3 className="font-bold text-base md:text-lg text-white">
              Independent Developer — StockUp Mensajes (WhatsApp CRM)
            </h3>
            <p className="text-gray-400">Personal Project (Mar 2026 – Present)</p>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Built a WhatsApp-connected CRM platform using NestJS, React, Prisma and Baileys.
              Enables businesses to receive customers via WhatsApp, take orders, schedule appointments, and manage
              conversations with AI-powered auto-responses (Groq). Real-time events via Socket.io, multi-tenant
              isolation, and full CRM dashboard. Deployed on Railway (backend) and Vercel (frontend).
            </p>
          </div>

          <div className="animate-fade-in-left delay-450">
            <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 timeline-dot-green"></div>
            <h3 className="font-bold text-base md:text-lg text-white">
              Freelance Developer — Coffee Masfred
            </h3>
            <p className="text-gray-400">Freelance (2025)</p>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Designed and developed the brand website and e-commerce for Coffee Masfred, a specialty coffee brand.
              Built with Next.js and TailwindCSS. Modern design, product catalog, and conversion-optimized layout.
            </p>
          </div>

          <div className="animate-fade-in-left delay-500">
            <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 timeline-dot-green"></div>
            <h3 className="font-bold text-base md:text-lg text-white">
              Freelance Full-Stack Developer — Frutaza E-commerce
            </h3>
            <p className="text-gray-400">Neiva, Huila, Colombia (Nov 2025 – Dec 2025)</p>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Designed and built a complete e-commerce platform for Amazonian fruit products.
              Next.js SSR, Shopify Storefront API (headless commerce), Mercado Pago payment gateway,
              automated TikTok content scraping with CRON jobs, WhatsApp chatbot integration, and parallax animations.
            </p>
          </div>

          <div className="animate-fade-in-left delay-600">
            <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 timeline-dot-green"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Developer — Panel Plus Solar</h3>
            <p className="text-gray-400">Neiva, Colombia (Jan 2024 – May 2024)</p>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Designed and developed the company's official website. Responsive design, SEO optimization, CMS,
              contact forms, social media integration, and investment simulation module.
            </p>
          </div>

          <div className="animate-fade-in-left delay-700">
            <div className="absolute -left-3 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 timeline-dot-green"></div>
            <h3 className="font-bold text-base md:text-lg text-white">Project Leader — FlyTours SaaS</h3>
            <p className="text-gray-400">Neiva, Colombia (Jan 2025 – Jul 2025)</p>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Led the development of a SaaS platform for travel companies. Defined requirements, assigned tasks,
              supervised development, and integrated modules for destination search, package selection, and quotation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
