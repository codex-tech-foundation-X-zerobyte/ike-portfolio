import Section from "../ui/Section";
import { storyParagraphs, storyIntro } from "../../data/profile";

export default function About() {
  return (
    <Section id="about" index="01" title="About" description="A quick look at where I come from and where I'm headed.">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-10">
        <blockquote className="border-l-2 border-accent pl-5 text-lg md:text-xl text-ink dark:text-ink-dark leading-relaxed font-light">
          {storyIntro}
        </blockquote>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
          {storyParagraphs.map((p) => (
            <div key={p.heading}>
              <h3 className="section-heading text-sm font-semibold text-accent mb-2">{p.heading}</h3>
              <p className="text-muted dark:text-muted-dark leading-relaxed text-[15px]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
