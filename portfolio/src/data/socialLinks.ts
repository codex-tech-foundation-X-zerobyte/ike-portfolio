import type { SocialLink } from "./types";

/**
 * EDIT ME: Set `url` to `null` to hide a link automatically —
 * only links with a real URL are rendered anywhere on the site.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/perristtech.dev",
    iconKey: "github",
  },
  {
    label: "LinkedIn",
    url: null, // [LINKEDIN URL — add when ready]
    iconKey: "linkedin",
  },
  {
    label: "X / Twitter",
    // Provided as a handle ("Nwabuisi ikechukwu") rather than a URL —
    // replace with the full profile link, e.g. https://x.com/yourhandle
    url: null,
    iconKey: "twitter",
  },
  {
    label: "Dev.to",
    url: null,
    iconKey: "devto",
  },
  {
    label: "Hashnode",
    url: null,
    iconKey: "hashnode",
  },
  {
    label: "Fiverr",
    url: null,
    iconKey: "fiverr",
  },
  {
    label: "Upwork",
    url: null,
    iconKey: "upwork",
  },
  {
    label: "Freelancer",
    url: null,
    iconKey: "freelancer",
  },
];

export const githubUsername = "perristtech.dev";
