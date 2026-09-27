import Section from "../ui/Section";
import { technologies } from "../../data/technologies";
import TechIcon from "../icons/TechIcon";

export default function TechStack() {
  if (technologies.length === 0) return null;

  return (
    <Section id="tech-stack" title="Technology stack" description="Tools and languages I actually build with.">
      <ul className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <li
            key={tech.name}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-line dark:border-line-dark bg-surface dark:bg-surface-dark text-sm text-ink dark:text-ink-dark"
          >
            <TechIcon iconKey={tech.iconKey} size={18} className="text-accent" />
            {tech.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
