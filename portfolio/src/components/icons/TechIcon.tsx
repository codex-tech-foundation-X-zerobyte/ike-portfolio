import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";

const map: Record<string, IconType | React.ComponentType<{ size?: number; className?: string }>> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  supabase: SiSupabase,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  python: SiPython,
  postgresql: SiPostgresql,
  docker: SiDocker,
  tailwindcss: SiTailwindcss,
};

interface Props {
  iconKey: string;
  size?: number;
  className?: string;
}

export default function TechIcon({ iconKey, size = 22, className }: Props) {
  const Icon = map[iconKey];
  if (!Icon) return null;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
