"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  Code,
  Database,
  Calendar,
  Star,
  Award,
} from "lucide-react";
import { projects } from "@/lib/data/projects";
import { certificates } from "@/lib/data/certificates";
import { techStackCategories } from "@/lib/data/techstack";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants, tabContentVariants, cardVariants, cardHoverVariants } from "@/lib/animations/variants";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");
  const [showOtherProjects, setShowOtherProjects] = useState(false);

  const tabs = [
    { id: "projects", label: "Projects", icon: Code },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "techstack", label: "Tech Stack", icon: Database },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainerVariants}
        >
          <motion.h2 variants={staggerItemVariants} className="text-4xl md:text-5xl font-bold mb-6 instagram-gradient-text">
            Portfolio Showcase
          </motion.h2>
          <motion.p variants={staggerItemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A snapshot of my development—projects, certifications, and skills that highlight my commitment to continuous improvement.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-0 bg-secondary/20 backdrop-blur-sm rounded-2xl p-2 border border-border/50 max-w-2xl w-full">
            {tabs.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => setActiveTab(id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === id
                    ? "instagram-gradient text-white shadow-lg transform scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/30"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Tech Stack Tab */}
          {activeTab === "techstack" && (
            <motion.div
              key="techstack"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-12"
            >
              {techStackCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h3
                    variants={staggerItemVariants}
                    className="text-2xl font-bold mb-6 instagram-gradient-text"
                  >
                    {category.category}
                  </motion.h3>
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                    variants={staggerContainerVariants}
                  >
                    {category.skills.map((skill, index) => (
                      <motion.div key={index} custom={index} variants={cardVariants}>
                        <Card
                          className="border-border/50 bg-card/50 backdrop-blur-sm text-center group h-full cursor-pointer"
                        >
                          <motion.div
                            className="h-full"
                            whileHover={{ y: -8, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }}
                            transition={{ duration: 0.3 }}
                          >
                            <CardContent className="p-3 md:p-4 lg:p-6">
                              <motion.div
                                className="mb-2 md:mb-3"
                                whileHover={{ scale: 1.1, rotate: 8 }}
                                transition={{ duration: 0.3 }}
                              >
                                {typeof skill.icon === 'string' && skill.icon.endsWith('.png') ? (
                                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center mx-auto">
                                    <Image src={skill.icon} alt={skill.name} width={48} height={48} className="w-full h-full object-contain" />
                                  </div>
                                ) : (
                                  <span className="text-3xl md:text-4xl mb-2 md:mb-3">{skill.icon}</span>
                                )}
                              </motion.div>
                              <h3 className="font-semibold text-foreground text-xs md:text-sm">{skill.name}</h3>
                            </CardContent>
                          </motion.div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Featured Projects */}
              <motion.div
                className="grid lg:grid-cols-2 gap-8 mb-8"
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {projects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <motion.div key={index} custom={index} variants={cardVariants}>
                      <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-card h-full">
                        <motion.div
                          variants={cardHoverVariants}
                          initial="rest"
                          whileHover="hover"
                          className="h-full flex flex-col"
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge className="instagram-gradient text-white">Featured Project</Badge>
                                  <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                  </motion.div>
                                </div>
                                <CardTitle className="text-2xl text-foreground mb-2">{project.title}</CardTitle>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {project.year}
                                  </span>
                                  <Badge variant="outline">{project.category}</Badge>
                                  <Badge variant="default">{project.status}</Badge>
                                </div>
                              </div>
                            </div>
                            <div className="h-34 overflow-y-auto rounded-lg bg-secondary/10">
                              <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                {project.description}
                              </CardDescription>
                            </div>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <div className="mt-4 mb-6">
                              <h4 className="font-semibold mb-3">Technologies Used</h4>
                              <motion.div
                                className="flex flex-wrap gap-2"
                                variants={staggerContainerVariants}
                                initial="hidden"
                                animate="visible"
                              >
                                {project.tech.map((tech, techIndex) => (
                                  <motion.div key={techIndex} variants={staggerItemVariants}>
                                    <Badge variant="secondary" className="bg-secondary/50">
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </div>

                            <div className="flex gap-4">
                              <Button size="sm" variant="primary" asChild>
                                <motion.a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Visit Website
                                </motion.a>
                              </Button>
                            </div>
                          </CardContent>
                        </motion.div>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>

              {/* View Other Projects Button */}
              <motion.div className="flex justify-center mb-8" whileHover={{ scale: 1.05 }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowOtherProjects(!showOtherProjects)}
                  className="group"
                  asChild
                >
                  <motion.button whileTap={{ scale: 0.95 }}>
                    {showOtherProjects ? "Hide" : "View"} Other Projects
                    <motion.div
                      animate={{ rotate: showOtherProjects ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block ml-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </Button>
              </motion.div>

              {/* Other Projects */}
              <AnimatePresence>
                {showOtherProjects && (
                  <motion.div
                    className="grid lg:grid-cols-2 gap-8"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={staggerContainerVariants}
                  >
                    {projects
                      .filter((p) => !p.featured)
                      .map((project, index) => (
                        <motion.div key={index} custom={index} variants={cardVariants}>
                          <Card className="border-border bg-background group h-full">
                            <motion.div
                              variants={cardHoverVariants}
                              initial="rest"
                              whileHover="hover"
                              className="h-full flex flex-col"
                            >
                              <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <CardTitle className="text-foreground mb-2">{project.title}</CardTitle>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                      <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {project.year}
                                      </span>
                                      <Badge variant="outline" className="text-xs">
                                        {project.category}
                                      </Badge>
                                      <Badge
                                        variant={project.status === "Deployed" ? "default" : "secondary"}
                                        className="text-xs"
                                      >
                                        {project.status}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-24 overflow-y-auto rounded-lg bg-secondary/10">
                                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                                    {project.description.substring(0, 300)}
                                  </CardDescription>
                                </div>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                <motion.div className="flex flex-wrap gap-2 mb-6" variants={staggerContainerVariants} initial="hidden" animate="visible">
                                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                                    <motion.div key={techIndex} variants={staggerItemVariants}>
                                      <Badge
                                        variant="secondary"
                                        className="bg-secondary text-secondary-foreground text-xs"
                                      >
                                        {tech}
                                      </Badge>
                                    </motion.div>
                                  ))}
                                  {project.tech.length > 4 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{project.tech.length - 4} more
                                    </Badge>
                                  )}
                                </motion.div>
                                <div className="flex gap-3">
                                  <Button variant="primary" size="sm" asChild>
                                    <motion.a
                                      href={project.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <Github className="w-4 h-4" />
                                      Code
                                    </motion.a>
                                  </Button>
                                  {project.demo !== "#" && (
                                    <Button size="sm" variant="primary" asChild className="hover:bg-primary/90">
                                      <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                        {project.demo.includes("youtube") ? "Video" : "Website"}
                                      </motion.a>
                                    </Button>
                                  )}
                                </div>
                              </CardContent>
                            </motion.div>
                          </Card>
                        </motion.div>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Certificates Tab */}
          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              className="grid md:grid-cols-2 gap-6"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="contents"
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {certificates.map((cert, index) => (
                  <motion.div key={index} custom={index} variants={cardVariants}>
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm group h-full">
                      <motion.div
                        variants={cardHoverVariants}
                        initial="rest"
                        whileHover="hover"
                        className="h-full"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2 instagram-gradient-text">{cert.title}</h3>
                              <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                              <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
                            </div>
                            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.3 }}>
                              <Award className="w-8 h-8 text-muted-foreground" />
                            </motion.div>
                          </div>
                          <motion.div
                            className="flex flex-wrap gap-2 mb-4"
                            variants={staggerContainerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {cert.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                variants={staggerItemVariants}
                                className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </motion.div>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => window.open(cert.link, "_blank")}
                            asChild
                          >
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Credential
                            </motion.button>
                          </Button>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
