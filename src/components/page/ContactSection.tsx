import { motion } from "motion/react"
import { ArrowUpRight, Mail } from "lucide-react"

const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const Linkedin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const Twitter = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

export default function ContactSection(){
    return(
        <section id="contact" className="py-32 px-6 md:px-12 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2
              className="text-7xl md:text-9xl mb-12"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Let's Build<br/>
              <span className="text-[#F59E0B] italic">Together</span>
            </h2>

            <p className="text-xl md:text-2xl font-light mb-16 max-w-2xl mx-auto text-[#525252]">
              Open to freelance projects, full-time opportunities, and collaborations. 
              Let's create something extraordinary.
            </p>

            <motion.a
              href="mailto:alex@rivera.dev"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl hover:text-[#F59E0B] transition-colors group mb-12"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              shan@bermudo.dev  
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>

            <div className="flex justify-center gap-8 mt-16 flex-wrap">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/Cyber-shan' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                { icon: Mail, label: 'Email', href: 'mailto:alex@rivera.dev' }
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="p-4 rounded-full border border-[#E5E5E5] hover:border-[#F59E0B] hover:bg-[#F59E0B]/5 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
}