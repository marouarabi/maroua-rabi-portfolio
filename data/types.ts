export type ProjectCategory =
  | "AI / ML"
  | "Deep Learning"
  | "NLP"
  | "Computer Vision"
  | "Data Engineering"
  | "MLOps"
  | "DevOps"
  | "Cybersecurity"
  | "Blockchain"
  | "Distributed Systems"
  | "Business Intelligence";
export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  category?: "Interface" | "Architecture" | "Pipeline" | "Results" | "Award";
};
export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  domain: string;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  contribution: string;
  categories: ProjectCategory[];
  technologies: string[];
  featured?: boolean;
  lab?: boolean;
  heroImage?: GalleryImage;
  previewImages?: GalleryImage[];
  award?: string;
  disclaimer?: string;
  pipeline?: string[];
  highlights?: string[];
  gallery?: GalleryImage[];
  githubUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  results?: string[];
  learnings?: string[];
};
export type Education = {
  period: string;
  degree: string;
  school: string;
  location: string;
  description: string;
  skills: string[];
  projects?: string[];
};
export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  summary: string;
};
export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  description?: string;
  credentialUrl?: string;
};
export type Event = {
  name: string;
  date?: string;
  location?: string;
  organizer?: string;
  topic?: string;
  description?: string;
  image?: string;
  certificate?: string;
  link?: string;
};
