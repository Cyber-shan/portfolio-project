import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

export default function AboutSection(){
    return(
        <section id="about" className="py-32 px-6 md:px-12 bg-[#0A0A0A] text-[#FAFAF9] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0.03 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 -translate-y-1/2 right-0 text-[25vw] pointer-events-none select-none"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          AR
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            <div>
              <h2
                className="text-6xl md:text-7xl mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                About Me
              </h2>
              <div className="space-y-6 text-lg font-light leading-relaxed text-[#D4D4D4]">
                <p>
                  I'm a full-stack web developer based in San Francisco, passionate about building 
                  scalable web applications that solve real-world problems. With 6+ years of experience, 
                  I've worked with startups and enterprises alike.
                </p>
                <p>
                  My approach combines clean code principles with modern architecture patterns. 
                  I believe in writing maintainable code, implementing comprehensive testing, 
                  and delivering products that users love.
                </p>
                <p>
                  Currently exploring serverless architectures, AI integration, and edge computing. 
                  Always learning, always building.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12"
              >
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#F59E0B] text-[#0A0A0A] hover:bg-[#FAFAF9] transition-colors group"
                >
                  <span className="tracking-wider">DOWNLOAD RESUME</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            <div className="space-y-12 mt-12 md:mt-24">
              <div>
                <h3 className="text-sm tracking-widest mb-4 text-[#A3A3A3]">SPECIALIZATIONS</h3>
                <div className="space-y-2">
                  {['Full Stack Development', 'Cloud Architecture', 'API Design', 'Database Optimization', 'DevOps & CI/CD', 'Performance Tuning'].map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="text-xl md:text-2xl font-light flex items-center gap-3 group cursor-default"
                    >
                      <motion.div 
                        className="w-2 h-2 bg-[#F59E0B]"
                        whileHover={{ scale: 1.5, rotate: 45 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="group-hover:text-[#F59E0B] transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-widest mb-4 text-[#A3A3A3]">ACHIEVEMENTS</h3>
                <div className="space-y-3 text-[#D4D4D4] font-light">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    ✦ Led development of platform serving 100k+ users
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    ✦ Reduced API response time by 60% through optimization
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    ✦ Open source contributor with 500+ GitHub stars
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    ✦ Speaker at ReactConf 2025
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
}