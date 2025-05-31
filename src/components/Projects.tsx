import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

const Projects = () => (
  <section id="projects" className="min-h-screen px-6 py-16">
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  </section>
);

export default Projects;
