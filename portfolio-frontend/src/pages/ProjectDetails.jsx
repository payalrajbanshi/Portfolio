import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-white">Project not found</div>;

  return (
    <div className="min-h-screen px-10 py-20 text-white max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">
        {project.title}
      </h1>

      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-6 w-full"
      />

      <p className="text-gray-300 mb-6">{project.fullDescription}</p>

      <a
        href={project.github}
        target="_blank"
        className="text-blue-400 underline"
      >
        View GitHub Repository
      </a>
    </div>
  );
};

export default ProjectDetails;