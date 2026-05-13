import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Certificates from "../sections/Certificates";
import Contact from "../sections/Contact";
import TechStack from "../sections/TechStack";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack/>
      <Projects />
      <Skills/>
      <Certificates />
      <Contact />
    </>
  );
};

export default Home;