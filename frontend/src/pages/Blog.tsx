// frontend/src/components/Blog.tsx
const events = [
    {
        title: "Colombia 4.0",
        date: "September 11–14, 2025",
        location: "Bogotá, Colombia",
        description:
        "Attended Colombia 4.0, one of the most important technology and innovation events in Latin America. Explored talks on software development, AI, and cybersecurity.",
        link: "https://col40.co/",
        image: "/images/colombia40.jpeg",
    },
    {
        title: "University Hackathon",
        date: "May 16–17, 2024",
        location: "Universidad Fundación Escuela Tecnológica Jesús Oviedo Pérez",
        description:
        "Participated in a 48-hour hackathon, developing solutions with my team for real-world problems. Focused on software engineering practices and teamwork.",
        link: "https://www.facebook.com/share/v/1FXpr9AeGv/?mibextid=wwXIfr",
        image: "/images/hackathon-mayo.jpeg",
    },
    {
        title: "University Hackathon",
        date: "Nov 14, 2024",
        location: "Universidad Fundación Escuela Tecnológica Jesús Oviedo Pérez",
        description:
        "Second participation in the university hackathon, where we worked on innovative digital solutions and improved my leadership and problem-solving skills.",
        link: "https://www.facebook.com/share/p/19wLgSpHPR/?mibextid=wwXIfr",
        image: "/images/hackathon-nov.png",
    },
        {
    title: "University Science & Technology Fair",
    date: "Oct 16, 2025",
    location: "Oasis Plaza Mall, Neiva, Huila",
    description:
        "Participation in the Huila University Fair of Science, Technology and Innovation. Showcased innovative projects and connected with students, entrepreneurs, and tech professionals from the region.",
    link: "https://www.facebook.com/share/p/1RhWT6maro/?mibextid=wwXIfr", 
    image: "/images/feriatec.jpeg",
    },
    {
        title: "Tech Fairs & Electronics Projects",
        date: "2024 – 2025",
        location: "Neiva, Colombia",
        description:
        "Showcased electronic projects and prototypes at different technology fairs, applying electronics and telecommunication knowledge.",
        link: "https://www.facebook.com/share/p/1CccoviLwz/?mibextid=wwXIfr",
        image: "/images/feria-tecnologia.JPG",
    },
    ];

    function Blog() {
    return (
        <section className="p-6 md:p-10 border border-gray-700 rounded-lg bg-gray-700 text-white">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
    <svg
        className="w-7 h-7 md:w-8 md:h-8"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
        d="M19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20Z"
        fill="url(#blogGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        <path d="M7 8H17M7 12H17M7 16H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
        <linearGradient id="blogGradient" x1="3" y1="4" x2="21" y2="20">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        </defs>
    </svg>
    Blog & Events
    </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {events.map((event) => (
            <div
                key={event.title + event.date}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
                {event.image && (
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-36 md:h-48 object-cover"
                />
                )}
                <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                    {event.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 mb-2">
                    {event.date} • {event.location}
                </p>
                <p className="text-sm md:text-base text-gray-300 mb-4">
                    {event.description}
                </p>
                {event.link && (
                    <a
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline text-sm md:text-base"
                    >
                    🔗 More info
                    </a>
                )}
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Blog;
