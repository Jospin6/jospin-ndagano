import cvcometImg from "../public/cvcometImg.png";
import filmfusion from "../public/filmfusion.png";
import recipe from "../public/recipe.png";

export interface contentState {
    title: string,
    url: string | null,
    description: string | null,
}

export const contentSkills = [
  {
    title: "TypeScript",
    url: "https://www.typescriptlang.org/",
    description: "Strongly typed JavaScript for scalable applications.",
  },
  {
    title: "Python",
    url: "https://www.python.org/",
    description: "Versatile language for AI, data, and backend development.",
  },
  {
    title: "PyTorch",
    url: "https://pytorch.org/",
    description: "Deep learning framework for research and production.",
  },
  {
    title: "TensorFlow",
    url: "https://www.tensorflow.org/",
    description: "Open-source platform for machine learning and AI.",
  },
  {
    title: "LangChain",
    url: "https://www.langchain.com/",
    description: "Framework for building LLM-powered applications.",
  },
  {
    title: "FastAPI",
    url: "https://fastapi.tiangolo.com/",
    description: "High-performance Python framework for APIs.",
  },
  {
    title: "MLOps",
    url: "https://ml-ops.org/",
    description: "Practices for deploying and maintaining ML models.",
  },
  {
    title: "Next.js",
    url: "https://nextjs.org/",
    description: "React framework for server-side rendering and apps.",
  },
  {
    title: "PostgreSQL",
    url: "https://www.postgresql.org/",
    description: "Advanced open-source relational database system.",
  },
  {
    title: "Docker",
    url: "https://www.docker.com/",
    description: "Containerization platform for app deployment.",
  },
  {
    title: "Kubernetes",
    url: "https://kubernetes.io/",
    description: "Orchestration system for containerized apps.",
  },
];


export const contentAccomplishments = [
  {
    title: "Microcredit Management App",
    url: null,
    description:
      "Built a Microcredit management app for 60+ users managing 20,000+ members' accounts and funds.",
  },
  {
    title: "Mentorship at GDG",
    url: null,
    description:
      "Mentored junior developers in the Google Developer Group community.",
  },
  {
    title: "CVComet SaaS",
    url: null,
    description:
      "Created an AI-powered SaaS that generates CVs and cover letters from job descriptions.",
  },
  {
    title: "ChatDoc SaaS",
    url: null,
    description:
      "Built an AI-powered SaaS enabling users to chat with and query their PDF documents.",
  },
];

export const contentArticles = [
    {
        title: "Clean Code Basics",
        url: "https://medium.com/@jospinndagano1/clean-code-basics-b645a2a4ef72",
        description: "Elevating your coding skills...",
    },
    {
        title: "Motivation and Discipline to enhance your developer career",
        url: "https://medium.com/@jospinndagano1/motivation-and-discipline-to-enhance-your-developer-career-600398f2abbf",
        description: "As a developer, your career trajectory is largely...",
    },
    {
        title: "Introduction to the pair programming",
        url: "https://medium.com/@jospinndagano1/introduction-to-the-pair-programming-3cb5afe1410c2",
        description: "Pair programming is a collaborative software development technique where...",
    },
    {
        title: "Test Your JavaScript App With Jest",
        url: "https://dev.to/jospin6/test-your-javascript-app-with-jest-314c",
        description: "Testing is a crucial part of software development...",
    }
];

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "CVComet",
        description: "An AI-powered CV and cover letter generator. It helps users create professional job application documents in seconds using smart templates and dynamic form handling.",
        image: `${cvcometImg.src}`,
        technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel ai SDK"],
        liveUrl: "https://www.cvcomet.com",
        githubUrl: "https://github.com/Jospin6"
    },
    {
        id: 2,
        title: "FilmFusion",
        description: "A web application using the TMDB API and provide users informations about films and tv shows.",
        image: `${filmfusion.src}`,
        technologies: ["React", "RestAPI", "Tailwind CSS", "TypeScript", "Redux"],
        liveUrl: "https://filmsfusion.netlify.app",
        githubUrl: "https://github.com/Jospin6/film-fusion"
    },
    {
        id: 3,
        title: "Recipe catalogue",
        description: "An app where users can find almost any recipe.",
        image: `${recipe.src}`,
        technologies: ["React", "TypeScript", "Redux"],
        liveUrl: "https://recipe-catalogue-next.netlify.app",
        githubUrl: "https://github.com/Jospin6/recipe-catalogue"
    }
];
