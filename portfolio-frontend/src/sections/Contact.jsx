import {
  Mail,
  Phone,
  MapPin
  
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useState } from "react";
const Contact = () => {
    const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

    const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }; 

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://localhost:7131/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        alert("Message sent ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Error ❌");
    }
  };


  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-teal-400">
            Get In Touch
          </h2>

          <p className="text-gray-400">
            Feel free to reach out for collaborations, projects, or just a friendly hello 👋
          </p>

          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-teal-400" size={20} />
              <span>payalrajbansi8@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-teal-400" size={20} />
              <span>+977-9826964741</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-teal-400" size={20} />
              <span>Jhapa, Nepal</span>
            </div>
          </div>

        
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/payalrajbanshi"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-teal-400/20 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/payal-rajbanshi/"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-teal-400/20 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/payal.rajbansii/"
              target="_blank"
              className="p-3 rounded-full bg-white/5 hover:bg-teal-400/20 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* 🔥 RIGHT SIDE (FORM) */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500">
          <div className="bg-white dark:bg-[#020617]/90 p-8 rounded-2xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
              name="name"
              value={form.name}
              onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 focus:outline-none focus:border-teal-400"
              />
              <input
              name="email"
              value={form.email}
              onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 focus:outline-none focus:border-teal-400"
              />
              <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full p-3 rounded-lg bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 focus:outline-none focus:border-teal-400"
              />
              <button type="submit" className="w-full bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3 rounded-lg text-black font-semibold hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;