import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="about-section section-space" aria-labelledby="about-title">
      <div className="shell ">
        <div className="about-intro">
          <p className="eyebrow section-index">02 / About</p>
          <h2 id="about-title">About <span className="serif">me.</span></h2>
          <p>I’m Jospin Ndagano, an AI Engineer with a software engineering background. I work across LLMs, retrieval-augmented generation, agentic systems, machine learning, AI infrastructure, and backend architecture.</p>
          <p>My focus is the complete system: how models reason, use tools, access data, and interact with other services. I care about the engineering required to make those capabilities dependable in production.</p>
          <a href="/jospin_ndagano_resume.pdf" target="_blank" rel="noreferrer" className="text-link">View my résumé <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
