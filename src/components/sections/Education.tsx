import Section from "../ui/Section";
import { education } from "../../data/education";

export default function Education() {
  if (education.length === 0) return null;

  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {education.map((ed) => (
          <div key={ed.institution} className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8">
            <div className="font-mono text-sm text-muted dark:text-muted-dark">
              {ed.startYear} — {ed.endYear ?? "Present"}
            </div>
            <div>
              <h3 className="section-heading text-lg font-semibold text-ink dark:text-ink-dark">
                {ed.course}
              </h3>
              <p className="text-muted dark:text-muted-dark">{ed.institution}</p>
              {ed.additionalInfo && (
                <p className="mt-3 text-ink/80 dark:text-ink-dark/80 leading-relaxed">
                  {ed.additionalInfo}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
