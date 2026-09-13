import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = siteConfig.navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line dark:border-line-dark bg-paper/90 dark:bg-paper-dark/90 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-accent focus:text-white focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <nav className="container-page flex items-center justify-between h-16 md:h-18" aria-label="Primary">
        <a
          href="#home"
          className="font-mono text-sm font-medium text-ink dark:text-ink-dark tracking-tight"
        >
          {profile.nickname ?? profile.name}
          <span className="text-accent">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "page" : undefined}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  active === link.href
                    ? "text-accent font-medium"
                    : "text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="p-2 rounded-md text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark hover:bg-surface dark:hover:bg-surface-dark transition-colors"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={16} /> CV
            </a>
          )}
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-md bg-accent text-white hover:bg-accent-strong transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden p-2 text-ink dark:text-ink-dark"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-line dark:border-line-dark bg-paper dark:bg-paper-dark"
        >
          <ul className="container-page py-4 flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-2 py-3 text-base rounded-md ${
                    active === link.href
                      ? "text-accent font-medium"
                      : "text-ink dark:text-ink-dark"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex items-center justify-between">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 px-2 py-2 text-sm text-muted dark:text-muted-dark"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                {theme === "light" ? "Dark mode" : "Light mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
