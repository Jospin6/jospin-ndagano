import { contentState } from "@/lib/content";
import Link from "next/link";
import React from "react";

export const SectionItem = ({ title, content }: { title: string, content: contentState[] }) => {
    return (
        <div className=" mt-10">
            <h1 className="text-3xl font-semibold mb-3">{title}</h1>
            <ul className="list-disc pl-5 space-y-1">
                {content.map((el, index) => (
                    <li key={index}>
                        {el.url && <Link href={el.url} className="font-normal underline">{el.title}</Link>}{" "}
                        {el.description && <span className="text-muted-foreground font-normal">{el.description}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};
