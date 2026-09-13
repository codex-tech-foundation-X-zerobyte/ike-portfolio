import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, index, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 border-t border-line dark:border-line-dark ${className ?? ""}`}>
      <div className="container-page">
        <div className="mb-12 md:mb-16 max-w-2xl">
          {index && (
            <span className="block font-mono text-sm text-accent mb-3" aria-hidden="true">
              {index}
            </span>
          )}
          <h2 className="section-heading text-3xl md:text-4xl font-semibold tracking-tight text-ink dark:text-ink-dark">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted dark:text-muted-dark leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
