import { motion } from "motion/react"
import { useState } from "react"
import { Code2, Server, Database, Smartphone } from "lucide-react"

export default function TerchStack(){
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);   
    const skills = [
    {
      category: "Frontend",
      icon: Code2,
      technologies: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Motion/Framer"]
    },
    {
      category: "Backend",
      icon: Server,
      technologies: ["Node.js", "Python", "Django", "Express", "NestJS", "GraphQL"]
    },
    {
      category: "Database",
      icon: Database,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Supabase"]
    },
    {
      category: "Mobile & DevOps",
      icon: Smartphone,
      technologies: ["React Native", "Docker", "Kubernetes", "AWS", "CI/CD", "Vercel"]
    }
  ];
   
    return(
    <section className="py-32 px-6 md:px-12 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2
              className="text-6xl md:text-8xl mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Tech<br/>
              <span className="italic text-[#F59E0B]">Stack</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group cursor-default"
              >
                <motion.div
                  animate={{
                    scale: hoveredSkill === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0A0A0A] text-[#FAFAF9] p-8 h-full relative overflow-hidden"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredSkill === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 left-0 right-0 h-1 bg-[#F59E0B] origin-left"
                  />
                  
                  <skill.icon className="w-12 h-12 mb-6 text-[#F59E0B]" />
                  
                  <h3 
                    className="text-2xl mb-6"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                  >
                    {skill.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {skill.technologies.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                        className="text-sm font-light text-[#D4D4D4] flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-[#F59E0B]" />
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
   )
}