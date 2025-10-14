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
import { techStack } from "@/lib/data/techstack";

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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 instagram-gradient-text">Portfolio Showcase</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A snapshot of my development—projects, certifications, and skills that highlight my commitment to continuous improvement.
          </p>
        </div>

        <div className="flex justify-center mb-12 animate-slide-up">
          <div className="grid grid-cols-3 bg-secondary/20 backdrop-blur-sm rounded-2xl p-2 border border-border/50 max-w-2xl w-full">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === id
                    ? "instagram-gradient text-white shadow-lg transform scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/30"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Tab */}
        {activeTab === "techstack" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((skill, index) => (
                <Card
                  key={index}
                  className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm text-center group animate-scale-in hover-glow"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {typeof skill.icon === "string" && skill.icon.endsWith(".png") ? (
                        <Image src={skill.icon} alt={skill.name} width={40} height={40} className="h-10 mx-auto mb-3" />
                      ) : (
                        <span className="text-4xl mb-3">{skill.icon}</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="animate-fade-in">
            {/* Featured Projects */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="border-2 border-primary/20 bg-gradient-to-br from-background to-card hover-lift"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="instagram-gradient text-white">Featured Project</Badge>
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
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
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-secondary/50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        {/* <Button size="sm" variant="primary" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        </Button> */}
                        <Button size="sm" variant="primary" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Visit Website
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* View Other Projects Button */}
            <div className="flex justify-center mb-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowOtherProjects(!showOtherProjects)}
                className="group"
              >
                {showOtherProjects ? "Hide" : "View"} Other Projects
                <ExternalLink className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                  showOtherProjects ? "rotate-180" : ""
                }`} />
              </Button>
            </div>

            {/* Other Projects */}
            {showOtherProjects && (
              <div className="grid lg:grid-cols-2 gap-8">
                {projects
                  .filter((p) => !p.featured)
                  .map((project, index) => (
                    <Card
                    key={index}
                    className="hover-lift border-border bg-background group animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
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
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-secondary text-secondary-foreground text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tech.length - 4} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="primary" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                        {project.demo !== "#" && (
                          <Button size="sm" variant="primary" asChild className="hover:bg-primary/90">
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              {project.demo.includes("youtube") ? "Video" : "Website"}
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 instagram-gradient-text">{cert.title}</h3>
                      <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
                    </div>
                    <Award className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Credential
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
