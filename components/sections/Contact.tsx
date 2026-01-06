import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";
import { motion } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants, cardHoverVariants } from "@/lib/animations/variants";

export default function Contact() {
  const contactMethods = [
    { 
      icon: Mail, 
      title: "Email", 
      value: personalInfo.contact.email, 
      href: `mailto:${personalInfo.contact.email}` 
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: personalInfo.contact.linkedin,
      href: personalInfo.linkedin,
    },
    { 
      icon: Github, 
      title: "GitHub", 
      value: personalInfo.contact.github, 
      href: personalInfo.github 
    },
  ];

  const actionButtons = [
    {
      primary: true,
      href: `mailto:${personalInfo.contact.email}`,
      icon: Mail,
      label: "Send Email",
    },
    {
      primary: false,
      href: personalInfo.linkedin,
      icon: Linkedin,
      label: "Connect on LinkedIn",
      external: true,
    },
    {
      primary: false,
      href: personalInfo.github,
      icon: Github,
      label: "View GitHub",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <motion.div
        className="max-w-4xl mx-auto text-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainerVariants}
      >
        <motion.h2 variants={staggerItemVariants} className="text-3xl md:text-4xl font-bold mb-8 instagram-gradient-text">
          Let&apos;s Work Together
        </motion.h2>
        <motion.p variants={staggerItemVariants} className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I&apos;m actively seeking opportunities to contribute to innovative software engineering projects and grow as a
          full-stack developer. Let&apos;s connect and discuss how we can build something amazing together.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {contactMethods.map(({ icon: Icon, title, value, href }, index) => (
            <motion.div key={index} custom={index} variants={staggerItemVariants}>
              <Card className="border-border bg-background group h-full cursor-pointer">
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="h-full"
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 rounded-full instagram-gradient flex items-center justify-center"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {value}
                    </motion.a>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {actionButtons.map(({ href, icon: Icon, label, external }, index) => (
            <motion.div key={index} custom={index} variants={staggerItemVariants}>
              <Button
                size="lg"
                variant="primary"
                asChild
              >
                <motion.a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {label}
                  </div>
                </motion.a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
