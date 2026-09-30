import { ArrowUpRight } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { siteConfig } from "@/lib/site";

export function SectionContact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="shell">
        <p className="eyebrow section-index">04 / Contact</p>
        <div className="contact-grid">
          <h2 id="contact-title">Get in <span className="serif">touch.</span></h2>
        </div>
        <div className="contact-bottom">
          <a className="contact-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight aria-hidden="true" /></a>
          <CopyEmail />
        </div>
      </div>
    </section>
  );
}
