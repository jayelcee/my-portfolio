import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";

interface HomeProps {
  onSectionClick: (sectionId: string, tab?: string) => void;
}

export default function Home({ onSectionClick }: HomeProps) {
  const socialLinks = [
    { icon: Github, href: personalInfo.github },
    { icon: Linkedin, href: personalInfo.linkedin },
    { icon: Mail, href: `mailto:${personalInfo.email}` },
  ];

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="mb-8">
              <Badge className="instagram-gradient text-white px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Innovate
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">Full-Stack</h1>
            <h1 className="text-5xl md:text-7xl font-bold instagram-gradient-text mb-6 leading-tight">Web Developer</h1>

            <p className="text-lg text-muted-foreground mb-4">{personalInfo.subtitle}</p>

            <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {personalInfo.featuredTech.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-4 py-2 text-sm border-muted-foreground/30 rounded-full"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <Button
                variant="primary"
                onClick={() => onSectionClick("portfolio", "projects")}
                className="flex items-center gap-2 instagram-gradient-hover"
              >
                <span className="text-sm font-medium">Portfolio</span>
                <ExternalLink className="w-5 h-5" />
              </Button>
              <Button
                variant="primary"
                onClick={() => onSectionClick("contact")}
                className="flex items-center gap-2 instagram-gradient-hover"
              >
                <span className="text-sm font-medium">Contact</span>
                <Mail className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-muted-foreground/20 hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block animate-float">
            <div className="relative">
              <DotLottieReact
                src="/WebCoding.lottie"
                loop
                autoplay
                style={{
                  width: "100%",
                  maxWidth: "70rem",
                  minWidth: "40rem",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
