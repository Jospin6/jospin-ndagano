import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/project-visual";
import { SectionContact } from "@/components/sections/sectionContact";
import { projects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();
  const url = `${siteConfig.url}/work/${project.slug}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
      url,
      type: "article",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: project.image, width: project.imageWidth, height: project.imageHeight, alt: project.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.description, images: [project.image] },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((item) => item.slug === params.slug);
  if (index === -1) notFound();
  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];
  const url = `${siteConfig.url}/work/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${project.title} | ${siteConfig.name}`,
        description: project.description,
        inLanguage: "en",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        mainEntity: { "@id": `${url}#project` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.title,
        description: project.description,
        url,
        image: new URL(project.image, siteConfig.url).href,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        author: {
          "@type": "Person",
          "@id": `${siteConfig.url}/#person`,
          name: siteConfig.name,
          url: `${siteConfig.url}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteConfig.name, item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: project.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article className="case-study shell">
        <Link href="/#projects" className="text-link case-back"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
        <header className="case-header">
          <p className="eyebrow">{project.category}</p>
          <h1 className={project.title.length > 15 ? "case-title-long" : undefined}>{project.title}<span className="accent-text">.</span></h1>
          <p className="case-headline">{project.headline}</p>
          <div className="case-meta">
            <div><p className="eyebrow">My role</p><p>{project.role}</p></div>
            <div><p className="eyebrow">Built with</p><p>{project.technologies.join(" / ")}</p></div>
            <div className="case-links">
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link">Visit project <ArrowUpRight size={16} aria-hidden="true" /></a>}
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-link">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div>
          </div>
        </header>
        <ProjectVisual project={project} priority />
        <section className="case-section">
          <h2 className="eyebrow">01 / Overview</h2>
          <div><h3>What it does.</h3><p>{project.context}</p></div>
        </section>
        <section className="case-section">
          <h2 className="eyebrow">02 / Implementation</h2>
          <div>
            <h3>How it works.</h3>
            <ol className="system-flow" aria-label="Application workflow">
              {project.flow.map((step, stepIndex) => <li key={step}><span className="eyebrow">0{stepIndex + 1}</span>{step}{stepIndex < project.flow.length - 1 && <ArrowRight size={15} aria-hidden="true" />}</li>)}
            </ol>
            {project.implementation.map((item) => <div className="case-decision" key={item.title}><h4>{item.title}</h4><p>{item.description}</p></div>)}
          </div>
        </section>
        <Link href={`/work/${nextProject.slug}`} className="next-project">
          <div><span className="eyebrow">Next project</span><h2 className={nextProject.title.length > 15 ? "next-project-title-long" : undefined}>{nextProject.title}</h2></div>
          <ArrowRight size={36} aria-hidden="true" />
        </Link>
      </article>
      <SectionContact />
    </>
  );
}
