import Section from "../ui/Section";
import { skills } from "../../data/skills";
import type { SkillCategory } from "../../data/types";

function groupByCategory() {
  const groups = new Map<SkillCategory, typeof skills>();
  for (const skill of skills) {
    const list = groups.get(skill.category) ?? [];
    list.push(skill);
    groups.set(skill.category, list);
  }
  return groups;
}

export default function Skills() {
  const groups = groupByCategory();

  return (
    <Section
      id="skills"
      index="02"
      title="Skills"
      description="A self-rated view of my current confidence in each area — not a benchmarked score, just an honest snapshot of where I am right now."
    >
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {Array.from(groups.entries()).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-dark mb-4">
              {category}
            </h3>
            <div className="space-y-5">
              {items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <span className="font-medium text-ink dark:text-ink-dark">{skill.name}</span>
                    <span className="text-xs font-mono text-muted dark:text-muted-dark whitespace-nowrap">
                      {skill.level}
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full bg-line dark:bg-line-dark overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} confidence level`}
                  >
                    <div
                      className="h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-sm text-muted dark:text-muted-dark leading-snug">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
