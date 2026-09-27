import { Quote } from "lucide-react";
import Section from "../ui/Section";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" title="What people say">
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="p-6 rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark"
          >
            <Quote size={20} className="text-accent mb-3" />
            <blockquote className="text-ink/90 dark:text-ink-dark/90 leading-relaxed">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted dark:text-muted-dark">
              <span className="font-medium text-ink dark:text-ink-dark">{t.name}</span> — {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
