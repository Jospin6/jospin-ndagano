import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: "Jospin Ndagano - Software Engineer | AI & Automation Specialist",
    template: "%s | Jospin Ndagano",
  },
  description:
    "Explore the portfolio of Jospin Ndagano, a software engineer passionate about building impactful AI and web solutions. Discover projects, skills, and services.",
  keywords: [
    "Jospin Ndagano",
    "Software Engineer",
    "Web Developer",
    "AI Developer",
    "Automation Specialist",
    "Next.js Developer",
    "Freelance Developer",
    "Tech Portfolio",
    "SaaS Developer",
    "Full Stack Developer",
    "Langchain Developer",
    "AI Solutions",
    "Web Automation",
    "AI Applications",
    "nuruAI"
  ],
  authors: [{ name: "Jospin Ndagano", url: "https://jospin-ndagano.vercel.app/" }],
  creator: "Jospin Ndagano",
  publisher: "Jospin Ndagano",
  metadataBase: new URL("https://jospin-ndagano.vercel.app/"),
  alternates: {
    canonical: "https://jospin-ndagano.vercel.app/",
  },
  openGraph: {
    title: "Jospin Ndagano - Software Engineer | AI & Web Automation",
    description:
      "Jospin Ndagano is a full-stack developer building AI-powered apps, automations, and modern web experiences.",
    url: "https://jospin-ndagano.vercel.app/",
    siteName: "Jospin Ndagano",
    type: "website",
    locale: "en_US",
     images: [
    {
      url: "https://jospin-ndagano.vercel.app/jospin_ndagano.jpg",
      width: 1200,
      height: 630,
      alt: "Jospin Ndagano Portfolio Preview",
    },
  ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jospin Ndagano - Software Engineer | AI & Web Automation",
    description:
      "Discover the portfolio of Jospin Ndagano - building smart apps with AI, automation, and modern web tools.",
    creator: "@JospinNdagano",
    images: ["https://jospin-ndagano.vercel.app/jospin_ndagano.jpg"],
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-background",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}