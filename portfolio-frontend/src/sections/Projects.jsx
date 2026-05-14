import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import {motion} from "framer-motion";
const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="px-10 py-20 min-h-screen">
      <h2 className="text-3xl font-bold mb-12 text-teal-400 text-center">
        Full Stack Projects
      </h2>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6}}
      className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.id}
            className="hover:scale-105 hover:-translate-y-2 transition duration-300 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden"
          >
           
            <div className="relative h-64">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />

              <button
                onClick={() => navigate(`/projects/${p.id}`)}
                className="absolute top-4 right-4 bg-black/60 text-white text-sm px-4 py-1 rounded-lg hover:bg-teal-500 transition"
              >
                View Details
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
  {p.title}
</h3>

              <p className="text-gray-400 text-sm mb-4">
                {p.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;