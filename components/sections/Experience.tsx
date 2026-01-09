import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Code, Award } from "lucide-react";
import { experience } from "@/lib/data/experience";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants, cardHoverVariants } from "@/lib/animations/variants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          data-scroll-anchor
          className="text-4xl md:text-5xl font-bold text-center mb-16 p-1 instagram-gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="space-y-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={staggerItemVariants}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                      {exp.logo && (
                        <motion.div
                          className="w-20 h-20 rounded-lg bg-white flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-contain"
                          />
                        </motion.div>
                      )}
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="flex flex-col md:flex-row md:items-start md:justify-between mb-4"
                        >
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
                        </motion.div>

                        {exp.skills && (
                          <motion.div
                            className="mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                              <Code className="w-4 h-4 text-primary" />
                              Skills & Technologies
                            </h4>
                            <motion.div
                              className="flex flex-wrap gap-2"
                              variants={staggerContainerVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.5 }}
                            >
                              {exp.skills.map((skill, skillIndex) => (
                                <motion.div key={skillIndex} variants={staggerItemVariants}>
                                  <Badge variant="secondary" className="bg-secondary/50 text-xs">
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        )}

                        <motion.div
                          className="space-y-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <h4 className="font-medium text-foreground flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            Key Achievements
                          </h4>
                          <motion.div
                            className="grid md:grid-cols-2 gap-3"
                            variants={staggerContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                          >
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                variants={staggerItemVariants}
                                whileHover={{ x: 8 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                              >
                                <span className="text-primary mt-1 text-sm">✓</span>
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
