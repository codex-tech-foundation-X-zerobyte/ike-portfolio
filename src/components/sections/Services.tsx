import Section from "../ui/Section";
import { services } from "../../data/services";
import SocialIcon from "../icons/SocialIcon";

export default function Services() {
  if (services.length === 0) return null;

  return (
    <Section
      id="services"
      index="05"
      title="Services"
      description="What I can help with right now."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center text-accent-strong mb-4">
              <SocialIcon iconKey={service.iconKey} size={20} />
            </div>
            <h3 className="font-semibold text-ink dark:text-ink-dark">{service.title}</h3>
            <p className="mt-2 text-sm text-muted dark:text-muted-dark leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
