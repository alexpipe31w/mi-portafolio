// frontend/src/components/About.tsx 
import Skills from "../components/skills_temp";

function About() {
  return (
    <section className="p-6 md:p-10 border border-gray-700 rounded-lg bg-gray-700 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left">
        About Me
      </h1>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6 md:mb-10 text-center md:text-left">
        I am a Software Engineering student and web developer passionate about building
        modern, secure, and efficient digital experiences. I specialize in{" "}
        <span className="font-semibold text-blue-400">React, Node.js, and TypeScript</span>, 
        and I also have strong knowledge in{" "}
        <span className="font-semibold text-green-400">Python, Django, SQL, Linux</span>, 
        and software testing (manual and automated).
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
        What I’m Working On
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Frontend Development</h3>
          <p className="text-gray-400">
            Creating modern, responsive, and optimized interfaces with React, Vite, and TailwindCSS.
          </p>
        </div>
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Backend with Node.js</h3>
          <p className="text-gray-400">
            Building scalable APIs with Express, modern databases, and security best practices.
          </p>
        </div>
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Fullstack Apps</h3>
          <p className="text-gray-400">
            Developing complete applications that integrate frontend and backend.
            Examples: FlyTours (SaaS for travel agencies) and Panel Plus Solar (investment simulation module).
          </p>
        </div>
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Personal Projects</h3>
          <p className="text-gray-400">
            Developing a Nequi payment automation system that validates receipts in real time through chatbots
            and stores daily transactions in a database for business accounting.
          </p>
        </div>
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Cybersecurity & Testing</h3>
          <p className="text-gray-400">
            Hands-on experience with OWASP tools, API testing with Postman, JMeter, and Cypress. 
            Knowledge in application security and vulnerability analysis.
          </p>
        </div>
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow text-sm md:text-base">
          <h3 className="font-bold text-lg mb-2">Learning</h3>
          <p className="text-gray-400">
            Exploring new technologies such as Next.js and GraphQL, while improving my English 
            (currently progressing towards B2 level).
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
