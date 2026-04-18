import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./ImageWithFallBack";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link?: string;
  index: number;
}

export function ProjectCard({
  title,
  category,
  year,
  description,
  imageUrl,
  techStack,
  link = "#",
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <a href={link} className="block">
        <div className="relative overflow-hidden bg-[#0A0A0A] aspect-[4/3] mb-6">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover opacity-90"
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#F59E0B]/20 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-[#FAFAF9] flex items-center justify-center"
            >
              <ArrowUpRight className="w-8 h-8 text-[#0A0A0A]" />
            </motion.div>
          </motion.div>

          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0.9, x: 0 }}
            className="absolute top-6 left-6 bg-[#FAFAF9] text-[#0A0A0A] px-4 py-2 text-sm tracking-wider"
          >
            {year}
          </motion.div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3
              className="text-3xl md:text-4xl group-hover:text-[#F59E0B] transition-colors"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              {title}
            </h3>
          </div>

          <p className="text-sm tracking-wider text-[#737373] uppercase">
            {category}
          </p>

          <p className="text-base font-light leading-relaxed text-[#525252]">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 }}
                className="px-3 py-1 text-xs tracking-wider bg-[#F5F5F4] text-[#0A0A0A] border border-[#E5E5E5]"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="h-px bg-[#F59E0B] origin-left mt-6"
        />
      </a>
    </motion.div>
  );
}
