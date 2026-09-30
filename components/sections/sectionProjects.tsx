import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { ProjectVisual } from "@/components/project-visual";

export function SectionProjects() {
  return (
    <section id="projects" className="work-section shell section-space" aria-labelledby="work-title">
      <div className="section-heading">
        <div><p className="eyebrow section-index">01 / Work</p><h2 id="work-title">Selected <span className="serif">projects.</span></h2></div>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <Link href={`/work/${project.slug}`} className="project-image-link" aria-label={`Explore ${project.title}`}>
              <ProjectVisual project={project} />
              <span className="project-open" aria-hidden="true"><ArrowUpRight size={22} /></span>
            </Link>
            <div className="project-info">
              <div className="project-title-line"><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><span className="eyebrow project-number">0{project.id}</span></div>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-bottom">
                <ul className="technology-list" aria-label={`${project.title} technologies`}>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                <div className="project-actions">
                  <Link href={`/work/${project.slug}`} className="text-link project-read">Project details <ArrowRight size={16} aria-hidden="true" /><span className="sr-only">: {project.title}</span></Link>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link project-read">
                      Live demo <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">: {project.title} (opens in a new tab)</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-link project-read">
                      GitHub <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">: {project.title} (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
