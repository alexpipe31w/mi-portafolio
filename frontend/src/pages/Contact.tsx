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

        const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        });

        const result = await res.json();
        setStatus(result.msg);
    };

    return (
        <section className="p-10 border border-gray-700 rounded-lg bg-gray-700 text-white">
        <h1 className="text-3xl font-bold mb-6">📩 Contact Me</h1>

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
