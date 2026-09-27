import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "../../data/types";

const statusStyles: Record<Project["status"], string> = {
  COMPLETED: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "IN PROGRESS": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  MAINTAINED: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  ARCHIVED: "bg-muted/10 text-muted dark:text-muted-dark",
};

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark overflow-hidden flex flex-col">
      <div className="aspect-video bg-paper dark:bg-paper-dark border-b border-line dark:border-line-dark flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="font-mono text-xs text-muted dark:text-muted-dark px-4 text-center">
            Project image coming soon
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="section-heading text-lg font-semibold text-ink dark:text-ink-dark">
            {project.name}
          </h3>
          <span
            className={`shrink-0 text-[11px] font-mono font-medium px-2 py-1 rounded-md ${statusStyles[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">
          {project.shortDescription}
        </p>

        {expanded && (
          <div className="mt-4 space-y-4 text-sm text-ink/80 dark:text-ink-dark/80 leading-relaxed">
            {project.detailedDescription.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {project.keyFeatures.length > 0 && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-dark mb-2">
                  Key features
                </h4>
                <ul className="space-y-1.5 list-disc list-inside">
                  {project.keyFeatures.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent self-start"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-1 rounded bg-paper dark:bg-paper-dark border border-line dark:border-line-dark text-muted dark:text-muted-dark"
            >
              {t}
            </span>
          ))}
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted dark:text-muted-dark">
          <div>
            <dt className="font-mono uppercase tracking-wide">Type</dt>
            <dd className="text-ink dark:text-ink-dark mt-0.5">{project.type}</dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-wide">My role</dt>
            <dd className="text-ink dark:text-ink-dark mt-0.5">{project.role}</dd>
          </div>
        </dl>

        <div className="mt-5 pt-4 border-t border-line dark:border-line-dark flex items-center gap-4 mt-auto">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-ink-dark hover:text-accent transition-colors"
            >
              <SiGithub size={16} /> Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted/70 dark:text-muted-dark/70">
              <SiGithub size={16} /> Code coming soon
            </span>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-ink-dark hover:text-accent transition-colors"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted/70 dark:text-muted-dark/70">
              <ExternalLink size={16} /> Live demo coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
