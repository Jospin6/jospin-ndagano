import { HeroSection } from '@/components/sections/hero-section';
import { SectionItem } from '@/components/sections/sectionItem';
import { SectionProjects } from '@/components/sections/sectionProjects';
import { SectionContact } from '@/components/sections/sectionContact';
import {
  contentAccomplishments,
  contentArticles,
  contentSkills,
  projects,
} from '@/lib/content';
import { siteConfig } from '@/lib/site';

export default function Home() {
  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: siteConfig.image,
        jobTitle: 'AI Engineer and Full-Stack Developer',
        description: siteConfig.description,
        email: siteConfig.email,
        sameAs: siteConfig.sameAs,
        mainEntityOfPage: siteConfig.url,
        knowsAbout: [
          'Artificial intelligence',
          'Web development',
          'Automation',
          'Next.js',
          'TypeScript',
          'Python',
          'LangChain',
          'SaaS development',
        ],
        worksFor: {
          '@type': 'Organization',
          name: siteConfig.company,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} Portfolio`,
        description: siteConfig.description,
        inLanguage: 'en',
        publisher: {
          '@id': `${siteConfig.url}/#person`,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: 'en',
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: {
          '@id': `${siteConfig.url}/#person`,
        },
        mainEntity: {
          '@id': `${siteConfig.url}/#person`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: siteConfig.image,
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${siteConfig.url}/#projects`,
        name: `Projects by ${siteConfig.name}`,
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            url: project.liveUrl ?? project.githubUrl,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      <div className="flex flex-col min-h-screen px-4 md:px-0 md:w-6/12 md:m-auto">
        <HeroSection />
        <SectionItem title="Thing I've done" content={contentAccomplishments} />
        <SectionItem title="Skills" content={contentSkills} />
        <SectionItem title="My Articles" content={contentArticles} />
        <SectionProjects />
        <SectionContact />
      </div>
    </>
  );
}
