export interface Profile {
  name: string;
  nickname?: string;
  title: string;
  taglineSkills: string[];
  shortBio: string;
  location: string;
  email: string;
  phone?: string;
  profileImage: string | null;
  cvUrl: string | null;
  availability: string;
  isAvailable: boolean;
}

export interface StoryParagraph {
  heading: string;
  body: string;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "DevOps"
  | "Cloud"
  | "UI/UX"
  | "Cybersecurity"
  | "Tools"
  | "Other";

export type ExperienceLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number; // 0-100, self-assessed confidence, not a measured metric
  level: ExperienceLevel;
  description: string;
}

export interface Technology {
  name: string;
  iconKey: string; // key mapped to an icon in TechIcon component
}

export type ProjectStatus = "COMPLETED" | "IN PROGRESS" | "MAINTAINED" | "ARCHIVED";

export interface Project {
  name: string;
  shortDescription: string;
  detailedDescription: string;
  type: string;
  technologies: string[];
  role: string;
  keyFeatures: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  image: string | null;
  status: ProjectStatus;
  stars?: number;
  forks?: number;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null; // null = present
  description: string;
  responsibilities: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  course: string;
  startYear: string;
  endYear: string | null;
  additionalInfo?: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  credentialUrl?: string | null;
  description?: string;
}

export interface Service {
  title: string;
  description: string;
  iconKey: string;
}

export interface SocialLink {
  label: string;
  url: string | null;
  iconKey: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string | null;
}

export interface RepoHighlight {
  name: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  githubUrl: string;
  liveUrl?: string | null;
}
