
export interface ExperienceItem {
  role: string;
  company: string;
  client?: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  summary: string;
  experience: ExperienceItem[];
  skills: SkillCategory[];
  education: Education[];
  certifications: string[];
  projects: Project[];
}
