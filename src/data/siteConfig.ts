/**
 * EDIT ME: Site-wide configuration. Change the accent color here to
 * re-theme the whole site (also update the matching CSS variable in
 * src/index.css under `--color-accent` / `--color-accent-strong`).
 */
export const siteConfig = {
  domain: "[YOUR_DOMAIN]",
  accentColor: "#b85c2b",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  // Configure one of these once you pick a form backend. See README.
  contactFormEndpoint: null as string | null, // e.g. "https://formspree.io/f/xxxxxx"
};
