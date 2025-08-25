"use client";

import { projects } from "@/lib/content";
import { Card } from "../ui/card"
import Image from "next/image";
import { ImageCard } from "../ui/ImageCard";
import { motion } from "framer-motion";

export const SectionProjects = () => {

    return <div className="mt-10">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-semibold">My Projects</motion.h1>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            {
                projects.map(project => (
                    <ImageCard project={project} key={project.id} />
                ))
            }
        </motion.div>
    </div>
}