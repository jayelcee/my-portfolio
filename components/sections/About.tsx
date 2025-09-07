import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Code, Briefcase, Calendar, Award, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";
import { getStats } from "@/lib/data/techstack";
import { projects } from "@/lib/data/projects";
import { certificates } from "@/lib/data/certificates";
import Image from "next/image";

interface AboutProps {
  onSectionClick: (sectionId: string) => void;
  onStatClick: (statLabel: string) => void;
}

export default function About({ onSectionClick, onStatClick }: AboutProps) {
  const stats = getStats(projects, certificates);
  const icons = [Code, Award, Briefcase];
  const statsWithIcons = stats.map((stat, index) => ({
    ...stat,
    icon: icons[index],
  }));

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 instagram-gradient-text">
            About Me
          </h2>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-red-400" />
              <p className="text-lg text-muted-foreground">Design-driven. Code-powered. User-focused.</p>
              <Sparkles className="w-5 h-5 text-red-400" />
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Hello, I&apos;m</span>
              <br />
              <span className="instagram-gradient-text">{personalInfo.name}</span>
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              A Computer Science graduate focusing on full-stack web development. I build clean, responsive interfaces and robust
              backend systems that get the job done. My focus is on delivering reliable, scalable solutions that meet business needs
              and user expectations. Every project I take on is approached with efficiency, clarity, and results in mind.
            </p>

            <div className="p-6 rounded-xl bg-secondary/20 border border-border/50 mb-8">
              <p className="text-muted-foreground italic">&quot;{personalInfo.quote}&quot;</p>
            </div>

            <div className="flex gap-4">
              <Button variant="primary" size="lg" onClick={() => onSectionClick("portfolio")}>
                <div className="flex items-center gap-2">
                  View Projects
                  <Code className="w-4 h-4" />
                </div>
              </Button>
              <Button variant="primary" size="lg" onClick={() => onSectionClick("experience")}>
                <div className="flex items-center gap-2">
                  View Experience
                  <Briefcase className="w-4 h-4" />
                </div>
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src={personalInfo.image}
                alt={personalInfo.name}
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16 animate-slide-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 instagram-gradient-text text-center">Education</h3>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover-lift">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/feutech-logo.png"
                    alt="FEU Tech Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{personalInfo.education.institution}</h4>
                  <p className="instagram-gradient-text font-medium mb-2">{personalInfo.education.degree}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {personalInfo.education.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Grade: {personalInfo.education.grade}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 instagram-gradient-text" />
                      Key Skills Acquired
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.education.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-secondary/50 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Cards Section */}
        <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
          {statsWithIcons.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onStatClick(stat.label)}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-bold mb-2 instagram-gradient-text">{stat.value}</div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">{stat.label}</h3>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                  <ExternalLink className="w-4 h-4 ml-auto mt-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
