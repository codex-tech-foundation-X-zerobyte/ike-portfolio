import { Star, GitFork, ExternalLink, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Section from "../ui/Section";
import { githubUsername, socialLinks } from "../../data/socialLinks";
import { repoHighlights } from "../../data/repos";

export default function GithubSection() {
  const githubLink = socialLinks.find((l) => l.label === "GitHub" && l.url);
  if (!githubLink) return null;

  return (
    <Section id="github" title="GitHub">
      <div className="rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-paper dark:bg-paper-dark border border-line dark:border-line-dark flex items-center justify-center">
              <SiGithub size={20} className="text-ink dark:text-ink-dark" />
            </div>
            <div>
              <p className="font-mono text-sm text-ink dark:text-ink-dark">{githubUsername}</p>
              <p className="text-sm text-muted dark:text-muted-dark">GitHub profile</p>
            </div>
          </div>
          <a
            href={githubLink.url!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            View profile <ArrowUpRight size={16} />
          </a>
        </div>

        {repoHighlights.length > 0 ? (
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {repoHighlights.map((repo) => (
              <div
                key={repo.name}
                className="p-5 rounded-lg border border-line dark:border-line-dark bg-paper dark:bg-paper-dark"
              >
                <h3 className="font-mono text-sm font-medium text-ink dark:text-ink-dark">{repo.name}</h3>
                <p className="mt-1.5 text-sm text-muted dark:text-muted-dark leading-relaxed">
                  {repo.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {repo.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded border border-line dark:border-line-dark text-muted dark:text-muted-dark"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted dark:text-muted-dark">
                  <span className="inline-flex items-center gap-1">
                    <Star size={14} /> {repo.stars}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={14} /> {repo.forks}
                  </span>
                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-accent font-medium"
                  >
                    Code <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-muted dark:text-muted-dark">
            Selected repositories will be listed here — edit{" "}
            <code className="font-mono text-xs bg-paper dark:bg-paper-dark px-1.5 py-0.5 rounded border border-line dark:border-line-dark">
              src/data/repos.ts
            </code>{" "}
            to feature specific public repos.
          </p>
        )}
      </div>
    </Section>
  );
}
