import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Code, Award } from "lucide-react";
import { experience } from "@/lib/data/experience";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 instagram-gradient-text">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={index} className="border-border bg-background hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                    {exp.logo && (
                      <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain"
                      />
                      </div>
                    )}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">
                          {exp.company} • {exp.type || "Internship"}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period} {exp.duration && `• ${exp.duration}`}
                          </span>
                          {exp.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                      </div>
                    </div>

                    {exp.skills && (
                      <div className="mb-6">
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4 text-primary" />
                          Skills & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-secondary/50 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                            <span className="text-primary mt-1 text-sm">✓</span>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
