import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";
import { siteConfig } from "../../data/siteConfig";
import SocialIcon from "../icons/SocialIcon";

export default function Footer() {
  const activeSocials = socialLinks.filter((l) => l.url);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line dark:border-line-dark">
      <div className="container-page py-12 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-mono text-sm font-medium text-ink dark:text-ink-dark">
            {profile.nickname ?? profile.name}
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted dark:text-muted-dark leading-relaxed">
            {profile.shortBio}
          </p>
          {profile.isAvailable && (
            <p className="mt-3 text-sm text-accent font-medium">{profile.availability}</p>
          )}
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-dark mb-3">
            Navigate
          </h3>
          <ul className="space-y-2">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-dark mb-3">
            Elsewhere
          </h3>
          <div className="flex flex-wrap gap-2">
            {activeSocials.map((link) => (
              <a
                key={link.label}
                href={link.url!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-md bg-surface dark:bg-surface-dark border border-line dark:border-line-dark flex items-center justify-center text-ink dark:text-ink-dark hover:text-accent hover:border-accent transition-colors"
              >
                <SocialIcon iconKey={link.iconKey} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line dark:border-line-dark">
        <div className="container-page py-5 text-xs text-muted dark:text-muted-dark">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
