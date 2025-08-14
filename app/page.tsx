import { HeroSection } from '@/components/sections/hero-section';
import { SectionItem } from '@/components/sections/sectionItem';
import { SectionProjects } from '@/components/sections/sectionProjects';
import { SectionContact } from '@/components/sections/sectionContact';
import { contentAccomplishments, contentArticles, contentSkills } from '@/lib/content';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 md:px-0 md:w-6/12 md:m-auto">
      <HeroSection />
      <SectionItem title="Thing I've done" content={contentAccomplishments}/>
      <SectionItem title="Skills" content={contentSkills}/>
      <SectionItem title="My Articles" content={contentArticles}/>
      <SectionProjects/>
      <SectionContact/>
    </div>
  );
}