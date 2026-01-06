// frontend/src/components/About.tsx 
import Skills from "../components/skills_temp";

function About() {
  return (
    <section className="p-6 md:p-10 border border-gray-700 rounded-lg bg-gray-700 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left">
        About Me
      </h1>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6 md:mb-10 text-center md:text-left">
        I am a Software Engineering student and full-stack web developer passionate about building
        modern, secure, and efficient digital experiences. I specialize in{" "}
        <span className="font-semibold text-blue-400">React, Next.js, Node.js, and TypeScript</span>, 
        and I also have strong knowledge in{" "}
        <span className="font-semibold text-green-400">Python, Django, SQL, Linux</span>, 
        and software testing (manual and automated).
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
        What I'm Working On
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* FRUTAZA - PROYECTO DESTACADO */}
        <div className="bg-gradient-to-br from-green-900/50 to-yellow-900/30 p-4 md:p-6 rounded-lg shadow-lg border-2 border-green-600/50 text-sm md:text-base relative overflow-hidden">
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-bold">
            Featured
          </div>
          <h3 className="font-bold text-lg mb-2 text-green-400">E-commerce Platform</h3>
          <p className="text-gray-300">
            Full-stack e-commerce platform for Amazonian products. Built with Next.js, Shopify API integration, 
            automated TikTok content scraping with CRON jobs, AI-powered chatbot using Dialogflow, 
            and advanced parallax animations. Currently live in production serving real customers.
          </p>
        </div>

        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Frontend Development</h3>
          <p className="text-gray-400">
            Creating modern, responsive, and optimized interfaces with React, Next.js, Vite, and TailwindCSS.
            Experience with complex animations, parallax effects, and performance optimization.
          </p>
        </div>

        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Backend & API Integration</h3>
          <p className="text-gray-400">
            Building scalable APIs with Express and Next.js API Routes. Experience with third-party integrations 
            (Shopify, Meta Business, TikTok), web scraping, and automated workflows with CRON jobs.
          </p>
        </div>

        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Fullstack SaaS Applications</h3>
          <p className="text-gray-400">
            Developing complete applications that integrate frontend and backend.
            Examples: FlyTours (SaaS for travel agencies with booking system) and Panel Plus Solar 
            (corporate website with investment simulation module).
          </p>
        </div>

        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Payment Automation Systems</h3>
          <p className="text-gray-400">
            Developing a Nequi payment automation system that validates receipts in real time through chatbots
            and stores daily transactions in a database for business accounting and financial tracking.
          </p>
        </div>

        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Cybersecurity & Testing</h3>
          <p className="text-gray-400">
            Hands-on experience with OWASP tools, API testing with Postman, JMeter, and Cypress. 
            Knowledge in application security, vulnerability analysis, and quality assurance.
          </p>
        </div>

      </div>

      {/* Skills Section */}
      <div className="mt-8 md:mt-12">
        <Skills />
      </div>
    </section>
  );
}

export default About;
