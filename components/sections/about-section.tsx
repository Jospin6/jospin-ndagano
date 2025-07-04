"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <Separator className="w-20 mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate full-stack developer and entrepreneur with a focus on creating impactful digital solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="mb-12">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg leading-relaxed">
                  With over 4 years of experience in web development, I've dedicated my career to crafting exceptional user experiences and powerful backend systems. I'm driven by solving complex problems and creating innovative solutions that make a real difference.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  As a developer, I pride myself on writing clean, maintainable code and staying current with emerging technologies. My passion for AI and automation led me to found Nuruai, where I help businesses leverage the power of artificial intelligence to streamline their operations.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center mt-5"
                >
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href={"/jospin_ndagano_resume.pdf"}
                      download
                      className="flex items-center gap-2">
                      <Download className="h-4 w-4" /> Download my Resume
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}