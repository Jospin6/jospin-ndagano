import Image from "next/image";
import type { Project } from "@/lib/content";

export function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <div className={`project-visual visual-${project.color}`}>
      <div className="visual-label" aria-hidden="true"><span>{project.title}</span><span>0{project.id} / Interface</span></div>
      <div className="browser-frame">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes="(max-width: 759px) 90vw, (max-width: 1200px) 70vw, 1000px"
          priority={priority}
          className="project-screenshot"
        />
      </div>
      <span className="visual-caption" aria-hidden="true">{project.title} / Application interface</span>
    </div>
  );
}
