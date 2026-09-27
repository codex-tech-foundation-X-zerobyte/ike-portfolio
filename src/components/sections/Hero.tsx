import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section id="home" className="pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="container-page grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          {profile.isAvailable && (
            <div className="inline-flex items-center gap-2 rounded-full border border-line dark:border-line-dark px-3 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-muted dark:text-muted-dark">{profile.availability}</span>
            </div>
          )}

          <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink dark:text-ink-dark leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted dark:text-muted-dark font-mono">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-base md:text-lg text-ink/80 dark:text-ink-dark/80 leading-relaxed">
            {profile.shortBio}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.taglineSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-surface dark:bg-surface-dark border border-line dark:border-line-dark text-muted dark:text-muted-dark"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-strong transition-colors"
            >
              View my work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-line dark:border-line-dark text-ink dark:text-ink-dark font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Contact me
            </a>
            {profile.cvUrl ? (
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 text-muted dark:text-muted-dark font-medium hover:text-accent transition-colors"
              >
                <Download size={18} /> Download CV
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-1 py-3 text-muted/70 dark:text-muted-dark/70 font-medium text-sm">
                <Download size={16} /> CV coming soon
              </span>
            )}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted dark:text-muted-dark">
            <MapPin size={16} />
            {profile.location}
          </div>
        </div>

        <div className="relative mx-auto md:mx-0 w-full max-w-xs">
          <div className="aspect-square rounded-2xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark overflow-hidden flex items-center justify-center">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={`Portrait of ${profile.name}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-mono text-sm text-muted dark:text-muted-dark px-6 text-center">
                {/* Add your photo via profile.profileImage in src/data/profile.ts */}
                Profile photo
              </span>
            )}
          </div>
          <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border border-accent/30 -z-10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
