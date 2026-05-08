// Skills — category cards with SVG icons and animated badges
import Icons from './Icons';
import type { ReactNode } from 'react';

interface Category {
  id: string;
  icon: ReactNode;
  title: string;
  gradient: string;
  border: string;
  headerColor: string;
  badgeClass: string;
  skills: string[];
}

const skillCategories: Category[] = [
  {
    id: "ai",
    icon: <Icons.Robot className="w-6 h-6" />,
    title: "AI & Automation",
    gradient: "from-cyan-900/60 to-blue-900/60",
    border: "border-cyan-500/40",
    headerColor: "text-cyan-300",
    badgeClass: "bg-cyan-900/60 border border-cyan-500/30 text-cyan-200",
    skills: ["AI Agents", "n8n Automation", "Groq / LLMs", "Prompt Engineering", "RAG Systems", "LangChain", "AI Workflows", "Claude / GPT API"],
  },
  {
    id: "ecommerce",
    icon: <Icons.Cart className="w-6 h-6" />,
    title: "E-commerce & CRM",
    gradient: "from-purple-900/60 to-pink-900/60",
    border: "border-purple-500/40",
    headerColor: "text-purple-300",
    badgeClass: "bg-purple-900/60 border border-purple-500/30 text-purple-200",
    skills: ["Multitenant SaaS", "E-commerce Platforms", "WhatsApp CRM", "Email Marketing AI", "CRMs Integration", "Mercado Pago", "Shopify API", "AI Advertising"],
  },
  {
    id: "web",
    icon: <Icons.Code className="w-6 h-6" />,
    title: "Web Development",
    gradient: "from-blue-900/60 to-indigo-900/60",
    border: "border-blue-500/40",
    headerColor: "text-blue-300",
    badgeClass: "bg-blue-900/60 border border-blue-500/30 text-blue-200",
    skills: ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "TailwindCSS", "REST APIs", "Socket.io"],
  },
  {
    id: "testing",
    icon: <Icons.Flask className="w-6 h-6" />,
    title: "Testing & QA",
    gradient: "from-orange-900/60 to-red-900/60",
    border: "border-orange-500/40",
    headerColor: "text-orange-300",
    badgeClass: "bg-orange-900/60 border border-orange-500/30 text-orange-200",
    skills: ["AI Testing", "Automated Testing", "Postman", "API Testing", "OWASP Security", "Jest", "Cypress", "JMeter"],
  },
  {
    id: "infra",
    icon: <Icons.Gear className="w-6 h-6" />,
    title: "Infrastructure & Tools",
    gradient: "from-green-900/60 to-teal-900/60",
    border: "border-green-500/40",
    headerColor: "text-green-300",
    badgeClass: "bg-green-900/60 border border-green-500/30 text-green-200",
    skills: ["Linux", "Docker", "PostgreSQL", "Prisma ORM", "Redis", "Git / GitHub", "Railway", "Vercel"],
  },
];

function Skills() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left">
        <span className="gradient-text">Skills & Technologies</span>
      </h2>
      <p className="text-gray-400 text-sm mb-8 text-center md:text-left">
        Especializado en AI, automatización y desarrollo full-stack moderno
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {skillCategories.map((cat, catIdx) => (
          <div
            key={cat.id}
            className={`
              animate-fade-in-up card-hover
              bg-gradient-to-br ${cat.gradient}
              border ${cat.border}
              rounded-xl p-5 shadow-lg
            `}
            style={{ animationDelay: `${catIdx * 0.12}s` }}
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-4">
              {cat.icon}
              <h3 className={`font-bold text-base md:text-lg ${cat.headerColor}`}>
                {cat.title}
              </h3>
            </div>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, skillIdx) => (
                <span
                  key={skill}
                  className={`
                    animate-badge-pop
                    ${cat.badgeClass}
                    text-xs font-medium px-3 py-1.5 rounded-full
                    transition-all duration-200 hover:scale-105 cursor-default
                  `}
                  style={{ animationDelay: `${catIdx * 0.12 + skillIdx * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
