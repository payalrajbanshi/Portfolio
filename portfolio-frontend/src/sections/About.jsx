import React from "react";
import { Monitor, Server, Gauge } from "lucide-react";
import {motion} from "framer-motion";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center"
    >
      {/* TEXT SECTION */}
      <motion.div
      initial={{opacity:0, y:40}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7}}
      viewport={{once:true}}
       className="max-w-3xl text-center space-y-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed">
           Hi, I’m a recent CSIT graduate and a .NET and React developer who enjoys turning ideas into clean,
  functional, and user-friendly web applications. I build applications using ASP.NET Core on the backend,
  React on the frontend, Tailwind CSS for styling, and SQL Server for efficient data management.
  I also occasionally use Syncfusion components to build rich and interactive UI experiences.
          <br /><br />
     I focus on writing scalable code, building responsive interfaces, and creating applications that perform well
  in real-world scenarios. Currently, I’m growing as a full-stack developer by building impactful projects
  and continuously improving my skills.
        </p>
      </motion.div>

      {/* CARDS SECTION */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      variants={{
        hidden:{},
        visible:{
          transition:{
            staggerChilder:0.2,
          },
        },
      }}
       className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* CARD 1 */}
        <motion.div
        variants={{
          hidden: {opacity:0, y:30},
          visible: {opacity:1, y:0},
        }}
        transition={{duration:0.5}}
         className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:-translate-y-2 hover:shadow-xl transition duration-300 text-center">
          
          <Monitor 
            className="mx-auto mb-4 text-teal-400 transition transform hover:scale-110" 
            size={42} 
          />

          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            React UI/UX
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Creating responsive and interactive interfaces using React, Tailwind CSS, 
            and modern component design. Focused on reusable components and smooth user experience.
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
                variants={{
          hidden: {opacity:0, y:30},
          visible: {opacity:1, y:0},
        }}
        transition={{duration:0.5}} 
        className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:-translate-y-2 hover:shadow-xl transition duration-300 text-center">
          
          <Server 
            className="mx-auto mb-4 text-teal-400 transition transform hover:scale-110" 
            size={42} 
          />

          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            .NET Enterprise Systems
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Building scalable backend systems using ASP.NET Core, Web API, Entity Framework, 
            and Clean Architecture. Designed secure REST APIs with optimized database performance.
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
                variants={{
          hidden: {opacity:0, y:30},
          visible: {opacity:1, y:0},
        }}
        transition={{duration:0.5}}
         className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:-translate-y-2 hover:shadow-xl transition duration-300 text-center">
          
          <Gauge 
            className="mx-auto mb-4 text-teal-400 transition transform hover:scale-110" 
            size={42} 
          />

          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Performance & Scalability
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Improving application performance through efficient queries, API optimization, 
            and scalable architecture. Built systems designed to handle real-world growth.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;