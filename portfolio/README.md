# Nwabuisi Ikechukwu Emmanuel — Developer Portfolio

A professional personal portfolio built with React, TypeScript, and Tailwind CSS.

## 1. Overview

This is a single-page portfolio (with a 404 fallback route) presenting:
Home/Hero, About, Skills, Technology Stack, Projects, Experience, Education,
Certifications, Services, GitHub, Testimonials, and Contact. Sections with no
data (Certifications, Testimonials, Experience, etc.) hide themselves or show
an honest placeholder instead of fake content.

## 2. Features

- Centralized, typed data layer (`src/data/`) — edit your info in one place
- Light/dark theme with system preference detection, persisted in `localStorage`
- Responsive layout (mobile, tablet, laptop, desktop, large screens)
- Accessible: semantic HTML, visible focus states, labeled form fields, `prefers-reduced-motion` support
- SEO-ready: meta description, Open Graph, Twitter Card, canonical URL, `robots.txt`, `sitemap.xml`
- No secrets in the frontend — the contact form is designed to plug into a provider you configure yourself
- Reusable UI: `Section`, `ProjectCard`, icon components

## 3. Technology stack

- React 19 + TypeScript
- Vite 8 (build tool)
- Tailwind CSS v4
- React Router (for the 404 fallback route)
- lucide-react + react-icons (Simple Icons / Font Awesome) for icons

## 4. Project structure

```
src/
  data/            ← EDIT YOUR INFO HERE
    types.ts
    profile.ts         — name, title, bio, contact, availability, personal story
    skills.ts          — skills + self-rated proficiency
    technologies.ts    — tech stack chips
    projects.ts        — project showcase
    experience.ts      — work experience
    education.ts       — education history
    certifications.ts  — certifications/awards (empty by default)
    services.ts        — services you offer
    socialLinks.ts     — GitHub/LinkedIn/X/etc.
    repos.ts           — manually curated GitHub repo highlights
    testimonials.ts    — client testimonials (empty by default)
    siteConfig.ts      — nav links, accent color, contact form endpoint
  components/
    layout/     — Navbar, Footer
    sections/   — one component per homepage section
    ui/         — shared building blocks (Section wrapper)
    icons/      — icon lookup helpers
  context/      — theme (light/dark) context
  pages/        — Home.tsx, NotFound.tsx
  App.tsx       — routes
  main.tsx      — entry point
public/
  favicon.svg, robots.txt, sitemap.xml, _redirects (Netlify)
vercel.json     — SPA rewrite rule for Vercel
```

## 5. Where to edit things

| What | File |
|---|---|
| Name, title, bio, email, phone, location, CV link, profile photo, availability | `src/data/profile.ts` |
| Personal story paragraphs | `src/data/profile.ts` (`storyParagraphs`, `storyIntro`) |
| Skills + proficiency | `src/data/skills.ts` |
| Technology stack icons | `src/data/technologies.ts` (icon keys map in `src/components/icons/TechIcon.tsx`) |
| Projects | `src/data/projects.ts` |
| Work experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Certifications/awards | `src/data/certifications.ts` |
| Services offered | `src/data/services.ts` |
| Social/professional links | `src/data/socialLinks.ts` |
| Featured GitHub repos | `src/data/repos.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Site-wide nav, accent color, contact form endpoint | `src/data/siteConfig.ts` |
| Accent color CSS variables | `src/index.css` (`--color-accent`, `--color-accent-strong`, `--color-accent-soft`) |

### Adding your profile photo

Add an image file under `src/assets/`, then in `src/data/profile.ts`:

```ts
import avatar from "../assets/avatar.jpg";
// ...
profileImage: avatar,
```

### Adding a project image

Same pattern, inside `src/data/projects.ts`, set `image: importedImage` instead of `null`.

## 6. Running locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Visit the URL Vite prints (typically `http://localhost:5173`).

## 7. Building for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## 8. Deploying

### GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### Vercel

1. Import the GitHub repository at vercel.com/new.
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. `vercel.json` in this repo already handles SPA route fallback for the 404 page.
4. Deploy.

### Netlify

1. Import the GitHub repository at app.netlify.com.
2. Build command: `npm run build`. Publish directory: `dist`.
3. `public/_redirects` already handles SPA route fallback.
4. Deploy.

## 9. Environment variables

None are required to run or deploy this site as-is. If you connect a contact
form provider (see below), most (Formspree, EmailJS) only need a **public**
form ID/key that is safe to keep in the frontend — never place a Supabase
service-role key, private API token, or password in frontend code.

If you use Supabase for the contact form, create a serverless function (a
Vercel/Netlify function or a Supabase Edge Function) that holds the
service-role key server-side, and call that function's public URL from the
frontend instead of calling Supabase directly with a secret key.

## 10. Connecting the contact form

Right now, submitting the contact form opens the visitor's email client with
the message pre-filled (no backend required, no fake success message). To
send messages directly from the site instead:

1. Pick a provider: Formspree, Resend, EmailJS, or a Supabase Edge Function.
2. Get the endpoint URL the form should POST to (e.g. your Formspree form endpoint).
3. Set it in `src/data/siteConfig.ts`:

```ts
contactFormEndpoint: "https://formspree.io/f/xxxxxxxx",
```

4. `src/components/sections/Contact.tsx` will automatically POST JSON to that
   endpoint instead of falling back to `mailto:`.

## 11. Customization

- **Accent color:** change `--color-accent` (and the `-strong`/`-soft` variants) in `src/index.css`, and `accentColor` in `src/data/siteConfig.ts`.
- **Fonts:** loaded via Google Fonts in `index.html` (IBM Plex Sans/Mono + Inter). Swap the `<link>` and the `--font-*` variables in `src/index.css` to change them.
- **Navigation:** edit `navLinks` in `src/data/siteConfig.ts`.
- **SEO metadata:** edit the `<meta>` tags in `index.html`, and replace `[YOUR_DOMAIN]` and `[SOCIAL_PREVIEW_IMAGE]` placeholders once you have a domain and a preview image.

## 12. What's intentionally left as a placeholder

- CV/résumé link (`profile.cvUrl`)
- Profile photo and project screenshots
- Contact form backend (see section 10)
- `[YOUR_DOMAIN]` in `index.html`, `public/robots.txt`, `public/sitemap.xml`
- `[SOCIAL_PREVIEW_IMAGE]` in `index.html`
- LinkedIn and X/Twitter URLs, Dev.to, Hashnode, Fiverr, Upwork, Freelancer links in `src/data/socialLinks.ts`

None of these are faked with placeholder-looking real data — they are `null`
or literal bracketed placeholders until you fill them in.
