import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/content";

export function WritingSection() {
  return (
    <section id="writing" className="writing-section shell section-space" aria-labelledby="writing-title">
      <div className="section-heading">
        <div><p className="eyebrow section-index">03 / Articles</p><h2 id="writing-title">Technical <span className="serif">writing.</span></h2></div>
      </div>
      <div className="article-list">
        {articles.map((article, index) => (
          <a className="article-row" key={article.url} href={article.url} target="_blank" rel="noreferrer">
            <span className="article-number eyebrow">0{index + 1}</span>
            <div><span className="eyebrow article-category">{article.category}</span><h3>{article.title}</h3></div>
            <span className="article-publication">{article.publication}</span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
