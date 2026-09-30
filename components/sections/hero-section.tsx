import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <h1 id="hero-title">Jospin Ndagano.<br /><span className="serif">AI Engineer.</span></h1>
          <p className="hero-intro">I engineer AI systems that turn complex problems into reliable, production-ready software. My work spans LLMs, RAG, agentic systems, machine learning, AI infrastructure, and intelligent backend architectures. I focus on building systems that can reason, use tools, work with data, and operate reliably in real-world environments.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">View my projects <ArrowDown size={17} aria-hidden="true" /></a>
            <a className="text-link" href="/jospin_ndagano_resume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <aside className="hero-profile" aria-label="Profile">
          <div className="portrait-frame">
            <Image src="/jospin_ndagano.jpg" alt="Jospin Ndagano" width={440} height={434} priority sizes="(max-width: 759px) 88px, 220px" className="portrait" />
            <span className="portrait-corner" aria-hidden="true">+</span>
          </div>
          <div className="profile-caption">
            <span className="profile-name">Jospin Ndagano</span>
            <span className="profile-detail">AI Engineer.</span>
          </div>
        </aside>
      </div>
      <div className="hero-footnote">
        <span className="eyebrow">AI Engineer</span>
        <a href="https://github.com/Jospin6" target="_blank" rel="noreferrer" className="text-link small-link">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
