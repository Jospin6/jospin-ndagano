// Use the public production domain, never a temporary deployment URL.
const configuredUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://jospin-ndagano.vercel.app"
);

if (
  !["http:", "https:"].includes(configuredUrl.protocol) ||
  configuredUrl.pathname !== "/" ||
  configuredUrl.search || configuredUrl.hash ||
  configuredUrl.username || configuredUrl.password
) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an http(s) origin without a path, query, or credentials.");
}

const siteUrl = configuredUrl.origin;

export const siteConfig = {
  name: "Jospin Ndagano",
  role: "AI Engineer",
  title: "Jospin Ndagano | AI Engineer",
  description:
    "Jospin Ndagano, AI Engineer working across LLMs, RAG, agentic systems, machine learning, AI infrastructure, and intelligent backend architectures.",
  shortDescription:
    "Jospin Ndagano, AI Engineer building reliable AI systems, from model workflows and data pipelines to backend services and infrastructure.",
  url: siteUrl,
  image: `${siteUrl}/jospin_ndagano.jpg`,
  email: "jospinndagano1@gmail.com",
  locale: "en_US",
  keywords: [
    "Jospin Ndagano",
    "Jospin Ndagano portfolio",
    "AI Engineer",
    "AI engineering portfolio",
    "retrieval-augmented generation",
    "generative AI",
    "large language models",
    "agentic systems",
    "AI infrastructure",
    "backend architecture",
    "machine learning",
    "LangChain",
    "LangGraph",
    "Python",
    "TypeScript",
    "FastAPI",
    "Next.js",
  ],
  sameAs: [
    "https://github.com/Jospin6",
    "https://www.linkedin.com/in/jospin-ndagano/",
    "https://twitter.com/JospinNdagano",
    "https://medium.com/@jospinndagano1",
    "https://dev.to/jospin6",
  ],
} as const;
