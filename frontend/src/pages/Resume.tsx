// frontend/src/components/Resume.tsx
function Resume() {
  return (
    <section className="p-6 md:p-10 border border-gray-700 rounded-lg bg-gray-700 text-white">
<h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
  <svg
    className="w-7 h-7 md:w-8 md:h-8"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      cx="12"
      cy="8"
      r="4"
      fill="url(#profileGradient)"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
      fill="url(#profileGradient)"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="profileGradient" x1="6" y1="4" x2="18" y2="21">
        <stop stopColor="#3b82f6" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
  Resume
</h1>


      {/* Educación */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">
          Education
        </h2>
        <div className="relative border-l-2 border-gray-600 pl-4 md:pl-6 space-y-6 md:space-y-8 text-sm md:text-base">

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Software Engineering</h3>
            <p className="text-gray-400">
              Universidad Fundación Escuela Tecnológica Jesús Oviedo Pérez (Currently studying)
            </p>
          </div>

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Technical Diploma in Electronics and Telecommunications</h3>
            <p className="text-gray-400">
              Instituto Politécnico Americano (Jan 2023 – Dec 2023)
            </p>
          </div>

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Technical Diploma in Electromechanics</h3>
            <p className="text-gray-400">
              Instituto Politécnico Americano (Jan 2023 – Mar 2024)
            </p>
          </div>

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Diploma in Software Testing and Automated Testing</h3>
            <p className="text-gray-400">
              Universidad Fundación Escuela Tecnológica Jesús Oviedo Pérez (Oct 2024 – Dec 2024)
            </p>
          </div>

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Diploma in Python Programming</h3>
            <p className="text-gray-400">
              Universidad Fundación Escuela Tecnológica Jesús Oviedo Pérez (Nov 2024 – Dec 2024)
            </p>
          </div>

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Intensive English (A1 – B2)</h3>
            <p className="text-gray-400">Compañía KOE (Jan 2024 – May 2025)</p>
          </div>

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Advanced English Certificate</h3>
            <p className="text-gray-400">
              Ileusco Instituto de Lenguas Extranjeras, Universidad Surcolombiana (Jan 2025 – Present)
            </p>
          </div>

        </div>
      </div>

      {/* Cursos */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">
          Courses
        </h2>
        <div className="relative border-l-2 border-gray-600 pl-4 md:pl-6 space-y-6 md:space-y-8 text-sm md:text-base">
          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Cisco Networking Academy</h3>
            <p className="text-gray-300">
              Introduction to Cybersecurity, Linux Uncharted, Linux Essentials
            </p>
          </div>
          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">UDEMY</h3>
            <p className="text-gray-300">
              RAG agents build apps & GPTs with APIS-MCP Langchain&n8n
            </p>
          </div>
          <div className="relative border-l-2 border-gray-600 pl-4 md:pl-6 space-y-6 md:space-y-8 text-sm md:text-base">
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">IBM</h3>
            <p className="text-gray-300">
              Generative AI: Prompt Engineering
            </p>
          </div>
          
          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Claseflix</h3>
            <p className="text-gray-300">
              JavaScript, SEO, Inglés A1–B2
            </p>
          </div>
        </div>
      </div>

      {/* Experiencia */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">
          Experience
        </h2>
        <div className="relative border-l-2 border-gray-600 pl-4 md:pl-6 space-y-6 md:space-y-8 text-sm md:text-base">

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Developer – Panel Plus Solar</h3>
            <p className="text-gray-400">Neiva, Colombia (Jan 2024 – Jan 2025)</p>
            <p className="text-gray-300 mt-2">
              Designed and developed the company’s official website with responsive design, SEO, and CMS.  
              Implemented contact forms, social media integration, and created a simulation module for investment budget estimation.
            </p>
          </div>

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Project Leader – FlyTours</h3>
            <p className="text-gray-400">Neiva, Colombia (Jan 2025 – Present)</p>
            <p className="text-gray-300 mt-2">
              Coordinating the development of a SaaS web platform for travel companies.  
              Responsibilities include defining requirements, assigning tasks, supervising development, and integrating modules (search, selection, quotation).
            </p>
          </div>

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Independent Project – Nequi Payment Automation System</h3>
            <p className="text-gray-400">Personal Project (2025)</p>
            <p className="text-gray-300 mt-2">
              Development of an automated system that validates Nequi payment receipts through a chatbot.  
              The system verifies receipts, notifies users, and stores daily transactions in a database for company accounting.
            </p>
          </div>

          <div>
            <div className="absolute -left-3 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
            <h3 className="font-bold text-base md:text-lg">Portfolio Website</h3>
            <p className="text-gray-400">Personal Project (2025)</p>
            <p className="text-gray-300 mt-2">
              Designed and developed my personal portfolio website from scratch using React, Vite, 
              TailwindCSS, and TypeScript. Includes sections such as About, Resume, Portfolio, Blog, and Contact. 
              Showcases my projects and technical skills while applying responsive design and best coding practices.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;
