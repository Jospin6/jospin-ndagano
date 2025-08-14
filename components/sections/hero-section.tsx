"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownIcon, ArrowRight, Download } from "lucide-react";
import { useTheme } from "next-themes";

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <section id="home" className="pt-3">
      <div className="flex gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <img
            src="/jospin_ndagano.jpg"
            alt="Jospin Ndagano"
            className="w-[100px] h-[100px] object-fill rounded-full shadow-lg"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold  mb-4"
        >
          <div className="text-primary">Jospin Ndagano</div>
          <div className="text-lg font-sans font-medium mt-1">AI Engineer</div>
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-[16px] text-muted-foreground mt-4"
      >
        👋 Hey, I’m an AI Engineer passionate about creating intelligent solutions and modern web apps.
        I transform complex ideas into impactful, scalable realities,
        helping businesses innovate, automate, and thrive in the digital era.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex-wrap mt-4"
      >
        <Button asChild variant="outline" size="lg" className="gap-2 mr-4 h-[30px] px-2">
          <Link href="https://github.com/Jospin6">
            Github
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2 px-2 mr-4 mb-2 h-[30px]">
          <Link href="https://www.linkedin.com/in/jospin-ndagano/">
            LinkedIn
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2 px-2 mr-4 mb-2 h-[30px]">
          <Link href="https://twitter.com/JospinNdagano">
            X
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2 px-2 mr-4 mb-2 h-[30px]">
          <Link href="https://medium.com/@jospinndagano1">
            Medium
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2 px-2 mr-4 mb-2 h-[30px]">
          <Link href="https://dev.to/jospin6">
            {"Dev.to"}
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2 px-2 mr-4 mb-2 h-[30px]">
          <a
            href={"/jospin_ndagano_resume.pdf"}
            download
            className="flex items-center gap-2">
            <Download className="h-4 w-4" /> My Resume
          </a>
        </Button>
      </motion.div>
    </section>
  );
}