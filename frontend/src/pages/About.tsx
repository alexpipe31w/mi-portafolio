// frontend/src/pages/About.tsx
import Skills from "../components/skills_temp";
import Icons from "../components/Icons";

const workAreas = [
  {
    icon: <Icons.Robot className="w-5 h-5 flex-shrink-0" />,
    title: "AI Agents & Automation",
    desc: "Building intelligent agents and automation workflows with n8n, LangChain, Groq, and multi-LLM orchestration. Connecting systems to work autonomously at scale.",
    gradient: "from-cyan-900/40 to-blue-900/40",
    border: "border-cyan-600/30",
  },
  {
    icon: <Icons.Cart className="w-5 h-5 flex-shrink-0" />,
    title: "AI-Powered E-commerce SaaS",
    desc: "Developing multitenant SaaS platforms like StockUp with AI analytics, email marketing automation, inventory management, and payment integrations.",
    gradient: "from-purple-900/40 to-indigo-900/40",
    border: "border-purple-600/30",
  },
  {
    icon: <Icons.Chat className="w-5 h-5 flex-shrink-0" />,
    title: "WhatsApp CRM & Messaging",
    desc: "Creating WhatsApp-connected platforms for automated customer intake, order management, appointment scheduling, and AI-driven conversation flows.",
    gradient: "from-green-900/40 to-teal-900/40",
    border: "border-green-600/30",
  },
  {
    icon: <Icons.Flask className="w-5 h-5 flex-shrink-0" />,
    title: "AI Testing & QA Automation",
    desc: "Automated testing pipelines using AI, Postman, Cypress, and JMeter. API security testing with OWASP tools and intelligent test case generation.",
    gradient: "from-orange-900/40 to-red-900/40",
    border: "border-orange-600/30",
  },
  {
    icon: <Icons.Code className="w-5 h-5 flex-shrink-0" />,
    title: "Full-Stack Web Development",
    desc: "Modern interfaces and APIs with React, Next.js, Node.js, NestJS, and TypeScript. Responsive design, real-time features with Socket.io, and optimized performance.",
    gradient: "from-blue-900/40 to-violet-900/40",
    border: "border-blue-600/30",
  },
  {
    icon: <Icons.Gear className="w-5 h-5 flex-shrink-0" />,
    title: "Systems & Networks Support",
    desc: "Professional technician in IT systems and networks. Linux administration, Docker infrastructure, network configuration, and hardware/software support.",
    gradient: "from-gray-800/60 to-slate-900/60",
    border: "border-gray-600/30",
  },
];

function About() {
  return (
    <section className="p-6 md:p-10 border border-gray-700/50 rounded-xl bg-gray-800/40 text-white">

      {/* Hero intro */}
      <div className="animate-fade-in-up mb-8 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 text-center md:text-left">
          <span className="gradient-text">About Me</span>
        </h1>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base text-center md:text-left max-w-3xl">
          I'm a{" "}
          <span className="font-semibold text-blue-400">Full-Stack Developer & AI Specialist</span>{" "}
          and certified{" "}
          <span className="font-semibold text-cyan-400">
            Técnico Profesional en Soporte de Sistemas Informáticos y Redes
          </span>
          . I build intelligent systems that automate real business processes — from multitenant
          SaaS platforms and WhatsApp CRMs to AI-powered e-commerce and automated testing pipelines.
          I specialize in{" "}
          <span className="font-semibold text-purple-400">AI agents, n8n automation, React, Node.js</span>
          {" "}and modern cloud architectures. Currently in Neiva, Colombia — open to remote work worldwide.
        </p>
      </div>

      {/* Featured projects */}
      <div className="animate-fade-in-up delay-100 mb-8 md:mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2 justify-center md:justify-start">
          <Icons.Rocket className="w-6 h-6" />
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* StockUp */}
          <div className="relative bg-gradient-to-br from-blue-900/60 to-purple-900/60 p-5 md:p-6 rounded-xl shadow-lg border border-blue-500/40 neon-border overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-bold animate-float">
              <Icons.Star className="w-3 h-3" />
              FEATURED
            </div>
            <h3 className="font-bold text-lg mb-2 text-blue-400">StockUp — AI SaaS Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Multitenant SaaS e-commerce platform for SMBs. AI-powered analytics, automated email
              marketing campaigns, inventory management, subscription plans (BASIC/PRO/ENTERPRISE),
              Mercado Pago integration, and advanced multi-carrier shipping.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Next.js", "Groq AI", "Prisma", "PostgreSQL"].map(t => (
                <span key={t} className="text-xs bg-blue-800/60 border border-blue-500/30 text-blue-200 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          {/* StockUp Mensajes */}
          <div className="relative bg-gradient-to-br from-green-900/60 to-teal-900/60 p-5 md:p-6 rounded-xl shadow-lg border border-green-500/40 overflow-hidden">
            <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">
              NEW
            </div>
            <h3 className="font-bold text-lg mb-2 text-green-400">StockUp Mensajes — WhatsApp CRM</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              WhatsApp-connected platform for automated customer intake, order taking, appointment
              scheduling, and AI-driven conversation management. Real-time with Socket.io, multi-tenant,
              powered by Groq AI and Baileys.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["NestJS", "Groq AI", "Baileys", "Socket.io"].map(t => (
                <span key={t} className="text-xs bg-green-800/60 border border-green-500/30 text-green-200 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What I do */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2 justify-center md:justify-start animate-fade-in-up delay-200">
        <Icons.Zap className="w-6 h-6" />
        What I Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workAreas.map((area, i) => (
          <div
            key={area.title}
            className={`
              animate-fade-in-up card-hover
              bg-gradient-to-br ${area.gradient}
              border ${area.border}
              p-4 md:p-5 rounded-xl shadow text-sm md:text-base
            `}
            style={{ animationDelay: `${0.25 + i * 0.1}s` }}
          >
            <h3 className="font-bold text-base mb-2 flex items-center gap-2">
              {area.icon}
              {area.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{area.desc}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-10 animate-fade-in-up delay-500">
        <Skills />
      </div>
    </section>
  );
}

export default About;
