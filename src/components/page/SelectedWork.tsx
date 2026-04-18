import { motion } from "motion/react"
import { ProjectCard } from "../figma/ProjectCard";
export default function SelectedWorks(){
 
  const projects = [
    {
      title: "NexCart",
      category: "Full Stack E-Commerce",
      year: "2026",
      description: "Modern e-commerce platform with real-time inventory management, AI-powered product recommendations, and seamless checkout experience. Built for scale with microservices architecture.",
      imageUrl: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NjIzMDI4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      link: "#"
    },
    {
      title: "DataPulse Analytics",
      category: "SaaS Dashboard",
      year: "2025",
      description: "Enterprise analytics platform processing millions of data points daily. Features real-time dashboards, custom reporting, and predictive insights powered by machine learning.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NjIzMDI4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      techStack: ["TypeScript", "Next.js", "MongoDB", "Python", "Docker"],
      link: "#"
    },
    {
      title: "FlexFit",
      category: "Mobile Fitness App",
      year: "2025",
      description: "Cross-platform fitness tracking application with personalized workout plans, nutrition tracking, and social features. Integrated with wearables and health APIs.",
      imageUrl: "https://images.unsplash.com/photo-1769893841740-fc98ce39a3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NjIzMDI4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      techStack: ["React Native", "Firebase", "GraphQL", "Stripe", "TensorFlow"],
      link: "#"
    },
    {
      title: "CryptoVault",
      category: "Blockchain Platform",
      year: "2024",
      description: "Secure cryptocurrency trading platform with advanced charting, portfolio management, and automated trading strategies. Built with enterprise-grade security.",
      imageUrl: "https://images.unsplash.com/photo-1768242079046-c9c633187db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBwbGF0Zm9ybSUyMHNjcmVlbnxlbnwxfHx8fDE3NzYyMzAyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      techStack: ["Vue.js", "Express", "WebSocket", "MySQL", "Kubernetes"],
      link: "#"
    },
    {
      title: "TasteDash",
      category: "Food Delivery Platform",
      year: "2024",
      description: "End-to-end food delivery solution connecting restaurants and customers. Real-time order tracking, intelligent routing, and multi-vendor management system.",
      imageUrl: "https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5JTIwYXBwfGVufDF8fHx8MTc3NjIzMDI5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      techStack: ["Angular", "NestJS", "PostgreSQL", "Redis", "Google Maps API"],
      link: "#"
    },
    {
      title: "TaskFlow Pro",
      category: "Project Management",
      year: "2024",
      description: "Collaborative workspace for distributed teams. Features include kanban boards, time tracking, resource allocation, and automated workflows with third-party integrations.",
      imageUrl: "https://images.unsplash.com/photo-1770368787779-8472da646193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHNvZnR3YXJlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NjIzMDI5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      techStack: ["React", "Django", "Celery", "PostgreSQL", "WebRTC"],
      link: "#"
    }
  ];  
  
  return(
<section id="work" className="py-32 px-6 md:px-12 bg-[#F5F5F4]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-end justify-between mb-8 flex-wrap gap-6">
              <div>
                <h2
                  className="text-7xl md:text-9xl"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                >
                  Selected<br/>
                  <span className="italic">Projects</span>
                </h2>
              </div>
              <motion.p 
                className="text-lg max-w-md font-light text-[#525252]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A curated collection of full-stack applications built with modern technologies and best practices.
              </motion.p>
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-[#0A0A0A] origin-left"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    )
}