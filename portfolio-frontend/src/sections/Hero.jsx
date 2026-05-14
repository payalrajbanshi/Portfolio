import profileImg from "../assets/payal.jpeg"
import {motion} from "framer-motion";
const Hero = () => {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center px-10 pt-24 bg-white dark:bg-[#020617]"
>
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

       
        <motion.div
        initial={{ opacity: 0, x:-50}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8}}
         className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Payal Rajbanshi
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg">
        Full-stack developer specializing in ASP.NET Core, React, and SQL Server, focused on building scalable, modern, and performance-driven web applications.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3 rounded-lg text-black font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 px-6 py-3 rounded-lg hover:border-teal-400 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
        initial={{opacity:0, x:50, scale:0.9}}
        animate={{opacity:1, x:0, scale:1}}
        transition={{duration:0.8}}
        className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 blur-2xl opacity-30 rounded-full"></div>

            <img
              src={profileImg}
              alt="profile"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-white/10 shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;