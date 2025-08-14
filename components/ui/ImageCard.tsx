import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from "./hover-card"
import { Card } from "./card"
import Image from "next/image"
import { Project } from "@/lib/content"
import { Button } from "./button"
import Link from "next/link"


export const ImageCard = ({ project }: { project: Project }) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Card key={project.id} className="col-span-1 cursor-pointer overflow-hidden transition-shadow hover:shadow-lg md:col-span-2 h-[250px] mb-3">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={"100"}
                        height={"250"}
                        className="h-[250px] w-full rounded-lg"
                    />
                </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{project.title}</h4>
                    <p className="text-sm"> {project.description} </p>

                    <div className="mt-4 pt-2 border-t flex-wrap">
                        {project.technologies && project.technologies.map(tech => (
                            <Button variant="outline" size="lg" className="gap-2 h-[30px] px-2 m-1">
                                {tech}
                            </Button>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        {project.githubUrl && (
                            <Button asChild size="lg" className="gap-2 h-[30px] border-none bg-blue-500 px-2">
                                <Link href={project.githubUrl}>
                                    Github
                                </Link>
                            </Button>
                        )}
                        {project.liveUrl && (
                            <Button asChild size="lg" className="gap-2 border-none bg-green-500 h-[30px] px-2">
                                <Link href={project.liveUrl}>
                                    Demo
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}