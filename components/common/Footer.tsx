import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: personalInfo.github },
    { icon: Linkedin, href: personalInfo.linkedin },
    { icon: Mail, href: `mailto:${personalInfo.email}` },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="font-bold text-xl instagram-gradient-text mb-2">{personalInfo.name}</h3>
          <p className="text-muted-foreground">{personalInfo.title} & Computer Science Graduate</p>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          © 2025 {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">{personalInfo.status}</p>
      </div>
    </footer>
  );
}
