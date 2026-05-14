import { certificates } from "../data/certificates";
import {motion} from "framer-motion";
const Section = ({ title, items }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-teal-300">{title}</h3>

    {items.map((c, i) => (
      <motion.div
          key={i}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: i * 0.1 }}
  whileHover={{ scale: 1.02 }}
        className="flex justify-between items-center bg-white dark:bg-white/5 border border-gray-200 border-white/10 
                   px-6 py-4 rounded-xl hover:shadow-lg transition"
      >
       
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">{c.title}</h4>
          <p className="text-sm text-gray-400">
            {c.org} • {c.date}
          </p>
        </div>

     
        <a
          href={c.link}
          target="_blank"
          className="text-sm text-teal-400 hover:underline"
        >
          View Certificate →
        </a>
      </motion.div>
    ))}
  </div>
);

const Certificates = () => {
  return (
    <section id="certificates" className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-teal-400 text-center">
          Certificates
        </h2>

        <Section title="Experience (Internship)" items={certificates.experience} />
        <Section title="Courses" items={certificates.courses} />
        <Section title="Workshops" items={certificates.workshops} />
        <Section title="Hackathons" items={certificates.hackathons} />
      </div>
    </section>
  );
};

export default Certificates;