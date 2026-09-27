import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Section from "../ui/Section";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";
import { siteConfig } from "../../data/siteConfig";
import SocialIcon from "../icons/SocialIcon";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const activeSocials = socialLinks.filter((l) => l.url);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    if (siteConfig.contactFormEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(siteConfig.contactFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // No backend configured yet — fall back to opening the visitor's
    // email client with the message pre-filled. See README for how to
    // connect Formspree, Resend, EmailJS, or Supabase instead.
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || "Portfolio contact"
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <Section
      id="contact"
      index="06"
      title="Contact"
      description="Have a project in mind? Let's build something useful."
    >
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10">
        <div className="space-y-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-ink dark:text-ink-dark hover:text-accent transition-colors"
          >
            <span className="w-10 h-10 rounded-lg bg-surface dark:bg-surface-dark border border-line dark:border-line-dark flex items-center justify-center">
              <Mail size={18} />
            </span>
            {profile.email}
          </a>
          {profile.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 text-ink dark:text-ink-dark hover:text-accent transition-colors"
            >
              <span className="w-10 h-10 rounded-lg bg-surface dark:bg-surface-dark border border-line dark:border-line-dark flex items-center justify-center">
                <Phone size={18} />
              </span>
              {profile.phone}
            </a>
          )}
          <div className="flex items-center gap-3 text-ink dark:text-ink-dark">
            <span className="w-10 h-10 rounded-lg bg-surface dark:bg-surface-dark border border-line dark:border-line-dark flex items-center justify-center">
              <MapPin size={18} />
            </span>
            {profile.location}
          </div>

          {activeSocials.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {activeSocials.map((link) => (
                <a
                  key={link.label}
                  href={link.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-lg bg-surface dark:bg-surface-dark border border-line dark:border-line-dark flex items-center justify-center text-ink dark:text-ink-dark hover:text-accent hover:border-accent transition-colors"
                >
                  <SocialIcon iconKey={link.iconKey} size={18} />
                </a>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink dark:text-ink-dark mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-3.5 py-2.5 text-ink dark:text-ink-dark focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink dark:text-ink-dark mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-3.5 py-2.5 text-ink dark:text-ink-dark focus:border-accent"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-ink dark:text-ink-dark mb-1.5">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full rounded-md border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-3.5 py-2.5 text-ink dark:text-ink-dark focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink dark:text-ink-dark mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-3.5 py-2.5 text-ink dark:text-ink-dark focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-strong transition-colors disabled:opacity-60"
          >
            <Send size={16} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={16} />
              {siteConfig.contactFormEndpoint
                ? "Message sent — thanks for reaching out."
                : "Opening your email client to send this message."}
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
              <AlertCircle size={16} />
              Something went wrong — please email {profile.email} directly.
            </p>
          )}
          {!siteConfig.contactFormEndpoint && (
            <p className="text-xs text-muted dark:text-muted-dark">
              This form currently opens your email client. To send messages directly from the
              site, connect Formspree, Resend, EmailJS, or Supabase — see the README.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
