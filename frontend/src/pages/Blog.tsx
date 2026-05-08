// frontend/src/pages/Blog.tsx
import Icons from '../components/Icons';

const events = [
  {
    title: "Colombia 4.0",
    date: "Sep 11–14, 2025",
    location: "Bogotá, Colombia",
    tag: "Tech Conference",
    tagColor: "bg-blue-600/30 text-blue-300 border-blue-500/30",
    description:
      "Attended Colombia 4.0, one of the most important technology and innovation events in Latin America. Explored talks on software development, AI, and cybersecurity.",
    link: "https://col40.co/",
    image: "/images/colombia40.jpeg",
  },
  {
    title: "University Hackathon #1",
    date: "May 16–17, 2024",
    location: "FETJOP University, Neiva",
    tag: "Hackathon",
    tagColor: "bg-purple-600/30 text-purple-300 border-purple-500/30",
    description:
      "Participated in a 48-hour hackathon, developing solutions with my team for real-world problems. Focused on software engineering practices and teamwork under pressure.",
    link: "https://www.facebook.com/share/v/1FXpr9AeGv/?mibextid=wwXIfr",
    image: "/images/hackathon-mayo.jpeg",
  },
  {
    title: "University Hackathon #2",
    date: "Nov 14, 2024",
    location: "FETJOP University, Neiva",
    tag: "Hackathon",
    tagColor: "bg-purple-600/30 text-purple-300 border-purple-500/30",
    description:
      "Second participation in the university hackathon. Worked on innovative digital solutions and improved leadership and problem-solving skills in competitive conditions.",
    link: "https://www.facebook.com/share/p/19wLgSpHPR/?mibextid=wwXIfr",
    image: "/images/hackathon-nov.png",
  },
  {
    title: "Huila Science & Tech Fair",
    date: "Oct 16, 2025",
    location: "Oasis Plaza Mall, Neiva, Huila",
    tag: "Innovation Fair",
    tagColor: "bg-cyan-600/30 text-cyan-300 border-cyan-500/30",
    description:
      "Participated in the Huila University Fair of Science, Technology and Innovation. Showcased innovative projects and connected with students, entrepreneurs, and tech professionals from the region.",
    link: "https://www.facebook.com/share/p/1RhWT6maro/?mibextid=wwXIfr",
    image: "/images/feriatec.jpeg",
  },
  {
    title: "Tech Fairs & Electronics",
    date: "2024 – 2025",
    location: "Neiva, Colombia",
    tag: "Electronics",
    tagColor: "bg-green-600/30 text-green-300 border-green-500/30",
    description:
      "Showcased electronic projects and prototypes at multiple technology fairs, applying electronics and telecommunication knowledge gained from the technical diploma program.",
    link: "https://www.facebook.com/share/p/1CccoviLwz/?mibextid=wwXIfr",
    image: "/images/feria-tecnologia.JPG",
  },
];

function Blog() {
  return (
    <section className="p-6 md:p-10 border border-gray-700/50 rounded-xl bg-gray-800/40 text-white">

      {/* Header */}
      <div className="animate-fade-in-up flex items-center gap-3 mb-2">
        <Icons.BookOpen className="w-8 h-8" />
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="gradient-text">Blog & Events</span>
        </h1>
      </div>
      <p className="animate-fade-in-up delay-100 text-gray-400 text-sm mb-8">
        Eventos, hackathons y ferias tecnológicas en los que he participado
      </p>

      {/* Stats bar */}
      <div className="animate-fade-in-up delay-150 grid grid-cols-3 gap-3 mb-8">
        {[
          { label: 'Eventos', value: '5+', color: 'text-blue-400' },
          { label: 'Hackathons', value: '2', color: 'text-purple-400' },
          { label: 'Ciudades', value: '2', color: 'text-cyan-400' },
        ].map(s => (
          <div key={s.label} className="glass rounded-xl p-3 text-center card-hover">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Event cards grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <div
            key={event.title + event.date}
            className="animate-fade-in-up card-hover glass rounded-xl overflow-hidden border border-gray-700/40 group"
            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
          >
            {/* Image */}
            {event.image && (
              <div className="relative overflow-hidden h-44">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                {/* Tag overlaid on image */}
                <span className={`absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full border font-medium ${event.tagColor}`}>
                  {event.tag}
                </span>
              </div>
            )}

            {/* Content */}
            <div className="p-5">
              <h3 className="text-base md:text-lg font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                {event.title}
              </h3>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Icons.Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Icons.MapPin className="w-3.5 h-3.5" />
                  {event.location}
                </span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {event.description}
              </p>

              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  <Icons.ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  Ver más
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="animate-fade-in-up delay-700 mt-8 glass rounded-xl p-5 text-center border border-blue-500/20">
        <div className="flex justify-center mb-2">
          <Icons.Zap className="w-6 h-6" />
        </div>
        <p className="text-gray-300 text-sm">
          Siempre aprendiendo y conectando con la comunidad tech de Colombia.
        </p>
        <p className="text-gray-500 text-xs mt-1">Más eventos próximamente 🚀</p>
      </div>
    </section>
  );
}

export default Blog;
