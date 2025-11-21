import { useState } from "react";

    function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        };

        const res = await fetch("https://mi-portafolio-backend-nxii.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        });

        const result = await res.json();
        setStatus(result.msg);
    };

    return (
        <section className="p-10 border border-gray-700 rounded-lg bg-gray-700 text-white">
    <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 justify-center md:justify-start">
    <svg
        className="w-8 h-8 md:w-9 md:h-9"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
        d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
        fill="url(#contactGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        <defs>
        <linearGradient id="contactGradient" x1="3" y1="5" x2="21" y2="19">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        </defs>
    </svg>
    Contact Me
    </h1>


        {/* Google Maps */}
        <div className="mb-8">
            <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63753.20634351959!2d-75.31358841561027!3d2.9376186418562944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b747c5a6b4009%3A0x69acf162bb25539a!2sNeiva%2C%20Huila!5e0!3m2!1ses-419!2sco!4v1758498608380!5m2!1ses-419!2sco"
            className="w-full h-64 border-0 rounded-lg"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
                required
            />
            </div>
            <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            required
            ></textarea>
            <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-bold w-full md:w-auto"
            >
            Send Message
            </button>
        </form>

        {status && (
            <p className="mt-4 text-green-400 font-semibold flex items-center gap-2">
            ✅ {status}
            </p>
        )}
        </section>
    );
}

export default Contact;
