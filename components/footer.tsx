import { projects } from "@/lib/content";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="px-4 md:px-0 md:w-6/12 md:m-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="#home">
              <div className="font-bold text-xl mb-4">
                <span className="text-primary">Jospin</span>
                <span className="text-primary/80 pl-2">N.</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Full-stack developer with expertise in modern web technologies and AI solutions.
              Founder of Nuruai, helping businesses automate workflows with AI.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-base mb-4">Projects</h3>
            <ul className="space-y-2">
              {projects.map((item, i) => (
                <li key={i}>
                  <Link
                    href={`${item.liveUrl!.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8">
          <div className="my-4">
            <Link href={"mailto:jospinndagano1@gmail.com"} className="underline text-sm">jospinndagano1@gmail.com</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nuruai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}