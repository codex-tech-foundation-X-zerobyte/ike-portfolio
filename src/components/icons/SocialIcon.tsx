import { Mail, Globe, Code2, LayoutGrid, Layers } from "lucide-react";
import {
  SiGithub,
  SiX,
  SiDevdotto,
  SiHashnode,
  SiFiverr,
  SiUpwork,
  SiFreelancer,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

const map: Record<string, IconComponent | IconType> = {
  github: SiGithub,
  linkedin: FaLinkedin,
  twitter: SiX,
  devto: SiDevdotto,
  hashnode: SiHashnode,
  fiverr: SiFiverr,
  upwork: SiUpwork,
  freelancer: SiFreelancer,
  mail: Mail,
  globe: Globe,
  code: Code2,
  layout: LayoutGrid,
  layers: Layers,
};

interface Props {
  iconKey: string;
  size?: number;
  className?: string;
}

export default function SocialIcon({ iconKey, size = 18, className }: Props) {
  const Icon = (map[iconKey] ?? Globe) as IconComponent;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
