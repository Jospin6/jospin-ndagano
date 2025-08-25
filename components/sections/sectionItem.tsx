"use client";

import { contentState } from "@/lib/content";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const SectionItem = ({ title, content }: { title: string, content: contentState[] }) => {
    return (
        <div className=" mt-10">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl font-semibold mb-3">{title}</motion.h1>
            <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="list-disc pl-5 space-y-1">
                {content.map((el, index) => (
                    <li key={index}>
                        {el.url && <Link href={el.url} className="font-normal underline">{el.title}</Link>}{" "}
                        {el.description && <span className="text-muted-foreground font-normal">{el.description}</span>}
                    </li>
                ))}
            </motion.ul>
        </div>
    );
};
