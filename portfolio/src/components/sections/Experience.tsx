import Section from "../ui/Section";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      title="Experience"
      description={
        experience.length > 0
          ? "Where I've applied what I've learned so far."
          : "I'm early in my career — here's how I'm building experience right now."
      }
    >
      {experience.length > 0 ? (
        <ol className="space-y-10">
          {experience.map((role) => (
            <li key={`${role.company}-${role.role}`} className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8">
              <div className="font-mono text-sm text-muted dark:text-muted-dark">
                {role.startDate} — {role.endDate ?? "Present"}
              </div>
              <div>
                <h3 className="section-heading text-lg font-semibold text-ink dark:text-ink-dark">
                  {role.role} · {role.company}
                </h3>
                <p className="mt-3 text-muted dark:text-muted-dark leading-relaxed">{role.description}</p>
                <p className="mt-3 text-ink/80 dark:text-ink-dark/80 leading-relaxed">
                  {role.responsibilities}
                </p>
                {role.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {role.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-1 rounded bg-surface dark:bg-surface-dark border border-line dark:border-line-dark text-muted dark:text-muted-dark"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="rounded-xl border border-dashed border-line dark:border-line-dark p-10 text-center text-muted dark:text-muted-dark">
          I'm currently building my first hands-on experience through personal and collaborative
          projects — this section will grow as that happens.
        </div>
      )}
    </Section>
  );
}
