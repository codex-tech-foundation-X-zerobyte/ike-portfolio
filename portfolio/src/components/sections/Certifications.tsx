import { Award, ExternalLink } from "lucide-react";
import Section from "../ui/Section";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" title="Certifications & achievements">
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="p-5 rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark"
          >
            <div className="flex items-start gap-3">
              <Award size={18} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-ink dark:text-ink-dark">{cert.title}</h3>
                <p className="text-sm text-muted dark:text-muted-dark">
                  {cert.organization} · {cert.date}
                </p>
                {cert.description && (
                  <p className="mt-2 text-sm text-ink/80 dark:text-ink-dark/80">{cert.description}</p>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent"
                  >
                    View credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
