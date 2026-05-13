import { FaReact, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiJavascript, SiTailwindcss } from "react-icons/si";

const techs = [
  { name: ".NET (ASP.NET Core)", icon: SiDotnet, color: "#512BD4" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "SQL Server", icon: FaDatabase, color: "#f29111" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
];

const TechStack = () => {
  return (
    <section id="techstack" className="px-6 py-20">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-teal-400">
          Tech Stack
        </h2>
        <p className="text-gray-400 mt-2">
          Technologies I use to build modern applications
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {techs.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <div
              key={i}
              className="group flex items-center gap-4 p-5 rounded-2xl 
                         bg-white/5 border border-white/10 
                         hover:scale-105 hover:border-teal-400/40
                         transition duration-300"
            >
              <Icon size={30} style={{ color: tech.color }} />

              <span className="text-gray-200 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default TechStack;