import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className="card group transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="overflow-hidden">
        <div className="transition duration-500 group-hover:scale-[1.025]">
          <ProjectVisual
            title={project.shortTitle || project.title}
            index={index}
            src={project.heroImage?.src}
            alt={project.heroImage?.alt}
            images={project.previewImages}
          />
        </div>
      </div>
      <div className="p-6">
        <p className="eyebrow">{project.domain}</p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((t) => (
            <span
              className="rounded-full border border-line px-3 py-1 text-xs"
              key={t}
            >
              {t}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="link-arrow mt-6">
          Découvrir <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
