import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  Circle,
  ClipboardCheck,
  Code2,
  Compass,
  Copy,
  Database,
  Download,
  ExternalLink,
  FolderGit2,
  Github,
  GraduationCap,
  LayoutGrid,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Quote,
  Rocket,
  Send,
  Server,
  Sparkles,
  Star,
  Sun,
  Instagram,
  Facebook,
  Twitter,
  TerminalSquare,
  UserRound,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons = {
  "arrow-down": ArrowDown,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  braces: Braces,
  briefcase: Briefcase,
  building: Building2,
  calendar: Calendar,
  check: Check,
  "chevron-down": ChevronDown,
  clipboard: ClipboardCheck,
  code: Code2,
  compass: Compass,
  copy: Copy,
  database: Database,
  download: Download,
  external: ExternalLink,
  folder: FolderGit2,
  github: Github,
  "graduation-cap": GraduationCap,
  layout: LayoutGrid,
  layers: Layers,
  linkedin: Linkedin,
  mail: Mail,
  "map-pin": MapPin,
  menu: Menu,
  moon: Moon,
  quote: Quote,
  rocket: Rocket,
  send: Send,
  server: Server,
  sparkles: Sparkles,
  star: Star,
  sun: Sun,
  terminal: TerminalSquare,
  "user-round": UserRound,
  wrench: Wrench,
  x: X,
  zap: Zap,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

/** Resolve a string key to a lucide icon. Falls back to a dot if unknown. */
export function Icon({ name, className, size = 20, strokeWidth = 1.75 }: IconProps) {
  const Cmp = (icons as Record<string, LucideIcon>)[name] ?? Circle;
  return (
    <Cmp
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}
