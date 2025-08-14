import { projects } from "@/lib/content";
import { Card } from "../ui/card"
import Image from "next/image";
import { ImageCard } from "../ui/ImageCard";

export const SectionProjects = () => {
    
    return <div className="mt-10">
        <h1 className="text-3xl font-semibold">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            {
                projects.map(project => (
                    <ImageCard project={project}/>
                ))
            }
        </div>
    </div>
}