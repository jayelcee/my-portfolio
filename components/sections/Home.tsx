import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Briefcase } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";
import { motion } from "framer-motion";
import { badgeVariants, buttonVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations/variants";

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
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainerVariants}
          >
            <motion.div className="mb-8" variants={staggerItemVariants} data-scroll-anchor>
              <Badge className="instagram-gradient text-white px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Innovate
              </Badge>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">Frontend | Full Stack</h1>
            </motion.div>
            <motion.div variants={staggerItemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold instagram-gradient-text mb-6 leading-tight"> Web Developer</h1>
            </motion.div>

            <motion.p variants={staggerItemVariants} className="text-lg font-medium text-foreground mb-4">
              {personalInfo.subtitle}
            </motion.p>

            <motion.p variants={staggerItemVariants} className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
              {personalInfo.description}
            </motion.p>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {personalInfo.featuredTech.map((tech, index) => (
                <motion.div key={tech} custom={index} variants={badgeVariants}>
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm border-muted-foreground/30 rounded-full"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex gap-4 mb-8"
            >
              <motion.div variants={staggerItemVariants}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onSectionClick("portfolio", "projects")}
                  className="flex items-center gap-2 instagram-gradient-hover"
                  asChild
                >
                  <motion.button variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <span className="text-sm font-medium">View My Work</span>
                    <Briefcase className="w-5 h-5" />
                  </motion.button>
                </Button>
              </motion.div>
              <motion.div variants={staggerItemVariants}>
                <Button
                  variant="primary"
                  size="lg"
                  className="flex items-center gap-2 instagram-gradient-hover"
                  asChild
                >
                  <a
                    href="https://rxresu.me/jasminec.dev/frontend-developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm font-medium">My CV</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex gap-4"
            >
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-muted-foreground/20 hover:border-primary/50 transition-colors"
                  variants={staggerItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
