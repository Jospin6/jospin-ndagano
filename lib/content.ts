export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  color: "sage" | "blue" | "sand" | "slate";
  technologies: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  context: string;
  implementation: { title: string; description: string }[];
  flow: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "doc-chat",
    title: "Doc Chat",
    category: "Retrieval-augmented generation",
    headline: "Ask questions about your PDF documents.",
    description: "A PDF question-answering application. Doc Chat uses retrieval-augmented generation to bring relevant document content into the conversation.",
    image: "/projects/chatdoc.png",
    imageWidth: 1366,
    imageHeight: 637,
    imageAlt: "Doc Chat with uploaded PDFs on the left and a conversation about the selected document on the right.",
    color: "blue",
    technologies: ["LangChain", "TypeScript", "Next.js"],
    role: "AI Engineer",
    liveUrl: "https://document-chat-three.vercel.app/",
    githubUrl: "https://github.com/Jospin6/doc-chat",
    context: "I built Doc Chat to let users ask questions about their PDFs instead of searching through them page by page. Users upload a document, select it, and ask questions in a chat interface. The application retrieves relevant content from that document to provide context for the model’s response.",
    implementation: [
      {
        title: "Document retrieval",
        description: "The application uses retrieval-augmented generation (RAG) to connect a question with relevant passages from the uploaded PDF. LangChain connects the retrieval step to answer generation.",
      },
      {
        title: "A document-focused conversation",
        description: "The document list sits alongside the chat, keeping the selected PDF visible during the conversation. Next.js and TypeScript provide the application layer around the retrieval workflow.",
      },
    ],
    flow: ["Upload a PDF", "Ask a question", "Retrieve context", "Generate an answer"],
  },
  {
    id: 2,
    slug: "jenga",
    title: "Jenga",
    category: "Generative AI · Website generation",
    headline: "Generate, preview, and edit websites through conversation.",
    description: "An AI website builder with live previews, conversational editing, and code export. Built with Next.js, FastAPI, and LangGraph.",
    image: "/projects/jenga.png",
    imageWidth: 1366,
    imageHeight: 677,
    imageAlt: "Jenga showing a generated to-do website, its source files, a live preview, and a conversational editing panel.",
    color: "sage",
    technologies: ["Next.js", "FastAPI", "LangGraph"],
    role: "AI Engineer",
    liveUrl: "https://jenga-sive.vercel.app/",
    githubUrl: "https://github.com/Jospin6/jenga",
    context: "Jenga turns a written request into a website that the user can preview, revise, and export. I built it around an iterative workflow: describe the page, inspect the result, then ask for changes in the same conversation.",
    implementation: [
      {
        title: "Generation and conversational editing",
        description: "LangGraph coordinates the AI workflow behind website generation and follow-up edits. FastAPI provides the backend, while Next.js brings the conversation and generated website into one workspace.",
      },
      {
        title: "Preview the result while editing",
        description: "The live preview lets users inspect the generated website as they work. The interface also exposes the generated files, making it possible to move between the visual result and its code.",
      },
      {
        title: "Export the code",
        description: "Users can export the generated website’s source code and continue working on it outside Jenga.",
      },
    ],
    flow: ["Describe a website", "Generate the code", "Preview & revise", "Export the code"],
  },
  {
    id: 3,
    slug: "cvcomet",
    title: "CVComet",
    category: "Generative AI · Job applications",
    headline: "Resumes and cover letters tailored to a specific role.",
    description: "An application that generates a resume and cover letter from a job description, using LangChain, TypeScript, and Next.js.",
    image: "/projects/cvcomet.png",
    imageWidth: 1366,
    imageHeight: 684,
    imageAlt: "CVComet showing a job description and the generated resume, with separate resume and cover letter views.",
    color: "sand",
    technologies: ["LangChain", "TypeScript", "Next.js"],
    role: "AI Engineer",
    liveUrl: "https://my-cv-lyart-two.vercel.app/",
    githubUrl: "https://github.com/Jospin6/CVcomet",
    context: "CVComet helps job seekers prepare application documents for a specific position. A job description provides the context for generating a tailored resume and cover letter. The workspace keeps the role and the generated documents together so the applicant can review them.",
    implementation: [
      {
        title: "Generation guided by the job description",
        description: "LangChain connects the job-description input to the document-generation workflow. The application produces both a resume and a cover letter for the selected role.",
      },
      {
        title: "Review the documents in one workspace",
        description: "The Next.js and TypeScript interface separates the resume and cover letter into their own views, alongside the original job description and application history.",
      },
    ],
    flow: ["Enter the job description", "Generate documents", "Review the resume", "Review the cover letter"],
  },
  {
    id: 4,
    slug: "movie-recommendations",
    title: "Movie Recommendations",
    category: "Machine learning · Recommendation systems",
    headline: "Find similar films with content-based recommendations.",
    description: "A content-based recommendation system that suggests films similar to a selected title, using Python and scikit-learn, with movie posters from TMDB.",
    image: "/projects/movie_rec.png",
    imageWidth: 1366,
    imageHeight: 693,
    imageAlt: "Movie recommendation interface with Avatar selected in the catalogue and similar films displayed with their posters.",
    color: "slate",
    technologies: ["Python", "scikit-learn", "FastAPI", "Next.js"],
    role: "AI Engineer",
    liveUrl: "https://movies-recomendation-jgfn.vercel.app/",
    githubUrl: "https://github.com/Jospin6/movies_recomendation",
    context: "This project lets users choose a film and find other titles with similar content. I used Python and scikit-learn for the recommendation logic, with a searchable catalogue and TMDB posters to make the results easy to browse.",
    implementation: [
      {
        title: "Content-based similarity",
        description: "The system compares movie features and ranks related titles. Recommendations are based on the selected film’s content rather than a user’s viewing history.",
      },
      {
        title: "From model output to an application",
        description: "FastAPI provides the API layer for the recommendation logic, while Next.js provides the web interface. Users select a film and browse the suggested titles with posters supplied by TMDB.",
      },
    ],
    flow: ["Select a film", "Compare movie features", "Rank similar titles", "Display recommendations"],
  },
];

export const articles = [
  {
    title: "Clean Code Basics",
    category: "Code quality",
    publication: "Medium",
    url: "https://medium.com/@jospinndagano1/clean-code-basics-b645a2a4ef72",
  },
  {
    title: "Test Your JavaScript App With Jest",
    category: "Testing",
    publication: "DEV Community",
    url: "https://dev.to/jospin6/test-your-javascript-app-with-jest-314c",
  },
  {
    title: "Introduction to Pair Programming",
    category: "Collaboration",
    publication: "Medium",
    url: "https://medium.com/@jospinndagano1/introduction-to-the-pair-programming-3cb5afe1410c2",
  },
  {
    title: "Motivation and Discipline to Enhance Your Developer Career",
    category: "Career",
    publication: "Medium",
    url: "https://medium.com/@jospinndagano1/motivation-and-discipline-to-enhance-your-developer-career-600398f2abbf",
  },
];
