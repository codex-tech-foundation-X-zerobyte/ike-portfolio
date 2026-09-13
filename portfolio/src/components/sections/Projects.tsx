import Section from "../ui/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      description="Real work I've built or am actively building — what it does, what I used, and what I contributed."
    >
      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-line dark:border-line-dark p-10 text-center text-muted dark:text-muted-dark">
          [ADD PROJECT HERE] — projects will appear once added to src/data/projects.ts
        </div>
      )}
    </Section>
  );
}
