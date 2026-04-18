import { motion } from "motion/react";

export default function Herosection(){
    return(
       <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 pt-20">
        <div className="max-w-7xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div 
              className="inline-block mb-6 px-4 py-2 bg-[#0A0A0A] text-[#FAFAF9] text-sm tracking-widest"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              FULL STACK WEB DEVELOPER
            </motion.div>
            <h1
              className="text-[15vw] md:text-[12vw] leading-[0.85] mb-8"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
            >
              SHAN<br/>
              <span className="text-[#F59E0B]">BERMUDO</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl ml-auto"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Crafting high-performance web applications with modern technologies. 
              Specializing in React, Node.js, and scalable cloud architecture. 
              Turning complex problems into elegant solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 flex gap-6 items-center"
          >
            <a 
              href="#work" 
              className="text-sm tracking-wider hover:text-[#F59E0B] transition-colors flex items-center gap-2 group"
            >
              VIEW PROJECTS
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </a>
            <div className="h-px w-12 bg-[#0A0A0A]" />
            <span className="text-sm tracking-wider text-[#737373]">
              1+ YEARS EXPERIENCE
            </span>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="absolute bottom-0 left-0 h-1 bg-[#F59E0B] origin-left"
          style={{ width: "45%" }}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute top-0 right-0 h-1 bg-[#0A0A0A] origin-right"
          style={{ width: "30%" }}
        />
      </section>
    )
}