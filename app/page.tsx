import { HeroSection } from "@/components/sections/hero-section";
import { SectionProjects } from "@/components/sections/sectionProjects";
import { AboutSection } from "@/components/sections/about-section";
import { WritingSection } from "@/components/sections/writing-section";
import { SectionContact } from "@/components/sections/sectionContact";
import { projects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: siteConfig.image,
        jobTitle: siteConfig.role,
        description: siteConfig.description,
        email: siteConfig.email,
        sameAs: siteConfig.sameAs,
        mainEntityOfPage: { "@id": `${siteConfig.url}/#webpage` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#webpage`,
        url: `${siteConfig.url}/`,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        inLanguage: "en",
        mainEntity: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "ItemList",
        name: `Selected projects by ${siteConfig.name}`,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            "@id": `${siteConfig.url}/work/${project.slug}#project`,
            name: project.title,
            description: project.description,
            url: `${siteConfig.url}/work/${project.slug}`,
            author: { "@id": `${siteConfig.url}/#person` },
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <HeroSection />
      <SectionProjects />
      <AboutSection />
      <WritingSection />
      <SectionContact />
    </>
  );
}
