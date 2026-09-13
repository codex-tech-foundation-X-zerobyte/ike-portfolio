import type { Skill } from "./types";

/**
 * EDIT ME: Add, remove, or adjust skills here.
 * `proficiency` is a self-rated confidence indicator (0–100), not a
 * benchmarked statistic — keep numbers honest and modest.
 */
export const skills: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
    proficiency: 90,
    level: "Advanced",
    description: "Writing clean, semantic markup as the foundation for accessible web pages.",
  },
  {
    name: "CSS",
    category: "Frontend",
    proficiency: 85,
    level: "Advanced",
    description: "Styling responsive layouts with modern CSS, Flexbox, and Grid.",
  },
  {
    name: "Responsive Web Design",
    category: "Frontend",
    proficiency: 85,
    level: "Advanced",
    description: "Designing interfaces that adapt cleanly across mobile, tablet, and desktop.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    proficiency: 60,
    level: "Intermediate",
    description: "Building interactive page behaviour and learning modern JS fundamentals.",
  },
  {
    name: "React",
    category: "Frontend",
    proficiency: 50,
    level: "Intermediate",
    description: "Building component-based interfaces for web applications and dashboards.",
  },
  {
    name: "UI/UX Design",
    category: "UI/UX",
    proficiency: 55,
    level: "Intermediate",
    description: "Structuring layouts and flows that are easy for real users to navigate.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    proficiency: 65,
    level: "Intermediate",
    description: "Version control, branching, and collaborating on shared codebases.",
  },
  {
    name: "Problem Solving",
    category: "Other",
    proficiency: 80,
    level: "Advanced",
    description: "Breaking down technical and business problems into workable solutions.",
  },
  {
    name: "Communication",
    category: "Other",
    proficiency: 80,
    level: "Advanced",
    description: "Explaining technical decisions clearly to teammates and non-technical clients.",
  },
];
